import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
declare var $:any; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public spans=new Array(25);
  public article:any;
  public moive:any;
  constructor(public http:Http) { } 
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

 	 this.spans.fill(" > ");
 	 for(let i=0;i<this.spans.length;i++){
 	 	setTimeout(()=>{
 	 		$(".divspans span").eq(i).css({"transition":"1s","opacity":"1","transform":"scale(2,2)"});
 	 	},i*260);
 	 }
 	 this.http.get("../../src/assets/API/article.json").map(res=>res.json()).subscribe((res)=>{
 	 	this.article=res.article;
 	 	this.moive=res.moive;
 	 	console.log(typeof(res.article));
 	 },(error)=>{console.log(error);})


 }

}
