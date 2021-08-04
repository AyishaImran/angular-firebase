import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutusComponent } from './shared/aboutus.component';
import { FooterComponent } from './shared/footer.component';
import { SimpleheaderComponent } from './shared/simpleheader.component';
import { LoginComponent } from './ui/auth/login.component';
import { SignupComponent } from './ui/auth/signup.component';
import { AdminComponent } from './ui/auth/admin.component';


// material imports
import { HttpClientModule } from '@angular/common/http';
// angular material imports
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DomSanitizer } from '@angular/platform-browser';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
// Angular fire imports
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { SettingsComponent } from './ui/auth/settings.component';
import { HeaderComponent } from './shared/header.component';
// import { AddressComponent } from './ui/addressbook/address.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    FooterComponent,
    SimpleheaderComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    SettingsComponent,
    HeaderComponent,
    // AddressComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatListModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatRippleModule,
    MatDialogModule,
    MatStepperModule,
    MatExpansionModule,
    MatTableModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatDatepickerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

    iconRegistry.addSvgIcon(
      'facebook',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/fb.svg')
    ),
      iconRegistry.addSvgIcon(
        'linkedin',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg')
      ),
      iconRegistry.addSvgIcon(
        'github',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg')),
      iconRegistry.addSvgIcon(
        'twitter',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/twitter_1.svg'));
  }
}