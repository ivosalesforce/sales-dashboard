import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/components/login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { DashboardComponent } from './app/components/dashboard/dashboard.component';
import { AuthGuard } from './app/guards/auth/auth.guard';
import { LoginGuard } from './app/guards/login/login.guard';
import { OpportunitiesComponent } from './app/components/opportunities/opportunities.component';
import { SalesPipelineComponent } from './app/components/salespipeline/salespipeline.component';
import { LeadTrackerComponent } from './app/components/leadtracker/leadtracker.component';
import { ExportDataComponent } from './app/components/exportdata/exportdata.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'opportunities', component: OpportunitiesComponent, canActivate: [AuthGuard] },
  { path: 'sales-pipeline', component: SalesPipelineComponent, canActivate: [AuthGuard] },
  { path: 'lead-tracker', component: LeadTrackerComponent, canActivate: [AuthGuard] },
  { path: 'export-data', component: ExportDataComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideAnimationsAsync(),
  ]
}).catch(err => console.error(err));
