
///////////////////////////////////////////////////////conv + Labs
var vUnitConversion = "Unit Conversion";
var vUNITCONVPAN = "UNIT CONVERSION PANEL"
var UnitConvP = vUnitConversion+ " Page";


function mcxpRST(){
mcxpCLRback(this.form);
}

function mcxpCLRback(){
	for (var i = 0; i < smnxform.elements.length; i++) {
		if (smnxform.elements[i].type == "text") {
				smnxform.elements[i].style.background = "#FFFFFF";	
 		}
	}
	for (var i = 0; i < smnxform.elements.length; i++) {
		if (smnxform.elements[i].type == "text") {
				smnxform.elements[i].focus();
				break;
 		}
	}
}

function smnxpfrci7(){
var varrttl = "<img src=../../images/mc_arrttl.gif width=16 height=16 border=0 align=baseline>";
var vsmnxpfrci7 = vsmE6F6up+"<table width=100% class=smnx_hdFD3 valign=top cellspacing=0 cellpadding=0 topmargin=0 hspace=0 vspace=0>";
vsmnxpfrci7 += " <tr><td height=2 colspan=2></td></tr><tr><td width=1%><img src=../../images/mc_t.gif align=bottom width=1 height=22></td>";
vsmnxpfrci7 += "<td width=99%>"+smTab0+"<tr><td width=74%><font class=h11b><font color=#003366><b>"+varrttl+this.smnxCNT[3].name+"  ("+vUnitConversion+")</font></td>";
vsmnxpfrci7 += "<td width=25% align=right valign=bottom><font class=v1bp><font color=#708090>"+NowDate+NowTime+" </td><td width=1%></td></tr></table>  </td></tr></table>";
document.write(vsmnxpfrci7);
}
function mceptabtop7(){
document.write(smTab0 + "<tr valign=top><td width=80% valign=top>");
}
function mceptabmid7(){
document.write("</td><td width=7% align=right></td><td width=13% align=right>");
}
function dsplInpts7(){
var dsplnptu = seprtrzTp+" <table width=100% border=0 cellspacing=1 cellpadding=1 bgcolor=#EEEEDD><tr><td><font class=h10b><b>"; 
dsplnptu += " <img src=../../images/mc_t.gif width=11 height=11><font color=#336699> "+vUNITCONVPAN+"</td></tr></table> ";
dsplnptu += "<table width=100% border=0 valign=top cellspacing=0 cellpadding=0 bgcolor=#CCCCCC><tr><td height=2></td></tr></table>";
dsplnptu += "<table width=100% border=0 valign=top cellspacing=0 cellpadding=1 bgcolor=#E6E6E6 valign=top><tr valign=top><td width=8%>";
dsplnptu += "<img src=assets/sml_from_"+ven+".gif width=26 height=103 border=0></td><td width=92%>";
document.write(dsplnptu);
}
function dsplOutpts7(){
document.write("</td></tr></table>");
var dsplutptu = seprtrzTp+" <table width=100% border=0 cellspacing=1 cellpadding=1 bgcolor=#c6cccc><tr><td><font class=h9b><font color=#003366><b>"; 
dsplutptu += " <img src=../../images/mc_t.gif width=11 height=11> "+vResult+" </td></tr></table> ";
dsplutptu += "<table width=100% border=0 valign=top cellspacing=0 cellpadding=1 bgcolor=#E6E6E6><tr><td width=8%>";
dsplutptu += "<img src=assets/sml_to_"+ven+".gif width=26 height=80 border=0></td><td width=92%>";
document.write(dsplutptu);
}


var vconvpnlCVbtn = "<input type=button name=calc value='Convert' onclick='CmptFrm(this.form)' style='width:130;height:25;color:#114477;font-family:helvetica,sans-serif;font-size:9pt;font-weight:bold'> ";

function smmcprox7(){
	
edzmprox =  smTab0+" <tr valign=top bgcolor=#E6E6E6><td width=10%></td><td width=90%> ";
edzmprox +=  " <table width=100% border=0 valign=top cellspacing=0 cellpadding=1>";
edzmprox +=  " <tr><td height=12></td></tr> <tr align=center><td><font class=t8a>";
document.write(edzmprox);
document.write("<input type=reset value='Reset' onload='this.reset()' onclick='mcxpRST(this.form)' style='width:75;height:25;color:#336699;font-family:helvetica,sans-serif;font-size:9pt;font-weight:bold'> &#160;&#160;&#160;");
document.write(vconvpnlCVbtn);
document.write("</td></tr></table></td></tr><tr><td height=12></td></tr></table>");
//smmcprox =  " <table width=100% border=0 valign=top cellspacing=0 cellpadding=0 bgcolor=#E6E6E6><tr bgcolor=#999999><td height=2></td></tr>";
//smmcprox +=  "<tr valign=top><td><img src=../../images/mclogoapp8.png width=300 height=35 hspace=0 vspace=0 border=0></td></tr></table>";
//document.write(smmcprox);
}

var vTblInF5 = "<b><sup>2</sup> Click on the link to go to Equation page.";
var vTblInF6 = "</b></font></td></tr></table> </td></tr></table>"+vsmE6F6dn+"<br><br>";

function mcepTblIn7(){
var TblIn2 = "<br><br>" + smTab0 + "<tr valign=top><td>";
TblIn2 += vsmE6F6up + " <TABLE width=100% cellspacing=1 cellpadding=2 border=0><tr align=left>";
TblIn2 += "<td width=80%><font class=h9b><font color=#003366><b>"+this.smnxCNT[3].name+" </b>("+UnitConvP+")</font></td>";
TblIn2 += "<td width=20% bgcolor=#E6E6E6><font class=t7b><font color=#336699>"+vLinkstoEquations;
TblIn2 += "<img src=../../images/sm_dwn.gif border=0 height=9 width=9 align=baseline></td></tr></table>";
document.write(TblIn2 + vTblInc);
document.write(smTab0 + "<tr bgcolor=#DDDDDD><td height=6></td></tr></table>");
	for (var i = 0; i < mcepInpts.length; i++) {
 	this.mcepInpts[i].TblInOtB();
	}	
document.write(vTblInF2 + vTblInF5 + vTblInF6+ "");
}


function mcepdivb7(){
document.write("</smnxfrm></form><br>"+smTab0+"<tr><td height=12></td></tr></table>");
}

function dspCFnP7(){
document.write(smTab0 + trD + "<td height=12><font class=a8><font color=#666666> CF= conversion factor. ");
document.write("Multiply C Units -first column- by CF to obtain SI Units -2nd column-.</td><tr></table>"); 
}
function smnxpfrbW(){
document.write(smTab12 + "<tr><td height=1 bgcolor=#667788></td></tr><tr><td height=3></td></tr>");
document.write("<tr valign=top><td><font class=t7pk> powered by:</td></tr><tr><td>");
document.write("<IMG SRC=../../imagesa/smCF_abammN.png BORDER=0 HEIGHT=14 WIDTH=70 hspace=20></td></tr><tr><td><font class=t7pk>");
document.write(""+this.abamm000.name_a+"</td></tr><tr><td height=3></td></tr><tr><td height=1 bgcolor=#667788></td></tr></table><br>");
if (this.smnxCNT[3].pagelinx.substring(3,4) == "a" || this.smnxCNT[3].pagelinx.substring(2,3) == "a"){
document.write("");
}else{
document.write(smTab0+"<TR><TD><font class=t8a>");
/////////document.write("<img src=../../imagesa/sm_adfav.gif hspace=2>&nbsp;<a title=\'"+vAdd2FavList+"\' class=hpb href=\"javascript:fdauxBWindvw()\">"+vLnk2Pg+"</a>");
document.write("</TD></TR></TABLE>");
	}
}

function smnxpfrcu(){
	return;
if (this.smnxCNT[3].name_a != "") {AbbrvNm3 = this.smnxCNT[3].name_a;}else{AbbrvNm3 = this.smnxCNT[3].name;}
var vsmnxpfrcu = smTab0+"<tr bgcolor=#E6E6E6><td width=1%><img src=../../images/mc_t.gif align=baseline width=4 height=8></td><td width=98%>";
vsmnxpfrcu += smTab0 + "<tr valign=center><td width=67%><font class=a1bb> "+ vsm_frw+this.smnxCNT[0].SMRTRNLNX0()+ " | "; 
vsmnxpfrcu +=  this.smnxCNT[1].SMRTRNLNX0()  +" | "+ this.smnxCNT[2].SMRTRNLNX0()+" | "+AbbrvNm3 + "</font></td>";
vsmnxpfrcu += "<td width=15%><font class=t8a><input type=image src=../../images/sm_help.gif onClick=javascript:fdauxEWindvw();> "+vQuickHelp+" </font></td>";
vsmnxpfrcu += "<td width=18% align=right valign=top><table align=top valign=top><tr><td>"+varsm_bf+"</td></tr></table></td></tr></table></td>";
vsmnxpfrcu += "<td width=1%></td></tr></table>";
document.write(vsmnxpfrcu);
}


/////////////////////////////////////////////////////c
function smnxcUNO7(){
this.smnxpfra1();
this.smnxpfrb1();
this.smnxpfrbi();
this.smnxpfrbu();
this.smnxpfrbX7();
this.smnxpfrbW();
this.smnxpfrb2();
this.smnxpfrci7();
this.smnxpfrcu();
document.write(vsmE6F6dn+"<br>");


this.mceptabtop7();
this.StrtAppBx();
this.dsplInpts7();
	for (var iek = 0; iek < mcepInpts.length; iek++) {
 	this.mcepInpts[iek].dfrbucp();
	}	
this.ixfrbx1();
this.ixfrbx1();
this.dsplOutpts7();
this.dfrbwbcAC();
	for (var ieq = 0; ieq < mcepOtpts.length; ieq++) {
 	this.mcepOtpts[ieq].dfrbucpo();
	}	
this.tabend();
this.tabend();
this.smnxCNT[3].apnrmlvls();
}

function smnxcDOS7(){
this.dspCFnP7();
this.smmcprox7();
this.ClsAppBx();
this.mceptabmid7();

this.StrtAppBx3()
this.mcepADVO()
this.tabend(); this.tabend();


this.mcepdivb7(); 
this.tabend();
this.mcepTblIn7();
}

function smnxpTRE(){
this.dsplysmnxwrng(); 
this.dsplysmnxft();
this.smnxpfrb3();
//////this.urchinSM();
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////for Labs 060314
function dsplOutptsL(){
document.write("</td></tr></table>");
var dsplutptu = seprtrzTp+" <table width=100% border=0 cellspacing=1 cellpadding=1 bgcolor=#ddcccc><tr><td><font class=h9b><font color=#003366><b>"; 
dsplutptu += " <img src=../../images/mc_t.gif width=11 height=11> "+vResult+" </td></tr></table> ";
dsplutptu += "<table width=100% border=0 valign=top cellspacing=0 cellpadding=1 bgcolor=#E6E6E6><tr><td width=8%>";
dsplutptu += "<img src=assets/sml_to_"+ven+".gif width=26 height=80 border=0></td><td width=92%>";
document.write(dsplutptu);
}

function dfrbwbcACL(){
document.write("<table width=100% border=0 valign=top cellspacing=1 cellpadding=1 bgcolor=#CC3333><tr bgcolor=#EEEEEE valign=top><td>");
}

var vTblInF5 = "<b><sup>2</sup> Click on the link to go to Equation page.";
var vTblInF6 = "</b></font></td></tr></table> </td></tr></table>"+vsmE6F6dn+"<br><br>";


function mcepTblInL(){
var TblIn2 = "<br><br>" + smTab0 + "<tr valign=top><td>";
TblIn2 += vsmE6F6up + " <TABLE width=100% cellspacing=1 cellpadding=2 border=0><tr align=left>";
TblIn2 += "<td width=80%><font class=h9b><font color=#003366><b>"+this.smnxCNT[3].name+" </b>("+UnitConvP+")</font></td>";
TblIn2 += "<td width=20% bgcolor=#E6E6E6><font class=t7b><font color=#336699></td></tr></table>";
document.write(TblIn2 + vTblInc);
document.write(smTab0 + "<tr bgcolor=#DDDDDD><td height=6></td></tr></table>");
	for (var i = 0; i < mcepInpts.length; i++) {
 	this.mcepInpts[i].TblInOtB();
	}	
document.write(vTblInF2 +  vTblInF6+ "");
}




/////////////////////

function smnxcUNOL(){
this.smnxpfra1();
this.smnxpfrb1();
//this.smnxpfrbi();
//this.smnxpfrbu();
//this.smnxpfrbX7();
//this.smnxpfrbW();
//this.smnxpfrb2();
this.smnxpfrci7();
this.smnxpfrcu();
document.write(vsmE6F6dn+"<br>");

this.mceptabtop7();
this.StrtAppBx();
this.dsplInpts7();
	for (var iek = 0; iek < mcepInpts.length; iek++) {
 	this.mcepInpts[iek].dfrbucpL();
	}	
this.ixfrbx1();
this.ixfrbx1();
this.dsplOutptsL();
this.dfrbwbcACL();
	for (var ieq = 0; ieq < mcepOtpts.length; ieq++) {
 	this.mcepOtpts[ieq].dfrbucpo();
	}	
this.tabend();
this.tabend();
this.smnxCNT[3].apnrmlvls();
}


function smnxcDOSL(){
this.dspCFnP7();
this.smmcprox7();
this.ClsAppBx();
this.mceptabmid7();
this.StrtAppBx3()
this.mcepADVO()
this.tabend(); this.tabend();
this.mcepdivb7(); 
this.tabend();
this.mcepTblInL(); ////diff
}



