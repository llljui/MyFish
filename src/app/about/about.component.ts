import { Component, OnInit,DoCheck } from '@angular/core';
import { fadein } from "../animations/fadein"
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
declare var $:any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations:[fadein]
})
export class AboutComponent implements OnInit {
  constructor(public http:Http) {}
  public myinfo:any;
  public infoindex:any;
  public dis=true;
  border=()=>{
  	$('.infoli').css('border-bottom','1px solid #888');
  	console.log(666);
  }
  ngOnInit() {
 	  	$(document).ready(function () {
				$(".content_3").mCustomScrollbar({
					scrollInertia:1000,
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
					for(let x=0;x<$(".infoindex li").length;x++){
					((y)=>{ 
						setTimeout(function () {
						$(".infoindex li").eq(y).css({"transition":"1s","opacity":"1","transform":"rotateX(360deg)"});
						$(".user1 li[class='text-right infoli']").eq(y).css({"transition":"1s","opacity":"1","transform":"rotateX(360deg)"});
						},x*300)})(x);							
					}	
  	});       
  				   this.http.get("../assets/API/myinfo.json")
  			 		   .map(res=>res.json())
  			           .subscribe((res)=>{let x; for(x in res){this.myinfo+=","+res[x];this.infoindex+=","+x;};this.myinfo=this.myinfo.split(",");this.infoindex=this.infoindex.split(",");this.myinfo.shift();this.infoindex.shift();},(err)=>{console.log(err);});
 			   	let keys=prompt("请输入密码查看简历","");
 			   	if (keys=="85208520") {
 			   	this.dis=true;
 			   	}
 			   	else{this.dis=false;}
  }

ngDocheck(){
console.log('docheck');
}


}
