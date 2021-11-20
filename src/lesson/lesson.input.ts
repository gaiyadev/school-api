import { InputType, Field } from '@nestjs/graphql';
import { IsDateString, IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType()
export class LessonInput {
  @Field()
  @MinLength(1)
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field()
  @IsNotEmpty()
  @IsDateString()
  startDate: string;

  @Field()
  @IsNotEmpty()
  @IsDateString()
  endDate: string;
}
