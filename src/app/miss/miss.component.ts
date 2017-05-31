import { Component, OnInit } from '@angular/core';
import { fadein } from "../animations/fadein"
declare var $:any;
import { Http,URLSearchParams,Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-miss',
  templateUrl: './miss.component.html',
  styleUrls: ['./miss.component.css'],
  animations:[fadein]
})
export class MissComponent implements OnInit {

  constructor(public http:Http) { }
  justclick(){
  				this.http.get("1.txt").map(res=>res.text()).subscribe((res)=>{console.log(res);},(err)=>{console.log(err);});
  			}
  ngOnInit() {
 	  	$(document).ready(function () {
				$(".content_3").mCustomScrollbar({
					scrollInertia:600,
					autoDraggerLength:false
				});
				function onScrollCallback(){
					$(".callback_demo .callback_demo_output").children("em").delay(1000).fadeOut("slow");
				}
				function onTotalScrollBackCallback(){
					$(".callback_demo .callback_demo_output").children("em").delay(1000).fadeOut("slow");
				}
				$(".callback_demo a[rel='scrollto-bottom']").click(function(e){
					e.preventDefault();
					$(".content_8").mCustomScrollbar("scrollTo","bottom");
				});
  	});	
  }

}
