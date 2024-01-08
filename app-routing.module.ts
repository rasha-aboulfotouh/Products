import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { ViewComponent } from './view/view.component';


// <!-- ********** Routing ************* --> //

const routes: Routes = [

  { path: '', component: ListComponent },

  { path: 'pCard', component: CardComponent },
  { path: 'view/:id', component: ViewComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
