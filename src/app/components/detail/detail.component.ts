import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  recipe: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.recipe = this.dataService.getModalInfo();
  }

}
