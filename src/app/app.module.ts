import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule,
         MatInputModule, MatAutocompleteModule, MatListModule, MatMenuModule, } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule} from '@angular/material/grid-list';
import { OeuvresComponent } from './page/oeuvres/oeuvres.component';
import { TypesComponent } from './page/types/types.component';


const appRoutes: Routes = [
  { path: 'oeuvres', component: OeuvresComponent, data : { title: 'oeuvres_list' } },
  { path: 'types', component: TypesComponent, data : { title: 'Types_list' } },
  { path: '', redirectTo: '/oeuvres', pathMatch: 'full' },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OeuvresComponent,
    TypesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatAutocompleteModule,
    MatListModule,
    MatMenuModule,
    MatGridListModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
