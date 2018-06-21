// 注入RouteguardService服务
import { RouteguardService } from "./routeguard.service";
import { UserComponent } from "./user/user.component";
import { HomeComponent } from "./home/home.component";
import { DefaultComponent } from "../layout/default/default.component";
import { ProductComponent } from "../routes/product/product.component";
import { OrderComponent } from '../routes/order/order.component';

export const routes = [
  { 
    path: "home", component: HomeComponent, data: { title: "Home Page" } 
  },
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "user",
        component: UserComponent,
        data: { title: "员工管理" }
        // canActivate: [RouteguardService]
      },
      {
        path: "product",
        component: ProductComponent,
        data: { title: "产品管理" }
      },
      {
        path: "order", component: OrderComponent, data: { title: "订单管理"}
      }
    ]
  }  
];
