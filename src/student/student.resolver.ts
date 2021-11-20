import { StudentInput } from './student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.types';
import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';

@Resolver(() => StudentType)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Mutation(() => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: StudentInput,
  ) {
    return await this.studentService.createStudent(createStudentInput);
  }
  @Query(() => [StudentType])
  async students() {
    return await this.studentService.students();
  }
  @Query(() => [StudentType])
  async student(@Args('id') id: string) {
    return await this.studentService.student(id);
  }
}
