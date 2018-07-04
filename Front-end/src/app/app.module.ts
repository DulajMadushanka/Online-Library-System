import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import {HttpModule} from '@angular/http';
//import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { AppBootstrapModule } from './app-bootstrap.module';



import { AppComponent } from './app.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import {DataService} from './services/data.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PoMainComponent } from './components/po-main/po-main.component';
import { ViewPoComponent } from './components/view-po/view-po.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { RecipieComponent } from './components/recipie/recipie.component';
import { MenuComponent } from './components/menu/menu.component';
import { UnitCostComponent } from './components/unit-cost/unit-cost.component';
import { StockUpdateComponent } from './components/stock-update/stock-update.component';
import { ItemDetailComponent } from './components/inventory/item-detail/item-detail.component';
import { ItemDetailPipe } from './pipes/item-detail.pipe';
import { SetRolComponent } from './components/inventory/item-detail/set-rol/set-rol.component';
import { LogregComponent } from './components/logreg/logreg.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { IssueBookComponent } from './components/issue-book/issue-book.component';
import { IssueService } from './services/issue.service';
import { RequestBookComponent } from './components/request-book/request-book.component';
import { RequestService } from './services/request.service';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookService } from './services/book.service';
import { MemberComponent } from './components/member/member.component';
import { MemberService } from './services/member.service';
import { MassageComponent } from './components/massage/massage.component';
import { MassageService } from './services/massage.service';
import { UserbookComponent } from './components/userbook/userbook.component';
import { UsermassageComponent } from './components/usermassage/usermassage.component';
import { AddBookPipe } from './pipes/add-book.pipe';
import { HomeComponent } from './components/home/home.component';
import { UrequestComponent } from './components/urequest/urequest.component';
import { UmassageComponent } from './components/umassage/umassage.component';
import { UissueComponent } from './components/uissue/uissue.component';


const appRoutes: Routes = [
  
  
 
  {path:'log',component:LoginComponent},
  {path:'reg',component:RegisterComponent},
  {path:'issue',component:IssueBookComponent},
  {path:'req',component:RequestBookComponent},
  {path:'add',component:AddBookComponent},
  {path:'member',component:MemberComponent},
  {path:'massage',component:MassageComponent},
  {path:'userbook',component:UserbookComponent},
  {path:'userhome',component:UserhomeComponent},
  {path:'home',component:HomeComponent},
  {path:'urequest',component:UrequestComponent},
  {path:'umassage',component:UmassageComponent}


    ];



@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    DashboardComponent,
    PoMainComponent,
    ViewPoComponent,
    AppheaderComponent,
    AppmenuComponent,
    AppfooterComponent,
    RecipieComponent,
    MenuComponent,
    UnitCostComponent,
    StockUpdateComponent,
    ItemDetailComponent,
    ItemDetailPipe,
    SetRolComponent,
    LogregComponent,
    LoginComponent,
    RegisterComponent,
    UserhomeComponent,
    IssueBookComponent,
    RequestBookComponent,
    AddBookComponent,
    MemberComponent,
    MassageComponent,
    UserbookComponent,
    UsermassageComponent,
    AddBookPipe,
    HomeComponent,
    UrequestComponent,
    UmassageComponent,
    UissueComponent,
   

  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    AppBootstrapModule,
    RouterModule.forRoot(appRoutes),
   

  ],
  exports:[RouterModule],
  providers: [DataService,UserService,IssueService,RequestService, BookService,MemberService,MassageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
