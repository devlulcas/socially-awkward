import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { ZodValidation } from './common/pipes/zod';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { envSchema } from './common/validation/env';
import { JwtModule } from '@nestjs/jwt';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validate: envSchema.parse,
    }),
    JwtModule.register({
      global: true,
      secret: (function () {
        console.log('JWT_SECRET', process.env.JWT_SECRET);
        return process.env.JWT_SECRET;
      })(),
      signOptions: { expiresIn: '1d' },
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AuthModule,
    UsersModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [{ provide: APP_PIPE, useClass: ZodValidation }],
})
export class AppModule {}
