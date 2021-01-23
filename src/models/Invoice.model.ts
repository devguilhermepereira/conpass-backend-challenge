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

@Entity('invoices')
class InvoiceModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: 'timestamp',
        nullable: true,
        name: 'due_date'
    })
    dueDate!: Date;

    @Column({
        type: 'timestamp',
        nullable: true,
        name: 'paied_date'
    })
    paiedDate!: Date;

    @Column({
        default: false,
    })
    enabled!: boolean;

    @CreateDateColumn({type: 'timestamp', update: false})
    createdAt!: Date;

    @UpdateDateColumn({type: 'timestamp', update: true})
    updatedAt!: Date;
}

export default InvoiceModel;
