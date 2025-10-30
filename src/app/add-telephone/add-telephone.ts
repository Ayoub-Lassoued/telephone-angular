import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';   
import { Telephone } from '../model/telephone.model';
import { TelephoneService } from '../services/telephoneservice';
import { Statut } from '../model/statut.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-telephone',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-telephone.html',
  styleUrls: ['./add-telephone.css']
})




export class AddTelephone {

  newTelephone = new Telephone();
  message = !String;
  Statuts!: Statut[];
  newIdSat!: number;
  newStatu!: Statut;
  myForm!: FormGroup;





  constructor(

    private telephoneService: TelephoneService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }
  ngOnInit() {

    this.Statuts = this.telephoneService.listeCategories();
    this.myForm = this.formBuilder.group({
      idtel: ['', Validators.required],
      logoTel: ['', Validators.required,],
      nomTel: ['', [Validators.required, Validators.minLength(6)]],
      desTEL: ['', Validators.required],
      prixTel: ['', [Validators.required, Validators.min(0)]],
      dateCreation: ['', Validators.required],
      emailtel: ['', [Validators.required, Validators.email]],
      statut: ['', Validators.required],
    }, { updateOn: 'change' });
  }

  addTelephone() {
    const formValues = this.myForm.value;
    this.newTelephone.idtel = formValues.idtel;
    this.newTelephone.logoTel = formValues.logoTel;
    this.newTelephone.nomTel = formValues.nomTel;
    this.newTelephone.desTEL = formValues.desTEL;
    this.newTelephone.prixTel = formValues.prixTel;
    this.newTelephone.dateCreation = formValues.dateCreation;
    this.newTelephone.emailtel = formValues.emailtel;
    this.newTelephone.statut = this.telephoneService.consulterCategorie(formValues.statut);
    this.telephoneService.ajouterTelephone(this.newTelephone);
    this.router.navigate(['telephoness']);

  }

}
