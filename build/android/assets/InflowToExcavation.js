function Calculate(){var e=parseFloat(var0.value.replace(",",".")),t=parseFloat(var1.value.replace(",",".")),a=parseFloat(var2.value.replace(",",".")),i=parseFloat(var3.value.replace(",",".")),r=parseFloat(var4.value.replace(",",".")),o=t+(e-t)/2,n=.9756*(i+(a-i)*(o/e)),l=.097*((n-i)/o),d=2*Math.PI*o*n,u=r*l*d,c=Math.round(1e4*u)/1e3;isNaN(c)?resultLbl.text="Result is null, check input fields!":resultLbl.text="The estimated inflow Q is (m3/s): "+c}Titanium.UI.setBackgroundColor("#000");var win=Titanium.UI.currentWindow;win.backgroundImage="images/bgGradient.png";var textColor="#FFF",rowHeight=40,rows=[],descRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),descLabel=Titanium.UI.createLabel({text:"This application estimates the radial inflow to an excavation by Darcy´s equation Q=kiA.",font:{fontSize:14,fontFamily:"Helvetica Neue"},color:textColor,left:5});descRow.add(descLabel),win.add(descRow);var estimatedInfluenceRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl0=Titanium.UI.createLabel({text:"Estimated influence\nradius R(0) (m): ",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});estimatedInfluenceRow.add(lbl0);var var0=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130,softKeyboardOnFocus:Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS});estimatedInfluenceRow.add(var0),win.add(estimatedInfluenceRow);var radiusOfExcavationRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl1=Titanium.UI.createLabel({text:"Radius of\nexcavation r(w) (m):",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});radiusOfExcavationRow.add(lbl1);var var1=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130});radiusOfExcavationRow.add(var1),win.add(radiusOfExcavationRow);var waterHeadInfluenceRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl2=Titanium.UI.createLabel({text:"Water head H(0) at influence\nradius (m):",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});waterHeadInfluenceRow.add(lbl2);var var2=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130});waterHeadInfluenceRow.add(var2),win.add(waterHeadInfluenceRow);var waterheadCentreRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl3=Titanium.UI.createLabel({text:"Water head H(w) at centre of\nexcavation (m):",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});waterheadCentreRow.add(lbl3);var var3=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130});waterheadCentreRow.add(var3),win.add(waterheadCentreRow);var hydraulicConductivityRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl4=Titanium.UI.createLabel({text:"Hydraulic conductivity (m/s):",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});hydraulicConductivityRow.add(lbl4);var var4=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130});hydraulicConductivityRow.add(var4),win.add(hydraulicConductivityRow);var calcRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),calculateBtn=Titanium.UI.createButton({title:"Calculate",width:200,backgroundColor:"transparent",color:"#B5CCEF"});calcRow.add(calculateBtn),win.add(calcRow),calculateBtn.addEventListener("click",function(){Calculate()});var resultHeaderRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE});resultHeaderRow.backgroundColor="#909FB9";var resultHeaderLbl=Titanium.UI.createLabel({text:"Result:",font:{fontSize:18,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:"black",left:5});resultHeaderRow.add(resultHeaderLbl),win.add(resultHeaderRow);var resultRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),resultLbl=Titanium.UI.createLabel({text:"The estimated inflow Q is (m3/s):",font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor,width:300,left:5});resultRow.add(resultLbl),win.add(resultRow),win.activity.onCreateOptionsMenu=function(e){var t=e.menu,a=t.add({title:"About",showAsAction:Ti.Android.SHOW_AS_ACTION_IF_ROOM});a.addEventListener("click",function(e){var t=Titanium.UI.createWindow({title:"Inflow to excavation",url:"DetailDescription.js",lblText:"This application estimates the radial inflow to an excavation by Darcy´s equation Q=kiA.\n\nThis is the simplest empirical inflow formula, in which K denotes the representative hydraulic conductivity, i denotes the average hydraulic gradient and A denotes the cross-sectional area through which flow occurs. As A (and H0 and Hw) is measured from the aquifer base, both horizontal and vertical flow are accounted for. The formula is valid for low flows through uniform soils.\n\nWater head is measured upwards from aquifer base. Alternately, to use the Dupuit well equation accounts only for horizontal radial flow. As the vertical inflow can be greater than the horizontal inflow, the Darcy equation provides only an approximation of the size of the inflow. Prior to introducing numerical values, be ascertain that a correct conceptual model is formed.\n\nSee,  for instance: John Woodward, An Introduction to Geotechnical Processes, Spon Press,  2005, p. 24."});t.open()})};