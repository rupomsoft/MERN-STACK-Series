import { IncomingMessage, ServerResponse } from "http"
export interface CrossOriginEmbedderPolicyOptions {
	policy?: string
}
declare function crossOriginEmbedderPolicy(options?: Readonly<CrossOriginEmbedderPolicyOptions>): (_req: IncomingMessage, res: ServerResponse, next: () => void) => void
export default crossOriginEmbedderPolicy
