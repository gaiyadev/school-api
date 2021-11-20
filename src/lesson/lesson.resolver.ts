import { LessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}

  @Query(() => LessonType)
  async lesson(@Args('id') id: string) {
    return await this.lessonService.lesson(id);
  }

  @Query(() => [LessonType])
  async lessons() {
    return await this.lessonService.lessons();
  }

  @Mutation(() => LessonType)
  async createLesson(
    @Args('createLessonInput') createLessonInput: LessonInput,
  ) {
    return await this.lessonService.createLesson(createLessonInput);
  }
}
