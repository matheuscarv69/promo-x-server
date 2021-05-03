import { Field, ID, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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

}

export { User };