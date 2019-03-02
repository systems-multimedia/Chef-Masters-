import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DetailComponent } from '../detail/detail.component';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  modalRef: BsModalRef;
  recipes = [];
  constructor(
    private modalService: BsModalService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.recipes = this.dataService.getRecipes();
  }

  findRecipe(name) {
    this.dataService.getRecipe(name);
    this.openModal();
  }

  openModal() {
    this.modalRef = this.modalService.show(DetailComponent);
  }

}
