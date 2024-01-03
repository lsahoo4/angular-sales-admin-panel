import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersTableComponent } from './order/order-table/orders-table/orders-table.component';
import { CustomerTableComponent } from './customer/customer-table/customer-table.component';
import { CustomerNewComponent } from './customer/customer-new/customer-new.component';
import { OrderNewComponent } from './order/order-new/order-new.component';
import { ProductTableComponent } from './product/product-table/product-table.component';
import { ProductNewComponent } from './product/product-new/product-new.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    {
        path: 'orders',
        children: [
            { path: '', component: OrdersTableComponent},
            { path: 'new', component: OrderNewComponent }
        ]
    },
    {
        path: 'customers',
        children: [
            { path: '', component: CustomerTableComponent},
            { path: 'new', component: CustomerNewComponent }
        ]
    },
    {
        path: 'products',
        children: [
            { path: '', component: ProductTableComponent },
            { path: 'new', component: ProductNewComponent }
        ]
    }
];
