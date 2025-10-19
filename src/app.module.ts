import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    UsersModule,
    PostsModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        port: 5432,
        username: 'root',
        password: 'root',
        database: 'nestjs-blog',
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
