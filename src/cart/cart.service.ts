import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart) private cartRepo: Repository<Cart>,
  ){}

  create(dto: CreateCartDto) {
    const cart = this.cartRepo.create(dto);
    return this.cartRepo.save(cart)
  }

  findAll() {
    return this.cartRepo.find();
  }

  findOne(id: number) {
    return this.cartRepo.findOne({ where: { id }});
  }

  update(id: number, dto: UpdateCartDto) {
    return this.cartRepo.update(id, dto);
  }

  remove(id: number) {
    return this.cartRepo.delete(id);
  }
}
