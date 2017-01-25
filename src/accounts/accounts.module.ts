import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AccountsComponent } from './accounts.component';

const appRoutes: Routes = [
  {path: 'accounts', component: AccountsComponent},
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AccountsComponent,
  ],
  //bootstrap: [],
  //providers: [],
})

export class AccountsModule {}
