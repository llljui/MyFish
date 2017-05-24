import { Component,Injectable,OnInit,DoCheck } from '@angular/core';
import { Http,URLSearchParams,Jsonp } from '@angular/http';
import { fadein } from "./animations/fadein"
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
/*import 'rxjs/add/operator/toPromise';*/
declare var $:any; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[fadein]
})
@Injectable()
export class AppComponent {
private apiurl='../assets/API/myinfo.json';  
public reslog:string;  
public searv:any=[];  
constructor(public http:Http,public jsonp:Jsonp){}
 public search={
   show:(value)=>{
     $(".con_2").css({"transition":"1s","opacity":"1","box-shadow":"8px 8px 8px #423e3c","border":"1px solid white"});
     if (!value) {
       this.reslog='请您输入正确的关键词';
       this.searv=[];  
     }
     else{
         this.http.get(this.apiurl,{search:value})
                  .map(res=>res.json())
                  .subscribe((res)=>{
                  this.searv=[]; 
                  this.reslog="搜索结果如下"; 
                  (()=>{
                    console.log(res);
                  })();     
                },(error)=>{
                  console.log(error);
                });
     } 
   }
 }
ngOnInit(){
 	if(screen.width>1440) {
 		$('.xy_input').css('margin-top','32%');
 	}
  if(typeof(Storage)!=="undefined")
  {
  console.log('支持 localStorage  sessionStorage 对象!');
      if (!localStorage.visiter) {
       localStorage.visiter=1;
       console.log(localStorage.visiter);
       $("#visiter").text("历史访问人数:"+localStorage.visiter);
      }
      else{
        localStorage.visiter++;
        $("#visiter").text("历史访问人数:"+localStorage.visiter);
      }
} 
  else {
   console.log(' 抱歉!不支持web存储');
}
}      
}
