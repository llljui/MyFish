import { Component,Injectable,OnInit,DoCheck } from '@angular/core';
import { Http,URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
/*import 'rxjs/add/operator/toPromise';*/
declare var $:any; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
private apiurl='../assets/API/info.json';  
public reslog:string;  
public searv:any=[];  
constructor(public http:Http){}
 public search={
   show:(value)=>{
     if (!value) {
       this.reslog='请您输入正确的关键词';
       this.searv=[];  
     }
     else{
         this.http.get(this.apiurl)
                  .map(res=>res.json())
                  .subscribe((res)=>{
                  this.searv=[]; 
                  this.reslog="搜索结果如下"; 
                  (()=>{
                    console.log(res);
                    this.searv.push(res.moive);
                  })();     
                },(error)=>{
                  alert(error);
                  console.log(error);
                });
     } 
   }
 }
 ngOnInit(){
 	if(screen.width>1440) {
 		$('.xy_input').css('margin-top','32%');
 	}
}      
}
