import { Component, EventEmitter, Output } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  Highcharts=Highcharts
  chartOptions={}
  // userdefined event creation
  // @Output-to share data from child 
  @Output() onMenuBtnClick = new EventEmitter()
  menubtnClicked(){
    // to occur an userdefined event
    this.onMenuBtnClick.emit()


  }
}
