import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Filiacao } from "./filiacao.entity";

@Entity()
export class Login {
    @PrimaryGeneratedColumn()
    id_login: number;
    
    @Column({ unique: true, length: 40 })
    email: string;

    @Column({ length: 60 })
    senha: string;

    @Column({length: 40})
    nome: string;

    // @OneToMany(() => Filiacao, (filiacao) => filiacao.login)
    // filiacao: Filiacao[];
}