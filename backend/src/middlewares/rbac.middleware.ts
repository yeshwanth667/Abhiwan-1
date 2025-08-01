import { Request, Response, NextFunction } from 'express';

export const authorizeRole = (allowedRoles: ('manager' | 'employee')[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Forbidden: Access is denied' });
    }
    next();
  };
};