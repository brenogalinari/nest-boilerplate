import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsModule } from './products/products.module';

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
	ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
