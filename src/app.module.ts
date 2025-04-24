import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { CartModule } from './cart/cart.module';
import { PaymentsModule } from './payments/payments.module';
import { ReviewsModule } from './reviews/reviews.module';
import * as dotenv from 'dotenv'
import { User } from './users/entities/user.entity';
import { Cart } from './cart/entities/cart.entity';
import { Order } from './orders/entities/order.entity';
import { Payment } from './payments/entities/payment.entity';
import { Category } from './categories/entities/category.entity';
import { Review } from './reviews/entities/review.entity';
import { Product } from './products/entities/product.entity';
import { AuthModule } from './auth/auth.module';
dotenv.config();


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: process.env.DATABASE_PASS,
      database: process.env.DATABASE_NAME, // fixed quote
      entities: [User, Cart, Order, Payment, Category, Review, Product],
      synchronize: true,
    }),
    UsersModule,
    ProductsModule,
    CategoriesModule,
    OrdersModule,
    CartModule,
    PaymentsModule,
    ReviewsModule,
    AuthModule,
  ],

})
export class AppModule {}
