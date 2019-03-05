import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  data;
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.getRestData();
  }

}
