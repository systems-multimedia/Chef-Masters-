import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { discoverLocalRefs } from '@angular/core/src/render3/context_discovery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor( private router:Router,private route: ActivatedRoute ) { }

  ngOnInit() {
  }

  displayHome(){
    this.router.navigate(['home'],{relativeTo:this.route})
  }

}
