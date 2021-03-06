import { Component, OnInit } from '@angular/core';
import { fadein } from "../animations/fadein"
declare var $:any;
@Component({
  selector: 'app-cxrs',
  templateUrl: './cxrs.component.html',
  styleUrls: ['./cxrs.component.css'],
  animations:[fadein]
})
export class CxrsComponent implements OnInit {

  constructor() { }

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
