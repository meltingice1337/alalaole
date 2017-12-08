import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Location } from './Location';

export enum Gender {
    Male, Female
}

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public password: string;

    @Column()
    public email: string;

    @Column()
    public name: string;

    @OneToOne((type) => Location, (location) => location.user, {
        cascadeInsert: true
    })
    @JoinColumn()
    public location: Location;

    @Column()
    public radius: number;

    @Column()
    public age: number;

    @Column()
    public gender: Gender;

    @Column({ nullable: true })
    public token?: string;

    constructor(
        password: string,
        email: string,
        name: string,
        location: Location,
        radius: number,
        age: number,
        gender: Gender) {
        this.password = password;
        this.email = email;
        this.name = name;
        this.location = location;
        this.radius = radius;
        this.age = age;
        this.gender = gender;
    }
}
