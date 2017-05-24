import { Component, OnInit } from '@angular/core';
import { Http,URLSearchParams,Response } from '@angular/http';
import { fadein } from "../animations/fadein"
import 'rxjs/add/operator/map';
declare var $:any; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[fadein]
})
export class HomeComponent implements OnInit {
  public article:any;
  public pro:any;

  download(val){window.location.href=val;};
  constructor(public http:Http) { } 
  ngOnInit() {
  	 this.http.get("../assets/API/article.json").map(res=>res.json()).subscribe((res)=>{	
 	 this.article=res;
 	 },(error)=>{console.log(error);});
 	 	 	 $(document).ready(function () {
 	 	 	 setTimeout(()=>{
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
 	 	 	 },40)	

  	});
	for(let x=0;x<101;x++){
  	  	setTimeout(()=>{this.pro=x+"%";},30*x)
  }	
/* 	 this.spans.fill(" > ");
 	 for(let i=0;i<this.spans.length;i++){
 	 	setTimeout(()=>{
 	 		$(".divspans span").eq(i).css({"transition":"1s","opacity":"1","transform":"scale(2,2)"});
 	 	},i*260);
 	 }*/
 }

}
