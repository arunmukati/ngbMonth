import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDateParserFormatter, NgbDateAdapter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbDatepickerModule, NgbDatepickerNavigationSelect } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDateParserFormatter, CustomDateAdapter } from './custome.service';
import { customTranslate } from './loader.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CustomNgbDatepickerDirective } from './custom-ngb-datepicker.directive';
import { NgbComponent } from './ngb/ngb.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomNgbDatepickerDirective,
    NgbComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader, // Main provider for loader
        useClass: customTranslate, // Custom Loader
        deps: [HttpClient], // Dependencies which helps serving loader
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
//     { provide: NgbDateAdapter, useClass: CustomDateAdapter }