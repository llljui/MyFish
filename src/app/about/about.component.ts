import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
