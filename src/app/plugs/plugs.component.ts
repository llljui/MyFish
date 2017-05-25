import { Component, OnInit } from '@angular/core';
import { fadein } from "../animations/fadein";
import {OfflineOptions, ControlAnchor, NavigationControlType} from 'angular2-baidu-map';
declare var $:any;
@Component({
  selector: 'app-plugs',
  templateUrl: './plugs.component.html',
  styleUrls: ['./plugs.component.css'],
  animations:[fadein]
})
export class PlugsComponent implements OnInit {

  constructor() { }
  public opts:any;
  public offlineOpts:OfflineOptions;
  ngOnInit() {
  	 	this.opts={
  	 		center:{
  	 			longitude:120.106501,
        		latitude: 30.293032
  	 		},
  	 		zoom:17,
  	 		markers:[{
  	 			        longitude: 120.003807,
				        latitude: 30.292783,
				        title: '梦想小镇附近',
				        content: '合景天峻',
				        autoDisplayInfoWindow: true
  	 		}],
  	 		geolocationCtrl:{
  	 			anchor:ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT
  	 		},
  	 		scaleCtrl:{
  	 			anchor:ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
  	 		},
  	 		overviewCtrl:{
  	 			isOpen:true
  	 		},
  	 		navCtrl:{
  	 			type:NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE
  	 		}
  	 	};
  	 	this.offlineOpts={
  	 		retryInterval:5000,
  	 		txt:"没有网络"
  	 	};

 	  	/*$(document).ready(function () {  		
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
  	});	*/
  	// 刚加载加载地图信息

  }
    loadMap(e:any){
    console.log(e);
  }

  // 单机地图坐标, 打印信息
  clickMarker(marker:any){
    console.log(marker);
  }
}
