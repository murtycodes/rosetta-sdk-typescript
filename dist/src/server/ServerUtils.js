"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerUtils = void 0;
/**
 * Server side utility methods.
 */
class ServerUtils {
    static errorHandler() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return (err, req, res, next) => {
            const defaultErrorObject = {
                code: err.code || 0,
                message: err.message || 'Unknown Error',
                retriable: false,
            };
            return res.status(err.status || 500).json(err.body || defaultErrorObject);
        };
    }
}
exports.ServerUtils = ServerUtils;
ServerUtils.asyncMiddleware = (fn) => (req, res, next) => {
    try {
        Promise.resolve(fn(req, res))
            .then((response) => res.json(response))
            .catch((e) => {
            // next(e) should do the trick, but for some reason it doesn't on the agent???
            return ServerUtils.errorHandler()(e, req, res, next);
        });
    }
    catch (e) {
        // next(e) should do the trick, but for some reason it doesn't on the agent???
        return ServerUtils.errorHandler()(e, req, res, next);
    }
};
