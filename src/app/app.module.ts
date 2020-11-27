import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { ProductModule } from './products/product.module';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponentComponent },
  { path: 'notFound', component: NotFoundComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'notFound', pathMatch: 'full' }
];

@NgModule({
  declarations: [
   
    AppComponent,
    WelcomeComponentComponent,
    NotFoundComponent
  ],
  /** all external modules are imported in imports, only ours in declarations */
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    
    ProductModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



