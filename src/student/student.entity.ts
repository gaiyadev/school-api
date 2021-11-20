import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity({ name: 'students' })
export class Student {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;
}
