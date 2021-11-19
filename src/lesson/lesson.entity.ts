import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity({ name: 'lessons' })
export class Lesson {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;
}
