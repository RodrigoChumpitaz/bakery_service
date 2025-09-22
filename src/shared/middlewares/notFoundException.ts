import { NextFunction, Request, Response } from "express";
import { response } from "inel_auth_library";
import { StatusCode } from "inel_auth_library/dist/src/types";

export class NotFoundPathException {
  constructor() {
    NotFoundPathException.handleNotFoundPath = NotFoundPathException.handleNotFoundPath.bind(this);
  }

  static handleNotFoundPath(req: Request, res: Response, next: NextFunction) {
    return response(res, `Path: ${req.method} ${req.url} not found.`, StatusCode.NOT_FOUND, NotFoundPathException.name);
  }
}