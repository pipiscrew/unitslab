
srInpts = new mdxp_o("Inputs","",eb12,"","","","","","","","","","","srInpts");
srOutpts = new mdxp_o("Outputs","",eb12,"","","","","","","","","","","srOutpts");
srInptsOne = new mdxp_o("One","1",eb12,"","","","","","","","","","","srInptsOne");
srOutptsTwo = new mdxp_o("Two","2",eb12,"","","","","","","","","","","srOutptsTwo");
srInpts1 = new mdxp_o("Inputs","",eb12,"","","","","","","","","","","srInpts1");
srInpts2 = new mdxp_o("Personalize for Printing","",eb12,"","","","","","","","","","","srInpts2");
/////srInpts2b = new mdxp_o("Your Name","",eb12,"","","","","","","","","","","srInpts2b");
var vsmnxTblClose = "<table class=smnxtbbrdB><tr onClick=\'window.close();\' align=center><td><font class=t8a><a href=onClick=\'window.close();\'>"+vClose+"</a></font></td></tr></table>"; 


var dsplsrInptsOne = "<table width=10 height=10 border=0 cellspacing=0 cellpadding=0 bgcolor=#003366><tr bgcolor=#FFCC00>";
dsplsrInptsOne+= "<td height=6 width=6 align=center><font class=h10b> <b></td></tr></table>";

var seprtrzTp = smTab0 + "<tr bgcolor=#556677><td height=2></td></tr></table>";
var seprtrzBt = "<table width=100% border=0 valign=top cellspacing=0 cellpadding=0 bgcolor=#C9CCCF><tr><td height=2></td></tr></table>";
var vsmE6F6up = "<div id=smE6F6><b class=ftop><b class=f1></b><b class=f2></b><b class=f3></b><b class=f4></b></b>";
var vsmE6F6dn = "<b class=fbottom><b class=f4></b><b class=f3></b><b class=f2></b><b class=f1></b></b></div>";

var msgOptnl = "Optional";
var ColorRD = "EE3333";
var ColorBL = "007CFF";
var ColorBLRD = "003399";
var ClrBL = "#B2E1FF";
var ClrBLl = "#E3F1FA"; ////"#CBE7EC"; azul developr////"#E0FFFF"; 
var ClrF6 = "#F6F6F6";
var ClrE6 = "#E6E6E6";
var ClrYL = "#FFCA00";
var ColorGY = "333333";
var ClrAzS = "#99CCFF";
var ClrAzL = "#c0e2f1";
var ClrAzM = "#66C4EF";

var iel = 0;
var varAbbrvNm;
var varSpcmn;
"<font color=#"+ColorBLRD+">"

var vRefs = "References";
var vYADVOH = "Your <br>Sponsor<br> HERE";

var msgS = "S= serum. "; var msgP = "P= plasma. "; var msgB = "B= blood. "; var msgU = "U= urine. ";
var msgAsc = "Asc= ascites. "; var msgFe = "F= feces. "; var msgStl = "stl= stool. ";
var msgErc = "Erc= erythrocytes. "; var msgCSF = "CSF= cerebrospinal fluid. ";
var msgPteCtrl = "Pt= patient. ctrl= control. "; var msgMe = "m= measured. "; var msgDe = "d= desired. ";
var msgM = "M= male. "; var msgF = "F= female. ";
var msgSecs = "s= seconds. ";
var msgCl = "Cl= clearance. ";
var msgNl = "nl= normal. ";



var gdL_a = "g/dL";var dL_a = "dL";   var mgdL_a = "mg/dL"; var mL_a = "mL"; 
var msgAlv = "A= alveolar. "; var msga = "a= arterial. "; var msgc = "c= capillary. "; var msgv = "v= mixed venous. ";
var msgE = "E= expired. ";  var msgD = "D= dead. ";
var msgmm = "m= meter. ";
var vaddimgfn = msgB + msgS + msgP + msgU;
var vaddtimg = "";


var vnormal = "normal";
var vstage = "stage";
///var vmild = "mild";
///var vmoderate = "moderateXX";
///var vsevere = "severe";
var vfailure = "failure";
var vSeeGeneral = "See also General "+vRefs;
var vEdtrchf = "Editor in Chief";
var vProgrmmngDsgn = "Programming & Design";
var vSection = "Section";
var vRiskScore = "Risk Score";
var vTotalPoints = "Total Points";

function smnxNLD(){
document.smnxform.elements[0].focus();
}

function mcepCFPR(){
CmptFrm(this.form);
this.bmcxpgWindvw();
}

function mcxpRST(){
mcxpCLRback(this.form);
}

//////// tentatively
/////function mcxpRST(){
/////mcxpCLRback(this.form);
/////reset_tblclr();
/////}

/////function reset_tblclr(){
/////}
///////

function ORGNeq2CM(){
document.write("<A HREF=../en/smnxfp/fpbgc222.htm?mceq="+smnxCNT[4].pagelinx+" target=_self>" + sm_fdaa_ccs.blt + "<b> mCalx&#153 </b>open with "+smnxCNT[4].bltpix.blt+" "+smnxCNT[4].name_a+" </a>"); 
}


function mcxpCLRback(){
	for (var i = 0; i < smnxform.elements.length; i++) {
		if (smnxform.elements[i].type == "text") {
				smnxform.elements[i].style.background = "#F3F3F3";	
				smnxform.elements[i].style.color = "#333333";	
 		}
	}
	for (var i = 0; i < smnxform.elements.length; i++) {
		if (smnxform.elements[i].type == "text") {
				smnxform.elements[i].focus();
				break;
 		}
	}
}


function CmptFrm(){
CmptFrmP(this.form);
CmptFrmY(this.form);
CmptFrmZ(this.form);
}



function CmptFrmY(){
	for (var i = 0; i < smnxform.elements.length; i++) {
		if (smnxform.elements[i].type == "text") {
				if (smnxform.elements[i].value == "" || smnxform.elements[i].value == null) {
					smnxform.elements[i].style.background = "#EEEEEE"	;	
					smnxform.elements[i].style.color = "#333333"	;	
				} else { smnxform.elements[i].style.background = "#F3F3F3"}
 		}
	}
}

function CmptFrmZ_ORIGINAL(){
	for (var i = 0; i < smnxform.elements.length; i++) {
		if (smnxform.elements[i].type == "text") {
				if ( (isNaN(smnxform.elements[i].value)) ){
				smnxform.elements[i].value = "";
				smnxform.elements[i].focus();
				break;
				}
 		}
	}
}
//////////empty so the smnxform is not widely checked for isNaN
function CmptFrmZ(){
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
var fdauxHWind;
function fdauxHWindvw() {
	if (!fdauxHWind || fdauxHWind.closed) {
	fdauxHWind = window.open('../smnxfd/smnxfdau_1.htm', 'Help', 'menubar=no,toolbar=yes,status=0,directories=0,resizable=1,scrollbars=yes,width=775,height=575');
	} else{
	fdauxHWind.location.reload();
	fdauxHWind.focus();
	}
}

var fdauxEWind;
function fdauxEWindvw() {
	if (!fdauxEWind || fdauxEWind.closed) {
	fdauxEWind = window.open('../smnxfd/smnxfdau_2.htm', 'Help2', 'menubar=no,toolbar=yes,status=0,directories=0,resizable=1,scrollbars=yes,width=425,height=450');
	} else{
	fdauxEWind.location.reload();
	fdauxEWind.focus();
	}
}
var fdauxCWind;
function fdauxCWindvw() {
	if (!fdauxCWind || fdauxCWind.closed) {
	fdauxCWind = window.open('../smnxfd/smnxfdau_3.htm', 'Help3', 'menubar=no,toolbar=yes,status=0,directories=0,resizable=1,scrollbars=yes,width=425,height=450');
	} else{
	fdauxCWind.location.reload();
	fdauxCWind.focus();
	}
}
var fdauxBWind;
function fdauxBWindvw() {
	if (!fdauxBWind || fdauxBWind.closed) {
	fdauxBWind = window.open('../smnxfd/smnxfdau_b.htm', 'Link1', 'menubar=no,toolbar=yes,status=0,directories=0,resizable=1,scrollbars=yes,width=425,height=450');
	} else{
	fdauxBWind.location.reload();
	fdauxBWind.focus();
	}
}
var fdauxXWind;
function fdauxXWindvw() {
	if (!fdauxXWind || fdauxXWind.closed) {
	fdauxXWind = window.open('../smnxfd/smnxfdau_g.htm', 'Link2', 'menubar=no,toolbar=yes,status=0,directories=0,resizable=1,scrollbars=yes,width=425,height=450');
	} else{
	fdauxXWind.location.reload();
	fdauxXWind.focus();
	}
}
//////////31-73-110
function smnxpfra1(){
	
document.write(smTabOutmst);
var vsmnxpbra1 = "<TABLE border=0 bgcolor=#166083 cellpadding=0 cellspacing=0 width=100% height=30 topmargin=0 leftmargin=0>";
//vsmnxpbra1 += "<tr><td width=140 bgcolor=#F6f6f6><img src=../../images/fdaa_lgpls11.png alt=BloodCalc align=left hspace=3 vspace=4 width=154 height=22></td>";
///////vsmnxpbra1 += "<TD style=\"FILTER: progid:DXImageTransform.Microsoft.Gradient(startColorStr=\'#f6f6f6\', endColorStr=\'#1f496e\', gradientType=\'1\')\" >&#160;</td>";
//vsmnxpbra1 += "<td> <table width=100% background=\"../../images/abaa_top_grad2.png\" border=0 valign=top cellspacing=0 cellpadding=0 topmargin=0 hspace=0 vspace=0><tr><td height=30></td></tr></table>  </td>";
//vsmnxpbra1 += "<td width=500><A HREF=http://www.geocities.com/"+ven+"/smnxab/smnxabaa.htm target=_self border=0><img src=../../images/smSM_top_2016.png alt=geocities align=right hspace=2 vspace=0 width=150 height=30 border=0></A>"; 
//vsmnxpbra1 += "<img src=../../imagesa/sm_flax_"+ven+".gif align=right hspace=150 vspace=4 width=40 height=20></a>"; 
vsmnxpbra1 += "</td></tr></TABLE>";
document.write(vsmnxpbra1);
}

////////////////////isys
function smnxpbra1(){
document.write(smTabOutmst);
var vsmnxpcra1 = "<TABLE border=0 bgcolor=#166083 cellpadding=0 cellspacing=0 width=100% height=30 topmargin=0 leftmargin=0>";
vsmnxpcra1 += "<tr><td width=140 bgcolor=#F6f6f6><img src=../../images/bcaa_lgpls11.png alt=iSYS align=center hspace=0 vspace=0 width=140 height=30></td>";
vsmnxpcra1 += "<td> <table width=100% background=\"../../images/abaa_top_grad2.png\" border=0 valign=top cellspacing=0 cellpadding=0 topmargin=0 hspace=0 vspace=0><tr><td height=30></td></tr></table>  </td>";
vsmnxpcra1 += "<td width=520><A HREF=http://www.geocities.com/"+ven+"/smnxab/smnxabaa.htm target=_self border=0><img src=../../images/smSM_top_2016.png alt=geocities align=right hspace=2 vspace=0 width=150 height=30 border=0></A>"; 
vsmnxpcra1 += "<img src=../../imagesa/sm_flax_"+ven+".gif align=right hspace=150 vspace=4 width=40 height=20>"; 
vsmnxpcra1 += "</td></tr></TABLE>";
document.write(vsmnxpcra1);
}


////////////////////eH&P
function smnxpcra1(){
document.write(smTabOutmst);
var vsmnxpcra1 = "<TABLE border=0 bgcolor=#166083 cellpadding=0 cellspacing=0 width=100% height=30 topmargin=0 leftmargin=0>";
vsmnxpcra1 += "<tr><td width=140 bgcolor=#F6f6f6><img src=../../images/chaa_lgpls11.png alt=eH&P align=center hspace=0 vspace=0 width=154 height=22></td>";
vsmnxpcra1 += "<td> <table width=100% background=\"../../images/abaa_top_grad2.png\" border=0 valign=top cellspacing=0 cellpadding=0 topmargin=0 hspace=0 vspace=0><tr><td height=30></td></tr></table>  </td>";
vsmnxpcra1 += "<td width=520><A HREF=http://www.geocities.com/"+ven+"/smnxab/smnxabaa.htm target=_self border=0><img src=../../images/smSM_top_2014_2.png alt=geocities align=right hspace=2 vspace=0 width=150 height=30 border=0></A>"; 
vsmnxpcra1 += "<img src=../../imagesa/sm_flax_"+ven+".gif align=right hspace=150 vspace=4 width=40 height=20>"; 
vsmnxpcra1 += "</td></tr></TABLE>";
document.write(vsmnxpcra1);
}

function smnxpfrb1(){
document.write(smTab0+"<tr valign=top><td width=140>");
}

function smnxctmenuh(){
var vmdxpctmnh = "<TABLE width=100% height=26 border=0 cellspacing=0 cellpadding=0 hspace=0 vspace=0 valign=center>" ;
vmdxpctmnh += " <TR bgcolor="+this.fdaux000.spcmn_+" valign=center onmouseover=style.background=\'"+this.fdaux000.nvcu_lw+"\' onmouseout=style.background=\'"+this.fdaux000.spcmn_+"\'> ";
vmdxpctmnh += " <TD valign=center><IMG SRC=../../images/mc_t.gif BORDER=0 HEIGHT=10 WIDTH=6 align=baseline vspace=0 hspace=0><font class="+this.fdaux000.units_si+"> ";
vmdxpctmnh += "<a href=\"javascript:this.fdauxHWindvw()\;\" class="+this.fdaux000.cf_cusi+">" + this.fdaux000.name.toUpperCase() + "</a>";
vmdxpctmnh += "</td></tr><tr><td height=1 bgcolor=#333333></td></tr></table>";
document.write(vmdxpctmnh);
}

function smnxpfrbi(){




}
bcaux000 = new mdxp_o(vHelp,vHelp,mdc1,"","13","bcaux000","CCCCBB","DDDDCC","","_blank","hpb","h9b"," "," ","");

///////////////isys
function smnxctmenub(){
var vmdxpctmnb = "<TABLE width=100% height=26 border=0 cellspacing=0 cellpadding=0 hspace=0 vspace=0 valign=center>" ;
vmdxpctmnb += " <TR bgcolor="+this.bcaux000.spcmn_+" valign=center onmouseover=style.background=\'"+this.bcaux000.nvcu_lw+"\' onmouseout=style.background=\'"+this.bcaux000.spcmn_+"\'> ";
vmdxpctmnb += " <TD valign=center><IMG SRC=../../images/mc_t.gif BORDER=0 HEIGHT=10 WIDTH=6 align=baseline vspace=0 hspace=0><font class="+this.bcaux000.units_si+"> ";
vmdxpctmnb += "<a href=\"javascript:this.bcaaxHWindvw()\;\" class="+this.bcaux000.cf_cusi+">" + this.bcaux000.name.toUpperCase() + "</a>";
vmdxpctmnb += "</td></tr><tr><td height=1 bgcolor=#000000></td></tr></table>";
document.write(vmdxpctmnb);
}


function smnxpbrbi(){
document.write("<TABLE width=100% border=0 cellspacing=0 cellpadding=0 hspace=0 vspace=0>");
document.write("<TR><TD height=38><table width=100% background=\"../../imagessm/smnx_bg_bg382.png\" border=0 valign=top cellspacing=0 cellpadding=0 topmargin=0 hspace=0 vspace=0><tr><td height=38></td></tr></table></TD></TR>");
document.write("<tr><tr><td height=1 bgcolor=#333333></td></tr>"); 
document.write("</TD></TR><TR><TD>");
this.abaax000.smnxbcmenu();
this.smnxBCAA[0].smnxbcmenu();
this.smnxBCAA[1].smnxbcmenu();
document.write("</TD></TR><TR><TD>");
document.write("</TD></TR><TR><TD height=12></TD></TR><TR><TD>");
this.smnxBCAA[2].smnxbcmenu();
this.smnxBCAA[3].smnxbcmenu();
document.write("</TD></TR><TR><TD height=6></TD></TR><TR><TD>");
this.smnxBCAA[4].smnxbcmenu();
this.smnxBCAA[5].smnxbcmenu();
document.write("</TD></TR><TR><TD height=8></TD></TR><TR><TD>");
this.bnaix000.smnxbcmenu();
this.bnaex000.smnxbcmenu();
this.bnayx000.smnxbcmenu();
document.write("</TD></TR><TR><TD height=6></TD></TR><TR><TD>");
this.smnxctmenub();
document.write("</TD></TR><TR><TD height=4></TD></TR><TR><TD>");
this.smnxBCAA[9].smnxbcmenu();
document.write("</TD></TR><TR><TD height=2></TD></TR></TABLE>");
}


//////eH&P
function smnxpcrbi(){
document.write("<TABLE width=100% border=0 cellspacing=0 cellpadding=0 hspace=0 vspace=0>");
//////document.write("<TR><TD height=38 width=140 style=\"FILTER: progid:DXImageTransform.Microsoft.Gradient(startColorStr=\'#f6f6f6\', endColorStr=\'#4E5965\', gradientType=\'0\')\" >&#160; </td></tr>");

document.write("");
document.write("<TR><TD><table width=100% background=\"../../imagessm/smnx_bg_ehnp3802.png\" border=0 valign=top cellspacing=0 cellpadding=0 topmargin=0 hspace=0 vspace=0></td></tr>");
document.write("<tr><td height=38></td></tr></table></td></tr>");

document.write("<tr><td height=1 width=110 bgcolor=#333333></td></tr><tr><td>"); 
this.abaax000.smnxbcmenu();
this.smnxCHAA[0].smnxbcmenu();
this.smnxCHAA[1].smnxbcmenu();
document.write("</TD></TR><TR><TD>");
document.write("</TD></TR><TR><TD height=12></TD></TR><TR><TD>");
this.smnxCHAA[2].smnxbcmenu();
this.smnxCHAA[3].smnxbcmenu();
document.write("</TD></TR><TR><TD height=6></TD></TR><TR><TD>");
this.smnxCHAA[4].smnxbcmenu();
this.smnxCHAA[5].smnxbcmenu();
document.write("</TD></TR><TR><TD height=8></TD></TR><TR><TD>");
this.smnxCHAA[6].smnxbcmenu();
this.smnxCHAA[7].smnxbcmenu();
this.smnxCHAA[8].smnxbcmenu();
document.write("</TD></TR><TR><TD height=6></TD></TR><TR><TD>");
this.smnxctmenuh();
document.write("</TD></TR><TR><TD height=3></TD></TR><TR><TD>");
this.smnxCHAA[9].smnxbcmenu();
document.write("</TD></TR><TR><TD height=2></TD></TR></TABLE>");
}


function smnxmdappz(){
var vsmnxmdappz = smTab0+smmnhvr4+"<td height=24>"+smTab1+smmnhvr5;
vsmnxmdappz += "<td><A HREF=smnx"+this.abbcx000.pagelinx.substring(0,2)+"/smnx"+ this.abbcx000.pagelinx.substring(0,4)+".htm target=_self>";
vsmnxmdappz += "<IMG SRC=../../imagesa/smCF_bcaax.gif BORDER=0 HEIGHT=22 WIDTH=110 VSPACE=0 ALT=\'link to iSYS\'></a>";
vsmnxmdappz += "</td></tr></table></td></tr></table> ";
vsmnxmdappz += smTab0+smmnhvr4+"<td height=24>"+smTab1+smmnhvr5;
vsmnxmdappz += "<td><A HREF=../en/smnx"+this.djaax000.pagelinx.substring(0,2)+"/smnx"+ this.djaax000.pagelinx.substring(0,4)+".htm target=_self>";
vsmnxmdappz += "<IMG SRC=../../imagesa/smCF_djaax.gif BORDER=0 HEIGHT=22 WIDTH=110 VSPACE=0 ALT=\'link to Cholesterol tool\'></a>";
vsmnxmdappz += "</td></tr></table></td></tr></table> ";
document.write(vsmnxmdappz);
}

function smnxpfrbuXXXOOOOOOOOOOOOOLLLLLLLLLLLLLLDDDDDDDDDDDDDDDD(){
document.write(smTab0+"<TR><TD height=10></TD></TR><TR><TD>");
this.smnxmdappz();
document.write("</TD></TR><TR><TD height=2></TD></TR><TR><TD>");
document.write("</TD></TR><TR><TD>");
document.write("<MAP name=fdaax_qa><AREA onmouseover=closeAll(); shape=RECT coords=0,0,140,16> ");
document.write("<AREA onmouseover=\"openBaseMenu('menu_fdaax')\;\" shape=RECT alt='Stat Links' coords=0,16,135,33 href=\"../smnxfd/smnxfdaf.htm\"></MAP>");
document.write(smTab0+"<IMG src=../../imagesa/smMC_sl.gif height=33 width=140 useMap=#fdaax_qa border=0></TD></TR></TABLE>");
document.write("</TD></TR><TR><TD>");
document.write("<IMG SRC=../../imagesa/fdaax_lgtrns.gif BORDER=0 HEIGHT=125 WIDTH=125></TD></TR>");
document.write("<TR><TD height=6></TD></TR><TR><TD>");
this.abanx000.smnxctmenu();
this.abahx000.smnxctmenu();
document.write("</TD></TR><TR><TD height=12></TD></TR><TR><TD>");
}

//////////////////isys
function smnxmdappz0(){
var vsmnxmdappz0 = smTab0+smmnhvr4+"<td height=24>"+smTab1+smmnhvr5;
vsmnxmdappz0 += "<td><A HREF=../en/smnx"+this.fdaax000.pagelinx.substring(0,2)+"/smnx"+ this.fdaax000.pagelinx.substring(0,4)+".htm target=_self>";
vsmnxmdappz0 += "<IMG SRC=../../imagesa/smCF_fdaax.png BORDER=0 HEIGHT=22 WIDTH=110 VSPACE=0 ALT=\'link to BloodCalc\'></a>";
vsmnxmdappz0 += "</td></tr></table></td></tr></table> ";
document.write(vsmnxmdappz0);
}

function smnxmdappz1(){
var vsmnxmdappz1 = smTab0+smmnhvr4+"<td height=24>"+smTab1+smmnhvr5;
vsmnxmdappz1 += "<td><A HREF=../en/smnx"+this.abbcx000.pagelinx.substring(0,2)+"/smnx"+ this.abbcx000.pagelinx.substring(0,4)+".htm target=_self>";
vsmnxmdappz1 += "<IMG SRC=../../imagesa/smCF_bcaax.png BORDER=0 HEIGHT=22 WIDTH=110 VSPACE=1 ALT=\'link to iDox\'></a>";
vsmnxmdappz1 += "</td></tr></table></td></tr></table> ";
document.write(vsmnxmdappz1);
}

function smnxmdappz2(){
var vsmnxmdappz2 = smTab0+smmnhvr4+"<td height=24>"+smTab1+smmnhvr5;
vsmnxmdappz2 += "<td><A HREF=../en/smnx"+this.djaax000.pagelinx.substring(0,2)+"/smnx"+ this.djaax000.pagelinx.substring(0,4)+".htm target=_self>";
vsmnxmdappz2 += "<IMG SRC=../../imagesa/smCF_djaax.gif BORDER=0 HEIGHT=22 WIDTH=110 VSPACE=0 ALT=\'link to Cholesterol tool\'></a>";
vsmnxmdappz2 += "</td></tr></table></td></tr></table> ";
document.write(vsmnxmdappz2);
}

function smnxmdappz3(){
var vsmnxmdappz3 = smTab0+smmnhvr4+"<td height=24>"+smTab1+smmnhvr5;
vsmnxmdappz3 += "<td><A HREF=../en/smnx"+this.gdaax000.pagelinx.substring(0,2)+"/smnx"+ this.gdaax000.pagelinx.substring(0,4)+".htm target=_self>";
vsmnxmdappz3 += "<IMG SRC=../../imagesa/smCF_gdaax.png BORDER=0 HEIGHT=22 WIDTH=110 VSPACE=0 ALT=\'link to Galen\'></a>";
vsmnxmdappz3 += "</td></tr></table></td></tr></table> ";
document.write(vsmnxmdappz3);
}

function smnxmdappz4(){
var vsmnxmdappz4 = smTab0+smmnhvr4+"<td height=24>"+smTab1+smmnhvr5;
vsmnxmdappz4 += "<td><A HREF=../en/smnx"+this.chaax000.pagelinx.substring(0,2)+"/smnx"+ this.chaax000.pagelinx.substring(0,4)+".htm target=_self>";
vsmnxmdappz4 += "<IMG SRC=../../imagesa/smCF_chaax.png BORDER=0 HEIGHT=22 WIDTH=110 VSPACE=0 ALT=\'link to eH&P\'></a>";
vsmnxmdappz4 += "</td></tr></table></td></tr></table> ";
document.write(vsmnxmdappz4);
}


function smnxpfrbu(){
document.write(smTab0+"<TR><TD height=12></TD></TR><TR><TD>");
this.smnxmdappz1();
this.smnxmdappz4();
this.smnxmdappz3();
document.write("</TD></TR><TR><TD height=2></TD></TR><TR><TD>");
document.write("</TD></TR><TR><TD>");
document.write("<MAP name=fdaax_qa><AREA onmouseover=closeAll(); shape=RECT coords=0,0,140,16> ");
document.write("<AREA onmouseover=\"openBaseMenu('menu_fdaax')\;\" shape=RECT alt='Stat Links' coords=0,16,140,33 href=\"../smnxfd/smnxfdaf.htm\"></MAP>");
document.write(smTab0+"<IMG src=../../imagesa/smFD_sl.png height=33 width=140 useMap=#fdaax_qa border=0></TD></TR></TABLE>");
document.write("</TD></TR><TR><TD>");
document.write("<IMG SRC=../../imagesa/fdaax_lgtr.png BORDER=0 HEIGHT=140 WIDTH=140></TD></TR>");
document.write("<TR><TD height=6></TD></TR><TR><TD>");
// this.smnxFDAA[10].smnxctmenu();
// this.abanx000.smnxctmenu();
// this.abahx000.smnxctmenu();
document.write("</TD></TR><TR><TD height=2></TD></TR><TR><TD>");
this.smnxFDAA[14].smnxctmenu();
document.write("</TD></TR><TR><TD height=12></TD></TR><TR><TD>");
}

function smnxpbrbu(){
document.write(smTab0+"<TR><TD height=12></TD></TR><TR><TD>");
this.smnxmdappz0();
this.smnxmdappz4();
this.smnxmdappz3();
document.write("</TD></TR><TR><TD height=2></TD></TR><TR><TD>");
document.write("</TD></TR><TR><TD>");
document.write("<MAP name=bcaax_qa><AREA onmouseover=closeAll(); shape=RECT coords=0,0,140,16> ");
document.write("<AREA onmouseover=\"openBaseMenu('menu_bcaax')\;\" shape=RECT alt='Stat Links' coords=0,16,140,33 href=\"../smnxbc/smnxbcaf.htm\"></MAP>");
document.write(smTab0+"<IMG src=../../imagesa/smBC_sl.png height=33 width=140 useMap=#bcaax_qa border=0></TD></TR></TABLE>");
document.write("</TD></TR><TR><TD>");
document.write("<IMG SRC=../../imagesa/bcaax_lgtr.png BORDER=0 HEIGHT=140 WIDTH=140 hspace=0></TD></TR>");
document.write("<TR><TD height=7></TD></TR><TR><TD>");
this.smnxBCAA[10].smnxctmenu();
this.abanx000.smnxctmenu();
this.abahx000.smnxctmenu();
document.write("</TD></TR><TR><TD height=2></TD></TR><TR><TD>");
this.smnxBCAA[14].smnxctmenu();
document.write("</TD></TR><TR><TD height=12></TD></TR><TR><TD>");
}

function smnxpcrbu(){
document.write(smTab0+"<TR><TD height=12></TD></TR><TR><TD>");
this.smnxmdappz1();
this.smnxmdappz0();
this.smnxmdappz3();
document.write("</TD></TR><TR><TD height=2></TD></TR><TR><TD>");
document.write("</TD></TR><TR><TD>");
document.write("<MAP name=chaax_qa><AREA onmouseover=closeAll(); shape=RECT coords=0,0,140,16> ");
document.write("<AREA onmouseover=\"openBaseMenu('menu_chaax')\;\" shape=RECT alt='Stat Links' coords=0,16,140,33 href=\"../smnxbc/smnxbcaf.htm\"></MAP>");
document.write(smTab0+"<IMG src=../../imagesa/smHD_sl.png height=33 width=140 useMap=#chaax_qa border=0></TD></TR></TABLE>");
document.write("</TD></TR><TR><TD>");
document.write("<IMG SRC=../../imagesa/chaax_lgtr.png BORDER=0 HEIGHT=140 WIDTH=140 hspace=0></TD></TR>");
document.write("<TR><TD height=7></TD></TR><TR><TD>");
this.smnxCHAA[10].smnxctmenu();
this.abanx000.smnxctmenu();
this.abahx000.smnxctmenu();
document.write("</TD></TR><TR><TD height=2></TD></TR><TR><TD>");
this.smnxCHAA[14].smnxctmenu();
document.write("</TD></TR><TR><TD height=12></TD></TR><TR><TD>");
}




function smnxpfrbX(){
document.write("");
}
function smnxpfrbX7(){
document.write("");
}

function smnxpfrbWS_OK(){
document.write("<br>"+smTab0 + "<tr><td height=1 bgcolor=#667788></td></tr><tr><td height=3></td></tr>");
document.write("<tr valign=top><td><font class=t7pk> powered by:</td></tr><tr><td>");
document.write("<IMG SRC=../../imagesa/smCF_abammN.png BORDER=0 HEIGHT=14 WIDTH=70 hspace=20></td></tr><tr><td><font class=t7pk>");
document.write(""+this.abamm000.name_a+"</td></tr><tr><td height=3></td></tr><tr><td height=1 bgcolor=#667788></td></tr></table>");
document.write(smTab12 + "<tr><td height=1></td></tr><tr><td height=3>");
this.smnxFDAA[11].smnxctmenu();
this.smnxFDAA[12].smnxctmenu();
this.smnxFDAA[13].smnxctmenu();
document.write("</td></tr></table><br>");
}


function smnxpfrbWS(){
document.write(""+smTab0 + "<tr><td height=1 bgcolor=#667788> </td></tr></table>");
document.write("<div class=view><div class=grupo-wrapper><ul>");
document.write(""+smTab0 + "<tr><td height=3></td></tr>");
document.write("<tr valign=top><td><font class=t7pk> &#160;  powered by:</td></tr><tr><td>");
document.write("<IMG SRC=../../imagesa/smCF_abammN.png BORDER=0 HEIGHT=14 WIDTH=70 hspace=20 vspace=2></td></tr><tr><td align=center><font class=t7pk>");
document.write(""+this.abamm000.name_a+"</td></tr><tr><td height=3></td></tr></table>");
document.write("</ul></div></div>");
document.write(smTab12 + "<tr><td height=3>");
this.smnxFDAA[11].smnxctmenu();
this.smnxFDAA[12].smnxctmenu();
this.smnxFDAA[13].smnxctmenu();
document.write("</td></tr></table><br>");
}


function smnxbkmrk(){
document.write("<font class=t8a><img src=../../imagesa/sm_adfav.gif hspace=2>&nbsp;<a href=\"javascript:BukmrkSM()\">"+vAdd2FavList+"</a>");
}

function smnxpfrbW(){
if (this.smnxCNT[4].pagelinx.substring(3,4) == "a" || this.smnxCNT[4].pagelinx.substring(2,3) == "a" ){
document.write("");
}else{
document.write(smTab12 + "<tr><td height=1 bgcolor=#336699></td></tr></table>");

this.smnxbkmrk();
document.write(smTab0+"<TR><TD><font class=t8a>");
document.write("<img src=../../imagesa/sm_adlnk.gif hspace=2>&nbsp;<a href=\"javascript:fdauxBWindvw()\">"+vLnk2Pg+"</a>");
document.write("</TD></TR></TABLE>");
	}
this.smnxpfrbWS();
}


function smnxpfrb2(){
document.write("<br><br></TD></TR></TABLE>");
document.write("</td><td width=20></td><td valign=top>");
}

var vsmnxtbbrk = smTab0+"<tr><td height=3></td></tr></table>";
//////////customizable////
/////t13b for h13bbls /// t18w for h20gb 

function smnxpfrci(){
if (this.smnxCNT[4].pagelinx.substring(2,3) == "a" || this.smnxCNT[4].pagelinx.substring(3,5) == "ai"){
var vtbclsstyp = "smnx_hdFD1"; var fntclstyp = "h20gb"; var vsmnxtbbYN = ""; var fntclstyp2 = "99b9bf"; var vnmver = "36"; 
var varrttl = "<img src=../../images/mc_t.gif width=10 height=16 border=0 align=baseline>";
}else if (this.smnxCNT[4].pagelinx.substring(3,4) == "c" ){
vtbclsstyp = "smnx_hdFD2"; fntclstyp = "h13bbls"; vsmnxtbbYN = vsmnxtbbrk; fntclstyp2 = "708090"; vnmver = "30";
varrttl = "<img src=../../images/sm_arrttl.gif width=16 height=16 border=0 align=baseline>";
}else{
var vtbclsstyp = "smnx_hdFD3"; var fntclstyp = "h13bbls"; var vsmnxtbbYN = vsmE6F6up; var fntclstyp2 = "708090"; var vnmver = "22"; 
var varrttl = "<img src=../../images/sm_arrttl.gif width=16 height=16 border=0 align=baseline>";
}
var vsmnxpfrci = vsmnxtbbYN+"<table width=100% class="+vtbclsstyp+" valign=top cellspacing=0 cellpadding=0 topmargin=0 hspace=0 vspace=0>";
vsmnxpfrci += " <tr><td height=2 colspan=2></td></tr><tr><td width=1%><img src=../../images/mc_t.gif align=bottom width=1 height="+vnmver+"></td>";
vsmnxpfrci += "<td width=99%>"+smTab0+"<tr><td width=74%><font class="+fntclstyp+">"+varrttl+this.smnxCNT[4].name+"</font></td>";
vsmnxpfrci += "<td width=25% align=right valign=bottom><font class=v1bp><font color=#"+fntclstyp2+">"+NowDate+NowTime+" </td><td width=1%></td></tr></table>  </td></tr></table>";
document.write(vsmnxpfrci);
}

///////////isys
function smnxpbrci(){
if (this.smnxCNT[3].pagelinx.substring(2,3) == "a" || this.smnxCNT[3].pagelinx.substring(3,5) == "ai") 
{var vtbclsstyp = "smnx_hdBC1"; var fntclstyp = "t18b"; var vsmnxtbbYN = ""; var fntclstyp2 = "99b0cc"; var vnmver = "36"}
else {vtbclsstyp = "smnx_hdBC2"; fntclstyp = "t13b"; vsmnxtbbYN = vsmnxtbbrk; fntclstyp2 = "607080"; vnmver = "30"}
var vsmnxpfrci = vsmnxtbbYN+"<table width=100% class="+vtbclsstyp+" valign=top cellspacing=0 cellpadding=0 topmargin=0 hspace=0 vspace=0>";
vsmnxpfrci += " <tr><td height=2 colspan=3></td></tr><tr><td width=2%><img src=../../images/mc_t.gif align=bottom width=1 height="+vnmver+"></td>";
vsmnxpfrci += "<td width=98%>"+smTab0+"<tr><td width=74%><font class="+fntclstyp+">"+this.smnxCNT[3].name+"</font></td>";
vsmnxpfrci += "<td width=25% align=right valign=bottom><font class=v1bp><font color=#"+fntclstyp2+">"+NowDate+NowTime+" </td><td width=1%></td></tr></table> </td></tr></table>";
document.write(vsmnxpfrci)
}

///////////ehnp
function smnxpcrci(){
if (this.smnxCNT[3].pagelinx.substring(2,3) == "a" || this.smnxCNT[3].pagelinx.substring(5,6) == "a") 
{var vtbclsstyp = "smnx_hdCH1"; var fntclstyp = "t18w"; var vsmnxtbbYN = ""; var fntclstyp2 = "dddddd"; var vnmver = "36"}
else {vtbclsstyp = "smnx_hdCH2"; fntclstyp = "t13b"; vsmnxtbbYN = vsmnxtbbrk; fntclstyp2 = "607080"; vnmver = "30"}
var vsmnxpfrci = vsmnxtbbYN+"<table width=100% class="+vtbclsstyp+" valign=top cellspacing=0 cellpadding=0 topmargin=0 hspace=0 vspace=0>";
vsmnxpfrci += " <tr><td height=2 colspan=3></td></tr><tr><td width=2%><img src=../../images/mc_t.gif align=bottom width=1 height="+vnmver+"></td>";
vsmnxpfrci += "<td width=98%>"+smTab0+"<tr><td width=74%><font class="+fntclstyp+">"+this.smnxCNT[3].name+"</font></td>";
vsmnxpfrci += "<td width=25% align=right valign=bottom><font class=v1bp><font color=#"+fntclstyp2+">"+NowDate+NowTime+" </td><td width=1%></td></tr></table> </td></tr></table>";
document.write(vsmnxpfrci)
}






function smnxpfrdi(){
var vsmnxpfrdi = "<br>"+smTab0+"<tr align=left valign=top><td width=25% align=left>";
document.write(vsmnxpfrdi);
}
function smnxpfrei(){
var vsmnxpfrei = "</td><td width=4%></td><td width=71% align=left valign=top>"; 
document.write(vsmnxpfrei);
}

function smnxpfrfi(){
document.write("<br><br></td></tr></table>");
}

function smnxpfrb3(){
document.write(smTabOutmst2+"</td></tr></table>");
}

////////////////////////////app page sngl///////


function StrtAppBx(){
document.write("<table width=100% border=0 valign=top cellspacing=0 cellpadding=0 topmargin=0 hspace=0 vspace=0>");
document.write("<tr valign=top><td width=44% valign=top>");
document.write(vsmE6F6up+"<table width=100% border=0 valign=top cellspacing=1 cellpadding=1 bgcolor=#E6E6E6>");
document.write("<tr align=left><td width=1%></td><td width=98%><form name=smnxform>");
}
function StrtAppBxM(){
document.write("<table width=100% border=0 valign=top cellspacing=0 cellpadding=0 topmargin=0 hspace=0 vspace=0>");
document.write("<tr valign=top><td width=44% valign=top>");
document.write("<table width=100% border=0 valign=top cellspacing=1 cellpadding=1 bgcolor=#E6E6E6>");
document.write("<tr align=left><td width=1%></td><td width=98%><form name=smnxform>");
}


function dsplInpts(){
var dsplInpta = " <table width=100% border=0 cellspacing=1 cellpadding=1 bgcolor=#EEEEDD><tr align=left><td width=10%>"; 
dsplInpta +=   dsplsrInptsOne + "</td><td width=90%><font class=h9b><font color="+ColorBL+">" + this.srInpts.name + "</td></tr></table> ";
document.write(seprtrzTp + dsplInpta + seprtrzBt);
}
function ixfrbx0(){
vixfrbx0 =  "<table width=100% border=0 valign=top cellspacing=1 cellpadding=1 bgcolor=#E6E6E6>";
vixfrbx0 +=  " <tr><td><img src=../../images/mc_t.gif width=1 height=8 border=0></td></tr></table>";
document.write(vixfrbx0);
}
function ixfrbx1(){
vixfrbx1 =  "<table width=100% border=0 valign=top cellspacing=1 cellpadding=1 bgcolor=#E6E6E6>";
vixfrbx1 +=  " <tr><td><img src=../../images/mc_t.gif width=1 height=22 border=0></td></tr></table>";
document.write(vixfrbx1);
}

dsplsrOutpts = " <table width=10 height=10 border=0 cellspacing=0 cellpadding=0 bgcolor=#003366><tr bgcolor=#5ACCFF>";
dsplsrOutpts+= "<td height=10 width=10 align=center><font class=h10b><b></td></tr></table> ";

///////////////////////////////////////////////////////////////////////////////#99bbd6  #99bbcc   old=#d3d9df  old=EEEEDD  new wsj=AFCADD
function dsplOutpts(){
var dsplOutpta = " <table width=100% border=0 cellspacing=1 cellpadding=1 bgcolor=#d3d9df><tr align=left><td width=10%>"; 
dsplOutpta +=   dsplsrOutpts + "</td><td width=50%><font class=h9b><font color="+ColorBL+"> " + this.srOutpts.name + "</td> ";
dsplOutpta +=  "<td width=40% valign=bottom><img src=../../images/smnx_nlabnl_"+ven+".png width=110 align=baseline height=12 border=0></td></tr></table> ";
document.write(seprtrzTp + dsplOutpta + seprtrzBt);
}

function dfrbwbcAC(){
document.write("<table width=100% border=0 valign=top cellspacing=2 cellpadding=2 class=table-mcoutputs><tr bgcolor=#dddddd valign=top><td>");
}
function tabend(){
document.write("</td></tr></table>");
}
function tabendBR(){
document.write("</td></tr></table><br><br>");
}
function ClsAppBx(){
document.write("</td><td width=1%></td></tr></table>"+vsmE6F6dn);
}

function ClsAppBxM(){
document.write("</td><td width=1%></td></tr></table>");
}


function mceptabmid1(){
document.write("</td><td width=2%></td><td width=30% align=right valign=top>");
}
function mceptabmid2(){
document.write("</td><td width=4%></td><td width=20% align=center valign=top>");
}

function StrtAppBx2(){
document.write("<table width=100% border=0 valign=top cellspacing=1 cellpadding=1><tr valign=top><td valign=top>");
}
function StrtAppBx3(){
//////document.write("<TABLE WIDTH=95% BGCOLOR=#FF7711 ALIGN=CENTER cellspacing=1 cellpadding=3 border=0 valign=top>");
//////document.write("<tr bgcolor=#FFFFF0 valign=top><td valign=top><font class=v1p><font color=#333333><b>");
document.write("<TABLE WIDTH=95% ALIGN=CENTER cellspacing=1 cellpadding=3 border=1 valign=top>");
document.write("<tr valign=top><td valign=top><font class=v1p><font color=#333333><b>");
/////document.write("<table width=100% border=1 valign=top cellspacing=2 cellpadding=2 bgcolor=#FFFFFF><tr valign=top><td>");
}


var bmcxpgWind;
function bmcxpgWindvw(bmcxpnwndw, vbPrintft) {
	var cd_wndwtpn = this.document.smnxform.vmccalxpp.value;
	var bmcxpnwndw = "../smnx"+cd_wndwtpn.substring(0,2)+"/"+cd_wndwtpn+"_.htm";
	var vbPrintft = "bPrintft";
	if (!bmcxpgWind || bmcxpgWind.closed) {
	bmcxpgWind = window.open(bmcxpnwndw,vbPrintft,'menubar=yes,toolbar=yes,status=0,directories=0,resizable=1,scrollbars=yes,width=775,height=575');
	} else{
	bmcxpgWind.location.reload();
	bmcxpgWind.focus();
	}
}




var bmcxpqWind;
function bmcxpqWindvw(bmcxpewndw, vbEqutnsft) {
	var ce_wndwtpn = this.document.smnxform.vmccalxpp.value;
	var bmcxpewndw = "../smnx"+ce_wndwtpn.substring(0,2)+"/"+ce_wndwtpn+"_e.htm";
	var vbEqutnsft = "bEqutnsft";
	if (!bmcxpqWind || bmcxpqWind.closed) {
	bmcxpqWind = window.open(bmcxpewndw,vbEqutnsft,'menubar=no,toolbar=yes,status=0,directories=0,resizable=1,scrollbars=yes,width=775,height=575');
	} else{
	bmcxpqWind.location.reload();
	bmcxpqWind.focus();
	}
}
var bmcxYqWind; 
function bmcxyqWindvw(bmcxpywndw, vbYqutnsft) {
	var cy_wndwtpn = this.document.smnxform.vmccalxpp.value;
	var bmcxpywndw = "../smnx"+cy_wndwtpn.substring(0,2)+"/smnx"+cy_wndwtpn.substring(0,3)+"_r.htm";
	var vbYqutnsft = "bYqutnsft";
	if (!bmcxYqWind || bmcxYqWind.closed) {
	bmcxYqWind = window.open(bmcxpywndw,vbYqutnsft,'menubar=no,toolbar=no,status=0,directories=0,resizable=1,scrollbars=yes,width=425,height=450');
	} else{
	bmcxYqWind.location.reload();
	bmcxYqWind.focus();
	}
}




vmcepIMGnsz = "80";
vmcepIMGnsx = "266";
function mcepIMGn() {
	if (this.smnxCNT[4].name_a == "") {var varAbbrvNm = this.smnxCNT[4].name; var varAbbrvNm1 = "";} 
	else {varAbbrvNm = this.smnxCNT[4].name_a; varAbbrvNm1 = " (" + this.smnxCNT[4].name_a + ")"}
document.write(smTab0+"<tr><td colspan=3 height=1 bgcolor=#999999><img src=../../images/mc_t.gif border=0 width=270 height=1></td></tr>");
document.write("<tr><td width=1 height=3 bgcolor=#999999></td><td width=268 height=3></td><td width=1 height=3 bgcolor=#FFFFFF></td></tr>");
document.write("<tr><td width=1 bgcolor=#999999></td><td width=268 valign=top>");
vmcepimg1  = "<table width=96% border=0 valign=top align=center cellspacing=0 cellpadding=0><tr><td bgcolor=#AFCADD><font class=h10b><b><font color=#445566>";
vmcepimg1 += "<div id=smC6DF><b class=eqtop><b class=eq1></b><b class=eq2></b><b class=eq3></b><b class=eq4></b></b> &#160; &#160; &#160; &#160; "+vEquation;
vmcepimg1 += "<b class=eqbottom><b class=eq4></b><b class=eq3></b><b class=eq2></b><b class=eq1></b></b></div></td><tr></table>";
document.write(vmcepimg1);
/////document.write(smTab0+"<tr><td><font class=t8bb><font color=#778899>&#160;&#160;"+vEquation+":</td></tr></table> ");
document.write(smTab0+"<tr><td><img src=images/" + this.smnxCNT[4].pagelinx + "_"+ven+".gif width="+vmcepIMGnsx+" height="+vmcepIMGnsz); 
document.write(" onMouseOver=self.status='BloodCalc';return true;></td></tr></table>");
document.write("<table width=96% border=0 align=center valign=top cellspacing=1 cellpadding=1><tr><td>");
	for (var i = 0; i < mcepOtpts.length; i++) {
 	this.mcepOtpts[i].ntintwo();
	}	
	for (var i = 0; i < mcepInpts.length; i++) {
 	this.mcepInpts[i].ntintwo();
	}	
if (vaddtimg != "") {var vaddimg = smTab0 + "<tr><td><font class=a8><font color=#003366>"+vaddtimg+"</td></tr></table>";}else{vaddimg = ""}
document.write(vaddimg + smTab0 + "<tr><td height=4></td></tr><tr><td><font class=t7pb><font color=#666666>"+vaddimgfn+"</td></tr></table>");
document.write("</td></tr></table>  </td><td width=1 bgcolor=#FFFFFF></td> </tr>");
document.write("<tr><td width=1 height=3 bgcolor=#999999></td><td width=268 height=4></td><td width=1 height=3 bgcolor=#FFFFFF></td></tr>");
document.write("<tr><td colspan=3 height=1 bgcolor=#FFFFFF></td></tr></table><br>");
}


function ClsAppBx2(){
document.write("</td></tr></table>");
}

////////////////////////////////THIS METHOD' texthas been  DISABLED (
function mcepADVO() {
document.write(smTab0+"<tr><td><img src=../../images/mc_t.gif border=0 width=1 height=300></td><td align=center valign= center>");
///////////document.write("<font class=t8g> "+vYADVOH+"<br><br><br></font><font class=t8a><a href=\"mailto:info@geocities.com\"> info@geocities.com</a>");
this.tabend();
}

var vAbout2 = "About";
function mcepdivb(){
var vdivb = "</smnxCorg></form><br>"+vsmE6F6up + smTab0 + "<tr bgcolor=#E3E6E9><td width=30% height=22> ";
vdivb +=  "<img src=../../images/mc_t.gif border=0 height=15 width=7><font class=h10b><b><font color=007CFF>"+this.abarm000.bltpix.blt;
vdivb +=  vAbout2+"   </td><td width=47% align=right> ";
document.write(vdivb);
this.mcepABBRVTNS();
var vdivb2 = "</td><td width=23% align=right>" + varsm_sq3 + "</td></tr></table>"+vsmE6F6dn;
document.write(vdivb2);
}

function mcepabout(){
document.write(smTab0 + "<tr valign=top><td width=68% valign=top><font class=v2bp>");
}

function smMDCNT_JKR() {
document.write("");
}

function mcepwsec5(){
var vwstbnvr = "<td width=8%></td><td width=92%><br>";
document.write("<input type=hidden name=vmccalxpp value="+this.smnxCNT[4].pagelinx+"></smnxform></form><form name=smnxCorg>");

vsmP4P  = smTab0 + "<tr valign=top>"+vwstbnvr+"<table width=100% border=0 valign=top align=center cellspacing=0 cellpadding=0><tr><td bgcolor=#dedeea><font class=t8g><b>";
////vsmP4P += "<div id=smP4P><b class=p4top><b class=p41></b><b class=p42></b><b class=p43></b><b class=p44></b></b>";
vsmP4P += " &#160; <img src=../../images/smnx_per.gif align=baseline vspace=0> "+vPersonalizeforPrinting+"</b> ("+voptional+")";
////vsmP4P += "<b class=p4bottom><b class=p44></b><b class=p43></b><b class=p42></b><b class=p41></b></b></div></td><tr></table>";
vsmP4P += "</td><tr></table>";
document.write(vsmP4P);
var vmdxpgsec3a   =  "";
/////vmdxpgsec3a +=  "<table width=100% border=0 cellspacing=1 cellpadding=1 bgcolor=#1f496e><tr><td width=100% bgcolor=#e6e6fa>" ;
/////vmdxpgsec3a +=  " <font class=t8g><img src=../../images/smnx_per.gif align=baseline vspace=0><b> "+vPersonalizeforPrinting+"</b> ("+voptional+")</td></tr></table> ";
vmdxpgsec3a +=  " <table width=100% border=0 align=left valign=center cellspacing=1 cellpadding=1 bgcolor=#EEEEEE>";
vmdxpgsec3a +=  " <tr><td width=30% align=right><font class=t8a>"+vProviderName+"</td><td width=70%><font class=t8a>";
document.write(vmdxpgsec3a);
document.write("<input type=text size=28 name=vhccdp173 style='background:#FCFCFC;color:#000000;font-family:tahoma,sans-serif;font-size:12px;font-weight:plain;' "); 
document.write("onFocus=\"this.style.background='FFEE00'\" onBlur=\"this.style.background='FFFFFF'\"> ");
vmdxpgsec3ab =  " <tr><td width=30% align=right><font class=t8a>"+vPatientName+"</td><td width=70%><font class=t8a>";
document.write(vmdxpgsec3ab);
document.write("<input type=text size=28 name=vhcdcb001 style='background:#FCFCFC;color:#000000;font-family:tahoma,sans-serif;font-size:12px;font-weight:plain;' "); 
document.write("onFocus=\"this.style.background='FFEE00'\" onBlur=\"this.style.background='FFFFFF'\"> ");
document.write("<tr><td colspan=2>");
this.bnofb121.dfrbwmi();
document.write("</td></tr>");
document.write("<tr><td height=2 colspan=2></td></tr></table></td></tr></table><br>  ");
}



var vTblIna = " <TABLE width=100% cellspacing=1 cellpadding=2 border=0 bgcolor=#003366>";
vTblIna += "<tr bgcolor=#9FC0D0 align=center> ";
vTblIna += "<td width=18% align=left><font class=t8bb>"+vParameter.toUpperCase()+" <sup>1</sup></td> ";
vTblIna += "<td width=11% align=left><font class=t8bb>"+vabbrev+"</td> ";
vTblIna += "<td width=7%><font class=t8bb>"+vspcmn+"</td> ";
vTblIna += "<td width=8%><font class=t8bb>"+vNormalLow+"</td> ";
vTblIna += "<td width=9%><font class=t8bb>"+vNormalHigh+"</td> ";
vTblIna += "<td width=8%><font class=t8bb>"+vLowerLimit+"</td> ";
vTblIna += "<td width=9%><font class=t8bb>"+vHigherLimit+"</td> ";
vTblIna += "<td width=11%><font class=t8bb>"+vCUnits.toUpperCase()+"</td> ";
vTblIna += "<td width=8%><font class=t8bb>"+vCF+"</td> ";
vTblIna += "<td width=11%><font class=t8bb>"+vSIUnits.toUpperCase()+"</td> ";
vTblIna += "</tr></table> ";


/////////////////////translation
var vTblInFWW = "<b>About the Parameters: </b> ";
vTblInFWW += "Normal values (and limits) are expressed in C Units. Spcmn = specimen. Abbrev = abbreviation.<br> ";
vTblInFWW += "CF= conversion factor. Units (c) x CF = Units (si) (unless otherwise specified). ";
vTblInFWW += this.srInpts.name + " in yellow background, " +  this.srOutpts.name + " in blue. <br>" ;

var vTblInF2 = " <TABLE width=100% cellspacing=1 cellpadding=2 border=0 bgcolor=#E6E6E6> ";
vTblInF2 += " <tr><td height=8></td></tr><tr bgcolor=#9FC0D0><td height=1></td></tr><tr><td><font class=a1p> ";
var vTblInF3  = "<b><sup>1</sup> Click on the links above to go to Parameter Unit Conversion Pages.</b>";
var vTblInF3close = "</font></td></tr></table> </td></tr></table>"+vsmE6F6dn+"<br><br> ";


var TblIn1_100 = "</td><td width=32%></td></tr></table>";
function mcepTblIn(){
var TblIn1 = "<br><br><br>" + smTab0 + "<tr valign=top><td>";
TblIn1 += vsmE6F6up + smTab0 + "<tr bgcolor=#E6E6E6 align=left><td height=22 width=65%><a name=abbrevzz><img src=../../images/mc_t.gif border=0 height=14 width=7></a>";
TblIn1 += this.abarm000.bltpix.blt+"<font class=h10b><b><font color=007CFF>"+vEquation+" "+vParameters+"</b> ("+this.smnxCNT[4].name+")</font></td>";
TblIn1 += "<td width=20% align=right><font class=t8a><font color=#336699>"+vLinkstoConversion+" ";
TblIn1 += "<img src=../../images/sm_dwn.gif border=0 height=9 width=9 align=baseline></td><td width=15% height=12></td></tr></table>";
document.write(TblIn1_100 + TblIn1 + vTblIna);
document.write(smTab0 + "<tr bgcolor=#EEEEDD><td height=6><font class=t8><font color=#223344><b> &#160;&#160;" + this.srInpts.name + "</td></tr></table>");
	for (var i = 0; i < mcepInpts.length; i++) {
 	this.mcepInpts[i].TblInOtA();
	}	
document.write(smTab0 + "<tr bgcolor=#99bbcc><td height=6><font class=t8><font color=#223344><b> &#160;&#160;" + this.srOutpts.name + "</td></tr></table>");
	for (var i = 0; i < mcepOtpts.length; i++) {
 	this.mcepOtpts[i].TblInOtA();
	}	
document.write(vTblInF2 + vTblInFWW + vTblInF3 + vTblInF3close);
}

var nlmpmlink = "<a href=http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?itool=abstractplus&db=pubmed&cmd=Retrieve&dopt=abstractplus&list_uids="; 
var nlmpmlink2 =  " target=_blank class=hbp>";

vaddtedtrs = "";
function mcepEdtrSec_OLD(){
var vpEdtrzz =  smTab0 + "<tr bgcolor=#E6E6E6><td height=22 width=90%><a name=#editorzz><img src=../../images/mc_t.gif border=0 height=14 width=7></a>";
vpEdtrzz +=  this.abarm000.bltpix.blt+"<font class=h10b><b><font color=007CFF>"+vEditors+" </td><td width=10% align=right>" + varsm_sq3 + " </td>";
vpEdtrzz +=  "</tr><tr><td colspan=2 height=12></td></tr></table>"
vpEdtrzz += smTab12 + "<tr valign=top><td width=50% bgcolor=#FEFEFE><font class=v1b>"+vEditors+":</font><br><font class=t8a>";
document.write(vpEdtrzz);
if (vaddtedtrs != "") {var vaddedtrs = vaddtedtrs+"<br>";}else{vaddedtrs = "<br>"}
document.write(vaddedtrs + "<br><font class=v1b> "+vEdtrchf+":</font><br> A. Arturo Rodriguez, MD, MBA<br><br>");
document.write("<font class=v1b>"+vProgrmmngDsgn+":</font><br> The geocities Team<br><br></td><td width=10%></td>");
document.write("<td width=40% bgcolor=#FEFEFE align=center valign=center><font class=v1b>" + this.abaqx000.name);
document.write(": </font><br><br><font class=t8a> <a href=mailto:BloodCalc@geocities.com> BloodCalc@geocities.com</a></td></tr></table><br><br>");
}

function mcepEdtrSec(){
var vpEdtrzz =  vsmE6F6up+smTab0+ "<tr bgcolor=#E6E6E6><td width=90%><img src=../../images/mc_t.gif border=0 height=14 width=7>"+this.abarm000.bltpix.blt+" <font class=h10b><b><font color=007CFF>"+this.abaqx000.name+": </b></font>";
vpEdtrzz +=  "<font class=t8a><a href=mailto:BloodCalc@geocities.com> BloodCalc@geocities.com</a></td><td width=10% align=right>" + varsm_sq3 + " </td></tr></table>"+vsmE6F6dn;
document.write(vpEdtrzz);
document.write(smTab0 + "<tr><td><font class=v1b>"+vProgrmmngDsgn+":</font><font class=t8a> The geocities Team</td></table><br><br>");
}




mcepREqtns = new Array();
function mcepRelEqs(){
var vpRel =  vsmE6F6up+smTab0 + "<tr bgcolor=#E6E6E6><td height=22 width=90%><img src=../../images/mc_t.gif border=0 height=14 width=7>";
vpRel +=  this.abarm000.bltpix.blt+"<font class=h10b><b><font color=007CEE>"+vRelatedEq+" </td><td width=10% align=right>" + varsm_sq3 + " </td>";
vpRel +=  "</tr></table>"+vsmE6F6dn;
vpRel += smTab1+"<tr><td><font class=v2bp>" + this.smnxCNT[1].SMRTRNLNX1() + "<br>"+ this.smnxCNT[2].SMRTRNLNX1() +"<br>"+ this.smnxCNT[3].SMRTRNLNX1()+"</td></tr></table>";
vpRel += smTab12 + "<tr valign=top><td width=80%><font class =v1p>";
document.write(vpRel);
	for (var i = 0; i < mcepREqtns.length; i++) {
 	this.mcepREqtns[i].ntinone();
	}	
document.write("</td></tr></table><br><br>");
//////this.mcepRefSec();
this.mcepEdtrSec();
}


var vTblInb = " <TABLE width=100% cellspacing=1 cellpadding=2 border=0 bgcolor=#DDDDDD>";
vTblInb += "<tr bgcolor=DDDDDD align=right height=12><td width=52% height=12></td>";
vTblInb += "<td width=19% bgcolor=#EEEEEE height=12><font class=t7b><font color=#336699>"+vLinkstoConversion+" ";
vTblInb += "<img src=../../images/sm_dwn.gif border=0 height=9 width=9 align=baseline></td><td width=9% height=12></td>";
vTblInb += "<td width=20% bgcolor=#EEEEEE height=12 align=left><font class=t7b><font color=#336699>"+vLinkstoEquations+" ";
vTblInb += "<img src=../../images/sm_dwn.gif border=0 height=9 width=9 align=baseline></td></tr></table>";

var vTblInc = " <TABLE width=100% cellspacing=1 cellpadding=2 border=0 bgcolor=#003366>";
vTblInc += "<tr bgcolor=#9FC0D0 align=center> ";
vTblInc += "<td width=18% align=left><font class=t8bb>"+vParameter.toUpperCase()+" </td> ";
vTblInc += "<td width=10% align=left><font class=t8bb>"+vabbrev+"</td> ";
vTblInc += "<td width=7%><font class=t8bb>"+vspcmn+"</td> ";
vTblInc += "<td width=8%><font class=t8bb>"+vNormalLow+"</td> ";
vTblInc += "<td width=9%><font class=t8bb>"+vNormalHigh+"</td> ";
vTblInc += "<td width=11% bgcolor=#AFD0E0><font class=t8bb>"+vCUnits.toUpperCase()+"</td> ";
vTblInc += "<td width=8%><font class=t8bb><font color=#996633>"+vCF+" <sup>1</sup></td> ";
vTblInc += "<td width=9% bgcolor=#AFD0E0><font class=t8bb>"+vSIUnits.toUpperCase()+"</td> ";
vTblInc += "<td width=20%><font class=t8baz><b>"+vEquation.toUpperCase()+"</b> <sup>2</sup></td></tr></table>";

var vTblInF4  = "<b><sup>1</sup> CF links connect to Unit Conversion Pages. <sup>2</sup> Equation links connect to Equation pages.</b></font>";
var vTblInF4close = "</td></tr></table>"+vsmE6F6dn+" </td></tr></table><br>";


function mcepTblIn2(){
var TblIn2 = "<br>" + smTab0 + "<tr valign=top><td>"+vsmE6F6up ;
TblIn2 += " <TABLE width=100% cellspacing=1 cellpadding=2 border=0 bgcolor=#E6E6E6><tr><td><font class=t8a> ";
TblIn2 += "  Includes Parameters frequently used in the Equation Panels of the "+ this.smnxCNT[2].name + " Section ";
TblIn2 += " (alphabetical order).<br> Click on the links to go to Equation pages and Unit Conversion Panels. </td></tr></table>";
document.write(TblIn2 + vTblInb + vTblInc);
document.write(smTab0 + "<tr><td height=6></td></tr></table>");
	for (var i = 0; i < mcepInOtpts.length; i++) {
 	this.mcepInOtpts[i].TblInOtF();
	}	
document.write(vTblInF2 + vTblInF4 +vTblInF4close);
}


///////////////////////////////////////////section pages
function smnxTblga(){
document.write("<table class=smnxtbbrdG WIDTH=100%><tr bgcolor=#FFFFFF><td><font class=v1p>");
document.write("<TABLE WIDTH=100% border=0 bgcolor=#E0E0E0>");
document.write("<tr align=right><td colspan=2><font class=t20f>" + this.smnxCNT[1].name + "</font>");
document.write("</td></tr><tr valign=top><td height=175 width=25%><img src=../../images/mc_t.gif ");
document.write(" border=0 width=1 height=300 hspace=0></td><td width=75%>");
}

function smnxTblgz(){document.write("</td></tr></TABLE></td></tr></TABLE><br><br><br><br>");}

function mdxpTbout(){
		document.write("<table class=smnxtbbrdG cellspacing=2 cellpadding=1 width=100%>");
		document.write("<tr bgcolor=#FCFCFC><td><font class=v1p>");
}

var vLinksCN = "links connect to conversion pages (unit conversion panels).";
var vLinksEQ = "links connect to equation pages (equation panels).";
function mxlapsid(){
	document.write(smTab0+"<tr bgcolor=#F6F6F6 valign=bottom><td colspan=2 height=38><font color=#223344><font class=a8><sup>1</sup>*<b>");
	document.write(vEq+"</b> "+vLinksEQ+" <br>*<b>"+vCn+"</b> "+vLinksCN+" </font></td></tr></table>");
}


///////////////////////////////////////////multicalx
function mceptabtopCC(){
document.write("<table width=100% border=0 valign=top cellspacing=0 cellpadding=0 bgcolor=#E6E6E6>"); 
document.write("<tr><td colspan=4>"+vsmE6F6up+"</td><td colspan=2 bgcolor=#F6F6F6></td></tr><tr valign=top><td width=37% valign=top>");
}
function mceptabmid1CC(){
document.write("<td width=2%></td><td width=40%>");
}
function mceptabmid2CC(){
document.write("<td width=1%></td><td width=3% bgcolor=#F6F6F6></td><td width=17% bgcolor=#F6F6F6>");
}



function mcepABBRVTNS(){
document.write("<image src=../../images/sm_dwn.gif border=0 width=9 height=9 hspace=0 vspace=0>");
document.write(" <font class=t8a><a href=#abbrevzz target=_self class=adv>"+vParameters+" & "+vabbreviations+"</a>&nbsp;&nbsp;&nbsp; ");
document.write("<image src=../../images/sm_frw.gif align=baseline width=6 height=9 hspace=0 vspace=0>");
document.write(" <font class=t8a><font class=t8a><a href=\"javascript:bmcxyqWindvw();\" class=adv>"+vReferences+"</a>&nbsp;&nbsp;&nbsp;");
////document.write("<image src=../../images/sm_dwn.gif border=0 width=9 height=9 hspace=0 vspace=0>");
////document.write(" <font class=t8a><a href=#editorzz target=_self class=adv>"+vEditors+"</a>&nbsp;&nbsp;&nbsp; ");
}
var vPlacePointr = "Place the pointer over the green bullets ("+this.eb16.blt+") to display full parameter names, normal values and equations (IE).";
var vPlacePointr2 = "";
function ixfrbxMC(){
var vixfrbxMC =  "<table width=100% border=0 valign=top cellspacing=1 cellpadding=1><tr valign=top><td width=1>";
vixfrbxMC +=  " <img src=../../images/sm_frw.gif align=baseline width=6 height=9 border=0></td><td width=99%><font class=a8><font color=#993333>";
/////// Deprecated  vixfrbxMC +=  vPlacePointr+ "<br>";
vixfrbxMC +=  vPlacePointr2+ "</td></tr></table>";
/////// Deprecated  document.write(vixfrbxMC);
}

function oxfrbx(){
ixfrbx1 =  "<table width=100% border=0 valign=top cellspacing=1 cellpadding=1 bgcolor=#DDDDDD>";
ixfrbx1 +=  " <tr><td height=22><img src=../../images/mc_t.gif width=1 height=24 border=0></td></tr></table>";
document.write(ixfrbx1);
}

var vcalxpnlEPbtn = "<input type=button value='Equations' onclick='bmcxpqWindvw()' style='width:90;height:25;color:#114477;font-family: helvetica,sans-serif;font-size:8pt;font-weight:bold'>&#160;&#160; ";

var vcalxpnlPRbtn = "<input type=button value='Print Format' onclick='mcepCFPR()' style='width:90;height:25;color:#114477;font-family: helvetica,sans-serif;font-size:8pt;font-weight:bold'>&#160;&#160;&#160; ";
var vcalxpnlRCbtn = "<input type=reset value='Reset' onload='this.reset(this.form)' onclick='mcxpRST(this.form)' style='width:65;height:25;color:#336699;font-family: helvetica,sans-serif;font-size:9pt;font-weight:bold'> &#160;&#160;";
vcalxpnlRCbtn +="<input type=button name=calc value='Calculate' onclick='CmptFrm(this.form)' style='width:100;height:25;color:#003366;font-family: helvetica,sans-serif;font-size:10pt;font-weight:bold'> ";

function smmcproxCC(){
document.write(smTab0+"<tr valign=top align=center><td><font class=t8a> ");
document.write(vcalxpnlPRbtn + vcalxpnlRCbtn);
document.write("</td></tr><tr><td height=18></td></tr><table>");
document.write(smTab0+"<tr valign=top align=left>&#160; "+ vcalxpnlEPbtn +"</td></tr>");
document.write(" <tr><td height=2></td></tr></table>");
}

function smmcprox(){
var vsmmcprox =  " <table width=100% border=0 valign=top cellspacing=0 cellpadding=0 bgcolor=#E6E6E6 align=center>";
vsmmcprox +=  " <tr><td height=16></td></tr><tr valign=top align=center><td><font class=t8a> ";
document.write(vsmmcprox + vcalxpnlPRbtn + vcalxpnlRCbtn);
document.write("</td></tr> <tr><td height=16></td></tr> </table>");
}

function smmcproxCLZ(){
var vsmmcproxc =  "<table width=100% border=0 valign=top cellspacing=0 cellpadding=0 bgcolor=#E9E9E9><tr bgcolor=#999999><td height=1></td></tr>";
vsmmcproxc +=  "<tr valign=top><td><img src=../../images/mclogoapp8.png width=300 height=35 hspace=3 vspace=2 border=0></td></tr></table>";
document.write(vsmmcproxc);
}
function smmcproxCLZ76(){
var vsmmcproxc3 =  " <table width=80% border=0 valign=top cellspacing=0 cellpadding=0 bgcolor=#E9E9E9><tr bgcolor=#999999><td height=2></td></tr>";
vsmmcproxc3 +=  "<tr valign=top><td> <img src=../../images/mclogoapp8.png width=300 height=35 hspace=9 vspace=0 border=0></td></tr><tr><td>"+vsmE6F6dn+"</td></tr></table>";
document.write(vsmmcproxc3);
}


//////////////////////////// p
function smnxpUNO(){
	
//this.smnxpfra1();
//this.smnxpfrb1();
//this.smnxpfrbi();
//this.smnxpfrbu();
//this.smnxpfrbX();
//this.smnxpfrbW();
this.smnxpfrb2();
this.smnxpfrci();
this.smnxpfrcu();
document.write(vsmE6F6dn+"<br>");
}


function smnxpDOS(){
this.smmcprox();
this.smmcproxCLZ();
this.ClsAppBx();
this.mceptabmid1();
this.StrtAppBx2()
this.mcepIMGn();
this.mcepwsec5();
this.ClsAppBx2();
this.mceptabmid2();
this.StrtAppBx3()
this.mcepADVO();
this.ClsAppBx2();
this.tabend();
this.mcepdivb(); 
this.mcepabout();
}

function smnxpDOSC(){
///////////this.smnxpCRPszCCRSLT();
this.ClsAppBx2();
this.mcepwsec5();
///////new 4 tbl
this.smMDCNT_JKR(); 

this.mceptabmid2CC();
this.StrtAppBx3()
this.mcepADVO();
this.ClsAppBx2();
this.tabend();
this.smmcproxCLZ76();
this.mcepdivb(); 
this.mcepabout();
}


/////////////////////////////////
function urchinSM() {
_uacct = "UA-1835109-1";
urchinTracker();
}

function smnxpTRE(){
document.write(vsmE6F6up);
this.smnxpfrcu();
document.write(vsmE6F6dn);
this.dsplysmnxwrng(); 
this.dsplysmnxft();
this.smnxpfrb3();
//////this.urchinSM();
}
////////////////
function smnxpCRPsz(){
	var ixfrbxNMBR;
	var vtmn = mcepInpts.length;
	if (vtmn == 1 ) {ixfrbxNMBR = this.ixfrbx1();this.ixfrbx1();this.ixfrbx1();}
	else if (vtmn == 2 ) {ixfrbxNMBR = this.ixfrbx1();this.ixfrbx1();}
	else if (vtmn == 3 ) {ixfrbxNMBR = this.ixfrbx1();}
	else if (vtmn >= 4 || vtmn == 0) {ixfrbxNMBR = "";}else{};
	return ixfrbxNMBR;
}

function smnxpCRP(){
this.StrtAppBx();
this.dsplInpts();
	for (var ieg = 0; ieg < mcepInpts.length; ieg++) {
 	this.mcepInpts[ieg].dfrbwmi();
	}	
this.smnxpCRPsz();
this.ixfrbx1();
this.dsplOutpts();
this.dfrbwbcAC();
	for (var iei = 0; iei < mcepOtpts.length; iei++) {
 	this.mcepOtpts[iei].dfrbwbc();
	}	
this.tabend();
	for (var iel = 0; iel < mcepOtpts.length; iel++) {
	//////this.mcepOtpts[iel].dfrbwbcZ(); **off now
	}	
}
////////
function smnxpCRPszCC(){
	var vtmn2 = mcepInpts.length;
	if (vtmn2 >= 1 || vtmn2 < 8) {var vtmnR = 175 - ((vtmn2-1)*(26));}
	else if (vtmn2 >= 8 || vtmn2 == 0) {vtmnR = "1";}else{};
var vxfrbxk = smTab0+"<tr><td><img src=../../images/mc_t.gif width=1 height="+vtmnR+" border=0></td></tr></table>";
document.write(vxfrbxk);
}
////////////////////////////ok
function smnxpCRPC(){
	this.mceptabtopCC();
this.StrtAppBxM();
this.dsplInpts();
	for (var iei = 0; iei < mcepInpts.length; iei++) {
 	this.mcepInpts[iei].dfrbwmi();
	}
	
this.smnxpCRPszCC();
this.ixfrbx1();
this.smmcproxCC();
this.ixfrbxMC();
		this.ClsAppBxM();
		this.tabend();
		this.mceptabmid1CC();
		this.StrtAppBx2()
this.dsplOutpts();
this.dfrbwbcAC();
	for (var iet = 0; iet < mcepOtpts.length; iet++) {
 	this.mcepOtpts[iet].dfrbwbc();
	}	
this.tabend();
}


var varsm_bfhvr = "<tr bgcolor=#FEFEFE valign=baseline onmouseover=javascript:style.background=\'EEEEEE\' onmouseout=javascript:style.background=\'#FEFEFE\'>";

function varsm_bbfx() {
var varsm_bb = "<br>"+smTab0+"<tr><td width=10% align=left>";
varsm_bb += "<table width=43 bgcolor=#166083 border=0 valign=center cellspacing=1 cellpadding=0 topmargin=0 hspace=0 vspace=0>"+varsm_bfhvr;
varsm_bb += "<td height=12><img src=../../images/sm_bck.gif width=6 height=9 border=0><font class=t8a><a href=\"javascript:this.window.history.back()\;\"> "+vback+"</a></td></tr></table>";
varsm_bb += "</td><td width=80%></td><td width=10% align=left>"+varsm_squp+"</td></tr></table>";
document.write(varsm_bb);
}

var vEftoocp = "*Equations follow the order of the calculator panel.";



function smnxpUNOS(){
	return;
this.smnxpfra1();
this.smnxpfrb1();
this.smnxpfrbi();
this.smnxpfrbu();
this.smnxpfrbX();
this.smnxpfrbWS();
this.smnxpfrb2();
this.smnxpfrci();
this.smnxpfrcu();
document.write(vsmE6F6dn+"<br>");
}




//////////////////////////// p
function smnxcUNO(){
this.smnxpcra1();
this.smnxpfrb1();
this.smnxpcrbi();
this.smnxpcrbu();

this.smnxpfrbX();
this.smnxpfrbW();
this.smnxpfrb2();

this.smnxpcrci();

this.smnxpfrcu();
document.write(vsmE6F6dn+"<br>");
}








/////Master Structure//////////////two cols///////////////////txt outside if no references, otherwise inside   //////08302014
////////////Metabolic Sx////CKD  
var TR_TDF650 = " <tr align=left bgcolor=#F6F6F6><td width=50%><font class=h13pps><b>&#160;";
var TR_TDE650 = " <tr align=left bgcolor=#E6E6E6><td width=50%><font class=h13pps><b>&#160;";
var TD_TD50 = " </td><td width=50% align=left><font class=h13pps><b>&#160; ";
var TR_TDbluCOL2 = "<tr align=left valign=top bgcolor=#99b3CC><td colspan=2><font class=h14ppe><b>&#160;"
var TR_TDbgrCOL2 = "<tr align=left valign=top bgcolor=#d3d9df><td colspan=2><font class=h13pps><b>&#160;"
var TR_TDbgrCOL3 = "<tr align=left valign=top bgcolor=#E6E6E6><td colspan=3><font class=h13pps><b>&#160;"

var TR_TDF675 = " <tr align=left bgcolor=#F6F6F6><td width=75%><font class=h13pps><b>&#160;";
var TR_TDE675 = " <tr align=left bgcolor=#E6E6E6><td width=75%><font class=h13pps><b>&#160;";
var TR_TDF685 = " <tr align=left bgcolor=#F6F6F6><td width=85%><font class=h13pps><b>&#160;";
var TR_TDE685 = " <tr align=left bgcolor=#E6E6E6><td width=85%><font class=h13pps><b>&#160;";

var TD_TD70 = " </td><td width=70% align=left><font class=h13pps><b>&#160; ";
var TD_TD40 = " </td><td width=40% align=left><font class=h13pps><b>&#160; ";
var TD_TD30 = " </td><td width=30% align=left><font class=h13pps><b>&#160; ";
var TD_TD25 = " </td><td width=25% align=left><font class=h13pps><b>&#160; ";
var TD_TD20 = " </td><td width=20% align=left><font class=h13pps><b>&#160; ";
var TD_TD15 = " </td><td width=15% align=left><font class=h13pps><b>&#160; ";

var TR_TDF620 = " <tr align=left bgcolor=#F6F6F6><td width=20%><font class=h13pps><b>&#160;";
var TR_TDE620 = " <tr align=left bgcolor=#e6e6e6><td width=20%><font class=h13pps><b>&#160;";
var TR_TDF625 = " <tr align=left bgcolor=#F6F6F6><td width=25%><font class=h13pps><b>&#160;";
var TR_TDE625 = " <tr align=left bgcolor=#e6e6e6><td width=25%><font class=h13pps><b>&#160;";
var TR_TDF630 = " <tr align=left bgcolor=#F6F6F6><td width=30%><font class=h13pps><b>&#160;";
var TR_TDE630 = " <tr align=left bgcolor=#e6e6e6><td width=30%><font class=h13pps><b>&#160;";
var TR_TDF640 = " <tr align=left bgcolor=#F6F6F6><td width=40%><font class=h13pps><b>&#160;";
var TR_TDE640 = " <tr align=left bgcolor=#e6e6e6><td width=40%><font class=h13pps><b>&#160;";


var TRTDF625 = " align=left bgcolor=#F6F6F6><td width=25%><font class=h13pps><b>&#160;";
var TRTDE625 = " align=left bgcolor=#E6E6E6><td width=25%><font class=h13pps><b>&#160;";
var TRTDF630 = " align=left bgcolor=#F6F6F6><td width=30%><font class=h13pps><b>&#160;";
var TRTDE630 = " align=left bgcolor=#E6E6E6><td width=30%><font class=h13pps><b>&#160;";

//////////////////////////////////////////////////////////////////////////////////////////////////// Common FX

var smTab01Blk = "<table width=100% border=0 valign=top align=center cellspacing=0 cellpadding=1 bgcolor=#000000 hspace=0 vspace=0>";	
var smTab01LG = " <table width=100% border=0 valign=top align=center cellspacing=0 cellpadding=1 bgcolor=#d3d9df hspace=0 vspace=0>";										
var tr_LghtBl = "<tr align=left valign=top  bgcolor=#99b3CC><td height=2 colspan=7></td></tr>";
var tr_CCC67 = "<tr align=left valign=top  bgcolor=#CCCFCE><td height=6 colspan=7></td></tr>";										

///////////////////// 


