import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}

  @Query(() => LessonType)
  lesson() {
    return {
      id: 'ddddd',
      name: 'tes',
      startDate: 'new Date().toISOString',
      endDate: 'new Date().toISOString',
    };
  }

  @Mutation(() => LessonType)
  async createLesson(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ) {
    console.log(name);
    return await this.lessonService.createLesson(name, startDate, endDate);
  }
}
