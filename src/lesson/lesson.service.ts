import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { v4 as uuidv4 } from 'uuid';
import { LessonInput } from './lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private readonly lessonReposiory: Repository<Lesson>,
  ) {}

  async createLesson(createLessonInput: LessonInput): Promise<Lesson> {
    const { name, startDate, endDate } = createLessonInput;
    const lessonE = await this.lessonReposiory.findOne({ name: name });

    if (lessonE) {
      throw new ConflictException('Lesson already exist');
    }

    const lesson = this.lessonReposiory.create({
      name,
      id: uuidv4(),
      startDate,
      endDate,
    });
    try {
      return await this.lessonReposiory.save(lesson);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async lesson(id: string): Promise<Lesson> {
    const lesson = await this.lessonReposiory.findOne({ id });
    if (!lesson) {
      throw new NotFoundException('Lesson not found');
    }

    return lesson;
  }

  async lessons(): Promise<Lesson[]> {
    return await this.lessonReposiory.find();
  }
}
