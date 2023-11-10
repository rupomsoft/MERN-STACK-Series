/// <reference types="node" />
import { IncomingMessage, ServerResponse } from "http"
import contentSecurityPolicy, { ContentSecurityPolicyOptions } from "./middlewares/content-security-policy/index.js"
import crossOriginEmbedderPolicy from "./middlewares/cross-origin-embedder-policy/index.js"
import crossOriginOpenerPolicy, { CrossOriginOpenerPolicyOptions } from "./middlewares/cross-origin-opener-policy/index.js"
import crossOriginResourcePolicy, { CrossOriginResourcePolicyOptions } from "./middlewares/cross-origin-resource-policy/index.js"
import expectCt, { ExpectCtOptions } from "./middlewares/expect-ct/index.js"
import originAgentCluster from "./middlewares/origin-agent-cluster/index.js"
import referrerPolicy, { ReferrerPolicyOptions } from "./middlewares/referrer-policy/index.js"
import strictTransportSecurity, { StrictTransportSecurityOptions } from "./middlewares/strict-transport-security/index.js"
import xContentTypeOptions from "./middlewares/x-content-type-options/index.js"
import xDnsPrefetchControl, { XDnsPrefetchControlOptions } from "./middlewares/x-dns-prefetch-control/index.js"
import xDownloadOptions from "./middlewares/x-download-options/index.js"
import xFrameOptions, { XFrameOptionsOptions } from "./middlewares/x-frame-options/index.js"
import xPermittedCrossDomainPolicies, { XPermittedCrossDomainPoliciesOptions } from "./middlewares/x-permitted-cross-domain-policies/index.js"
import xPoweredBy from "./middlewares/x-powered-by/index.js"
import xXssProtection from "./middlewares/x-xss-protection/index.js"
export interface HelmetOptions {
	contentSecurityPolicy?: ContentSecurityPolicyOptions | boolean
	crossOriginEmbedderPolicy?: boolean
	crossOriginOpenerPolicy?: CrossOriginOpenerPolicyOptions | boolean
	crossOriginResourcePolicy?: CrossOriginResourcePolicyOptions | boolean
	dnsPrefetchControl?: XDnsPrefetchControlOptions | boolean
	expectCt?: ExpectCtOptions | boolean
	frameguard?: XFrameOptionsOptions | boolean
	hidePoweredBy?: boolean
	hsts?: StrictTransportSecurityOptions | boolean
	ieNoOpen?: boolean
	noSniff?: boolean
	originAgentCluster?: boolean
	permittedCrossDomainPolicies?: XPermittedCrossDomainPoliciesOptions | boolean
	referrerPolicy?: ReferrerPolicyOptions | boolean
	xssFilter?: boolean
}
interface Helmet {
	(options?: Readonly<HelmetOptions>): (req: IncomingMessage, res: ServerResponse, next: (err?: unknown) => void) => void
	contentSecurityPolicy: typeof contentSecurityPolicy
	crossOriginEmbedderPolicy: typeof crossOriginEmbedderPolicy
	crossOriginOpenerPolicy: typeof crossOriginOpenerPolicy
	crossOriginResourcePolicy: typeof crossOriginResourcePolicy
	dnsPrefetchControl: typeof xDnsPrefetchControl
	expectCt: typeof expectCt
	frameguard: typeof xFrameOptions
	hidePoweredBy: typeof xPoweredBy
	hsts: typeof strictTransportSecurity
	ieNoOpen: typeof xDownloadOptions
	noSniff: typeof xContentTypeOptions
	originAgentCluster: typeof originAgentCluster
	permittedCrossDomainPolicies: typeof xPermittedCrossDomainPolicies
	referrerPolicy: typeof referrerPolicy
	xssFilter: typeof xXssProtection
}
declare const helmet: Helmet
export default helmet
export { contentSecurityPolicy, crossOriginEmbedderPolicy, crossOriginOpenerPolicy, crossOriginResourcePolicy, expectCt, originAgentCluster, referrerPolicy, strictTransportSecurity as hsts, xContentTypeOptions as noSniff, xDnsPrefetchControl as dnsPrefetchControl, xDownloadOptions as ieNoOpen, xFrameOptions as frameguard, xPermittedCrossDomainPolicies as permittedCrossDomainPolicies, xPoweredBy as hidePoweredBy, xXssProtection as xssFilter }
