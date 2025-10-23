import { Routes } from '@angular/router';
import { AddTelephone } from './add-telephone/add-telephone';
import { UpdateTelephone } from './update-telephone/update-telephone';
import { Telephoness } from './telephone/telephone';
import { RechercheparStatut } from './recherchepar-statut/recherchepar-statut';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';


export const routes: Routes = [
    { path: "telephoness", component: Telephoness },
    { path: "add_telephone", component: AddTelephone },
    { path: "updateTelephone/:id", component: UpdateTelephone },
    { path: "rechercheparStatut", component: RechercheparStatut },
    { path: "rechercheParNom", component: RechercheParNom }

    ,
    { path: "", redirectTo: "telephoness", pathMatch: "full" }

];
