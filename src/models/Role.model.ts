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

@Entity('roles')
class RoleModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        length: 100,
        nullable: false
    })
    name!: string;

    @Column({
        length: 255,
        nullable: true
    })
    description!: string;

    @Column({
        default: false,
    })
    enabled!: boolean;

    @CreateDateColumn({ type: 'timestamp', update: false })
    createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp', update: true })
    updatedAt!: Date;
}
export default RoleModel;
