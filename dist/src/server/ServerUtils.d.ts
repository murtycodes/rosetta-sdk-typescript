import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
export declare type AsyncHandler = (req: Request, res: Response) => Promise<unknown>;
/**
 * Server side utility methods.
 */
export declare class ServerUtils {
    static asyncMiddleware: (fn: AsyncHandler) => (req: Request, res: Response, next: NextFunction) => void;
    static errorHandler(): ErrorRequestHandler;
}
//# sourceMappingURL=ServerUtils.d.ts.map