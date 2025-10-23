import { Injectable } from '@angular/core';
import { Telephone } from '../model/telephone.model';
import { Statut } from '../model/statut.model';
import { of, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TelephoneService {

    telephones: Telephone[] = [];
    telephone!: Telephone;
    Statuts!: Statut[];
    telephoneRecherche!: Telephone[];






    constructor() {
        this.Statuts = [{ idSat: 1, nomSat: "en stock" },
        { idSat: 2, nomSat: "en commande 48h" },
        {
            idSat: 3, nomSat: "Rupture"
        }, { idSat: 4, nomSat: "Bientôt disponible" },
        ];
        this.telephones = [
            { idtel: 1, logoTel: "assets/img/samsung.png", nomTel: "Samsung Galaxy S21", desTEL: "Smartphone haut de gamme", prixTel: 2800, dateCreation: new Date("2021-03-15"), statut: { idSat: 1, nomSat: "en stock" } }
            ,
            { idtel: 2, logoTel: "assets/img/iphone.png", nomTel: "iPhone 13", desTEL: "Dernier modèle Apple", prixTel: 4200, dateCreation: new Date("2021-09-24"), statut: { idSat: 2, nomSat: "en commande 48h" } },
            { idtel: 3, logoTel: "assets/img/oppo.png", nomTel: "Oppo Reno 6", desTEL: "Téléphone milieu de gamme", prixTel: 1600, dateCreation: new Date("2021-06-10"), statut: { idSat: 3, nomSat: "rupture" } }
        ];
    }

    listetelephones(): Telephone[] {
        return this.telephones;
    }

    consulterTelephone(id: number): Telephone {
        this.telephone = this.telephones.find(f => f.idtel == id)!;
        return this.telephone;

    }

    ajouterTelephone(tel: Telephone) {
        this.telephones.push(tel);
    }

    supprimerTelephone(tel: Telephone) {
        const index = this.telephones.indexOf(tel, 0);
        if (index > -1) {
            this.telephones.splice(index, 1);
        }
    }
    trierTelephone() {
        this.telephones = this.telephones.sort((n1, n2) => {
            if (n1.idtel! > n2.idtel!) {
                return 1;
            }
            if (n1.idtel! < n2.idtel!) {
                return -1;
            }
            return 0;
        });
    }
    listeCategories(): Statut[] {
        return this.Statuts;
    }
    consulterCategorie(id: number): Statut {
        return this.Statuts.find(cat => cat.idSat == id)!;
    }


    updateTelephone(f: Telephone) {
        console.log(f);
        this.supprimerTelephone(f);
        this.ajouterTelephone(f);
        this.trierTelephone();
    }
    rechercheParStatut(IdStatus: number): Telephone[] {
        this.telephoneRecherche = [];
        this.telephones.forEach(curr => {
            if (curr.statut.idSat == IdStatus) {
                this.telephoneRecherche.push(curr);
            }
        })
        return this.telephoneRecherche;
    }

    listtel1(): Observable<Telephone[]> {
        return of(this.telephones);
    }





}

