import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { GeneralComponent } from './components/general/general.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { DebitComponent } from './components/debit/debit.component';
import { CreditComponent } from './components/credit/credit.component';
import { AdminComponent } from './components/admin/admin.component';
import { authGuard } from './guards/auth.guard';
import { scopesGuard } from './guards/scopes.guard';

export const routes: Routes = [
    {path: '', redirectTo: '/login' , pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard(), scopesGuard('dashboard')],
        children: [
            {path: '', redirectTo: 'general', pathMatch: 'full'},
            {path: 'general', component: GeneralComponent},
            {
                path: 'payments',
                component: PaymentsComponent,
                canActivate: [ scopesGuard('pagamentos')],
                children: [
                    {path: 'debit', component: DebitComponent},
                    {path: 'credit', component: CreditComponent},
                ]
            
            },
            {path: 'admin', component: AdminComponent, canActivate: [ scopesGuard('admin')]}
        ]
    },
    {path: 'not-authorized', component: NotAuthorizedComponent, data: {type: 'not-authorized'}},
    {path: 'not-found', component: NotAuthorizedComponent, data: {type: 'not-found'}},

];
