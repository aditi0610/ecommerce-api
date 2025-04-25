import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private orderRepo: Repository<Order>,
  ){}
  create(dto: CreateOrderDto) {
    const order = this.orderRepo.create(dto);
    return this.orderRepo.save(order);
  }

  findAll() {
    return this.orderRepo.find();
  }

  findOne(id: number) {
    return this.orderRepo.findOne({ where: { id }});
  }

  update(id: number, dto: UpdateOrderDto) {
    return this.orderRepo.update(id, dto);
  }

  remove(id: number) {
    return this.orderRepo.delete(id);
  }
}
