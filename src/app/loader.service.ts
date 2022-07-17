import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
export class customTranslate implements TranslateLoader {
  url: string= environment.LANG_URL;
  constructor(private http: HttpClient) { }
  getTranslation(lang: string): Observable<any> {
     // Here we are making http call to our server to get the 
    // translation files. lang will be our language for which we are 
   // calling translations if it fails to get that language's 
  // translation then translation should be called for en language.
   return this.http.get(this.url+`${lang}.json`);
 }
}