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

@Entity('activities')
class ActivityModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        nullable: false,
        type: "text"
    })
    type!: Types;

    @CreateDateColumn({type: 'timestamp', update: false})
    createdAt!: Date;

    @UpdateDateColumn({type: 'timestamp', update: true})
    updatedAt!: Date;
}

enum Types {
    StartFlow = 'StartFlow', EndFlow = 'EndFlow', CancelFlow = 'CancelFlow', StartStep = 'StartStep',EndStep = 'EndStep', CancelStep = 'CancelStep'
}

export default ActivityModel;
