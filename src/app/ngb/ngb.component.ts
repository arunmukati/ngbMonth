import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CustomDatepickerService } from '../custome.service';
import { TranslateService } from '@ngx-translate/core';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngb',
  templateUrl: './ngb.component.html',
  styleUrls: ['./ngb.component.scss'],
  exportAs:'NgB',
})
export class NgbComponent implements OnInit {
  @ViewChild(TemplateRef, { static: true }) datepicker: any;
  model={
    months:[0,1,2,3,4,5,6,7,8,9,10,11]
  }
  years={
    min: 1948,
    max:2050
  }
  yearArray:any;
  currentYear= new Date().getFullYear();
  currentMonth= new Date().getMonth();
  constructor(private translateService: TranslateService, public ngb: CustomDatepickerService) { 
    this.yearArray = Array.from({length: this.years.max - this.years.min+1},(x,i)=>this.years.min+i);
  }

  ngOnInit(): void {
    console.log(this.currentMonth)
  }
  // @ViewChild('componentContainer', { read: ViewContainerRef, static: true })

  // @Input() data: string='';
  navigate(number: number) {
    console.log(this.datepicker)
    // if (this.datepicker) {
    //   const { state, calendar } = this.datepicker;
    //   this.datepicker?.navigateTo(calendar.getNext(state.firstDate, 'y', number));
    // }
    let  check= this.currentYear + number;
    if(check>=this.years.min && check<=this.years.max)
    {
      this.currentYear= check;
    }
    
  }
}
