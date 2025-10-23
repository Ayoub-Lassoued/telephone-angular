import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Telephone } from '../model/telephone.model';
import { TelephoneService } from '../services/telephoneservice';
import { Statut } from '../model/statut.model';

@Component({
  selector: 'app-update-telephone',
  standalone: true,
  imports: [FormsModule, CommonModule],

  templateUrl: './update-telephone.html',
  styles: ``
})
export class UpdateTelephone implements OnInit {
  currentTelephone = new Telephone();
  Status!: Statut[];
  updatedSatId!: number;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router, 
    private telephoneService: TelephoneService
  ) { }

  ngOnInit() {

    this.Status = this.telephoneService.listeCategories();
    console.log(this.currentTelephone);
    this.currentTelephone = this.telephoneService.consulterTelephone(this.activatedRoute.snapshot.params['id']);
    this.updatedSatId = this.currentTelephone.statut.idSat;


  }

  updateTelephone() {
    this.currentTelephone.statut = this.telephoneService.consulterCategorie(this.updatedSatId);

    this.telephoneService.updateTelephone(this.currentTelephone);
    this.router.navigate(['telephoness']);
  }
}
