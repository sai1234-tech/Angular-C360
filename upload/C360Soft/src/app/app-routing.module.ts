import { FooterComponent } from './footer/footer.component';
import { TransfomComponent } from './transfom/transfom.component';
import { IndustriesComponent } from './industries/industries.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicerowComponent } from './servicerow/servicerow.component';

const routes: Routes = [
  {path:'',component:HeaderComponent},
  {path:'body',component:BodyComponent},
  {path:'servicerow',component:ServicerowComponent},
  {path:'industries',component:IndustriesComponent},
  {path:'transfom',component:TransfomComponent},
  {path:'footer',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
