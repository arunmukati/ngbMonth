
import { Injectable } from '@angular/core';
import { NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class CustomDatepickerService extends NgbDatepickerI18n {
  getWeekdayShortName(weekday: number): string {
      console.log("lala",weekday)
      return "lala";
  }
  currentLang: any = 'en';
  weekDaysShort: any = "Mon_Tue_Wed_Thu_Fri_Sat_Sun".split('_');
  monthsShortName: any = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split('_');
  monthsFullName: any = "January_February_March_April_May_June_July_August_September_October_November_December".split('_');
  constructor(private translateSerivce: TranslateService) {
    super();
  }
  
  getWeekdayLabel(weekday: number): string { this.getTranslation(); return this.weekDaysShort[weekday - 1]; }
  getMonthShortName(month: number): string {  return this.monthsShortName[month - 1]; }
  getMonthFullName(month: number): string {this.getTranslation(); return this.monthsFullName[month - 1] }
  getDayAriaLabel(date: NgbDateStruct): string { return `${date.day}-${date.month}-${date.year}`; }
  getTranslation(){
    this.currentLang = this.translateSerivce.currentLang;
    let translations = this.translateSerivce.store.translations[this.currentLang];
   if(translations){
   
   
   let weekDaysShort = translations['weekDaysShort'];
   let monthsShortName = translations['monthsShortName'];
   let monthsFullName = translations['monthsFullName'];
    if (weekDaysShort && monthsShortName && monthsFullName) {
      this.weekDaysShort = weekDaysShort.split('_');
      this.monthsShortName = monthsShortName.split('_');
      this.monthsFullName = monthsFullName.split('_');
    }
}
  }
}


function isNumber(value: any) {
  return !isNaN(parseInt(value));
}

function padNumber(value: number) {
  if (isNumber(value)) {
    return `0${value}`.slice(-2);
  } else {
    return '';
  }
}


@Injectable({
  providedIn: 'root'
})
export class CustomDateAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '-';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      const date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[2], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[0], 10)
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date && isNumber(date.day) && isNumber(date.month) && isNumber(date.year)
    ? `${date.year}-${padNumber(date.month)}-${padNumber(date.day)}`
    : '';
  }
}

@Injectable({
  providedIn: 'root'
})
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  parse(value: string): NgbDateStruct | null {
    if (value != null) {
      const parts = value.split('-');
      if (parts.length === 3 && isNumber(parts[0]) && isNumber(parts[1]) && isNumber(parts[2])) {
        return { day: parseInt(parts[2]),month: parseInt(parts[1]),  year: parseInt(parts[0]) };
      }
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date && isNumber(date.day) && isNumber(date.month) && isNumber(date.year)
      ? `${date.year}-${padNumber(date.month)}-${padNumber(date.day)}`
      : '';
  }
}
