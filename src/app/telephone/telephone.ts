import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Telephone } from '../model/telephone.model';
import { TelephoneService } from '../services/telephoneservice';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-telephones',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './telephone.html',
  styleUrl: './telephone.css'
})
export class Telephoness implements OnInit {
  telephones!: Telephone[];

  constructor(private telephoneService: TelephoneService) {
    // Charger la liste des téléphones dès la création du component
    this.telephones = telephoneService.listetelephones();
  }

  ngOnInit() { }

  supprimerTelephone(tel: Telephone) {
    console.log(tel);
    let conf = confirm("Voulez-vous vraiment supprimer ce téléphone ?");
    if (conf) {
      this.telephoneService.supprimerTelephone(tel);
      // Mettre à jour la liste après suppression
      this.telephones = this.telephoneService.telephones;
    }
  }
}


