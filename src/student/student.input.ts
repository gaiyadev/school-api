import { InputType, Field } from '@nestjs/graphql';
import { IsDateString, IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType()
export class StudentInput {
  @Field()
  @MinLength(1)
  @IsNotEmpty()
  @IsString()
  firstname: string;

  @Field()
  @IsNotEmpty()
  @MinLength(1)
  lastname: string;
}
