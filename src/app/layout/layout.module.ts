import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RoutesModule } from '../routes/routes.module';
import { DefaultComponent } from "./default/default.component";
import { HeaderComponent } from "./default/header/header.component";

const COMPONENTS = [DefaultComponent, HeaderComponent];

@NgModule({
  imports: [RoutesModule],
  providers: [],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class LayoutModule {}
