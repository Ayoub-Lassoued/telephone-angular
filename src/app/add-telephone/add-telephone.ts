import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';   // ✅ Import nécessaire
import { Telephone } from '../model/telephone.model';
import { TelephoneService } from '../services/telephoneservice';
import { Statut } from '../model/statut.model';


@Component({
  selector: 'app-add-telephone',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-telephone.html',
  styleUrls: ['./add-telephone.css']
})




export class AddTelephone {

  newTelephone = new Telephone();
  message = !String;
  Statuts!: Statut[];
  newIdSat!: number;
  newStatu!: Statut;





  constructor(

    private telephoneService: TelephoneService,
    private router: Router
  ) { }
  ngOnInit() {
    this.Statuts = this.telephoneService.listeCategories();
  }


  addTelephone() {
    this.newStatu = this.telephoneService.consulterCategorie(this.newIdSat);
    this.newTelephone.statut = this.newStatu;
    this.telephoneService.ajouterTelephone(this.newTelephone);
    this.router.navigate(['telephoness']);
    console.log(this.message);

  }

}
