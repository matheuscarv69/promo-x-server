import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUsersAndLevelsAccess1620597098425 implements MigrationInterface {
    name = 'CreateUsersAndLevelsAccess1620597098425'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "development"."tb_level_access" ("_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_7eded0fd5eaea21a14b0ca7b42e" PRIMARY KEY ("_id"))`);
        await queryRunner.query(`CREATE TABLE "development"."tb_user" ("_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "level_access" character varying NOT NULL, "chain_store" character varying NOT NULL, CONSTRAINT "UQ_720d6a07210fbd8e4e7fa5c057f" UNIQUE ("email"), CONSTRAINT "PK_ba40790e6eb919d2a0214240104" PRIMARY KEY ("_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "development"."tb_user"`);
        await queryRunner.query(`DROP TABLE "development"."tb_level_access"`);
    }

}
