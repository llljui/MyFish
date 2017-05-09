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
 constructor(public http:Http){}
public sobj={
	gets:(value:any) =>{
		let http:Http;
		if (!value) {return "请输入关键词";}
        else{    
                 value=http.get('./src/API/info.json')
		                         .map(res=>res.json())
		                         .subscribe((res)=>{console.log(res.bigjiang1.age)});	                         
            }
	}
}
 ngOnInit(){
 	if(screen.width>1440) {
 		$('.xy_input').css('margin-top','32%');
 	}
}             
}
