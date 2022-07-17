import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDate, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
// import { NgbDatepickerService } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service';
import { TranslateService } from '@ngx-translate/core';
import { CustomDatepickerService } from './custome.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild(NgbDatepicker, { static: true }) datepicker: NgbDatepicker | undefined;
  @Input() selectBoxes: { years: number[], months: number[] } = { years: [], months: [] };
  // @Output() select = new EventEmitter<NgbDate>();
  model: NgbDateStruct = {
    "year": 2022,
    "month": 7,
    "day": 15
  };
  data: any
  currentLang: any = 'en';

  constructor(private calendar: NgbCalendar, private translateService: TranslateService, public ngb: CustomDatepickerService) {
  }

  isDisabled = (date: NgbDate, current: { month: number, year: number }) => date.month !== current.month;
  isWeekend = (date: NgbDate) => this.calendar.getWeekday(date) >= 6;
  lal(d: any = 0) {
    console.log("lal", d)
    d.dateSelect.emit(new NgbDate(2020,12,7));
  }

  // ---------------------------



  navigate(number: number) {
    console.log("data", this.data, this.datepicker)
    if (this.datepicker) {
      const { state, calendar } = this.datepicker;
      this.datepicker?.navigateTo(calendar.getNext(state.firstDate, 'y', number));
    }
  }

  today() {
    if (this.datepicker) {
      const { calendar } = this.datepicker;
      this.datepicker?.navigateTo(calendar.getToday());
    }
  }
  changeLanguage(event?: any) {
    if (event) this.currentLang = event.target.value;
    this.translateService.use(this.currentLang);
    localStorage.setItem("language", this.currentLang);
  }

}
