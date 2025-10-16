import { Statut } from "./statut.model";

export class Telephone {
    idtel?: number;
    logoTel?: string;
    nomTel?: string;
    desTEL?: string;
    prixTel?: number;
    dateCreation?: Date;
    statut!: Statut;

}
