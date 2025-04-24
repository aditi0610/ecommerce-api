import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)private reviewRepo: Repository<Review>,
  ) {}

  create(dto: CreateReviewDto) {
    const review = this.reviewRepo.create(dto);
    return this.reviewRepo.save(review);
  }

  findAll() {
    return this.reviewRepo.find();
  }

  findOne(id: number) {
    return this.reviewRepo.findOne({ where: { id } });
  }

  // update(id: number, updateReviewDto: UpdateReviewDto) {
  //   return this.reviewRepo.update(id, dto);
  // }

  remove(id: number) {
    return this.reviewRepo.delete(id);
  }
}
