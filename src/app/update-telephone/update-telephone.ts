import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Telephone } from '../model/telephone.model';
import { TelephoneService } from '../services/telephoneservice';
import { Statut } from '../model/statut.model';

@Component({
  selector: 'app-update-telephone',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule,],

  templateUrl: './update-telephone.html',
  styles: ``
})
export class UpdateTelephone implements OnInit {
  currentTelephone = new Telephone();
  Status!: Statut[];
  updatedSatId!: number;
  myForm!: FormGroup;
  telephones!: Telephone


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private telephoneService: TelephoneService, private formBuilder: FormBuilder
  ) {


  }

  ngOnInit() {

    this.Status = this.telephoneService.listeCategories();
    console.log(this.currentTelephone);
    this.currentTelephone = this.telephoneService.consulterTelephone(this.activatedRoute.snapshot.params['id']);
    this.updatedSatId = this.currentTelephone.statut.idSat;
    this.myForm = this.formBuilder.group({
      idtel: [this.currentTelephone.idtel, Validators.required],
      logoTel: [this.currentTelephone.logoTel, Validators.required],
      nomTel: [this.currentTelephone.nomTel, Validators.required],
      desTEL: [this.currentTelephone.desTEL, Validators.required],
      prixTel: [this.currentTelephone.prixTel, [Validators.required, Validators.min(0)]],
      dateCreation: [this.currentTelephone.dateCreation, Validators.required],
      statut: [this.currentTelephone.statut.idSat, Validators.required],
      emailtel: [this.currentTelephone.emailtel, [Validators.required, Validators.email]],
    }, { updateOn: 'change' });

  }
  updateTelephone() {
    const formValues = this.myForm.value;
    this.currentTelephone.idtel = formValues.idtel;
    this.currentTelephone.logoTel = formValues.logoTel;
    this.currentTelephone.nomTel = formValues.nomTel;
    this.currentTelephone.desTEL = formValues.desTEL;
    this.currentTelephone.prixTel = formValues.prixTel;
    this.currentTelephone.dateCreation = formValues.dateCreation;
    this.currentTelephone.emailtel = formValues.emailtel;
    this.currentTelephone.statut = this.telephoneService.consulterCategorie(formValues.statut);
    this.currentTelephone.statut = this.telephoneService.consulterCategorie(this.updatedSatId);

    this.telephoneService.updateTelephone(this.currentTelephone);
    this.router.navigate(['telephoness']);
  }
}
