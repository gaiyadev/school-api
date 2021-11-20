import { StudentInput } from './student.input';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async createStudent(createStudentInput: StudentInput) {
    const { firstname, lastname } = createStudentInput;

    const student = this.studentRepository.create({
      id: uuidv4(),
      firstname,
      lastname,
    });

    try {
      return this.studentRepository.save(student);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async students(): Promise<Student[]> {
    return await this.studentRepository.find();
  }

  async student(id: string): Promise<Student> {
    return await this.studentRepository.findOne({ id });
  }
}
