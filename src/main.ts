import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/http-exception.filter';
import { HttpResppnseInterceptor } from './common/http-response.interceptor';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // 设置全局路由前缀
    app.setGlobalPrefix('api');

    // 自定义全局响应拦截器
    app.useGlobalInterceptors(new HttpResppnseInterceptor());

    // 自定义全局异常过滤器
    app.useGlobalFilters(new HttpExceptionFilter());
    await app.listen(3000);
}
bootstrap();
