import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './filter/all.filter';
import { BullModule } from '@nestjs/bull';
import { PvModule } from './pv/pv.module';
import { PerformanceModule } from './performance/performance.module';
import { PvDurationModule } from './pv-duration/pv-duration.module';
import { ErrorModule } from './error/error.module';
import { ClickModule } from './click/click.module';
import { IntersectionModule } from './intersection/intersection.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [
    // config
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.local',
    }),
    // MongoDB
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: `mongodb://${configService.get<string>('MONGODB_URL')}/`,
        user: configService.get<string>('MONGODB_USER'),
        pass: configService.get<string>('MONGODB_PASS'),
        dbName: configService.get<string>('MONGODB_NAME'),
      }),
    }),
    // Redis
    RedisModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        config: {
          host: configService.get('REDIS_HOST'),
          port: parseInt(configService.get('REDIS_PORT'), 10),
          password: configService.get('REDIS_PASSWORD'),
        },
      }),
    }),
    // 队列
    BullModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        redis: {
          host: configService.get('REDIS_HOST'),
          port: parseInt(configService.get('REDIS_PORT'), 10),
          password: configService.get('REDIS_PASSWORD'),
        },
      }),
    }),
    PvModule,
    PerformanceModule,
    PvDurationModule,
    ErrorModule,
    ClickModule,
    IntersectionModule,
    EventModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
