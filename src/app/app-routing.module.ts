import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { RiceWheatComponent } from './products/rice-wheat/rice-wheat.component';
import { PulsesComponent } from './products/pulses/pulses.component';
import { SpicesComponent } from './products/spices/spices.component';
import { DryfruitComponent } from './products/dryfruit/dryfruit.component';
import { TeaComponent } from './products/tea/tea.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aobut-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  // { path: 'produts', component: ProductsComponent },
  { path: 'produts/rice-wheat', component: RiceWheatComponent },
  { path: 'produts/pulses', component: PulsesComponent },
  { path: 'produts/spices', component: SpicesComponent },
  { path: 'produts/dry-fruit', component: DryfruitComponent },
  { path: 'produts/tea', component: TeaComponent },

  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
