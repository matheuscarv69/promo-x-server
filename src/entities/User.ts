import { Field, ID, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm"
import bcrypt from 'bcryptjs';

@ObjectType()
@Entity("users")
class User {

  @Field(type => ID)
  @PrimaryGeneratedColumn('uuid')
  _id?: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

  @Column()
  password: string;

  @Field()
  @Column()
  level_access: string;

  @Field()
  @Column()
  chain_store: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

}

export { User };