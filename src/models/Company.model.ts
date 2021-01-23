import "reflect-metadata";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import UserModel from "./User.model";

@Entity('companies')
class CompanyModel extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        length: 250,
        nullable: false
    })
    name!: string;

    @Column({
        length: 255,
        nullable: true
    })
    description!: string;

    @OneToOne(type => UserModel, {nullable: false})
    @JoinColumn({name: "owner_id", referencedColumnName: "id"})
    owner!: UserModel;

    @CreateDateColumn({type: 'timestamp', update: false})
    createdAt!: Date;

    @UpdateDateColumn({type: 'timestamp', update: true})
    updatedAt!: Date;
}

export default CompanyModel;
