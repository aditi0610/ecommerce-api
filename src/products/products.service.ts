import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
  ){}

  async create(dto: CreateProductDto) {
    const category = await this.categoryRepo.findOne({ where: { id: dto.categoryId}});
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    const product = this.productRepo.create({...dto, category });
    return this.productRepo.save(product);
  }

  findAll() {
    return this.productRepo.find({ relations: ['category'] });
  }

  findOne(id: number) {
    return this.productRepo.findOne({ where: { id }, relations: ['category'] });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return this.productRepo.delete(id);
  }
}
