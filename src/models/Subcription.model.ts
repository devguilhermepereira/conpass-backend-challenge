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

@Entity('subscriptions')
class SubscriptionModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        nullable: false,
        type: "text"
    })
    status!: Status;

    @Column({
        default: false,
    })
    enabled!: boolean;

    @CreateDateColumn({type: 'timestamp', update: false})
    createdAt!: Date;

    @UpdateDateColumn({type: 'timestamp', update: true})
    updatedAt!: Date;
}

enum Status {
    trial = 'trial', active = 'active', pastDue = 'pastDue', blocked = 'blocked'
}

export default SubscriptionModel;
