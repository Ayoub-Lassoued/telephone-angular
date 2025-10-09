import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';   // ✅ Import nécessaire
import { Telephone } from '../model/telephone.model';
import { TelephoneService } from '../services/telephoneservice';

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



  constructor(
    private telephoneService: TelephoneService,
    private router: Router
  ) { }

  addTelephone() {
    this.telephoneService.ajouterTelephone(this.newTelephone);
    this.router.navigate(['telephoness']);
    console.log(this.message);

  }

}
