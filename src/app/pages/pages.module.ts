import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

import { AvatarModule } from 'primeng/avatar';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ListboxModule } from 'primeng/listbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    PortfolioComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AvatarModule,
    SkeletonModule,
    ButtonModule,
    CardModule,
    DividerModule,
    ListboxModule,
    InputTextModule,
    InputMaskModule,
    ToastModule
  ],
  exports: [
    PortfolioComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent
  ],
  providers: []
})
export class PagesModule { }
