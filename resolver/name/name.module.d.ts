import { NestModule, MiddlewareConsumer } from '@nestjs/common';
export declare class Name implements NestModule {
    configure(consumer: MiddlewareConsumer): void;
}
