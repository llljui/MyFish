import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
