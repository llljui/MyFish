import { Component,Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
constructor(private _http:Http){
/*   _http.get('http://localhost:4200/src/API/info.json')
       .map(res=>res.json())
       .subscribe((res)=>{
         console.log(res);
       },(error)=>{
         console.log(error);
       });*/
};

myvaluein=(myvalue)=>{
  let search=[];
  if (!myvalue) {
  	console.log(myvalue);
  	return "请输入关键词";
  }
  else if (search.length===0) {
  	console.log(myvalue);
  	return "搜不到您要的内容！";
  }
  else{return myvalue;}
}
}
