
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Telephone } from '../model/telephone.model';
import { TelephoneService } from '../services/telephoneservice';
import { Statut } from '../model/statut.model';



@Component({
  selector: 'app-recherchepar-statut',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './recherchepar-statut.html',
  styleUrl: './recherchepar-statut.css'
})
export class RechercheparStatut implements OnInit {
  telephones!: Telephone[];
  Status!: Statut[];
  IdStatus!: number;


  constructor(private telephoneService: TelephoneService) {


  }
  ngOnInit(): void {
    this.Status = this.telephoneService.listeCategories();
    this.telephones = [];

  }
  onChange(): void {
    console.log(this.IdStatus);
    this.telephones = this.telephoneService.rechercheParStatut(this.IdStatus);
  }
  supprimerTelephone(tel: Telephone) {
    console.log(tel);
    let conf = confirm("Voulez-vous vraiment supprimer ce téléphone ?");
    if (conf) {
      this.telephoneService.supprimerTelephone(tel);
       this.telephones = this.telephoneService.rechercheParStatut(this.IdStatus);

      
    }
  }


}
