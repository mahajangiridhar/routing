import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { EditProdComponent } from './products/edit-prod/edit-prod.component';
import { ProductComponent } from './products/product/product.component';

const appRoutes: Routes=[
  {path: "", component: HomeComponent},
  {path: "products", component: ProductsComponent},
  {path: "products/:id", component: EditProdComponent},
  {path: "users", component: UsersComponent},
  {path: "users/:id", component: UserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    NavigationComponent,
    UserComponent,
    EditProdComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
