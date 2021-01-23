import {MigrationInterface, QueryRunner} from "typeorm";

export class InitProject1611421455824 implements MigrationInterface {
    name = 'InitProject1611421455824'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tracks" DROP COLUMN "action"`);
        await queryRunner.query(`DROP TYPE "public"."tracks_action_enum"`);
        await queryRunner.query(`ALTER TABLE "tracks" DROP COLUMN "object"`);
        await queryRunner.query(`DROP TYPE "public"."tracks_object_enum"`);
        await queryRunner.query(`ALTER TABLE "tracks" ADD "aasdsction" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tracks" ADD "obasdject" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tracks" DROP COLUMN "obasdject"`);
        await queryRunner.query(`ALTER TABLE "tracks" DROP COLUMN "aasdsction"`);
        await queryRunner.query(`CREATE TYPE "public"."tracks_object_enum" AS ENUM('company', 'role', 'flow', 'step', 'user')`);
        await queryRunner.query(`ALTER TABLE "tracks" ADD "object" "tracks_object_enum" NOT NULL`);
        await queryRunner.query(`CREATE TYPE "public"."tracks_action_enum" AS ENUM('create', 'edit', 'remove')`);
        await queryRunner.query(`ALTER TABLE "tracks" ADD "action" "tracks_action_enum" NOT NULL`);
    }

}
