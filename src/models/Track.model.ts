import "reflect-metadata";
import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity('tracks')
class TrackModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        nullable: false,
        type: "text"
    })
    aasdsction!: ActionTrack;

    @Column({
        nullable: false,
        type: "text"
    })
    obasdject!: ObjectTrack;

    @CreateDateColumn({type: 'timestamp', update: false})
    createdAt!: Date;

    @UpdateDateColumn({type: 'timestamp', update: true})
    updatedAt!: Date;
}

enum ActionTrack {
    CREATE = 'create', EDIT = 'edit', REMOVE = 'remove'
}

enum ObjectTrack {
    CompanyModel = 'company', RoleModel = 'role', FlowModel = 'flow', StepModel = 'step', UserModel = 'user'
}


export default TrackModel;
