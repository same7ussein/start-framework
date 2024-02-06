import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomeComponent ,title:"home"},
  { path: "about", component: AboutComponent,title:"about" },
  { path: "portfolio", component: PortfolioComponent,title:"portfolio" },
  { path: "contact", component: ContactComponent,title:"contact" },
  { path: "navbar", component: NavbarComponent },
  { path: "footer", component: FooterComponent },
  { path: "**", component: NotfoundComponent,title:"404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
