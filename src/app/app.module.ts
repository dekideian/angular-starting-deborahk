import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { HttpClientModule} from '@angular/common/http';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ConvertToSpacesPipe } from 'src/pipes/ConvertCharacterToSpacePipe';
import { StarsComponent } from './shared/stars/stars.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', canActivate:[ProductDetailGuard], component: ProductDetailComponent },
  { path: 'welcome', component: WelcomeComponentComponent },
  { path: 'notFound', component: NotFoundComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'notFound', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    AppComponent,
    WelcomeComponentComponent,
    NotFoundComponent,
    StarsComponent
  ],
  /** all external modules are imported in imports, only ours in declarations */
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



