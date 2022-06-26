"use strict"

Object.defineProperty(exports, "__esModule", { value: true })

const dangerouslyDisableDefaultSrc = Symbol("dangerouslyDisableDefaultSrc")
const DEFAULT_DIRECTIVES = {
	"default-src": ["'self'"],
	"base-uri": ["'self'"],
	"block-all-mixed-content": [],
	"font-src": ["'self'", "https:", "data:"],
	"form-action": ["'self'"],
	"frame-ancestors": ["'self'"],
	"img-src": ["'self'", "data:"],
	"object-src": ["'none'"],
	"script-src": ["'self'"],
	"script-src-attr": ["'none'"],
	"style-src": ["'self'", "https:", "'unsafe-inline'"],
	"upgrade-insecure-requests": []
}
const getDefaultDirectives = () => Object.assign({}, DEFAULT_DIRECTIVES)
const dashify = str => str.replace(/[A-Z]/g, capitalLetter => "-" + capitalLetter.toLowerCase())
const isDirectiveValueInvalid = directiveValue => /;|,/.test(directiveValue)
const has = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key)
function normalizeDirectives(options) {
	const defaultDirectives = getDefaultDirectives()
	const { useDefaults = true, directives: rawDirectives = defaultDirectives } = options
	const result = new Map()
	const directiveNamesSeen = new Set()
	const directivesExplicitlyDisabled = new Set()
	for (const rawDirectiveName in rawDirectives) {
		if (!has(rawDirectives, rawDirectiveName)) {
			continue
		}
		if (rawDirectiveName.length === 0 || /[^a-zA-Z0-9-]/.test(rawDirectiveName)) {
			throw new Error(`Content-Security-Policy received an invalid directive name ${JSON.stringify(rawDirectiveName)}`)
		}
		const directiveName = dashify(rawDirectiveName)
		if (directiveNamesSeen.has(directiveName)) {
			throw new Error(`Content-Security-Policy received a duplicate directive ${JSON.stringify(directiveName)}`)
		}
		directiveNamesSeen.add(directiveName)
		const rawDirectiveValue = rawDirectives[rawDirectiveName]
		let directiveValue
		if (rawDirectiveValue === null) {
			if (directiveName === "default-src") {
				throw new Error("Content-Security-Policy needs a default-src but it was set to `null`. If you really want to disable it, set it to `contentSecurityPolicy.dangerouslyDisableDefaultSrc`.")
			}
			directivesExplicitlyDisabled.add(directiveName)
			continue
		} else if (typeof rawDirectiveValue === "string") {
			directiveValue = [rawDirectiveValue]
		} else if (!rawDirectiveValue) {
			throw new Error(`Content-Security-Policy received an invalid directive value for ${JSON.stringify(directiveName)}`)
		} else if (rawDirectiveValue === dangerouslyDisableDefaultSrc) {
			if (directiveName === "default-src") {
				directivesExplicitlyDisabled.add("default-src")
				continue
			} else {
				throw new Error(`Content-Security-Policy: tried to disable ${JSON.stringify(directiveName)} as if it were default-src; simply omit the key`)
			}
		} else {
			directiveValue = rawDirectiveValue
		}
		for (const element of directiveValue) {
			if (typeof element === "string" && isDirectiveValueInvalid(element)) {
				throw new Error(`Content-Security-Policy received an invalid directive value for ${JSON.stringify(directiveName)}`)
			}
		}
		result.set(directiveName, directiveValue)
	}
	if (useDefaults) {
		Object.entries(defaultDirectives).forEach(([defaultDirectiveName, defaultDirectiveValue]) => {
			if (!result.has(defaultDirectiveName) && !directivesExplicitlyDisabled.has(defaultDirectiveName)) {
				result.set(defaultDirectiveName, defaultDirectiveValue)
			}
		})
	}
	if (!result.size) {
		throw new Error("Content-Security-Policy has no directives. Either set some or disable the header")
	}
	if (!result.has("default-src") && !directivesExplicitlyDisabled.has("default-src")) {
		throw new Error("Content-Security-Policy needs a default-src but none was provided. If you really want to disable it, set it to `contentSecurityPolicy.dangerouslyDisableDefaultSrc`.")
	}
	return result
}
function getHeaderValue(req, res, normalizedDirectives) {
	let err
	const result = []
	normalizedDirectives.forEach((rawDirectiveValue, directiveName) => {
		let directiveValue = ""
		for (const element of rawDirectiveValue) {
			directiveValue += " " + (element instanceof Function ? element(req, res) : element)
		}
		if (!directiveValue) {
			result.push(directiveName)
		} else if (isDirectiveValueInvalid(directiveValue)) {
			err = new Error(`Content-Security-Policy received an invalid directive value for ${JSON.stringify(directiveName)}`)
		} else {
			result.push(`${directiveName}${directiveValue}`)
		}
	})
	return err ? err : result.join(";")
}
const contentSecurityPolicy = function contentSecurityPolicy(options = {}) {
	const headerName = options.reportOnly ? "Content-Security-Policy-Report-Only" : "Content-Security-Policy"
	const normalizedDirectives = normalizeDirectives(options)
	return function contentSecurityPolicyMiddleware(req, res, next) {
		const result = getHeaderValue(req, res, normalizedDirectives)
		if (result instanceof Error) {
			next(result)
		} else {
			res.setHeader(headerName, result)
			next()
		}
	}
}
contentSecurityPolicy.getDefaultDirectives = getDefaultDirectives
contentSecurityPolicy.dangerouslyDisableDefaultSrc = dangerouslyDisableDefaultSrc

const ALLOWED_POLICIES$2 = new Set(["require-corp", "credentialless"])
function getHeaderValueFromOptions$7({ policy = "require-corp" }) {
	if (ALLOWED_POLICIES$2.has(policy)) {
		return policy
	} else {
		throw new Error(`Cross-Origin-Embedder-Policy does not support the ${JSON.stringify(policy)} policy`)
	}
}
function crossOriginEmbedderPolicy(options = {}) {
	const headerValue = getHeaderValueFromOptions$7(options)
	return function crossOriginEmbedderPolicyMiddleware(_req, res, next) {
		res.setHeader("Cross-Origin-Embedder-Policy", headerValue)
		next()
	}
}

const ALLOWED_POLICIES$1 = new Set(["same-origin", "same-origin-allow-popups", "unsafe-none"])
function getHeaderValueFromOptions$6({ policy = "same-origin" }) {
	if (ALLOWED_POLICIES$1.has(policy)) {
		return policy
	} else {
		throw new Error(`Cross-Origin-Opener-Policy does not support the ${JSON.stringify(policy)} policy`)
	}
}
function crossOriginOpenerPolicy(options = {}) {
	const headerValue = getHeaderValueFromOptions$6(options)
	return function crossOriginOpenerPolicyMiddleware(_req, res, next) {
		res.setHeader("Cross-Origin-Opener-Policy", headerValue)
		next()
	}
}

const ALLOWED_POLICIES = new Set(["same-origin", "same-site", "cross-origin"])
function getHeaderValueFromOptions$5({ policy = "same-origin" }) {
	if (ALLOWED_POLICIES.has(policy)) {
		return policy
	} else {
		throw new Error(`Cross-Origin-Resource-Policy does not support the ${JSON.stringify(policy)} policy`)
	}
}
function crossOriginResourcePolicy(options = {}) {
	const headerValue = getHeaderValueFromOptions$5(options)
	return function crossOriginResourcePolicyMiddleware(_req, res, next) {
		res.setHeader("Cross-Origin-Resource-Policy", headerValue)
		next()
	}
}

function parseMaxAge$1(value = 0) {
	if (value >= 0 && Number.isFinite(value)) {
		return Math.floor(value)
	} else {
		throw new Error(`Expect-CT: ${JSON.stringify(value)} is not a valid value for maxAge. Please choose a positive integer.`)
	}
}
function getHeaderValueFromOptions$4(options) {
	const directives = [`max-age=${parseMaxAge$1(options.maxAge)}`]
	if (options.enforce) {
		directives.push("enforce")
	}
	if (options.reportUri) {
		directives.push(`report-uri="${options.reportUri}"`)
	}
	return directives.join(", ")
}
function expectCt(options = {}) {
	const headerValue = getHeaderValueFromOptions$4(options)
	return function expectCtMiddleware(_req, res, next) {
		res.setHeader("Expect-CT", headerValue)
		next()
	}
}

function originAgentCluster() {
	return function originAgentClusterMiddleware(_req, res, next) {
		res.setHeader("Origin-Agent-Cluster", "?1")
		next()
	}
}

const ALLOWED_TOKENS = new Set(["no-referrer", "no-referrer-when-downgrade", "same-origin", "origin", "strict-origin", "origin-when-cross-origin", "strict-origin-when-cross-origin", "unsafe-url", ""])
function getHeaderValueFromOptions$3({ policy = ["no-referrer"] }) {
	const tokens = typeof policy === "string" ? [policy] : policy
	if (tokens.length === 0) {
		throw new Error("Referrer-Policy received no policy tokens")
	}
	const tokensSeen = new Set()
	tokens.forEach(token => {
		if (!ALLOWED_TOKENS.has(token)) {
			throw new Error(`Referrer-Policy received an unexpected policy token ${JSON.stringify(token)}`)
		} else if (tokensSeen.has(token)) {
			throw new Error(`Referrer-Policy received a duplicate policy token ${JSON.stringify(token)}`)
		}
		tokensSeen.add(token)
	})
	return tokens.join(",")
}
function referrerPolicy(options = {}) {
	const headerValue = getHeaderValueFromOptions$3(options)
	return function referrerPolicyMiddleware(_req, res, next) {
		res.setHeader("Referrer-Policy", headerValue)
		next()
	}
}

const DEFAULT_MAX_AGE = 180 * 24 * 60 * 60
function parseMaxAge(value = DEFAULT_MAX_AGE) {
	if (value >= 0 && Number.isFinite(value)) {
		return Math.floor(value)
	} else {
		throw new Error(`Strict-Transport-Security: ${JSON.stringify(value)} is not a valid value for maxAge. Please choose a positive integer.`)
	}
}
function getHeaderValueFromOptions$2(options) {
	if ("maxage" in options) {
		throw new Error("Strict-Transport-Security received an unsupported property, `maxage`. Did you mean to pass `maxAge`?")
	}
	if ("includeSubdomains" in options) {
		console.warn('Strict-Transport-Security middleware should use `includeSubDomains` instead of `includeSubdomains`. (The correct one has an uppercase "D".)')
	}
	if ("setIf" in options) {
		console.warn("Strict-Transport-Security middleware no longer supports the `setIf` parameter. See the documentation and <https://github.com/helmetjs/helmet/wiki/Conditionally-using-middleware> if you need help replicating this behavior.")
	}
	const directives = [`max-age=${parseMaxAge(options.maxAge)}`]
	if (options.includeSubDomains === undefined || options.includeSubDomains) {
		directives.push("includeSubDomains")
	}
	if (options.preload) {
		directives.push("preload")
	}
	return directives.join("; ")
}
function strictTransportSecurity(options = {}) {
	const headerValue = getHeaderValueFromOptions$2(options)
	return function strictTransportSecurityMiddleware(_req, res, next) {
		res.setHeader("Strict-Transport-Security", headerValue)
		next()
	}
}

function xContentTypeOptions() {
	return function xContentTypeOptionsMiddleware(_req, res, next) {
		res.setHeader("X-Content-Type-Options", "nosniff")
		next()
	}
}

function xDnsPrefetchControl(options = {}) {
	const headerValue = options.allow ? "on" : "off"
	return function xDnsPrefetchControlMiddleware(_req, res, next) {
		res.setHeader("X-DNS-Prefetch-Control", headerValue)
		next()
	}
}

function xDownloadOptions() {
	return function xDownloadOptionsMiddleware(_req, res, next) {
		res.setHeader("X-Download-Options", "noopen")
		next()
	}
}

function getHeaderValueFromOptions$1({ action = "SAMEORIGIN" }) {
	const normalizedAction = typeof action === "string" ? action.toUpperCase() : action
	switch (normalizedAction) {
		case "SAME-ORIGIN":
			return "SAMEORIGIN"
		case "DENY":
		case "SAMEORIGIN":
			return normalizedAction
		case "ALLOW-FROM":
			throw new Error("X-Frame-Options no longer supports `ALLOW-FROM` due to poor browser support. See <https://github.com/helmetjs/helmet/wiki/How-to-use-X%E2%80%93Frame%E2%80%93Options's-%60ALLOW%E2%80%93FROM%60-directive> for more info.")
		default:
			throw new Error(`X-Frame-Options received an invalid action ${JSON.stringify(action)}`)
	}
}
function xFrameOptions(options = {}) {
	const headerValue = getHeaderValueFromOptions$1(options)
	return function xFrameOptionsMiddleware(_req, res, next) {
		res.setHeader("X-Frame-Options", headerValue)
		next()
	}
}

const ALLOWED_PERMITTED_POLICIES = new Set(["none", "master-only", "by-content-type", "all"])
function getHeaderValueFromOptions({ permittedPolicies = "none" }) {
	if (ALLOWED_PERMITTED_POLICIES.has(permittedPolicies)) {
		return permittedPolicies
	} else {
		throw new Error(`X-Permitted-Cross-Domain-Policies does not support ${JSON.stringify(permittedPolicies)}`)
	}
}
function xPermittedCrossDomainPolicies(options = {}) {
	const headerValue = getHeaderValueFromOptions(options)
	return function xPermittedCrossDomainPoliciesMiddleware(_req, res, next) {
		res.setHeader("X-Permitted-Cross-Domain-Policies", headerValue)
		next()
	}
}

function xPoweredBy() {
	return function xPoweredByMiddleware(_req, res, next) {
		res.removeHeader("X-Powered-By")
		next()
	}
}

function xXssProtection() {
	return function xXssProtectionMiddleware(_req, res, next) {
		res.setHeader("X-XSS-Protection", "0")
		next()
	}
}

function getArgs(option, middlewareConfig = {}) {
	switch (option) {
		case undefined:
		case true:
			return []
		case false:
			return null
		default:
			if (middlewareConfig.takesOptions === false) {
				console.warn(`${middlewareConfig.name} does not take options. Remove the property to silence this warning.`)
				return []
			} else {
				return [option]
			}
	}
}
function getMiddlewareFunctionsFromOptions(options) {
	const result = []
	const contentSecurityPolicyArgs = getArgs(options.contentSecurityPolicy)
	if (contentSecurityPolicyArgs) {
		result.push(contentSecurityPolicy(...contentSecurityPolicyArgs))
	}
	const crossOriginEmbedderPolicyArgs = getArgs(options.crossOriginEmbedderPolicy, {
		name: "crossOriginEmbedderPolicy",
		takesOptions: false
	})
	if (crossOriginEmbedderPolicyArgs) {
		result.push(crossOriginEmbedderPolicy())
	}
	const crossOriginOpenerPolicyArgs = getArgs(options.crossOriginOpenerPolicy)
	if (crossOriginOpenerPolicyArgs) {
		result.push(crossOriginOpenerPolicy(...crossOriginOpenerPolicyArgs))
	}
	const crossOriginResourcePolicyArgs = getArgs(options.crossOriginResourcePolicy)
	if (crossOriginResourcePolicyArgs) {
		result.push(crossOriginResourcePolicy(...crossOriginResourcePolicyArgs))
	}
	const xDnsPrefetchControlArgs = getArgs(options.dnsPrefetchControl)
	if (xDnsPrefetchControlArgs) {
		result.push(xDnsPrefetchControl(...xDnsPrefetchControlArgs))
	}
	const expectCtArgs = getArgs(options.expectCt)
	if (expectCtArgs) {
		result.push(expectCt(...expectCtArgs))
	}
	const xFrameOptionsArgs = getArgs(options.frameguard)
	if (xFrameOptionsArgs) {
		result.push(xFrameOptions(...xFrameOptionsArgs))
	}
	const xPoweredByArgs = getArgs(options.hidePoweredBy, {
		name: "hidePoweredBy",
		takesOptions: false
	})
	if (xPoweredByArgs) {
		result.push(xPoweredBy())
	}
	const strictTransportSecurityArgs = getArgs(options.hsts)
	if (strictTransportSecurityArgs) {
		result.push(strictTransportSecurity(...strictTransportSecurityArgs))
	}
	const xDownloadOptionsArgs = getArgs(options.ieNoOpen, {
		name: "ieNoOpen",
		takesOptions: false
	})
	if (xDownloadOptionsArgs) {
		result.push(xDownloadOptions())
	}
	const xContentTypeOptionsArgs = getArgs(options.noSniff, {
		name: "noSniff",
		takesOptions: false
	})
	if (xContentTypeOptionsArgs) {
		result.push(xContentTypeOptions())
	}
	const originAgentClusterArgs = getArgs(options.originAgentCluster, {
		name: "originAgentCluster",
		takesOptions: false
	})
	if (originAgentClusterArgs) {
		result.push(originAgentCluster())
	}
	const xPermittedCrossDomainPoliciesArgs = getArgs(options.permittedCrossDomainPolicies)
	if (xPermittedCrossDomainPoliciesArgs) {
		result.push(xPermittedCrossDomainPolicies(...xPermittedCrossDomainPoliciesArgs))
	}
	const referrerPolicyArgs = getArgs(options.referrerPolicy)
	if (referrerPolicyArgs) {
		result.push(referrerPolicy(...referrerPolicyArgs))
	}
	const xXssProtectionArgs = getArgs(options.xssFilter, {
		name: "xssFilter",
		takesOptions: false
	})
	if (xXssProtectionArgs) {
		result.push(xXssProtection())
	}
	return result
}
const helmet = Object.assign(
	function helmet(options = {}) {
		var _a
		if (((_a = options.constructor) === null || _a === void 0 ? void 0 : _a.name) === "IncomingMessage") {
			throw new Error("It appears you have done something like `app.use(helmet)`, but it should be `app.use(helmet())`.")
		}
		const middlewareFunctions = getMiddlewareFunctionsFromOptions(options)
		return function helmetMiddleware(req, res, next) {
			let middlewareIndex = 0
			;(function internalNext(err) {
				if (err) {
					next(err)
					return
				}
				const middlewareFunction = middlewareFunctions[middlewareIndex]
				if (middlewareFunction) {
					middlewareIndex++
					middlewareFunction(req, res, internalNext)
				} else {
					next()
				}
			})()
		}
	},
	{
		contentSecurityPolicy,
		crossOriginEmbedderPolicy,
		crossOriginOpenerPolicy,
		crossOriginResourcePolicy,
		dnsPrefetchControl: xDnsPrefetchControl,
		expectCt,
		frameguard: xFrameOptions,
		hidePoweredBy: xPoweredBy,
		hsts: strictTransportSecurity,
		ieNoOpen: xDownloadOptions,
		noSniff: xContentTypeOptions,
		originAgentCluster,
		permittedCrossDomainPolicies: xPermittedCrossDomainPolicies,
		referrerPolicy,
		xssFilter: xXssProtection
	}
)
exports = helmet
module.exports = helmet

exports["default"] = helmet
