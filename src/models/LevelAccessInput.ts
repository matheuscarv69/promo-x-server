import { Field, InputType } from "type-graphql";

import { LevelAccess } from "../entities/LevelAccess";

@InputType({description: "New Levels Access Data"})
export class LevelAccessInput{

  @Field()
  name: string[];

}