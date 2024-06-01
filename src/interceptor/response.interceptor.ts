import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        // 正常响应的数据，状态码修正为200
        const response = context.switchToHttp().getResponse();
        response.status(200);
        return {
          code: 200,
          success: true,
          data: data || null,
        };
      }),
    );
  }
}
