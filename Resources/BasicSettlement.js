// this sets the background color of the master UIView (when there are no windows/tab groups on it)
/// <reference path="Titanium-vsdoc.js" />
/// <reference path="jquery-1.4.1-vsdoc" />
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');
var win = Titanium.UI.currentWindow;
win.backgroundImage = 'images/bgGradient.png';
var textColor ='#FFF';
var rowHeight = 40;
var rows = [];


//****DESCRIPTION LABEL*****
var descRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
var descLabel = Titanium.UI.createLabel({
	text: "This application estimates the basic settlements of a uniform flat soil, subject to groundwater drawdown.",
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	color: textColor,
	left: 5
});	

descRow.add(descLabel);
win.add(descRow);
    
//****************** INPUT FIELDS *******************

var soilStiffnessRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl1 = Titanium.UI.createLabel({
	text: 'One-dimensional soil\nstiffness E`(0) (MPa):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
soilStiffnessRow.add(lbl1);

var var1 = Titanium.UI.createTextField({
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width:130,
        right: 5
});
soilStiffnessRow.add(var1);
win.add(soilStiffnessRow);

var soilLayerThicknessRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl2 = Titanium.UI.createLabel({
	text: 'Soil layer thickness at\nPOI with E`(0) (m):',	
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
soilLayerThicknessRow.add(lbl2);

var var2 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 130
    });
soilLayerThicknessRow.add(var2);
win.add(soilLayerThicknessRow);

var drawDownRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var lbl3 = Titanium.UI.createLabel({
	text: 'Drawdown at point of\ninterest (POI) (m):',  
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
drawDownRow.add(lbl3);

var var3 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width: 130,
        right: 5
    });
 
drawDownRow.add(var3);
win.add(drawDownRow);  

//******************** CALCULATEBTN************************** 
var calcRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});

var calculateBtn = Titanium.UI.createButton({
	title:'Calculate',
	width:200,
	backgroundColor: 'transparent',
	color: '#B5CCEF'
});    

calcRow.add(calculateBtn);
win.add(calcRow);

calculateBtn.addEventListener('click', function()
{
	Calculate();
});

//***********************************************************
var resultHeaderRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
 
resultHeaderRow.backgroundColor = '#909FB9';
var resultHeaderLbl = Titanium.UI.createLabel({
	text: 'Result:',
	font:{fontSize:18,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: 'black',
	left: 5
});	
resultHeaderRow.add(resultHeaderLbl);
win.add(resultHeaderRow);

var resultRow = Titanium.UI.createView({
	width: '100%',
	height: Ti.UI.SIZE
});
 
var resultLbl = Titanium.UI.createLabel({
	text: 'The magnitude of settlement at POI is (mm):',
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor,
	width: 300,
	left: 5
});	

resultRow.add(resultLbl);
win.add(resultRow);

//********** Calculate ****************************
function Calculate()
{
	 var val1 = parseFloat(var1.value.replace(',', '.'));	
	 var val2 = parseFloat(var2.value.replace(',', '.'));
	 var val3 = parseFloat(var3.value.replace(',', '.'));

	var result = (10/val1)*val2*val3;
	var resultRounded = Math.round(result*1)/1;


	if (isNaN(resultRounded)){
		resultLbl.text = 'Result is null, check input fields!';
	} else {
		resultLbl.text = 'The magnitude of settlement at POI is (mm): '+resultRounded+'';
	}
}

win.addEventListener("click", function()
{
    var1.blur();
    var2.blur();
    var3.blur();

});


//***************** ABOUT WINDOW ***********************

win.activity.onCreateOptionsMenu = function(e) {
    var menu = e.menu;
 
    var aboutMenuItem = menu.add({
        title : "About",
    	showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM
    });
        
	aboutMenuItem.addEventListener("click", function(e) {
        var detailInfo = Titanium.UI.createWindow({
        	title: 'Basic settlement sensitivity for soils',
        	url: 'DetailDescription.js',
        	lblText: 'This application estimates the basic settlements of a uniform flat soil, subject to groundwater drawdown. The vertical settlement increases with the thickness of the soil and with the drawdown. It will be smaller if the one-dimensional soil stiffness E`(0) is larger.\n\nIn reality, the soil is not homogeneous, nor will the pressure drop be constant over the soil volume, nor is the soil stiffness constant. In general, settlements also will take time to develop.\n\nTherefore, this estimation of this basic settlement is uncertain and provides only the magnitude. However, the ultimate goal is to assess risk of damage, rather than to predict the precise soil settlement.\n\nGeotechnical properties vary in space. Hence, assess the uncertainty, spatial variability and the consequences involved as the soil is inherently heterogeneous but is here represented by the vertical weighted harmonic mean value as a generalization.\n\nSee, for instance:\nPreene, Roberts, Powrie, Dyer, Groundwater control -design and practice, CIRIA C515,\nCashman,Preene, Groundwater Lowering in Construction, CRC,\nHyun-Ki Kim, Spatial Variability in Soils: Stiffness and Strength, Thesis, Georgia Inst. of Technology, 2005.\n'
        });
    	
    	detailInfo.open();
	});
};
