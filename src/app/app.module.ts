import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule,
         MatInputModule, MatAutocompleteModule, MatListModule, MatMenuModule,
         MatCardModule, MatFormFieldModule, MatExpansionModule, MatCheckboxModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule} from '@angular/material/grid-list';
import { OeuvresComponent } from './page/oeuvres/oeuvres.component';
import { TypesComponent } from './page/types/types.component';
import { LoginComponent } from './page/login/login.component';
import { JwtInterceptor } from './class/jwt-interceptor';
import { ErrorInterceptor } from './class/error-interceptor';
import { IsSignedInGuard } from './guard/is-signed-in.guard';
import { AccueilComponent } from './page/accueil/accueil.component';
import { GalerieComponent } from './page/galerie/galerie.component';
import { TailleComponent } from './page/taille/taille.component';
import { TailleService } from './service/taille.service';
import { TailleAddComponent } from './page/taille/taille-add/taille-add.component';
import { TailleEditComponent } from './page/taille/taille-edit/taille-edit.component';



const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent, canActivate: [IsSignedInGuard], data : { title: 'accueil' } },
  { path: 'galerie', component: GalerieComponent, data : { title: 'galerie' } },
  { path: 'taille', component: TailleComponent, data : { title: 'taille' } },
  { path: 'taille/add', component: TailleAddComponent, data : { title: 'addTaille' } },
  { path: 'taille/edit/:id', component: TailleEditComponent, data : { title: 'editTaille' } },
  { path: 'oeuvres', component: OeuvresComponent, data : { title: 'oeuvres_list' } },
  { path: 'types', component: TypesComponent, data : { title: 'Types_list' } },
  { path: 'login', component: LoginComponent, data : { title: 'Login' } },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OeuvresComponent,
    TypesComponent,
    LoginComponent,
    AccueilComponent,
    GalerieComponent,
    TailleComponent,
    TailleAddComponent,
    TailleEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatAutocompleteModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatExpansionModule,
    MatCheckboxModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  TailleService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
