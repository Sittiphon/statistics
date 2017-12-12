import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OverviewComponent } from './overview/overview.component';
import { TopupComponent } from './topup/topup.component';
import { PosComponent } from './pos/pos.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: OverviewComponent
    },
    {
        path: 'Order',
        component: PosComponent
    },
    {
        path: 'Topup',
        component: TopupComponent
    },
    {
        path: 'User',
        component: UserComponent
    }
];
@NgModule({
    imports: 
    [ 
        RouterModule.forRoot(routes)
    ],
    exports: 
    [
        RouterModule
    ]
})
export class HttpRoutingModule { }
