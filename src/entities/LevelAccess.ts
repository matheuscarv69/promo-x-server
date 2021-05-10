import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { User } from "./User";

@ObjectType()
@Entity("tb_level_access")
class LevelAccess {

  @Field(type => ID)
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Field()
  @Column()
  name: string;

  @Field(type => User)
  @ManyToOne(type => User, user => user.levelsAccess)
  user: User;

}

export { LevelAccess };