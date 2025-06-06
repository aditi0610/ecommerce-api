import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
  ){}

  create(dto: CreateCategoryDto) {
    const category = this.categoryRepo.create(dto);
    return this.categoryRepo.save(category);
  }

  findAll() {
    return this.categoryRepo.find({ relations: ['products'] });
  }

  findOne(id: number) {
    return this.categoryRepo.findOne({ where: { id }, relations: ['products'] });
  }

  update(id: number, dto: UpdateCategoryDto) {
    return this.categoryRepo.update(id, dto);
  }

  remove(id: number) {
    return this.categoryRepo.delete(id);
  }
}
