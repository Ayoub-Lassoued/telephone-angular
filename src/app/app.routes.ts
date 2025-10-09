import { Routes } from '@angular/router';
import { AddTelephone } from './add-telephone/add-telephone';
import { UpdateTelephone } from './update-telephone/update-telephone';
import { Telephoness } from './telephone/telephone';

export const routes: Routes = [
    { path: "telephoness", component: Telephoness },
    { path: "add_telephone", component: AddTelephone },
    { path: "updateTelephone/:id", component: UpdateTelephone },
    { path: "", redirectTo: "telephoness", pathMatch: "full" }
];
