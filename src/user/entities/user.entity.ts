import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50,
        comment: '用户名',
    })
    username: string;

    @Column({
        comment: '性别',
    })
    sex: string;

    @Column({
        comment: '年龄',
    })
    age: string;
    @Column({
        comment: '手机号',
    })
    phone: string;
    @Column({
        comment: '备注',
    })
    remark: string;

    @CreateDateColumn({
        comment: '创建时间',
    })
    createTime: Date;

    @UpdateDateColumn({
        comment: '更新时间',
    })
    updateTime: Date;
}
