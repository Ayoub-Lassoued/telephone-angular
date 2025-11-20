import { Routes } from '@angular/router';
import { AddTelephone } from './add-telephone/add-telephone';
import { UpdateTelephone } from './update-telephone/update-telephone';
import { Telephoness } from './telephone/telephone';
import { RechercheparStatut } from './recherchepar-statut/recherchepar-statut';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';
import { Login } from './login/login';
import { Forbidden } from './forbidden/forbidden';
import { Telephone } from './model/telephone.model';
import { telephoneGuard } from './telephone-guard';


export const routes: Routes = [
    { path: "telephoness", component: Telephoness },
    { path: "add_telephone", component: AddTelephone, canActivate: [telephoneGuard] },
    { path: "updateTelephone/:id", component: UpdateTelephone, canActivate: [telephoneGuard] },
    { path: "rechercheparStatut", component: RechercheparStatut },
    { path: "rechercheParNom", component: RechercheParNom },
    { path: "login", component: Login }

    ,
    { path: 'app-forbidden', component: Forbidden },


    { path: "", redirectTo: "telephoness", pathMatch: "full" }

];
