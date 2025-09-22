import { NextFunction, Request, Response } from 'express';
import { response } from 'inel_auth_library';
import { StatusCode } from 'inel_auth_library/dist/src/types';
import z from 'zod';

export function validateRequest<T>(schema: z.ZodType<T>) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const { error } = schema.safeParse(req.body || req.query || req.params);
            console.log("Validation error:", error);
            if(error) {
                const errorMessage = error.issues.map(issue => issue.message).join(". ");
                return response(res, errorMessage, StatusCode.BAD_REQUEST, 'ValidationError')
            }
            next();
        } catch (error) {
            console.log("Error:::", error.message)
            return response(res, error.message, StatusCode.INTERNAL_SERVER_ERROR, 'InternalServerError')
        }
    }
}