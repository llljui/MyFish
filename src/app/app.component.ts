import { Component,Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
 constructor(){
/*   _http.get('http://localhost:4200/src/API/info.json').map(res=>res.json())
       .subscribe((res)=>{
         console.log(res.bigjiang1.name);
       },(error)=>{
         console.log(error);
       });*/
};
 myvaluein=(myvalue,_http:Http)=>{
  if (!myvalue) {
    return "请输入关键词";
  }    
  else{
   let valueout=(_http)=>{
         _http.get('http://localhost:4200/src/API/info.json')
              .map(res=>res.json())
              .subscribe((res)=>{
                if (!res.myvalue) {
                  return myvalue+"not find";
                }
                else{
                    console.log(res.bigjiang1);
                    return res.bigjiang1;
                }
             
             },(error)=>{
               console.log(error);
             });
  };
  valueout(_http);
}
}

}
