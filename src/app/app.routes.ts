import { Routes } from '@angular/router';
import { OfferListComponent } from './components/offer-list/offer-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TemplateEmployeComponent } from './templates/employe/template-employe.component';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { TemplateClientComponent } from './templates/client/template-client.component';
import { DashboardComponent } from './templates/admin/dashboard/dashboard.component';
import { TemplateAdminComponent } from './templates/admin/template-admin.component';
import { EmployeManagementComponent } from './templates/admin/employe-management/employe-management.component';
import { StockManagementComponent } from './templates/admin/stock-management/stock-management.component';
import { TasksComponent } from './templates/employe/tasks/tasks.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { getPrerenderParams } from '../server';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'offers', component: OfferListComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
  {
    path: 'login/:role', component: LoginComponent,
    data: { prerender: true },
    resolve: { prerenderParams: getPrerenderParams },
  },
  { path: 'signin', component: InscriptionComponent },
  // { path: 'unaffected-task', component: UnaffectedTaskComponent },
  // { path: 'current-task', component: CurrentTaskComponent },
  // { path: 'finished-task', component: FinishedTaskComponent },

  {
    path: 'admin',
    component: TemplateAdminComponent,
    loadChildren: () => import('./pages/admin/admin.routes').then(m => m.ADMIN_ROUTES),
  },
  {
    path: 'employe',
    component: TemplateEmployeComponent,
    loadChildren: () => import('./pages/employe/employe.routes').then(m => m.EMPLOYE_ROUTES),
  },
  {
    path: 'client',
    component: TemplateClientComponent,
    loadChildren: () => import('./pages/client/client.routes').then(m => m.CLIENT_ROUTES),
  },
];

export const APP_ROUTES = routes;
