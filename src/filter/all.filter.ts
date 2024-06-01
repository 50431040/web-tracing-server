import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

// 捕获所有异常
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // 响应的状态码（统一返回200/500）
    const responseStatus =
      exception instanceof HttpException
        ? 200
        : HttpStatus.INTERNAL_SERVER_ERROR;

    // 响应数据中的状态码
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const message =
      exception instanceof HttpException
        ? exception.message
        : 'internet server error';

    // 异常日志
    new Logger('HttpExceptionFilter').error(
      request.url,
      exception.message,
      exception.stack,
    );

    response.status(responseStatus).json({
      code: status,
      message,
      success: false,
    });
  }
}
