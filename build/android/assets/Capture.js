function Calculate(){var e=parseFloat(var1.value.replace(",",".")),t=parseFloat(var2.value.replace(",",".")),a=parseFloat(var3.value.replace(",",".")),i=e/(t*a),o=e/(t*a*2),n=e/(t*a*2*Math.PI),r=Math.round(100*i)/100,l=Math.round(100*o)/100,d=Math.round(100*n)/100;isNaN(r)&&(resultLbl1.text="",resultLbl2.text="Result is null, check input fields!"),isNaN(l)&&(resultLbl2.text="Result is null, check input fields!"),isNaN(d)?(resultLbl3.text="",resultLbl2.text="Result is null, check input fields!"):(resultLbl1.text="Maximum upstream width (m) : "+r,resultLbl2.text="Width at well location (m) : "+l,resultLbl3.text="Distance to stagnation point (m) : "+d)}Titanium.UI.setBackgroundColor("#000");var win=Titanium.UI.currentWindow;win.backgroundImage="images/bgGradient.png";var textColor="#FFF",rowHeight=40,rows=[],descRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),descLabel=Titanium.UI.createLabel({text:"This application calculates three capture zone main measures from pumping in a sloping unconfined aquifer",font:{fontSize:14,fontFamily:"Helvetica Neue"},color:textColor,left:5});descRow.add(descLabel),win.add(descRow);var pumpingRateRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl1=Titanium.UI.createLabel({text:"Pumping rate (m³/s):",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});pumpingRateRow.add(lbl1);var var1=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130,softKeyboardOnFocus:Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS});pumpingRateRow.add(var1),win.add(pumpingRateRow);var transmissivityRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl2=Titanium.UI.createLabel({text:"Transmissivity (m²/s):",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});transmissivityRow.add(lbl2);var var2=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130});transmissivityRow.add(var2),win.add(transmissivityRow);var hydrailicRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl3=Titanium.UI.createLabel({text:"Hydraulic gradient (-):",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});hydrailicRow.add(lbl3);var var3=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130});hydrailicRow.add(var3),win.add(hydrailicRow);var calcRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),calculateBtn=Titanium.UI.createButton({title:"Calculate",width:200,backgroundColor:"transparent",color:"#B5CCEF"});calcRow.add(calculateBtn),win.add(calcRow),calculateBtn.addEventListener("click",function(){Calculate()});var resultHeaderRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE});resultHeaderRow.backgroundColor="#909FB9";var resultHeaderLbl=Titanium.UI.createLabel({text:"Result:",font:{fontSize:18,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:"black",left:5});resultHeaderRow.add(resultHeaderLbl),win.add(resultHeaderRow);var resultRow1=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),resultLbl1=Titanium.UI.createLabel({text:"Maximum upstream width (m) :",font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor,width:300,left:5});resultRow1.add(resultLbl1),win.add(resultRow1);var resultRow2=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),resultLbl2=Titanium.UI.createLabel({text:"Width at well location (m) :",font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor,width:300,left:5});resultRow2.add(resultLbl2),win.add(resultRow2);var resultRow3=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),resultLbl3=Titanium.UI.createLabel({text:"Distance to stagnation point (m) :",font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor,width:300,left:5});resultRow3.add(resultLbl3),win.add(resultRow3),win.activity.onCreateOptionsMenu=function(e){var t=e.menu,a=t.add({title:"About",showAsAction:Ti.Android.SHOW_AS_ACTION_IF_ROOM});a.addEventListener("click",function(e){var t=Titanium.UI.createWindow({title:"Capture zone",url:"DetailDescription.js",lblText:"This application calculates three capture zone main measures from pumping in a sloping unconfined aquifer. The far field flow is derived from Darcy´s law, which means that the flow equals the product of transmissivity and natural hydraulic gradient per unit width. In essence, the ratio between the far upstream width, width at well and downstream stagnation point that marks the end of the capture zone is 1:1/2:1/2(pi). Flow outside these hydraulic boundaries, is not contributing to the pumping."});t.open()})};