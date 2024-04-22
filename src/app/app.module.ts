import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HraderComponent } from './shared/hrader/hrader.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { RiceWheatComponent } from './products/rice-wheat/rice-wheat.component';
import { PulsesComponent } from './products/pulses/pulses.component';
import { SpicesComponent } from './products/spices/spices.component';
import { DryfruitComponent } from './products/dryfruit/dryfruit.component';
import { TeaComponent } from './products/tea/tea.component';

@NgModule({
  declarations: [
    AppComponent,
    HraderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    ProductsComponent,
    RiceWheatComponent,
    PulsesComponent,
    SpicesComponent,
    DryfruitComponent,
    TeaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
