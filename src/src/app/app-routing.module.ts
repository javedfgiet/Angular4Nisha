import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './Users/user-list/user-list.component';
import { resolveGuard } from './RGuard/resolve.guard';
import { AuthGuard } from './RGuard/auth.guard';
import { UserComponent } from './Users/user/user.component';
import { AdminGuard } from './RGuard/admin.guard';
import { AddressComponent } from './Users/address/address.component';
import { CompanyComponent } from './Users/company/company.component';
import { AboutComponent } from './Users/about/about.component';
import { LocationComponent } from './Users/location/location.component';
import { FeedbackComponent } from './Users/feedback/feedback.component';
import { ContactComponent } from './Users/contact/contact.component';
import { AddUserComponent } from './Users/add-user/add-user.component';
import { unsavedChangesGuard } from './RGuard/unsaved-changes.guard';
import { ProductDashboardModule } from './product-dashboard/product-dashboard.module';


const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },

  {
    path: 'users', component: UserListComponent,
    resolve: {
      data: resolveGuard
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'user/:id', component: UserComponent,
    canActivateChild: [AdminGuard],
    children: [
      { path: 'address', component: AddressComponent, pathMatch: 'full' },
      { path: 'company', component: CompanyComponent }
    ]
  },
  {
    path: 'about', component: AboutComponent,

    children: [
      { path: 'location', outlet: 'map', component: LocationComponent },
      { path: "feedback", outlet: 'feed', component: FeedbackComponent }
    ]
  },
  { path: 'contact', component: ContactComponent },
  { path: 'adduser', component: AddUserComponent, canDeactivate: [unsavedChangesGuard] },

  { path: 'product', loadChildren: () => import('./product-dashboard/product-dashboard.module').then(m => m.ProductDashboardModule) },
  { path: '**', redirectTo: 'users' },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
