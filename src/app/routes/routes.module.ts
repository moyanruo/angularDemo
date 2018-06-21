import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { HomeComponent } from "./home/home.component";
import { routes } from "./routes";
import { environment } from "@env/environment";
import { ProductComponent } from "./product/product.component";
import { OrderComponent } from './order/order.component';

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: environment.useHash })],
  declarations: [UserComponent, HomeComponent, ProductComponent, OrderComponent],
  exports: [RouterModule]
})
export class RoutesModule {}
