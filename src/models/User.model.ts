import "reflect-metadata";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import CompanyModel from "./Company.model";

@Entity('users')
class UserModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        length: 250,
        nullable: false
    })
    name!: string;

    @Column({
        length: 100,
        nullable: false,
        unique: true
    })
    email!: string;

    @Column({
        length: 255,
        nullable: false
    })
    password!: string;

    @Column({
        default: true,
    })
    enabled!: boolean;

    @ManyToOne(type => CompanyModel)
    @JoinColumn({name: "company_id", referencedColumnName: "id"})
    company!: CompanyModel;

    @CreateDateColumn({ type: 'timestamp', update: false })
    createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp', update: true })
    updatedAt!: Date;
}
export default UserModel;
