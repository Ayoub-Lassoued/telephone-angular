import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Telephone } from '../model/telephone.model';
import { TelephoneService } from '../services/telephoneservice';

@Component({
  selector: 'app-update-telephone',
  standalone: true,
  imports: [FormsModule, CommonModule],

  templateUrl: './update-telephone.html',
  styles: ``
})
export class UpdateTelephone implements OnInit {
  currentTelephone = new Telephone();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private telephoneService: TelephoneService
  ) { }

  ngOnInit() {
    // Récupération de l'ID depuis l'URL et consultation du téléphone
    const id = this.activatedRoute.snapshot.params['id'];
    this.currentTelephone = this.telephoneService.consulterTelephone(id);
    console.log('Téléphone à modifier : ', this.currentTelephone);
  }

  updateTelephone() {
    this.telephoneService.updateTelephone(this.currentTelephone);
    this.router.navigate(['telephoness']); // redirection vers la liste
  }
}
