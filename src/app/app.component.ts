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
         this.http.get('../assets/info.json')
                  .map(res=>res.json())
                  .subscribe((res)=>{ 
                  this.reslog="搜索结果如下"; 
                  (()=>{this.searv.push(res.bigjiang1);})();
                  console.log(this.searv);      
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
