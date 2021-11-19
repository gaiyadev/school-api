import { LessonType } from './lesson.type';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver(() => LessonType)
export class LessonResolver {
  @Query(() => LessonType)
  lesson() {
    return {
      id: 'ddddd',
      name: 'tes',
      startDate: 'new Date().toISOString',
      endDate: 'new Date().toISOString',
    };
  }
}
