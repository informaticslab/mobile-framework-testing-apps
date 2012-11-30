/*ef1656b7b6b5203d85979fd278622039bbcff8ea*/Ext.define("IrdaEval.model.EvalModulesModel",{extend:"Ext.data.Model",config:{fields:[{defaultValue:["Buttons"],name:"name"}]}});Ext.define("IrdaEval.view.ListContainer",{extend:"Ext.Container",alias:"widget.listContainer",config:{layout:{type:"fit"},data:["Buttons"],items:[{xtype:"list",id:"evalList",itemTpl:["Evaluate {name}"],store:"EvalModulesArrayStore"}]}});Ext.define("IrdaEval.view.EvaluateButtons",{extend:"Ext.Container",config:{layout:{pack:"center",type:"vbox"},items:[{xtype:"spacer",docked:"left",width:50},{xtype:"spacer",docked:"right",width:50},{xtype:"button",margin:10,text:"MyButton3"},{xtype:"container",height:78,width:241,items:[{xtype:"button",text:"Standard Button"}]},{xtype:"fieldset",title:"MyFieldSet",items:[{xtype:"textfield",label:"Field"},{xtype:"textfield",label:"Field"},{xtype:"button",text:"MyButton4"}]}]}});Ext.define("IrdaEval.view.PickerContainer",{extend:"Ext.Container",config:{items:[{xtype:"picker",ui:"",useTitles:true,slots:[{xtype:"pickerslot",align:"center",data:[{text:"Tom",value:1},{text:"Brian",value:2},{text:"Sara",value:3},{text:"Dale",value:4},{text:"J",value:5},{text:"Greg",value:6}],name:"MyPickerSlot",title:"IRDA Employee"}]}]}});Ext.define("IrdaEval.view.MyFormPanel",{extend:"Ext.form.Panel",config:{items:[{xtype:"spacer",height:40,width:284},{xtype:"button",text:"MyButton6"},{xtype:"spacer",height:40,width:284},{xtype:"button",text:"MyButton6"}]}});Ext.define("IrdaEval.view.ImageContainer",{extend:"Ext.Container",config:{layout:{type:"vbox"},items:[{xtype:"image",src:"resources/images/cbr600rr.jpeg",flex:1}]}});Ext.define("IrdaEval.view.EvaluateFile",{extend:"Ext.Container",config:{layout:{type:"vbox"},items:[{xtype:"container",flex:1,items:[{xtype:"button",centered:true,text:"Write File"}]},{xtype:"container",flex:1,items:[{xtype:"button",centered:true,text:"Read File"}]},{xtype:"container",html:"",flex:4}]}});Ext.define("IrdaEval.view.SlidersView",{extend:"Ext.Container",config:{items:[{xtype:"sliderfield",centered:true,height:69,width:318,label:"Value"}]}});Ext.define("IrdaEval.view.AccelerometerView",{extend:"Ext.Container",config:{id:"accView",layout:{type:"vbox"},items:[{xtype:"label",border:20,centered:true,html:"Acceleration X:",ui:"light",flex:1},{xtype:"label",border:20,centered:true,id:"accX",flex:1}]}});Ext.define("IrdaEval.controller.MainNavController",{extend:"Ext.app.Controller",config:{refs:{nav:"#mainNav",evalList:"#evalList"},control:{"#evalList":{itemtap:"onListItemTap"}}},onListItemTap:function(b,d,f,c,g,k){var h=this,j,i;if(c){console.log("got here");var a=h.getNav();j=c.get("name");console.log("Record name = %s",j);if(j=="Buttons"){i=Ext.create("IrdaEval.view.EvaluateButtons",{title:"Evaluate Buttons"});console.log("Button eval selected, ButtonsView = %s",i)}else{if(j=="Picker"){i=Ext.create("IrdaEval.view.PickerContainer",{title:"Evaluate Picker"});console.log("Picker eval selected, PickerView = %s",i)}else{if(j=="Images"){i=Ext.create("IrdaEval.view.ImageContainer",{title:"Evaluate Images"});console.log("Image eval selected, ImageView = %s",i)}else{if(j=="File IO"){i=Ext.create("IrdaEval.view.EvaluateFile",{title:"Evaluate File IO"});console.log("File eval selected, view = %s",i)}else{if(j=="Camera"){i=Ext.create("IrdaEval.view.CameraView",{title:"Evaluate Camera"});console.log("Camera eval selected, view = %s",i)}else{if(j=="Sliders"){i=Ext.create("IrdaEval.view.SlidersView",{title:"Evaluate Sliders"});console.log("Slider eval selected, view = %s",i)}else{if(j=="Accelerometer"){i=Ext.create("IrdaEval.view.AccelerometerView",{title:"Evaluate Accelerometer"});console.log("Accelerometer eval selected, view = %s",i)}}}}}}}a.push(i)}},init:function(a){var b=this}});Ext.define("IrdaEval.controller.Camera",{extend:"Ext.app.Controller",config:{views:["CameraView"],refs:{cameraButton:"#cameraBtn",photoView:"#photoContainer"},control:{"#cameraBtn":{tap:"onButtonTap"}}},onButtonTap:function(c,h,b){console.log("Camera button press!");var f=this;try{console.log("inside try capture photo");var g=navigator.camera.PictureSourceType;var a=navigator.camera.DestinationType;navigator.camera.getPicture(f.onPhotoURISuccess,null,{sourceType:1,quality:60})}catch(d){alert(d)}},onFail:function(a){alert("Failed: "+a)},onPhotoURISuccess:function(d){var c=this;var a=c.getPhotoView();console.log("photo view = ",a);var b=Ext.create("Ext.Img",{src:"data:image/jpeg;base64,"+d,height:64,width:64});a.add(b)}});Ext.define("IrdaEval.controller.Accelerometer",{extend:"Ext.app.Controller",config:{refs:{accView:"#accView",xValue:"#accX"},control:{"#accView":{activate:"onAccViewActivate"}}},onAccViewActivate:function(b,d,a,c){console.log("AccView activated.")},onSuccess:function(c){var b=this;var a=b.getXValue;a=c.x},startWatch:function(){var a={frequency:3000};watchID=navigator.accelerometer.watchAcceleration(onSuccess,onError,a)},stopWatch:function(){if(watchID){navigator.accelerometer.clearWatch(watchID);watchID=null}},loaded:function(){startWatch()},onError:function(){alert("onError!")}});Ext.define("IrdaEval.store.EvalModulesArrayStore",{extend:"Ext.data.Store",requires:["IrdaEval.model.EvalModulesModel"],config:{data:[{name:"Buttons"},{name:"Picker"},{name:"Images"},{name:"File IO"},{name:"Camera"},{name:"Sliders"},{name:"Accelerometer"}],model:"IrdaEval.model.EvalModulesModel",storeId:"EvalModulesArrayStore",proxy:{type:"ajax",reader:{type:"array"}}}});Ext.define("IrdaEval.view.MainNav",{extend:"Ext.navigation.View",alias:"widget.mainNav",requires:["IrdaEval.view.ListContainer"],config:{id:"mainNav",items:[{xtype:"listContainer",id:"IrdaEval",title:"IRDA Eval"}]}});Ext.define("IrdaEval.view.CameraView",{extend:"Ext.Container",alias:"widget.cameraView",config:{id:"cameraView",layout:{type:"vbox"},items:[{xtype:"container",flex:1,items:[{xtype:"button",centered:true,id:"cameraBtn",text:"Take Picture"}]},{xtype:"container",id:"photoContainer",flex:3}]}});Ext.Loader.setConfig({enabled:true});Ext.application({models:["EvalModulesModel"],stores:["EvalModulesArrayStore"],views:["MainNav","ListContainer","EvaluateButtons","PickerContainer","MyFormPanel","ImageContainer","EvaluateFile","SlidersView","AccelerometerView"],name:"IrdaEval",controllers:["MainNavController","Camera","Accelerometer"],launch:function(){Ext.create("IrdaEval.view.MainNav",{fullscreen:true})}});