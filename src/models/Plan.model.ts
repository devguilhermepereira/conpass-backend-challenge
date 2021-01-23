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

@Entity('plans')
class PlanModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        length: 250,
        nullable: false
    })
    name!: string;

    @Column({
        type: "numeric",
        precision: 8,
        scale: 2,
        nullable: false
    })
    value!: number;

    @Column({
        default: false,
    })
    enabled!: boolean;

    @CreateDateColumn({type: 'timestamp', update: false})
    createdAt!: Date;

    @UpdateDateColumn({type: 'timestamp', update: true})
    updatedAt!: Date;
}

export default PlanModel;
