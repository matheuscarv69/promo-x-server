import { Field, ID, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, OneToMany } from "typeorm"
import bcrypt from 'bcryptjs';

import { LevelAccess } from "./LevelAccess";

@ObjectType()
@Entity("tb_user")
class User {

  @Field(type => ID)
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Field(type => [LevelAccess])
  @OneToMany(type => LevelAccess, levelAccess => levelAccess.user, { eager: true })
  levelsAccess: LevelAccess[];

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