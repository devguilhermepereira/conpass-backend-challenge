import {MigrationInterface, QueryRunner} from "typeorm";

export class companyOwnerRequired1611425308184 implements MigrationInterface {
    name = 'companyOwnerRequired1611425308184'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP CONSTRAINT "FK_df63e1563bbd91b428b5c50d8ad"`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "owner_id" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "companies"."owner_id" IS NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ADD CONSTRAINT "FK_df63e1563bbd91b428b5c50d8ad" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP CONSTRAINT "FK_df63e1563bbd91b428b5c50d8ad"`);
        await queryRunner.query(`COMMENT ON COLUMN "companies"."owner_id" IS NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "owner_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ADD CONSTRAINT "FK_df63e1563bbd91b428b5c50d8ad" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
