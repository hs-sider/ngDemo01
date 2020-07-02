import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { DetailsProductComponent } from './products/details-product/details-product.component'
import { Error404Component } from './error404/error404.component'
import { ProductListComponent } from './products/product-list/product-list.component'

const routes: Routes = [
    { path:'', component: HomeComponent },
    { path:'products', component: ProductListComponent },
    { path:'product/:id', component: DetailsProductComponent },
    { path:'**', component: Error404Component }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}