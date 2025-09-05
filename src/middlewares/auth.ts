import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "XD";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.header("Authorization");
    const token = authHeader?.startsWith("Bearer ")? authHeader.substring(7) : authHeader;

    if(!token) {
        return res.status(401);
    }
    jwt.verify(token, JWT_SECRET);
    next();
}