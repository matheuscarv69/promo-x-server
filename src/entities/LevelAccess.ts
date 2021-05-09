import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("tb_level_access")
class LevelAccess {

  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  name: string;

}

export { LevelAccess };