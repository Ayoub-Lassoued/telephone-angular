import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Telephone } from '../model/telephone.model';
import { TelephoneService } from '../services/telephoneservice';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-telephones',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './telephone.html',
  styleUrl: './telephone.css'
})
export class Telephoness implements OnInit {
  telephones!: Telephone[];

  constructor(private telephoneService: TelephoneService) {

    this.telephones = telephoneService.listetelephones();
  }

  ngOnInit() { }

  supprimerTelephone(tel: Telephone) {
    console.log(tel);
    let conf = confirm("Voulez-vous vraiment supprimer ce téléphone ?");
    if (conf) {
      this.telephoneService.supprimerTelephone(tel);

      this.telephones = this.telephoneService.telephones;
    }
  }
}


