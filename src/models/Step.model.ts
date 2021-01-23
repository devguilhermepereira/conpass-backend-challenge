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

@Entity('steps')
class StepModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        length: 250,
        nullable: false
    })
    innerText!: string;

    /**
     * @params {string} ['popover', 'modal', 'hotspot', 'video', 'notification']
     */
    @Column({
        length: 255,
        nullable: true
    })
    type!: string;

    @Column({
        default: false,
    })
    enabled!: boolean;

    @CreateDateColumn({type: 'timestamp', update: false})
    createdAt!: Date;

    @UpdateDateColumn({type: 'timestamp', update: true})
    updatedAt!: Date;
}

export default StepModel;
