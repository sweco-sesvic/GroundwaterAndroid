function Calculate(){var e=parseFloat(var0.value.replace(",",".")),t=parseFloat(var1.value.replace(",",".")),a=parseFloat(var2.value.replace(",",".")),i=parseFloat(var3.value.replace(",",".")),r=parseFloat(var4.value.replace(",",".")),o=1.44-1.338*Math.sqrt(r/a),n=Math.pow(o,2),l=1800*i*Math.sqrt(t),d=10*Math.round(l/10),u=1e3*(2*t*a*e*i)/(d+n*a),c=Math.round(10*u)/10;isNaN(c)||isNaN(d)?(resultLbl1.text="Result is null, check input fields!",resultLbl2.text=""):(resultLbl1.text="Steady-state inflow (L/s): "+c,resultLbl2.text="Approximate distance of influence (m): "+d)}Titanium.UI.setBackgroundColor("#000");var win=Titanium.UI.currentWindow;win.backgroundImage="images/bgGradient.png";var textColor="#FFF",rowHeight=40,descRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),descLabel=Titanium.UI.createLabel({text:"A partially penetrating long trench down to a confined aquifer receives water from both sides of the trench.",font:{fontSize:14,fontFamily:"Helvetica Neue"},color:textColor,left:5});descRow.add(descLabel),win.add(descRow);var row1=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl0=Titanium.UI.createLabel({text:"Linear length B of trench \n(m): ",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});row1.add(lbl0);var var0=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130,softKeyboardOnFocus:Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS});row1.add(var0),win.add(row1);var row2=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl1=Titanium.UI.createLabel({text:"Aquifer hydraulic \nconductivity K (m/s): ",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});row2.add(lbl1);var var1=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130,softKeyboardOnFocus:Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS});row2.add(var1),win.add(row2);var row3=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl2=Titanium.UI.createLabel({text:"Thickness of confined \naquifer D (m): ",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});row3.add(lbl2);var var2=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130,softKeyboardOnFocus:Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS});row3.add(var2),win.add(row3);var row4=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl3=Titanium.UI.createLabel({text:"Drawdown s (m): ",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});row4.add(lbl3);var var3=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130,softKeyboardOnFocus:Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS});row4.add(var3),win.add(row4);var row5=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl4=Titanium.UI.createLabel({text:"Depth of penetration of \ntrench into aquifer p (m): ",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});row5.add(lbl4);var var4=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130,softKeyboardOnFocus:Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS});row5.add(var4),win.add(row5);var calcRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),calculateBtn=Titanium.UI.createButton({title:"Calculate",width:200,backgroundColor:"transparent",color:"#B5CCEF"});calcRow.add(calculateBtn),win.add(calcRow),calculateBtn.addEventListener("click",function(){Calculate()});var resultHeaderRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE});resultHeaderRow.backgroundColor="#909FB9";var resultHeaderLbl=Titanium.UI.createLabel({text:"Result:",font:{fontSize:18,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:"black",left:5});resultHeaderRow.add(resultHeaderLbl),win.add(resultHeaderRow);var resultRow1=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),resultLbl1=Titanium.UI.createLabel({text:"Steady-state inflow (L/s): ",font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor,width:300,left:5});resultRow1.add(resultLbl1),win.add(resultRow1);var resultRow2=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),resultLbl2=Titanium.UI.createLabel({text:"Approximate distance of influence (m): ",font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor,width:300,left:5});resultRow2.add(resultLbl2),win.add(resultRow2),win.activity.onCreateOptionsMenu=function(e){var t=e.menu,a=t.add({title:"About",showAsAction:Ti.Android.SHOW_AS_ACTION_IF_ROOM});a.addEventListener("click",function(e){var t=Titanium.UI.createWindow({title:"Inflow to long trench",url:"DetailDescription.js",lblText:"A partially penetrating long trench down to a confined aquifer receives water from both sides of the trench.\n\nThe formula is in essence Darcy´s law or Q=2·T·i·B, where T=K·D, B=B and i ≈ s/L, flow from two sides.\n\nThe partial penetration is accounted for by multiplying a factor [0-2] to the thickness D and adding it to the distance of influence, thus L becomes L´.\n\nQ = (2·K·D·B·s)/(L+λ*D)\nλ ≈ [1,44-1,33·√(p/d)]²\n\nThe crucial parameter, besides K, is distance of influence L. L can be estimated as:\nL ≈ c·3000·s·√K (Sichardt), where c ≈ 0,5-0,7.\n(here c=0,6).\n\nLimitations in calculation, see:\nCashman & Preene, Groundwater Lowering in Construction, A practical guide to Dewatering, CRC Press, 2013, table 7.1."});t.open()})};