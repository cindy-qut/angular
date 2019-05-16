import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule,
         MatInputModule, MatAutocompleteModule, MatListModule, MatMenuModule,
         MatCardModule, MatFormFieldModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule} from '@angular/material/grid-list';
import { OeuvresComponent } from './page/oeuvres/oeuvres.component';
import { TypesComponent } from './page/types/types.component';
import { LoginComponent } from './page/login/login.component';


const appRoutes: Routes = [
  { path: 'oeuvres', component: OeuvresComponent, data : { title: 'oeuvres_list' } },
  { path: 'types', component: TypesComponent, data : { title: 'Types_list' } },
  { path: 'login', component: LoginComponent, data : { title: 'Login' } },
  { path: '', redirectTo: '/oeuvres', pathMatch: 'full' },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OeuvresComponent,
    TypesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
