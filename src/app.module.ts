import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';
import { Auth } from './auth';
import { UsersModule } from './users/users.module';
import { Users } from './users';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
	ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      models: [],
	  autoLoadModels: true,
	  synchronize: false
    }),
	AuthModule,
	UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, Auth, Users],
})
export class AppModule {}
