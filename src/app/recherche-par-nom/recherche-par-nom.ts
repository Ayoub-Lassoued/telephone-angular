import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Telephone } from '../model/telephone.model';
import { TelephoneService } from '../services/telephoneservice';
import { SearchFilterPipe } from "../search-filter-pipe";

@Component({
  selector: 'app-recherche-par-nom',
  imports: [CommonModule, FormsModule, SearchFilterPipe],
  templateUrl: './recherche-par-nom.html',
  styleUrls: ['./recherche-par-nom.css']
})
export class RechercheParNom implements OnInit {
  nomTel!: string;
  alltels!: Telephone[];
  telephones: Telephone[] = [];
  searchTerm!: string;
  idtel!: number;

  constructor(private telephoneService: TelephoneService) { }

  ngOnInit(): void {
    this.telephoneService.listtel1().subscribe(tels => {
      console.log(tels);
      this.telephones = tels;

    })
  }

  onKeyUp(filterText: string) {
    this.telephones = this.alltels.filter(item =>
      item.nomTel.toLowerCase().includes(filterText)
    );
  }
}
