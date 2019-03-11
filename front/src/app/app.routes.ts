import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/security/login/login.component';
import {ModuleWithProviders} from '@angular/core';
import {AuthGuard} from './components/security/auth.guard';
import {UserNewComponent} from "./components/user-new/user-new.component";
import {UserListComponent} from "./components/user-list/user-list.component";
import {Ticket} from "./model/ticket.model";
import {TicketNewComponent} from "./components/ticket-new/ticket-new.component";
import {TicketListComponent} from "./components/ticket-list/ticket-list.component";

export const ROUTES: Routes = [

  {path : '', component: HomeComponent, canActivate: [AuthGuard]},
  {path : 'login', component: LoginComponent},
  {path : 'user-new', component: UserNewComponent, canActivate: [AuthGuard]},
  {path : 'user-new/:id', component: UserNewComponent, canActivate: [AuthGuard]},
  {path : 'user-list', component: UserListComponent, canActivate: [AuthGuard]},
  {path : 'ticket-new', component: TicketNewComponent, canActivate: [AuthGuard]},
  {path : 'ticket-new/:id', component: TicketNewComponent, canActivate: [AuthGuard]},
  {path : 'ticket-list', component: TicketListComponent, canActivate: [AuthGuard]},
]

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);
