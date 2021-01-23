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

@Entity('viewers')
class ViewerModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        nullable: true
    })
    uuid!: number;

    @Column({
        length: 250,
        nullable: true,
        name: 'custom_fields'
    })
    customFields!: string;

    @Column({
        default: false,
    })
    enabled!: boolean;

    @CreateDateColumn({type: 'timestamp', update: false})
    createdAt!: Date;

    @UpdateDateColumn({type: 'timestamp', update: true})
    updatedAt!: Date;
}

export default ViewerModel;
