import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products.controller';
import { ProductService } from './products.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './products.model';

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
	SequelizeModule.forFeature([Product])
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductService],
})
export class AppModule {}
