import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
export declare class FirstMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void): void;
}
