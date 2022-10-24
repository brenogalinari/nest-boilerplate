import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { Auth } from './auth';
import { UsersModule } from './users/users.module';
import { Users } from './users';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_learning',
      models: [],
	  autoLoadModels: true,
	  synchronize: true
    }),
	ProductsModule,
	AuthModule,
	UsersModule
  ],
  controllers: [AppController],
  providers: [AppService, Auth, Users],
})
export class AppModule {}
