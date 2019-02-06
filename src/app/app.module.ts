import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatCardModule, MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSliderModule,
  MatTooltipModule
} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {GeneralService} from './Services/general.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FiltersComponent } from './Components/filters/filters.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FooterToolbarComponent } from './Components/footer-toolbar/footer-toolbar.component';
import { ProductCardComponent } from './Components/product-card-grid/product-card.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductGridComponent } from './Components/product-grid/product-grid.component';
import {AngularFittextModule} from 'angular-fittext';
import {MatIconModule} from '@angular/material/icon';
import {Ng5SliderModule} from 'ng5-slider';
import { ProductCardListviewComponent } from './Components/product-card-listview/product-card-listview.component';
import {RouterModule, Routes} from '@angular/router';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { CartPageComponent } from './Components/cart-page/cart-page.component';
import { AccountPageComponent } from './Components/account-page/account-page.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { SignupPageComponent } from './Components/signup-page/signup-page.component';
import { AutofocusDirective } from './Directives/autofocus.directive';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CookieService} from 'ngx-cookie-service';
import {NotificationsComponent} from './Components/notifications/notifications.component';
import {ProductQueryService} from './Services/product-query.service';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: ProductPageComponent},
  { path: 'cart', component: CartPageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'account', component: AccountPageComponent},
  { path: 'signup', component: SignupPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    SidebarComponent,
    FooterToolbarComponent,
    ProductCardComponent,
    ProductListComponent,
    ProductGridComponent,
    ProductCardListviewComponent,
    ProductPageComponent,
    CartPageComponent,
    AccountPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    AutofocusDirective,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatTooltipModule,
    AngularFittextModule,
    MatSliderModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    Ng5SliderModule,
    MatFormFieldModule,
    MatTableModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GeneralService, CookieService, ProductQueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
