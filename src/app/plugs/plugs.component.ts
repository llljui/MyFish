import { Component, OnInit } from '@angular/core';
import { fadein } from "../animations/fadein";
declare var $:any;
@Component({
  selector: 'app-plugs',
  templateUrl: './plugs.component.html',
  styleUrls: ['./plugs.component.css'],
  animations:[fadein]
})
export class PlugsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	 	$('.xy_input').css('margin-top','32%');	
 	  	$(document).ready(function () {  		
/*				$(".content_3").mCustomScrollbar({
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
			});*/
  	});	
  }

}
