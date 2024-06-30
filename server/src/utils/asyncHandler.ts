import { Request, Response, NextFunction } from "express";


interface RequestWithUser extends Request {
    user?: {
        _id: string;
    };
}

// Define a type for the requestHandler function
type RequestHandler = (req: RequestWithUser, res: Response, next: NextFunction) => void | Promise<void>;

const asyncHandler = (requestHandler: RequestHandler) => {
    return (req: Request, res: Response, next: NextFunction) => {
      Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    };
};

export { asyncHandler };