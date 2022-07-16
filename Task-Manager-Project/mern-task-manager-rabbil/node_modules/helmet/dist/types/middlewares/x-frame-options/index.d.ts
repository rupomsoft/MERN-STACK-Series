import { IncomingMessage, ServerResponse } from "http"
export interface XFrameOptionsOptions {
	action?:
		| "DENY"
		| "SAMEORIGIN"
		| (string & {
				_?: never
		  })
}
declare function xFrameOptions(options?: Readonly<XFrameOptionsOptions>): (_req: IncomingMessage, res: ServerResponse, next: () => void) => void
export default xFrameOptions
