
var vSM_MC = " :: BloodCalc&#174; ::";
var smTab0 = " <table width=100% border=0 valign=top cellspacing=0 cellpadding=0 topmargin=0 hspace=0 vspace=0>";
var smTab0C = " <table width=100% border=0 valign=top cellspacing=0 cellpadding=0 topmargin=0 hspace=0 vspace=0 class='table-curvedG'>";
var smTab0mcout = "<table width=100% border=0 valign=top cellspacing=0 cellpadding=1 topmargin=0 hspace=0 vspace=0 class='table-mcoutputsp'>";

var smTab1 = " <table width=100% border=0 valign=top cellspacing=1 cellpadding=1>";
var smTab11B = " <table width=100% border=0 valign=top cellspacing=1 cellpadding=1 bgcolor=#336699>";
var smTab12 = "<table width=100% border=0 align=center valign=top cellspacing=1 cellpadding=2>";
var smTabOutmst = " <table width=990 border=0 valign=top cellspacing=0 cellpadding=0 topmargin=0 leftmargin=0><tr valign=top><td valign=top>";
var smTabOutmst2 = "</td></tr></table>";

var trB =  "<tr bgcolor=#BBBBBB>";  var trC =  "<tr bgcolor=#CCCCCC>";
var trD =  "<tr bgcolor=#DDDDDD>";  var trE =  "<tr bgcolor=#EEEEEE>";
function smnxclstab(){document.write("</td></tr></table>");}
var vmccalx = "MultiCalx&#153;";

var varsm_squp = "<input type=image src=../../images/sm_squp.gif border=0 width=15 height=12 align=baseline hspace=0 vspace=0 onClick=\'window.scrollTo(0,0);\'>";
var varsm_squpc = "<input type=image src=../../images/sm_squp_mb.png border=0 width=30 height=24 align=baseline hspace=0 vspace=0 onClick=\'window.scrollTo(0,0);\'>";
var vsm_rcup = "<input type=image src=../../images/sm_rcup.png border=0 width=36 height=30 align=baseline hspace=0 vspace=0 onClick=\'window.scrollTo(0,0);\'>";


var varsm_sql = "<input type=image src=../../images/sm_sql.gif border=0 width=15 height=12 hspace=5 vspace=0 onClick=\'window.history.back();\'>";
var varsm_sqr = "<input type=image src=../../images/sm_sqr.gif border=0 width=15 height=12 hspace=5 vspace=0 onClick=\'window.history.forward();\'>";
var varsm_sq3 = varsm_sql+varsm_squp+varsm_sqr;
var vsm_frw = "<img src=../../images/sm_frw.gif align=baseline width=6 height=9 border=0>";
var vsynt_arrf = "<img src=../../images/synt_arrf.png align=baseline width=6 height=8 border=0>";

var varsm_bfhvr = "<tr bgcolor=#DbDbDb valign=baseline onmouseover=javascript:style.backgroundColor=\'C6C6C6\' onmouseout=javascript:style.backgroundColor=\'#DbDbDb\'>";
var varsm_bf = smTab0+"<tr><td><img src=../../images/sm_bck.gif align=baseline width=6 height=9 border=0><font class=a1bb><a href=\"javascript:this.window.history.back()\;\" class=redol> "+vback+"</a> | ";
varsm_bf += "<a href=\"javascript:this.window.history.forward()\;\" class=redol> "+vforward+"</a>"+ vsm_frw+"</td></tr></table>";

var toDay=new Date;
var NowDate=(toDay.getMonth()+1)+"/"+toDay.getDate()+"/"+(toDay.getYear()-100)+" ";
var NowTime= toDay.getHours()+"h:"+(toDay.getMinutes()+1+"min ");
var unixDT = new Date().getTime();


function roundtd(n,x){
	if (x < 0) x = 0;
	inptnmbr = n;
	if (x == 0){ return (Math.floor( n * 1 + 0.5 ) / 1); }
	else if (x == 1){ return (Math.floor( n * 10 + 0.5 ) / 10); }
	else if (x == 2){ return (Math.floor( n * 100 + 0.5 ) / 100); }
	else if (x == 3){ return (Math.floor( n * 1000 + 0.5 ) / 1000); }
	else if (x == 4){ return (Math.floor( n * 10000 + 0.5 ) / 10000); }
	else if (x == 5){ return (Math.floor( n * 100000 + 0.5 ) / 100000); }
}

function BukmrkSM() { if (document.all){window.external.AddFavorite(location.href, document.title)}}

function bltpix( blt ){this.blt = blt;}
mdc0 = new bltpix("<img src=../../images/bcaa_blta.gif align=baseline width=10 height=10 border=0> ");
mdc1 = new bltpix("<img src=../../images/bcaa_bltm.gif align=baseline width=10 height=10 border=0> ");
mdc2 = new bltpix("<img src=../../images/bcaa_blts.gif align=baseline width=9 height=9 border=0> ");
mdc4 = new bltpix("<img src=../../images/chaa_ii.png align=baseline width=16 height=12 border=0> ");
mdcz = new bltpix("<img src=../../images/chaa_ii.png align=baseline width=16 height=12 border=0> ");

mdc6 = new bltpix("<img src=../../images/bcaa_blte.png align=baseline width=8 height=8 border=0> ");
mdc7 = new bltpix("<img src=../../images/bcaa_blte.png align=baseline width=8 height=8 border=0> ");
mdc8 = new bltpix("<img src=../../images/bcaa_blte.png align=baseline width=8 height=8 border=0> ");


ebltmhp = new bltpix("<img src=../../images/mc_transp.gif align=baseline width=1 height=9 border=0> ");
ebltm = new bltpix("<img src=../../images/ehnp_bltm.gif align=baseline width=9 height=9 border=0> ");
ebltss = new bltpix("<img src=../../images/ehnp_bltss.gif align=baseline width=8 height=8 border=0> ");
ebltst = new bltpix("<img src=../../images/ehnp_blts.gif align=baseline width=9 height=9 border=0> ");
lbltst = new bltpix("<img src=../../images/labs_blts.gif align=baseline width=9 height=9 border=0> ");
ebltsu = new bltpix("<img src=../../images/ehnp_blts.gif align=baseline width=9 height=9 border=0> ");
ebltsc = new bltpix("<img src=../../images/ehnp_bltsc.gif align=baseline width=9 height=9 border=0> ");

eblts = new bltpix("<img src=../../images/ehnp_bltst.gif align=baseline width=18 height=10  border=0> ");
ebltpt = new bltpix("<img src=../../images/mc_bltp.png align=baseline width=8 height=8> ");
ebltp = new bltpix("<img src=../../images/ehnp_bltpt.gif align=baseline width=24 height=8> ");
ebltps = new bltpix("<img src=../../images/ehnp_bltps.gif align=baseline width=7 height=7> ");
ebltu = new bltpix("<img src=../../images/ehnp_bltu.gif align=baseline width=9 height=9> ");
ebltt = new bltpix("<img src=../../images/mc_t.gif align=baseline width=8 height=8> "); 
eblttx = new bltpix("<img src=../../images/mc_t.gif align=baseline width=8 height=8> "); 
ablttx = new bltpix("<img src=../../images/mc_t.gif align=baseline width=8 height=8> "); 
ebltbr = new bltpix("<img src=../../images/mc_t.gif align=baseline width=8 height=8> "); 
ebltpl = new bltpix("<img src=assets/labs_blt.png align=baseline width=8 height=8> ");
dbltpt = new bltpix("<img src=../../images/drgs_blt.gif align=baseline width=8 height=8> ");
ehnp_arrb = new bltpix("<img src=../../images/ehnp_arrb.gif align=baseline width=11 height=11> ");




//////////////ok
prtx_doc = new bltpix("<img src=../../images/prtx_doc.gif align=baseline width=15 height=14> ");
prtx_lg = new bltpix("<img src=../../images/prtx_lg.gif align=baseline width=15 height=14> ");
mdxp_lg = new bltpix("<img src=../../images/mdxp_lg.gif align=baseline width=15 height=14> ");
prtx_hp = new bltpix("<img src=../../images/prtx_hp.gif align=baseline width=15 height=14> ");
prtx_pn = new bltpix("<img src=../../images/prtx_pn.gif align=baseline width=15 height=14> ");
prtx_fs = new bltpix("<img src=../../images/prtx_fs.gif align=baseline width=15 height=14> ");
prtx_os = new bltpix("<img src=../../images/prtx_os.gif align=center width=7 height=7> ");
prtx_gs = new bltpix("<img src=../../images/prtx_gs.gif align=center width=7 height=7> ");

//////////////
eb11 = new bltpix("<img src=../../images/mc_bltm.gif align=baseline width=10 height=10 border=0> ");
eb12 = new bltpix("<img src=../../images/mc_blts.gif align=baseline width=9 height=9 border=0> ");
eb15 = new bltpix("<img src=../../images/mc_t.gif align=baseline width=8 height=8> "); 
eb16 = new bltpix("<img src=../../images/mc_bltp.png align=baseline width=8 height=8> ");
eb17 = new bltpix("<img src=../../images/mc_bltp.png align=baseline width=8 height=8> ");
eb19 = new bltpix("<img src=../../images/mc_bltmstr.png align=baseline width=16 height=8> ");
ebx = new bltpix("<img src=../../images/mc_bltp.png align=baseline width=8 height=8> ");
eby = new bltpix("<img src=../../images/mc_bltp.png align=baseline width=8 height=8> ");
ebz = new bltpix("<img src=../../images/mc_bltp.png align=baseline width=8 height=8>");


lb11 = new bltpix("<img src=../../images/labs_bltm.gif align=baseline width=9 height=9 border=0> ");
lb12 = new bltpix("<img src=../../images/labs_blts.gif align=baseline width=9 height=9 border=0> ");
lb15 = new bltpix("<img src=../../images/mc_t.gif align=baseline width=8 height=8 border=0> "); 
lb16 = new bltpix("<img src=assets/labs_blt.png align=baseline width=8 height=8 border=0> ");
lb17 = new bltpix("<img src=assets/labs_blt.png align=baseline width=8 height=8 border=0> ");

cb11 = new bltpix("<img src=../../images/conv_bltm.gif align=baseline width=9 height=9 border=0> ");
cb12 = new bltpix("<img src=../../images/conv_blts.gif align=baseline width=9 height=9 border=0> ");
cb16 = new bltpix("<img src=../../images/conv_blt.gif align=baseline width=8 height=8 border=0> ");

db11 = new bltpix("<img src=../../images/drugs_bltm.gif align=baseline width=9 height=9 border=0> ");
db12 = new bltpix("<img src=../../images/drugs_blts.gif align=baseline width=9 height=9 border=0> ");
db16 = new bltpix("<img src=../../images/drugs_blt.gif align=baseline width=8 height=8 border=0> ");

////////////////////////////
sm_abaa_i = new bltpix("<img src=../../images/sm_sm_ii_NEW2.png align=baseline width=33 height=24 border=0> ");
sm_abaa_ii = new bltpix("<img src=../../images/sm_sm_ii_NEW2.png align=baseline width=22 height=16 border=0> ");
sm_abaa_iis = new bltpix("<img src=../../images/sm_sm_ii.png align=baseline width=16 height=12 border=0> ");
sm_abaa_iiss = new bltpix("<img src=../../imagessm/rhombex_sky.png height=12 width=16 align=baseline border=0> ");

sm_abaa_in = new bltpix("<img src=../../images/abaa_ii.png align=baseline width=32 height=24 border=0> ");
sm_abaa_iin = new bltpix("<img src=../../images/abaa_ii.png align=baseline width=22 height=16 border=0> ");
sm_abaa_iisn = new bltpix("<img src=../../images/abaa_ii.png align=baseline width=16 height=12 border=0> ");

sm_fdaa_i = new bltpix("<img src=../../images/fdaa_ii.png align=baseline width=32 height=24 border=0> ");
sm_fdaa_ii = new bltpix("<img src=../../images/fdaa_ii.png align=baseline width=22 height=16 border=0> ");
sm_fdaa_iis = new bltpix("<img src=../../images/fdaa_ii.png align=baseline width=16 height=12 border=0> ");
sm_fdaa_iiss = new bltpix("<img src=../../images/fdaa_io.png align=baseline width=16 height=12 border=0> ");

sm_fdaa_c = new bltpix("<img src=../../images/fdaa_ccw.png align=baseline width=32 height=24 border=0> ");
sm_fdaa_cc = new bltpix("<img src=../../images/fdaa_ccw.png align=baseline width=22 height=16 border=0> ");
sm_fdaa_ccs = new bltpix("<img src=../../images/fdaa_ccw.png align=baseline width=16 height=12 border=0> ");

sm_bcaa_i = new bltpix("<img src=../../images/bcaa_ii.png align=baseline width=33 height=24 border=0> ");
sm_bcaa_ii = new bltpix("<img src=../../images/bcaa_ii.png align=baseline width=22 height=16 border=0> ");
sm_bcaa_iis = new bltpix("<img src=../../images/bcaa_ii.png align=baseline width=16 height=12 border=0> ");


sm_chaa_i = new bltpix("<img src=../../images/chaa_ii.png align=baseline width=32 height=24 border=0> ");
sm_chaa_ii = new bltpix("<img src=../../images/chaa_ii.png align=baseline width=22 height=16 border=0> ");
sm_chaa_iii = new bltpix("<img src=../../images/chaa_iii.png align=baseline width=22 height=16 border=0> ");
sm_chaa_iis = new bltpix("<img src=../../images/chaa_ii.png align=baseline width=16 height=12 border=0> ");
sm_chaa_iis2 = new bltpix("<img src=../../images/chaa_ii2.png align=baseline width=16 height=12 border=0> ");

sm_dmaa_i = new bltpix("<img src=../../images/dmaa_ii.png align=baseline width=32 height=24 border=0> ");
sm_dmaa_ii = new bltpix("<img src=../../images/dmaa_ii.png align=baseline width=22 height=16 border=0> ");
sm_dmaa_iii = new bltpix("<img src=../../images/dmaa_ii.png align=baseline width=22 height=16 border=0> ");
sm_dmaa_iis = new bltpix("<img src=../../images/dmaa_ii.png align=baseline width=16 height=12 border=0> ");


///////////////  SVG
sm_abaa_i = new bltpix("<img src=../../imagessm/sm_scym_lg.svg align=baseline width=32 height=24 border=0> ");
sm_abaa_ii = new bltpix("<img src=../../imagessm/sm_scym_lg.svg align=baseline width=24 height=18 border=0> ");
sm_abaa_iis = new bltpix("<img src=../../imagessm/sm_scym_lg.svg align=baseline width=16 height=12 border=0> ");
sm_abaa_iiss = new bltpix("<img src=../../imagessm/rhombex_sky.png height=12 width=16 align=baseline border=0> "); //OJO

sm_dmaa_i = new bltpix("<img src=../../imagessm/idox_logo.svg align=baseline width=32 height=24 border=0> ");
sm_dmaa_ii = new bltpix("<img src=../../imagessm/idox_logo.svg align=baseline width=24 height=18 border=0> ");
sm_dmaa_iii = new bltpix("<img src=../../imagessm/idox_logo.svg align=baseline width=24 height=18 border=0> ");
sm_dmaa_iis = new bltpix("<img src=../../imagessm/idox_logo.svg align=baseline width=16 height=12 border=0> ");
sm_dmaa_ii1 = new bltpix("<img src=../../imagessm/idox_logo1.svg align=baseline width=24 height=18 border=0> ");

sm_dmaa_viii = new bltpix("<img src=../../imagessm/idox_logo.svg align=baseline width=24 height=18 border=0> ");
sm_dmaa_viis = new bltpix("<img src=../../imagessm/idox_logo.svg align=baseline width=16 height=12 border=0> ");



sm_fdaa_i = new bltpix("<img src=../../imagessm/mc_logo.svg align=baseline width=32 height=24 border=0> ");
sm_fdaa_ii = new bltpix("<img src=../../imagessm/mc_logo.svg align=baseline width=24 height=18 border=0> ");
sm_fdaa_iis = new bltpix("<img src=../../imagessm/mc_logo.svg align=baseline width=16 height=12 border=0> ");
sm_fdaa_iiss = new bltpix("<img src=../../images/fdaa_io.png align=baseline width=16 height=12 border=0> ");

sm_chaa_i = new bltpix("<img src=../../imagessm/ehnp_logo.svg align=baseline width=32 height=24 border=0> ");
sm_chaa_ii = new bltpix("<img src=../../imagessm/ehnp_logo.svg align=baseline width=24 height=18 border=0> ");
sm_chaa_iii = new bltpix("<img src=../../imagessm/ehnp_logo.svg align=baseline width=24 height=18 border=0> ");
sm_chaa_iis = new bltpix("<img src=../../imagessm/ehnp_logo.svg align=baseline width=16 height=12 border=0> ");
sm_chaa_iis2 = new bltpix("<img src=../../imagessm/ehnp_logo.svg align=baseline width=16 height=12 border=0> ");


sm_vseps2 = new bltpix("<img src=../../imagessm/sm_seps_lg.svg align=baseline width=24 height=18 border=0> ");
sm_vseps1 = new bltpix("<img src=../../imagessm/sm_seps_lg.svg align=baseline width=20 height=15 border=0> ");
sm_vseps0 = new bltpix("<img src=../../imagessm/sm_seps_lg.svg align=baseline width=16 height=12 border=0> ");

sm_vicu2  = new bltpix("<img src=../../imagessm/sm_icu_lg.svg align=baseline width=24 height=18 border=0> ");
sm_vicu1  = new bltpix("<img src=../../imagessm/sm_icu_lg.svg align=baseline width=20 height=15 border=0> ");
sm_vicu0  = new bltpix("<img src=../../imagessm/sm_icu_lg.svg align=baseline width=16 height=12 border=0> ");

sm_vneph2  = new bltpix("<img src=../../imagessm/sm_neph_lg.svg align=baseline width=24 height=18 border=0> ");
sm_vneph1  = new bltpix("<img src=../../imagessm/sm_neph_lg.svg align=baseline width=20 height=15 border=0> ");
sm_vneph0  = new bltpix("<img src=../../imagessm/sm_neph_lg.svg align=baseline width=16 height=12 border=0> ");

sm_vpulm2  = new bltpix("<img src=../../imagessm/sm_pulm_lg.svg align=baseline width=24 height=18 border=0> ");
sm_vpulm1  = new bltpix("<img src=../../imagessm/sm_pulm_lg.svg align=baseline width=20 height=15 border=0> ");
sm_vpulm0  = new bltpix("<img src=../../imagessm/sm_pulm_lg.svg align=baseline width=16 height=12 border=0> ");

sm_vcard2  = new bltpix("<img src=../../imagessm/sm_card_lg.svg align=baseline width=24 height=18 border=0> ");
sm_vcard1  = new bltpix("<img src=../../imagessm/sm_card_lg.svg align=baseline width=20 height=15 border=0> ");
sm_vcard0  = new bltpix("<img src=../../imagessm/sm_card_lg.svg align=baseline width=16 height=12 border=0> ");
sm_vcard0  = new bltpix("<img src=../../imagessm/sm_card_lg.svg align=baseline width=16 height=12 border=0> ");

sm_vgast2  = new bltpix("<img src=../../imagessm/sm_gast_lg.svg align=baseline width=24 height=18 border=0> ");
sm_vgast1  = new bltpix("<img src=../../imagessm/sm_gast_lg.svg align=baseline width=20 height=15 border=0> ");
sm_vgast0  = new bltpix("<img src=../../imagessm/sm_gast_lg.svg align=baseline width=16 height=12 border=0> ");

sm_vhepa2  = new bltpix("<img src=../../imagessm/sm_hepa_lg.svg align=baseline width=24 height=18 border=0> ");
sm_vhepa1  = new bltpix("<img src=../../imagessm/sm_hepa_lg.svg align=baseline width=20 height=15 border=0> ");
sm_vhepa0  = new bltpix("<img src=../../imagessm/sm_hepa_lg.svg align=baseline width=16 height=12 border=0> ");

sm_vnutr2  = new bltpix("<img src=../../imagessm/sm_nutr_lg.svg align=baseline width=24 height=18 border=0> ");
sm_vnutr1  = new bltpix("<img src=../../imagessm/sm_nutr_lg.svg align=baseline width=20 height=15 border=0> ");
sm_vnutr0  = new bltpix("<img src=../../imagessm/sm_nutr_lg.svg align=baseline width=16 height=12 border=0> ");
sm_vnutr12  = new bltpix("<img src=../../imagessm/sm_nutr_lg2.svg align=baseline width=20 height=15 border=0> ");

sm_vascv2  = new bltpix("<img src=../../imagessm/sm_ascv_lg.svg align=baseline width=24 height=18 border=0> ");
sm_vascv1  = new bltpix("<img src=../../imagessm/sm_ascv_lg.svg align=baseline width=20 height=15 border=0> ");
sm_vascv0  = new bltpix("<img src=../../imagessm/sm_ascv_lg.svg align=baseline width=16 height=12 border=0> ");

sm_vobgy2  = new bltpix("<img src=../../imagessm/sm_obgy_lg.svg align=baseline width=24 height=18 border=0> ");
sm_vobgy1  = new bltpix("<img src=../../imagessm/sm_obgy_lg.svg align=baseline width=20 height=15 border=0> ");
sm_vobgy0  = new bltpix("<img src=../../imagessm/sm_obgy_lg.svg align=baseline width=16 height=12 border=0> ");

sm_vhema2  = new bltpix("<img src=../../imagessm/sm_hema_lg.svg align=baseline width=24 height=18 border=0> ");
sm_vhema1  = new bltpix("<img src=../../imagessm/sm_hema_lg.svg align=baseline width=20 height=15 border=0> ");
sm_vhema0  = new bltpix("<img src=../../imagessm/sm_hema_lg.svg align=baseline width=16 height=12 border=0> ");

sm_vendo2  = new bltpix("<img src=../../imagessm/sm_endo_lg.svg align=baseline width=24 height=18 border=0> ");
sm_vendo1  = new bltpix("<img src=../../imagessm/sm_endo_lg.svg align=baseline width=20 height=15 border=0> ");
sm_vendo0  = new bltpix("<img src=../../imagessm/sm_endo_lg.svg align=baseline width=16 height=12 border=0> ");

sm_vinfx2  = new bltpix("<img src=../../imagessm/sm_infx_lg.svg align=baseline width=24 height=18 border=0> ");
sm_vinfx1  = new bltpix("<img src=../../imagessm/sm_infx_lg.svg align=baseline width=20 height=15 border=0> ");
sm_vinfx0  = new bltpix("<img src=../../imagessm/sm_infx_lg.svg align=baseline width=16 height=12 border=0> ");

sm_vrheu2  = new bltpix("<img src=../../imagessm/sm_rheu_lg.svg align=baseline width=24 height=18 border=0> ");
sm_vrheu1  = new bltpix("<img src=../../imagessm/sm_rheu_lg.svg align=baseline width=20 height=15 border=0> ");
sm_vrheu0  = new bltpix("<img src=../../imagessm/sm_rheu_lg.svg align=baseline width=16 height=12 border=0> ");

sm_vtoxi2  = new bltpix("<img src=../../imagessm/sm_toxi_lg.svg align=baseline width=24 height=18 border=0> ");
sm_vtoxi1  = new bltpix("<img src=../../imagessm/sm_toxi_lg.svg align=baseline width=20 height=15 border=0> ");
sm_vtoxi0  = new bltpix("<img src=../../imagessm/sm_toxi_lg.svg align=baseline width=16 height=12 border=0> ");

sm_vneur2  = new bltpix("<img src=../../imagessm/sm_neur_lg.svg align=baseline width=24 height=18 border=0> ");
sm_vneur1  = new bltpix("<img src=../../imagessm/sm_neur_lg.svg align=baseline width=20 height=15 border=0> ");
sm_vneur0  = new bltpix("<img src=../../imagessm/sm_neur_lg.svg align=baseline width=16 height=12 border=0> ");

sm_vurol2  = new bltpix("<img src=../../imagessm/sm_urol_lg.svg align=baseline width=24 height=18 border=0> ");
sm_vurol1  = new bltpix("<img src=../../imagessm/sm_urol_lg.svg align=baseline width=20 height=15 border=0> ");
sm_vurol0  = new bltpix("<img src=../../imagessm/sm_urol_lg.svg align=baseline width=16 height=12 border=0> ");

sm_vsurg2  = new bltpix("<img src=../../imagessm/sm_surg_lg.svg align=baseline width=24 height=18 border=0> ");
sm_vsurg1  = new bltpix("<img src=../../imagessm/sm_surg_lg.svg align=baseline width=20 height=15 border=0> ");
sm_vsurg0  = new bltpix("<img src=../../imagessm/sm_surg_lg.svg align=baseline width=16 height=12 border=0> ");

sm_vorto2  = new bltpix("<img src=../../imagessm/sm_orto_lg.svg align=baseline width=24 height=18 border=0> ");
sm_vorto1  = new bltpix("<img src=../../imagessm/sm_orto_lg.svg align=baseline width=20 height=15 border=0> ");
sm_vorto0  = new bltpix("<img src=../../imagessm/sm_orto_lg.svg align=baseline width=16 height=12 border=0> ");

sm_vpsyc2  = new bltpix("<img src=../../imagessm/sm_psyc_lg.svg align=baseline width=24 height=18 border=0> ");
sm_vpsyc1  = new bltpix("<img src=../../imagessm/sm_psyc_lg.svg align=baseline width=20 height=15 border=0> ");
sm_vpsyc0  = new bltpix("<img src=../../imagessm/sm_psyc_lg.svg align=baseline width=16 height=12 border=0> ");

sm_vopht2  = new bltpix("<img src=../../imagessm/sm_opht_lg.svg align=baseline width=24 height=18 border=0> ");
sm_vopht1  = new bltpix("<img src=../../imagessm/sm_opht_lg.svg align=baseline width=20 height=15 border=0> ");
sm_vopht0  = new bltpix("<img src=../../imagessm/sm_opht_lg.svg align=baseline width=16 height=12 border=0> ");


sm_vsrch2  = new bltpix("<img src=../../imagessm/sm_srch_lg.svg align=baseline width=24 height=18 border=0> ");
sm_vsrch1  = new bltpix("<img src=../../imagessm/sm_srch_lg.svg align=baseline width=20 height=15 border=0> ");
sm_vsrch0  = new bltpix("<img src=../../imagessm/sm_srch_lg.svg align=baseline width=16 height=12 border=0> ");
sm_vsrch21  = new bltpix("<img src=../../imagessm/sm_srch_lg1.svg align=baseline width=24 height=18 border=0> ");
sm_vsrch11  = new bltpix("<img src=../../imagessm/sm_srch_lg1.svg align=baseline width=20 height=15 border=0> ");
sm_vsrch01  = new bltpix("<img src=../../imagessm/sm_srch_lg1.svg align=baseline width=16 height=12 border=0> ");

sm_vhelp2  = new bltpix("<img src=../../imagessm/sm_help_lg.svg align=baseline width=24 height=18 border=0> ");
sm_vhelp1  = new bltpix("<img src=../../imagessm/sm_help_lg.svg align=baseline width=20 height=15 border=0> ");
sm_vhelp0  = new bltpix("<img src=../../imagessm/sm_help_lg.svg align=baseline width=16 height=12 border=0> ");

sm_vconv2  = new bltpix("<img src=../../imagessm/sm_conv_lg.svg align=baseline width=24 height=18 border=0> ");
sm_vconv1  = new bltpix("<img src=../../imagessm/sm_conv_lg.svg align=baseline width=20 height=15 border=0> ");
sm_vconv0  = new bltpix("<img src=../../imagessm/sm_conv_lg.svg align=baseline width=16 height=12 border=0> ");


//NEW ICONS SVGs, get rid of old ones
sm_neph = new bltpix("<img src=../../imagessm/sm_neph_lg.svg align=baseline width=24 height=18 border=0> ");
sm_nephs = new bltpix("<img src=../../imagessm/sm_neph_lg.svg align=baseline width=16 height=12 border=0> ");
sm_neph_iii = new bltpix("<img src=../../imagessm/sm_neph_lg.svg align=baseline width=12 height=9 border=0> ");


sm_egfr = new bltpix("<img src=../../images/egfr_ii.png align=baseline width=22 height=16 border=0> ");
sm_egfrs = new bltpix("<img src=../../images/egfr_ii.png align=baseline width=16 height=12 border=0> ");

sm_pulm = new bltpix("<img src=../../imagessm/sm_pulm_lg.svg align=baseline width=24 height=18 border=0> ");
sm_pulms = new bltpix("<img src=../../imagessm/sm_pulm_lg.svg align=baseline width=16 height=12 border=0> ");
sm_pulm_iii = new bltpix("<img src=../../imagessm/sm_pulm_lg.svg align=baseline width=12 height=9 border=0> ");

sm_nutr = new bltpix("<img src=../../imagessm/sm_nutr_lg.svg align=baseline width=24 height=18 border=0> ");
sm_nutrs = new bltpix("<img src=../../imagessm/sm_nutr_lg.svg align=baseline width=16 height=12 border=0> ");
sm_nutr_iii = new bltpix("<img src=../../imagessm/sm_nutr_lg.svg align=baseline width=12 height=9 border=0> ");

sm_gast = new bltpix("<img src=../../imagessm/sm_gast_lg.svg align=baseline width=24 height=18 border=0> ");
sm_gasts = new bltpix("<img src=../../imagessm/sm_gast_lg.svg align=baseline width=16 height=12 border=0> ");
sm_gast_iii = new bltpix("<img src=../../imagessm/sm_gast_lg.svg align=baseline width=12 height=9 border=0> ");

sm_liver = new bltpix("<img src=../../imagessm/sm_hepa_lg.svg align=baseline width=24 height=18 border=0> ");
sm_livers = new bltpix("<img src=../../imagessm/sm_hepa_lg.svg align=baseline width=16 height=12 border=0> ");
sm_liver_iii = new bltpix("<img src=../../imagessm/sm_hepa_lg.svg align=baseline width=12 height=9 border=0> ");

sm_card = new bltpix("<img src=../../imagessm/sm_card_lg.svg align=baseline width=24 height=18 border=0> ");
sm_cards = new bltpix("<img src=../../imagessm/sm_card_lg.svg align=baseline width=16 height=12 border=0> ");
sm_card_iii = new bltpix("<img src=../../imagessm/sm_card_lg.svg align=baseline width=12 height=9 border=0> ");

sm_seps = new bltpix("<img src=../../imagessm/sm_seps_lg.svg align=baseline width=24 height=18 border=0> ");
sm_sepss = new bltpix("<img src=../../imagessm/sm_seps_lg.svg align=baseline width=16 height=12 border=0> ");
sm_seps_iii = new bltpix("<img src=../../imagessm/sm_seps_lg.svg align=baseline width=12 height=9 border=0> ");

sm_icu = new bltpix("<img src=../../imagessm/sm_icu_lg.svg align=baseline width=24 height=18 border=0> ");
sm_icus = new bltpix("<img src=../../imagessm/sm_icu_lg.svg align=baseline width=16 height=12 border=0> ");
sm_icu_iii = new bltpix("<img src=../../imagessm/sm_icu_lg.svg align=baseline width=12 height=9 border=0> ");

sm_ascvd = new bltpix("<img src=../../imagessm/sm_ascv_lg.svg align=baseline width=24 height=18 border=0> ");
sm_ascvds = new bltpix("<img src=../../imagessm/sm_ascv_lg.svg align=baseline width=16 height=12 border=0> ");
sm_ascvd_iii = new bltpix("<img src=../../imagessm/sm_ascv_lg.svg align=baseline width=12 height=9 border=0> ");

sm_obgy = new bltpix("<img src=../../imagessm/sm_obgy_lg.svg align=baseline width=24 height=18 border=0> ");
sm_obgys = new bltpix("<img src=../../imagessm/sm_obgy_lg.svg align=baseline width=16 height=12 border=0> ");
sm_obgy_iii = new bltpix("<img src=../../imagessm/sm_obgy_lg.svg align=baseline width=12 height=9 border=0> ");

sm_heme = new bltpix("<img src=../../imagessm/sm_hema_lg.svg align=baseline width=24 height=18 border=0> ");
sm_hemes = new bltpix("<img src=../../imagessm/sm_hema_lg.svg align=baseline width=16 height=12 border=0> ");
sm_heme_iii = new bltpix("<img src=../../imagessm/sm_hema_lg.svg align=baseline width=12 height=9 border=0> ");

sm_endo = new bltpix("<img src=../../imagessm/sm_endo_lg.svg align=baseline width=24 height=18 border=0> ");
sm_endos = new bltpix("<img src=../../imagessm/sm_endo_lg.svg align=baseline width=16 height=12 border=0> ");
sm_endo_iii = new bltpix("<img src=../../imagessm/sm_endo_lg.svg align=baseline width=12 height=9 border=0> ");

sm_infd = new bltpix("<img src=../../imagessm/sm_infx_lg.svg align=baseline width=24 height=18 border=0> ");
sm_infds = new bltpix("<img src=../../imagessm/sm_infx_lg.svg align=baseline width=16 height=12 border=0> ");
sm_infd_iii = new bltpix("<img src=../../imagessm/sm_infx_lg.svg align=baseline width=12 height=9 border=0> ");

sm_rheu = new bltpix("<img src=../../imagessm/sm_rheu_lg.svg align=baseline width=24 height=18 border=0> ");
sm_rheus = new bltpix("<img src=../../imagessm/sm_rheu_lg.svg align=baseline width=16 height=12 border=0> ");
sm_rheu_iii = new bltpix("<img src=../../imagessm/sm_rheu_lg.svg align=baseline width=12 height=9 border=0> ");

sm_toxi = new bltpix("<img src=../../imagessm/sm_toxi_lg.svg align=baseline width=24 height=18 border=0> ");
sm_toxis = new bltpix("<img src=../../imagessm/sm_toxi_lg.svg align=baseline width=16 height=12 border=0> ");
sm_toxi_iii = new bltpix("<img src=../../imagessm/sm_toxi_lg.svg align=baseline width=12 height=9 border=0> ");

sm_neur = new bltpix("<img src=../../imagessm/sm_neur_lg.svg align=baseline width=24 height=18 border=0> ");
sm_neurs = new bltpix("<img src=../../imagessm/sm_neur_lg.svg align=baseline width=16 height=12 border=0> ");
sm_neur_iii = new bltpix("<img src=../../imagessm/sm_neur_lg.svg align=baseline width=12 height=9 border=0> ");

sm_uro = new bltpix("<img src=../../imagessm/sm_urol_lg.svg align=baseline width=24 height=18 border=0> ");
sm_uros = new bltpix("<img src=../../imagessm/sm_urol_lg.svg align=baseline width=16 height=12 border=0> ");
sm_uro_iii = new bltpix("<img src=../../imagessm/sm_urol_lg.svg align=baseline width=12 height=9 border=0> ");

sm_surg = new bltpix("<img src=../../imagessm/sm_surg_lg.svg align=baseline width=24 height=18 border=0> ");
sm_surgs = new bltpix("<img src=../../imagessm/sm_surg_lg.svg align=baseline width=16 height=12 border=0> ");
sm_surg_iii = new bltpix("<img src=../../imagessm/sm_surg_lg.svg align=baseline width=12 height=9 border=0> ");

sm_orto = new bltpix("<img src=../../imagessm/sm_orto_lg.svg align=baseline width=24 height=18 border=0> ");
sm_ortos = new bltpix("<img src=../../imagessm/sm_orto_lg.svg align=baseline width=16 height=12 border=0> ");
sm_orto_iii = new bltpix("<img src=../../imagessm/sm_orto_lg.svg align=baseline width=12 height=9 border=0> ");

sm_psyc = new bltpix("<img src=../../imagessm/sm_psyc_lg.svg align=baseline width=24 height=18 border=0> ");
sm_psycs = new bltpix("<img src=../../imagessm/sm_psyc_lg.svg align=baseline width=16 height=12 border=0> ");
sm_psyc_iii = new bltpix("<img src=../../imagessm/sm_psyc_lg.svg align=baseline width=12 height=9 border=0> ");

sm_opht = new bltpix("<img src=../../imagessm/sm_opht_lg.svg align=baseline width=24 height=18 border=0> ");
sm_ophts = new bltpix("<img src=../../imagessm/sm_opht_lg.svg align=baseline width=16 height=12 border=0> ");
sm_opht_iii = new bltpix("<img src=../../imagessm/sm_opht_lg.svg align=baseline width=12 height=9 border=0> ");
///////////////


sm_gdaa_ii = new bltpix("<img src=../../images/gdaa_ii.png alt=Galen align=baseline width=22 height=16 border=0> ");
sm_gdaa_iis = new bltpix("<img src=../../images/gdaa_ii.png alt=Galen align=baseline width=16 height=12 border=0> ");

sm_synt_i = new bltpix("<img src=../../images/synt_ii.png align=baseline width=32 height=24 border=0> ");
sm_synt_ii = new bltpix("<img src=../../images/synt_ii.png align=baseline width=22 height=16 border=0> ");
sm_synt_iis = new bltpix("<img src=../../images/synt_ii.png align=baseline width=16 height=12 border=0> ")

medsp_iconlog = new bltpix("<img src=../../images/medsp_iconlog.gif align=baseline width=17 height=12 border=0> ");
sm_prntn = new bltpix("<img src=../../images/sm_prntn.gif alt="+vPrint+" align=baseline width=16 height=14 border=0> "); 
sm_prnt = new bltpix("<img src=../../images/sm_prnt.gif alt="+vPrint+" align=baseline width=12 height=13 border=0> "); 
sm_help = new bltpix("<img src=../../images/sm_help.png alt="+vHelp+" align=baseline width=13 height=13 border=0> "); 
sm_helpy = new bltpix("<img src=../../images/sm_helpy.gif alt="+vHelp+" align=baseline width=13 height=13 border=0> "); 
smm_hlp22 = new bltpix("<img src=../../images/smm_hlp20.png alt="+vHelp+" align=baseline width=22 height=16 border=0> "); 
sm_prod_ii = new bltpix("<img src=../../images/sm_prod_ii.png align=baseline width=22 height=16 border=0> "); 
sm_prod_iis = new bltpix("<img src=../../images/sm_prod_ii.png align=baseline width=16 height=12 border=0> "); 
sm_qlty_ii = new bltpix("<img src=../../images/sm_qlty_ii.png align=baseline width=22 height=16 border=0> "); 
sm_qlty_iis = new bltpix("<img src=../../images/sm_qlty_ii.png align=baseline width=16 height=12 border=0> "); 
sm_flges = new bltpix("<img src=../../images/sm_flgmx.gif align=baseline width=17 height=11 border=0> "); 
sm_flgen = new bltpix("<img src=../../images/sm_flgen.gif align=baseline width=17 height=11 border=0> "); 
sm_rhmbxsb = new bltpix("<img src=../../images/sm_rhmbxsb.gif align=baseline height=11 width=11 border=0> ");
ehnp_chrt = new bltpix("<img src=../../images/ehnp_chrt.gif align=baseline width=16 height=14 border=0> "); 
sm_rhs = new bltpix("<img src=../../imagesa/sm_rhmbxs.gif align=baseline height=10 width=10 border=0> ");
sm_br = new bltpix("<img src=../../images/mc_t.gif align=baseline width=8 height=8 border=0>"); 
sm_brs = new bltpix("<img src=../../images/mc_t.gif align=baseline width=2 height=2 border=0>"); 
sm_I = new bltpix("<img src=../../images/mc_t.gif align=baseline width=8 height=8 border=0>"); 
sm_rf = new bltpix("<img src=../../images/sm_rf.gif align=center width=7 height=7 border=0> ");
sm_rfs = new bltpix(" <img src=../../images/sm_rf.gif align=center valign=center width=6 height=6 vspace=4 hspace=1> ");
sm_rfrs = new bltpix(" <img src=../../images/sm_rfrs.png align=center valign=center width=6 height=6 vspace=4 hspace=1> ");
sm_wfaa_rfrs = new bltpix(" <img src=../../images/sm_wfaa_rfrs.png align=center valign=center width=6 height=6 vspace=4 hspace=1> ");

sm_neph = new bltpix("<img src=../../images/renal_ii.png align=baseline width=22 height=16 border=0> ");
sm_nephs = new bltpix("<img src=../../images/renal_ii.png align=baseline width=16 height=12 border=0> ");
sm_egfr = new bltpix("<img src=../../images/egfr_ii.png align=baseline width=22 height=16 border=0> ");
sm_egfrs = new bltpix("<img src=../../images/egfr_ii.png align=baseline width=16 height=12 border=0> ");
sm_pulm = new bltpix("<img src=../../images/pulmo_ii.png  align=baseline width=22 height=16 border=0> ");
sm_pulms = new bltpix("<img src=../../images/pulmo_ii.png  align=baseline width=16 height=12 border=0> ");
sm_nutr = new bltpix("<img src=../../images/nutri_ii.png align=baseline width=22 height=16 border=0> ");
sm_nutrs = new bltpix("<img src=../../images/nutri_ii.png align=baseline width=16 height=12 border=0> ");
sm_gast = new bltpix("<img src=../../images/gi_ii.png align=baseline width=22 height=16 border=0> ");
sm_gasts = new bltpix("<img src=../../images/gi_ii.png align=baseline width=16 height=12 border=0> ");
sm_liver = new bltpix("<img src=../../images/liver_ii.png align=baseline width=22 height=16 border=0> ");
sm_livers = new bltpix("<img src=../../images/liver_ii.png align=baseline width=16 height=12 border=0> ");
sm_card = new bltpix("<img src=../../images/cardio_ii.png align=baseline width=22 height=16 border=0> ");
sm_cards = new bltpix("<img src=../../images/cardio_ii.png align=baseline width=16 height=12 border=0> ");
sm_seps = new bltpix("<img src=../../images/wtaa_ii.png align=baseline width=22 height=16 border=0> ");
sm_sepss = new bltpix("<img src=../../images/wtaa_ii.png align=baseline width=16 height=12 border=0> ");
sm_icu = new bltpix("<img src=../../images/icu_ii.png align=baseline width=22 height=16 border=0> ");
sm_icus = new bltpix("<img src=../../images/icu_ii.png align=baseline width=16 height=12 border=0> ");

sm_ascvd = new bltpix("<img src=../../images/ascvd_ii.png align=baseline width=22 height=16 border=0> ");
sm_ascvds = new bltpix("<img src=../../images/ascvd_ii.png align=baseline width=16 height=12 border=0> ");

sm_obgy = new bltpix("<img src=../../images/obgyn_ii.png align=baseline width=22 height=16 border=0> ");
sm_obgys = new bltpix("<img src=../../images/obgyn_ii.png align=baseline width=16 height=12 border=0> ");
sm_heme = new bltpix("<img src=../../images/hemonc_ii.png align=baseline width=22 height=16 border=0> ");
sm_hemes = new bltpix("<img src=../../images/hemonc_ii.png align=baseline width=16 height=12 border=0> ");
sm_endo = new bltpix("<img src=../../images/endo_ii.png align=baseline width=22 height=16 border=0> ");
sm_endos = new bltpix("<img src=../../images/endo_ii.png align=baseline width=16 height=12 border=0> ");
sm_infd = new bltpix("<img src=../../images/id_ii.png align=baseline width=22 height=16 border=0> ");
sm_infds = new bltpix("<img src=../../images/id_ii.png align=baseline width=16 height=12 border=0> ");
sm_rheu = new bltpix("<img src=../../images/rheu_ii.png align=baseline width=22 height=16 border=0> ");
sm_rheus = new bltpix("<img src=../../images/rheu_ii.png align=baseline width=16 height=12 border=0> ");
sm_toxis = new bltpix("<img src=../../images/tox_ii.png align=baseline width=16 height=12 border=0> ");
sm_neur = new bltpix("<img src=../../images/neuro_ii.png align=baseline width=22 height=16 border=0> ");
sm_neurs = new bltpix("<img src=../../images/neuro_ii.png align=baseline width=16 height=12 border=0> ");
sm_uro = new bltpix("<img src=../../images/uro_ii.png align=baseline width=22 height=16 border=0> ");
sm_uros = new bltpix("<img src=../../images/uro_ii.png align=baseline width=16 height=12 border=0> ");
sm_surg = new bltpix("<img src=../../images/surg_ii.png align=baseline width=22 height=16 border=0> ");
sm_surgs = new bltpix("<img src=../../images/surg_ii.png align=baseline width=16 height=12 border=0> ");
sm_orto = new bltpix("<img src=../../images/orto_ii.png align=baseline width=22 height=16 border=0> ");
sm_ortos = new bltpix("<img src=../../images/orto_ii.png align=baseline width=16 height=12 border=0> ");
sm_psyc = new bltpix("<img src=../../images/psyc_ii.png align=baseline width=22 height=16 border=0> ");
sm_psycs = new bltpix("<img src=../../images/psyc_ii.png align=baseline width=16 height=12 border=0> ");
sm_opht = new bltpix("<img src=../../images/opht_ii.png align=baseline width=22 height=16 border=0> ");
sm_ophts = new bltpix("<img src=../../images/opht_ii.png align=baseline width=16 height=12 border=0> ");


sm_pers_ii = new bltpix("<img src=../../images/sm_pers_ii.png align=baseline width=22 height=16 border=0> ");
sm_pers_iis = new bltpix("<img src=../../images/sm_pers_ii.png align=baseline width=16 height=12 border=0> ");
sm_conv_i = new bltpix("<img src=../../images/conv_ii.png align=baseline width=33 height=24 border=0> ");
sm_conv_ii = new bltpix("<img src=../../images/conv_ii.png align=baseline width=22 height=16 border=0> ");
sm_conv_iis = new bltpix("<img src=../../images/conv_ii.png align=baseline width=16 height=12 border=0> ");
sm_labs_i = new bltpix("<img src=../../images/labs_ii.png align=baseline width=33 height=24 border=0> ");
sm_labs_ii = new bltpix("<img src=../../images/labs_ii.png align=baseline width=22 height=16 border=0> ");
sm_labs_iii = new bltpix("<img src=../../images/labss_ii.svg align=baseline width=12 height=9 border=0> ");

sm_tests_i = new bltpix("<img src=../../images/tests_ii.png align=baseline width=32 height=24 border=0> ");
sm_tests_ii = new bltpix("<img src=../../images/tests_ii.png align=baseline width=24 height=18 border=0> ");
sm_tests_iis = new bltpix("<img src=../../images/tests_ii.png align=baseline width=16 height=12 border=0> ");
sm_tests_iiws = new bltpix("<img src=../../images/tests_iiw.png align=baseline width=16 height=12 border=0> ");
sm_tests_iiw = new bltpix("<img src=../../images/tests_iiw.png align=baseline width=24 height=18 border=0> ");
sm_tests_iiw = new bltpix("<img src=../../images/tests_iiw.png align=baseline width=24 height=18 border=0> ");
sm_tests_iii = new bltpix("<img src=../../images/tests_ii.svg align=baseline width=12 height=9 border=0> ");

sm_labs_iis = new bltpix("<img src=../../images/labs_ii.png align=baseline width=16 height=12 border=0> ");
sm_comp_iis = new bltpix("<img src=../../images/sm_comp_ii.png align=baseline width=16 height=12 border=0> ");

// for tests
sm_tests1_iis = new bltpix("<img src=../../images/tests_ii.svg align=baseline width=16 height=12 border=0> ");
tst1_bltp = new bltpix("<img src=../../images/test1_bltp.svg align=baseline width=8 height=8> ");
tst2_bltp = new bltpix("<img src=../../images/test2_bltp.svg align=baseline width=8 height=8> "); //red

tsto_bltp = new bltpix("<img src=../../images/testo_bltp.svg align=baseline width=8 height=8> "); //orange
sm_rxs_iii = new bltpix("<img src=../../images/rxs_ii.svg align=baseline width=12 height=9 border=0> ");
sm_tst2_iii = new bltpix("<img src=../../images/tests2_ii.svg align=baseline width=12 height=9 border=0> ");


sm_ckmrk_iis = new bltpix("<img src=../../images/sm_ckmrk_ii.png align=baseline width=16 height=12 hspace=1 border=0>");
sm_ckmrk_iic = new bltpix("<img src=../../images/sm_ckmrk_ii_c.png align=baseline width=9 height=9 hspace=1 border=0>");
synt_arr_up_iis = new bltpix("<img src=../../images/synt_arr_up.png align=baseline width=16 height=12 hspace=1 border=0>");
synt_arr_up_iic = new bltpix("<img src=../../images/synt_arr_up_c.png align=baseline width=10 height=10 hspace=1 border=0>");
synt_arr_dn_iis = new bltpix("<img src=../../images/synt_arr_dn.png align=baseline width=16 height=12 hspace=1 border=0>");
synt_arr_dn_iic = new bltpix("<img src=../../images/synt_arr_dn_c.png align=baseline width=10 height=10 hspace=1 border=0>");

sm_blt_x = new bltpix("<img src=../../images/synt_x.png align=baseline width=16 height=12 border=0> ");
synt_pos_iis = new bltpix("<img src=../../images/synt_pos.png align=baseline width=16 height=12 hspace=1 border=0>");
synt_pos_iic = new bltpix("<img src=../../images/synt_pos_c.png align=baseline width=12 height=12 border=0>");
synt_neg_iis = new bltpix("<img src=../../images/synt_neg.png align=baseline width=16 height=12 hspace=1 border=0>");
synt_neg_iic = new bltpix("<img src=../../images/synt_neg_c.png align=baseline width=12 height=12 border=0>");
synt_posneg_iis = new bltpix("<img src=../../images/synt_posneg.png align=baseline width=14 height=15 border=0>");
synt_posneg_iic = new bltpix("<img src=../../images/synt_posneg_c.png align=baseline width=11 height=11 border=0>");
synt_qmrk_iis = new bltpix("<img src=../../images/synt_qmrk.png align=baseline width=16 height=12 hspace=1 border=0>");
synt_hlp = new bltpix("<img src=../../images/syn_hlp.png align=baseline width=16 height=12 hspace=1 border=0>"); 
idox_doc = new bltpix("<img src=../../images/idox_doc.png align=baseline width=16 height=16 border=0> ");
idox_chrt = new bltpix("<img src=../../images/idox_chrt.png align=baseline width=16 height=16 border=0> ");

synt_bltp = new bltpix("<img src=../../images/synt_bltp.png align=baseline width=8 height=8> ");
tst_bltp = new bltpix("<img src=../../images/test_bltp.png align=baseline width=8 height=8> ");

sy_up_bl = new bltpix("<img src=../../images/sy_up_bl.svg align=baseline width=10 height=10 border=0>");
sy_dn_bl = new bltpix("<img src=../../images/sy_dn_bl.svg align=baseline width=10 height=10 border=0>");

sm_carr_b = new bltpix("<img src=../../images/carr_bar2.gif align=baseline width=30 height=10 border=0> ");
sm_carr_p = new bltpix("<img src=../../images/carr_bar3.gif align=baseline width=30 height=10 border=0> ");

ehnp_cog = new bltpix("<img src=../../images/ehnp_cog.png align=baseline width=22 height=16 border=0> ");
ehnp_cogs = new bltpix("<img src=../../images/ehnp_cog.png align=baseline width=16 height=12 border=0> ");
ehnp_doc = new bltpix("<img src=../../images/ehnp_doc.png align=baseline width=15 height=14 border=0> ");
ehnp_pn = new bltpix("<img src=../../images/ehnp_pn.png align=baseline width=15 height=14 border=0> ");
ehnp_hnp = new bltpix("<img src=../../images/ehnp_hnp.png align=baseline width=15 height=14 border=0> ");

ehnp_doc3 = new bltpix("<img src=../../images/ehnp_doc3.png align=baseline width=15 height=14 border=0> ");
ehnp_chrt = new bltpix("<img src=../../images/ehnp_chrt.png align=baseline width=16 height=14 border=0> "); 
sm_prnt = new bltpix("<img src=../../images/sm_prnt.png align=baseline width=16 height=14 border=0> "); 
ehnp_arrbr = new bltpix("<img src=../../images/ehnp_arrbr.png align=baseline width=16 height=12 border=0> ");
sm_arrbr = new bltpix("<img src=../../images/sm_arrbr.png align=baseline width=16 height=12 border=0> ");
sm_arr_up_i = new bltpix("<img src=../../images/sm_arr_up_i.png align=baseline width=10 height=12 border=0>");
sm_arr_dwn_i = new bltpix("<img src=../../images/sm_arr_dwn_i.png align=baseline width=10 height=12 border=0>");
sm_arr_dn_i = new bltpix("<img src=../../images/sm_arr_dwn_i.png align=baseline width=10 height=12 border=0>");
sm_arr_horr_i = new bltpix("<img src=../../images/sm_arr_horr_i.png align=baseline width=12 height=12 border=0>");
sm_blt_gtoet_i = new bltpix("<img src=../../images/sm_blt_gtoet_i.png align=baseline width=10 height=10 border=0>");
sm_blt_gtoet_is = new bltpix("<img src=../../images/sm_blt_gtoet_i.png align=baseline width=9 height=9 border=0>");
sm_blt_ltoet_i = new bltpix("<img src=../../images/sm_blt_ltoet_i.png align=baseline width=10 height=10 border=0>");
sm_blt_ltoet_is = new bltpix("<img src=../../images/sm_blt_ltoet_i.png align=baseline width=9 height=9 border=0>");
sm_blt_pls_i = new bltpix("<img src=../../images/sm_blt_pls_i.png align=baseline width=18 height=18 border=0>");
sm_blt_pls_is = new bltpix("<img src=../../images/sm_blt_pls_i.png align=baseline width=12 height=12 border=0>");
sm_blt_mns_i = new bltpix("<img src=../../images/sm_blt_mns_i.png align=baseline width=18 height=18 border=0>");
sm_blt_mns_is = new bltpix("<img src=../../images/sm_blt_mns_i.png align=baseline width=12 height=12 border=0>");
sm_arr_apple_i = new bltpix("<img src=../../images/sm_arr_apple_i.png align=baseline width=32 height=32 border=0 hspace=1 vspace=1>");
mdxp_os = new bltpix("<img src=../../images/mdxp_os.gif align=center width=6 height=6 border=0 hspace=1>");
sm_scymdsR =  new bltpix("<img src=../../imagesios/sm_m_geocities.png valign=baseline align=right width=16 height=12 border=0>");
sm_blt_zircle_ = new bltpix("<img src=../../images/sm_blt_zircle.png align=baseline width=12 height=8 border=0>");
sm_blt_zquare_ = new bltpix("<img src=../../images/sm_blt_zquare.png align=baseline width=12 height=8 border=0>");



tbbaeae0_pn = new bltpix("<img src=../../images/pn_labs.png width=56 height=18 valign=top border=0>");
hjbaiai0_pn = new bltpix("<img src=../../images/pn_meds.png width=56 height=18 valign=top border=0>");
hrcaiao0_pn = new bltpix("<img src=../../images/pn_s.png width=56 height=18 valign=top border=0>");
kbbaiao0_pn = new bltpix("<img src=../../images/pn_o.png width=56 height=18 valign=top border=0>");
AP_pn = new bltpix("<img src=../../images/pn_ap_en.png width=56 height=18 valign=top border=0>");


function mdxp_o(name, name_a, bltpix, name_sp,  xtr,  pagelinx, spcmn_, nvcu_lw, 
				nvcu_hgh, units_cu, cf_cusi, units_si, limcu_lw, limcu_hgh,inputz,nmbr) {
	this.name = name;
	this.name_a = name_a;
	this.bltpix = bltpix ;
	this.name_sp = name_sp ;
	this.xtr = xtr ;
	this.pagelinx = pagelinx;
	this.spcmn_ = spcmn_;
	this.nvcu_lw = nvcu_lw;
	this.nvcu_hgh = nvcu_hgh;
	this.units_cu = units_cu;
	this.cf_cusi = cf_cusi;
	this.units_si = units_si;
	this.limcu_lw = limcu_lw;
	this.limcu_hgh = limcu_hgh;
	this.inputz = inputz;
	this.nmbr = nmbr;
	
	////////////////////////////////////////////////////////////////////////////////////
	this.metadata = [];
	this.meta = function (meta) {
		var copy = Object.assign({}, this);
		copy.metadata = meta;
		return copy;
	};
	this.syntDZP_ssPAT = syntDZP_ssPAT;
	//this.listAllWNames = listAllWNames;
	////////////////////////////////////////////////////////////////////////////////////

	this.SMRTRNLNX1 = SMRTRNLNX1;
	this.SMRTRNLNX0 = SMRTRNLNX0;
	this.SMRTLNXLAN = SMRTLNXLAN;
	this.SMRTRNLNXc = SMRTRNLNXc;

	this.DFRBWSPCMN = DFRBWSPCMN;
 	this.klaxpsid = klaxpsid;
	this.eqylapsidn = eqylapsidn;
	this.fdylapsidm = fdylapsidm;
	this.labylapsidn = labylapsidn;
	this.fdylapsidm2 = fdylapsidm2;
	this.fxitempghp = fxitempghp;
	this.fxitempgpn = fxitempgpn;
	this.fxitempgfs = fxitempgfs;
	this.smnxbtopnts = smnxbtopnts;

	this.cnttbc2 = cnttbc2;
	this.cnttbc3 = cnttbc3;
	this.cnttbc4 = cnttbc4;
	this.cnttbc4ga = cnttbc4ga;
	this.cnttbc4gp = cnttbc4gp;
	this.cnttbc4gpi = cnttbc4gpi;
	//this.smnxctmenu = smnxctmenu;
	//this.smnxbcmenu = smnxbcmenu;
	//this.smnxfpmenu = smnxfpmenu;
	this.tblcfx = tblcfx;
	
	this.SMRTRNLNX0_ch = SMRTRNLNX0_ch;
	this.SMRTRNLNX1_ch = SMRTRNLNX1_ch;
	this.cnttbc0_ch = cnttbc0_ch;
	this.cnttbc2_ch = cnttbc2_ch;
	this.chaa_bjct = chaa_bjct;
	this.shnpFXc = shnpFXc;
	this.shnpFXcp = shnpFXcp;
	this.shnpFXbp = shnpFXbp;
	this.shnpFXbpPAT = shnpFXbpPAT;
		this.shnpB2Clr = shnpB2Clr;
		this.ccCBhnpSLCT2 = ccCBhnpSLCT2;
		this.synTypeSLCT = synTypeSLCT;
		this.idoxPNfx = idoxPNfx;
		this.idoxPN_FX = idoxPN_FX;
		this.idoxHNP_FX = idoxHNP_FX;

	this.shnpFXbpIDOX = shnpFXbpIDOX;
	this.shnpFXpn = shnpFXpn;
	this.shnpTTLcp = shnpTTLcp;
	this.shnpDXLpn = shnpDXLpn;

	this.smnx_ndx_1 = smnx_ndx_1;
	
	this.smnxndx1 = smnxndx1;
	this.ndxgdmn = ndxgdmn;
	this.tblo = tblo;
	this.ntgsnl = ntgsnl;
 	this.ylapsid = ylapsid;
 	this.ylapsidc = ylapsidc;
	this.pixitem = pixitem;
	this.ylstp = ylstp;

	this.dfrbwmi_c = dfrbwmi_c;
	this.dfrbwOMO = dfrbwOMO;
	this.OMOColorFxB = OMOColorFxB;
	this.OMOColorFxY = OMOColorFxY;
	this.OMOColorFxG = OMOColorFxG;
	this.OMOColorFxA = OMOColorFxA;
	this.OMOColorFxON = OMOColorFxON;
	this.OMOColorFxOF = OMOColorFxOF;
	this.OMOColirFxOF = OMOColirFxOF;
	
	
	this.ccSlctClr_mc = ccSlctClr_mc;
	this.OMOColorFxOF_mc = OMOColorFxOF_mc;

	this.ccON_INPTpnls = ccON_INPTpnls;
	this.ccOF_INPTpnls = ccOF_INPTpnls;
	this.mouseOber = mouseOber;
	this.mouseOwt = mouseOwt;
	this.ccSlctClr = ccSlctClr;
	this.ccAddtImgVRB = ccAddtImgVRB;
	this.deq_el_cc = deq_el_cc;
	this.ccAddsmMDCNT = ccAddsmMDCNT;
	this.ccAddsmMDCNTX = ccAddsmMDCNTX;
	this.ccCBeqtnSLCTN = ccCBeqtnSLCTN;
	this.ccCBeqtnSLCT = ccCBeqtnSLCT;
	this.ccCBeqtnSLCT1 = ccCBeqtnSLCT1;
	this.ccCBeqtnSLCT2 = ccCBeqtnSLCT2;
	this.ccCBeqtnSLCT3 = ccCBeqtnSLCT3;
	this.ccCNeqtnSLCT = ccCNeqtnSLCT;
	this.ccCNeqtnSLCT1 = ccCNeqtnSLCT1;
	this.ccCNeqtnSLCT2 = ccCNeqtnSLCT2;
	this.ccCNeqtnSLCT3 = ccCNeqtnSLCT3;

	this.ccONslct_Eqs = ccONslct_Eqs;
	this.ccOFslct_Eqs = ccOFslct_Eqs;
	this.TblInOtA_c = TblInOtA_c;
	this.TblInOtA_fp = TblInOtA_fp;
	this.TblInOtA_mc = TblInOtA_mc;
	this.TblInOtA_cON = TblInOtA_cON;
	this.TblInOtA_cOF = TblInOtA_cOF;
	this.ccOF_otptsT = ccOF_otptsT;
	this.ccON_otptsT = ccON_otptsT;
	this.tgglEQ = tgglEQ;
	this.dfrbwbc_c = dfrbwbc_c;

	this.dfrbwmi_mc = dfrbwmi_mc;
	this.dfrbwbc_mc = dfrbwbc_mc;

	this.dfrbwmi = dfrbwmi;
	this.dfrbwbc = dfrbwbc;
	this.dfrbwbcZ = dfrbwbcZ;
	this.DFRBWBLT = DFRBWBLT;
	this.ntinone = ntinone;
	this.ntintwo = ntintwo;
	this.bjctvals = bjctvals;
	this.dfrbpal = dfrbpal;
	this.dfrbpal2 = dfrbpal2;
	this.dfrbpalPN = dfrbpalPN;
	this.dfrbpalS = dfrbpalS;
	this.dfrbpalPX = dfrbpalPX;
	this.dfrbpal_m = dfrbpal_m;
	this.TblInOtA = TblInOtA;
	this.TblInOtB = TblInOtB;
	this.TblInOtF = TblInOtF;
	this.deq_el = deq_el;
	this.dfrbucp = dfrbucp;
	this.dfrbucpo = dfrbucpo;
	this.apnrmlvls = apnrmlvls;
	this.dfrbucpL = dfrbucpL;
	this.dfrbucpX = dfrbucpX;
	this.dfrbucpoX = dfrbucpoX;

	this.dfrbwmi_m = dfrbwmi_m;
	this.dfrbwbc_m = dfrbwbc_m;
	this.dfrbwbcZ_m = dfrbwbcZ_m;
	this.ntintwo_m = ntintwo_m;
	this.cnttbc2_m = cnttbc2_m;
	this.cnttbc4_m = cnttbc4_m;
	this.TblInOtA_m = TblInOtA_m;
	this.cnttbc4_m_rev = cnttbc4_m_rev;
	this.cnttbc5_m = cnttbc5_m;
		this.cnttbc5_idox = cnttbc5_idox;
		this.cnttbc5_idox_app = cnttbc5_idox_app;
	this.cnttbc6_m = cnttbc6_m;
	this.cnttbc9_m = cnttbc9_m;
	this.cnttbc9_m2 = cnttbc9_m2;
 	this.cnttbc9_m_rev = cnttbc9_m_rev;
	this.ylapsidc_m = ylapsidc_m;
	this.dfrbucpX_m = dfrbucpX_m;
	this.dfrbucpoX_m = dfrbucpoX_m;
	this.cnttbcIHNP1_m = cnttbcIHNP1_m;
	this.cnttbcIHNP2_m = cnttbcIHNP2_m;
	this.deq_el_m = deq_el_m;
	this.shnpFXc_m = shnpFXc_m;
	this.shnpFXc_mS = shnpFXc_mS;
	this.shnpFXc_idox = shnpFXc_idox;

	this.ehnposbjct = ehnposbjct;
	this.cnttbc2_ch_m = cnttbc2_ch_m;

}



///////////////////////////////////////////////////////fx mc st//////////////////////////////
function deq_el() {
var vaddtimg_s = this.pagelinx;
var vaddtimg_m = eval("vaddtimg" + vaddtimg_s);
var varnmbrel = i + 1;
var deqel = smTab1+"<tr valign=top>";
deqel += "<td width=18%><hr><font class=t24b>" + varnmbrel + "</td>";
deqel += "<td width=82%><hr>";
document.write(deqel);
	if (this.name_a == "") {var varAbbrvNm = this.name; var varAbbrvNm1 = "";} 
	else {varAbbrvNm = this.name_a; varAbbrvNm1 = " (" + this.name_a + ")"}
vmcepimg1 = "<table width=98% border=0 valign=top align=center cellspacing=1 cellpadding=1>";
vmcepimg1 += "<tr><td height=18 bgcolor=#AFCADD><font class=h9b><b><font color=#333333>&#160;";
vmcepimg1 += this.name +  varAbbrvNm1 + "</td><tr></table>";
document.write(vmcepimg1);
document.write("<font class=t8bb><font color=#778899>&#160;&#160;"+vEquation+": ");
document.write(smTab0+"<tr><td><img src=../smnx"+this.pagelinx.substring(0,2)+"/images/"+this.pagelinx+"_"+ven+".gif></td></tr></table>");
document.write(smTab0+"<tr><td><font class=a8><font color=#003366>" + vaddtimg_m + "</td></tr></table>");
document.write("</td></tr></table><br>");
}

//////////////////////////////////////////////////////////////////////////// iPHONE
function deq_el_m() {
var vaddtimg_s = this.pagelinx;
var vaddtimg_m = eval("vaddtimg" + vaddtimg_s);
var varnmbrel = i + 1;
var deq_el_m = smTab1+"<tr valign=top>";
deq_el_m += "<td width=2%></td><td width=96%><hr>";
document.write(deq_el_m);
	if (this.name_a == "") {var varAbbrvNm = this.name; var varAbbrvNm1 = "";} 
	else {varAbbrvNm = this.name_a; varAbbrvNm1 = " (" + this.name_a + ")"}

/////////*****/////*****///////no equation name wrapper title for LIVERCALC, only equation
///////document.write("<div class=equation-wrapper><ul><h1>" + this.name + "</h1></ul></div>");
document.write("<font class=h13pb><font color=#556677>&#160;&#160;"+vEquation+": ");
document.write(smTab0+"<tr><td><img src=../smnx"+this.pagelinx.substring(0,2)+"/images/"+this.pagelinx+"_"+ven+".png></td></tr></table>");
document.write(smTab0+"<tr><td width=4%></td><td width=96%><font class=h10b><font color=#003366>" + vaddtimg_m + "</td></tr></table>");
document.write("</td><td width=2%></td></tr></table><br>");
}







function bjctvals(){
var bjctvals;
if (this.cf_cusi != "" || this.units_si != "") {
var limsi_lw = roundtd( (this.limcu_lw*this.cf_cusi),1);
var limsi_hgh = roundtd( (this.limcu_hgh*this.cf_cusi),1);
var vwwequal = " = ";
var vwritesep = " - ";
var vwritecarret = "\n";
}else{limsi_lw =""; limsi_hgh=""; vwwequal = ""; vwritesep = ""; vwritecarret ="";}
bjctvals  = this.name + " " +vmustbea+vNumber+" \n\n" ;
bjctvals += this.units_cu + " = " + this.limcu_lw + " - " + this.limcu_hgh + "\n" ;  
bjctvals += this.units_si  + vwwequal + limsi_lw + vwritesep + limsi_hgh + vwritecarret ;  
bjctvals += "\n\n   " + varThnkY; 
return bjctvals;
}

function DFRBWSPCMN(){
	if (this.spcmn_ == "") {var varSpcmn = ""; } else {varSpcmn = " (" + this.spcmn_ + ") ";}
	return varSpcmn;
}
	
/// synt_bltp for Synt.  mc_bltp for MC
function DFRBWBLT(){
	if (this.spcmn_ != "") {varSpcmn = " (" + this.spcmn_ + ") ";}else{varSpcmn = "";}
	if (this.name_a != "") {varAbbbrvn = " (" + this.name_a + ") ";}else{varAbbbrvn = "";}
	if (this.cf_cusi != "") {varCFaactr = " (" + this.cf_cusi + ") ";}else{varCFaactr = "";}
	if (this.xtr.substring(0,1) == "o") {varAddEqtn = "\n "+ vEquation+": "+this.name_sp+"\"> " ;}else{varAddEqtn = "\"> ";}
	if (this.xtr.substring(0,1) != "m" && this.xtr.substring(1,2) != "i") { 
		var vAltBlteb16 =  "<img src=../../images/mc_bltp.png align=baseline width=8 height=8 border=0";
		vAltBlteb16 +=  " alt=\""+this.name+varAbbbrvn+varSpcmn+"   \n "+vnormalvalues+": "+this.nvcu_lw+" - "+this.nvcu_hgh+" "+this.units_cu + varAddEqtn; 
	}else{
	var vAltBlteb16 = this.bltpix.blt;
	}
	return vAltBlteb16;
}


var tabap1  =  " <table width=100% border=0 valign=top cellspacing=0 cellpadding=0 bgcolor=#D6D9DD>";
tabap1 +=  trE + "<td><table width=100% border=0 valign=top cellspacing=1 cellpadding=1 bgcolor=#E9E9E9>";
tabap1 +=  " <tr><td width=36%><font class=t8bb>"; 
var tabap2  =  "</font></td><td width=64%><font class=t8bb>";

var wtabap0  =  " <table width=100% border=0 valign=top cellspacing=0 cellpadding=0 bgcolor=#CCCCCC>";
wtabap0 +=  trE+"<td><table width=100% border=0	 valign=top cellspacing=1 cellpadding=1 bgcolor=#F3F3F3><tr>";

/////////////////////////////////////////////////////////////////////////////////#ADD8E6
var smmnhvrGRAY = "<tr bgcolor=EEEEEE id= valign=top onmouseover=style.backgroundColor=\'99CCFF\' onmouseout=style.backgroundColor=\'EEEEEE\'>";

	
function OMOColorFxB() {
	document.getElementById(this.pagelinx + "_tr").style.backgroundColor= ClrBL;
}
function OMOColorFxY() {
	document.getElementById(this.pagelinx + "_tr").style.backgroundColor= ClrBL;
}
function OMOColorFxG() {
	document.getElementById(this.pagelinx + "_tr").style.backgroundColor='#F3F3F3';
}
function OMOColorFxA() {
	document.getElementById(this.pagelinx + "_tr").style.backgroundColor='#E3E9EE';
}


function ccON_INPTpnls() {
	document.getElementById(this.pagelinx + "_div").style.display ='block' ; 
}
function ccOF_INPTpnls() {
	document.getElementById(this.pagelinx + "_div").style.display ='none' ; 
}


function TblInOtA_cON() {
	document.getElementById(this.pagelinx + "_divIO").style.display ='block' ; 
}
function TblInOtA_cOF() {
	document.getElementById(this.pagelinx + "_divIO").style.display ='none' ; 
}


function ccOF_otptsT() {
	document.getElementById(this.pagelinx+"T").checked = false; 
	document.getElementById(this.pagelinx + "_T").style.backgroundColor = "#dddddd"; 
	document.getElementById(this.pagelinx + "_Tdiv").style.display ='none' ; 
	document.getElementById(this.pagelinx + "_TdivBR").style.display ='none' ; 
}

function ccON_otptsT() {
	document.getElementById(this.pagelinx+"T").checked = true; 
	document.getElementById(this.pagelinx + "_T").style.backgroundColor = ClrAzL; 
	document.getElementById(this.pagelinx + "_Tdiv").style.display ='block' ; 
	document.getElementById(this.pagelinx + "_TdivBR").style.display ='block' ; 
}



/////ClrAzS = #99CCFF
function ccONslct_Eqs() {
			////document.ccchckbxfrm.pwfgd230.checked = true;
	document.getElementById(this.pagelinx).checked = true; 
	document.getElementById(this.pagelinx + "_").style.backgroundColor = ClrAzL; 
	document.getElementById(this.pagelinx + "_div").style.display ='block' ; 
	document.getElementById(this.pagelinx + "_divd").style.display ='block' ; 
	document.getElementById(this.pagelinx + "_divIO").style.display ='block' ; 
}

function ccOFslct_Eqs() {
	document.getElementById(this.pagelinx).checked = false; 
	document.getElementById(this.pagelinx + "_").style.backgroundColor = "#eeeeee"; 
	document.getElementById(this.pagelinx + "_").style.color = "#000000";
	document.getElementById(this.pagelinx + "_div").style.display ='none' ; 
	document.getElementById(this.pagelinx + "_divd").style.display ='none' ; 
	document.getElementById(this.pagelinx + "_divIO").style.display ='none' ; 
}




function dfrbwOMO() {
var chkths = this.pagelinx; 
/////document.getElementById('phqjc133_R0C1').bgColor =ClrF6;
var smmnhvrGRAY = "<tr id=chkths bgcolor=EEEEEE valign=top onmouseover=style.backgroundColor=\'99CCFF\' onmouseout=style.backgroundColor=\'EEEEEE\'>";
}

function mouseOber(arrayinputz) {
////	if (selectedTableRows.length == 0) {
		////var = eval(this.pagelinx + "_Inpts");  
		array_Inpts = arrayinputz;
		////array_Inpts = this.pagelinx + "_Inpts";
 		this.array_Inpts[0].OMOColorFxON();
		for (var iet = 1; iet < array_Inpts.length; iet++) {
 			this.array_Inpts[iet].OMOColorFxON();
		}
////	}else{
////	}

}

function mouseOwt(arrayinputz) {
////	if (selectedTableRows.length == 0) {
		array_Inpts = arrayinputz;
 		this.array_Inpts[0].OMOColorFxOF();
		for (var iet = 1; iet < array_Inpts.length; iet++) {
 			this.array_Inpts[iet].OMOColirFxOF();
		}
////	}else{
////	}
}





function OMOColorFxON() {
document.getElementById(this.pagelinx + "_tdp1").style.backgroundColor = ClrBL;
document.getElementById(this.pagelinx + "_tr").style.backgroundColor = ClrBL;
document.getElementById(this.pagelinx + "_trt").style.backgroundColor = ClrBL;
}
function OMOColorFxOF() {
document.getElementById(this.pagelinx + "_tdp1").style.backgroundColor = '#E3E9EE';
document.getElementById(this.pagelinx + "_tr").style.backgroundColor = '#E3E9EE';
document.getElementById(this.pagelinx + "_trt").style.backgroundColor = '#F6F6F6';
}
function OMOColirFxOF() {
document.getElementById(this.pagelinx + "_tdp1").style.backgroundColor = '#F0F0F0';
document.getElementById(this.pagelinx + "_tr").style.backgroundColor = '#F0F0F0';
document.getElementById(this.pagelinx + "_trt").style.backgroundColor = '#F6F6F6';
}


///for dfrbwbc_mc
function OMOColorFxOF_mc() {
document.getElementById(this.pagelinx + "_tdp1").style.backgroundColor = '#d3d9df';
document.getElementById(this.pagelinx + "_tr").style.backgroundColor = '#d3d9df';
document.getElementById(this.pagelinx + "_trt").style.backgroundColor = '#d3d9df';
}



var selectedTableRows = [];
var selectedTableRowsO = [];

function ccSlctClr(arrayOuptz, arrayInptz){
	
	if (selectedTableRows.length != 0) {
					// deselect
			
			if (selectedTableRows == arrayOuptz) {
				for (var iet = 0; iet < arrayOuptz.length; iet++) {
 					arrayOuptz[iet].OMOColorFxOF();
				}
				for (var iet = 0; iet < arrayInptz.length; iet++) {
 					arrayInptz[iet].OMOColirFxOF();
				}

				selectedTableRows = [];

			} else {
		
				for (var iet = 0; iet < selectedTableRowsO.length; iet++) {
 					selectedTableRowsO[iet].OMOColirFxOF();
				}
				for (var iet = 0; iet < selectedTableRows.length; iet++) {
 					selectedTableRows[iet].OMOColorFxOF();
				}
			
				selectedTableRows = arrayOuptz;
				selectedTableRowsO = arrayInptz;

				for (var iet = 0; iet < arrayOuptz.length; iet++) {
 				arrayOuptz[iet].OMOColorFxON();
				}
				for (var iet = 0; iet < arrayInptz.length; iet++) {
 				arrayInptz[iet].OMOColorFxON();
				}

			} 

	} else {

			selectedTableRows = arrayOuptz;
			selectedTableRowsO = arrayInptz;
				for (var iet = 0; iet < arrayOuptz.length; iet++) {
 					arrayOuptz[iet].OMOColorFxON();
				}
				for (var iet = 0; iet < arrayInptz.length; iet++) {
 					arrayInptz[iet].OMOColorFxON();
				}
	}


}


function ccSlctClr2(arrayinputz){
	var s=document.getElementById('slot');

	if(s.bgColor.match("white")){
		s.bgColor="green";
	}else{
    s.bgColor="white";
	}
}


function ccSlctClr_mc(arrayOuptz, arrayInptz){
	
	if (selectedTableRows.length != 0) {
					// deselect
			
			if (selectedTableRows == arrayOuptz) {
				for (var iet = 0; iet < arrayOuptz.length; iet++) {
 					arrayOuptz[iet].OMOColorFxOF_mc();
				}
				for (var iet = 0; iet < arrayInptz.length; iet++) {
 					arrayInptz[iet].OMOColirFxOF();
				}

				selectedTableRows = [];

			} else {
		
				for (var iet = 0; iet < selectedTableRowsO.length; iet++) {
 					selectedTableRowsO[iet].OMOColirFxOF();
				}
				for (var iet = 0; iet < selectedTableRows.length; iet++) {
 					selectedTableRows[iet].OMOColorFxOF_mc();
				}
			
				selectedTableRows = arrayOuptz;
				selectedTableRowsO = arrayInptz;

				for (var iet = 0; iet < arrayOuptz.length; iet++) {
 				arrayOuptz[iet].OMOColorFxON();
				}
				for (var iet = 0; iet < arrayInptz.length; iet++) {
 				arrayInptz[iet].OMOColorFxON();
				}

			} 

	} else {

			selectedTableRows = arrayOuptz;
			selectedTableRowsO = arrayInptz;
				for (var iet = 0; iet < arrayOuptz.length; iet++) {
 					arrayOuptz[iet].OMOColorFxON();
				}
				for (var iet = 0; iet < arrayInptz.length; iet++) {
 					arrayInptz[iet].OMOColorFxON();
				}
	}


}


function ccAddtImgVRB() {
	var vaddtimgEQTN = eval("vaddtimg"+this.pagelinx); 
	var arrEQTNS_IOpts = eval(this.pagelinx+"_IOpts"); 
	if (this.name_a == "") {var vrname_a = "";}	else {vrname_a = "(" + this.name_a + ")";}

document.write("<div id="+this.pagelinx+"_divd><table width=100% class=smnxtbbrdB><tr><td width=2%></td><td width=96%><font class=h10b><b>"+this.bltpix.blt+" "+this.name+" " +vrname_a+"</b></font></td><td width=2%></td></tr>");
document.write("<tr><td width=2%></td><td width=96%><font class=h10b>"+vaddtimgEQTN+"</font><br></td><td width=2%></td></tr>");
document.write("<tr><td width=2%></td><td width=96%><font class=h9b>");
///	for (var i = 0; i < arrEQTNS_IOpts.length; i++) {
///	this.arrEQTNS_IOpts[i].ntintwo();
///	}	
document.write("</font></td><td width=2%></td></tr>  <tr><td colspan=3></td></tr></table><br></div>");
document.getElementById(this.pagelinx+"_divd").style.display = "none";

}



function tgglEQ(){
pglnx = this.pagelinx+"_eq";
	var tgglEQon = document.getElementById(pglnx);
            tgglEQon.style.display = (tgglEQon.style.display == "none") ? "block" : "none";
}



function deq_el_cc() {
	var vaddtimgEQTN = eval("vaddtimg"+this.pagelinx); 
	var mcep_REF = eval(this.pagelinx+"_ref"); 
	if (this.name_a == "") {var vrname_a = "";}	else {vrname_a = "(" + this.name_a + ")";}

	if (vaddtimgEQTN != "") {
		var deq_el_cc =    "<div id="+this.pagelinx+"_divd>"; 
		deq_el_cc +=  " <TABLE WIDTH=100% align=left border=0 valign=top cellspacing=1 cellpadding=1 class='table-curved1'>";
		deq_el_cc +=  " <tr valign=top><td width=1%></td><td width=98%><font class=t8bb>";
		deq_el_cc +=  " <table width=100% border=0 valign=top cellspacing=1 cellpadding=1 valign=top bgcolor=#AFCADD>";
		deq_el_cc +=  " <tr valign=top><td><font class=h10b><b>"+this.bltpix.blt+" "+this.name+"</b> " +vrname_a+"</font></td></tr></table>";
		deq_el_cc +=   smTab0+"<tr><td width=1%></td><td width=98%><img src=../smnx"+this.pagelinx.substring(0,2)+"/images/"+this.pagelinx+"_"+ven+".png></td><td width=1%></td></tr>";
		deq_el_cc +=  " <tr><td width=1%></td><td width=98%><font class=h10b><font color=#003366>" + vaddtimgEQTN + "</td><td width=1%></td></tr></table>";
		deq_el_cc +=   smTab0+"<tr><td colspan=3 height=12></td></tr><tr height=1><td width=1%></td> <td width=98% bgcolor=888888 height=1></td><td width=1%></td></tr><tr><td colspan=3 height=6></td></tr>";
		deq_el_cc +=  " <tr><td width=1%></td><td width=98%><font class=h9b><font color=#000000>" + mcep_REF + "</td><td width=1%></td></tr></table>";
		deq_el_cc +=  " </td><td width=1%></td></tr><tr><td colspan=3></td></tr></table><br> </div>";
		document.write(deq_el_cc);
		document.getElementById(this.pagelinx+"_divd").style.display = "none";

		document.write("<div id="+this.pagelinx+"_EdivBR>");
		document.write("<table width=100%><tr><td height=12></td></tr></table>");
		document.write("</div>");
		document.getElementById(this.pagelinx+"_EdivBR").style.display = "none";

	} else{
		document.write("<div id="+this.pagelinx+"_divd>"+vaddtimgEQTN+"</div>");
		document.getElementById(this.pagelinx+"_divd").style.display = "none";
		document.write("<div id="+this.pagelinx+"_EdivBR></div>");
		document.getElementById(this.pagelinx+"_EdivBR").style.display = "none";
	}

}




function ccAddsmMDCNT() 
{
	var vaddtsmMDCNT = eval("smMDCNT_"+this.pagelinx+"()");
		vaddtsmMDCNT;
	document.getElementById(this.pagelinx+"_Tdiv").style.display = "none";
	document.write("<div id="+this.pagelinx+"_TdivBR>");
	document.write("<table><tr><td width=95%></td><td width=5% class=handcursor onclick=deselectSelectedFEST('"+this.pagelinx+"')>"+sm_blt_x.blt+"</td></tr></table>");	
	document.write("<table width=100%><tr><td height=8></td></tr></table>");
	document.write("</div>");
	document.getElementById(this.pagelinx+"_TdivBR").style.display = "none";
}



function ccAddsmMDCNTX() {
document.write("<div id="+this.pagelinx+"_Tdiv>");
document.write("</div>");
document.getElementById(this.pagelinx+"_Tdiv").style.display = "none";
}


function ccCBeqtnSLCT(){
document.write("<tr id="+this.pagelinx+"_P width=100% bgcolor=F9F9F9 valign=top ><td onmouseover=style.backgroundColor=\'007CFF\' onmouseout=style.backgroundColor=\'F9F9F9\'> <font class=H9_c><label class=mdm id="+this.pagelinx+"_>");
document.write("<input id="+this.pagelinx+" type=checkbox name="+this.pagelinx+" onchange=\"statecheck(\'"+this.pagelinx+"_\'),statecheckDP(\'"+this.pagelinx+"_\');\" /> " + this.name_a +"</label></td> <td></td></tr>");
document.write("<tr id="+this.pagelinx+"_P2><td colspan=2 height=2></td></tr>"); ///
}
function ccCBeqtnSLCT2(){
document.write("<tr id="+this.pagelinx+"_P width=100% bgcolor=F9F9F9 valign=top onmouseover=style.backgroundColor=\'007CFF\' onmouseout=style.backgroundColor=\'F9F9F9\'><td> <font class=H9_c><label class=mdm id="+this.pagelinx+"_>");
document.write("<input id="+this.pagelinx+" type=checkbox name="+this.pagelinx+" onchange=\"statecheck(\'"+this.pagelinx+"_\');\" /> " + this.name_a +"</label></td> ");
document.write("<td><label class=mdmT  id="+this.pagelinx+"_T>");
document.write("<input id="+this.pagelinx+"T type=checkbox name="+this.pagelinx+"T onchange=\"statecheckT(\'"+this.pagelinx+"_T\');\" /></label></td></tr>");
document.write("<tr id="+this.pagelinx+"_P2><td colspan=2 height=2></td></tr>"); ///
}
function ccCBeqtnSLCT3(){
document.write("<tr id="+this.pagelinx+"_P width=100% bgcolor=F9F9F9 valign=top onmouseover=style.backgroundColor=\'007CFF\' onmouseout=style.backgroundColor=\'F9F9F9\'><td> <font class=H9_c><label class=mdm id="+this.pagelinx+"_>");
document.write("<input id="+this.pagelinx+" type=checkbox name="+this.pagelinx+" onchange=\"statecheck(\'"+this.pagelinx+"_\'),statecheckDP(\'"+this.pagelinx+"_\');\" /> " + this.name_a +"</label></td> ");
document.write("<td><label class=mdmT  id="+this.pagelinx+"_T>");
document.write("<input id="+this.pagelinx+"T type=checkbox name="+this.pagelinx+"T onchange=\"statecheckT(\'"+this.pagelinx+"_T\');\" /></label></td></tr>");
document.write("<tr id="+this.pagelinx+"_P2><td colspan=2 height=2></td></tr>"); ///
}
///only tbl eg sep shock
function ccCBeqtnSLCT1(){
document.write("<tr id="+this.pagelinx+"_P width=100% bgcolor=F9F9F9 valign=top onmouseover=style.backgroundColor=\'007CFF\' onmouseout=style.backgroundColor=\'F9F9F9\'><td valign=center> <font class=H9_c><label class=mdm id="+this.pagelinx+"_>");
document.write("<input id="+this.pagelinx+" type=hidden name="+this.pagelinx+" onchange=\"statecheck(\'"+this.pagelinx+"_\');\" /> <img src=../../images/mc_t.gif align=center width=16 height=13 vspace=3 hspace=2 border=0> "  +this.name_a +"</label></td> ");
document.write("<td><label class=mdmT  id="+this.pagelinx+"_T>");
document.write("<input id="+this.pagelinx+"T type=checkbox name="+this.pagelinx+"T onchange=\"statecheckT(\'"+this.pagelinx+"_T\');\" /></label></td></tr>");
document.write("<tr id="+this.pagelinx+"_P2><td colspan=2 height=2></td></tr>"); ///
}



////////////name N
function ccCNeqtnSLCT(){
document.write("<tr id="+this.pagelinx+"_P width=100% bgcolor=F9F9F9 valign=top ><td onmouseover=style.backgroundColor=\'007CFF\' onmouseout=style.backgroundColor=\'F9F9F9\'> <font class=H9_c><label class=mdn id="+this.pagelinx+"_>");
document.write("<input id="+this.pagelinx+" type=checkbox name="+this.pagelinx+" onchange=\"statecheck(\'"+this.pagelinx+"_\'),statecheckDP(\'"+this.pagelinx+"_\');\" /> " + this.name +"</label></td> <td></td></tr>");
document.write("<tr id="+this.pagelinx+"_P2><td colspan=2 height=2></td></tr>"); ///
}
function ccCNeqtnSLCT1(){
document.write("<tr id="+this.pagelinx+"_P width=100% bgcolor=F9F9F9 valign=top onmouseover=style.backgroundColor=\'007CFF\' onmouseout=style.backgroundColor=\'F9F9F9\'><td valign=center> <font class=H9_c><label class=mdn id="+this.pagelinx+"_>");
document.write("<input id="+this.pagelinx+" type=hidden name="+this.pagelinx+" onchange=\"statecheck(\'"+this.pagelinx+"_\');\" /> <img src=../../images/mc_t.gif align=center width=16 height=13 vspace=3 hspace=2 border=0> "  +this.name +"</label></td> ");
document.write("<td><label class=mdmT  id="+this.pagelinx+"_T>");
document.write("<input id="+this.pagelinx+"T type=checkbox name="+this.pagelinx+"T onchange=\"statecheckT(\'"+this.pagelinx+"_T\');\" /></label></td></tr>");
document.write("<tr id="+this.pagelinx+"_P2><td colspan=2 height=2></td></tr>"); ///
}
function ccCNeqtnSLCT2(){
document.write("<tr id="+this.pagelinx+"_P width=100% bgcolor=F9F9F9 valign=top onmouseover=style.backgroundColor=\'007CFF\' onmouseout=style.backgroundColor=\'F9F9F9\'><td> <font class=H9_c><label class=mdn id="+this.pagelinx+"_>");
document.write("<input id="+this.pagelinx+" type=checkbox name="+this.pagelinx+" onchange=\"statecheck(\'"+this.pagelinx+"_\');\" /> " + this.name +"</label></td> ");
document.write("<td><label class=mdmT  id="+this.pagelinx+"_T>");
document.write("<input id="+this.pagelinx+"T type=checkbox name="+this.pagelinx+"T onchange=\"statecheckT(\'"+this.pagelinx+"_T\');\" /></label></td></tr>");
document.write("<tr id="+this.pagelinx+"_P2><td colspan=2 height=2></td></tr>"); ///
}
function ccCNeqtnSLCT3(){
document.write("<tr id="+this.pagelinx+"_P width=100% bgcolor=F9F9F9 valign=top onmouseover=style.backgroundColor=\'007CFF\' onmouseout=style.backgroundColor=\'F9F9F9\'><td> <font class=H9_c><label class=mdn id="+this.pagelinx+"_>");
document.write("<input id="+this.pagelinx+" type=checkbox name="+this.pagelinx+" onchange=\"statecheck(\'"+this.pagelinx+"_\'),statecheckDP(\'"+this.pagelinx+"_\');\" /> " + this.name +"</label></td> ");
document.write("<td><label class=mdmT  id="+this.pagelinx+"_T>");
document.write("<input id="+this.pagelinx+"T type=checkbox name="+this.pagelinx+"T onchange=\"statecheckT(\'"+this.pagelinx+"_T\');\" /></label></td></tr>");
document.write("<tr id="+this.pagelinx+"_P2><td colspan=2 height=2></td></tr>"); ///
}

//// for SYNT   OK

function ccCBhnpSLCT2_PAT(){
var vccCBhnpSLCT2 = "<tr id="+this.pagelinx+"_P width=100% bgcolor=F9F9F9 valign=top onmouseover=style.backgroundColor=\'007CFF\' onmouseout=style.backgroundColor=\'F9F9F9\'><td> <font class=H9_c><label class=mdm id="+this.pagelinx+"_>";
vccCBhnpSLCT2 += "<input id="+this.pagelinx+" type=checkbox name=vitempchex onchange=\"statecheckHNP(\'"+this.pagelinx+"_\');\" /> " + this.name +" </label></td> ";
vccCBhnpSLCT2 += "<td><label class=mdmT  id="+this.pagelinx+"_T>";
vccCBhnpSLCT2 += "<input id="+this.pagelinx+"_T type=radio name=vitempchexT onchange=\"statecheckThnp(\'"+this.pagelinx+"_T\');\" /> </label></td></tr>";
vccCBhnpSLCT2 += "<tr id="+this.pagelinx+"_P2><td colspan=2 height=2></td></tr>";
return vccCBhnpSLCT2;
}

function ccCBhnpSLCT2_FELIX(){
var vccCBhnpSLCT2 = "<tr id="+this.pagelinx+"_P width=100% bgcolor=F9F9F9 valign=top onmouseover=style.backgroundColor=\'007CFF\' onmouseout=style.backgroundColor=\'F9F9F9\'><td> <font class=H9_c><label class=mdm id="+this.pagelinx+"_>";
vccCBhnpSLCT2 += "<input id="+this.pagelinx+" type=checkbox name=vitempchex onchange=\"statecheckHNP(\'"+this.pagelinx+"_\');\" /> " + this.name +" </label></td> ";
vccCBhnpSLCT2 += "<td><span class=fh-radio>";
vccCBhnpSLCT2 += "<input id="+this.pagelinx+"_T type=radio name=vitempchexT onchange=\"statecheckThnp(\'"+this.pagelinx+"_T\');\" /> <label for=radio-id id="+this.pagelinx+"_T></label></span></td></tr>";
vccCBhnpSLCT2 += "<tr id="+this.pagelinx+"_P2><td colspan=2 height=2></td></tr>";
return vccCBhnpSLCT2;
}


function ccCBhnpSLCT2()
{
	var vccCBhnpSLCT2 = "<tr id="+this.pagelinx+"_P width=100% bgcolor=F9F9F9 valign=top onmouseover=style.backgroundColor=\'007CFF\' onmouseout=style.backgroundColor=\'F9F9F9\'><td> <font class=H9_c><label class=mdmP id="+this.pagelinx+"_>";
	vccCBhnpSLCT2 += "<input id="+this.pagelinx+" type=checkbox name=vitempchex onchange=\"statecheckHNP(\'"+this.pagelinx+"_\');\" /> " + this.spcmn_.blt + " <span id=" + this.pagelinx + "_NAME>" + this.name_a + "</span></label></td> ";
	vccCBhnpSLCT2 += "<td valign=center><label class=mdmT2 for="+this.pagelinx+"_T>";
	vccCBhnpSLCT2 += "<input id="+this.pagelinx+"_T type=radio name=vitempchexT onchange=\"statecheckThnp(this);\" /> </label></td></tr>";
	vccCBhnpSLCT2 += "<tr id="+this.pagelinx+"_P2><td colspan=2 height=2></td></tr>";
	return vccCBhnpSLCT2;

}

// for Type of table in Synt
function synTypeSLCT(defaultChecked)
{
	var vsynTypeSLCT = "<tr id="+this.pagelinx+"_P width=100% bgcolor=F9F9F9 onmouseover=style.backgroundColor=\'99aabb\' onmouseout=style.backgroundColor=\'F6F6F6\'><td> <font class=r10> <label class=mdmS for=" + this.pagelinx + " " + (defaultChecked == this.name_sp ? "style=\"background-color: #c0e2f1\"" : "") +">";
	vsynTypeSLCT += "<input id=" + this.pagelinx + " value=" + this.name_sp + " " + (defaultChecked == this.name_sp ? "checked" : "") + " name=synType type=radio onchange=\"statecheckType(this)\" /> " + this.spcmn_ + " " + this.name_a + "  </label></font>";
	vsynTypeSLCT += "</td><td align=left>" + this.bltpix.blt + "</td></tr><tr id="+this.pagelinx+"_P2><td colspan=2 height=2></td></tr>";
	return vsynTypeSLCT;
}


function _OK()
{
	var vsynTypeSLCT = "<tr id="+this.pagelinx+"_P width=100% bgcolor=F9F9F9><td bgcolor=#99CCEE><input id=" + this.pagelinx + " value=" + this.name_sp + " name=synType type=radio onchange=\"statecheckType(this)\" />";
	vsynTypeSLCT += "<font class=r9><b><label class=mdmP for=" + this.pagelinx + " onMouseOver=\"this.style.color='3366CC'\" onMouseOut=\"this.style.color='003366'\">" + this.name_a + "</label>";
	vsynTypeSLCT += "</td><td >" + this.bltpix.blt + "</td></tr>";
	return vsynTypeSLCT;
}

// function listAllWNames()
// {
// 	document.write("<table width=15%><tr><td><font class=v2p>" + this.pagelinx + "</td><td><font class=v2p>" + this.name + " </font></td></tr></table> ");

// }








/////for SYNT 4 mCalx simplified 

function ccCBeqtnSLCTN()
{
	var vccCBeqtnSLCT1 = "";

	switch (this.xtr[10])
	{
		case "x": //ok
			vccCBeqtnSLCT1 = "<tr id="+this.pagelinx+"_P width=100% bgcolor=F9F9F9 valign=top ><td onmouseover=style.backgroundColor=\'007CFF\' onmouseout=style.backgroundColor=\'F9F9F9\'> <font class=H9_c><label class=mdm id="+this.pagelinx+"_>";
			vccCBeqtnSLCT1 += "<input id="+this.pagelinx+" type=checkbox name="+this.pagelinx+" onchange=\"statecheck(\'"+this.pagelinx+"_\'),statecheckDP(\'"+this.pagelinx+"_\');\" /> " + this.bltpix.blt + " <span id=" + this.pagelinx + "_NAME>" + this.name_a + "</span></label></td> <td></td></tr>";
			
		break; 
		case "z": //ok
			vccCBeqtnSLCT1 = "<tr id="+this.pagelinx+"_P width=100% bgcolor=F9F9F9 valign=top onmouseover=style.backgroundColor=\'007CFF\' onmouseout=style.backgroundColor=\'F9F9F9\'><td valign=center> <font class=H9_c><label class=mdm id="+this.pagelinx+"_>";
			vccCBeqtnSLCT1 += "<input id="+this.pagelinx+" type=checkbox name="+this.pagelinx+" onchange=\"statecheck(\'"+this.pagelinx+"_\');\" /> " + this.bltpix.blt + " <span id=" + this.pagelinx + "_NAME>" + this.name_a + "</span></label></td> ";
			vccCBeqtnSLCT1 += "<td><label class=mdmT  id="+this.pagelinx+"_T>";
			vccCBeqtnSLCT1 += "<input id="+this.pagelinx+"T type=checkbox name="+this.pagelinx+"T onchange=\"statecheckT(\'"+this.pagelinx+"_T\');\" /></label></td></tr>";
			
		break;
		case "a": //ok
			vccCBeqtnSLCT1 = "<tr id="+this.pagelinx+"_P width=100% bgcolor=F9F9F9 valign=top onmouseover=style.backgroundColor=\'007CFF\' onmouseout=style.backgroundColor=\'F9F9F9\'><td valign=center> <font class=H9_c><label class=mdm id="+this.pagelinx+"_>";
			vccCBeqtnSLCT1 += "<input id="+this.pagelinx+" type=checkbox name="+this.pagelinx+" onchange=\"statecheck(\'"+this.pagelinx+"_\'),statecheckDP(\'"+this.pagelinx+"_\');\" /> " + this.bltpix.blt + " <span id=" + this.pagelinx + "_NAME>" + this.name_a + "</span></label></td> ";
			vccCBeqtnSLCT1 += "<td><label class=mdmT  id="+this.pagelinx+"_T>";
			vccCBeqtnSLCT1 += "<input id="+this.pagelinx+"T type=checkbox name="+this.pagelinx+"T onchange=\"statecheckT(\'"+this.pagelinx+"_T\');\" /></label></td></tr>";
			
		break;
		case "y": //ok
			//only tbl eg sep shock
			vccCBeqtnSLCT1 = "<tr id="+this.pagelinx+"_P width=100% bgcolor=F9F9F9 valign=top onmouseover=style.backgroundColor=\'007CFF\' onmouseout=style.backgroundColor=\'F9F9F9\'><td valign=center> <font class=H9_c><label class=mdm id="+this.pagelinx+"_>";
			vccCBeqtnSLCT1 += "<input id="+this.pagelinx+" type=hidden name="+this.pagelinx+" onchange=\"statecheck(\'"+this.pagelinx+"_\');\" /> <img src=../../images/mc_t.gif align=center width=16 height=13 vspace=3 hspace=2 border=0> " + this.bltpix.blt + " <span id=" + this.pagelinx + "_NAME>" + this.name_a + "</span></label></td> ";
			vccCBeqtnSLCT1 += "<td><label class=mdmT  id="+this.pagelinx+"_T>";
			vccCBeqtnSLCT1 += "<input id="+this.pagelinx+"T type=checkbox name="+this.pagelinx+"T onchange=\"statecheckT(\'"+this.pagelinx+"_T\');\" /></label></td></tr>";
		break;
	}

	vccCBeqtnSLCT1 += "<tr id="+this.pagelinx+"_P2><td colspan=2 height=2></td></tr>"; ///

	return vccCBeqtnSLCT1;
}




function dfrbwmi_c(){
	var chkths = this.pagelinx; 
	var varAltBPixeb16 =  this.DFRBWBLT(); 
var wtabapA = "<td width=42% id="+this.pagelinx+"_tdp1>"; var wtabapAa = "</td><td width=58%>";
if (this.xtr.substring(2,3) == "x") {var vTxtFldmax = "6";} else if (this.xtr.substring(2,3) == "r"){vTxtFldmax = "4";} 
	else if (this.xtr.substring(2,3) == "h"){vTxtFldmax = "3";}else {vTxtFldmax = "5";}
if (this.xtr.substring(3,4) == "l"){var00px = "75";} else if (this.xtr.substring(3,4) == "s"){var00px = "60";}else if (this.xtr.substring(3,4) == "b"){var00px = "85";}else if (this.xtr.substring(3,4) == "k"){var00px = "110";}else if (this.xtr.substring(3,4) == "g"){var00px = "145";}
if (this.xtr.substring(4,5) == "v") {wtabapA = "<td width=36% id="+this.pagelinx+"_tdp1>"; wtabapAa = "</td><td width=64%>";}
	else if (this.xtr.substring(4,5) == "d") {wtabapA = "<td id="+this.pagelinx+"_tdp1>"; wtabapAa = "</td><tr><td>";}  
	else if (this.xtr.substring(4,5) == "r") {wtabapA = "<td id="+this.pagelinx+"_tdp1>"; wtabapAa = "";}else{}
if (this.xtr.substring(6,7) == "n") {var varAltrntvNm = this.name;} else {varAltrntvNm = this.name_a}
if (this.xtr.substring(8,9) == "y" || this.xtr.substring(8,9) == "m") {var varSpcmn = this.DFRBWSPCMN();} else {varSpcmn = "";}

if (this.xtr.substring(1,2) == "t"){
	 if (this.pagelinx == "bnofc123") {var tblCrvdG = "table-curvedGs"; var ccttlblt = sm_brs.blt;}else {tblCrvdG = "table-curvedG"; ccttlblt = sm_br.blt;}
document.write("<div id="+this.pagelinx+"_div>"+smTab0+"<tr><td height=1></td></tr></table><table width=100% border=0 cellspacing=1 cellpadding=1 bgcolor=#E9E9E9 class="+tblCrvdG+"><tr><td>");
document.write("<font class=h8b><font color=#007CFF>  " + ccttlblt + this.name_a + "</td></tr></table> " +smTab0+"<tr><td height=2></td></tr></table></div>");
document.getElementById(this.pagelinx+"_div").style.display = "none";

}else{
//////////// table changes color
document.write("<div id="+this.pagelinx+"_div> <table width=100% border=0 valign=top cellspacing=0 cellpadding=0 bgcolor=#CCCCCC><tr><td><table width=100% border=0 valign=top cellspacing=1 cellpadding=1 bgcolor=#F3F3F3><tr bgcolor=#F3F3F3 id="+this.pagelinx+"_tr valign=center>"+ wtabapA + "<font class=t8a>");
////////////
document.write(varAltBPixeb16 + " " + varAltrntvNm + varSpcmn);
document.write(wtabapAa + "<font class=t8a>");
if (this.xtr.substring(1,2) != "i" && this.xtr.substring(1,2) != "p" && this.xtr.substring(1,2) != "q"){
document.write("<input type=text size=5 maxlength="+vTxtFldmax+" name=v" + this.pagelinx + "  id=v" + this.pagelinx + " style='background:#EEEEdd;color:#333333;font-family:tahoma,sans-serif;font-size:12px;font-weight:bold;border-radius:4px; border-right:1px solid #CCCCCC;border-top:1px solid #CCCCCC;border-left:1px solid #CCCCCC;border-bottom:1px solid #CCCCCC;' "); 
document.write("onFocus=\"this.style.backgroundColor='FFEE00'\" onBlur=\"this.style.backgroundColor='#EEEEE9'\"; onChange=\"check" + chkths + "(this.smnxform)\"> ");
}else {}
if (this.xtr.substring(1,2) == "a" || this.xtr.substring(1,2) == "i"){
	if (this.xtr.substring(1,2) == "a"){var vChqstFrm = "onClick=\"check" + chkths + "(this.smnxform)\"";}else{vChqstFrm ="";}
	document.write("<input id=v" + this.pagelinx + "cu name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntscu checked "+vChqstFrm+"> ");
	document.write(" <LABEL for=v" + this.pagelinx + "cu onMouseOver=\"this.style.color=ColorBL\" onMouseOut=\"this.style.color='003366'\">" + this.units_cu + "</LABEL>");
	document.write(" <input id=v" + this.pagelinx + "si name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntssi "+vChqstFrm+"> ");
	document.write(" <LABEL for=v" + this.pagelinx + "si onMouseOver=\"this.style.color=ColorBL\" onMouseOut=\"this.style.color='003366'\">" + this.units_si + "</LABEL>");
}else {}
if (this.xtr.substring(1,2) == "e"){
document.write(this.units_cu);
}else{}
if (this.xtr.substring(1,2) == "o" || this.xtr.substring(1,2) == "u"){
document.write("<select id=v" + this.pagelinx + "nm name=v" + this.pagelinx + "nts size=1 style='width:"+var00px+";background:#F3F3F3;color:#003366;font-family:tahoma;font-size:11px;font-weight:plain;border-radius:4px' onfocus=this.style.backgroundColor='#FFEE00' onblur=this.style.backgroundColor='#F3F3F3' onChange=\"check" + chkths + "(this.smnxform)\" >"); 
document.write("<option value=" + this.pagelinx + "ntscu selected> " + this.units_cu + " </option> ");
document.write("<option value=" + this.pagelinx + "ntssi> " + this.units_si + " </option> ");

}else{}
if (this.xtr.substring(1,2) == "p"){
document.write("<select id=v" + this.pagelinx + "nm name=v" + this.pagelinx + "nts size=1 style='width:"+var00px+";background:#F3F3F3;color:#003366;font-family:tahoma;font-size:11px;font-weight:plain;border-radius:4px' onfocus=this.style.backgroundColor='#FFEE00' onblur=this.style.backgroundColor='#F3F3F3' onChange=\"check" + chkths + "(this.smnxform)\" >"); 
document.write("<option value=" + this.pagelinx + "ntscu_lw selected> " + this.nvcu_lw + " </option> ");
document.write("<option value=" + this.pagelinx + "ntscu_cusi> " + this.cf_cusi + " </option> ");
document.write("<option value=" + this.pagelinx + "ntscu_si> " + this.units_si + " </option> ");
document.write("<option value=" + this.pagelinx + "ntslimcu_lw> " + this.limcu_lw + " </option> ");
	if (this.xtr.substring(2,3) == "g"){document.write("<option value=" + this.pagelinx + "ntslimcu_hgh> " + this.limcu_hgh + " </option> ");}
	if (this.xtr.substring(2,3) == "h"){document.write("<option value=" + this.pagelinx + "ntslimcu_hgh> " + this.limcu_hgh + " </option> <option value=" + this.pagelinx + "ntsnvcu_hgh> " + this.nvcu_hgh + " </option>");}
	if (this.xtr.substring(2,3) == "j"){document.write("<option value=" + this.pagelinx + "ntslimcu_hgh> " + this.limcu_hgh + " </option> <option value=" + this.pagelinx + "ntsnvcu_hgh> " + this.nvcu_hgh + " </option> <option value=" + this.pagelinx + "ntsinputz> " + this.inputz + " </option> ");}

}else{}
if (this.xtr.substring(1,2) == "q"){
document.write("<select id=v" + this.pagelinx + "nm name=v" + this.pagelinx + "nts size=1 style='width:"+var00px+";background:#F3F3F3;color:#003366;font-family:tahoma;font-size:11px;font-weight:plain;border-radius:4px' onfocus=this.style.backgroundColor='#FFEE00' onblur=this.style.backgroundColor='#F3F3F3' onChange=\"check" + chkths + "(this.smnxform)\" >"); 
document.write("<option value=" + this.pagelinx + "ntscu_lw selected> " + this.nvcu_lw + " </option> ");
	if (this.xtr.substring(2,3) == "b"){document.write("<option value=" + this.pagelinx + "ntscu_cusi> " + this.cf_cusi + " </option>  ");}
	if (this.xtr.substring(2,3) == "c"){document.write("<option value=" + this.pagelinx + "ntscu_cusi> " + this.cf_cusi + " </option>  <option value=" + this.pagelinx + "ntscu_si> " + this.units_si + " </option> ");}
}else{}

document.write("</td></tr></table></td></tr>  <tr><td height=2></td></tr></table></div>");
document.getElementById(this.pagelinx+"_div").style.display = "none";

}
}


/////////////////////////////////////////////////////////////////////////////////
function dfrbwmi(){
	var chkths = this.pagelinx; 
	var varAltBPixeb16 =  this.DFRBWBLT(); 
var wtabapA = "<td width=42%>"; var wtabapAa = "</td><td width=58%>";
if (this.xtr.substring(2,3) == "x") {var vTxtFldmax = "6";} else if (this.xtr.substring(2,3) == "r"){vTxtFldmax = "4";} 
	else if (this.xtr.substring(2,3) == "h"){vTxtFldmax = "3";}else {vTxtFldmax = "5";}
if (this.xtr.substring(3,4) == "l"){var00px = "75";} else if (this.xtr.substring(3,4) == "s"){var00px = "60";}else if (this.xtr.substring(3,4) == "b"){var00px = "85";}else if (this.xtr.substring(3,4) == "k"){var00px = "110";}else if (this.xtr.substring(3,4) == "g"){var00px = "145";}
if (this.xtr.substring(4,5) == "v") {wtabapA = "<td width=36%>"; wtabapAa = "</td><td width=64%>";}
	else if (this.xtr.substring(4,5) == "d") {wtabapA = "<td>"; wtabapAa = "</td><tr><td>";}  
	else if (this.xtr.substring(4,5) == "r") {wtabapA = "<td>"; wtabapAa = "";}else{}
if (this.xtr.substring(6,7) == "n") {var varAltrntvNm = this.name;} else {varAltrntvNm = this.name_a}
if (this.xtr.substring(8,9) == "y" || this.xtr.substring(8,9) == "m") {var varSpcmn = this.DFRBWSPCMN();} else {varSpcmn = "";}

if (this.xtr.substring(1,2) == "t"){
document.write("<table width=100% border=0 cellspacing=1 cellpadding=1 bgcolor=#778899><tr><td bgcolor=#E9E9E9>");
document.write("<font class=h8b><font color=#007CFF>  " + sm_br.blt + this.name_a + "</td></tr></table> ");
}else{
document.write(wtabap0 + wtabapA + "<font class=t8a>");
document.write(varAltBPixeb16 + " " + varAltrntvNm + varSpcmn);
document.write(wtabapAa + "<font class=t8a>");
if (this.xtr.substring(1,2) != "i" && this.xtr.substring(1,2) != "p" && this.xtr.substring(1,2) != "q"){
document.write("<input type=text size=5 maxlength="+vTxtFldmax+" name=v" + this.pagelinx + " style='background:#EEEEdd;color:#333333;font-family:tahoma,sans-serif;font-size:12px;font-weight:bold;border-radius:4px;border-right:1px solid #CCCCCC;border-top:1px solid #CCCCCC;border-left:1px solid #CCCCCC;border-bottom:1px solid #CCCCCC;' "); 
document.write("onFocus=\"this.style.backgroundColor='FFEE00'\" onBlur=\"this.style.backgroundColor='FFFFFF'\"; onChange=\"check" + chkths + "(this.smnxform)\"> ");
}else {}
if (this.xtr.substring(1,2) == "a" || this.xtr.substring(1,2) == "i"){
	if (this.xtr.substring(1,2) == "a"){var vChqstFrm = "onClick=\"check" + chkths + "(this.smnxform)\"";}else{vChqstFrm ="";}
	document.write("<input id=v" + this.pagelinx + "cu name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntscu checked "+vChqstFrm+"> ");
	document.write(" <LABEL for=v" + this.pagelinx + "cu onMouseOver=\"this.style.color=ColorBL\" onMouseOut=\"this.style.color='003366'\">" + this.units_cu + "</LABEL>");
	document.write(" <input id=v" + this.pagelinx + "si name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntssi "+vChqstFrm+"> ");
	document.write(" <LABEL for=v" + this.pagelinx + "si onMouseOver=\"this.style.color=ColorBL\" onMouseOut=\"this.style.color='003366'\">" + this.units_si + "</LABEL>");
}else {}
if (this.xtr.substring(1,2) == "e"){
document.write(this.units_cu);
}else{}
if (this.xtr.substring(1,2) == "o" || this.xtr.substring(1,2) == "u"){
document.write("<select id=v" + this.pagelinx + "nm name=v" + this.pagelinx + "nts size=1 style='width:"+var00px+";background:#F3F3F3;color:#003366;font-family:tahoma;font-size:11px;font-weight:plain;border-radius:4px' onfocus=this.style.backgroundColor='#FFEE00' onblur=this.style.backgroundColor='#F3F3F3' onChange=\"check" + chkths + "(this.smnxform)\" >"); 
document.write("<option value=" + this.pagelinx + "ntscu selected> " + this.units_cu + " </option> ");
document.write("<option value=" + this.pagelinx + "ntssi> " + this.units_si + " </option> ");

}else{}
if (this.xtr.substring(1,2) == "p"){
document.write("<select id=v" + this.pagelinx + "nm name=v" + this.pagelinx + "nts size=1 style='width:"+var00px+";background:#F3F3F3;color:#003366;font-family:tahoma;font-size:11px;font-weight:plain;border-radius:4px' onfocus=this.style.backgroundColor='#FFEE00' onblur=this.style.backgroundColor='#F3F3F3' onChange=\"check" + chkths + "(this.smnxform)\" >"); 
document.write("<option value=" + this.pagelinx + "ntscu_lw selected> " + this.nvcu_lw + " </option> ");
document.write("<option value=" + this.pagelinx + "ntscu_cusi> " + this.cf_cusi + " </option> ");
document.write("<option value=" + this.pagelinx + "ntscu_si> " + this.units_si + " </option> ");
document.write("<option value=" + this.pagelinx + "ntslimcu_lw> " + this.limcu_lw + " </option> ");
	if (this.xtr.substring(2,3) == "g"){document.write("<option value=" + this.pagelinx + "ntslimcu_hgh> " + this.limcu_hgh + " </option> ");}
	if (this.xtr.substring(2,3) == "h"){document.write("<option value=" + this.pagelinx + "ntslimcu_hgh> " + this.limcu_hgh + " </option> <option value=" + this.pagelinx + "ntsnvcu_hgh> " + this.nvcu_hgh + " </option>");}
	if (this.xtr.substring(2,3) == "j"){document.write("<option value=" + this.pagelinx + "ntslimcu_hgh> " + this.limcu_hgh + " </option> <option value=" + this.pagelinx + "ntsnvcu_hgh> " + this.nvcu_hgh + " </option> <option value=" + this.pagelinx + "ntsinputz> " + this.inputz + " </option> ");}

}else{}
if (this.xtr.substring(1,2) == "q"){
document.write("<select id=v" + this.pagelinx + "nm name=v" + this.pagelinx + "nts size=1 style='width:"+var00px+";background:#F3F3F3;color:#003366;font-family:tahoma;font-size:11px;font-weight:plain;border-radius:4px' onfocus=this.style.backgroundColor='#FFEE00' onblur=this.style.backgroundColor='#F3F3F3' onChange=\"check" + chkths + "(this.smnxform)\" >"); 
document.write("<option value=" + this.pagelinx + "ntscu_lw selected> " + this.nvcu_lw + " </option> ");
	if (this.xtr.substring(2,3) == "b"){document.write("<option value=" + this.pagelinx + "ntscu_cusi> " + this.cf_cusi + " </option>  ");}
	if (this.xtr.substring(2,3) == "c"){document.write("<option value=" + this.pagelinx + "ntscu_cusi> " + this.cf_cusi + " </option>  <option value=" + this.pagelinx + "ntscu_si> " + this.units_si + " </option> ");}
}else{}

document.write("</td></tr></table></td></tr>  <tr><td height=2></td></tr></table>");
}
}



function dfrbwbcZ(){
var varnmbreq = iel + 1;
var oxfzl8 = smTab0 + trD + "<td><font class=a8><font color=#3366CC>" + varnmbreq + " <font color=#003366>";
oxfzl8 +=  this.name_a + " = " + this.name + ".</font><font color=#996633></font></td><tr></table>"; 
document.write(oxfzl8);
}
function dfrbwbcZ(){
if (this.xtr.substring(6,7) != "a"){
document.write("");
} else {
document.write(""+smTab0+ "<tr><td><font class=a1p><font color=#888888>"+ this.name + "</font></td><tr></table>"); 
}
}


//////////////////////////////old color bluer #d3d9df new = E9ECEE
function dfrbwbc(){
	var varAltBPixeb16 = this.DFRBWBLT(); 
if (this.xtr.substring(1,2) == "q"){
document.write(smTab0 +"<tr bgcolor=#d3d9df><td width=1%><img src=../../images/mc_t.gif width=1 height=26 border=0></td><td><font class=t8g><b> ");
document.write("<textarea rows=6 cols=39 maxlength=180 readOnly=true name=v" + this.pagelinx + " onFocus='this.blur()' style='background:#f9fcff;color:#336699;font-family:helvetica,sans-serif;font-size:13px;font-weight:plain;border-top:0px solid;border-left:0px solid;border-bottom:0px solid;border-right:0px;'> ");
document.write("</textarea></td></tr></table> ");
 
 }else if (this.xtr.substring(1,2) == "t"){
document.write("<table width=100% border=0 cellspacing=1 cellpadding=1 bgcolor=#778899><tr><td bgcolor=#d3d9df>");
document.write("<font class=h8b><font color=#007CFF> " + sm_br.blt + this.name + "</td></tr></table> ");
 }else{
  if (this.xtr.substring(2,3) == "x") {var vTxtFldmax = "6";} else if (this.xtr.substring(2,3) == "r"){vTxtFldmax = "4";} 

  if (this.xtr.substring(6,7) == "n") {var varAltrntvNm = this.name;} else {varAltrntvNm = this.name_a}
  if (this.xtr.substring(8,9) == "y") {var varSpcmn = this.DFRBWSPCMN();} else {varSpcmn = "";}
	
	var vdfrbwbc = smTab0 +"<tr bgcolor=#E9ECEE><td width=1%><img src=../../images/mc_t.gif width=1 height=26 border=0></td>";
	var vdfrbwbc2 = "<font class=t8a><b>" + this.bltpix.blt + " " + varAltrntvNm + varSpcmn + "</td>";
	wtabapU = "<td width=41% valign=center>"; wtabapUa = "<td width=58%>";
  if (this.xtr.substring(4,5) == "v") {wtabapU = "<td width=33%>"; wtabapUa = "<td width=66%>";}else{}  

document.write(vdfrbwbc + wtabapU + vdfrbwbc2 + wtabapUa);
	if (this.xtr.substring(1,2) != "f"){
	document.write("<input type=text size=5 maxlength=6 name=v" + this.pagelinx + " onFocus='this.blur()' ");
	}else{
	document.write("<input type=text size=18 maxlength=18 name=v" + this.pagelinx + " onFocus='this.blur()' ");
	}
document.write("style='background:#f9fcff;color:#6699CC;font-family:tahoma,sans-serif;font-size:12px;font-weight:bold;border-radius:4px;border-top:1px solid #CCCCCC;border-left:1px solid #CCCCCC;border-bottom:1px solid #CCCCCC;border-right:1px solid #CCCCCC;'> ");
document.write("<font class=t8a>");
if (this.xtr.substring(1,2) == "a"){
document.write("<input id=v" + this.pagelinx + "cu name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntscu checked onClick='CmptFrm(this.form)'> ");
document.write(" <LABEL for=v" + this.pagelinx + "cu onMouseOver=\"this.style.color=ColorBL\" onMouseOut=\"this.style.color='003366'\">" + this.units_cu + "</LABEL>");
document.write(" <input id=v" + this.pagelinx + "si name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntssi onClick='CmptFrm(this.form)'> ");
document.write(" <LABEL for=v" + this.pagelinx + "si onMouseOver=\"this.style.color=ColorBL\" onMouseOut=\"this.style.color='003366'\">" + this.units_si + "</LABEL>");
}
if (this.xtr.substring(1,2) == "e"){
document.write(" " + this.units_cu);
}
if (this.xtr.substring(1,2) == "o" || this.xtr.substring(3,4) == "u"){
  if (this.xtr.substring(3,4) == "s"){var00px = "60";} else if (this.xtr.substring(3,4) == "l"){var00px = "75";}else if (this.xtr.substring(3,4) == "b"){var00px = "85";}else if (this.xtr.substring(3,4) == "k"){var00px = "105";}
	document.write("<select id=v" + this.pagelinx + "nm name=v" + this.pagelinx + "nts size=1 style='width:"+var00px+";background:#F3F3F3;color:#003366;font-family:tahoma;font-size:11px;font-weight:plain;;border-radius:4px' onfocus=this.style.backgroundColor='#FFEE00' onblur=this.style.backgroundColor='#F3F3F3' onChange='CmptFrm(this.smnxform)'>"); 
	document.write("<option value=" + this.pagelinx + "ntscu selected> " + this.units_cu + " </option> ");
	document.write("<option value=" + this.pagelinx + "ntssi> " + this.units_si + " </option> ");
}
/////////////////document.write("</td></tr><tr bgcolor=#BBBBBB><td height=2 colspan=3></td></tr></table>");
document.write("</td></tr><tr bgcolor=#E9ECEE><td colspan=3>");
this.dfrbwbcZ();

document.write("</td></tr><tr bgcolor=#C3C3C3><td height=2 colspan=3></td></tr><tr><td height=2 colspan=3></td></tr></table>");

 }
}

var ClrBLCK = "";   ///// used to be var ClrBLCK
var t0trEd1dxx0 ="<table width=100% class=smnx_PRbkbA border=0 valign=top cellspacing=0 cellpadding=0 topmargin=0 hspace=0 vspace=0>";
t0trEd1dxx1 = "<tr bgcolor=#F6F6F6 valign=top><td width=29%><font class=a9p>";
function dfrbpal() {
var vRTnoD1 = "1"; var vRTnoD2 = "1"
if (this.xtr.substring(2,3) == "w") {var vRTnoD1 = "2"; var vRTnoD2 = "3"} else {}
if (this.xtr.substring(2,3) == "u") {var vRTnoD1 = "3"; var vRTnoD2 = "2"} else {}
varSpcmn = this.DFRBWSPCMN();
FntBP = "<b>";
FntBLRD = "<font color=#003399>";
	if (this.xtr.substring(1,2) == "a" || this.xtr.substring(1,2) == "o"){
		Vsr = eval("V" + this.pagelinx);
		VsrUnits = eval("V" + this.pagelinx + "nts");
		smntscu = this.pagelinx + "ntscu";
		smntssi = this.pagelinx + "ntssi";
		Vsrntslbl = eval("V" + this.pagelinx + "ntslbl");
		var VsrCU;
		var VsrSI;
		nvsi_lw = roundtd( (this.nvcu_lw * this.cf_cusi), 3) ;
		nvsi_hgh = roundtd( (this.nvcu_hgh * this.cf_cusi), 3) ;
				if (VsrUnits == smntscu) {
					if ( (Vsr < Number(this.nvcu_lw))|| (Vsr > Number(this.nvcu_hgh)) ) {FntBLRD = "<font color=#CC0000>";}else { }
					VsrCU = Vsr; 
					VsrSI = Vsr*this.cf_cusi;
					if (Vsr == "") {VsrSI = ""}else{ VsrSI = roundtd(VsrSI,vRTnoD1) ;}
					}
				else if (VsrUnits == smntssi) {
					if ( (Vsr < Number(nvsi_lw)) || (Vsr > Number(nvsi_hgh)) ) {FntBLRD = "<font color=#CC0000>";}	else{}
					VsrCU = Vsr/this.cf_cusi; 
					VsrSI = Vsr;
					if (Vsr == "") {VsrCU = ""}else{VsrCU = roundtd(VsrCU,vRTnoD2) ;}
				}
document.write(t0trEd1dxx0 + t0trEd1dxx1 + this.bltpix.blt + this.name + varSpcmn + " </font></td>");
document.write("<td width=9%><font class=a9p><b>" + this.name_a + "</b></font></td>");
		document.write("<td width=7% bgcolor=#E6E6E6><font class=a2p>" + FntBP + FntBLRD + ClrBLCK + VsrCU + "</font></td>");
		document.write("<td width=10% bgcolor=#E6E6E6><font class=a9p>" + this.units_cu + "</font></td>");
		document.write("<td width=7%><font class=a9p>" + this.cf_cusi + "</font></td>");
		document.write("<td width=11%><font class=a9p>" + FntBLRD + ClrBLCK + VsrSI + "</font></font><font class=a9p> " + this.units_si + "</font></td>");
		document.write("<td width=9%><font class=a9p><font color=#000000>" + this.nvcu_lw + "-" + this.nvcu_hgh + "</font></td>");
		document.write("<td width=18%><font class=a9pn>" + this.name_sp + "</font></td></tr></table>");
		}
	else if (this.xtr.substring(1,2) == "e"){
		Vsr = eval("V" + this.pagelinx);
		if ( (Vsr < Number(this.nvcu_lw)) || (Vsr > Number(this.nvcu_hgh)) ) {FntBLRD = "<font color=#CC0000>";}else{}
document.write(t0trEd1dxx0 + t0trEd1dxx1 + this.bltpix.blt + this.name + varSpcmn + " </font></td>");
document.write("<td width=9%><font class=a9p><b>" + this.name_a + "</b></font></td>");
		document.write("<td width=7% bgcolor=#E6E6E6><font class=a2p><b>" + FntBLRD + ClrBLCK+ Vsr + "</b></font></td>");
		document.write("<td width=10% bgcolor=#E6E6E6><font class=a9p>" + this.units_cu + "</font></td><td colspan=2></td>");
		document.write("<td width=9%><font class=a9p><font color=#000000>" + this.nvcu_lw + "-" + this.nvcu_hgh + "</font></td>");
		document.write("<td width=18%><font class=a9pn>" + this.name_sp + "</font></td></tr></table>");
	}
	else if(this.xtr.substring(1,2) == "i"){
		VsrUnits = eval("V" + this.pagelinx + "nts");
		smntscu = this.pagelinx + "ntscu";
		smntssi = this.pagelinx + "ntssi";
		Vsrntslbl = eval("V" + this.pagelinx + "ntslbl");
document.write(t0trEd1dxx0 + t0trEd1dxx1 + this.bltpix.blt + this.name + varSpcmn + " </font></td>");
document.write("<td width=9%><font class=a9p><b>" + this.name_a + "</b></font></td>");
		document.write("<td width=17% bgcolor=#E6E6E6><font class=a10b>" + ClrBLCK + Vsrntslbl + "</font></td>");
		document.write("<td colspan=4></td></tr></table>");
	}
	else if(this.xtr.substring(1,2) == "t"){
		document.write(t0trEd1dxx0 + "<tr><td><font class=t8><b> "+sm_br.blt+this.name + "</td></tr></table>");
	}
	else if(this.xtr.substring(1,2) == "f"){
		Vsr = eval("V" + this.pagelinx);
		//////if ( Vsr != "Normal") {FntBLRD = "<font color=#CC0000>";}else{}
document.write(t0trEd1dxx0 + t0trEd1dxx1 + this.bltpix.blt + this.name + " </font></td>");
document.write("<td width=9%><font class=a9p><b>" + this.name_a + "</b></font></td>");
		document.write("<td width=17% bgcolor=#E6E6E6><font class=a2p><b>" + FntBLRD + ClrBLCK+ Vsr + "</b></font></td>");
		document.write("<td colspan=2></td>");
		document.write("<td width=9%><font class=a9p><font color=#333333>" + this.nvcu_lw+"</font></td>");
		document.write("<td width=18%><font class=a9pn>" + this.name_sp + "</font></td></tr></table>");
	}

	else if(this.xtr.substring(1,2) == "p" || this.xtr.substring(1,2) == "q"){
	/////	VsrUnits = eval("V" + this.pagelinx + "nts");
	/////	smntscu = this.pagelinx + "ntscu";
	/////	smntssi = this.pagelinx + "ntssi";
		Vsrntslbl = eval("V" + this.pagelinx + "ntslbl");
document.write(t0trEd1dxx0 + t0trEd1dxx1 + this.bltpix.blt + this.name + varSpcmn + " </font></td>");
document.write("<td width=9%><font class=a9p><b>" + this.name_a + "</b></font></td>");
		document.write("<td width=17% bgcolor=#E6E6E6><font class=a10b>" + ClrBLCK + Vsrntslbl + "</font></td>");
		document.write("<td colspan=2></td><td width=9%><font class=a9p><font color=#333333>" + this.nvcu_lw+"</font></td><td width=18%></td></tr></table>");
	}


	else if(this.xtr.substring(1,2) == "x"){
		document.write(t0trEd1dxx0 + "<tr><td height=8></td></tr></table>");
	}
	else{
	}
}

//////////////////////////////////////////test for print with 2 columns/////////////////////
///////////////////////////////////////////////////////////////////////////////////////

function dfrbpal2() {
t0trEd1dxx1 = "<tr bgcolor=#F6F6F6 valign=top><td width=60%><font class=a8p>";
var vRTnoD1 = "1"; var vRTnoD2 = "1"
if (this.xtr.substring(2,3) == "w") {var vRTnoD1 = "2"; var vRTnoD2 = "3"} else {}
if (this.xtr.substring(2,3) == "u") {var vRTnoD1 = "3"; var vRTnoD2 = "2"} else {}
varSpcmn = this.DFRBWSPCMN();
FntBP = "<b>";
FntBLRD = "<font color=#003399>";
	if (this.xtr.substring(1,2) == "a" || this.xtr.substring(1,2) == "o"){
		Vsr = eval("V" + this.pagelinx);
		VsrUnits = eval("V" + this.pagelinx + "nts");
		smntscu = this.pagelinx + "ntscu";
		smntssi = this.pagelinx + "ntssi";
		Vsrntslbl = eval("V" + this.pagelinx + "ntslbl");
		var VsrCU;
		var VsrSI;
		nvsi_lw = roundtd( (this.nvcu_lw * this.cf_cusi), 3) ;
		nvsi_hgh = roundtd( (this.nvcu_hgh * this.cf_cusi), 3) ;
				if (VsrUnits == smntscu) {
					if ( (Vsr < Number(this.nvcu_lw))|| (Vsr > Number(this.nvcu_hgh)) ) {FntBLRD = "<font color=#CC0000>";}else { }
					VsrCU = Vsr; 
					VsrSI = Vsr*this.cf_cusi;
					if (Vsr == "") {VsrSI = ""}else{ VsrSI = roundtd(VsrSI,vRTnoD1) ;}
					}
				else if (VsrUnits == smntssi) {
					if ( (Vsr < Number(nvsi_lw)) || (Vsr > Number(nvsi_hgh)) ) {FntBLRD = "<font color=#CC0000>";}	else{}
					VsrCU = Vsr/this.cf_cusi; 
					VsrSI = Vsr;
					if (Vsr == "") {VsrCU = ""}else{VsrCU = roundtd(VsrCU,vRTnoD2) ;}
				}
document.write(t0trEd1dxx0 + t0trEd1dxx1 + this.bltpix.blt + this.name + varSpcmn + " <font class=a9pn>(" + this.name_a + ") </font></td>");
		document.write("<td width=10% bgcolor=#E6E6E6><font class=a9p>" + FntBP + FntBLRD + ClrBLCK + VsrCU + "</font></td>");
		document.write("<td width=15% bgcolor=#E6E6E6><font class=a8p>" + this.units_cu + "</font></td>");
		document.write("<td width=15%><font class=a9pn><font color=#000000>(" + this.nvcu_lw + "-" + this.nvcu_hgh + ")</font></td></tr></table>");
		}
	else if (this.xtr.substring(1,2) == "e"){
		Vsr = eval("V" + this.pagelinx);
		if ( (Vsr < Number(this.nvcu_lw)) || (Vsr > Number(this.nvcu_hgh)) ) {FntBLRD = "<font color=#CC0000>";}else{}
document.write(t0trEd1dxx0 + t0trEd1dxx1 + this.bltpix.blt + this.name + varSpcmn + " <font class=a9pn>(" + this.name_a + ")  </font></td>");
		document.write("<td width=10% bgcolor=#E6E6E6><font class=a9p><b>" + FntBLRD + ClrBLCK+ Vsr + "</b></font></td>");
		document.write("<td width=15% bgcolor=#E6E6E6><font class=a8p>" + this.units_cu + "</font></td>");
		document.write("<td width=15%><font class=a9pn><font color=#000000>(" + this.nvcu_lw + "-" + this.nvcu_hgh + ")</font></td></tr></table>");
	}
	else if(this.xtr.substring(1,2) == "i"){
		VsrUnits = eval("V" + this.pagelinx + "nts");
		smntscu = this.pagelinx + "ntscu";
		smntssi = this.pagelinx + "ntssi";
		Vsrntslbl = eval("V" + this.pagelinx + "ntslbl");
document.write(t0trEd1dxx0 + t0trEd1dxx1 + this.bltpix.blt + this.name + varSpcmn + " <font class=a9pn>(" + this.name_a + ") </font></td>");
		document.write("<td width=40% bgcolor=#E6E6E6><font class=a10b>" + ClrBLCK + Vsrntslbl + " </font></td></tr></table>");
	}
	else if(this.xtr.substring(1,2) == "t"){
		document.write(t0trEd1dxx0 + "<tr><td witdh=50%><font class=t8><b> "+sm_br.blt+this.name + "</td></tr></table>");
	}
	else if(this.xtr.substring(1,2) == "f"){
		Vsr = eval("V" + this.pagelinx);
		//////if ( Vsr != "Normal") {FntBLRD = "<font color=#CC0000>";}else{}
document.write(t0trEd1dxx0 + t0trEd1dxx1 + this.bltpix.blt + this.name + " <font class=a9pn>(" + this.name_a + ")</font></td>");
		document.write("<td width=25% bgcolor=#E6E6E6><font class=a9p><b>" + FntBLRD + ClrBLCK+ Vsr + " </b></font></td>");
		document.write("<td width=15%> </td></tr></table>");
	}

	else if(this.xtr.substring(1,2) == "p" || this.xtr.substring(1,2) == "q"){
	/////	VsrUnits = eval("V" + this.pagelinx + "nts");
	/////	smntscu = this.pagelinx + "ntscu";
	/////	smntssi = this.pagelinx + "ntssi";
		Vsrntslbl = eval("V" + this.pagelinx + "ntslbl");
document.write(t0trEd1dxx0 + t0trEd1dxx1 + this.bltpix.blt + this.name + varSpcmn + " </font></td>");
document.write("<td width=9%><font class=a9p><b></b></font></td>");
		document.write("<td width=17% bgcolor=#E6E6E6><font class=a10b>" + ClrBLCK + Vsrntslbl + "</font></td>");
		document.write("<td colspan=2></td><td width=9%><font class=a9pn><font color=#000000>(" + this.nvcu_lw+")</font></td><td width=18%></td></tr></table>");
	}


	else if(this.xtr.substring(1,2) == "x"){
		document.write(t0trEd1dxx0 + "<tr><td width=40% height=8></td></tr></table>");
	}
	else{
	}
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////iPHONE MOBILE
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var tabap1  =  " <table width=100% border=0 valign=top cellspacing=0 cellpadding=0 bgcolor=#D6D9DD>";
tabap1 +=  trE + "<td><table width=100% border=0 valign=top cellspacing=1 cellpadding=1 bgcolor=#E9E9E9>";
tabap1 +=  " <tr><td width=36%><font class=t8bb>"; 
var tabap2  =  "</font></td><td width=64%><font class=t8bb>";

var wtabap0_m  =  " <table width=100% border=0 valign=top cellspacing=0 cellpadding=0>";
wtabap0_m +=  "<tr bgcolor=#EEEEEE><td><table width=100% border=0 valign=top cellspacing=1 cellpadding=1><tr>";



function dfrbwmi_m(){ 
	var chkths = this.pagelinx; 
	var varAltBPixeb16 =  this.bltpix.blt; 

var wtabap0_m  =  " <table width=100% border=0 valign=top cellspacing=0 cellpadding=0>";
wtabap0_m +=  "<tr ><td><table width=100% border=0 valign=top cellspacing=1 cellpadding=1 bgcolor=#EEEEEE class=table_mcinputsp><tr>";

var wtabapA_m = "<td width=40%>"; var wtabapAa_m = "</td><td width=60%>";
if (this.xtr.substring(2,3) == "x") {var vTxtFldmax = "6";} else if (this.xtr.substring(2,3) == "r"){vTxtFldmax = "4";} 
	else if (this.xtr.substring(2,3) == "h"){vTxtFldmax = "3";}else {vTxtFldmax = "5";}
if (this.xtr.substring(3,4) == "l"){var var00px_m = "110";} else if (this.xtr.substring(3,4) == "s"){var00px_m = "80";}else if (this.xtr.substring(3,4) == "b"){var00px_m = "95";}else if (this.xtr.substring(3,4) == "k"){var00px_m = "105";}else if (this.xtr.substring(3,4) == "g"){var00px_m = "180";}
if (this.xtr.substring(4,5) == "v") {wtabapA_m = "<td width=36%>"; wtabapAa_m = "</td><td width=64%>";}
	else if (this.xtr.substring(4,5) == "d") {wtabapA_m = "<td>"; wtabapAa_m = "</td><tr><td>";}  
	else if (this.xtr.substring(4,5) == "r") {wtabapA_m = "<td>"; wtabapAa_m = "";}else{}
if (this.xtr.substring(6,7) == "n") {var varAltrntvNm = this.name;} else {varAltrntvNm = this.name_a}
if (this.xtr.substring(8,9) == "y" || this.xtr.substring(8,9) == "m") {var varSpcmn = this.DFRBWSPCMN();} else {varSpcmn = "";}

if (this.xtr.substring(1,2) == "t"){
document.write("<table width=100% border=0 cellspacing=1 cellpadding=1 class=table_mcinputsps><tr><td bgcolor=#E6E6E6 >");
document.write("<font class=h8blps><font color=#007CFF> " + sm_br.blt + this.name_a + "</font></td></tr></table> ");
}else{
document.write(wtabap0_m + wtabapA_m + "<font class=h15pb>");
document.write(varAltBPixeb16 + " " + varAltrntvNm + varSpcmn);
document.write(wtabapAa_m + "<font class=h14pp>");
if (this.xtr.substring(1,2) != "i" && this.xtr.substring(1,2) != "p" && this.xtr.substring(1,2) != "q"){
  document.write("<input type=number min=0 max=999999 size=6 maxlength="+vTxtFldmax+" name=v" + this.pagelinx + " class='noFocusTm' style='background:#EEEEdd;color:#000000;font-family:helvetica,tahoma,sans-serif;font-size:16px;font-weight:bold;border-radius:6px; border-right:1px solid #CCCCCC;border-top:1px solid #CCCCCC;border-left:1px solid #CCCCCC;border-bottom:1px solid #CCCCCC;' "); 
////document.write("<input type=text min=0 max=999999 size=6 maxlength="+vTxtFldmax+" name=v" + this.pagelinx + " class='noFocusTm' style='background:#EEEEdd;color:#000000;font-family:helvetica,tahoma,sans-serif;font-size:16px;font-weight:bold;border-radius:6px; border-right:1px solid #CCCCCC;border-top:1px solid #CCCCCC;border-left:1px solid #CCCCCC;border-bottom:1px solid #CCCCCC;' "); 
document.write("onFocus=\"this.style.backgroundColor='FFEE00'\" onBlur=\"this.style.backgroundColor='#FFFFFF'\"; onChange=\"check" + chkths + "(this.smnxform)\";> ");
}else {}
if (this.xtr.substring(1,2) == "a" || this.xtr.substring(1,2) == "i"){
	if (this.xtr.substring(1,2) == "a"){var vChqstFrm = "onClick=\"check" + chkths + "(this.smnxform)\"";}else{vChqstFrm ="";}
	document.write("<input id=v" + this.pagelinx + "cu name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntscu checked "+vChqstFrm+"> ");
	document.write(" <LABEL for=v" + this.pagelinx + "cu onMouseOver=\"this.style.color=ColorBL\" onMouseOut=\"this.style.color='003366'\">" + this.units_cu + "</LABEL>");
	document.write(" <input id=v" + this.pagelinx + "si name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntssi "+vChqstFrm+"> ");
	document.write(" <LABEL for=v" + this.pagelinx + "si onMouseOver=\"this.style.color=ColorBL\" onMouseOut=\"this.style.color='003366'\">" + this.units_si + "</LABEL>");
}else {}
if (this.xtr.substring(1,2) == "e"){
document.write(this.units_cu);
}else{}
if (this.xtr.substring(1,2) == "o" || this.xtr.substring(1,2) == "u"){
document.write("<select id=v" + this.pagelinx + "nm name=v" + this.pagelinx + "nts size=1 style='width:"+var00px_m+";background:#F3F3F3;color:#000000;font-family:helvetica,tahoma;font-size:15px;font-weight:plain;border-radius:4px' onfocus=this.style.backgroundColor='#FFEE00' onblur=this.style.backgroundColor='#F3F3F3' onChange=\"check" + chkths + "(this.smnxform)\" >"); 
document.write("<option value=" + this.pagelinx + "ntscu selected> " + this.units_cu + " </option>");
document.write("<option value=" + this.pagelinx + "ntssi> " + this.units_si + " </option>");

}else{}
if (this.xtr.substring(1,2) == "p"){
document.write("<select id=v" + this.pagelinx + "nm name=v" + this.pagelinx + "nts size=1 style='width:"+var00px_m+";background:#F3F3F3;color:#000000;font-family:helvetica,tahoma;font-size:14px;font-weight:plain;border-radius:4px' onfocus=this.style.backgroundColor='#FFEE00' onblur=this.style.backgroundColor='#F3F3F3' onChange=\"check" + chkths + "(this.smnxform)\" >"); 
document.write("<option value=" + this.pagelinx + "ntscu_lw selected> " + this.nvcu_lw + " </option> ");
document.write("<option value=" + this.pagelinx + "ntscu_cusi> " + this.cf_cusi + " </option> ");
document.write("<option value=" + this.pagelinx + "ntscu_si> " + this.units_si + " </option> ");
document.write("<option value=" + this.pagelinx + "ntslimcu_lw> " + this.limcu_lw + " </option> ");
	if (this.xtr.substring(2,3) == "g"){document.write("<option value=" + this.pagelinx + "ntslimcu_hgh> " + this.limcu_hgh + " </option> ");}
	if (this.xtr.substring(2,3) == "h"){document.write("<option value=" + this.pagelinx + "ntslimcu_hgh> " + this.limcu_hgh + " </option> <option value=" + this.pagelinx + "ntsnvcu_hgh> " + this.nvcu_hgh + " </option>");}
	if (this.xtr.substring(2,3) == "j"){document.write("<option value=" + this.pagelinx + "ntslimcu_hgh> " + this.limcu_hgh + " </option> <option value=" + this.pagelinx + "ntsnvcu_hgh> " + this.nvcu_hgh + " </option> <option value=" + this.pagelinx + "ntsinputz> " + this.inputz + " </option> ");}

}else{}
if (this.xtr.substring(1,2) == "q"){
document.write("<select id=v" + this.pagelinx + "nm name=v" + this.pagelinx + "nts size=1 style='width:"+var00px_m+";background:#F3F3F3;color:#000000;font-family:helvetica,tahoma;font-size:14px;font-weight:plain;border-radius:4px' onfocus=this.style.backgroundColor='#FFEE00' onblur=this.style.backgroundColor='#F3F3F3' onChange=\"check" + chkths + "(this.smnxform)\" >"); 
document.write("<option value=" + this.pagelinx + "ntscu_lw selected> " + this.nvcu_lw + " </option> ");
	if (this.xtr.substring(2,3) == "b"){document.write("<option value=" + this.pagelinx + "ntscu_cusi> " + this.cf_cusi + " </option>  ");}
	if (this.xtr.substring(2,3) == "c"){document.write("<option value=" + this.pagelinx + "ntscu_cusi> " + this.cf_cusi + " </option>  <option value=" + this.pagelinx + "ntscu_si> " + this.units_si + " </option> ");}
}else{}
document.write("</td></tr></table></td></tr>  <tr><td height=2></td></tr></table>");
}
}


////////////////////////////////////////////////////////////// iPhone

function dfrbwbcZ_m(){
if (this.pagelinx.substring(0,1) == "b"){var oxfzl8 = "";}
 else {
	var oxfzl8 = smTab0 + "<tr><td><font class=h10bps><font color=#003366> " + this.name + "</font></td><tr></table>";
	} 
document.write(oxfzl8);
}

////////////////////////////////////////////////////////////// iPhone
// old color for outputs #d3d9df. NEW tentatively #e3e9ee or #e6ebee settled for eee
function dfrbwbc_m(){
	var varAltBPixeb16 = this.bltpix.blt; 
		var varAltBPixeb16 = this.bltpix.blt; 

if (this.xtr.substring(1,2) == "q"){
document.write(smTab0 +"<tr bgcolor=#e0e6eB><td width=1%><img src=../../images/mc_t.gif width=1 height=26 border=0></td><td><font class=t8g><b> ");
document.write("<textarea rows=6 cols=36 maxlength=180 readOnly=true name=v" + this.pagelinx + " onFocus='this.blur()' class='noFocusTm' style='background:#f9fcff;color:#336699;font-family:helvetica,sans-serif;font-size:14px;font-weight:plain;border-radius:6px;border-top:1px solid #CCCCCC;border-left:1px solid #CCCCCC;border-bottom:1px solid #CCCCCC;border-right:1px solid #CCCCCC;'> ");
document.write("</textarea></td></tr></table> ");
 
 }else if (this.xtr.substring(1,2) == "t"){
document.write("<table width=100% border=0 cellspacing=1 cellpadding=1 bgcolor=#778899><tr><td bgcolor=#E6E6E6>");
document.write(" <font class=t8a><font color=#007CFF>" + sm_br.blt  +  this.name + "</td></tr></table> ");
 }else{
  if (this.xtr.substring(2,3) == "x") {var vTxtFldmax = "6";} else if (this.xtr.substring(2,3) == "r"){vTxtFldmax = "4";} 

  if (this.xtr.substring(6,7) == "n") {var varAltrntvNm = this.name;} else {varAltrntvNm = this.name_a}
  if (this.xtr.substring(8,9) == "y") {var varSpcmn = this.DFRBWSPCMN();} else {varSpcmn = "";}


	var vdfrbwbc = smTab0mcout +"<tr bgcolor=#d3d9df><td width=1%><img src=../../images/mc_t.gif width=1 height=36 border=0></td>";
	var vdfrbwbc2 = "<font class=h12armtb>" + varAltBPixeb16 + " " + varAltrntvNm + varSpcmn + "</td>";
	wtabapU = "<td width=42% valign=center>"; wtabapUa = "<td width=58%>";
if (this.xtr.substring(4,5) == "v") {wtabapU = "<td width=33%>"; wtabapUa = "<td width=66%>";}else{}  
if (this.xtr.substring(4,5) == "f") {wtabapU = "<td width=62%>"; wtabapUa = "<td width=38%>";}else{}  
document.write(vdfrbwbc + wtabapU + vdfrbwbc2 + wtabapUa);

/////	var vdfrbwbc = smTab1 +"<tr bgcolor=#e3e9ee valign=center><td valign=center align=right><img src=../../images/mc_t.gif width=1 height=30 border=0 align=right>";
/////	var vdfrbwbc2 = "<font class=h13bbs>" + varAltBPixeb16 + " " + varAltrntvNm + varSpcmn + " ";
/////document.write(vdfrbwbc +  vdfrbwbc2 );


	if (this.xtr.substring(1,2) != "f"){
	document.write("<input type=text size=5 maxlength=6 name=v" + this.pagelinx + " onFocus='this.blur()' ");
	}else{
	document.write("<input type=text size=16 maxlength=18 name=v" + this.pagelinx + " onFocus='this.blur()' ");
	}
document.write("class='noFocusTm' style='background:#e3e9ee;color:#336699;font-family:helvetica,tahoma,sans-serif;font-size:12pt;font-weight:bold;border-radius:6px;border-top:1px solid #CCCCCC;border-left:1px solid #CCCCCC;border-bottom:1px solid #CCCCCC;border-right:1px solid #CCCCCC;'> ");
document.write("<font class=h13gb>");
if (this.xtr.substring(1,2) == "a"){
document.write("<input id=v" + this.pagelinx + "cu name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntscu checked onClick='CmptFrm(this.form)'> ");
document.write(" <LABEL for=v" + this.pagelinx + "cu onMouseOver=\"this.style.color='#3366CC'\" onMouseOut=\"this.style.color='003366'\">" + this.units_cu + "</LABEL>");
document.write(" <input id=v" + this.pagelinx + "si name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntssi onClick='CmptFrm(this.form)'> ");
document.write(" <LABEL for=v" + this.pagelinx + "si onMouseOver=\"this.style.color='#3366CC'\" onMouseOut=\"this.style.color='003366'\">" + this.units_si + "</LABEL>");
}
if (this.xtr.substring(1,2) == "e"){
document.write("</font><font class=h11b>" + this.units_cu);
}
if (this.xtr.substring(1,2) == "o" || this.xtr.substring(3,4) == "u"){
  if (this.xtr.substring(3,4) == "s"){var var00px_m = "80";} else if (this.xtr.substring(3,4) == "l"){var00px_m = "90";}else if (this.xtr.substring(3,4) == "b"){var00px_m = "100";}else if (this.xtr.substring(3,4) == "k"){var00px_m = "115";}
	document.write("<select id=v" + this.pagelinx + "nm name=v" + this.pagelinx + "nts size=1 style='width:"+var00px_m+";background:#F3F3F3;color:#000000;font-family:helvetica,tahoma;font-size:15px;font-weight:plain;border-radius:6px' onfocus=this.style.backgroundColor='#FFEE00' onblur=this.style.backgroundColor='#F3F3F3' onChange='CmptFrm(this.smnxform)'>"); 
	document.write("<option value=" + this.pagelinx + "ntscu selected> " + this.units_cu + " </option> ");
	document.write("<option value=" + this.pagelinx + "ntssi> " + this.units_si + " </option> ");
}


document.write("</td></tr><tr bgcolor=#d3d9df><td></td><td colspan=2>");
this.dfrbwbcZ_m();

document.write("</td></tr><tr  bgcolor=#e3e9ee><td height=2 colspan=3></td></tr><tr><td height=2 colspan=3></td></tr></table>");
 }
}



////////////////////////////////////////////////////////////// iPhone

function ntintwo_m(){
	if (this.name_a == "") {var vrname_a = "";}	else {vrname_a = this.name_a + " = ";}
	if (this.spcmn_ == "") {var vrspcmn_ = "";}	else {vrspcmn_ = this.spcmn_ + ", ";}
	if (this.xtr.substring(9,10) == "c"){var vrnts_cusi = this.units_cu;} else if(this.xtr.substring(9,10) == "s") {var vrnts_cusi = this.units_si;}
	if (this.xtr.substring(1,2) != "f") {var vrspcmn_vrnts_cusi = " ("+vrspcmn_ + vrnts_cusi+")";} else { vrspcmn_vrnts_cusi = "";}

	if (this.xtr == "zt") {this.name = ""; var vrspcmn_vrnts_cusi = ""; var vrname_a = "";}

var vntintwo = smTab0 + "<tr><td><font class=h10b><font color=#003366>" + vrname_a + this.name +vrspcmn_vrnts_cusi+" </td></tr></table>";
document.write(vntintwo);
}


/////////////////////   NEW    /////////////////////   NEW    /////////////////////   NEW    /////////////////////   NEW

function TblInOtA_m(){
	if (this.name_a != "") {varAbbbrvn = " (" + this.name_a + ") ";}else{varAbbbrvn = "";}
	if (this.spcmn_ != "") {varSpcmn = " (" + this.spcmn_ + ") ";}else{varSpcmn = "";}
	if (this.limcu_lw != "" || this.limcu_hgh != "") {varLimcu = " ("+ this.limcu_lw +" - "+ this.limcu_hgh +") ";}else{varLimcu = "";}
	if (this.cf_cusi != "") {varCf_cusi = " ["+vCF+": " + this.cf_cusi +", &#160;"+this.units_si + "]";}else{varCf_cusi = "";}

if (this.xtr.substring(0,1) == "z") {
var tblinZ = smTab12+"<tr bgcolor=#F6F6F6 align=center> ";
tblinZ += "<td align=left><font class=t8g><b>" + this.name  +sm_br.blt+ "</b></td></tr></table> ";
document.write(tblinZ);
}else {
if (this.xtr.substring(0,1) != "i") {var varClrbckgrd="d3d9df";}else{varClrbckgrd="EEEEDD";}
if (this.xtr.substring(1,2) == "p" || this.xtr.substring(1,2) == "q"){varLinxNm = ""; this.cf_cusi = ""; this.units_si = ""; this.limcu_lw = ""; this.limcu_hgh = ""; }else{}

var tblinX_m1 = " <TABLE width=90% cellspacing=1 cellpadding=2 border=0 bgcolor=#DDDDDD align=center>";
tblinX_m1 += "<tr bgcolor=#F6F6F6><td width=100% align=left bgcolor=#" + varClrbckgrd + "><font class=h13ppb><b>" + this.bltpix.blt  + " "  + this.name  +  "</b>&#160;" + varAbbbrvn  +  " " + varSpcmn  +  " </td></tr></table>";

if (this.pagelinx.substring(2,3) != "x") 
		{var tblinX_m2 = "<TABLE width=90% cellspacing=0 cellpadding=0 border=0 align=center><td height=24 align=left><font class=h13ppb>&#160;&#160;&#160;" + this.name_a  + " = "  + this.name_sp  +  "</td></tr></table>";}
			else{var tblinX_m2 = "";}

if (this.xtr.substring(1,2) != "i") {
			var tblinX_m3 = "<TABLE width=90% cellspacing=1 cellpadding=2 border=0 bgcolor=#DDDDDD align=center>";
			tblinX_m3 += "<tr bgcolor=#F6F6F6><td width=40% align=left><font class=h13ppb><b>"+ this.nvcu_lw +" - "+ this.nvcu_hgh +" " + this.units_cu + "</b> "+ varLimcu ;
			tblinX_m3 += " &#160;" + varCf_cusi + "</font></td></tr></table>";
		}else{
			var tblinX_m3 = "<TABLE width=90% cellspacing=1 cellpadding=2 border=0 bgcolor=#DDDDDD align=center>";
			tblinX_m3 += "<tr bgcolor=#F6F6F6><td width=40% align=left><font class=h13ppb><b>" + this.units_cu +" - " + this.units_si + "</font></td></tr></table>";
		}

document.write(tblinX_m1 + tblinX_m2 + tblinX_m3 + smTab0+"<tr><td height=8></td></tr></table>");

	}
}

////////////////////////for mobile
function TblInOtA_mc(){
	if (this.name_a != "") {varAbbbrvn = " (" + this.name_a + ") ";}else{varAbbbrvn = "";}
	if (this.spcmn_ != "") {varSpcmn = " (" + this.spcmn_ + ") ";}else{varSpcmn = "";}
	if (this.limcu_lw != "" || this.limcu_hgh != "") {varLimcu = " ("+ this.limcu_lw +" - "+ this.limcu_hgh +") ";}else{varLimcu = "";}
	if (this.cf_cusi != "") {varCf_cusi = " ["+vCF+": " + this.cf_cusi +", &#160;"+this.units_si + "]";}else{varCf_cusi = "";}

if (this.xtr.substring(0,1) == "z") {
var tblinZ = "<div id="+this.pagelinx+"_divIO>"+smTab0+"<tr><td height=8></td></tr></table>"+smTab0C+"<tr bgcolor=#D9D9D9><td height=3></td></tr><tr bgcolor=#D9D9D9 align=center height=12> ";
tblinZ += "<td id="+this.pagelinx+"_trt align=left><font class=t9><font color=#007CFF><b> &#160; &#160; " + this.name  +sm_br.blt+ "</b></font></td></tr><tr bgcolor=#D9D9D9><td height=3></td></tr></table> </div>";
document.write(tblinZ);
document.getElementById(this.pagelinx+"_divIO").style.display = "none";
}else {
if (this.xtr.substring(0,1) != "i") {var varClrbckgrd="d3d9df";}else{varClrbckgrd="EEEEDD";}
if (this.xtr.substring(1,2) == "p" || this.xtr.substring(1,2) == "q"){varLinxNm = ""; this.cf_cusi = ""; this.units_si = ""; this.limcu_lw = ""; this.limcu_hgh = ""; }else{}

var tblinX_m1 = "<div id="+this.pagelinx+"_divIO><TABLE width=100% cellspacing=1 cellpadding=2 border=0 bgcolor=#DDDDDD align=center>";
tblinX_m1 += "<tr bgcolor=#F6F6F6><td align=left bgcolor=#" + varClrbckgrd + "><font class=h13ppb><b>" + this.bltpix.blt  + " "  + this.name  +  "</b>&#160;" + varAbbbrvn  +  " " + varSpcmn  +  " </td></tr></table>";

	if (this.pagelinx.substring(2,3) != "x") 
		{var tblinX_m2 = "<TABLE width=100% cellspacing=1 cellpadding=2 border=0 align=center><td height=24 align=left id="+this.pagelinx+"_trt><font class=h13ppb>&#160;&#160;" + this.name_a  + " = "  + this.name_sp  +  "</td></tr></table>";}
			else{var tblinX_m2 = "";}

	if (this.xtr.substring(1,2) != "i") {
			if (this.xtr.substring(5,6) != "x") { 
				var tblinX_m3 = "<TABLE width=100% cellspacing=1 cellpadding=2 border=0 bgcolor=#DDDDDD align=center>";
				tblinX_m3 += "<tr bgcolor=#F6F6F6><td id="+this.pagelinx+"_trt align=left><font class=h13ppb>"+ this.nvcu_lw +" - "+ this.nvcu_hgh +" " + this.units_cu + " "+ varLimcu ;
				tblinX_m3 += " &#160;" + varCf_cusi + "</font></td></tr></table>";

			}else{
				var tblinX_m3 = "<TABLE width=100% cellspacing=1 cellpadding=2 border=0 bgcolor=#DDDDDD align=center>";
				tblinX_m3 += "<tr bgcolor=#F6F6F6><td id="+this.pagelinx+"_trt align=left><font class=h13ppb>"+ this.nvcu_lw +"</font></td></tr></table>";
			}
	}else{
			var tblinX_m3 = "<TABLE width=100% cellspacing=1 cellpadding=2 border=0 bgcolor=#DDDDDD align=center>";
			tblinX_m3 += "<tr bgcolor=#F6F6F6><td align=left id="+this.pagelinx+"_trt><font class=h13ppb>" + this.units_cu +" - " + this.units_si + "</font></td></tr></table>";
			var tblinX_m2 = "";
	}

document.write(tblinX_m1 + tblinX_m2 + tblinX_m3+smTab0+"<tr><td height=6></td></tr></table></div>");
document.getElementById(this.pagelinx+"_divIO").style.display = "none";
	}
}



////////////////////////////////////////////////////////////// iPhone
 
var ClrBLCK = "";   ///// used to be var ClrBLCK
function dfrbpal_m() {
t0trEd1dxx1_m = "<tr bgcolor=#F6F6F6 valign=top><td width=57%><font class=h105b>";
var vRTnoD1 = "1"; var vRTnoD2 = "1"
if (this.xtr.substring(2,3) == "w") {var vRTnoD1 = "2"; var vRTnoD2 = "3"} else {}
if (this.xtr.substring(2,3) == "u") {var vRTnoD1 = "3"; var vRTnoD2 = "2"} else {}
	if (this.name_a == "") {var vrname_a = "";}	else {vrname_a = "(" + this.name_a + ")";}

varSpcmn = this.DFRBWSPCMN();
FntBP = "<b>";
FntBLRD = "<font color=#003399>";
	if (this.xtr.substring(1,2) == "a" || this.xtr.substring(1,2) == "o"){
		Vsr = eval("V" + this.pagelinx);
		VsrUnits = eval("V" + this.pagelinx + "nts");
		smntscu = this.pagelinx + "ntscu";
		smntssi = this.pagelinx + "ntssi";
		Vsrntslbl = eval("V" + this.pagelinx + "ntslbl");
		var VsrCU;
		var VsrSI;
		nvsi_lw = roundtd( (this.nvcu_lw * this.cf_cusi), 3) ;
		nvsi_hgh = roundtd( (this.nvcu_hgh * this.cf_cusi), 3) ;
				if (VsrUnits == smntscu) {
					if ( (Vsr < Number(this.nvcu_lw))|| (Vsr > Number(this.nvcu_hgh)) ) {FntBLRD = "<font color=#CC0000>";}else { }
					VsrCU = Vsr; 
					VsrSI = Vsr*this.cf_cusi;
					if (Vsr == "") {VsrSI = ""}else{ VsrSI = roundtd(VsrSI,vRTnoD1) ;}
					}
				else if (VsrUnits == smntssi) {
					if ( (Vsr < Number(nvsi_lw)) || (Vsr > Number(nvsi_hgh)) ) {FntBLRD = "<font color=#CC0000>";}	else{}
					VsrCU = Vsr/this.cf_cusi; 
					VsrSI = Vsr;
					if (Vsr == "") {VsrCU = ""}else{VsrCU = roundtd(VsrCU,vRTnoD2) ;}
				}
document.write(t0trEd1dxx0 + t0trEd1dxx1_m + this.bltpix.blt + this.name + varSpcmn + " <font class=a9pn>"+vrname_a+" </font></td>");
		document.write("<td width=13% bgcolor=#EBEBEB><font class=a11>" + FntBP + FntBLRD + ClrBLCK + VsrCU + "</font></td>");
		document.write("<td width=15% bgcolor=#EBEBEB><font class=a10b>" + this.units_cu + "</font></td>");
		document.write("<td width=15%><font class=a9pn><font color=#000000>(" + this.nvcu_lw + "-" + this.nvcu_hgh + ")</font></td></tr></table>");
		}
	else if (this.xtr.substring(1,2) == "e"){
		Vsr = eval("V" + this.pagelinx);
		if ( (Vsr < Number(this.nvcu_lw)) || (Vsr > Number(this.nvcu_hgh)) ) {FntBLRD = "<font color=#CC0000>";}else{}
document.write(t0trEd1dxx0 + t0trEd1dxx1_m + this.bltpix.blt + this.name + varSpcmn + " <font class=a9pn>"+vrname_a+"  </font></td>");
		document.write("<td width=13% bgcolor=#EBEBEB><font class=a11><b>" + FntBLRD + ClrBLCK+ Vsr + "</b></font></td>");
		document.write("<td width=15% bgcolor=#EBEBEB><font class=a10b>" + this.units_cu + "</font></td>");
		document.write("<td width=15%><font class=a9pn><font color=#000000>(" + this.nvcu_lw + "-" + this.nvcu_hgh + ")</font></td></tr></table>");
	}
	else if(this.xtr.substring(1,2) == "i"){
		VsrUnits = eval("V" + this.pagelinx + "nts");
		smntscu = this.pagelinx + "ntscu";
		smntssi = this.pagelinx + "ntssi";
		Vsrntslbl = eval("V" + this.pagelinx + "ntslbl");
document.write(t0trEd1dxx0 + t0trEd1dxx1_m + this.bltpix.blt + this.name + varSpcmn + " <font class=a9pn>"+vrname_a+" </font></td>");
		document.write("<td width=43% bgcolor=#EBEBEB><font class=a11bl>" + ClrBLCK + Vsrntslbl + " </font></td></tr></table>");
	}
	else if(this.xtr.substring(1,2) == "t"){
		document.write(t0trEd1dxx0 + "<tr><td witdh=50%><font class=t8><b> "+sm_br.blt+this.name + "</td></tr></table>");
	}
	else if(this.xtr.substring(1,2) == "f"){
		Vsr = eval("V" + this.pagelinx);
		//////if ( Vsr != "Normal") {FntBLRD = "<font color=#CC0000>";}else{}
document.write(t0trEd1dxx0 + t0trEd1dxx1_m + this.bltpix.blt + this.name + " <font class=a9pn>"+vrname_a+"</font></td>");
		document.write("<td width=28% bgcolor=#EBEBEB><font class=a10b><b>" + FntBLRD + ClrBLCK+ Vsr + " </b></font></td>");
		document.write("<td width=15%> </td></tr></table>");
	}

	else if(this.xtr.substring(1,2) == "p" || this.xtr.substring(1,2) == "q"){
	/////	VsrUnits = eval("V" + this.pagelinx + "nts");
	/////	smntscu = this.pagelinx + "ntscu";
	/////	smntssi = this.pagelinx + "ntssi";
		Vsrntslbl = eval("V" + this.pagelinx + "ntslbl");
document.write(t0trEd1dxx0 + t0trEd1dxx1_m + this.bltpix.blt + this.name + varSpcmn + " </font></td>");
///document.write("<td width=9%><font class=a9p><b></b></font></td>");
		document.write("<td width=28% bgcolor=#EBEBEB><font class=a11bl>" + ClrBLCK + Vsrntslbl + "</font></td>");
		document.write("<td colspan=2></td><td width=15%><font class=a9pn><font color=#000000>(" + this.nvcu_lw+")</font></td><td width=18%></td></tr></table>");
	}


	else if(this.xtr.substring(1,2) == "x"){
		document.write(t0trEd1dxx0 + "<tr><td width=40% height=8></td></tr></table>");
	}
	else{
	}
}




///////////////////////////////////////////////////////////////////////////////////////////  iPhone ends

/////////////////////////////////////////////////////////////////////////////////////////// starts cc

//////////////////////////////old color bluer #d3d9df new = E9ECEE  mqlnttaazx   blue option #1E90FF #008099  D2E4EC good ABD0E8 
function dfrbwbc_c(){
	var varAltBPixeb16 = this.DFRBWBLT(); 
if (this.xtr.substring(1,2) == "q"){
document.write("<div id="+this.pagelinx+"_div>" +smTab0 +"<tr bgcolor=#d3d9df id="+this.pagelinx+"_tr><td width=1%><img src=../../images/mc_t.gif width=1 height=26 border=0></td><td id="+this.pagelinx+"_tdp1><font class=t8g><b> ");
document.write("<textarea rows=6 cols=37 maxlength=180 readOnly=true name=v" + this.pagelinx + " onFocus='this.blur()' style='background:#f9fcff;color:#336699;font-family:helvetica,sans-serif;font-size:13px;font-weight:plain;border-top:0px solid;border-left:0px solid;border-bottom:0px solid;border-right:0px; resize:none'> ");
document.write("</textarea></td></tr></table> </div>");
 
 }else if (this.xtr.substring(1,2) == "t"){
 	 if (this.pagelinx == "bnofc123") {var tblCrvdB = "table-curvedBs"; var ccttlblt = sm_brs.blt;}else {tblCrvdB = "table-curvedB"; ccttlblt = sm_br.blt;}
document.write("<div id="+this.pagelinx+"_div><table width=100% border=0 cellspacing=1 cellpadding=1 bgcolor=#d3d9df class="+tblCrvdB+"><tr><td >");
document.write("<font class=h8b><font color=#007CFF> " + ccttlblt + this.name + "</td></tr></table> " +smTab0+"<tr><td height=2></td></tr></table></div>");
document.getElementById(this.pagelinx+"_div").style.display = "none";

}else{
  if (this.xtr.substring(2,3) == "x") {var vTxtFldmax = "6";} else if (this.xtr.substring(2,3) == "r"){vTxtFldmax = "4";} 

  if (this.xtr.substring(6,7) == "n") {var varAltrntvNm = this.name;} else {varAltrntvNm = this.name_a}
  if (this.xtr.substring(8,9) == "y") {var varSpcmn = this.DFRBWSPCMN();} else {varSpcmn = "";}
	

///////////// to change color  NOT IN USE = onmouseover=mouseOber("+this.pagelinx+"_IOpts) onmouseout=mouseOwt("+this.pagelinx+"_IOpts)
	var vdfrbwbc = "<div id="+this.pagelinx+"_div>" +smTab0+ "<tr bgcolor=#E3E9EE valign=center id="+this.pagelinx+"_tr><td width=1%><img src=../../images/mc_t.gif width=1 height=26 border=0></td>";
	var vdfrbwbc2 = "<font class=t8a><b>" + this.bltpix.blt + " " + varAltrntvNm + varSpcmn + "</td>";
	wtabapU = "<td width=42% id="+this.pagelinx+"_tdp1 valign=center class=handcursor onclick=ccSlctClr("+this.pagelinx+"_Oupts,"+this.pagelinx+"_Inpts)>"; wtabapUa = "<td width=58% valign=center>";
	if (this.xtr.substring(4,5) == "v") {wtabapU = "<td width=33% id="+this.pagelinx+"_tdp1 class=handcursor onclick=ccSlctClr("+this.pagelinx+"_Oupts,"+this.pagelinx+"_Inpts)>"; wtabapUa = "<td width=66%>";}else{}  
	if (this.xtr.substring(4,5) == "f") {wtabapU = "<td width=62% id="+this.pagelinx+"_tdp1 class=handcursor onclick=ccSlctClr("+this.pagelinx+"_Oupts,"+this.pagelinx+"_Inpts)>"; wtabapUa = "<td width=37%>";}else{}  



document.write(vdfrbwbc + wtabapU + vdfrbwbc2 + wtabapUa);
	if (this.xtr.substring(1,2) != "f"){
	document.write("<input type=text size=5 maxlength=6 name=v" + this.pagelinx + " onFocus='this.blur()' ");
	}else{
	document.write("<input type=text size=18 maxlength=18 name=v" + this.pagelinx + " onFocus='this.blur()' ");
	}
document.write("style='background:#f9fcff;color:#6699CC;font-family:tahoma,sans-serif;font-size:12px;font-weight:bold;border-radius:4px;border-top:1px solid #CCCCCC;border-left:1px solid #CCCCCC;border-bottom:1px solid #CCCCCC;border-right:1px solid #CCCCCC;'> ");
document.write("<font class=t8a>");
if (this.xtr.substring(1,2) == "a"){
document.write("<input id=v" + this.pagelinx + "cu name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntscu checked onClick='CmptFrm(this.form)'> ");
document.write(" <LABEL for=v" + this.pagelinx + "cu onMouseOver=\"this.style.color=ColorBL\" onMouseOut=\"this.style.color='003366'\">" + this.units_cu + "</LABEL>");
document.write(" <input id=v" + this.pagelinx + "si name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntssi onClick='CmptFrm(this.form)'> ");
document.write(" <LABEL for=v" + this.pagelinx + "si onMouseOver=\"this.style.color=ColorBL\" onMouseOut=\"this.style.color='003366'\">" + this.units_si + "</LABEL>");
}
if (this.xtr.substring(1,2) == "e"){
document.write(" " + this.units_cu);
}
if (this.xtr.substring(1,2) == "o" || this.xtr.substring(3,4) == "u"){
  if (this.xtr.substring(3,4) == "s"){var00px = "60";} else if (this.xtr.substring(3,4) == "l"){var00px = "75";}else if (this.xtr.substring(3,4) == "b"){var00px = "85";}else if (this.xtr.substring(3,4) == "k"){var00px = "105";}
	document.write("<select id=v" + this.pagelinx + "nm name=v" + this.pagelinx + "nts size=1 style='width:"+var00px+";background:#F3F3F3;color:#003366;font-family:tahoma;font-size:11px;font-weight:plain;border-radius:4px' onfocus=this.style.backgroundColor='#FFEE00' onblur=this.style.backgroundColor='#F3F3F3' onChange='CmptFrm(this.smnxform)'>"); 
	document.write("<option value=" + this.pagelinx + "ntscu selected> " + this.units_cu + " </option> ");
	document.write("<option value=" + this.pagelinx + "ntssi> " + this.units_si + " </option> ");
}
/////////////////document.write("</td></tr><tr bgcolor=#BBBBBB><td height=2 colspan=3></td></tr></table>");
document.write("</td></tr><tr bgcolor=#E9ECEE><td colspan=3>");
this.dfrbwbcZ();

document.write("</td></tr><tr bgcolor=#C3C3C3><td height=2 colspan=3></td></tr><tr><td height=2 colspan=3></td></tr></table> </div>");

 }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////iPHONE MOBILE
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var tabap1  =  " <table width=100% border=0 valign=top cellspacing=0 cellpadding=0 bgcolor=#D6D9DD>";
tabap1 +=  trE + "<td><table width=100% border=0 valign=top cellspacing=1 cellpadding=1 bgcolor=#E9E9E9>";
tabap1 +=  " <tr><td width=36%><font class=t8bb>"; 
var tabap2  =  "</font></td><td width=64%><font class=t8bb>";

var wtabap0_m  =  " <table width=100% border=0 valign=top cellspacing=0 cellpadding=0>";
wtabap0_m +=  "<tr bgcolor=#EEEEEE><td><table width=100% border=0 valign=top cellspacing=1 cellpadding=1><tr>";




function dfrbwmi_mc(){ 
	var chkths = this.pagelinx; 
	var varAltBPixeb16 =  this.bltpix.blt; 
var wtabapA_m = "<td width=40% id="+this.pagelinx+"_tdp1>"; var wtabapAa_m = "</td><td width=60%>";
if (this.xtr.substring(2,3) == "x") {var vTxtFldmax = "6";} else if (this.xtr.substring(2,3) == "r"){vTxtFldmax = "4";} 
	else if (this.xtr.substring(2,3) == "h"){vTxtFldmax = "3";}else {vTxtFldmax = "5";}
if (this.xtr.substring(3,4) == "l"){var var00px_m = "110";} else if (this.xtr.substring(3,4) == "s"){var00px_m = "80";}else if (this.xtr.substring(3,4) == "b"){var00px_m = "95";}else if (this.xtr.substring(3,4) == "k"){var00px_m = "105";}else if (this.xtr.substring(3,4) == "g"){var00px_m = "180";}
if (this.xtr.substring(4,5) == "v") {wtabapA_m = "<td width=36% id="+this.pagelinx+"_tdp1>"; wtabapAa_m = "</td><td width=64%>";}
	else if (this.xtr.substring(4,5) == "d") {wtabapA_m = "<td id="+this.pagelinx+"_tdp1>"; wtabapAa_m = "</td><tr><td>";}  
	else if (this.xtr.substring(4,5) == "r") {wtabapA_m = "<td id="+this.pagelinx+"_tdp1>"; wtabapAa_m = "";}else{}
if (this.xtr.substring(6,7) == "n") {var varAltrntvNm = this.name;} else {varAltrntvNm = this.name_a}
if (this.xtr.substring(8,9) == "y" || this.xtr.substring(8,9) == "m") {var varSpcmn = this.DFRBWSPCMN();} else {varSpcmn = "";}


if (this.xtr.substring(1,2) == "t"){
	 if (this.pagelinx == "bnofc123") {var tblCrvdG = "table-curvedGs"; var ccttlblt = sm_brs.blt;}else {tblCrvdG = "table-curvedG"; ccttlblt = sm_br.blt;}
document.write("<div id="+this.pagelinx+"_div>"+smTab0+"<tr><td height=1></td></tr></table><table width=100% border=0 cellspacing=1 cellpadding=1 bgcolor=#E9E9E9 class="+tblCrvdG+"><tr><td>");
document.write("<font class=h9b><font color=#007CFF>" + ccttlblt + this.name_a + "</td></tr></table> " +smTab0+"<tr><td height=2></td></tr></table></div>");
document.getElementById(this.pagelinx+"_div").style.display = "none";


}else{

//////////// table changes color
document.write("<div id="+this.pagelinx+"_div> <table width=100% border=0 valign=top cellspacing=0 cellpadding=0><tr><td><table width=100% border=0 valign=top cellspacing=1 cellpadding=1 bgcolor=#EEEEEE class=table_mcinputsp><tr id="+this.pagelinx+"_tr valign=center>");

document.write(wtabapA_m + "<font class=h15pb>");
document.write(varAltBPixeb16 + " " + varAltrntvNm + varSpcmn);
document.write(wtabapAa_m + "<font class=h14pp>");
if (this.xtr.substring(1,2) != "i" && this.xtr.substring(1,2) != "p" && this.xtr.substring(1,2) != "q"){
/////document.write("<input type=number min=0 max=999999 size=6 maxlength="+vTxtFldmax+" name=v" + this.pagelinx + " id=v" + this.pagelinx + " class='noFocusTm' style='background:#EEEEdd;color:#000000;font-family:helvetica,tahoma,sans-serif;font-size:16px;font-weight:bold;border-radius:6px; border-right:1px solid #CCCCCC;border-top:1px solid #CCCCCC;border-left:1px solid #CCCCCC;border-bottom:1px solid #CCCCCC;' "); 
document.write("<input type=text min=0 max=99999 size=5 maxlength="+vTxtFldmax+" name=v" + this.pagelinx + " id=v" + this.pagelinx + " class='noFocusTm' style='background:#EEEEdd;color:#000000;font-family:helvetica,tahoma,sans-serif;font-size:16px;font-weight:bold;border-radius:6px; border-right:1px solid #CCCCCC;border-top:1px solid #CCCCCC;border-left:1px solid #CCCCCC;border-bottom:1px solid #CCCCCC;' "); 
document.write("onFocus=\"this.style.backgroundColor='FFEE00'\" onBlur=\"this.style.backgroundColor='#EEEEE9'\"; onChange=\"check" + chkths + "(this.smnxform)\";> ");
}else {}
if (this.xtr.substring(1,2) == "a" || this.xtr.substring(1,2) == "i"){
	if (this.xtr.substring(1,2) == "a"){var vChqstFrm = "onClick=\"check" + chkths + "(this.smnxform)\"";}else{vChqstFrm ="";}
	document.write("<input id=v" + this.pagelinx + "cu name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntscu checked "+vChqstFrm+"> ");
	document.write(" <LABEL for=v" + this.pagelinx + "cu onMouseOver=\"this.style.color=ColorBL\" onMouseOut=\"this.style.color='003366'\">" + this.units_cu + "</LABEL>");
	document.write(" <input id=v" + this.pagelinx + "si name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntssi "+vChqstFrm+"> ");
	document.write(" <LABEL for=v" + this.pagelinx + "si onMouseOver=\"this.style.color=ColorBL\" onMouseOut=\"this.style.color='003366'\">" + this.units_si + "</LABEL>");
}else {}
if (this.xtr.substring(1,2) == "e"){
document.write(this.units_cu);
}else{}
if (this.xtr.substring(1,2) == "o" || this.xtr.substring(1,2) == "u"){
document.write("<select id=v" + this.pagelinx + "nm name=v" + this.pagelinx + "nts size=1 style='width:"+var00px_m+";background:#F3F3F3;color:#000000;font-family:helvetica,tahoma;font-size:15px;font-weight:plain;border-radius:4px' onfocus=this.style.backgroundColor='#FFEE00' onblur=this.style.backgroundColor='#F3F3F3' onChange=\"check" + chkths + "(this.smnxform)\" >"); 
document.write("<option value=" + this.pagelinx + "ntscu selected> " + this.units_cu + " </option>");
document.write("<option value=" + this.pagelinx + "ntssi> " + this.units_si + " </option>");

}else{}
if (this.xtr.substring(1,2) == "p"){
document.write("<select id=v" + this.pagelinx + "nm name=v" + this.pagelinx + "nts size=1 style='width:"+var00px_m+";background:#F3F3F3;color:#000000;font-family:helvetica,tahoma;font-size:14px;font-weight:plain;border-radius:4px' onfocus=this.style.backgroundColor='#FFEE00' onblur=this.style.backgroundColor='#F3F3F3' onChange=\"check" + chkths + "(this.smnxform)\" >"); 
document.write("<option value=" + this.pagelinx + "ntscu_lw selected> " + this.nvcu_lw + " </option> ");
document.write("<option value=" + this.pagelinx + "ntscu_cusi> " + this.cf_cusi + " </option> ");
document.write("<option value=" + this.pagelinx + "ntscu_si> " + this.units_si + " </option> ");
document.write("<option value=" + this.pagelinx + "ntslimcu_lw> " + this.limcu_lw + " </option> ");
	if (this.xtr.substring(2,3) == "g"){document.write("<option value=" + this.pagelinx + "ntslimcu_hgh> " + this.limcu_hgh + " </option> ");}
	if (this.xtr.substring(2,3) == "h"){document.write("<option value=" + this.pagelinx + "ntslimcu_hgh> " + this.limcu_hgh + " </option> <option value=" + this.pagelinx + "ntsnvcu_hgh> " + this.nvcu_hgh + " </option>");}
	if (this.xtr.substring(2,3) == "j"){document.write("<option value=" + this.pagelinx + "ntslimcu_hgh> " + this.limcu_hgh + " </option> <option value=" + this.pagelinx + "ntsnvcu_hgh> " + this.nvcu_hgh + " </option> <option value=" + this.pagelinx + "ntsinputz> " + this.inputz + " </option> ");}

}else{}
if (this.xtr.substring(1,2) == "q"){
document.write("<select id=v" + this.pagelinx + "nm name=v" + this.pagelinx + "nts size=1 style='width:"+var00px_m+";background:#F3F3F3;color:#000000;font-family:helvetica,tahoma;font-size:14px;font-weight:plain;border-radius:4px' onfocus=this.style.backgroundColor='#FFEE00' onblur=this.style.backgroundColor='#F3F3F3' onChange=\"check" + chkths + "(this.smnxform)\" >"); 
document.write("<option value=" + this.pagelinx + "ntscu_lw selected> " + this.nvcu_lw + " </option> ");
	if (this.xtr.substring(2,3) == "b"){document.write("<option value=" + this.pagelinx + "ntscu_cusi> " + this.cf_cusi + " </option>  ");}
	if (this.xtr.substring(2,3) == "c"){document.write("<option value=" + this.pagelinx + "ntscu_cusi> " + this.cf_cusi + " </option>  <option value=" + this.pagelinx + "ntscu_si> " + this.units_si + " </option> ");}
}else{}
document.write("</td></tr></table></td></tr>  <tr><td height=2></td></tr></table> </div>");
document.getElementById(this.pagelinx+"_div").style.display = "none";

}
}



function dfrbwbc_mc(){
	var varAltBPixeb16 = this.bltpix.blt; 
		var varAltBPixeb16 = this.bltpix.blt; 

if (this.xtr.substring(1,2) == "q"){
document.write("<div id="+this.pagelinx+"_div>" +smTab0 +"<tr bgcolor=#d3d9df id="+this.pagelinx+"_tr><td width=1%><img src=../../images/mc_t.gif width=1 height=26 border=0></td><td id="+this.pagelinx+"_tdp1><font class=t8g><b> ");
document.write("<textarea rows=6 cols=36 maxlength=180 readOnly=true name=v" + this.pagelinx + " onFocus='this.blur()' class='noFocusTm' style='background:#f9fcff;color:#336699;font-family:helvetica,sans-serif;font-size:14px;font-weight:plain;border-radius:6px;border-top:0px solid;border-left:0px solid;border-bottom:0px solid;border-right:0px; resize:none'> ");
document.write("</textarea></td></tr></table> </div>");
 
 }else if (this.xtr.substring(1,2) == "t"){
 	 if (this.pagelinx == "bnofc123") {var tblCrvdB = "table-curvedBs"; var ccttlblt = sm_brs.blt;}else {tblCrvdB = "table-curvedB"; ccttlblt = sm_br.blt;}
document.write("<div id="+this.pagelinx+"_div><table width=100% border=0 cellspacing=1 cellpadding=1 bgcolor=#d3d9df class="+tblCrvdB+"><tr><td >");
document.write("<font class=h9b><font color=#007CFF> " + ccttlblt + this.name + "</td></tr></table> " +smTab0+"<tr><td height=2></td></tr></table></div>");
document.getElementById(this.pagelinx+"_div").style.display = "none";


 }else{
  if (this.xtr.substring(2,3) == "x") {var vTxtFldmax = "6";} else if (this.xtr.substring(2,3) == "r"){vTxtFldmax = "4";} 

  if (this.xtr.substring(6,7) == "n") {var varAltrntvNm = this.name;} else {varAltrntvNm = this.name_a}
  if (this.xtr.substring(8,9) == "y") {var varSpcmn = this.DFRBWSPCMN();} else {varSpcmn = "";}


	var vdfrbwbc = "<div id="+this.pagelinx+"_div>" +smTab0 +"<tr bgcolor=#d3d9df valign=center id="+this.pagelinx+"_tr><td width=1%><img src=../../images/mc_t.gif width=1 height=36 border=0></td>";
	var vdfrbwbc2 = "<font class=h12armtb>" + varAltBPixeb16 + " " + varAltrntvNm + varSpcmn + "</td>";
	wtabapU = "<td width=42% id="+this.pagelinx+"_tdp1 valign=center class=handcursor onclick=ccSlctClr_mc("+this.pagelinx+"_Oupts,"+this.pagelinx+"_Inpts)>"; wtabapUa = "<td width=58% valign=center>";
if (this.xtr.substring(4,5) == "v") {wtabapU = "<td width=33% id="+this.pagelinx+"_tdp1 class=handcursor onclick=ccSlctClr_mc("+this.pagelinx+"_Oupts,"+this.pagelinx+"_Inpts)>"; wtabapUa = "<td width=66%>";}else{}  
if (this.xtr.substring(4,5) == "f") {wtabapU = "<td width=62% id="+this.pagelinx+"_tdp1 class=handcursor onclick=ccSlctClr_mc("+this.pagelinx+"_Oupts,"+this.pagelinx+"_Inpts)>"; wtabapUa = "<td width=37%>";}else{}  

document.write(vdfrbwbc + wtabapU + vdfrbwbc2 + wtabapUa);

/////	var vdfrbwbc = smTab1 +"<tr bgcolor=#d3d9df valign=center><td valign=center align=right><img src=../../images/mc_t.gif width=1 height=30 border=0 align=right>";
/////	var vdfrbwbc2 = "<font class=h13bbs>" + varAltBPixeb16 + " " + varAltrntvNm + varSpcmn + " ";
/////document.write(vdfrbwbc +  vdfrbwbc2 );


	if (this.xtr.substring(1,2) != "f"){
	document.write("<input type=text size=5 maxlength=6 name=v" + this.pagelinx + " onFocus='this.blur()' ");
	}else{
	document.write("<input type=text size=16 maxlength=18 name=v" + this.pagelinx + " onFocus='this.blur()' ");
	}
document.write("class='noFocusTm' style='background:#e3e9ee;color:#336699;font-family:helvetica,tahoma,sans-serif;font-size:12pt;font-weight:bold;border-radius:6px;border-top:1px solid #CCCCCC;border-left:1px solid #CCCCCC;border-bottom:1px solid #CCCCCC;border-right:1px solid #CCCCCC;'> ");
document.write("<font class=h13gb>");
if (this.xtr.substring(1,2) == "a"){
document.write("<input id=v" + this.pagelinx + "cu name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntscu checked onClick='CmptFrm(this.form)'> ");
document.write(" <LABEL for=v" + this.pagelinx + "cu onMouseOver=\"this.style.color='#3366CC'\" onMouseOut=\"this.style.color='003366'\">" + this.units_cu + "</LABEL>");
document.write(" <input id=v" + this.pagelinx + "si name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntssi onClick='CmptFrm(this.form)'> ");
document.write(" <LABEL for=v" + this.pagelinx + "si onMouseOver=\"this.style.color='#3366CC'\" onMouseOut=\"this.style.color='003366'\">" + this.units_si + "</LABEL>");
}
if (this.xtr.substring(1,2) == "e"){
document.write("</font><font class=h11b>" + this.units_cu);
}
if (this.xtr.substring(1,2) == "o" || this.xtr.substring(3,4) == "u"){
  if (this.xtr.substring(3,4) == "s"){var var00px_m = "80";} else if (this.xtr.substring(3,4) == "l"){var00px_m = "90";}else if (this.xtr.substring(3,4) == "b"){var00px_m = "100";}else if (this.xtr.substring(3,4) == "k"){var00px_m = "115";}
	document.write("<select id=v" + this.pagelinx + "nm name=v" + this.pagelinx + "nts size=1 style='width:"+var00px_m+";background:#e3e9ee;color:#000000;font-family:helvetica,tahoma;font-size:15px;font-weight:plain;border-radius:6px' onfocus=this.style.backgroundColor='#FFEE00' onblur=this.style.backgroundColor='#e3e9ee' onChange='CmptFrm(this.smnxform)'>"); 
	document.write("<option value=" + this.pagelinx + "ntscu selected> " + this.units_cu + " </option> ");
	document.write("<option value=" + this.pagelinx + "ntssi> " + this.units_si + " </option> ");
}


document.write("</td></tr><tr bgcolor=#d3d9df><td></td><td colspan=2>");
this.dfrbwbcZ_m();

document.write("</td></tr><tr  bgcolor=#e3e9ee><td height=2 colspan=3></td></tr><tr><td height=2 colspan=3></td></tr></table>  </div>");
 }
}























function dfrbpalozNOTINMC() {
FntBLRD = "<font color=#CC0000>";
		Vsr = eval("V" + this.pagelinx);
		if ( Vsr == "Normal") {FntBLRD = "<font color=#003399>";}else{}
document.write(t0trEd1dxx + this.bltpix.blt + this.name + " </font></td>");
document.write("<td width=9%><font class=a9p><b>" + this.name_a + "</b></font></td>");
		document.write("<td width=16% bgcolor=#E6E6E6><font class=a2p><b>" + FntBLRD + Vsr + "</b></font></td>");
		document.write("<td colspan=2></td>");
		document.write("<td width=14%><font class=a9p><font color=#333333>" + this.nvcu_lw+"</font></td>");
		document.write("<td width=20%><font class=a9pn>" + this.name_sp + "</font></td></tr></table>");
}



function TblInOtF(){
if (this.cf_cusi != "") 
{varLinxxCF = "<A HREF=smnx" + this.pagelinx.substring(0,2) + "/" + this.pagelinx + "_c.htm target=_self class=adv>" + this.cf_cusi + "</a>"; 
}else{varLinxxCF = this.cf_cusi;}
if (this.xtr.substring(0,1) != "i") 
{varLinxxEQ = "<A HREF=smnx" + this.pagelinx.substring(0,2) + "/" + this.pagelinx + ".htm target=_self>" + this.name_sp + "</a>"; 
var varClrbckgrd="d3d9df";}else{varLinxxEQ = this.name_sp; varClrbckgrd="EEEEDD";}
if (this.xtr.substring(1,2) == "p" || this.xtr.substring(1,2) == "q"){varLinxxCF = ""; this.cf_cusi = ""; this.units_si = ""; this.limcu_lw = ""; this.limcu_hgh = ""; }else{}
var tbliotX = " <TABLE width=100% cellspacing=1 cellpadding=2 border=0 bgcolor=#BBBBBB>";
tbliotX += "<tr bgcolor=#F6F6F6 align=center> ";
tbliotX += "<td width=18% align=left bgcolor=#" + varClrbckgrd + "><font class=t8a>" + this.name  +  " </td> ";
tbliotX += "<td width=10% align=left><font class=t8a><b>" + this.name_a  + "</b></font></td> ";
tbliotX += "<td width=7%><font class=t9a>" + this.spcmn_ +  "</td> ";
tbliotX += "<td width=8%><font class=t9a>" + this.nvcu_lw +  "</td> ";
tbliotX += "<td width=9%><font class=t9a>" + this.nvcu_hgh +  "</td> ";
tbliotX += "<td width=11% bgcolor=#FFFFFF><font class=t9a>" + this.units_cu +  "</td> ";
tbliotX += "<td width=8% bgcolor=#E6E6E6><font class=t9a>" + varLinxxCF +  "</td> ";
tbliotX += "<td width=9% bgcolor=#FFFFFF><font class=t9a>" + this.units_si +  "</td> ";
tbliotX += "<td width=20% bgcolor=#EEEEEE><font class=t8a><font color=#996633>" + varLinxxEQ +  "</td> ";
tbliotX += "</tr></table>";
document.write(tbliotX);
}

function TblInOtA(){
if (this.cf_cusi != "") 
{varLinxNm = "<A HREF=smnx" + this.pagelinx.substring(0,2) + "/" + this.pagelinx + "_c.htm target=_self class=adv>" + this.cf_cusi + "</a>"; 
}else{varLinxNm = this.cf_cusi;}

if (this.xtr.substring(0,1) == "z") {
var tblinZ = smTab12+"<tr bgcolor=#F6F6F6 align=center> ";
tblinZ += "<td align=left><font class=t8g><b>" + this.name  +sm_br.blt+ "</b></td></tr></table> ";
document.write(tblinZ);
}else {
if (this.xtr.substring(0,1) != "i") {var varClrbckgrd="d3d9df";}else{varClrbckgrd="EEEEDD";}
if (this.xtr.substring(1,2) == "p" ||this.xtr.substring(1,2) == "q"){varLinxNm = ""; this.cf_cusi = ""; this.units_si = ""; this.limcu_lw = ""; this.limcu_hgh = ""; }else{}
var tblinX = " <TABLE width=100% cellspacing=1 cellpadding=2 border=0 bgcolor=#BBBBBB>";
tblinX += "<tr bgcolor=#F6F6F6 align=center> ";
tblinX += "<td width=18% align=left bgcolor=#" + varClrbckgrd + "><font class=t8a>" + this.name  +  " </td> ";
tblinX += "<td width=11% align=left><font class=t8a><b>" + this.name_a  + "</b></font></td> ";
tblinX += "<td width=7%><font class=t9a>" + this.spcmn_ +  "</td> ";
tblinX += "<td width=8%><font class=t9a>" + this.nvcu_lw +  "</td> ";
tblinX += "<td width=9%><font class=t9a>" + this.nvcu_hgh +  "</td> ";
tblinX += "<td width=8%><font class=t9a>" + this.limcu_lw +  "</td> ";
tblinX += "<td width=9%><font class=t9a>" + this.limcu_hgh +  "</td> ";
tblinX += "<td width=11% bgcolor=#E6E6E6><font class=t9a>" + this.units_cu +  "</td> ";
tblinX += "<td width=8%><font class=t9a>" + varLinxNm +  "</td> ";
tblinX += "<td width=11% bgcolor=#E6E6E6><font class=t9a>" + this.units_si +  "</td> ";
tblinX += "</tr></table>";
document.write(tblinX);
	}
}

function TblInOtA_c(){
if (this.cf_cusi != "") 
{varLinxNm = "<A HREF=smnx" + this.pagelinx.substring(0,2) + "/" + this.pagelinx + "_c.htm target=_self class=adv>" + this.cf_cusi + "</a>"; 
}else{varLinxNm = this.cf_cusi;}

if (this.xtr.substring(0,1) == "z") {
var tblinZ =  "<div id="+this.pagelinx+"_divIO>"+smTab12+"<tr bgcolor=#F6F6F6 align=center> ";
tblinZ += "<td id="+this.pagelinx+"_trt align=left><font class=t8g><b>" + this.name  +sm_br.blt+ "</b></td></tr></table> </div> ";
document.write(tblinZ);
document.getElementById(this.pagelinx+"_divIO").style.display = "none";
}else {
if (this.xtr.substring(0,1) != "i") {var varClrbckgrd="d3d9df";}else{varClrbckgrd="EEEEDD";}
if (this.xtr.substring(1,2) == "p" ||this.xtr.substring(1,2) == "q"){varLinxNm = ""; this.cf_cusi = ""; this.units_si = ""; this.limcu_lw = ""; this.limcu_hgh = ""; }else{}
var tblinX = " <div id="+this.pagelinx+"_divIO><TABLE width=100% cellspacing=1 cellpadding=2 border=0 bgcolor=#BBBBBB>";
tblinX += "<tr bgcolor=#F6F6F6 align=center> ";
tblinX += "<td width=18% align=left bgcolor=#" + varClrbckgrd + "><font class=t8a>" + this.name  +  " </td> ";
tblinX += "<td id="+this.pagelinx+"_trt width=11% align=left><font class=t8a><b>" + this.name_a  + "</b></font></td> ";
tblinX += "<td width=7%><font class=t9a>" + this.spcmn_ +  "</td> ";
tblinX += "<td width=8%><font class=t9a>" + this.nvcu_lw +  "</td> ";
tblinX += "<td width=9%><font class=t9a>" + this.nvcu_hgh +  "</td> ";
tblinX += "<td width=8%><font class=t9a>" + this.limcu_lw +  "</td> ";
tblinX += "<td width=9%><font class=t9a>" + this.limcu_hgh +  "</td> ";
tblinX += "<td width=11% bgcolor=#E6E6E6><font class=t9a>" + this.units_cu +  "</td> ";
tblinX += "<td width=8%><font class=t9a>" + varLinxNm +  "</td> ";
tblinX += "<td width=11% bgcolor=#E6E6E6><font class=t9a>" + this.units_si +  "</td> ";
tblinX += "</tr></table> </div>  ";
document.write(tblinX);
document.getElementById(this.pagelinx+"_divIO").style.display = "none";
	}
}

///redirected from hospital folder to en to a blank page, for mCalx (same as TblInOtA_c)
function TblInOtA_fp(){
if (this.cf_cusi != "") 
{varLinxNm = "<A HREF=../en/smnx" + this.pagelinx.substring(0,2) + "/" + this.pagelinx + "_c.htm target=_blank class=adv>" + this.cf_cusi + "</a>"; 
}else{varLinxNm = this.cf_cusi;}

if (this.xtr.substring(0,1) == "z") {
var tblinZ =  "<div id="+this.pagelinx+"_divIO>"+smTab12+"<tr bgcolor=#F6F6F6 align=center> ";
tblinZ += "<td id="+this.pagelinx+"_trt align=left><font class=t8g><b>" + this.name  +sm_br.blt+ "</b></td></tr></table> </div> ";
document.write(tblinZ);
document.getElementById(this.pagelinx+"_divIO").style.display = "none";
}else {
if (this.xtr.substring(0,1) != "i") {var varClrbckgrd="d3d9df";}else{varClrbckgrd="EEEEDD";}
if (this.xtr.substring(1,2) == "p" ||this.xtr.substring(1,2) == "q"){varLinxNm = ""; this.cf_cusi = ""; this.units_si = ""; this.limcu_lw = ""; this.limcu_hgh = ""; }else{}
var tblinX = " <div id="+this.pagelinx+"_divIO><TABLE width=100% cellspacing=1 cellpadding=2 border=0 bgcolor=#BBBBBB>";
tblinX += "<tr bgcolor=#F6F6F6 align=center> ";
tblinX += "<td width=18% align=left bgcolor=#" + varClrbckgrd + "><font class=t8a>" + this.name  +  " </td> ";
tblinX += "<td id="+this.pagelinx+"_trt width=11% align=left><font class=t8a><b>" + this.name_a  + "</b></font></td> ";
tblinX += "<td width=7%><font class=t9a>" + this.spcmn_ +  "</td> ";
tblinX += "<td width=8%><font class=t9a>" + this.nvcu_lw +  "</td> ";
tblinX += "<td width=9%><font class=t9a>" + this.nvcu_hgh +  "</td> ";
tblinX += "<td width=8%><font class=t9a>" + this.limcu_lw +  "</td> ";
tblinX += "<td width=9%><font class=t9a>" + this.limcu_hgh +  "</td> ";
tblinX += "<td width=11% bgcolor=#E6E6E6><font class=t9a>" + this.units_cu +  "</td> ";
tblinX += "<td width=8%><font class=t9a>" + varLinxNm +  "</td> ";
tblinX += "<td width=11% bgcolor=#E6E6E6><font class=t9a>" + this.units_si +  "</td> ";
tblinX += "</tr></table> </div>  ";
document.write(tblinX);
document.getElementById(this.pagelinx+"_divIO").style.display = "none";
	}
}


function TblInOtB(){
if (this.pagelinx.substring(2,3) != "x") 
{varLinxxEQ = "<A HREF=smnx" + this.pagelinx.substring(0,2) + "/" + this.pagelinx + ".htm target=_self>" + this.name_sp + "</a>"; 
var varClrbckgrd="d3d9df";}else{varLinxxEQ = this.name_sp;varClrbckgrd="EEEEDD";}
if (this.pagelinx.substring(0,1) == "t"){varLinxxEQ = "";} else{}

var tbliotX = " <TABLE width=100% cellspacing=1 cellpadding=2 border=0 bgcolor=#BBBBBB>";
tbliotX += "<tr bgcolor=#F6F6F6 align=center> ";
tbliotX += "<td width=18% align=left bgcolor=#" + varClrbckgrd + "><font class=t8a>" + this.name  +  " </td> ";
tbliotX += "<td width=10% align=left><font class=t8a><b>" + this.name_a  + "</b></font></td> ";
tbliotX += "<td width=7%><font class=t9a>" + this.spcmn_ +  "</td> ";
tbliotX += "<td width=8%><font class=t9a>" + this.nvcu_lw +  "</td> ";
tbliotX += "<td width=9%><font class=t9a>" + this.nvcu_hgh +  "</td> ";
tbliotX += "<td width=11% bgcolor=#FFFFFF><font class=t9a>" + this.units_cu +  "</td> ";
tbliotX += "<td width=8% bgcolor=#E6E6E6><font class=t9a>" + this.cf_cusi +  "</td> ";
tbliotX += "<td width=9% bgcolor=#FFFFFF><font class=t9a>" + this.units_si +  "</td> ";
tbliotX += "<td width=20% bgcolor=#EEEEEE><font class=t8a><font color=#996633>" + varLinxxEQ +  "</td> ";
tbliotX += "</tr></table>";
document.write(tbliotX);
}

function ntinone(){
	if (this.pagelinx.substring(3,4) == "a") { 
	var vsmrtrnlnxz = this.SMRTRNLNX1();
		document.write(smTab0+"<tr><td><font class=v2bp>" + vsmrtrnlnxz + "</td></tr></table>");
	}else{
	var vntin = smTab0 + "<tr><td><font class=v2bp>" + this.bltpix.blt + " " + this.name; 
	vntin += " (<A HREF=smnx" + this.pagelinx.substring(0,2) + "/" + this.pagelinx + ".htm target=_self class=redol>" + this.name_a + "</a>)</td></tr></table>";
	document.write(vntin);
	}
}

function ntintwo(){
	if (this.name_a == "") {var vrname_a = "";}	else {vrname_a = this.name_a + " = ";}
	if (this.spcmn_ == "") {var vrspcmn_ = "";}	else {vrspcmn_ = this.spcmn_ + ", ";}
	if (this.xtr.substring(9,10) == "c"){var vrnts_cusi = this.units_cu;} else if(this.xtr.substring(9,10) == "s") {var vrnts_cusi = this.units_si;}
	if (this.xtr.substring(1,2) != "f") {var vrspcmn_vrnts_cusi = " ("+vrspcmn_ + vrnts_cusi+")";} else { vrspcmn_vrnts_cusi = "";}

	if (this.xtr == "zt") {this.name = ""; var vrspcmn_vrnts_cusi = ""; var vrname_a = "";}

var vntintwo = smTab0 + "<tr><td><font class=a8><font color=#003366>" + vrname_a + this.name +vrspcmn_vrnts_cusi+" </td></tr></table>";
document.write(vntintwo);
}




function dfrbucp(){
var chkths = this.pagelinx; 
var varAltrntvNm; 
if (this.xtr.substring(6,7) == "a") {varAltrntvNm=this.name_a;}else{varAltrntvNm=this.name;}
var labsarrw = " <img src=assets/labs_arrucp.gif width=20 height=12 hspace=5 vspace=0 border=0 align=baseline> ";
var tabucp7  = "<table width=100% border=0 valign=top cellspacing=1 cellpadding=1 bgcolor=#EEEEEE>" + trD;
tabucp7 += "<td width=25%><font class=h8b><b><font color=#336699> "+vParameter+": </td> ";
tabucp7 += "<td width=15%><font class=h8b><b><font color=#336699> "+vValue+": </td> ";
tabucp7 += "<td width=45%><font class=h8b><b><font color=#336699> "+vCUnits+ " " +labsarrw + " "+vSIUnits+"  </td> ";
tabucp7 += "<td width=15%><font class=h8b><b><font color=#336699>"+vCF+": </td></tr><tr><td height=10 colspan=4></td></tr>";
document.write(tabucp7);


document.write("<tr><td width=25%><font class=h10b><b><font color=#003366>" + varAltrntvNm + "</td><td width=15%>");
document.write("<input type=text size=5 maxlength=6 name=v" + this.pagelinx + " style='background:#FFFFFF;color:#333333;font-family:tahoma,sans-serif;font-size:13px;font-weight:bold;border-right:1px solid;border-top:1px solid;border-left:1px solid;border-bottom:1px solid;' "); 
document.write("onFocus=\"this.style.backgroundColor='FFEE00'\" onBlur=\"this.style.backgroundColor='FFFFFF'\"; onChange=\"check" + chkths + "(this.form)\"> ");
document.write("</td><td width=45%><font class=t8a><b>");
document.write("<input id=v" + this.pagelinx + "cu name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntscu checked> ");
document.write(" <LABEL for=v" + this.pagelinx + "cu onMouseOver=\"this.style.color='3366CC'\" onMouseOut=\"this.style.color='003366'\">" + this.units_cu + "</LABEL>");
document.write(labsarrw + " <input id=v" + this.pagelinx + "si name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntssi> ");
document.write(" <LABEL for=v" + this.pagelinx + "si onMouseOver=\"this.style.color='3366CC'\" onMouseOut=\"this.style.color='003366'\">" + this.units_si + "</LABEL>");
document.write("</td><td width=15%><font class=t8r>" + this.cf_cusi + "</td></tr><tr bgcolor=#DDDDDD><td colspan=4 height=4></td></tr></table>");
}
function dfrbucpo(){
if (this.xtr.substring(6,7) == "a") {varAltrntvNm=this.name_a;}else{varAltrntvNm=this.name;}
document.write(smTab0 + trE + "<td width=25%><font class=h10b><font color=#007CFF><b>" + this.bltpix.blt + varAltrntvNm + " </td><td width=70%>");
document.write("<input type=text size=30 maxlength=30 name=v" + this.pagelinx + "o style='background:#FFFFFF;color:#007CFF;font-family:tahoma,sans-serif;font-size:13px;font-weight:bold;border-right:1px solid;border-top:1px solid;border-left:1px solid;border-bottom:1px solid;' onFocus='blur()'\"> ");
document.write("</td><td width=5%><img src=../../images/mc_t.gif width=1 height=35 border=0></td></tr></table>");
}

function apnrmlvls(){
var nvsi_lw = Number(this.nvcu_lw * this.cf_cusi);
var nvsi_hgh = Number(this.nvcu_hgh * this.cf_cusi);
document.write(smTab0 + trD + "<td height=12><font class=t8a>"+vnlvalues+": " + this.name); 
	if (this.spcmn_ != ""){document.write(" (" + this.spcmn_ + ")");}else{}
document.write("= " +  this.nvcu_lw + " - " + this.nvcu_hgh + " " + this.units_cu + " (" + roundtd(nvsi_lw,2) );  
document.write(" - " + roundtd(nvsi_hgh,2) + " " + this.units_si + ") " + msgCF + this.cf_cusi + "</td><tr></table>"); 
	if (this.pagelinx.substring(0,1) == "t" && this.name_sp != ""){
	document.write(smTab0 + trD + "<td height=12><font class=t8a>"+vMolecularWeight+": " + this.name_sp + "</td><tr></table>"); 
	}else{}
}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////060314
////////////////////////////for Labs conversion 
function dfrbucpL(){
var chkths = this.pagelinx; 
var varAltrntvNm; 
if (this.xtr.substring(6,7) == "a") {varAltrntvNm=this.name_a;}else{varAltrntvNm=this.name;}
var labsarrw = " <img src=assets/labs_arrucp.gif width=20 height=12 hspace=5 vspace=0 border=0 align=baseline> ";
var tabucp7  = "<table width=100% border=0 valign=top cellspacing=1 cellpadding=1 bgcolor=#EEEEEE>" + trD;
tabucp7 += "<td width=25%><font class=h8b><b><font color=#336699> "+vParameter+": </td> ";
tabucp7 += "<td width=15%><font class=h8b><b><font color=#336699> "+vValue+": </td> ";
tabucp7 += "<td width=45%><font class=h8b><b><font color=#336699> "+vCUnits+ " " +labsarrw + " "+vSIUnits+"  </td> ";
tabucp7 += "<td width=15%><font class=h8b><b><font color=#336699>"+vCF+": </td></tr> <tr><td height=8 colspan=4></td></tr>";
document.write(tabucp7);

document.write("<tr><td width=25%><font class=h10b><b><font color=#003366>" + varAltrntvNm + "</td><td width=15%>");
document.write("<input type=text size=6 maxlength=6 name=v" + this.pagelinx + " style='background:#FFFFFF;color:#333333;font-family:tahoma,sans-serif;font-size:13px;font-weight:bold;border-right:1px solid;border-top:1px solid;border-left:1px solid;border-bottom:1px solid;' "); 
document.write("onFocus=\"this.style.backgroundColor='FFEE00'\" onBlur=\"this.style.backgroundColor='FFFFFF'\" > ");
document.write("</td><td width=45%><font class=t8a><b>");
document.write("<input id=v" + this.pagelinx + "cu name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntscu checked> ");
document.write(" <LABEL for=v" + this.pagelinx + "cu onMouseOver=\"this.style.color='3366CC'\" onMouseOut=\"this.style.color='003366'\">" + this.units_cu + "</LABEL>");
document.write(labsarrw + " <input id=v" + this.pagelinx + "si name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntssi> ");
document.write(" <LABEL for=v" + this.pagelinx + "si onMouseOver=\"this.style.color='3366CC'\" onMouseOut=\"this.style.color='003366'\">" + this.units_si + "</LABEL>");
document.write("</td><td width=15%><font class=t8r>" + this.cf_cusi + "</td></tr><tr bgcolor=#DDDDDD><td colspan=4 height=2></td></tr>");

if (this.xtr.substring(3,4) == "3") {
document.write("<tr><td colspan=2><img src=../../images/mc_t.gif width=1 height=20 border=0></td><td width=45%><font class=t8a>");
	if (this.inputz != ""){
	var cnvfctr3 = this.inputz;
	cnvfctr3 == roundtd(this.inputz,5)
	document.write("<input id=v" + this.pagelinx + "cuc name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntscuc> ");
	document.write(" <LABEL for=v" + this.pagelinx + "cuc onMouseOver=\"this.style.color='3366CC'\" onMouseOut=\"this.style.color='003366'\">" + this.limcu_lw + "</LABEL>");
	document.write(labsarrw);
	document.write(" <input id=v" + this.pagelinx + "sic name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntssic> ");
	document.write(" <LABEL for=v" + this.pagelinx + "sic onMouseOver=\"this.style.color='3366CC'\" onMouseOut=\"this.style.color='003366'\">" + this.limcu_hgh + "</LABEL>");
	document.write("</td><td width=15%><font class=t8r>" + cnvfctr3 + "</td></tr>");
	}else {
	document.write("</td><td width=15%><font class=t8r></td></tr>");
	}
document.write("<tr bgcolor=#DDDDDD><td colspan=4 height=2></td></tr>");
document.write("<tr><td colspan=2><img src=../../images/mc_t.gif width=1 height=20 border=0></td><td width=40%><font class=t8a>");
	if (this.name_sp != ""){
	var cnvfctr2 = Number( 1 / this.name_sp);
	cnvfctr2 = roundtd(cnvfctr2,5)
	document.write("<input id=v" + this.pagelinx + "cub name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntscub> ");
	document.write(" <LABEL for=v" + this.pagelinx + "cub onMouseOver=\"this.style.color='3366CC'\" onMouseOut=\"this.style.color='003366'\"> "+vgrams+" </LABEL>");
	document.write(labsarrw);
	document.write(" <input id=v" + this.pagelinx + "sib name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntssib> ");
	document.write(" <LABEL for=v" + this.pagelinx + "sib onMouseOver=\"this.style.color='3366CC'\" onMouseOut=\"this.style.color='003366'\"> "+vmols+" </LABEL>");
	document.write("</td><td width=15%><font class=t8r>" + cnvfctr2 + "</td></tr>");
	}else {
	}
}

document.write("</table>");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////end 060314







function dfrbucpX(){
var tcbucp1  = "<table width=100% border=0 valign=top cellspacing=1 cellpadding=1 >" + trD;
tcbucp1 += "<td width=20% height=20><font class=h9b><font color=#556677><b>"+ vQuantity+": </td> ";
tcbucp1 += "<td width=80%><font class=h9b><font color=#556677><b> "+vUnits+": </td></tr><tr><td height=10 colspan=4></td></tr>";
document.write(tcbucp1);
document.write("<tr><td width=20%>");
document.write("<input type=text size=10 maxlength=9 name=v" + this.pagelinx + " style='background:#FFFFFF;color:#333333;font-family:tahoma,sans-serif;font-size:13px;font-weight:bold;border-right:1px solid;border-top:1px solid;border-left:1px solid;border-bottom:1px solid;' "); 
document.write("onFocus=\"this.style.backgroundColor='FFEE00'\" onBlur=\"this.style.backgroundColor='FFFFFF'\"> ");
document.write("</td><td width=80%><font class=t8bb>");
document.write("<input id=v" + this.pagelinx + "cu name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntscu checked> ");
document.write(" <LABEL for=v" + this.pagelinx + "cu onMouseOver=\"this.style.color='3366CC'\" onMouseOut=\"this.style.color='003366'\">" + this.name + "</LABEL>");
document.write(" <img src=assets/labs_arrucp.gif width=20 height=12 hspace=5 vspace=0 border=0 align=baseline> ");
document.write(" <input id=v" + this.pagelinx + "si name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntssi> ");
document.write(" <LABEL for=v" + this.pagelinx + "si onMouseOver=\"this.style.color='3366CC'\" onMouseOut=\"this.style.color='003366'\">" + this.name_a + "</LABEL>");
document.write("</td></tr><tr bgcolor=#DDDDDD><td colspan=4 height=1></td></tr></table>");
}
function dfrbucpoX(){
document.write(smTab0 + trE + "<td width=20%><font class=h9b><b><font color=#007CFF>" + eb15.blt + " "+vResult+" = </td><td width=75%>");
document.write("<input type=text size=25 maxlength=25 name=v" + this.pagelinx + "o style='background:#FCFCFC;color:#3366FF;font-family:tahoma,sans-serif;font-size:13px;font-weight:bold;border-right:1px solid;border-top:1px solid;border-left:1px solid;border-bottom:1px solid;' onFocus='blur()'\"> ");
document.write("</td><td width=5%><img src=../../images/mc_t.gif width=1 height=35 border=0></td></tr></table>");
}

////////////////////////////////////iphone 
function dfrbucpX_mXXXXX(){
var tcbucp1  = "<table width=100% border=0 valign=top cellspacing=1 cellpadding=1 ><tr>";
tcbucp1 += "<td width=40%><font class=h10b><font color=#556677><b>"+ vQuantity+": </td> <td width=60%></td><tr><td width=40%>";
tcbucp1 += "<input type=number min=0 max=999999999 size=8 maxlength=12 name=v" + this.pagelinx + " style='background:#EEEEdd;color:#333333;font-family:helvetica,tahoma,sans-serif;font-size:14pt;font-weight:bold;border-right:1px solid #CCCCCC;border-top:1px solid #CCCCCC;border-left:1px solid #CCCCCC;border-bottom:1px solid #CCCCCC;' onFocus=\"this.style.backgroundColor='FFEE00'\" onBlur=\"this.style.backgroundColor='F3F3F3'\">";
document.write(tcbucp1);
document.write("</td><td width=60%><font class=h13b><b>");
document.write("<input id=v" + this.pagelinx + "cu name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntscu checked> ");
document.write(" <LABEL for=v" + this.pagelinx + "cu onMouseOver=\"this.style.color=ColorBL\" onMouseOut=\"this.style.color='003366'\">" + this.name_sp + "</LABEL>");
document.write(" <input id=v" + this.pagelinx + "si name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntssi> ");
document.write(" <LABEL for=v" + this.pagelinx + "si onMouseOver=\"this.style.color=ColorBL\" onMouseOut=\"this.style.color='003366'\">" + this.spcmn_ + "</LABEL>");
document.write("</td></tr><tr bgcolor=#D6D6D6><td colspan=2 height=1></td></tr></table>");
}
function dfrbucpoX_m(){
document.write(smTab0 + "<tr><td width=5%></td><td width=95%><font class=h10b><font color=#556677><b> "+vResult+" = </td></tr><tr><td width=5%><img src=../../images/mc_t.gif width=1 height=40 border=0></td><td width=95%>");
document.write("<input type=text size=18 maxlength=18 name=v" + this.pagelinx + "o style='background:#FCFCFC;color:#336699;font-family:helvetica,tahoma,sans-serif;font-size:14pt;font-weight:bold;border-right:1px solid #CCCCCC;border-top:1px solid #CCCCCC;border-left:1px solid #CCCCCC;border-bottom:1px solid #CCCCCC;' onFocus='blur()'\"> ");
document.write("</td></tr></table>");
}
////////////////////////////////////android
function dfrbucpX_m(){
var tcbucp1  = "<table width=100% border=0 valign=top cellspacing=1 cellpadding=1 ><tr>";
tcbucp1 += "<td width=40%><font class=h10b><font color=#556677><b>"+ vQuantity+": </td> <td width=60%></td><tr><td width=40%>";
tcbucp1 += "<input type=text min=0 max=99999999 size=8 maxlength=8 name=v" + this.pagelinx + " style='background:#EEEEdd;color:#333333;font-family:helvetica,tahoma,sans-serif;font-size:14pt;font-weight:bold;border-right:1px solid #CCCCCC;border-top:1px solid #CCCCCC;border-left:1px solid #CCCCCC;border-bottom:1px solid #CCCCCC;' onFocus=\"this.style.backgroundColor='FFEE00'\" onBlur=\"this.style.backgroundColor='F3F3F3'\">";
document.write(tcbucp1);
document.write("</td><td width=60%><font class=h13b><b>");
document.write("<input id=v" + this.pagelinx + "cu name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntscu checked> ");
document.write(" <LABEL for=v" + this.pagelinx + "cu onMouseOver=\"this.style.color=ColorBL\" onMouseOut=\"this.style.color='003366'\">" + this.name_sp + "</LABEL>");
document.write(" <input id=v" + this.pagelinx + "si name=v" + this.pagelinx + "nts type=radio value=" + this.pagelinx + "ntssi> ");
document.write(" <LABEL for=v" + this.pagelinx + "si onMouseOver=\"this.style.color=ColorBL\" onMouseOut=\"this.style.color='003366'\">" + this.spcmn_ + "</LABEL>");
document.write("</td></tr><tr bgcolor=#D6D6D6><td colspan=2 height=1></td></tr></table>");
}
function dfrbucpoX_mXXXXX(){
document.write(smTab0 + "<tr><td width=5%></td><td width=95%><font class=h10b><font color=#556677><b> "+vResult+" = </td></tr><tr><td width=5%><img src=../../images/mc_t.gif width=1 height=40 border=0></td><td width=95%>");
document.write("<input type=text size=18 maxlength=18 name=v" + this.pagelinx + "o style='background:#FCFCFC;color:#336699;font-family:helvetica,tahoma,sans-serif;font-size:14pt;font-weight:bold;border-right:1px solid #CCCCCC;border-top:1px solid #CCCCCC;border-left:1px solid #CCCCCC;border-bottom:1px solid #CCCCCC;' onFocus='blur()'\"> ");
document.write("</td></tr></table>");
}
/////////////////////////////////////////////////////fx mc////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////



function eqylapsidn(){
var eqtn_en = "<A HREF=" + this.pagelinx + ".htm class=hpb target=_self> " + this.name + "</a>";
var eqtn_e = "<A HREF=smnx" + this.pagelinx.substring(0,2) + "/" + this.pagelinx + ".htm target=_self class=hpb> "+vEq+" </a> ";
var cnvr_c = "<A HREF=smnx" + this.pagelinx.substring(0,2) + "/" + this.pagelinx + "_c.htm target=_self class=adv> "+vCn+" </a> ";
var cnvr_cn = "<A HREF=" + this.pagelinx + "_c.htm class=hpb target=_self> " + this.name + "</a>";
	var msdpp = " <TABLE width=100% border=0 cellspacing=1 cellpadding=0 bgcolor=CCCCCC><tr>";
 	msdpp += " <td width=50% bgcolor=EEEEEE align=center> <font class=t8a>" + eqtn_e + "</td>";
 	msdpp += " <td width=50% bgcolor=EEEEEE align=center> <font class=t8a>" + cnvr_c + "</td></tr></table>";

////	document.write(smTab1);
////	if (this.bltpix == eb11 ) { 
////	document.write("<tr bgcolor=#bbcccc><td><font class=v2b>&#160;" + this.bltpix.blt + this.name + " " +vEquations+" </td></tr>");
////	document.write("<tr><td height=1 bgcolor=#006666></td></tr></table>");
////	}

	document.write(smTab12);
	if (this.pagelinx.substring(3,5) == "ao" ) {     ///////////   was this.bltpix == eb12
////		document.write("<tr width=100%><td colspan=4 height=12></td></tr>" );
		document.write("<tr bgcolor=#dddddd><td width=48%><font class=v2b><b>&#160;<a name=" + this.pagelinx + ">" + this.bltpix.blt + "</a>" );
		document.write(this.name.toUpperCase() + " </td><td width=13%><font class=t8a> "+vabbrev+" </td>"); 
		document.write("<td width=29%><font class=t8a><font color=#996633>"+vEquation+"</td>");
		document.write("<td width=10%><font class=t8a><font color=#336699>"+vLinks+"<font class=t7pb><sup>1</sup></td></tr><tr><td colspan=4 height=1 bgcolor=#00788B></td></tr></table>");
	}
	else if (this.bltpix == ebx) { 
	 		if (this.cf_cusi != "" ) { 
			var ylaps17 = "<tr bgcolor=F3F3F3 valign=top width=100%><td width=48%><font class=v2p>&#160;"  + this.bltpix.blt + cnvr_cn;
			ylaps17 += "</td><td width=13%><font class=t8a>" + this.name_a + "</font></td><td colspan=2></td></tr></table> ";
			document.write(ylaps17);
			}else{}
	}
	else if (this.bltpix == ebz) { 
			var ylaps1Z = "<tr bgcolor=F3F3F3 valign=top width=100%><td width=48%><font class=v2bp>&#160;"  + this.bltpix.blt + " " +this.name;
			ylaps1Z += "</td><td width=13%><font class=t8a>" + this.name_a + "</font></td><td colspan=2></td></tr></table> ";
			document.write(ylaps1Z);
	}

	else if (this.pagelinx.substring(3,5) != "ao" || this.pagelinx.substring(3,5) != "ai") { 
 	var ylaps16 = "<tr width=100% bgcolor=F3F3F3 valign=top onmouseover=style.backgroundColor=\'B2E1FF\' onmouseout=style.backgroundColor=\'F3F3F3\'>";   /////99CCFF
	ylaps16 += "<td width=48%><font class=v2p>&#160;"  + this.bltpix.blt + eqtn_en;
	ylaps16 += "</td><td width=13%><font class=t8a>" + this.name_a + "</font></td>";
 	ylaps16 += "<td width=29%><font class=t8a><font color=#996633>"  + this.name_sp + "</td>";
 	ylaps16 += "<td width=10%>" 
	document.write(ylaps16);
		if (this.cf_cusi != "" ) { document.write(msdpp);}else{}
	document.write("</td></tr></table>");
	}



	else  { 
	}
}

function labylapsidn(){
	if (this.name_a != "") {varAbbbrvn = " (" + this.name_a + ") ";}else{varAbbbrvn = "";}

var labtn_en = "<A HREF=" + this.pagelinx + ".htm class=hpb target=_self> " + this.name + "</a>";


	document.write(smTab12);
	if (this.pagelinx.substring(3,5) == "ai" ) {     
		document.write("<tr bgcolor=#dddddd><td width=50%><font class=v2b><b>&#160;<a name=" + this.pagelinx + ">" + this.bltpix.blt + "</a>" );
		document.write(this.name.toUpperCase() + " </td><td width=12%><font class=t8a> "+vspcmn+" </td>"); 
		document.write("<td width=38%><font class=t8a><font color=#996633>"+vValues+"/"+vUnits+"</td></tr><tr><td colspan=3 height=1 bgcolor=#00788B></td></tr></table>");
	}
	else if (this.bltpix == lb16) { 
 	var ylaps16 = "<tr width=100% bgcolor=F3F3F3 valign=top onmouseover=style.backgroundColor=\'B2E1FF\' onmouseout=style.backgroundColor=\'F3F3F3\'>";    
	ylaps16 += "<td width=50%><font class=v2p>&#160;"  + this.bltpix.blt + labtn_en + "&#160;" + varAbbbrvn;
	ylaps16 += "</td><td width=12%><font class=v2b>" + this.spcmn_ + "</font></td>";
 	ylaps16 += "<td width=38%><font class=v2p>" + this.nvcu_lw + " - " + this.nvcu_hgh + " " + this.units_cu+ "</td></tr></table>";
	document.write(ylaps16);	
	}

	else if (this.bltpix == lb17) { 
 		var ylaps17 = "<tr width=100% bgcolor=F3F3F3 valign=top onmouseover=style.backgroundColor=\'B2E1FF\' onmouseout=style.backgroundColor=\'F3F3F3\'>";    
		ylaps17 += "<td width=50%><font class=v2p>&#160;"  + this.bltpix.blt + this.name + "&#160;" + varAbbbrvn;
		ylaps17 += "</td><td width=12%><font class=v2b>" + this.spcmn_ + "</font></td>";
 		ylaps17 += "<td width=38%><font class=v2p>" + this.nvcu_lw + " - " + this.nvcu_hgh + " " + this.units_cu+ "</td></tr></table>";
		document.write(ylaps17);
	}
	else if (this.bltpix == lb15) { 
 		var ylaps15 = "<tr width=100%  bgcolor=F3F3F3 valign=top><td width=50%><font class=v2p> &#160; "  + this.bltpix.blt + this.name;
		ylaps15 += "</td><td width=12%><font class=v2b>" + this.spcmn_ + "</font></td>";
 		ylaps15 += "<td width=38%><font class=v2p>" + this.nvcu_lw + " - " + this.nvcu_hgh + " " + this.units_cu+ "</td></tr></table>";
		document.write(ylaps15);
	}



	else  { 
	}
}



/////////////////////////
var smtrhvr1 = "<tr bgcolor=F6F6F6 valign=top onmouseover=style.backgroundColor=\'E0E0E0\' onmouseout=style.backgroundColor=\'F6F6F6\'>";
var smtrhvr2 = "<tr bgcolor=EEEEEE valign=top onmouseover=style.backgroundColor=\'CCDDDD\' onmouseout=style.backgroundColor=\'EEEEEE\'>";
var smtrhvr3 = "<tr bgcolor=E6E6E6 valign=top onmouseover=style.backgroundColor=\'F6F6F6\' onmouseout=style.backgroundColor=\'E6E6E6\'>";
var smmnhvr4 = "<tr bgcolor=F6F6F6 valign=top onmouseover=style.backgroundColor=\'00bfff\' onmouseout=style.backgroundColor=\'F6F6F6\'>";
var smmnhvr5 = "<tr bgcolor=F6F6F6 valign=top onmouseover=style.backgroundColor=\'E9E9E9\' onmouseout=style.backgroundColor=\'F6F6F6\'>";
var smmnhvr6 = "<tr bgcolor=EEEEEE valign=top onmouseover=style.backgroundColor=\'FFFFFF\' onmouseout=style.backgroundColor=\'EEEEEE\'>";
var smmnhvrFD = "<tr bgcolor=BBCCCC valign=top onmouseover=style.backgroundColor=\'CCDDDD\' onmouseout=style.backgroundColor=\'BBCCCC\'>";
var smmnhvrCH1 = "<tr bgcolor=D6D9Db valign=top onmouseover=style.backgroundColor=\'99CCFF\' onmouseout=style.backgroundColor=\'D6D9Db\'>";
var smmnhvrCH = "<tr bgcolor=6F7F90 valign=top onmouseover=style.backgroundColor=\'6F7F90\' onmouseout=style.backgroundColor=\'4E5965\'>";

var smmnhvrGec = "<tr bgcolor=afbfcf valign=center onmouseover=style.backgroundColor=\'99CCFF\' onmouseout=style.backgroundColor=\'afbfcf\'>";
var smmnhvrCH1c = "<tr bgcolor=D6D9Db valign=center onmouseover=style.backgroundColor=\'99CCFF\' onmouseout=style.backgroundColor=\'D6D9Db\'>";
var smmnhvrCH2c = "<tr bgcolor=EEEEEE valign=center onmouseover=style.backgroundColor=\'99CCFF\' onmouseout=style.backgroundColor=\'EEEEEE\'>";

/////////////////////////////////GALEN  9fbfcf  4993b9
var smmnhvrGa = "<tr bgcolor=9fc0d0 valign=top onmouseover=style.backgroundColor=\'99CCFF\' onmouseout=style.backgroundColor=\'9fc0d0\'>";
var smmnhvrGe = "<tr bgcolor=afbfcf valign=top onmouseover=style.backgroundColor=\'99CCFF\' onmouseout=style.backgroundColor=\'afbfcf\'>";
var smmnhvrGo = "<tr bgcolor=D6D6D6 valign=top onmouseover=style.backgroundColor=\'99CCFF\' onmouseout=style.backgroundColor=\'D6D6D6\'>";
var smmnhvrH6 = "<tr bgcolor=EEEEEE valign=top onmouseover=style.backgroundColor=\'99CCFF\' onmouseout=style.backgroundColor=\'EEEEEE\'>";


	
function fdylapsidm(){
	if (this.name_a != "") {varAbbbrvn = " (" + this.name_a + ") ";}else{varAbbbrvn = "";}

var StrngFldrLinc = "<A HREF=smnx" + this.pagelinx.substring(0,2) + "/" + this.pagelinx + ".htm class=hpb target=_self> " + this.name + "</a>";
	if (this.pagelinx.substring(3,5) == "ao") { 
			if (this.pagelinx.substring(2,3) == "x" ) { 
			document.write(smTab12 +  smmnhvr6 +"<td>");
			document.write("<font class=v10b><b>&#160;" + this.bltpix.blt + StrngFldrLinc +"</td></tr></table>");
			}else {
	document.write(smTab12 + smmnhvrFD +"<td>");
	document.write("<font class=v10b><b>&#160;" + this.bltpix.blt + "<a href=#" + this.pagelinx + " target=_self class=hpb>");
	document.write(this.name.toUpperCase() + "</a> "  + varAbbbrvn + " </td></tr></table><br>");
			}
	}
	else { 
	}
}


//////////////////////////////////////////////////////////////////////para prueba

var smTab111 = "<table width=100% border=1 valign=top cellspacing=1 cellpadding=1>";
///////////////////////////////////////////////descontinuar ???
smBR = new mdxp_o("<br>", "<br>", ebltpt, "","", "" );
sm99 =	new mdxp_o("","","",eblttx,"","sm99");
function mdxpTabd(){document.write("</td></tr></table>");}


///////////////////////////////////////////////////////ok
function SMRTRNLNX1(){
	var vsmrtrnlnx;
	if (this.pagelinx.substring(0,1) == "a" || this.pagelinx.substring(2,3) == "a") { 
		vsmrtrnlnx = this.bltpix.blt + "<A HREF=smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,4) +".htm target=_self class=hpb>" + this.name + "</a>";
	} else if (this.pagelinx.substring(3,5) == "ai") { 
		vsmrtrnlnx = this.bltpix.blt + "<A HREF=smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,2) +".htm target=_self class=hpb>" + this.name + "</a>";
	} else if (this.pagelinx.substring(3,5) == "ao") { 
		vsmrtrnlnx = this.bltpix.blt + "<A HREF=smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,2) +".htm#"+ this.pagelinx + " target=_self class=hpb>" + this.name + "</a>";
	} else { 
		vsmrtrnlnx = this.bltpix.blt + "<A HREF=smnx"+this.pagelinx.substring(0,2)+"/"+ this.pagelinx +".htm target=_self class=hpb>" + this.name + "</a>";
	} 
	return vsmrtrnlnx;
}

function SMRTRNLNX0(){
	var vsmrtrnlny;
	if (this.pagelinx.substring(0,1) == "a" || this.pagelinx.substring(2,3) == "a") { 
		vsmrtrnlny = "<A HREF=smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,4) +".htm target=_self class=redol>" + this.name + "</a>";
	} else if (this.pagelinx.substring(3,5) == "ai") { 
		vsmrtrnlny = "<A HREF=smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,2) +".htm target=_self class=redol>" + this.name + "</a>";
	} else if (this.pagelinx.substring(3,5) == "ao") { 
		vsmrtrnlny = "<A HREF=smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,2) +".htm#"+ this.pagelinx + " target=_self class=redol>" + this.name + "</a>";
	} else { 
		vsmrtrnlny = "<A HREF=smnx"+this.pagelinx.substring(0,2)+"/"+ this.pagelinx +".htm target=_self class=redol>" + this.name + "</a>";
	} 
	return vsmrtrnlny;
}

function SMRTLNXLAN(){
	var vsmrtlnxlan;
	if (this.pagelinx.substring(2,3) == "a") { 
		vsmrtlnxlan = "<A HREF=../en/smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,4) +".htm target=_self class=hpb> English </a>";
	} else if (this.pagelinx.substring(3,5) == "ai") { 
		vsmrtlnxlan = "<A HREF=../en/smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,2) +".htm target=_self class=hpb> English </a>";
	} else if (this.pagelinx.substring(3,5) == "ao") { 
		vsmrtlnxlan = "<A HREF=../en/smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,2) +".htm#"+ this.pagelinx + " target=_self class=hpb> English </a>";
	} else { 
		vsmrtlnxlan = "<A HREF=../en/smnx"+this.pagelinx.substring(0,2)+"/"+ this.pagelinx +".htm target=_self class=hpb> English </a>";
	} 
	return vsmrtlnxlan;
}

function SMRTRNLNXc(){
	var vsmrtrnlnc;
	if (this.pagelinx.substring(0,1) == "a" || this.pagelinx.substring(2,3) == "a") { 
		vsmrtrnlnc = "alt=\""+vlinkto+this.name+" "+vSection+"\" href=../smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,4) +".htm>";
	} else if (this.pagelinx.substring(3,5) == "ai") { 
		vsmrtrnlnc = "alt=\""+vlinkto+this.name+" "+vSection+"\" href=../smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,2) +".htm>";
	} else if (this.pagelinx.substring(3,5) == "ao") { 
		vsmrtrnlnc = "alt=\""+vlinkto+this.name+" "+vSection+"\" href=../smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,2) +".htm#"+ this.pagelinx + ">";
	} else if (this.pagelinx.substring(0,1) == "c") { 
		vsmrtrnlnc = "alt=\""+vlinkto+this.name+" "+vSpHnP+"\" href=../smnx"+this.pagelinx.substring(0,2)+"/"+ this.pagelinx+".htm>";
	} else { 
		vsmrtrnlnc = "alt=\""+vlinkto+this.name+"\" href=../smnx"+this.pagelinx.substring(0,2)+"/"+ this.pagelinx +".htm>";
	} 
	return vsmrtrnlnc;
}




///////////////////////////////PRUEBA/////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
function cnttbc2(){
	var vsmrtrnlnx = this.SMRTRNLNX1();
	if (this.pagelinx.substring(0,1) == "a" || this.pagelinx.substring(2,3) == "a" || this.pagelinx.substring(4,5) == "i" || this.pagelinx.substring(5,6) == "a") { 
		document.write(smTab1) 
		document.write(smtrhvr1 + "<td><font class=t8b>" + vsmrtrnlnx + "</td></tr></table>");
	} 
	else if (this.pagelinx.substring(4,5) == "o") { 
		document.write(smTab1) 
		document.write(smtrhvr2 + "<td><font class=t8b>" + vsmrtrnlnx + "</td></tr></table>");
	} 

	else {
	}
}

////////////////////////////////////////////////////////////// iPhone
function cnttbc2_m(){
	var vsmrtrnlnx = this.SMRTRNLNX1();
	if (this.pagelinx.substring(0,1) == "a" || this.pagelinx.substring(2,3) == "a" || this.pagelinx.substring(4,5) == "i") { 
		document.write("<table width=100% border=0 valign=top cellspacing=0 cellpadding=0>");
		document.write(smmnhvrH6 + "<td><font class=h14bb>" + vsmrtrnlnx + "</td></tr></table>");
	} 
	else if (this.pagelinx.substring(4,5) == "o") { 
		document.write(smTab1) 
		document.write(smmnhvrH6 + "<td><font class=h12bb>" + vsmrtrnlnx + "</td></tr></table>");
	} 

	else {
	}
}


function cnttbc4(){
	if (this.pagelinx.substring(0,1) == "x") {var vrcolrr = "d7d1c3";} else {vrcolrr = "cccccc";}
	if (this.name_a == "") {var vrname_a = "";}	else {vrname_a = this.name_a;}
	var vsmrtrnlnx = this.SMRTRNLNX1();
	if (this.pagelinx.substring(2,3) == "a" || this.pagelinx.substring(4,5) == "i") { 
		document.write(smTab1) 
		document.write("<tr bgcolor="+vrcolrr+"><td><font class=t10bb><a name=" + this.pagelinx + ">" + this.bltpix.blt + "</a> <A HREF=smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,2) +".htm target=_self class=hpb>" + this.name + "</a></td></tr></table>");
	} 
	else if (this.pagelinx.substring(4,5) == "o") { 
		document.write(smTab1) 
		document.write(smtrhvr1 + "<td><font class=t8b>" + vsmrtrnlnx + "</td></tr></table>");
	} 
	else { 
		document.write(smTab1) 
		document.write(smmnhvr6 + "<td width=70% align=left><font class=t8a>" + vsmrtrnlnx + "</td>");
		document.write("<td width=30% align=right><font class=t8a>" + vrname_a + "</td></tr></table>");
	} 

}

/////////////////////////////////////////////////////ehnp
////c+b p+pc    
var ehnpTab4 = "<table cellspacing=0 cellpading=0 border=0><tr><td height=4></td></tr></table>";
var	varbp_opn =  "<table width=100% border=0 cellspacing=1 cellpadding=0><tr bgcolor=#F6F6F6><td>";
var	varbp_cls  =  "</td></tr></table>";


function SMRTRNLNX1_ch(){
	var vsmrtrnlnx_ch;
	if (this.pagelinx.substring(5,7) == "ai") { 
		vsmrtrnlnx_ch = this.bltpix.blt + "<A HREF=smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,2) +".htm target=_self class=hpb>" + this.name + "</a>";
	} else if (this.pagelinx.substring(5,7) == "ao") { 
		vsmrtrnlnx_ch = this.bltpix.blt + "<A HREF=smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,3) +".htm target=_self class=hpb>" + this.name + "</a>";
	} else if (this.pagelinx.substring(5,7) == "ao") { 
		vsmrtrnlnx_ch = this.bltpix.blt + "<A HREF=smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,2) +".htm#"+ this.pagelinx + " target=_self class=hpb>" + this.name + "</a>";
	} else { 
		vsmrtrnlnx_ch = this.bltpix.blt + "<A HREF=smnx"+this.pagelinx.substring(0,2)+"/"+ this.pagelinx +".htm target=_self class=hpb>" + this.name + "</a>";
	} 
	return vsmrtrnlnx_ch;
}

function SMRTRNLNX0_ch(){
	var vsmrtrnlny;
	if (this.pagelinx.substring(0,1) == "a" || this.pagelinx.substring(2,3) == "a"|| this.pagelinx.substring(1,2) == "b") { 
		vsmrtrnlny = "<A HREF=smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,4) +".htm target=_self class=redol>" + this.name + "</a>";
	} else if (this.pagelinx.substring(5,7) == "ai") { 
		vsmrtrnlny = "<A HREF=smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,2) +".htm target=_self class=redol>" + this.name + "</a>";
	} else if (this.pagelinx.substring(5,7) == "ao") { 
		vsmrtrnlny = "<A HREF=smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,3) +".htm target=_self class=redol>" + this.name + "</a>";
	} else { 
		vsmrtrnlny = "<A HREF=smnx"+this.pagelinx.substring(0,2)+"/"+ this.pagelinx +".htm target=_self class=redol>" + this.name + "</a>";
	} 
	return vsmrtrnlny;
}

function cnttbc0_ch(){
	var varclstbl_ch0 = "<td width=25% align=right><font class=t8a>" + this.name_a + "</td></tr></table>";
	/////var varclstbl_ch1 = "<td width=25% align=right><font class=t8a><A HREF=galen/galen" + this.name_a + ".htm target=_self class=hpb>" + this.name_a + "</a></td></tr></table>";
	vsmrtrnlnx = "<A HREF=smnx" +this.pagelinx.substring(0,2)+ "/" + this.pagelinx +".htm target=_self class=hpb>" + this.name + "</a>";
	document.write(smTab1) 
	if (this.pagelinx.substring(0,1) == "h" || this.pagelinx.substring(0,1) == "k") { 
			if (this.pagelinx.substring(1,2) == "b") {
				document.write(smmnhvrH6 + "<td width=75% align=left><font class=t8a> &#160; <A HREF=smnx" +this.pagelinx.substring(0,2)+ "/smnx" + this.pagelinx.substring(0,4) +".htm target=_self class=hpb>" + this.name + "</a></td>" + varclstbl_ch0);
			} else if (this.pagelinx.substring(5,7) == "ai") {
				document.write(smmnhvrCH1 + "<td width=75% align=left><font class=t8bb>" + this.bltpix.blt + "<A HREF=smnx" +this.pagelinx.substring(0,2)+ "/smnx" + this.pagelinx.substring(0,2) +".htm target=_self class=hpb>" + this.name + "</a></td>" + varclstbl_ch0);
			} else if (this.pagelinx.substring(5,7) == "ao") { 
				document.write(smmnhvrH6 + "<td width=75% align=left><font class=t8a>" + this.bltpix.blt + "<A HREF=smnx" +this.pagelinx.substring(0,2)+ "/smnx" + this.pagelinx.substring(0,3) +".htm target=_self class=hpb>" + this.name + "</a></td>" + varclstbl_ch0);
			} else if (this.pagelinx.substring(5,7) == "au") { 
				document.write(smmnhvrH6 + "<td width=75% align=left><font class=t8a>&#160;&#160;" + this.bltpix.blt + "<A HREF=smnx" +this.pagelinx.substring(0,2)+ "/smnx" + this.pagelinx.substring(0,3) +".htm#" + this.pagelinx + " target=_self class=hpb>" + this.name + "</a></td>" + varclstbl_ch0);
			} else { 
				document.write(smmnhvrH6 + "<td width=75% align=left><font class=t8a><a name=" + this.pagelinx + ">" + this.bltpix.blt + "</a>" + vsmrtrnlnx + "</td>" + varclstbl_ch0);
			}
	} 
	else if (this.pagelinx.substring(5,7) == "ai") { 
		document.write("<tr bgcolor=7D8B9B><td width=75% align=left><font class=v2b><font color=eeeeee> <a name=" + this.pagelinx + ">" + this.bltpix.blt + "</a> " + this.name + " </font></td>" + varclstbl_ch0);
	} 
	else if (this.pagelinx.substring(5,7) == "ao") { 
		document.write("<tr bgcolor=D4D8DD><td width=75% align=left><font class=t8bb> <a name=" + this.pagelinx + ">" + this.bltpix.blt + "</a> " + this.name + " </td>" + varclstbl_ch0);
	} 
	else { 
		document.write(smmnhvrH6 + "<td width=75% align=left><font class=t8a>&#160; "+ this.bltpix.blt + " " + vsmrtrnlnx + "</td>" + varclstbl_ch0);
	} 
}



function cnttbc2_ch(){
	var ch_uniLink2 =  this.bltpix.blt + " <A HREF=smnx" + this.pagelinx.substring(0, 2) + "/" + this.pagelinx + ".htm class=hpb target=_self>" + this.name + "</a>";
		document.write("<TABLE WIDTH=100% align=center border=0 valign=top cellspacing=1 cellpadding=2>");
	if (this.pagelinx.substring(5,7) == "ai") { 
		document.write(smmnhvrGe + "<td><font class=v2b>" + ch_uniLink2 + "</td>");
	} 
	else if (this.pagelinx.substring(5,7) == "ao") { 
		document.write(smmnhvrH6 + "<td><font class=v2b>" + ch_uniLink2 + "</td>");
	} 
	else {
		document.write(smmnhvrH6 + "<td width=65%><font class=v2bp>" + ch_uniLink2 + "</td>");
	}
		document.write("</td><td width=35%><font class=v2bp> " + this.name_a + "</td></tr></table>"); 
}

function shnpTTLcp(){
	if (this.name_a != "") {varAbbbrvnTTL = this.name_a;}else{varAbbbrvnTTL = this.name;}
		document.write(" + " + varAbbbrvnTTL); 
}




function chaa_bjct(){
var vchaa_bjct   = "<table width=100% border=0 cellspacing=1 cellpadding=1 bgcolor=#E6E6E6><tr><td height=14>" ;
vchaa_bjct += " <font class=t8b><font color=#336699>" + this.name + "</font></font></td></tr></table> ";
document.write(vchaa_bjct);
}


function shnpFXc(){
	var ch_uniLink2 =  this.bltpix.blt + " <A HREF=smnx" + this.pagelinx.substring(0, 2) + "/smnx" + this.pagelinx.substring(0, 2) + ".htm class=hpb target=_self>" + this.name + "</a>";
	if (this.xtr.substring(4, 5) == "0") { 
	shnpFXc_mdc0 = " <font class=t8><table class=smnxtbbrdB_CH width=100%><tr><td>";
	shnpFXc_mdc0 += "<font class=t8bb>" + ch_uniLink2 + "</td></tr></table>";
 	document.write(shnpFXc_mdc0);
	}
 	else if (this.xtr.substring(4, 5) == "1") { 
	shnpFXc_mdc1   = "<tr bgcolor=#E6E6E6>" + "<td><font class=t8bb>" + ch_uniLink2 + "</td></tr></table>";
 	document.write(smTab1 + shnpFXc_mdc1);
	}
	else if (this.xtr.substring(4, 5) == "2") { 
	shnpFXc_mdc2   = " <br><font class=t8b> " + ch_uniLink2 + "</font> ";
 	document.write(shnpFXc_mdc2);
	}
	else if (this.xtr.substring(4, 5) == "3") { 
	shnpFXc_mdc3   = " <font class=t8b> " + ch_uniLink2 + "</font> ";
 	document.write(shnpFXc_mdc3);
	}

	else if (this.xtr.substring(4, 5) == "6"){
		if (this.xtr.substring(1,2) == "n") {Dspl_AbNm_FXc = this.name;}else{Dspl_AbNm_FXc = this.name_a;}	
		if (this.xtr.substring(0,1) == "a" ) {
		 	document.write("<font class=t8>" + Dspl_AbNm_FXc + ", ");
			} else {
			document.write("<font class=t8><font color=#CC3333>" + Dspl_AbNm_FXc + ", </font>");
			}	
	}
	else if (this.xtr.substring(4, 5) == "7"){

		if (this.name_sp == "") {AbbrvNmSP = ", ";}else{AbbrvNmSP = " (" +this.name_sp+ "), ";}
		if (this.xtr.substring(1,2) == "n") {Dspl_AbNm_FXc = this.name;}else{Dspl_AbNm_FXc = this.name_a;}	
		if (this.xtr.substring(0,1) == "a" ) {
		 	document.write("<font class=t8>" + Dspl_AbNm_FXc + ", ");
			} else {
			document.write("<font class=t8><font color=#CC3333>" + Dspl_AbNm_FXc + AbbrvNmSP + " </font>");
			}	
	}
	else{}
}


function shnpFXcp(){
		if (this.name_a == "") {Dspl_Nm_FXc = this.name;}else{Dspl_Nm_FXc = this.name_a;}	
		if (this.xtr.substring(1,2) == "n") {Dspl_AbNm_FXc = this.name;}else{Dspl_AbNm_FXc = this.name_a;}	

var TabLnkhp   = "<TABLE WIDTH=100% border=1 cellspacing=0 cellpadding=1>" + trE + "<td><font class=t8bb>" + this.name + "</font></td></tr></TABLE>";
var blltLnkm = "<font class=t8b>" + this.bltpix.blt + Dspl_Nm_FXc + " </font>";
   	 if (this.xtr.substring(4, 5) == "0" ) { 
	 		if (this.pagelinx.substring(0,1) == "h") { 
			document.write(TabLnkhp); 
				} else {
			document.write(ehnpTab4 + TabLnkhp);
				}
	}
	if (this.xtr.substring(4, 5) == "1" ) {
	 		if (this.pagelinx == "hcbaiai0" || this.pagelinx == "kcbaiai0") { 
			document.write(varbp_opn +  blltLnkm); 
				} else if (this.pagelinx == "hrbaiai0" || this.pagelinx == "ksbaiai0") {
			document.write(varbp_cls +  varbp_opn + blltLnkm+ varbp_cls); 
				} else if (this.pagelinx == "ktbaiai0" || this.pagelinx == "kvbaiai0" || this.pagelinx == "kgbaiai0"|| this.pagelinx == "kfbaiai0") {
			document.write(varbp_opn + blltLnkm + varbp_cls); 
				} else {
			document.write(varbp_cls + varbp_opn +  blltLnkm);
				}
	}
	if (this.xtr.substring(4, 5) == "2") {
		if (this.pagelinx.substring(0,2) == "kd" ) {
		document.write(" <img src=../../images/mc_t.gif align=baseline width=30 height=8><font class=t7b>" + Dspl_Nm_FXc + " </font>");
		}
		else { 
		document.write("<font class=t7b>" +  Dspl_Nm_FXc + " </font> ");
		}
	}
	if (this.xtr.substring(4, 5) == "3") {
	document.write("<font class=t7b>" +  Dspl_Nm_FXc + " </font> ");
	}

	if (this.xtr.substring(4, 5) == "6") {	


		if (this.xtr.substring(1,2) == "n") {Dspl_AbNm_FXc = this.name;}else{Dspl_AbNm_FXc = this.name_a;}	
		if (this.xtr.substring(0,1) == "a" ) {
		 	document.write("<font class=a1p>" + Dspl_AbNm_FXc + ", ");
			} else {
			document.write("<font class=a1p>" + ClrBLCKnRD + Dspl_AbNm_FXc + "</u>, </font>");
			}	
	}

	if (this.xtr.substring(4, 5) == "7") {	
		if (this.name_sp == "") {AbbrvNmSP = ", ";}else{AbbrvNmSP = " (" +this.name_sp+ "), ";}
		if (this.xtr.substring(1,2) == "n") {Dspl_AbNm_FXc = this.name;}else{Dspl_AbNm_FXc = this.name_a;}	
		if (this.xtr.substring(0,1) == "a" ) {
		 	document.write("<font class=a1p>" + Dspl_AbNm_FXc + ", ");
			} else {
			document.write("<font class=a1p>" + ClrBLCKnRD + Dspl_AbNm_FXc + AbbrvNmSP + "</u> </font>");
			}	
	}
}



function shnpFXbp(){
		if (this.name_a == "") {Dspl_Nm_FXc = this.name;}else{Dspl_Nm_FXc = this.name_a;}	
		if (this.xtr.substring(1,2) == "n") {Dspl_AbNm_FXc = this.name;}else{Dspl_AbNm_FXc = this.name_a;}	

var TabLnkhp   = "<TABLE WIDTH=100% border=1 cellspacing=0 cellpadding=1>" + trE + "<td><font class=t8bb>" + this.name + "</font></td></tr></TABLE>";
var blltLnkm = "<font class=t8b>" + this.bltpix.blt + Dspl_Nm_FXc + " </font>";
   	 if (this.xtr.substring(4, 5) == "0" ) { 
	 		if (this.pagelinx.substring(0,1) == "h") { 
			document.write(TabLnkhp); 
				} else {
			document.write(ehnpTab4 + TabLnkhp);
				}
	}
	else if (this.xtr.substring(4, 5) == "1" ) {
	 		if (this.pagelinx == "hcbaiai0" || this.pagelinx == "kcbaiai0") { 
			document.write(varbp_opn +  blltLnkm); 
				} else if (this.pagelinx == "hrbaiai0" || this.pagelinx == "ksbaiai0") {
			document.write(varbp_cls +  varbp_opn + blltLnkm+ varbp_cls); 
		 		} else if (this.pagelinx == "ktbaiai0" || this.pagelinx == "kvbaiai0" || this.pagelinx == "kgbaiai0"|| this.pagelinx == "kfbaiai0") {
			document.write(varbp_opn + blltLnkm + varbp_cls); 
				} else {
			document.write(varbp_cls + varbp_opn +  blltLnkm);
				}
	}
	else if (this.xtr.substring(4, 5) == "2") {
		if (this.pagelinx.substring(0,2) == "kd" ) {
		document.write(" <img src=../../images/mc_t.gif align=baseline width=30 height=8><font class=t7b>" + Dspl_Nm_FXc + " </font>");
		}
		else { 
		document.write("<br><font class=t7b>" +  Dspl_Nm_FXc + " </font> ");
		}
	}
	else if (this.xtr.substring(4, 5) == "3") {
	document.write("<font class=t7b>" +  Dspl_Nm_FXc + " </font> ");
	}

	else {	
		if (this.xtr.substring(1,2) == "n") {Dspl_AbNm_FXc = this.name;}else{Dspl_AbNm_FXc = this.name_a;}	
		if (this.xtr.substring(0,1) == "a" ) {
		 	document.write("<font class=a1p>" + Dspl_AbNm_FXc + ", ");
			} else {
			document.write("<font class=a1p>" + ClrBLCKnRD + Dspl_AbNm_FXc + "</u>, </font>");
			}	
	}

}


function shnpFXbpPAT()
{
	var finalHtml = "";

		if (this.name_a == "") {Dspl_Nm_FXc = this.name;}else{Dspl_Nm_FXc = this.name_a;}	
		if (this.xtr.substring(1,2) == "n") {Dspl_AbNm_FXc = this.name;}else{Dspl_AbNm_FXc = this.name_a;}	

	var TabLnkhpn = "<TABLE WIDTH=100% border=0 cellspacing=0 cellpadding=0 topmargin=0>";
		TabLnkhpn += "<tbody class=handcursor onclick=toggleVisibility('"+this.pagelinx+"')><tr bgcolor=#D7B5D6 valign=center><td class=rcor valign=center colspan=2 align=left bgcolor=#D3ECF7><img src=../../images/mc_t.gif border=0 width=4 height=16><font class=r9><b> <span id=" + this.pagelinx + "_nm>" + this.name + "</span></b><img src=\"../../images/sm_rcms.png\" width=\"18\" height=\"15\" border=\"0\" align=\"right\" vspace=\"2\" hspace=\"5\" id=\""+this.pagelinx+"_TTVpix\"></td></tr></tbody>";
		TabLnkhpn += "<tr><td height=6></td></tr></TABLE>";
		TabLnkhpn += "<div id="+this.pagelinx+" visible=true>";

	var blltLnkm = "<font class=t8b>" + this.bltpix.blt + "<span id=" + this.pagelinx + "_nm>" + Dspl_Nm_FXc + "</span>  </font>";
		if (this.xtr.substring(4, 5) == "0" ) { 
			if (this.pagelinx.substring(0,1) == "h") { 
			finalHtml += TabLnkhpn; 
			} else {
			finalHtml += ehnpTab4 + "</div>" + TabLnkhpn;
			}
		}
		else if (this.xtr.substring(4, 5) == "1" ) {
			if (this.pagelinx == "hcbaiai0" || this.pagelinx == "kcbaiai0") { 
			finalHtml += varbp_opn +  blltLnkm; 
				} else if (this.pagelinx == "hrbaiai0" || this.pagelinx == "ksbaiai0") {
			finalHtml += varbp_cls +  varbp_opn + blltLnkm+ varbp_cls; 
				} else if (this.pagelinx == "ktbaiai0" || this.pagelinx == "kvbaiai0" || this.pagelinx == "kgbaiai0"|| this.pagelinx == "kfbaiai0") {
			finalHtml += varbp_opn + blltLnkm + varbp_cls; 
				} else {
			finalHtml += varbp_cls + varbp_opn +  blltLnkm;
					}
		}
		else if (this.xtr.substring(4, 5) == "2") {
			if (this.pagelinx.substring(0,2) == "kd" ) {
			finalHtml += " <img src=../../images/mc_t.gif align=baseline width=30 height=8><font class=t7b> <span id=" + this.pagelinx + "_nm>" + Dspl_Nm_FXc + "</span>  </font>";
			}
			else { 
			finalHtml += "<br><font class=t7b> <span id=" + this.pagelinx + "_nm>" + Dspl_Nm_FXc + "</span> </font> ";
			}
		}
		else if (this.xtr.substring(4, 5) == "3") {
			finalHtml += "<font class=t7b> <span id=" + this.pagelinx + "_nm>" + Dspl_Nm_FXc + "</span> </font> ";
		}

		else {	
			// if (this.xtr.substring(1,2) == "n") {Dspl_AbNm_FXc = this.name;}else{Dspl_AbNm_FXc = this.name_a;}	
			if (this.xtr.substring(0,1) == "a" ) {
			finalHtml += "<font class=a1p><span id=" + this.pagelinx + "_nm>" + Dspl_Nm_FXc + "</span>, ";
			} else {
				// for symptom click Testing Start. HERE PAT! ;-)
			finalHtml += "<font class=a1p>" + ClrBLCKnRD + "<span id=" + this.pagelinx + "_nm class=handcursor pagelinx=" + this.pagelinx + " onclick=symptClick(this)>" + Dspl_AbNm_FXc + "</span>, </font>";
			}	
		}

		return finalHtml;
}

function shnpB2Clr() 
{
	if (this.xtr.substring(0,1) == "x" ) 
		document.getElementById(this.pagelinx + "_nm").style.backgroundColor = "#f6f6f6"; 
}


function idoxPNfx()
{
	var fnlHtm = "";

	if (this.name_a == "") {Dspl_Nm_FXc = this.name;}else{Dspl_Nm_FXc = this.name_a;}	
	if (this.name_a == "") {Dspl_Nm_FXC = this.name.toUpperCase();}else{Dspl_Nm_FXC = this.name_a.toUpperCase();}	
	if (this.xtr.substring(1,2) == "n") {Dspl_AbNm_FXc = this.name;}else{Dspl_AbNm_FXc = this.name_a;}	
	if (this.xtr.substring(5,6) == "s") {Dspl_ZirSq = sm_blt_zquare_.blt;}else if (this.xtr.substring(5,6) == "z") {Dspl_ZirSq = sm_blt_zircle_.blt;}else{Dspl_ZirSq = "";}	

	/////var TabLnkhp   = "<TABLE WIDTH=100% border=1 cellspacing=0 cellpadding=1>" + trE + "<td> " + this.bltpix.blt+"<font class=h13ppb><b>" + this.name_a + ":</font></td></tr></TABLE>";
	var TabLnkhp   = "<font class=aR10b><b>" + this.name_a + ":</b></font>";
	var blltLnkm = "<font class=h8b><b>" + Dspl_Nm_FXC + ": </b></font>";
	if (this.xtr.substring(4, 5) == "0" ) 
	{ 
		 if (this.pagelinx.substring(0,1) == "h") { 
			fnlHtm += hrcaiao0_pn.blt + "<br>"; 
			} else {
			fnlHtm += ehnpTab4+smTab0+"<tr><td height=2 class=smnPNtb></td></tr><tr><td>"+kbbaiao0_pn.blt+"</td></tr></table>";
			}
	}
	else if (this.xtr.substring(4, 5) == "1" ) 
	{
		 if (this.pagelinx == "hcbaiai0" || this.pagelinx == "kcbaiai0") { 
			fnlHtm += varbp_opnPN +  blltLnkm ; 
			} else if (this.pagelinx == "hrbaiai0" || this.pagelinx == "ksbaiai0") { 
			fnlHtm += varbp_cls +ehnpTab4 +   varbp_opnPN + blltLnkm+ varbp_cls; 
			 } else if (this.pagelinx == "ktbaiai0" || this.pagelinx == "kvbaiai0" || this.pagelinx == "kgbaiai0") {
			fnlHtm += ehnpTab4 + varbp_opnPN + blltLnkm + varbp_cls; 
			} else {
			fnlHtm += varbp_cls + ehnpTab4 + varbp_opnPN +  blltLnkm;
			}
	}
	else if (this.xtr.substring(4, 5) == "2") 
	{
		if (this.pagelinx.substring(0,2) == "kd" ) 
		{
			if (this.pagelinx.substring(7,8) == "5" ) { /////for BP pix plus br
				fnlHtm += "<font class=h8b>" + Dspl_Nm_FXc + ": </font> <img src=../../images/bp_dolls.png align=baseline width=84 height=15><br> &#160;  ";
			}
			else {
				fnlHtm += "<font class=h8b>" + Dspl_Nm_FXc + ": </font> <img src=../../images/mc_t.gif align=baseline width=40 height=14>";
			}
		}
		else 
		{ 
			fnlHtm += "<br><font class=h8b><b>" +  Dspl_Nm_FXc + ": </b></font> ";
		}
	}
	else if (this.xtr.substring(4, 5) == "3") 
	{
		fnlHtm += "<font class=h8b>" +  Dspl_Nm_FXc + ": </font>";
	}

	else {	
		if (this.xtr.substring(1,2) == "n") {Dspl_AbNm_FXc = this.name;}else{Dspl_AbNm_FXc = this.name_a;}	
		if (this.xtr.substring(0,1) == "a" ) {
			fnlHtm += "<font class=h75b>" + Dspl_ZirSq +" "+ Dspl_AbNm_FXc + ", ";
		} else {
			fnlHtm += "<font class=h75b>" + Dspl_ZirSq + ClrBLCKnRD + " " +Dspl_AbNm_FXc + ",</i></mark> </font>";
		}	
	}

	return fnlHtm;
}


function idoxPN_FX(){
	var fnlHtm = "";

		if (this.name_a == "") {Dspl_Nm_FXc = this.name;}else{Dspl_Nm_FXc = this.name_a;}	
		if (this.xtr.substring(1,2) == "n") {Dspl_AbNm_FXc = this.name;}else{Dspl_AbNm_FXc = this.name_a;}	
	var Dspl_pfx_FXc = "";
	if (this.xtr.substring(0,1) == "a") { if (this.xtr.substring(6,7) == "x") {Dspl_pfx_FXc = " &#160; @SM99NA@";} else if (this.xtr.substring(6,7) == "y"){Dspl_pfx_FXc = " &#160; @SM99PA@";}else if (this.xtr.substring(6,7) == "w"){Dspl_pfx_FXc = " &#160; @SM99WNLA@ ";}else if (this.xtr.substring(6,7) == "n"){Dspl_pfx_FXc = " &#160; @SM99NLA@ ";}else if (this.xtr.substring(6,7) == "o"){Dspl_pfx_FXc = "";} }	
	if (this.xtr.substring(0,1) == "x") { if (this.xtr.substring(6,7) == "x") {Dspl_pfx_FXc = " &#160; @SM99NX@";} else if (this.xtr.substring(6,7) == "y"){Dspl_pfx_FXc = " &#160; @SM99PX@";}else if (this.xtr.substring(6,7) == "w"){Dspl_pfx_FXc = " &#160; @SM99WNLX@ ";}else if (this.xtr.substring(6,7) == "n"){Dspl_pfx_FXc = " &#160; @SM99NLX@ ";}else if (this.xtr.substring(6,7) == "o"){Dspl_pfx_FXc = "";} }	
	///////to test without the verbiage
	var Dspl_pfx_FXc2 = "";
	if (this.xtr.substring(0,1) == "a") { if (this.xtr.substring(6,7) == "x") {Dspl_pfx_FXc2 = " &#160; no ";} else if (this.xtr.substring(6,7) == "y"){Dspl_pfx_FXc2 = "+";}else if (this.xtr.substring(6,7) == "w"){Dspl_pfx_FXc2 = "wnl ";}else if (this.xtr.substring(6,7) == "n"){Dspl_pfx_FXc2 = "nl ";}else if (this.xtr.substring(6,7) == "o"){Dspl_pfx_FXc2 = "";} }	
	if (this.xtr.substring(0,1) == "x") { if (this.xtr.substring(6,7) == "x") {Dspl_pfx_FXc2 = " &#160; no ";} else if (this.xtr.substring(6,7) == "y"){Dspl_pfx_FXc2 = "+";}else if (this.xtr.substring(6,7) == "w"){Dspl_pfx_FXc2 = "wnl ";}else if (this.xtr.substring(6,7) == "n"){Dspl_pfx_FXc2 = "nl ";}else if (this.xtr.substring(6,7) == "o"){Dspl_pfx_FXc2 = "";} }


	var TabLnkhpn = "<TABLE WIDTH=100% border=0 cellspacing=0 cellpadding=0 topmargin=0>";
		TabLnkhpn += "<tbody class=handcursor onclick=toggleVisibility('"+this.pagelinx+"')><tr bgcolor=#D7B5D6 valign=center><td class=rcor valign=center colspan=2 align=left bgcolor=#D3ECF7><img src=../../images/mc_t.gif border=0 width=4 height=16><font class=r11><b> <span id=" + this.pagelinx + "_nm>" + this.name_a + "</span></b><img src=\"../../images/sm_rcms.png\" width=\"18\" height=\"15\" border=\"0\" align=\"right\" vspace=\"2\" hspace=\"5\" id=\""+this.pagelinx+"_TTVpix\"></td></tr></tbody>";
		TabLnkhpn += "<tr><td height=6></td></tr></TABLE>";
		TabLnkhpn += "<div id="+this.pagelinx+" visible=true>";
	///////to test without the verbiage an193zx
	//var blltLnkm = "<font class=aidox><font color=0066FF><b> @SM99LMNT" +  this.pagelinx + "@</b></font></font><font class=aidox>: ";
	var blltLnkm = "<font class=r11><font color=0066FF><b><span id=" + this.pagelinx + "_nm>" + Dspl_Nm_FXc + "</span>: </b></font>";

	if (this.xtr.substring(4, 5) == "0" ) { 
		 	if (this.pagelinx.substring(0,1) == "h") { 
				fnlHtm += TabLnkhpn; 
			} else {
				fnlHtm += ehnpTab4 + "</div>" + TabLnkhpn;
			}
	}
	else if (this.xtr.substring(4, 5) == "1" ) {
		 	if (this.pagelinx == "hcbaiai0" || this.pagelinx == "kcbaiai0") { 
				fnlHtm += varbp_opnIDOX +  blltLnkm; 
			} 
			else if (this.pagelinx == "hrbaiai0" || this.pagelinx == "ktbaiai0") {
				fnlHtm += varbp_cls +  varbp_opnIDOX + blltLnkm+ varbp_cls; 
				///} 
				////else if (this.pagelinx == "ktbaiai0" || this.pagelinx == "kvbaiai0" || this.pagelinx == "kgbaiai0"|| this.pagelinx == "kfbaiai0") {
				////document.write(varbp_opnIDOX + blltLnkm + varbp_cls); 
			} else {
				fnlHtm += varbp_cls + varbp_opnIDOX +  blltLnkm;
			}
	}
	else if (this.xtr.substring(4, 5) == "2") {
		if (this.pagelinx.substring(0,2) == "kd" ) {
			fnlHtm += " <img src=../../images/mc_t.gif align=baseline width=30 height=8><font class=h10b><b><span id=" + this.pagelinx + "_nm>" + Dspl_Nm_FXc + "</span> </b> </font>";
		}
		else { 
			///////to test without the verbiage
			//fnlHtm += "<br><font class=aidox> <b>@SM99LMNT" +  this.pagelinx + "@</b>:  ";
			fnlHtm += "<br><font class=h10b><b> <span id=" + this.pagelinx + "_nm>" + Dspl_Nm_FXc + "</span>: </b></font> ";

		}
	}
	else if (this.xtr.substring(4, 5) == "3") {
		///////to test without the verbiage
		//fnlHtm += "<font class=aidox><b> @SM99LMNT" +  this.pagelinx + "@</b>:  ";
		fnlHtm += "<font class=h10b><b> <span id=" + this.pagelinx + "_nm>" + Dspl_Nm_FXc + "</span>: </b></font> ";

	}
		// for objects vestp
	else if (this.xtr.substring(4, 5) == "s") {
		fnlHtm += "<font class=h10b>" + Dspl_pfx_FXc2 + "<b><span id=" + this.pagelinx + "_nm>" + this.name + "</span></b><font class=h10b></font>"; //<font color=#000000> " + this.pagelinx + " </font>
	}
	///////////////////////////////////////new IDOX		
	// else {	
	// 	if (this.xtr.substring(0,1) == "a" ) {
	// 		fnlHtm += "<font class=h10b>" + Dspl_pfx_FXc2 + "<span id=" + this.pagelinx + "_nm> " + Dspl_AbNm_FXc + "</span><font class=h10b>, </font>";
	// 	} else {
	// 		fnlHtm += "<font class=h10b>" + ClrBLCKnRD_IDOX  +  Dspl_pfx_FXc2 + "<span id=" + this.pagelinx + "_nm class=handcursor pagelinx=" + this.pagelinx + " onclick=symptClick(this)> " + Dspl_AbNm_FXc + "</span><font class=h10b>, </font>";
	// 	}	
	// }

	///////////////////////////////////////new IDOX	 TEST WITH PAGELINX	
	else {	
		if (this.xtr.substring(0,1) == "a" ) {
			fnlHtm += "<font class=h10b>" + Dspl_pfx_FXc2 + "<span id=" + this.pagelinx + "_nm> " + Dspl_AbNm_FXc + "</span><font class=h10b>, </font>"; //<font color=#000000> " + this.pagelinx + " </font>
		} else {
			fnlHtm += "<font class=h10b>" + ClrBLCKnRD_IDOX  +  Dspl_pfx_FXc2 + "<span id=" + this.pagelinx + "_nm class=handcursor pagelinx=" + this.pagelinx + " onclick=symptClick(this)> " + Dspl_AbNm_FXc + "</span><font class=h10b>, </font>"; //Test <font color=#3333FF>" + this.pagelinx + " </font>
		}	
	}
	return fnlHtm;


}



function idoxHNP_FX(){
	var fnlHtm = "";

		if (this.name_a == "") {Dspl_Nm_FXc = this.name;}else{Dspl_Nm_FXc = this.name_a;}	
		if (this.xtr.substring(1,2) == "n") {Dspl_AbNm_FXc = this.name;}else{Dspl_AbNm_FXc = this.name_a;}	
	var Dspl_pfx_FXc = "";
	if (this.xtr.substring(0,1) == "a") { if (this.xtr.substring(6,7) == "x") {Dspl_pfx_FXc = " &#160; @SM99NA@";} else if (this.xtr.substring(6,7) == "y"){Dspl_pfx_FXc = " &#160; @SM99PA@";}else if (this.xtr.substring(6,7) == "w"){Dspl_pfx_FXc = " &#160; @SM99WNLA@ ";}else if (this.xtr.substring(6,7) == "n"){Dspl_pfx_FXc = " &#160; @SM99NLA@ ";}else if (this.xtr.substring(6,7) == "o"){Dspl_pfx_FXc = "";} }	
	if (this.xtr.substring(0,1) == "x") { if (this.xtr.substring(6,7) == "x") {Dspl_pfx_FXc = " &#160; @SM99NX@";} else if (this.xtr.substring(6,7) == "y"){Dspl_pfx_FXc = " &#160; @SM99PX@";}else if (this.xtr.substring(6,7) == "w"){Dspl_pfx_FXc = " &#160; @SM99WNLX@ ";}else if (this.xtr.substring(6,7) == "n"){Dspl_pfx_FXc = " &#160; @SM99NLX@ ";}else if (this.xtr.substring(6,7) == "o"){Dspl_pfx_FXc = "";} }	
	///////to test without the verbiage
	var Dspl_pfx_FXc2 = "";
	if (this.xtr.substring(0,1) == "a") { if (this.xtr.substring(6,7) == "x") {Dspl_pfx_FXc2 = " &#160; no ";} else if (this.xtr.substring(6,7) == "y"){Dspl_pfx_FXc2 = "+";}else if (this.xtr.substring(6,7) == "w"){Dspl_pfx_FXc2 = "wnl ";}else if (this.xtr.substring(6,7) == "n"){Dspl_pfx_FXc2 = "nl ";}else if (this.xtr.substring(6,7) == "o"){Dspl_pfx_FXc2 = "";} }	
	if (this.xtr.substring(0,1) == "x") { if (this.xtr.substring(6,7) == "x") {Dspl_pfx_FXc2 = " &#160; no ";} else if (this.xtr.substring(6,7) == "y"){Dspl_pfx_FXc2 = "+";}else if (this.xtr.substring(6,7) == "w"){Dspl_pfx_FXc2 = "wnl ";}else if (this.xtr.substring(6,7) == "n"){Dspl_pfx_FXc2 = "nl ";}else if (this.xtr.substring(6,7) == "o"){Dspl_pfx_FXc2 = "";} }


	var TabLnkhpn = "<TABLE WIDTH=100% border=0 cellspacing=0 cellpadding=0 topmargin=0>";
		TabLnkhpn += "<tbody class=handcursor onclick=toggleVisibility('"+this.pagelinx+"')><tr bgcolor=#D7B5D6 valign=center><td class=rcor valign=center colspan=2 align=left bgcolor=#D3ECF7><img src=../../images/mc_t.gif border=0 width=4 height=16><font class=r11><b> <span id=" + this.pagelinx + "_nm>" + this.name_a + "</span></b><img src=\"../../images/sm_rcms.png\" width=\"18\" height=\"15\" border=\"0\" align=\"right\" vspace=\"2\" hspace=\"5\" id=\""+this.pagelinx+"_TTVpix\"></td></tr></tbody>";
		TabLnkhpn += "<tr><td height=6></td></tr></TABLE>";
		TabLnkhpn += "<div id="+this.pagelinx+" visible=true>";
	///////to test without the verbiage an193zx
	//var blltLnkm = "<font class=aidox><font color=0066FF><b> @SM99LMNT" +  this.pagelinx + "@</b></font></font><font class=aidox>: ";
	var blltLnkm = "<font class=r11><font color=0066FF><b><span id=" + this.pagelinx + "_nm>" + Dspl_Nm_FXc + "</span>: </b></font>";

	if (this.xtr.substring(4, 5) == "0" ) { 
		 	if (this.pagelinx.substring(0,1) == "h") { 
				fnlHtm += TabLnkhpn; 
			} else {
				fnlHtm += ehnpTab4 + "</div>" + TabLnkhpn;
			}
	}
	else if (this.xtr.substring(4, 5) == "1" ) {
		 	if (this.pagelinx == "hcbaiai0" || this.pagelinx == "kcbaiai0") { 
				fnlHtm += varbp_opnIDOX +  blltLnkm; 
			} 
			else if (this.pagelinx == "hrbaiai0" || this.pagelinx == "ktbaiai0") {
				fnlHtm += varbp_cls +  varbp_opnIDOX + blltLnkm+ varbp_cls; 
				///} 
				////else if (this.pagelinx == "ktbaiai0" || this.pagelinx == "kvbaiai0" || this.pagelinx == "kgbaiai0"|| this.pagelinx == "kfbaiai0") {
				////document.write(varbp_opnIDOX + blltLnkm + varbp_cls); 
			} else {
				fnlHtm += varbp_cls + varbp_opnIDOX +  blltLnkm;
			}
	}
	else if (this.xtr.substring(4, 5) == "2") {
		if (this.pagelinx.substring(0,2) == "kd" ) {
			fnlHtm += " <img src=../../images/mc_t.gif align=baseline width=30 height=8><font class=h10b><b><span id=" + this.pagelinx + "_nm>" + Dspl_Nm_FXc + "</span> </b> </font>";
		}
		else { 
			///////to test without the verbiage
			//fnlHtm += "<br><font class=aidox> <b>@SM99LMNT" +  this.pagelinx + "@</b>:  ";
			fnlHtm += "<br><font class=h10b><b> <span id=" + this.pagelinx + "_nm>" + Dspl_Nm_FXc + "</span>: </b></font> ";

		}
	}
	else if (this.xtr.substring(4, 5) == "3") {
		///////to test without the verbiage
		//fnlHtm += "<font class=aidox><b> @SM99LMNT" +  this.pagelinx + "@</b>:  ";
		fnlHtm += "<font class=h10b><b> <span id=" + this.pagelinx + "_nm>" + Dspl_Nm_FXc + "</span>: </b></font> ";

	}

	///////////////////////////////////////new IDOX		
	else {	
		if (this.xtr.substring(0,1) == "a" ) {
			fnlHtm += "<font class=h10b>" + Dspl_pfx_FXc2 + "<span id=" + this.pagelinx + "_nm> " + Dspl_AbNm_FXc + "</span><font class=h10b>, </font>";
		} else {
			fnlHtm += "<font class=h10b>" + ClrBLCKnRD_IDOX  +  Dspl_pfx_FXc2 + "<span id=" + this.pagelinx + "_nm class=handcursor pagelinx=" + this.pagelinx + " onclick=symptClick(this)>" + Dspl_AbNm_FXc + "</span><font class=h10b>, </font>";
		}	
	}
	return fnlHtm;

}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///FOR H&P with methods for IDOX and EPIC
function idoxHNP_FX_ORIGINAL(){
	var fnlHtm = "";

	if (this.name_a == "") {Dspl_Nm_FXc = this.name;}else{Dspl_Nm_FXc = this.name_a;}	
	if (this.xtr.substring(1,2) == "n") {Dspl_AbNm_FXc = this.name;}else{Dspl_AbNm_FXc = this.name_a;}	
	var Dspl_pfx_FXc = "";
	if (this.xtr.substring(0,1) == "a") { if (this.xtr.substring(6,7) == "x") {Dspl_pfx_FXc = " &#160; @SM99NA@";} else if (this.xtr.substring(6,7) == "y"){Dspl_pfx_FXc = " &#160; @SM99PA@";}else if (this.xtr.substring(6,7) == "w"){Dspl_pfx_FXc = " &#160; @SM99WNLA@ ";}else if (this.xtr.substring(6,7) == "n"){Dspl_pfx_FXc = " &#160; @SM99NLA@ ";}else if (this.xtr.substring(6,7) == "o"){Dspl_pfx_FXc = "";} }	
	if (this.xtr.substring(0,1) == "x") { if (this.xtr.substring(6,7) == "x") {Dspl_pfx_FXc = " &#160; @SM99NX@";} else if (this.xtr.substring(6,7) == "y"){Dspl_pfx_FXc = " &#160; @SM99PX@";}else if (this.xtr.substring(6,7) == "w"){Dspl_pfx_FXc = " &#160; @SM99WNLX@ ";}else if (this.xtr.substring(6,7) == "n"){Dspl_pfx_FXc = " &#160; @SM99NLX@ ";}else if (this.xtr.substring(6,7) == "o"){Dspl_pfx_FXc = "";} }	
	///////to test without the verbiage
	var Dspl_pfx_FXc2 = "";
	if (this.xtr.substring(0,1) == "a") { if (this.xtr.substring(6,7) == "x") {Dspl_pfx_FXc2 = " &#160; no ";} else if (this.xtr.substring(6,7) == "y"){Dspl_pfx_FXc2 = "+";}else if (this.xtr.substring(6,7) == "w"){Dspl_pfx_FXc2 = "wnl ";}else if (this.xtr.substring(6,7) == "n"){Dspl_pfx_FXc2 = "nl ";}else if (this.xtr.substring(6,7) == "o"){Dspl_pfx_FXc2 = "";} }	
	if (this.xtr.substring(0,1) == "x") { if (this.xtr.substring(6,7) == "x") {Dspl_pfx_FXc2 = " &#160; no ";} else if (this.xtr.substring(6,7) == "y"){Dspl_pfx_FXc2 = "+";}else if (this.xtr.substring(6,7) == "w"){Dspl_pfx_FXc2 = "wnl ";}else if (this.xtr.substring(6,7) == "n"){Dspl_pfx_FXc2 = "nl ";}else if (this.xtr.substring(6,7) == "o"){Dspl_pfx_FXc2 = "";} }


	var TabLnkhp   = "<TABLE WIDTH=100% border=0 cellspacing=0 cellpadding=0><tr><td><font class=r>" + this.name.toUpperCase() + "</font></td></tr></TABLE>";
	///////to test without the verbiage
	//var blltLnkm = "<font class=aidox><font color=0066FF><b> @SM99LMNT" +  this.pagelinx + "@</b></font></font><font class=aidox>: ";
	var blltLnkm = "<font class=aidox><font color=0066FF><b>" +  this.name_a + "</b></font></font><font class=aidox>: ";

	if (this.xtr.substring(4, 5) == "0" ) { 
		 	if (this.pagelinx.substring(0,1) == "h") { 
				fnlHtm += TabLnkhp; 
			} else {
				fnlHtm += ehnpTab4 + TabLnkhp;
			}
	}
	else if (this.xtr.substring(4, 5) == "1" ) {
		 	if (this.pagelinx == "hcbaiai0" || this.pagelinx == "kcbaiai0") { 
				fnlHtm += varbp_opnIDOX +  blltLnkm; 
			} 
			else if (this.pagelinx == "hrbaiai0" || this.pagelinx == "ktbaiai0") {
				fnlHtm += varbp_cls +  varbp_opnIDOX + blltLnkm+ varbp_cls; 
				///} 
				////else if (this.pagelinx == "ktbaiai0" || this.pagelinx == "kvbaiai0" || this.pagelinx == "kgbaiai0"|| this.pagelinx == "kfbaiai0") {
				////document.write(varbp_opnIDOX + blltLnkm + varbp_cls); 
			} else {
				fnlHtm += varbp_cls + varbp_opnIDOX +  blltLnkm;
			}
	}
	else if (this.xtr.substring(4, 5) == "2") {
		if (this.pagelinx.substring(0,2) == "kd" ) {
			fnlHtm += " <img src=../../images/mc_t.gif align=baseline width=30 height=8><font class=aidox>" + Dspl_Nm_FXc + "</font>";
		}
		else { 
			///////to test without the verbiage
			//fnlHtm += "<br><font class=aidox> <b>@SM99LMNT" +  this.pagelinx + "@</b>:  ";
			fnlHtm += "<br><font class=aidox> <b>" +  this.name_a + "</b>:  ";

		}
	}
	else if (this.xtr.substring(4, 5) == "3") {
		///////to test without the verbiage
		//fnlHtm += "<font class=aidox><b> @SM99LMNT" +  this.pagelinx + "@</b>:  ";
		fnlHtm += "<br><font class=aidox> <b>" +  this.name_a + "</b>:  ";

	}

	////else {	
	////	if (this.xtr.substring(1,2) == "n") {Dspl_AbNm_FXc = this.name;}else{Dspl_AbNm_FXc = this.name_a;}	
	////	if (this.xtr.substring(0,1) == "a" ) {
	////	 	document.write("<font class=aidox>" + Dspl_AbNm_FXc + "<font class=aidox>,</font> ");
	////		} else {
	////		document.write("<font class=aidox> &#160; " + ClrBLCKnRD + "@SM99YN@" + Dspl_AbNm_FXc + "</u></font><font class=aidox>,</font> ");
	////		}	
	////}

	///////////////////////////////////////new IDOX		
	else {	
		if (this.xtr.substring(0,1) == "a" ) {
			fnlHtm += "<font class=aidox>" + Dspl_pfx_FXc2 + Dspl_AbNm_FXc + "</font></font><font class=aidox>, </font>";
		} else {
			fnlHtm += "<font class=aidox>" + ClrBLCKnRD_IDOX  + Dspl_pfx_FXc2 + Dspl_AbNm_FXc + "</u></font></font><font class=aidox>, </font>";
		}	
	}
	return fnlHtm;

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///END  H&P with methods for IDOX and EPIC



/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////For META
function syntDZP_ssPAT(){

	var finalHtml = "";

	if (this.name_a == "") {Dspl_Nm_FXc = this.name;}else{Dspl_Nm_FXc = this.name_a;}	
	if (this.xtr.substring(1,2) == "n") {Dspl_AbNm_FXc = this.name;}else{Dspl_AbNm_FXc = this.name_a;}	

	var TabLnkhp   = trD+"<td><font class=h13ppb>" + this.bltpix.blt + " <b>" + this.name_a + "</b></font></td><td></td></tr>";

	if (this.xtr.substring(4, 5) == "0" )
	{ 
		finalHtml += TabLnkhp; 
	}
	else
	{	
		finalHtml += "<tr id="+this.pagelinx+"_synDZtbl><td><font class=r10>" + this.bltpix.blt + " " + Dspl_AbNm_FXc + "</td> <td></td></tr> ";
	}

	return finalHtml;
}

/////////////////////////////////////////////////////////////////////////////end META






////////////////////////////////////////////////////////////////// IDOX FOR EHR kkdaoao0
////////////////////////////////////////////////////////////////// IDOX FOR EHR  
////////////////////////////////////////////////////////////////// IDOX FOR EHR  
////////////////////////////////////////////////////////////////// IDOX FOR EHR  

///////////////////////////////////////////// kkdhcdb7 = new mdxp_o("crackles","",mdc6,"fine, coarse, rales","xn197zx","kkdhcdb7");	
var	varbp_opnIDOX =  "<table width=100% border=0 cellspacing=1 cellpadding=0><tr bgcolor=#F6F6F6><td>";

/////////////////////////////////////////////  <font color=0076bc>
var ClrBLCKnRD_IDOX = "<font color=#FF0000>";

function shnpFXbpIDOX(){
		if (this.name_a == "") {Dspl_Nm_FXc = this.name;}else{Dspl_Nm_FXc = this.name_a;}	
		if (this.xtr.substring(1,2) == "n") {Dspl_AbNm_FXc = this.name;}else{Dspl_AbNm_FXc = this.name_a;}	
		var Dspl_pfx_FXc = "";
		if (this.xtr.substring(0,1) == "a") { if (this.xtr.substring(6,7) == "x") {Dspl_pfx_FXc = " &#160; @SM99NA@";} else if (this.xtr.substring(6,7) == "y"){Dspl_pfx_FXc = " &#160; @SM99PA@";}else if (this.xtr.substring(6,7) == "w"){Dspl_pfx_FXc = " &#160; @SM99WNLA@ ";}else if (this.xtr.substring(6,7) == "n"){Dspl_pfx_FXc = " &#160; @SM99NLA@ ";}else if (this.xtr.substring(6,7) == "o"){Dspl_pfx_FXc = "";} }	
		if (this.xtr.substring(0,1) == "x") { if (this.xtr.substring(6,7) == "x") {Dspl_pfx_FXc = " &#160; @SM99NX@";} else if (this.xtr.substring(6,7) == "y"){Dspl_pfx_FXc = " &#160; @SM99PX@";}else if (this.xtr.substring(6,7) == "w"){Dspl_pfx_FXc = " &#160; @SM99WNLX@ ";}else if (this.xtr.substring(6,7) == "n"){Dspl_pfx_FXc = " &#160; @SM99NLX@ ";}else if (this.xtr.substring(6,7) == "o"){Dspl_pfx_FXc = "";} }	
		///////to test without the verbiage
		var Dspl_pfx_FXc2 = "";
		if (this.xtr.substring(0,1) == "a") { if (this.xtr.substring(6,7) == "x") {Dspl_pfx_FXc2 = " &#160; no ";} else if (this.xtr.substring(6,7) == "y"){Dspl_pfx_FXc2 = "+";}else if (this.xtr.substring(6,7) == "w"){Dspl_pfx_FXc2 = "wnl ";}else if (this.xtr.substring(6,7) == "n"){Dspl_pfx_FXc2 = "nl ";}else if (this.xtr.substring(6,7) == "o"){Dspl_pfx_FXc2 = "";} }	
		if (this.xtr.substring(0,1) == "x") { if (this.xtr.substring(6,7) == "x") {Dspl_pfx_FXc2 = " &#160; no ";} else if (this.xtr.substring(6,7) == "y"){Dspl_pfx_FXc2 = "+";}else if (this.xtr.substring(6,7) == "w"){Dspl_pfx_FXc2 = "wnl ";}else if (this.xtr.substring(6,7) == "n"){Dspl_pfx_FXc2 = "nl ";}else if (this.xtr.substring(6,7) == "o"){Dspl_pfx_FXc2 = "";} }


var TabLnkhp   = "<TABLE WIDTH=100% border=1 cellspacing=0 cellpadding=1>" + trE + "<td><font class=v2b>" + this.name.toUpperCase() + "</font></td></tr></TABLE>";
var blltLnkm = "<font class=aidox><font color=0066FF><b> @SM99LMNT" +  this.pagelinx + "@</b></font></font><font class=aidox>: ";
   	 if (this.xtr.substring(4, 5) == "0" ) { 
	 		if (this.pagelinx.substring(0,1) == "h") { 
			document.write(TabLnkhp); 
				} else {
			document.write(ehnpTab4 + TabLnkhp);
				}
	}
	else if (this.xtr.substring(4, 5) == "1" ) {
	 		if (this.pagelinx == "hcbaiai0" || this.pagelinx == "kcbaiai0") { 
			document.write(varbp_opnIDOX +  blltLnkm); 
				} 
				else if (this.pagelinx == "hrbaiai0" || this.pagelinx == "ktbaiai0") {
			document.write(varbp_cls +  varbp_opnIDOX + blltLnkm+ varbp_cls); 
		 		///} 
				////else if (this.pagelinx == "ktbaiai0" || this.pagelinx == "kvbaiai0" || this.pagelinx == "kgbaiai0"|| this.pagelinx == "kfbaiai0") {
			////document.write(varbp_opnIDOX + blltLnkm + varbp_cls); 
				} else {
			document.write(varbp_cls + varbp_opnIDOX +  blltLnkm);
				}
	}
	else if (this.xtr.substring(4, 5) == "2") {
		if (this.pagelinx.substring(0,2) == "kd" ) {
		document.write(" <img src=../../images/mc_t.gif align=baseline width=30 height=8><font class=aidox>" + Dspl_Nm_FXc + "</font>");
		}
		else { 
		document.write("<br><font class=aidox> <b>@SM99LMNT" +  this.pagelinx + "@</b>:  ");
		}
	}
	else if (this.xtr.substring(4, 5) == "3") {
	document.write("<font class=aidox><b> @SM99LMNT" +  this.pagelinx + "@</b>:  ");
	}

	////else {	
	////	if (this.xtr.substring(1,2) == "n") {Dspl_AbNm_FXc = this.name;}else{Dspl_AbNm_FXc = this.name_a;}	
	////	if (this.xtr.substring(0,1) == "a" ) {
	////	 	document.write("<font class=aidox>" + Dspl_AbNm_FXc + "<font class=aidox>,</font> ");
	////		} else {
	////		document.write("<font class=aidox> &#160; " + ClrBLCKnRD + "@SM99YN@" + Dspl_AbNm_FXc + "</u></font><font class=aidox>,</font> ");
	////		}	
	////}

	///////////////////////////////////////new IDOX		
	else {	
	
		if (this.xtr.substring(0,1) == "a" ) {
		 	document.write("<font class=aidox>" + Dspl_pfx_FXc + Dspl_AbNm_FXc + "</font></font><font class=aidox>, </font>");
			} else {
			document.write("<font class=aidox>" + ClrBLCKnRD_IDOX  + Dspl_pfx_FXc + Dspl_AbNm_FXc + "</u></font></font><font class=aidox>, </font>");
			}	
	}

}









///////////////////////////////////////////////////progress note cloud 
///////////////////////////////////////////////////////////////////////////////////////

var	varbp_opnPNt = "<table width=100% border=0 cellspacing=1 cellpadding=0><tr bgcolor=#F6F6F6><td class=smnPNt>";
var	varbp_opnPN =  "<table width=100% border=0 cellspacing=1 cellpadding=0><tr bgcolor=#F6F6F6><td class=smnPN>";
var	varbp_cls  =  "</td></tr></table>";
var	varbp_clsBR =  "</td></tr><tr><td height=12></td></tr></table>";

/////////////OK to enumerate DX
function shnpDXLpn(){
	var shnps_ICD = eval(this.pagelinx + "_icd"); 

	if (this.name_a != "") {varAbbbrvnTTL = this.name_a;}else{varAbbbrvnTTL = this.name;}
	if (this.xtr.substring(0,1) == "a") {varPOA = sm_blt_zircle_.blt + " POA. ";}else{varPOA = "";}

		document.write(varbp_opnPNt+"<font class=h9b><b>" + varAbbbrvnTTL + " - </b></font><font class=h8b>  <br>&#160; &#160; "+varPOA + shnps_ICD.join( "<br>" )+"</font>"+varbp_clsBR); 
}





function shnpFXpn(){
		if (this.name_a == "") {Dspl_Nm_FXc = this.name;}else{Dspl_Nm_FXc = this.name_a;}	
		if (this.name_a == "") {Dspl_Nm_FXC = this.name.toUpperCase();}else{Dspl_Nm_FXC = this.name_a.toUpperCase();}	
		if (this.xtr.substring(1,2) == "n") {Dspl_AbNm_FXc = this.name;}else{Dspl_AbNm_FXc = this.name_a;}	
		if (this.xtr.substring(5,6) == "s") {Dspl_ZirSq = sm_blt_zquare_.blt;}else if (this.xtr.substring(5,6) == "z") {Dspl_ZirSq = sm_blt_zircle_.blt;}else{Dspl_ZirSq = "";}	

/////var TabLnkhp   = "<TABLE WIDTH=100% border=1 cellspacing=0 cellpadding=1>" + trE + "<td> " + this.bltpix.blt+"<font class=h13ppb><b>" + this.name_a + ":</font></td></tr></TABLE>";
var TabLnkhp   = "<font class=aR10b><b>" + this.name_a + ":</b></font>";
var blltLnkm = "<font class=h8b><b>" + Dspl_Nm_FXC + ": </b></font>";
   	 if (this.xtr.substring(4, 5) == "0" ) { 
	 		if (this.pagelinx.substring(0,1) == "h") { 
			document.write(hrcaiao0_pn.blt + "<br>"); 
				} else {
			document.write(ehnpTab4+smTab0+"<tr><td height=2 class=smnPNtb></td></tr><tr><td>"+kbbaiao0_pn.blt+"</td></tr></table>");
				}
	}
	else if (this.xtr.substring(4, 5) == "1" ) {
	 		if (this.pagelinx == "hcbaiai0" || this.pagelinx == "kcbaiai0") { 
			document.write(varbp_opnPN +  blltLnkm ); 
				} else if (this.pagelinx == "hrbaiai0" || this.pagelinx == "ksbaiai0") { 
			document.write(varbp_cls +ehnpTab4 +   varbp_opnPN + blltLnkm+ varbp_cls); 
		 		} else if (this.pagelinx == "ktbaiai0" || this.pagelinx == "kvbaiai0" || this.pagelinx == "kgbaiai0") {
			document.write(ehnpTab4 + varbp_opnPN + blltLnkm + varbp_cls); 
				} else {
			document.write(varbp_cls + ehnpTab4 + varbp_opnPN +  blltLnkm);
				}
	}
	else if (this.xtr.substring(4, 5) == "2") {
		if (this.pagelinx.substring(0,2) == "kd" ) {
				if (this.pagelinx.substring(7,8) == "5" ) { /////for BP pix plus br
				document.write("<font class=h8b>" + Dspl_Nm_FXc + ": </font> <img src=../../images/bp_dolls.png align=baseline width=84 height=15><br> &#160;  ");
				}
				else {
				document.write("<font class=h8b>" + Dspl_Nm_FXc + ": </font> <img src=../../images/mc_t.gif align=baseline width=40 height=14>");
				}
		}
		else { 
		document.write("<br><font class=h8b><b>" +  Dspl_Nm_FXc + ": </b></font> ");
		}
	}
	else if (this.xtr.substring(4, 5) == "3") {
	document.write("<font class=h8b>" +  Dspl_Nm_FXc + ": </font>");
	}

	else {	
		if (this.xtr.substring(1,2) == "n") {Dspl_AbNm_FXc = this.name;}else{Dspl_AbNm_FXc = this.name_a;}	
		if (this.xtr.substring(0,1) == "a" ) {
		 	document.write("<font class=h75b>" + Dspl_ZirSq +" "+ Dspl_AbNm_FXc + ", ");
			} else {
			document.write("<font class=h75b>" + Dspl_ZirSq + ClrBLCKnRD + " " +Dspl_AbNm_FXc + ",</i></mark> </font>");
			}	
	}

}


////////////////////////////////////////// print calcs to PN cloud 

sm_arr_pn_d = new bltpix("<img src=../../images/sm_arr_pn_d.png align=baseline width=6 height=8 border=0>");
sm_arr_pn_u = new bltpix("<img src=../../images/sm_arr_pn_u.png align=baseline width=6 height=8 border=0>");

function dfrbpalPN() {
if (this.xtr.substring(0,1) == "o" || this.xtr.substring(0,1) == "m"){var vTDzPN1 = "62"; var vTDzPN2 = "38";} else {var vTDzPN1 = "56"; var vTDzPN2 = "44";}
t0trEd1dxx1 = "<tr bgcolor=#F6F6F6 valign=center><td width=56% valign=center><font class=h8b>";
var vRTnoD1 = "1"; var vRTnoD2 = "1"
if (this.xtr.substring(2,3) == "w") {var vRTnoD1 = "2"; var vRTnoD2 = "3"} else {}
if (this.xtr.substring(2,3) == "u") {var vRTnoD1 = "3"; var vRTnoD2 = "2"} else {}
if (this.xtr.substring(7,8) == "a") {var FntNRML = "<font class=h8b>";}  else if (this.xtr.substring(7,8) == "n") {FntNRML = "<font class=h7b>";}else{}
if (this.spcmn_ == "") {var varSpcmn = ""; } else if (this.spcmn_ == "S") {var varSpcmn = "";} else {var varSpcmn = " " + this.spcmn_ + "";}

if (this.xtr.substring(0,1) == "o" || this.xtr.substring(0,1) == "m"){ var vbltpics = this.bltpix.blt;}else{vbltpics = "";}
FntBP = "<b>";
FntBLRD = "<font color=#003399>";
ArrowNLABNL = "";
	if (this.xtr.substring(1,2) == "a" || this.xtr.substring(1,2) == "o"){
		Vsr = eval("V" + this.pagelinx);
		VsrUnits = eval("V" + this.pagelinx + "nts");
		smntscu = this.pagelinx + "ntscu";
		smntssi = this.pagelinx + "ntssi";
		Vsrntslbl = eval("V" + this.pagelinx + "ntslbl");
		var VsrCU;
		var VsrSI;
		nvsi_lw = roundtd( (this.nvcu_lw * this.cf_cusi), 3) ;
		nvsi_hgh = roundtd( (this.nvcu_hgh * this.cf_cusi), 3) ;
				if (VsrUnits == smntscu) {
					if ( Vsr < Number(this.nvcu_lw) ) {FntBLRD = "<font color=#CC0000>"; ArrowNLABNL = sm_arr_pn_d.blt ;}else { }
					if ( Vsr > Number(this.nvcu_hgh)) {FntBLRD = "<font color=#CC0000>"; ArrowNLABNL = sm_arr_pn_u.blt ;}else { }
					VsrCU = Vsr; 
					VsrSI = Vsr*this.cf_cusi;
					if (Vsr == "") {VsrSI = "";ArrowNLABNL = "";}else{ VsrSI = roundtd(VsrSI,vRTnoD1) ;}
					}
				else if (VsrUnits == smntssi) {
					if ( Vsr < Number(nvsi_lw) ) {FntBLRD = "<font color=#CC0000>"; ArrowNLABNL = sm_arr_pn_d.blt ;}	else{}
					if ( Vsr > Number(nvsi_hgh)) {FntBLRD = "<font color=#CC0000>"; ArrowNLABNL = sm_arr_pn_u.blt ;}	else{}
					VsrCU = Vsr/this.cf_cusi; 
					VsrSI = Vsr;
					if (Vsr == "") {VsrCU = "";ArrowNLABNL = "";}else{VsrCU = roundtd(VsrCU,vRTnoD2) ;}
				}
		      document.write(t0trEd1dxx0 + "<tr bgcolor=#F6F6F6 valign=center><td width="+vTDzPN1+"% valign=center>" + FntNRML+" " +vbltpics+" " +this.name_a + " "+varSpcmn+"</td>");
		      document.write("<td width="+vTDzPN2+"% bgcolor=#E6E6E6><font class=h8b>" +  FntBLRD + ClrBLCK + ArrowNLABNL+ VsrCU + "</font></td></tr></table>");
		}


	else if (this.xtr.substring(1,2) == "e"){
		Vsr = eval("V" + this.pagelinx);
		if ( Vsr < Number(this.nvcu_lw) ) {FntBLRD = "<font color=#CC0000>";  ArrowNLABNL = sm_arr_pn_d.blt ;} else if (Vsr > Number(this.nvcu_hgh)) {FntBLRD = "<font color=#CC0000>";  ArrowNLABNL = sm_arr_pn_u.blt ;}
		if (Vsr == "") {ArrowNLABNL = "";}else{}

document.write(t0trEd1dxx0 + "<tr bgcolor=#F6F6F6 valign=top><td width="+vTDzPN1+"%>" +FntNRML+ " " +vbltpics+" " + this.name_a + "</td>");
		document.write("<td width="+vTDzPN2+"% bgcolor=#E6E6E6><font class=h8b>" +  FntBLRD + ClrBLCK+ ArrowNLABNL+ Vsr + "</font></td></tr></table>");
	}


	else if(this.xtr.substring(1,2) == "i"){
		VsrUnits = eval("V" + this.pagelinx + "nts");
		smntscu = this.pagelinx + "ntscu";
		smntssi = this.pagelinx + "ntssi";
		Vsrntslbl = eval("V" + this.pagelinx + "ntslbl");
document.write(t0trEd1dxx0 + t0trEd1dxx1 + " " +vbltpics+" " + this.name + varSpcmn + " <font class=a9pn>(" + this.name_a + ") </font></td>");
		document.write("<td width=44% bgcolor=#E6E6E6><font class=a10b>" + ClrBLCK + Vsrntslbl + " </font></td></tr></table>");
	}
	else if(this.xtr.substring(1,2) == "t"){
		document.write(t0trEd1dxx0 + "<tr><td witdh=100%>" + FntNRML + this.name_a + "</td></tr></table>");
	}
	else if(this.xtr.substring(1,2) == "f"){
		Vsr = eval("V" + this.pagelinx);
		//////if ( Vsr != "Normal") {FntBLRD = "<font color=#CC0000>";}else{}
document.write(t0trEd1dxx0 + "<tr bgcolor=#F6F6F6 valign=center><td width="+vTDzPN1+"% valign=center>" + FntNRML + " " +vbltpics+" " + this.name_a + "</td>");
		document.write("<td width="+vTDzPN2+"% bgcolor=#E6E6E6><font class=h8b>" +  FntBLRD + ClrBLCK+ Vsr + " </b></font></td></tr></table>");
	}

	else if(this.xtr.substring(1,2) == "p"){
	/////	VsrUnits = eval("V" + this.pagelinx + "nts");
	/////	smntscu = this.pagelinx + "ntscu";
	/////	smntssi = this.pagelinx + "ntssi";
		Vsrntslbl = eval("V" + this.pagelinx + "ntslbl");
document.write(t0trEd1dxx0 + t0trEd1dxx1 + " " +vbltpics+" " + this.name + varSpcmn + " </font></td>");
document.write("<td width=9%><font class=a9p><b></b></font></td>");
		document.write("<td width=17% bgcolor=#E6E6E6><font class=a10b>" + ClrBLCK + Vsrntslbl + "</font></td>");
		document.write("<td colspan=2></td><td width=9%><font class=a9pn><font color=#000000>(" + this.nvcu_lw+")</font></td><td width=18%></td></tr></table>");
	}


	else if(this.xtr.substring(1,2) == "x"){
		document.write(t0trEd1dxx0 + "<tr><td width=44% height=8></td></tr></table>");
	}
	else{
	}
}

		////////////////////solo display (PN cloud)
function dfrbpalS() {
t0trEd1dxx1 = "<tr bgcolor=#F6F6F6 valign=top><td width=60%><font class=a8p>";
var vRTnoD1 = "1"; var vRTnoD2 = "1"
if (this.xtr.substring(2,3) == "w") {var vRTnoD1 = "2"; var vRTnoD2 = "3"} else {}
if (this.xtr.substring(2,3) == "u") {var vRTnoD1 = "3"; var vRTnoD2 = "2"} else {}
varSpcmn = this.DFRBWSPCMN();
FntBP = "<b>";
FntBLRD = "<font color=#003399>";
	if (this.xtr.substring(1,2) == "a" || this.xtr.substring(1,2) == "o"){
		Vsr = eval("V" + this.pagelinx);
		VsrUnits = eval("V" + this.pagelinx + "nts");
		smntscu = this.pagelinx + "ntscu";
		smntssi = this.pagelinx + "ntssi";
		Vsrntslbl = eval("V" + this.pagelinx + "ntslbl");
		var VsrCU;
		var VsrSI;
		nvsi_lw = roundtd( (this.nvcu_lw * this.cf_cusi), 3) ;
		nvsi_hgh = roundtd( (this.nvcu_hgh * this.cf_cusi), 3) ;
				if (VsrUnits == smntscu) {
					if ( (Vsr < Number(this.nvcu_lw))|| (Vsr > Number(this.nvcu_hgh)) ) {FntBLRD = "<font color=#CC0000>";}else { }
					VsrCU = Vsr; 
					VsrSI = Vsr*this.cf_cusi;
					if (Vsr == "") {VsrSI = ""}else{ VsrSI = roundtd(VsrSI,vRTnoD1) ;}
					}
				else if (VsrUnits == smntssi) {
					if ( (Vsr < Number(nvsi_lw)) || (Vsr > Number(nvsi_hgh)) ) {FntBLRD = "<font color=#CC0000>";}	else{}
					VsrCU = Vsr/this.cf_cusi; 
					VsrSI = Vsr;
					if (Vsr == "") {VsrCU = ""}else{VsrCU = roundtd(VsrCU,vRTnoD2) ;}
				}

	document.write("<font class=a8p>"+  FntBLRD + ClrBLCK + VsrCU + "</font>");
	}
	else if (this.xtr.substring(1,2) == "e"){
		Vsr = eval("V" + this.pagelinx);
		if ( (Vsr < Number(this.nvcu_lw)) || (Vsr > Number(this.nvcu_hgh)) ) {FntBLRD = "<font color=#CC0000>";}else{}
		document.write("<font class=a8p><b>" + FntBLRD + ClrBLCK+ Vsr + "</b></font>");
	}
	else{
	}


}

function dfrbpalPX() {
t0trEd1dxx1 = "<tr bgcolor=#F6F6F6 valign=top><td width=65%><font class=h8b>";
if (this.spcmn_ == "S") {var varSpcmn = "";} else {var varSpcmn = this.DFRBWSPCMN();}
if (this.xtr.substring(7,8) == "a") {var FntNRML = "<font class=h8b>";}  else if (this.xtr.substring(7,8) == "n") {FntNRML = "<font class=h7b>";}else{}

if (this.xtr.substring(0,1) == "o" || this.xtr.substring(0,1) == "m"){ var vbltpics = this.bltpix.blt;}else{vbltpics = "";}

	      //////document.write(t0trEd1dxx0 + t0trEd1dxx1 + FntNRML + " " +vbltpics+" " +this.name_a + " "+varSpcmn+"</td>"); ///with spcmn
	      document.write(t0trEd1dxx0 + t0trEd1dxx1 + FntNRML + " " +vbltpics+" " +this.name_a + "</td>");
	      document.write("<td width=35%>" + FntNRML + " </font></td></tr></table>");
}




/////////////////////////////////////////////////////////////////////// PN cloud end





function ehnposbjct(){
	var ch_uniLink2 =  this.bltpix.blt + " " + this.name;
	shnpFXc_mdc0 = smTab0+"<tr><td>" ;
	shnpFXc_mdc0 += "<div class=encabezadoGray-wrapper><h2>" + ch_uniLink2 + "</h2></div></td></tr></table> ";
 	document.write(shnpFXc_mdc0);
}



/////////////////////////iH&P  iPhone

function shnpFXc_m(){
	if (this.xtr.substring(1,2) == "n") {Dspl_AbNm_FXc = this.name;}else{Dspl_AbNm_FXc = this.name_a;}	
	var ch_uniLink2 =  this.bltpix.blt + " " + Dspl_AbNm_FXc;

	if (this.xtr.substring(4, 5) == "0") { 
	shnpFXc_mdc0 = " <table class=smnxtbbrdB_CH width=100%><tr bgcolor=DDDDDD><td>" ;
	shnpFXc_mdc0 += "<div class=encabezadoGray-wrapper><h1><font class=h12bps>" + ch_uniLink2 + "</font></h1></div></td></tr></table> ";
	shnpFXc_mdc0 += " <font class=t8>";
 	document.write(shnpFXc_mdc0);
	}
 	else if (this.xtr.substring(4, 5) == "1") { 
	shnpFXc_mdc1   = "<tr bgcolor=#E6E6E6>" + "<td><font class=h15pbb>" + ch_uniLink2 + "</td></tr></table>";
 	document.write(smTab1 + shnpFXc_mdc1);
	}
	else if (this.xtr.substring(4, 5) == "2") { 
	shnpFXc_mdc2   = " <br><font class=h14pb> " + ch_uniLink2 + "</font> ";
 	document.write(shnpFXc_mdc2);
	}
	else if (this.xtr.substring(4, 5) == "3") { 
	shnpFXc_mdc3   = " <font class=h14pb> " + ch_uniLink2 + "</font> ";
 	document.write(shnpFXc_mdc3);
	}

	else if (this.xtr.substring(4, 5) == "6"){
		if (this.xtr.substring(1,2) == "n") {Dspl_AbNm_FXc = this.name;}else{Dspl_AbNm_FXc = this.name_a;}	
		if (this.xtr.substring(0,1) == "a" ) {
		 	document.write("<font class=h13pp>" + Dspl_AbNm_FXc + ", ");
			} else {
			document.write("<font class=h13pp><font color=#CC3333>" + Dspl_AbNm_FXc + ", </font>");
			}	
	}
	else if (this.xtr.substring(4, 5) == "7"){

		if (this.name_sp == "") {AbbrvNmSP = ", ";}else{AbbrvNmSP = " (" +this.name_sp+ "), ";}
		if (this.xtr.substring(1,2) == "n") {Dspl_AbNm_FXc = this.name;}else{Dspl_AbNm_FXc = this.name_a;}	
		if (this.xtr.substring(0,1) == "a" ) {
		 	document.write("<font class=h13pp>" + Dspl_AbNm_FXc + ", ");
			} else {
			document.write("<font class=h13pp><font color=#CC3333>" + Dspl_AbNm_FXc + AbbrvNmSP + " </font>");
			}	
	}
	else{}
}



////////////////eH&P iPhone android without the sp details
function shnpFXc_mS(){
	if (this.xtr.substring(1,2) == "n") {Dspl_AbNm_FXc = this.name;}else{Dspl_AbNm_FXc = this.name_a;}	
	var ch_uniLink2 =  this.bltpix.blt + " " + Dspl_AbNm_FXc;

	if (this.xtr.substring(4, 5) == "0") { 
	shnpFXc_mdc0 = " <table class=smnxtbbrdB_CH width=100%><tr bgcolor=DDDDDD><td>" ;
	shnpFXc_mdc0 += "<div class=encabezadoGray-wrapper><h1><font class=h12bps>" + ch_uniLink2 + "</font></h1></div></td></tr></table> ";
	shnpFXc_mdc0 += " <font class=t8>";
 	document.write(shnpFXc_mdc0);
	}
 	else if (this.xtr.substring(4, 5) == "1") { 
	shnpFXc_mdc1   = "<tr bgcolor=#E6E6E6>" + "<td><font class=h15pbb>" + ch_uniLink2 + "</td></tr></table>";
 	document.write(smTab1 + shnpFXc_mdc1);
	}
	else if (this.xtr.substring(4, 5) == "2") { 
	shnpFXc_mdc2   = " <br><font class=h14pb> " + ch_uniLink2 + "</font> ";
 	document.write(shnpFXc_mdc2);
	}
	else if (this.xtr.substring(4, 5) == "3") { 
	shnpFXc_mdc3   = " <font class=h14pb> " + ch_uniLink2 + "</font> ";
 	document.write(shnpFXc_mdc3);
	}

	else if (this.xtr.substring(4, 5) == "6" || this.xtr.substring(4, 5) == "7"){
		if (this.xtr.substring(1,2) == "n") {Dspl_AbNm_FXc = this.name;}else{Dspl_AbNm_FXc = this.name_a;}	
		if (this.xtr.substring(0,1) == "a" ) {
		 	document.write("<font class=h13pp>" + Dspl_AbNm_FXc + ", ");
			} else {
			document.write("<font class=h13pp><font color=#CC3333>" + Dspl_AbNm_FXc + ", </font>");
			}	
	}

	else{}
}



/////////////////////////iDox  NEW

function shnpFXc_idox(){

	shnpFXc_mdc0 = " <table class=smnxtbbrdB_CH width=100%><tr bgcolor=DDDDDD><td>" ;
	shnpFXc_mdc0 += "<div class=encabezadoGray-wrapper><h1><font class=h12bps>this.name</font></h1></div></td></tr></table> ";
	shnpFXc_mdc0 += " <font class=t8>";
 	document.write(shnpFXc_mdc0);

		 	document.write("<br>");

}






//////////////////////////////////////NOT IN USE
function ylapsid(){
var StrngFldrLinc = "<A HREF=" + this.pagelinx.substring(0, 2) + "/" + this.pagelinx + ".htm class=hpb target=contmain> " + this.name + "</a>";
	if (this.bltpix == mdc2 ) { 
	document.write(smmnhvrH6 + "<td width=65%><font class=v2p>" + this.bltpix.blt + StrngFldrLinc);
	document.write("</td><td width=35%><font class=v2> " + this.name_a + "</td></tr>");
	document.write("<tr><td colspan=2 height=1 bgcolor=#006699></td></tr></table>");
	}
	else if (this.bltpix == mdc6) { 
			document.write(smmnhvrH6 + "<td width=65%><font class=v2p><font color=#003399>&#160;<a name=" + this.pagelinx + ">" + this.bltpix.blt + "</a>" + StrngFldrLinc);
	document.write("</td><td width=35%><font class=v2> "  + this.name_a + "</td></tr></table>"); 
	}
	else if (this.bltpix == ebltpt) { 
 	ylapsidST0   =  trE + "<td width=65%><font class=v2p>&#160;"  + this.bltpix.blt + StrngFldrLinc;
	ylapsidST0 += "</td><td width=35%><font class=v2p> "; 
	ylapsidST2	 = "</td></tr></table>";
		if (this.name == this.name_a) {
		document.write(ylapsidST0 + ylapsidST2);
		} else {
		document.write(ylapsidST0 + this.name_a + ylapsidST2);
		}
	}

	else  { 
	document.write("");
	}
		
}

 

////////////////////////////////////////////////////////////// iPhone   //////////// iPhone
///////////////////////this method embeds the ylapsidc_m (which is below) for conversion
function cnttbc4_m(){
	if (this.pagelinx.substring(0,1) == "c" || this.pagelinx.substring(0,1) == "f" || this.pagelinx.substring(0,1) == "d") { 
		document.write("<li><A HREF=smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,4) +".htm target=_self>" + this.bltpix.blt + " <b>" + this.name + "</b></a></li>"); 
	}
	else if (this.pagelinx.substring(2,3) == "a" || this.pagelinx.substring(4,5) == "i") { 
		document.write("<li><A HREF=smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,2) +".htm target=_self>" + this.bltpix.blt + " <b>" + this.name + "</b></a></li>"); 
	}
	else if (this.pagelinx.substring(4,5) == "o") { 
		document.write("<li><A HREF=smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,2) +".htm#"+ this.pagelinx + " target=_self>" + this.bltpix.blt + " " + this.name + "</a></li>"); 
	}
	else if (this.pagelinx.substring(0,1) == "x") { 
		this.ylapsidc_m();
	}


	else {

	document.write("<li><A HREF=smnx"+this.pagelinx.substring(0,2)+"/"+ this.pagelinx +".htm target=_self>" + this.bltpix.blt + " <b>" + this.name + "</b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + this.name_a +"</a></li>"); 
	}

}
/////////////////////////////////////////////takes conversion but reversed with _a and _sp to be indexed
function cnttbc4_m_rev(){
	if (this.name_a == "") { 
		document.write(""); 
	}

	else if (this.pagelinx.substring(0,1) == "c" || this.pagelinx.substring(0,1) == "f") { 
		document.write("<li><A HREF=smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,4) +".htm target=_self>" + this.bltpix.blt + " <b>" + this.name_a + "</b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + this.name +"</a></li>"); 
	}
	else if (this.pagelinx.substring(2,3) == "a" || this.pagelinx.substring(4,5) == "i") { 
		document.write("<li><A HREF=smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,2) +".htm target=_self>" + this.bltpix.blt + " <b>" + this.name_a + "</b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + this.name +"</a></li>"); 
	}
	else if (this.pagelinx.substring(4,5) == "o") { 
		document.write("<li><A HREF=smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,2) +".htm#"+ this.pagelinx + " target=_self>" + this.bltpix.blt + " " + this.name_a + "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + this.name +"</a></li>"); 
	}

	else if (this.pagelinx.substring(0,1) == "x") { 
		document.write("<li><A HREF=smnx" + this.pagelinx.substring(0, 2) + "/" + this.pagelinx + ".htm target=_self> " +this.bltpix.blt+"<b> " + this.name_a +" "+sm_carr_p.blt + this.spcmn_ +"</b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;("+this.name+" "+sm_carr_b.blt+" "+this.name_sp+")</a></li>");

	}
	else {

	document.write("<li><A HREF=smnx"+this.pagelinx.substring(0,2)+"/"+ this.pagelinx +".htm target=_self>" + this.bltpix.blt + " <b>" + this.name_a + "</b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + this.name +"</a></li>"); 
	}

}

function cnttbc2_m(){
	if (this.pagelinx.substring(0,1) == "a" || this.pagelinx.substring(2,3) == "a" || this.pagelinx.substring(4,5) == "i") { 
		document.write("<table width=100% border=0 valign=top cellspacing=0 cellpadding=0>");
		document.write(smmnhvrH6 + "<td><font class=h14bb>" + vsmrtrnlnx + "</td></tr></table>");
	} 
	else if (this.pagelinx.substring(4,5) == "o") { 
		document.write(smTab1) 
		document.write(smmnhvrH6 + "<td><font class=h12bb>" + vsmrtrnlnx + "</td></tr></table>");
	} 

	else {
	}
}

function cnttbc5_m(){
	if (this.pagelinx.substring(5,6) == "a") { 
		document.write(this.bltpix.blt + " <b>" + this.name + "</b>"); 
	}
	else   { 
		document.write("<li><A HREF=smnx"+this.pagelinx.substring(0,2)+"/"+this.pagelinx+".htm target=_self>" + this.bltpix.blt + " <b>" + this.name + "</b></a></li>"); 
	}
}

//////////////////////////////////NEW2019  IDOX App + cloud   + dpbcbbc0.pagelinx + ".htm?mcdz="+this.pagelinx+
function cnttbc5_idox(){
	if (this.pagelinx.substring(5,7) == "ai") { 
		document.write(smTab1+"<tr bgcolor=c0e2f1><td> &nbsp; "+this.bltpix.blt + " <font class=h13bb><font color=000000><b>" + this.name + "</b></font><img src=../../images/mc_t.gif align=center valign=center width=1 height=45></td></tr></table>"); 
	}
	else  if (this.pagelinx.substring(5,7) == "ao") { 
		document.write(smTab1+"<tr bgcolor=d9d9d9><td> &nbsp;  <font class=h13b><font color=007CFF>" + this.name + "</font><img src=../../images/mc_t.gif align=center valign=center width=1 height=30></td></tr></table>"); 
	}
	else   { 
		document.write("<li><a href="+ dpbcbbc0.pagelinx + ".htm?mcdz="+this.pagelinx+" target=_self>" + this.spcmn_.blt  + " <b>" + this.name + "</b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + this.name_a +"</a> </li>"); 
	}
}


//////////////////////////////////NEW2019  IDOX App + cloud   + dpbcbbc0.pagelinx + ".htm?mcdz="+this.pagelinx+
function cnttbc5_idox_app(){
	if (this.pagelinx.substring(5,7) == "ai") { 
		document.write(smTab1+"<tr bgcolor=c0e2f1><td> &nbsp; "+this.bltpix.blt + " <font class=h13bb><font color=000000><b>" + this.name + "</b></font><img src=../../images/mc_t.gif align=center valign=center width=1 height=45></td></tr></table>"); 
	}
	else  if (this.pagelinx.substring(5,7) == "ao") { 
		document.write(smTab1+"<tr bgcolor=d9d9d9><td> &nbsp;  <font class=h13b><font color=007CFF>" + this.name + "</font><img src=../../images/mc_t.gif align=center valign=center width=1 height=30></td></tr></table>"); 
	}
	else   { 
		document.write("<li><a href=http://www.geocities.com/enmi/smnxdm/" + dpbcbbc0.pagelinx + ".htm?mcdz="+this.pagelinx+" target=_self>" + this.spcmn_.blt  + " <b>" + this.name + "</b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + this.name_a +"</a> </li>"); 
	}
}


function cnttbcIHNP1_m_OLD_OK(){
	if (this.pagelinx.substring(2,3) == "a" ) { 
		document.write("<li><A HREF=smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,4) +".htm target=_self>" + this.bltpix.blt + " <b>" + this.name + "</b></a></li>"); 
	}
	else if (this.pagelinx.substring(3,4) == "a" && this.pagelinx.substring(4,5) == "i") { 
		document.write("<li><A HREF=smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,2) +".htm target=_self>" + this.bltpix.blt + " <b>" + this.name + "</b></a></li>"); 
	}
	else if (this.pagelinx.substring(5,6) == "a" && this.pagelinx.substring(6,7) == "o") { 
		document.write("<li><A HREF=smnx"+this.pagelinx.substring(0,2)+"/"+ this.pagelinx +".htm target=_self>&nbsp;&nbsp;&nbsp;&nbsp;" + this.bltpix.blt + " " + this.name + "</a></li>"); 
	}
	else {
		document.write("<li><A HREF=smnx"+this.pagelinx.substring(0,2)+"/"+ this.pagelinx +".htm target=_self>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + this.bltpix.blt + " " + this.name +"</a></li>"); 
	}

}

//////////////////////////////////////
function cnttbcIHNP1_m(){
	if (this.pagelinx.substring(2,3) == "a" ) { 
		document.write("<li><A HREF=smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,4) +".htm target=_self>" + this.bltpix.blt + " <b>" + this.name + "</b></a></li>"); 
	}
	else if (this.pagelinx.substring(3,4) == "a" && this.pagelinx.substring(4,5) == "i") { 
		document.write("<li><A HREF=smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,2) +".htm target=_self>" + this.bltpix.blt + " <b>" + this.name + "</b></a></li>"); 
	}
	else if (this.pagelinx.substring(5,6) == "a" && this.pagelinx.substring(6,7) == "o") { 
		document.write("<li><A HREF=smnx"+this.pagelinx.substring(0,2)+"/"+ this.pagelinx +".htm target=_self>&nbsp; " + this.bltpix.blt + " <b>" + this.name + "</b></a></li>"); 
	}
	else {
		document.write("<li><A HREF=smnx"+this.pagelinx.substring(0,2)+"/"+ this.pagelinx +".htm target=_self>&nbsp;&nbsp; " + this.bltpix.blt + " " + this.name +"</a></li>"); 
	}
}

//////////////////////////////////////mobile -- for at a glance hfbaiai0
function cnttbcIHNP2_m(){
	var ch_uniLink2 = " <A HREF=smnx" + this.pagelinx.substring(0, 2) + "/smnx" + this.pagelinx.substring(0,2) + ".htm class=hpb target=_self>" + sm_arr_apple_i.blt + "</a>";
		document.write(" <table width=99% border=0 align=center valign=center cellspacing=0 cellpadding=0><tr><td>");
		document.write("<TABLE WIDTH=100% align=center border=0 valign=center cellspacing=0 cellpadding=1>");
	if (this.pagelinx.substring(5,7) == "ai") { 
		document.write(smmnhvrGec + "<td width=65%><font class=h12bps><b>&#160;<A HREF=smnx" + this.pagelinx.substring(0, 2) + "/smnx" + this.pagelinx.substring(0,2) + ".htm class=hpb target=_self>" + this.bltpix.blt + " " +this.name + "</a></b></td>");
	} 
	else if (this.pagelinx.substring(5,7) == "ao") { 
		document.write(smmnhvrCH1c + "<td width=65%><font class=h12bps><b>&#160;" + this.bltpix.blt + " " +this.name + "</b></td>");
	} 
	else {
		document.write(smmnhvrCH2c + "<td width=65%><font class=h12bps>&#160;" + this.bltpix.blt + " " +this.name + "</td>");
	}
		document.write("</td><td width=30%><font class=h12pb> " + this.name_a  +"</td><td width=5% align=right>"+ch_uniLink2+"</td></tr></table>"); 
		document.write("  <tr bgcolor=#DDDDDD><td height=1></td></tr></table>");
}



function cnttbc6_m(){
	if (this.pagelinx.substring(5,6) == "a") { 
		document.write(smTab1 + "<tr><td width=5%></td><td width=95%>" + this.bltpix.blt + " <b>" + this.name + "</b></td></tr></table>"); 
	}
	else   { 
		document.write(smTab1 + "<tr><td width=5%></td><td width=95%> " + this.bltpix.blt + " <font class=h17pb>" + this.name + "</font></td></tr></table>"); 
	}
}


///////////////////////this method is for iPhone for Cards
function cnttbc9_m(){
	if (this.name_a == "") {var varAbbrvNm = ""} 
	else {varAbbrvNm = "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + this.name_a }

	if (this.pagelinx.substring(2,3) == "a") { 
		document.write("<li><A HREF=smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,4) +".htm target=_self>" + this.bltpix.blt + " <b>" + this.name + "</b></a></li>"); 
	}
	else {
	document.write("<li><A HREF=smnx"+this.pagelinx.substring(0,2)+"/"+ this.pagelinx +".htm target=_self>" + this.bltpix.blt + "<b> " + this.name + "</b>" +varAbbrvNm+ " </a></li>"); 
	}

}

function cnttbc9_m2(){
	if (this.name_a == "") {var varAbbrvNm = ""} 
	else {varAbbrvNm = "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + this.name_a }

	if (this.pagelinx.substring(2,3) == "a") { 
		document.write("<li><a href="+ this.pagelinx +".htm target=_self>" + this.bltpix.blt + " <b>" + this.name + "</b></a></li>"); 
	}
	else {
	document.write("<li><a href="+ this.pagelinx +".htm target=_self>" + this.bltpix.blt + "<b> " + this.name + "</b>" +varAbbrvNm+ " </a></li>"); 
	}

}

//////////////////////this method is for iPhone for Cards///////////takes reversed with _a and _sp to be indexed
function cnttbc9_m_rev(){
	if (this.name_a == "") { 
		document.write(""); 
	}
	else if (this.pagelinx.substring(2,3) == "a") { 
		document.write("<li><A HREF=smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,4) +".htm target=_self>" + this.bltpix.blt + " <b>" + this.name_a + "</b></a></li>"); 
	}
	else {
	document.write("<li><A HREF=smnx"+this.pagelinx.substring(0,2)+"/"+ this.pagelinx +".htm target=_self>" + this.bltpix.blt + "<b> " + this.name_a + "</b></a></li>"); 
	}


}








///////////////////////////iphone
function ylapsidc_m(){
	if (this.bltpix == cb11 ) { 
		document.write("<li><A HREF=smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,2) +".htm target=_self>" + this.bltpix.blt + " <b>" + this.name + "</b></a></li>"); 
		///document.write("<li>" + this.bltpix.blt + " <b>" + this.name + "</b></li>"); 
	}
	else if (this.bltpix == cb12 ) { 
		document.write("<li><a name=" + this.pagelinx + ">" + this.bltpix.blt + "</a> <b>" + this.name + "</b></li>"); 
	}
	else if (this.bltpix == sm_conv_iis) { 
 		document.write("<li><A HREF=smnx" + this.pagelinx.substring(0, 2) + "/" + this.pagelinx + ".htm target=_self> " +this.bltpix.blt+"<b> "+this.name+" "+sm_carr_b.blt+" "+this.name_a+"</b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(" + this.name_sp +" "+sm_carr_p.blt + this.spcmn_ +")</a></li>");
		
	}
	else  { document.write("");	}
}


/////////////////////////////////eH&P MOBILE 

function cnttbc2_ch_m(){
	var ch_uniLink2 = " <A HREF=smnx" + this.pagelinx.substring(0, 2) + "/" + this.pagelinx + ".htm class=hpb target=_self>" + sm_arr_apple_i.blt + "</a>";
		document.write(" <table width=99% border=0 align=center valign=center cellspacing=0 cellpadding=0><tr><td>");
		document.write("<TABLE WIDTH=100% align=center border=0 valign=center cellspacing=0 cellpadding=1>");
	if (this.pagelinx.substring(5,7) == "ai") { 
		document.write(smmnhvrGec + "<td width=65%><font class=h12bps><b>&#160;" + this.bltpix.blt + " " +this.name + "</b></td>");
	} 
	else if (this.pagelinx.substring(5,7) == "ao") { 
		document.write(smmnhvrCH1c + "<td width=65%><font class=h12bps><b>&#160;" + this.bltpix.blt + " " +this.name + "</b></td>");
	} 
	else {
		document.write(smmnhvrCH2c + "<td width=65%><font class=h12bps>&#160;" + this.bltpix.blt + " " +this.name + "</td>");
	}
		document.write("</td><td width=30%><font class=h12pb> " + this.name_a  +"</td><td width=5% align=right>"+ch_uniLink2+"</td></tr></table>"); 
		document.write("  <tr bgcolor=#DDDDDD><td height=1></td></tr></table>");
}






/////////////////////////////////GALEN  9fbfcf  4993b9
function cnttbc4ga(){
	vsmrtrnlnx = this.bltpix.blt + "<A HREF=galen/galen" + this.name_a + ".htm target=_self class=hpb>" + this.name + "</a>";
	document.write(smTab1) 
	if (this.pagelinx.substring(5,6) == "a") { 
		document.write(smmnhvrGa + "<td width=85% align=left><font class=t8b>" + vsmrtrnlnx + "</td>");
	} 
	else if (this.pagelinx.substring(5,6) == "e") { 
		document.write(smmnhvrGe + "<td width=85% align=left><font class=t8b>" + vsmrtrnlnx + "</td>");
	} 
	else if (this.pagelinx.substring(5,6) == "o") { 
		document.write(smmnhvrH6 + "<td width=85% align=left><font class=t8a>" + vsmrtrnlnx + "</td>");
	} 
	else { 
		document.write(smmnhvrH6 + "<td width=85% align=left><font class=t8a>&#160; " + vsmrtrnlnx + "</td>");
	} 
	document.write("<td width=15% align=right><font class=t8a><A HREF=galen/galen" + this.name_a + ".htm target=_self class=hpb>" + this.name_a + "</a></td></tr></table>");
}


function cnttbc4gp(){
	vsmrtrnlnx = " <A HREF=galen/galen" + this.name_a + ".htm target=_self class=hpb>" + this.name_a + "</a>";
	document.write(smTab1) 
	if (this.pagelinx.substring(5,6) == "a") { 
		document.write(smmnhvrGa + "<td width=100% align=left><font class=t8b>&#160;" + vsmrtrnlnx + "</td>");
	} 
	else if (this.pagelinx.substring(5,6) == "e") { 
		document.write(smmnhvrGe + "<td width=100% align=left><font class=t8b>&#160;" + vsmrtrnlnx + "</td>");
	} 
	else if (this.pagelinx.substring(5,6) == "o") { 
		document.write(smmnhvrH6 + "<td width=100% align=left><font class=t8a>&#160;" + vsmrtrnlnx + "</td>");
	} 
	else { 
		document.write(smmnhvrH6 + "<td width=100% align=left><font class=t8a>&#160;" + vsmrtrnlnx + "</td>");
	} 
	document.write("</td></tr></table>");
}

function cnttbc4gpi(){
	vsmrtrnlnx = " <a href=en/galen/galen" + this.name_a + ".htm target=_self class=hpb>" + this.name_a + "</a>";
	document.write(smTab0) 
	if (this.pagelinx.substring(5,6) == "a") { 
		document.write(smmnhvrGa + "<td width=100% align=left><font class=t8b>" + vsmrtrnlnx + "</td>");
	} 
	else if (this.pagelinx.substring(5,6) == "e") { 
		document.write(smmnhvrGe + "<td width=100% align=left><font class=t8b>" + vsmrtrnlnx + "</td>");
	} 
	else if (this.pagelinx.substring(5,6) == "o") { 
		document.write(smmnhvrH6 + "<td width=100% align=left><font class=t8a>" + vsmrtrnlnx + "</td>");
	} 
	else { 
		document.write(smmnhvrH6 + "<td width=100% align=left><font class=t8a>" + vsmrtrnlnx + "</td>");
	} 
	document.write("</td></tr><tr><td height=1></td></tr></table>");
}



function fdylapsidm2(){
			document.write(smTab12 + smtrhvr1 + "<td>");
			document.write("<font class=v2b><b>&#160;" + this.bltpix.blt + "<a href=#" + this.pagelinx + " target=_self class=hpb>");
			document.write(this.name + "</a></td></tr></table>");
}



////////////////////////////

function cnttbc3(){
var cnttbc2lnx = "<A HREF=mdxp"+this.pagelinx.substring(0,2)+"/mdxp"+ this.pagelinx.substring(0,4)+".htm target=mnmdtr class=hpbr>" + this.name + "</a>";
	if (this.bltpix == mdc1 || this.bltpix == mdc2) { 
		document.write(smTab1) 
 		document.write("<tr bgcolor=F6F6F6 valign=top onmouseover=style.backgroundColor=\'E9E9E9\' onmouseout=style.backgroundColor=\'F6F6F6\'>");
		document.write("<td><font class=t8b>" + this.bltpix.blt + cnttbc2lnx + "</td></tr></table>");
	} 
	else if (this.bltpix == mdc6) { 
		document.write(smTab1) 
 		document.write("<tr bgcolor=F6F6F6 valign=top onmouseover=style.backgroundColor=\'E9E9E9\' onmouseout=style.backgroundColor=\'F6F6F6\'>");
		document.write("<td><font class=t8a>" + this.bltpix.blt + cnttbc2lnx + "</td></tr></table>");
	} 
	else {
	//////document.write(smTab1 + "<tr><td>error</td></tr></table>");
	}
}

///////	vmdxpctmn1 += " <TD valign=center onmouseover=select("+this.xtr+") onmouseout=deselect("+this.xtr+")> <IMG SRC=../../imagesa/smCF_"+ this.pagelinx.substring(0,4)+"-up.gif border=0 height=12 width=12 align=baseline vspace=0 hspace=2>";


function smnxctmenu(){
	return;
///////////if (this.pagelinx.substring(3,4) == "a"){var bckgDGclr = "333333";}else{bckgDGclr = "55595F";}
var bckgDGclr = "333333";
var vsmnxctmenuLnx = "<font class="+this.units_si+"><a target="+this.units_cu+" href=../smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,4)+".htm class="+this.cf_cusi+">" + this.name + "</a>";
	if (this.xtr == "4") { 
	var vmdxpctmn0 = smTab0 ;
	vmdxpctmn0 += "<tr valign=center><td height=13 valign=center><IMG SRC=../../images/mc_t.gif BORDER=0 HEIGHT=10 WIDTH=6 align=baseline vspace=0 hspace=0>";
	vmdxpctmn0 += vsmnxctmenuLnx + "</td></tr></table>";
	document.write(vmdxpctmn0);
	}else{
	var vmdxpctmn1 = " <TABLE width=100% height=16 border=0 cellspacing=0 cellpadding=0 hspace=0 vspace=0 valign=center>" ;
	vmdxpctmn1 += " <TR bgcolor="+this.spcmn_+" valign=center onmouseover=style.backgroundColor=\'"+this.nvcu_lw+"\' onmouseout=style.backgroundColor=\'"+this.spcmn_+"\'> ";
	vmdxpctmn1 += " <TD valign=center> <IMG SRC=../../imagesa/mc_t.gif border=0 height=12 width=6 align=baseline vspace=0 hspace=0>";
	vmdxpctmn1 += vsmnxctmenuLnx + "</td></tr></table>";
	document.write(vmdxpctmn1);
	}
}
////////////////////////////new for XSUM
function smnxbcmenu(){
	return;
if (this.pagelinx.substring(3,4) == "a"){var bckgDGclr = "333333";}else{bckgDGclr = "999999";}
/////var bckgDGclr = "999999";
var vsmnxctmenuLnx = "<font class="+this.units_si+"><a target="+this.units_cu+" href=../smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,4)+".htm class="+this.cf_cusi+">" + this.name + "</a>";
	if (this.xtr == "4") { 
	var vmdxpctmn0 = smTab0 ;
	vmdxpctmn0 += "<tr valign=center><td height=26 valign=center><IMG SRC=../../images/mc_t.gif BORDER=0 HEIGHT=10 WIDTH=6 align=baseline vspace=0 hspace=0>";
	vmdxpctmn0 += vsmnxctmenuLnx + "</td></tr></table>";
	document.write(vmdxpctmn0);
	}else{
	var vmdxpctmn1 = " <TABLE width=100% height=26 border=0 cellspacing=0 cellpadding=0 hspace=0 vspace=0 valign=center>" ;
	vmdxpctmn1 += " <TR bgcolor="+this.spcmn_+" valign=center onmouseover=style.backgroundColor=\'"+this.nvcu_lw+"\' onmouseout=style.backgroundColor=\'"+this.spcmn_+"\'> ";
	vmdxpctmn1 += " <TD valign=center> <IMG SRC=../../imagesa/mc_t.gif border=0 height=12 width=6 align=baseline vspace=0 hspace=0>";
	vmdxpctmn1 += vsmnxctmenuLnx + "</td></tr><tr><td height=1 bgcolor=#"+bckgDGclr+"></td></tr></table>";
	document.write(vmdxpctmn1);
	}
}

function smnxfpmenu(){
	///////////if (this.pagelinx.substring(3,4) == "a"){var bckgDGclr = "333333";}else{bckgDGclr = "55595F";}
	var bckgDGclr = "333333";
	var vsmnxctmenuLnx = "<font class="+this.units_si+"><a target=_blank href=../../en/smnx"+this.pagelinx.substring(0,2)+"/smnx"+ this.pagelinx.substring(0,4)+".htm class="+this.cf_cusi+">" + this.name + "</a>";
		if (this.xtr == "4") { 
		var vmdxpctmn0 = smTab0 ;
		vmdxpctmn0 += "<tr valign=center><td height=13 valign=center><IMG SRC=../../images/mc_t.gif BORDER=0 HEIGHT=10 WIDTH=6 align=baseline vspace=0 hspace=0>";
		vmdxpctmn0 += vsmnxctmenuLnx + "</td></tr></table>";
		document.write(vmdxpctmn0);
		}else{
		var vmdxpctmn1 = " <TABLE width=100% height=16 border=0 cellspacing=0 cellpadding=0 hspace=0 vspace=0 valign=center>" ;
		vmdxpctmn1 += " <TR bgcolor="+this.spcmn_+" valign=center onmouseover=style.backgroundColor=\'"+this.nvcu_lw+"\' onmouseout=style.backgroundColor=\'"+this.spcmn_+"\'> ";
		vmdxpctmn1 += " <TD valign=center> <IMG SRC=../../imagesa/mc_t.gif border=0 height=12 width=6 align=baseline vspace=0 hspace=0>";
		vmdxpctmn1 += vsmnxctmenuLnx + "</td></tr></table>";
		document.write(vmdxpctmn1);
		}
	}
	

function tblcfx(){
	vartblcfx   = "<img src=images/"+this.bltpix.blt+".gif width=8 height=8 border=0> "; 
	vartblcfx += "<a href=mcxp/mcxp_" + this.pagelinx.substring(2,4) + ".htm target=main class=redol>" + this.name +"</a>";
	document.write(vartblcfx + "<br>");
}


function smnxbtopnts(){
	vbckgrndclr = "#FFFFFF";
	if (this.pagelinx.substring(3,5) == "ai") { var vbckgrndclr = "#aabbcc"; } else {}
	if (this.pagelinx.substring(3,5) == "ao") {var vbckgrndclr = "#ccddee"; } else {}
	document.write("<option style=\'background-color:"+vbckgrndclr+"\'; value="+this.pagelinx+">"+this.name+"</option>");
}

function tblo(){
var	tbloLinc =  this.bltpix.blt + " <A HREF=ehnps/ehnpS_" + this.pagelinx + ".htm target=main class=hpb>" + this.name + "</a>";
var	tbloCls  =  "</td><td width=30%><font class=v2bp>" + this.name_a + "</font></td></tr>";
	if (this.bltpix == ebltm ) { 
	tblo =  trE + " <td width=70%><font class=v2> ";
	document.write(tblo + tbloLinc + tbloCls);
	} 
	else if (this.bltpix == ebltst || this.bltpix == ebltsu) { 
	tblo2 =  trE + "<td width=70%><font class=v2bp>&#160; ";
	document.write(tblo2 + tbloLinc + tbloCls);
	}
	else {
	document.write(tblo2 + "error" + tbloCls);
	}
}




///////////////////////
function ndxgdmn(){
if (this.xtr != "x") {var vndxclstx = ""; var vsmnndx = "class=smnndx";}
	else{vndxclstx = "</tr><tr align=center>"; vsmnndx = "";} 
if (this.pagelinx != vsmthpgidx) 
	{
	var vndxtbla1 = "<td "+vsmnndx+" bgcolor="+this.spcmn_+" valign=center onmouseover=style.backgroundColor=\'"+this.nvcu_lw+"\' onmouseout=style.backgroundColor=\'"+this.spcmn_+"\'> ";
	vndxtbla1 += "<font class=h11b><a target=_self href=../smnx"+this.pagelinx.substring(0,2)+"/"+ this.pagelinx+".htm class="+this.cf_cusi+">" + this.name + "</a> </td>" + vndxclstx;
	document.write(vndxtbla1);
	}else{
	var vndxtbla1 = "<td "+vsmnndx+" bgcolor="+this.nvcu_lw+" valign=center>";
	vndxtbla1 += "<font class=h11b><font color=#66CCFF>" + this.name +"</td>" + vndxclstx;
	document.write(vndxtbla1);
	}
}


///////////////////////
////////////////////////////////////////////////////////CUARTO EN ALPHA INDEX
function smnxndx1(){
	if (this.name == this.name_a) {AbbrvNm = "";}else{AbbrvNm = this.name_a}
	var vsmrtrnlnx = this.SMRTRNLNX1();

	if (this.bltpix == mdc1) { 
		document.write(smTab1) 
		document.write(smtrhvr1 + "<td><font class=v2b>" + vsmrtrnlnx + "</td></tr></table>");
	} 
	else if (this.bltpix == mdc2) { 
		document.write(smTab1) 
		document.write(smtrhvr2 + "<td><font class=v2p>" + vsmrtrnlnx + "</td></tr></table>");
	} 
	else {
	//////document.write(smTab1 + "<tr><td>error</td></tr></table>");
	}

}


function ntgsnl(){
	ntgsnl = " <a name=" + this.name_a + "><img src=../../images/mc_t.gif width=2 height=1></a><br>";
	ntgsnl += " <TABLE width=100% cellspacing=0 cellpadding=0><tr><td width=3% bgcolor=#003366>&nbsp;</td>";
	ntgsnl += " <td witdh=4% bgcolor=#DDDDDD>&nbsp;</td><td width=81% bgcolor=#DDDDDD><font class=v2>";
	ntgsnl += this.bltpix.blt + " " + this.name + " </td>";
	ntgsnl += " <td width=12% bgcolor=#DDDDDD></td></tr></table><br>";
	document.write(ntgsnl);
}
/////////-----------------------
function fxitempghp(){
var balasec = "<font class=t8bb>" + this.bltpix.blt + this.name + " </font>";
	if (this.bltpix == mdc0 ) { 
	vfxitempghp = " <font class=t8><TABLE WIDTH=100% border=1 cellspacing=0 cellpadding=1>" ;
	vfxitempghp += trE + "<td><font class=t8bb>" + this.bltpix.blt + this.name.toUpperCase() + "</font></td></tr></table>";
 	document.write(vfxitempghp);
	}
 	else if (this.bltpix == mdc1 ) { 
	vvfxitempghp   = trD + "<td><font class=t8b>" + this.bltpix.blt + this.name + "</font>";
	vvfxitempghp   +=	"<font class=t8> (" + this.name_a + ") </font></td></tr></table>";
 	document.write(smTab0 + vvfxitempghp);
	}
	else if (this.bltpix == mdc2 ) { 
		document.write(" <br>" + balasec);
	}
	else if (this.bltpix == mdc6) {	
	document.write(this.name + ", ");
	}

}

function fxitempgpn(){
var balasec = "<font class=t8bb>" + this.bltpix.blt + this.name_a + " </font>";
	if (this.bltpix == mdc0 ) { 
	shnpscmplthp = " <font class=t8><table width=100% border=1 valign=top cellspacing=0 cellpadding=1>" ;
	shnpscmplthp += trE + "<td><font class=t8bb>" + this.bltpix.blt + this.name + "</font></td></tr></table>";
 	document.write(shnpscmplthp);
	}
 	else if (this.bltpix == mdc1 ) { 
	shnpsbrfm  =   trD +  "<td><font class=t8bb>" + this.bltpix.blt + this.name_a + " </font></td></tr></table>";
 	document.write(smTab1 + shnpsbrfm);
	}
	else if (this.bltpix == mdc2 ) { 
	document.write(balasec);
	}
	if (this.bltpix == mdc6) {	
	document.write(this.name + ", ");
	}
	else if (this.bltpix == mdc7) {
	document.write(""); 
	}
}


function fxitempgfs(){
	ehnpCol1 = "<td width=6% height=12><font class=t9>&nbsp;</td>";
	ehnpCol = ehnpCol1 + ehnpCol1 + ehnpCol1 + ehnpCol1;	
  	 if (this.bltpix == ebltmhp) { 
	shnpsfprnthp =   "<tr bgcolor=#FFFFFF bordercolor=#999999 valign=center><td colspan=14 height=14 align=left><font class=t9><b> ";
	shnpsfprnthp += "<font color=#555555>&#160;<img src=../../images/mc_t.gif width=1 height=12>" + this.name + "</td></tr>";
	document.write(shnpsfprnthp);
	}
	if (this.bltpix == ebltm ) {
	shnpsfprntm  =  "<tr bgcolor=#EEEEEE bordercolor=#999999><td width=23% height=13><font class=t9>&#160;<b><i>";
	shnpsfprntm +=  this.bltpix.blt +  this.name_a + " </font></td><td colspan=14 height=13><font class=t9>&nbsp;</td></tr>";
	document.write(shnpsfprntm);
	}
	if (this.bltpix == ebltst || this.bltpix == ebltsu || this.bltpix == ebltsc || this.bltpix == lbltst) {
	shnpsfprntst = " <tr bgcolor=#EEEEEE bordercolor=#999999><td width=23% height=12><font class=t8b>&#160;" + this.bltpix.blt + this.name + " </font></td>";
	document.write(shnpsfprntst + ehnpCol + ehnpCol + ehnpCol + ehnpCol1+ "</tr>");
	}
	if (this.bltpix == ebltpt || this.bltpix == eblttx) {
	shnpsfprntpt = " <tr bgcolor=#FFFFFF bordercolor=#999999><td width=23% height=12><font class=t9>&#160;" + this.bltpix.blt + this.name_a + "</font></td>";
	document.write(shnpsfprntpt + ehnpCol + ehnpCol + ehnpCol + ehnpCol1+ "</tr>");
	}
	if (this.bltpix == ebltpl || this.bltpix == dbltpt) {
			prntpl1 = " <tr bgcolor=#FFFFFF bordercolor=#999999><td width=23% height=12><font class=t9>&#160;";
			if (this.pagefldr == "" ) {
			prntpl2 =	 this.bltpix.blt + this.name_a + "</font></td>";
			} else { 	
			prntpl2 =  this.bltpix.blt + this.name_a + " (" + this.pagefldr + ")</font></td>";
			}
			document.write(prntpl1 + prntpl2 + ehnpCol + ehnpCol + ehnpCol + ehnpCol1+ "</tr>");
	}
}




var vcarr_bar3 = " <img src=../../images/carr_bar3.gif align=baseline width=30 height=10 border=0> ";
//////////////////////////////////////////dfcfbf #e2deba #d7d1c3
function ylapsidc(){
var StrngFldrLinc = "<A HREF=smnx" + this.pagelinx.substring(0, 2) + "/" + this.pagelinx + ".htm class=hpb target=_self> ";
StrngFldrLinc    +=  this.name + " <img src=../../images/carr_bar2.gif align=baseline width=30 height=10 border=0> " + this.name_a + "</a>";
var Nmbbrvtns2 = this.name_sp + vcarr_bar3 + this.spcmn_ ;
var TblRBgClr = trE;
var AbbrvNm ;
	document.write("<TABLE WIDTH=100% align=center border=0 valign=top cellspacing=1 cellpadding=2>");
	if (this.bltpix == cb11 ) { 
		document.write(trC + "<td width=65%><font class=v10b><b>" + this.bltpix.blt + this.name);
		document.write("</td><td width=35%><font class=v10b><b> " + this.name_sp + "</td></tr>");
		document.write("<tr><td colspan=2 height=1 bgcolor=#BB8822></td></tr></table>");
	}
	else if (this.bltpix == cb12 ) { 
		document.write("<tr bgcolor=#d7d1c3><td width=65%><font class=v10b><b>&#160;");
		document.write("<a name=" + this.pagelinx + ">" + this.bltpix.blt + "</a>" + this.name.toUpperCase() );
		document.write("</td><td width=35%><font class=v10b><b> "  + this.name_sp + "</td></tr></table>"); 
	}
	else if (this.bltpix == cb16 || this.bltpix == sm_conv_iis) { 
 	var ylaps16 = "<tr bgcolor=F3F3F3 valign=top onmouseover=style.backgroundColor=\'d9dddd\' onmouseout=style.backgroundColor=\'F3F3F3\'>";
 	ylaps16 += "<td width=65%><font class=v2bp>&#160;"  + this.bltpix.blt + StrngFldrLinc;
	ylaps16 += "</td><td width=35%><font class=v2bp>" + Nmbbrvtns2 + "</td></tr></table>";
		document.write(ylaps16);
	}
	else  { document.write("");	}
}






function ylstp(){
var StrngFldrSLinc = " <A HREF=ehnps/ehnpS_" + this.pagelinx + ".htm target=main> " + this.name_a + "</a>";
var StrngFldrPLinc = " <A HREF=" + this.pagelinx.substring(0,4) + "/" + this.pagelinx + ".htm target=_self> " + this.name + "</a>";
	if (this.bltpix == ebltst || this.bltpix == ebltsu || this.bltpix == ebltm ) { 
	document.write(" " + StrngFldrSLinc + " ");
	}
	else if (this.bltpix == ebltpt || this.bltpix == ebltpl) { 
	document.write(" " + StrngFldrPLinc + " ");
	}
	else  { 
	document.write("");
	}
}


function xlapsid(){
	document.write(smTab1+trE + "<td colspan=2 height=10></td></tr>");
 	document.write("<tr><td colspan=2 height=1 bgcolor=#006699></td></tr>");
	document.write(trD + "<td colspan=2 align=right><font class=t8a>");
	document.write("<input type=image src=../../images/sm_squp.gif border=0  width=15 height=12 hspace=10 vspace=0 onClick=\'window.scrollTo(0,0);\'>");
	document.write("</font><img src=../../images/mc_t.gif align=baseline width=5 height=12></td></tr></table>");
}


function pixitem(){
	document.write(this.bltpix.blt);
}





	

function clapsid(){
	var linx_s = "<A HREF="+ this.pagelinx.substring(0, 3) + "/" + this.pagelinx + ".htm class=hpbr target=mnmdtr> " + this.name + "</a>";

	document.write("<TABLE WIDTH=100% align=center border=0 valign=top cellspacing=1 cellpadding=1>");
	if (this.bltpix == mdc1 ) { 

	
	document.write("<tr bgcolor=#B7C7D0><td width=67%><font class=v2b>" + this.bltpix.blt + this.name);
	document.write("</font></td><td width=33%><font class=v2b> " + this.name_a + "</font></td></tr>");
	document.write("<tr><td colspan=2 height=1 bgcolor=#006699></td></tr></table>");
	}
	if (this.bltpix == mdc2 ) { 
	document.write("<tr bgcolor=#EEEEDD><td width=67%><font class=t8bb>" + this.bltpix.blt + this.name);
	document.write("</font></td><td width=33%><font class=t8bb> " + this.name_a + "</font></td></tr>");
	document.write("<tr><td colspan=2 height=1 bgcolor=#006699></td></tr></table>");
			
	}
	else if (this.bltpix == mdc6 ) { 
 	document.write("<tr bgcolor=F6F6F6 valign=top onmouseover=style.backgroundColor=\'E9E9E9\' onmouseout=style.backgroundColor=\'F6F6F6\'>");
	document.write("<td width=55%><font class=v2bp>" + this.bltpix.blt + linx_s);
	document.write("</td><td width=15%><font class=t8a> " + this.name_a + "</font></td>");
	document.write("<td width=30%></td></tr></table>");
			
	}

}
function klaxpsid(){
var StrngFldr = this.pagelinx.substring(0,2);
var StrngFldrLinc = "<A HREF=smnx" + StrngFldr + "/" + this.pagelinx + ".htm target=_self class=hpb> " + this.name + "</a>";
var Stndrd_b = "<A HREF=smnx" + StrngFldr + "/" + this.pagelinx + "b.htm target=_self class=adv> "+vBasic+" </a> ";
var Dvncd_a = "<A HREF=smnx" + StrngFldr + "/" + this.pagelinx + ".htm target=_self class=hpb> "+vInteractive+" </a> ";

	asdpp = " <TABLE width=100% border=0 cellspacing=1 cellpadding=1 bgcolor=CCCCCC><tr>";
 	asdpp += " <td width=58% bgcolor=EEEEEE align=center> <font class=t8a>" + Dvncd_a + "</td>";
 	asdpp += " <td width=42% bgcolor=EEEEEE align=center> <font class=t8a>" + Stndrd_b + "</td></tr></table>";

	document.write(smTab1);
	if (this.bltpix == mdc1 ) { 
	document.write("<tr bgcolor=#B7C7D0><td width=67%><font class=v2b>&#160;" + this.bltpix.blt + this.name + " Templates");
	document.write("</font></td><td width=33%><font class=v2b> " + this.name_a + "</font></td></tr>");
	document.write("<tr><td colspan=2 height=1 bgcolor=#006699></td></tr></table>");
	}
	else if (this.bltpix == mdc4 ) { 
 			document.write("<tr bgcolor=F6F6F6 valign=top onmouseover=style.backgroundColor=\'E9E9E9\' onmouseout=style.backgroundColor=\'F6F6F6\'>");
			document.write("<td width=55%><font class=v2p>&#160;" + this.bltpix.blt + StrngFldrLinc);
			document.write("</td><td width=15%><font class=t8a> " + this.name_a + "</font></td>");
			document.write("<td width=30%>" + asdpp + "</td></tr></table>");
	}
	 else if (this.bltpix == mdc2 ) { 
 	document.write("<br>" + trD + "<td><font class=t8bb>&#160;<a name=" + this.pagelinx + ">" + this.bltpix.blt + "</a>" + this.name + "</font></td></tr></table>");
	}
}


///////////////////// alphaindex 2011
function smnx_ndx_1(){
	vsmrtrnlnx = this.bltpix.blt + "<A HREF=galen/galen" + this.name_a + ".htm target=_self class=hpb>" + this.name + "</a>";
	if (this.pagelinx.substring(0,1) == "g") { 
		document.write("<TABLE WIDTH=100% align=center border=0 valign=top cellspacing=1 cellpadding=2>");

			if (this.pagelinx.substring(2,3) == "a") { 
				var vsmrtrnlnxG = this.SMRTRNLNX1();
				document.write(smmnhvrH6 + "<td width=54% align=left><font class=v2b>" + vsmrtrnlnxG + "</td>");
			} 
			else if (this.pagelinx.substring(5,6) == "a") { 
				document.write(smmnhvrGa + "<td width=54% align=left><font class=v2b>" + vsmrtrnlnx + "</td>");
			} 
			else if (this.pagelinx.substring(5,6) == "e") { 
				document.write(smmnhvrGe + "<td width=54% align=left><font class=v2b>" + vsmrtrnlnx + "</td>");
			} 
			else if (this.pagelinx.substring(5,6) == "o") { 
				document.write(smmnhvrH6 + "<td width=54% align=left><font class=v2bp>" + vsmrtrnlnx + "</td>");
			} 
			else { 
				document.write(smmnhvrH6 + "<td width=54% align=left><font class=v2bp>&#160; " + vsmrtrnlnx + "</td>");
			} 
				document.write("<td width=6% align=center>"+sm_gdaa_iis.blt+"</td><td width=40% align=right><font class=t8a> page " + this.name_a + "</a></td></tr></table>");
	}

	var vsmrtrnlnx = this.SMRTRNLNX1();
	if (this.pagelinx.substring(0,1) == "x") { 
 			var vcarr_bar3 = " <img src=../../images/carr_bar3.gif align=baseline width=30 height=10 border=0> ";
			var StrngFldrLinc = this.bltpix.blt + "<A HREF=smnx" + this.pagelinx.substring(0, 2) + "/" + this.pagelinx + ".htm class=hpb target=_self> ";
			StrngFldrLinc    +=  this.name + " <img src=../../images/carr_bar2.gif align=baseline width=30 height=10 border=0> " + this.name_a + "</a>";
			var Nmbbrvtns2 = this.name_sp + vcarr_bar3 + this.spcmn_ ;
		document.write("<TABLE WIDTH=100% align=center border=0 valign=top cellspacing=1 cellpadding=2>");
			var vsmrtrnlnx = this.SMRTRNLNX1();
			if (this.pagelinx.substring(3,4) == "a" ||this.pagelinx.substring(4,5) == "o") { 
				document.write(smmnhvrGe + "<td width=54%><font class=v2b>" + vsmrtrnlnx + "</td>");
						document.write("<td width=6% align=center>"+sm_fdaa_iis.blt+"</td><td width=40%><font class=v2bp> " + this.name_a + "</td></tr></table>"); 
	} 

			else {
				document.write(smmnhvrH6 + "<td width=54%><font class=v2bp>" + StrngFldrLinc + "</td>");
				document.write("<td width=6% align=center>"+sm_fdaa_iis.blt+"</td><td width=40%><font class=v2bp> " + Nmbbrvtns2 + "</td></tr></table>"); 
		} 
	}

 

	if (this.pagelinx.substring(0,1) == "p") { 
		document.write("<TABLE WIDTH=100% align=center border=0 valign=top cellspacing=1 cellpadding=2>");
			var vsmrtrnlnx = this.SMRTRNLNX1();
			if (this.pagelinx.substring(2,3) == "a" || this.pagelinx.substring(4,5) == "i" || this.pagelinx.substring(5,6) == "a") { 
				document.write(smmnhvrGe + "<td width=54%><font class=v2b>" + vsmrtrnlnx + "</td>");
			} 
			else if (this.pagelinx.substring(4,5) == "o") { 
				document.write(smmnhvrGe + "<td width=54%><font class=v2b>" + vsmrtrnlnx + "</td>");
			} 
			else if (this.pagelinx.substring(2,3) == "x") { 
					if (this.spcmn_ != "") {varSpcmn = " (" + this.spcmn_ + ") ";}else{varSpcmn = "";}

					if (this.cf_cusi != "") { 
						var vsmrtrnlnxX = " <A HREF=smnx" + this.pagelinx.substring(0,2) + "/" + this.pagelinx + "_c.htm target=_self class=hpb>" + this.name + "</a> "+ varSpcmn;
						} else {
						var vsmrtrnlnxX = this.name + " " + varSpcmn;
						}
					document.write(smmnhvrH6 + "<td width=54%><font class=v2bp>"+this.bltpix.blt + vsmrtrnlnxX + "</td>");
			} 

			else {
				document.write(smmnhvrH6 + "<td width=54%><font class=v2bp>" + vsmrtrnlnx + "</td>");
			} 
				document.write("<td width=6% align=center>"+sm_fdaa_iis.blt+"</td><td width=40%><font class=v2bp> " + this.name_a + "</td></tr></table>"); 
	}

	if (this.pagelinx.substring(0,1) == "h" || this.pagelinx.substring(0,1) == "k") { 
		document.write("<TABLE WIDTH=100% align=center border=0 valign=top cellspacing=1 cellpadding=2>");
			if (this.pagelinx.substring(5,7) == "ai") { 
				document.write(smmnhvrGe + "<td width=54%><font class=v2b>" + vsmrtrnlnx + "</td>");
			} 
			else if (this.pagelinx.substring(5,7) == "ao") { 
				document.write(smmnhvrH6 + "<td width=54%><font class=v2b>" + vsmrtrnlnx + "</td>");
			} 
			else {
				document.write(smmnhvrH6 + "<td width=54%><font class=v2bp>" + vsmrtrnlnx + "</td>");
			}
				document.write("<td width=6% align=center>"+sm_chaa_iis.blt+"</td><td width=40%><font class=v2bp> " + this.name_a + "</td></tr></table>"); 
	}
	if (this.pagelinx.substring(0,1) == "c") { 
		document.write("<TABLE WIDTH=100% align=center border=0 valign=top cellspacing=1 cellpadding=2>");
			if (this.pagelinx.substring(1,2) == "k" || this.pagelinx.substring(1,2) == "j" || this.pagelinx.substring(1,2) == "h") { 
				document.write(smmnhvrCH1 + "<td width=54%><font class=v2b>" + vsmrtrnlnx + "</td>");
			} 
			else if (this.pagelinx.substring(5,7) == "ao") { 
				document.write(smmnhvrH6 + "<td width=54%><font class=v2b>" + vsmrtrnlnx + "</td>");
			} 
			else {
				document.write(smmnhvrH6 + "<td width=54%><font class=v2bp>" + vsmrtrnlnx + "</td>");
			}
				document.write("<td width=6% align=center>"+sm_chaa_iis.blt+"</td><td width=40%><font class=v2bp> " + this.name_a + "</td></tr></table>"); 
	}

	if (this.pagelinx.substring(0,1) == "f" || this.pagelinx.substring(0,1) == "a") { 
		document.write("<TABLE WIDTH=100% align=center border=0 valign=top cellspacing=1 cellpadding=2>");
			if (this.pagelinx.substring(1,2) == "d" || this.pagelinx.substring(1,2) == "b") { 
				document.write(smmnhvrCH1 + "<td width=54%><font class=v2b>" + vsmrtrnlnx + "</td>");
			} 
			else {
				document.write(smmnhvrH6 + "<td width=54%><font class=v2bp>" + vsmrtrnlnx + "</td>");
			}
				document.write("<td width=6% align=center>"+this.bltpix.blt+"</td><td width=40%><font class=v2bp> " + this.name_a + "</td></tr></table>"); 
	}

	if (this.pagelinx.substring(0,1) == "t") { 
		document.write("<TABLE WIDTH=100% align=center border=0 valign=top cellspacing=1 cellpadding=2>");
			if (this.pagelinx.substring(3,4) == "a" ) { 
				document.write(smmnhvrCH1 + "<td width=54%><font class=v2b>" + vsmrtrnlnx + "</td>");
				document.write("<td width=6% align=center>"+sm_fdaa_iis.blt+"</td><td width=40%><font class=v2bp> " + this.name_a + "</td></tr></table>"); 
			} 
			else if (this.cf_cusi != "") {
					if (this.spcmn_ != "") {varSpcmn = " (" + this.spcmn_ + ") ";}else{varSpcmn = "";}
				document.write(smmnhvrH6 + "<td width=54%><font class=v2bp>" + vsmrtrnlnx + " " +varSpcmn+"</td>");
				document.write("<td width=6% align=center>"+sm_fdaa_iis.blt+"</td><td width=40%><font class=v2bp> " + this.name_a + "</td></tr></table>"); 
			} 
	}

}
/////////////////////////end







/////////////////////////////ok
function smnxpfrcu(){
	return;
if (this.smnxCNT[4].name_a != "") {AbbrvNm4 = this.smnxCNT[4].name_a;}else{AbbrvNm4 = this.smnxCNT[4].name;}
if (this.smnxCNT[4].pagelinx.substring(2,3) == "a" || this.smnxCNT[4].pagelinx.substring(3,4) == "a") 
{AbbrvNm3 = "";}else{AbbrvNm3 =  " | "+this.smnxCNT[3].SMRTRNLNX0();}
var vsmnxpfrcu = smTab0+"<tr bgcolor=#E6E6E6><td width=1%><img src=../../images/mc_t.gif align=baseline width=4 height=8></td><td width=98%>";
vsmnxpfrcu += smTab0 + "<tr valign=center><td width=67%><font class=a1bb> "+ vsm_frw+" "+this.smnxCNT[0].SMRTRNLNX0()+ " "; 
vsmnxpfrcu +=  " | "+this.smnxCNT[1].SMRTRNLNX0() +" | "+this.smnxCNT[2].SMRTRNLNX0() + AbbrvNm3  +" ";
vsmnxpfrcu += " | "+AbbrvNm4 + " </font></td>";
vsmnxpfrcu += "<td width=15%><font class=t8a><input type=image src=../../images/sm_help.gif onClick=javascript:fdauxEWindvw();> "+vQuickHelp+" </font></td>";
vsmnxpfrcu += "<td width=18% align=right valign=top><table align=top valign=top><tr><td>"+varsm_bf+"</td></tr></table></td></tr></table></td>";
vsmnxpfrcu += "<td width=1%></td></tr></table>";
document.write(vsmnxpfrcu);
}


/////////////////////////////////////////////////////// tocado
function mdxptbaa(){
document.write(smTab0+"<tr><td colspan=3 height=8></td></tr><tr valign=top><td width=47%><font class=v2p>");
}

function ehnpbr() {
document.write(" <BR>");
}

pbbax010 = new mdxp_o("THE PHYSICAL EXAMINATION","physical",mdc0,"","a","pbbax010");
hbbax000 = new mdxp_o("THE HISTORY","history",mdc1,"","a","hbbax000");
hbaa0000 = new mdxp_o("Clinical Methods"," ",mdc1,""," ","hbaa0000");

hccdb000 = new mdxp_o("Patient Data","Patient Data",mdc2,"","zt","hccdb000");
hccdd000 = new mdxp_o("History","History",mdc2,"","zt","hccdd000");
hccdk000 = new mdxp_o("Risk Factors","Risk Factors",mdc2,"","zt","hccdk000");
hccdg000 = new mdxp_o("Presentation","Presentation",mdc2,"","zt","hccdg000");
hccdp000 = new mdxp_o("Physical Exam","Physical Exam",mdc2,"","zt","hccdp000");
hccdp173 = new mdxp_o("Provider Name","name",mdc6,"Provider","a","hccdp173");
hcdcb001 = new mdxp_o("Patient Name","name",mdc6,"Patient","a","hcdcb001");
bnofb121 = new mdxp_o("Printing","",sm_prnt,"","miznvvnnzx","bnofb121","","","","color","","black","","","");
bnofc123 = new mdxp_o("","",sm_brs,"","ztxnttaayc","bnofc123");

///////////new eH&P
smshnpscmplt = new mdxp_o("Complete", "Complete", ehnp_doc, "", "99CCEE", "c");
smshnpsbrf = new mdxp_o("Brief", "Brief", ehnp_doc, "", "BEE9F6", "b");
smshnpssns = new mdxp_o("Signs & Symptoms", "S&S", ehnp_doc3, "", "e0e0e0", "s");
smshnpsfuc = new mdxp_o("Follow/Up", "F/U chart",  ehnp_chrt, "", "BBCCCC", "f");
smshnpsexe = new mdxp_o("Executive", "Executive",  ehnp_chrt, "", "AABBCC", "x");
smshnpsbpn = new mdxp_o("Progress Note", "Brief PN",  ehnp_chrt, "", "BEE9F6", "p");
smshnpscpn = new mdxp_o("Progress Note", "Comp PN",  ehnp_chrt, "", "99CCEE", "s");

smshnpsimd = new mdxp_o("Internal Medicine", "IM",  ehnp_chrt, "", "99CCEE", "s");
smshnpsimh = new mdxp_o("Internal Medicine | Hospitalist", "IM | Hosp",  ehnp_chrt, "", "99CCEE", "s");
smshnpshpt = new mdxp_o("Hospitalist", "Hosp",  ehnp_chrt, "", "99CCEE", "s");

/////smshnps2rdfrmt = new ehnp_o("read", "Read format", ehnp_glss, "DDDDDD", "", "rd");
smshnps2prntfrmt = new mdxp_o("print", "Print format", sm_prntn, "DDDDDD", "", "pn");
smshnps2prntfrmtc = new mdxp_o("print color", "Print format cc", sm_prntn, "DDDDDD", "", "pn");
smshnps2prntfrmtu = new mdxp_o("print underlined", "Print underline", sm_prntn, "DDDDDD", "", "pn");
smshnps2prntfrmtm = new mdxp_o("print marked", "Print marked", sm_prntn, "DDDDDD", "", "pn");

hbaaaaa0 = new mdxp_o("Clinical Methods","",mdc0,"","","hbaaaaa0");
hbbaeae0 = new mdxp_o("The History","History",mdc1,"","an190zx","hbbaeae0");
hcbaiai0 = new mdxp_o("Identification Data","ID",mdc1,"","an191zx","hcbaiai0");
hdbaiai0 = new mdxp_o("Chief Complaint","CC",mdc1,"","an191zx","hdbaiai0");
hfbaiai0 = new mdxp_o("History of Present Illness","HPI",mdc1,"","an191zx","hfbaiai0");
hgbaiai0 = new mdxp_o("Past Medical History","PMH",mdc1,"","an191zx","hgbaiai0");
hgjccao0 = new mdxp_o("Health Maintenance","HM",mdc2,"","an192zx","hgjccao0");
hgkccao0 = new mdxp_o("Health Risk Assessment","HRA",mdc2,"","an192zx","hgkccao0");
hhbaiai0 = new mdxp_o("Allergies","",mdc1,"","an191zx","hhbaiai0");
hjbaiai0 = new mdxp_o("Medications","MEDS",mdc1,"","an191zx","hjbaiai0");
hkbaiai0 = new mdxp_o("Social History","SH",mdc1,"","an191zx","hkbaiai0");
hlbaiai0 = new mdxp_o("Family History","FH",mdc1,"","an191zx","hlbaiai0");
hmbaiai0 = new mdxp_o("Ob-Gyn History","ob-gyn ",mdc1,"","an191zx","hmbaiai0");
hrbaiai0 = new mdxp_o("Review Of Systems","ROS",mdc1,"","an191zx","hrbaiai0");
hrwaoao0 = new mdxp_o("Pain Characterization","Pain",mdc2,"","xn196zx","hrwaoao0");
kbbaeae0 = new mdxp_o("The Physical Examination","Physical",mdc1,"","an190zx","kbbaeae0");
kcbaiai0 = new mdxp_o("General Appearance","GA",mdc1,"","an191zx","kcbaiai0");
kdbaiai0 = new mdxp_o("Vital Signs","VS",mdc1,"","an191zx","kdbaiai0");
kfbaiai0 = new mdxp_o("Skin","",mdc1,"","an191zx","kfbaiai0");
kgbaiai0 = new mdxp_o("Lymph Nodes","Nodes",mdc1,"","an191zx","kgbaiai0");
khbaiai0 = new mdxp_o("HEENT","HEENT",mdc1,"Head/eyes/ears/nose/throat  ","an191zx","khbaiai0");
kjbaiai0 = new mdxp_o("Neck","Neck",mdc1,"","an191zx","kjbaiai0");
kkbaiai0 = new mdxp_o("Thorax","Chest",mdc1,"","aa191zx","kkbaiai0");
kkdaoao0 = new mdxp_o("Lungs","",mdc2,"","an192zx","kkdaoao0");
kkhaoao0 = new mdxp_o("Heart","",mdc2,"","an192zx","kkhaoao0");
kkmaoao0 = new mdxp_o("Breasts","",mdc2,"","an192zx","kkmaoao0");
kkqaoao0 = new mdxp_o("Back","",mdc2,"","an192zx","kkqaoao0");
kmbaiai0 = new mdxp_o("Abdomen","Abdo",mdc1,"","an191zx","kmbaiai0");
kmjaoao0 = new mdxp_o("Liver","liver",mdc2,"","an192zx","kmjaoao0");
kpbaiai0 = new mdxp_o("Extremities","Ext",mdc1,"","an191zx","kpbaiai0");
kqbaiai0 = new mdxp_o("Genitalia","",mdc1,"","an191zx","kqbaiai0");
krbaiai0 = new mdxp_o("Rectal Exam","",mdc1,"","an191zx","krbaiai0");
ksbaiai0 = new mdxp_o("Neurological Exam","Neuro",mdc1,"","an191zx","ksbaiai0");
ktbaiai0 = new mdxp_o("Musculoskeletal Exam","MS Exam",mdc1,"","an191zx","ktbaiai0");
kvbaiai0 = new mdxp_o("Pulses","Pulses",mdc1,"","an191zx","kvbaiai0");

hrcaiao0 = new mdxp_o("Subjective","S",mdc0,"","xa190zx","hrcaiao0");

hbbaiao0 = new mdxp_o("Subjective","S",mdc0,"","xn190zx","hbbaiao0");
kbbaiao0 = new mdxp_o("Objective","O",mdc0,"","xn190zx","kbbaiao0");

smnxH = new Array(hbbaeae0,hcbaiai0,hdbaiai0,hfbaiai0,hgjccao0,hhbaiai0,hjbaiai0,hkbaiai0,hlbaiai0,hmbaiai0,hrbaiai0,hrwaoao0)

smnxK = new Array(kbbaeae0,kcbaiai0,kdbaiai0,kfbaiai0,kgbaiai0,khbaiai0,kjbaiai0,kkbaiai0,
kkdaoao0,kkhaoao0,kkmaoao0,kkqaoao0,kmbaiai0,kmjaoao0,kpbaiai0,kqbaiai0,krbaiai0,ksbaiai0,ktbaiai0,kvbaiai0)


///////////
abaax000 = new mdxp_o("geocities&#174;","",sm_abaa_ii,"","2","abaax000","#166083","#4993b9","","_self","mdxp1","r9","","","");
abaqx000 = new mdxp_o(vContactus,"",mdc1,"","4","abaqx000","eeeeee","eeeeee","","_self","hpbs","a8","","","");

abadx000 = new mdxp_o(vabout+" geocities",vNotice,sm_abaa_ii,"","4","abadx000","","","","_self","mcolb","r8","","","");
abatm000 = new mdxp_o("&#169;2019 geocities","",mdc1,"","4","abaum000","","","","_self","hpbs","t7pb","","","");
abamm000 = new mdxp_o("MedML&#174;","Medical Markup Language&#153;",sm_rhs,"","4","abamm000","","","","_self","hpbs","r8","","","");
abarm000 = new mdxp_o("rhombex&#153;","",sm_rhs,"","4","abarm000","","","","_self","hpbs","a8","","","");
abapm000 = new mdxp_o(vPrivacystatement,"",mdc1,"","4","abapm000","","","","_self","hpbs","a8","","","");
absmx000 = new mdxp_o(vmission,"",sm_abaa_ii,"","4","absmx000",""," ","","_self","mcolb","r8","","","");
abaum000 = new mdxp_o(vTermsofUse,"",mdc1,"","4","abaum000","","","","_self","hpbs","r8","","","");
abavm000 = new mdxp_o(vDisclaimer,"",mdc1,"","4","abaum000","","","","_self","hpbs","r8","","","");
abawm000 = new mdxp_o(vCopyrights,"",mdc1,"","4","abawm000","","","","_self","hpbs","r8","","","");
abazx000 = new mdxp_o(vNotice,"notice",mdc1,"","4","abazx000","","","","_self","hpbs","r8","","","");
abshx000 = new mdxp_o("Company History","",mdc1,"","4","abshx000"," "," ","","_self","hpbs","r8","","","");
absjx000 = new mdxp_o("JAMA Appearances","",mdc1,"","4","absjx000","1f496e","4993b9","1f496e","_self","mcolb","r8","","","");
abagx000 = new mdxp_o(vHelp,vHelp,mdc1,"","13","abagx000","9fbfcf","4993b9","","_self","hpb","r8","","","");
abahx000 = new mdxp_o(vRegistration,"",mdc1,"","4","abahx000","eeeeee","eeeeee","","_self","hpbs","r8","","","");
abanx000 = new mdxp_o(vFeedback,"",mdc1,"","4","abanx000"," "," ","","_self","hpb","r8","","","");
abdvx000 = new mdxp_o("MedApps&#153;","",sm_abaa_ii,"","4","abdvx000","","","","_self","hpbs","r8","","","");
abkdx000 = new mdxp_o("eH&P","",mdc1,"","4","abkdx000"," "," ","","_self","hpbs","a8","","","");

abndx000 = new mdxp_o("geocities Network","",sm_abaa_ii,"","2","abndx000","#166083","#4993b9","","_self","mdxp1","r8","","","");
bnaax000 = new mdxp_o("geocities Network","",sm_abaa_ii,"","2","abndx000","#166083","#4993b9","","_self","mdxp1","r8","","","");
bnabx000 = new mdxp_o(vSections,"sctns",mdc1,""," ","bnabx000"," ","",""," "," "," ","","","");
bnaix000 = new mdxp_o(vAlphabeticIndex,vIndex,mdc1,"","10","bnaix000","e9e9e9","dadde0","","_self","hpb","r9","","","");
bnaex000 = new mdxp_o(vabbreviations,vabbrev,mdc1,"","11","bnaix000","e9e9e9","dadde0","","_self","hpb","r9","","","");
bnayx000 = new mdxp_o(vReferences,vRefs,mdc1,"","12","bnayx000","e9e9e9","dadde0","","_self","hpb","r9","","","");
bnawx000 = new mdxp_o(vWebResources,"",mdc1,"","12","bnawx000","CCCCBB","DDDDCC","","_self","hpb","r9","","","");

bnayx100 = new mdxp_o(vBooks,"",mdc1,"","","bnayx100","","","","","","","","","");
bnayx200 = new mdxp_o("Journals","",mdc1,"","","bnayx200","","","","","","","","","");
bnawx100 = new mdxp_o(vGuidelines,"",mdc1,"","","bnawx100","","","","","","","","","");
bnawx200 = new mdxp_o(vWebsites,"",mdc1,"","","bnawx200","","","","","","","","","");


fdaax000 = new mdxp_o("BloodCalc&#174;","",sm_fdaa_ii,"","3","fdaax000","00788B","4993a3","00788B","_self","mdxp1","r9","","","");
fdabx000 = new mdxp_o(vSections,"",mdc1,"","","fdabx000"," ","",""," "," "," ","","","");
/////OLD OK fdacx000 = new mdxp_o(vTableofContents,vTOC,sm_fdaa_ii,"","6","fdacx000","dadde0","c9cccf","","_self","hpb","h9b","","","");
fdacx000 = new mdxp_o(vTableofContents,vTOC,sm_fdaa_ii,"","6","fdacx000","e9e9e9","dadde0","","_self","hpb","r9","","","");
fdadx000 = new mdxp_o(vBriefTOC,vbTOC,sm_fdaa_ii,"","7","fdadx000","e9e9e9","dadde0","","_self","hpb","r9","","","");
fdafx000 = new mdxp_o("Stat-Finder","Stat-Finder",sm_fdaa_ii,""," ","fdafx000","b9bbbf","c9cccf","a9aab0",""," ","hpb","r9","","","");
fdahx000 = new mdxp_o(vEquations,vEq,sm_fdaa_iis,"","8","fdahx000","e9e9e9","dadde0","","_self","hpb","r9","","","");
fdajx000 = new mdxp_o(vTOPEq,"",mdc1,"","8","fdajx000","dadddd","c9cccc","","_self","hpb","t8a","","","");
fdakx000 = new mdxp_o(vLabValuesTests,vlabs,sm_labs_ii,"","zt","fdakx000","d6dddd","c9cccc","","_self","hpb","r9","","","");
fdalx000 = new mdxp_o(vDrugs,vdrugs,mdc1,"","","fdalx000","d6dddd","c9cccc","","_self","hpb","t8a","","","");
fdamx000 = new mdxp_o(vConversion,vconv,sm_vconv1,"","9","fdamx000","e9e9e9","dadde0","","_self","hpb","r9","","","");
fdanx000 = new mdxp_o(vTOPCn,"",mdc1,"","9","fdamx000","d6dddd","c9cccc","","_self","hpb","t8a","","","");
fdaex000 = new mdxp_o(vAlphabeticIndex,vIndex,sm_fdaa_ii,"","10","fdaex000","e9e9e9","dadde0","","_self","hpb","r9","","","");
fdaix000 = new mdxp_o(vabbreviations,vabbrev,sm_fdaa_ii,"","11","fdaix000","e9e9e9","dadde0","","_self","hpb","r9","","","");
fdasx000 = new mdxp_o(vSearch,vSearch,sm_vsrch2,"","","fdaex000","c9cccf","b9bbbf","","_self","hpb","a8","","","");	

fdaux000 = new mdxp_o(vHelp,vHelp,sm_vhelp2,"","13","fdaux000","9fbfcf","4993b9","","_blank","hpb","r9","","","");
fdaox000 = new mdxp_o(vTutorial,vTutorial,mdc1,""," ","fdaox000","b9bbbb","c9cccc","a9aab0","","_self","hpb","t8a","","","");
fdatx000 = new mdxp_o("BloodCalc&#174;","",sm_fdaa_iis,"","2","fdatx000","#00788C","#4993a3","338090","_self","mdxp1","h9b","","","");
fdavx000 = new mdxp_o(vEditors,"",sm_fdaa_iis,"","4","fdavx000","c9cccf","b9bbbf","","_self","redol","a8","","","");
fdaxx000 = new mdxp_o(vMedRefCards,vMedRF,mdc1,"","10","fdaxx000","c9cccf","b9bbbf","","_self","hpb","a8","","","");
fdayx000 = new mdxp_o(vReferences,vRefs,mdc1,"","12","fdayx000","e9e9e9","dadde0","","_self","hpb","r8","","","");
fdazx000 = new mdxp_o(vNotice,"",mdc1,"","4","fdazx000","eeeeee","eeeeee","","_self","redol","a8","","","");
fdawx000 = new mdxp_o(vWebResources,"",mdc1,"","","fdawx000","","","","","","","","","");
fdarx000 = new mdxp_o("Dedication","dedication",mdc1,"","","fdarx000","166083","4993b9","","_self","hpb","v1","","","");

fdayx100 = new mdxp_o(vBooks,"",mdc1,"","","fdayx100","","","","","","","","","");
fdayx200 = new mdxp_o("Journals","",mdc1,"","","fdayx200","","","","","","","","","");
fdawx100 = new mdxp_o(vGuidelines,"",mdc1,"","","fdawx100","","","","","","","","","");
fdawx200 = new mdxp_o(vWebsites,"",mdc1,"","","fdawx200","","","","","","","","","");

gdaax000 = new mdxp_o("Galen&#153;","",mdc1,"","3","gdaax000","166083","#499393","#338080","_self","mdxp1","a8","","","");	
gdacx000 = new mdxp_o("CONTENTS (Full)","Contents",mdc1,"","6","gdacx000","#545454","#2a2929","","_self","toolLink","h9b","","","");
gdadx000 = new mdxp_o("Contents (Brief)","brief TOC",mdc1,"","7","gdadx000","#545454","#2a2929","","_self","toolLink","h9b","","","");			

abddx000 = new mdxp_o(vMedicalApps,"Start",sm_abaa_ii,"","13","abddx000","c6ddff","c6ddff","","_self","hpb","r8","","","");
/////chaax000 = new mdxp_o("eH&P","",mdc1,"","","bhaax000","","pagelinx","","","","","","","");
dgaax000 = new mdxp_o("Health 101","",mdc1,"","","dgaax000","","pagelinx","","","","","","","");
dhaax000 = new mdxp_o("Salud 101","",mdc1,"","","dhaax000","","pagelinx","","","","","","","");

djaax000 = new mdxp_o("Cholesterol","",mdc1,"","","djaax000","","pagelinx","","","","","","","");

/////eH&P #F58229
chaax000 = new mdxp_o("eH&P&#153;","Custom History & Physical Exam&#153;",sm_chaa_iis,"","3","chaax000","166083","4993b9","4E5965","_self","mdxp1","h9b","","","");
chabx000 = new mdxp_o(vSections,"sctns",sm_chaa_iis,"","","chabx000","","","","",""," "," "," ","");
chacx000 = new mdxp_o(vTableofContents,vTOC,sm_chaa_iis," ","6","chacx000","e9e9e9","dadde0","","_self","hpb","r9","","","");
chadx000 = new mdxp_o(vBriefTOC,vbTOC,sm_chaa_iis,"","7","chadx000","e9e9e9","dadde0","","_self","hpb","r9","","","");
chafx000 = new mdxp_o("Stat-Finder","Stat-Finder",sm_chaa_iis,"","","chafx000","b9bbbf","c9cccf","a9aab0","","","","","","","");
chahx000 = new mdxp_o("Clinical Methods","CM",sm_chaa_iis," "," ","chahx000","e9e9e9","dadde0","","_self","hpb","r9","","","");
chajx000 = new mdxp_o("Top H&Ps","Top H&Ps",sm_chaa_iis,"","","chakx000","d6dde0","c9cccf","","_self","hpb","h9b","","","");
chakx000 = new mdxp_o("Specific H&Ps","sH&P",sm_chaa_iis," ","8","chakx000","e9e9e9","dadde0","","_self","hpb","r9","","","");
chalx000 = new mdxp_o("The History","History",sm_chaa_iis,"","","chalx000","dadde0","c9cccf","","_self","hpb","t8a","","","");
chamx000 = new mdxp_o("The Physical Examination","PE",sm_chaa_iis,"","","chamx000","dadde0","c9cccf","","_self","hpb","t8a","","","");
chanx000 = new mdxp_o("H&P @ a Glance","H&P @ a Glance",sm_chaa_ii,"","","chanx000","d6dde2","c9cccf","","_self","hpb","t8a","","","");
chaqx000 = new mdxp_o("All specific H&Ps","All sH&P",sm_chaa_iis,""," ","chaqx000","d6dde0","c9cccf","","_self","hpb","t8a","","","");
chaex000 = new mdxp_o(vAlphabeticIndex,vIndex,sm_chaa_iis,"","10","chaex000","c9cccf","b9bbbf","","_self","hpb","a8","","","");
chaix000 = new mdxp_o(vabbreviations,vabbrev,sm_chaa_iis," ","11","chaix000","c9cccf","b9bbbf","","_self","hpb","a8"," "," ","");
chasx000 = new mdxp_o(vSearch,vSearch,sm_vsrch2,"","","chaex000","c9cccf","b9bbbf","","_self","hpb","a8","","","");	
chaux000 = new mdxp_o(vHelp,vHelp,smm_hlp22," ","13","chaux000","b99349","ddb766","","_blank","hpb","h9b","","","");
chaox000 = new mdxp_o(vTutorial,vTutorial,sm_chaa_iis," "," ","chaox000","b9bbbf","c9cccf","a9aab0","","","","","","","");
chatx000 = new mdxp_o("eH&P&#153;","",sm_chaa_iis,"","2","chatx000","#864410","CA6618","#338090","_self","mdxp1","h9b","","","");///B05108
chavx000 = new mdxp_o(vEditors,"",sm_chaa_iis," ","","chavx000","c9cccf","b9bbbf","","_self","hpb","a8","","","");
chayx000 = new mdxp_o(vReferences,vRefs,sm_chaa_iis," ","12","bcayx000","c9cccf","b9bbbf","","_self","hpb","a8","","","");
chazx000 = new mdxp_o(vNotice,"",sm_chaa_iis,"","4","chazx000","eeeeee","eeeeee","","_self","hpb","a8","","","");
chawx000 = new mdxp_o(vWebResources,"",sm_chaa_iis,"","","chawx000","","","","","","","","","");
charx000 = new mdxp_o(vDedication,vDedication,sm_chaa_iis,"","","charx000","166083","4993b9","","_self","hpb","v1","","","");


abbcx000 = new mdxp_o("XSUM&#174;","Start",mdc1,"","4","abbcx000","","","","_self","hpbs","h9b","","","");
bcaax000 = new mdxp_o("XSUM&#174;","Custom Medicine",mdc1,"","3","bcaax000","166083","4993b9","3380b0","_top","mdxp1","h9b","","","");
bcabx000 = new mdxp_o(vSections,"sctns",mdc1,"","","bcabx000","","","","","","","","","");
bcacx000 = new mdxp_o(vTableofContents,vTOC,mdc1," ","6","bcacx000","dadde0","c9cccf","","_self","hpb","h9b","","","");
bcadx000 = new mdxp_o(vBriefTOC,vbTOC,mdc1,"","7","bcadx000","dadde0","c9cccf","","_self","hpb","h9b","","","");
bcafx000 = new mdxp_o("Stat-Finder","Stat-Finder",mdc1,"","","bcafx000","b9bbbf","c9cccf","a9aab0","","","","","","","");
bcahx000 = new mdxp_o(vDocuments,vdocs,mdc1," "," ","bcahx000","dadde0","c9cccf","","_self","hpb","h9b",""," ","");
bcakx000 = new mdxp_o("iTemps&#153; Medical Templates","itemps",mdc1," ","8","bcakx000","dadde0","c9cccf","","_self","hpb","h9b",""," ","");
bcalx000 = new mdxp_o("iDox&#174; Templates (Basic)","bTemps",mdc1," ","9","bcalx000","dadde1","c9cccf","","_self","hpb","h9b",""," ","");
bcamx000 = new mdxp_o("iDox&#174; Templates","iTemps",mdc1," ","","bcamx000","dadde2","c9cccf","","_self","hpb","h9b"," "," ","");
bcanx000 = new mdxp_o("Clinical Methods","",mdc1," "," ","bcanx000","dadde2","c9cccf","","_self","hpb","h9b"," ","","");
bcaex000 = new mdxp_o(vAlphabeticIndex,vIndex,mdc1,"","10","bcaex000","c9cccf","b9bbbf","","_self","hpb","h9b","","","");
bcaix000 = new mdxp_o(vabbreviations,vabbrev,mdc1," ","11","bcaix000","c9cccf","b9bbbf","","_self","hpb","h9b","","","");
bcaux000 = new mdxp_o(vHelp,vHelp,mdc1," ","13","bcaux000","b99349","ddb766","","_blank","hpb","t8a"," "," ","");
bcaox000 = new mdxp_o(vTutorial,vTutorial,mdc1," "," ","bcaox000","b9bbbf","c9cccf","a9aab0","","","","","","","");
bcatx000 = new mdxp_o("XSUM&#174;","",mdc1,"","2","bcatx000","4993b9","9fbfcf","338090","_self","hpb","h9b","","","");
bcavx000 = new mdxp_o(vEditors,"",mdc1," ","","bcavx000","c9cccf","b9bbbf","","_self","hpb","a8","","","");
bcayx000 = new mdxp_o(vReferences,vRefs,mdc1," ","12","bcayx000","c9cccf","b9bbbf","","_self","hpb","h9b","","","");
bcazx000 = new mdxp_o(vNotice,"",mdc1,"","4","bcazx000","eeeeee","eeeeee","","_self","hpb","a8","","","");

bnaux000 = new mdxp_o(vHelp,vHelp,mdc1,"","13","bnaux000","9fbfcf","4993b9","","_self","hpb","t8a","","","");

abdmx000 = new mdxp_o("iDox&#174;","Start",mdc1,"","4","abdmx000","","","","_self","hpbs","h9b","","","");
dmaax000 = new mdxp_o("iDox&#174;","Intelligent Medical Templates&#153;",sm_dmaa_ii,"","3","dmaax000","166083","4993b9","4E5965","_self","mdxp1","h9b","","","");
dmatx000 = new mdxp_o("iDox�","",sm_dmaa_ii,"","2","dmatx000","4993b9","9fbfcf","338090","_self","hpb","h9b","","","");


smnxB = new Array(bcaax000,bcabx000,bcacx000,bcadx000,bcafx000,bcahx000,bcakx000,bcalx000,
bcamx000,bcanx000,bcaex000,bcaix000,bcaux000,bcaox000,bcatx000,bcavx000,bcayx000,bcazx000)

smnxBCAA = new Array(abndx000,bcatx000,bcacx000,bcadx000,bcahx000,bcamx000,
bnaix000,bnaex000,bnayx000,abaqx000,fdazx000,abaum000,abapm000,abawm000,abatm000)

smnxF = new Array(fdaax000,fdabx000,fdacx000,fdadx000,fdafx000,fdahx000,fdakx000,
fdamx000,fdaxx000,fdaex000,fdaix000,fdaux000,fdaox000,fdatx000,fdavx000,fdayx000,fdawx000,fdazx000)

smnxFDAA = new Array(abndx000,fdatx000,fdacx000,fdadx000,fdahx000,fdamx000,
bnaix000,bnaex000,bnayx000,abaqx000,fdazx000,abaum000,abapm000,abawm000,abatm000)

smnxC = new Array(chaax000,chabx000,chacx000,chadx000,chafx000,chahx000,chakx000,chalx000,
chamx000,chanx000,chaex000,chaix000,chaux000,chaox000,chatx000,chavx000,chayx000,chazx000)

smnxCHAA = new Array(abndx000,chatx000,chacx000,chadx000,chahx000,chakx000,
bnaix000,bnaex000,bnayx000,abaqx000,chazx000,abaum000,abapm000,abawm000,abatm000)

/////////////
cpbbbai0 = new mdxp_o("Patient Specific H&Ps","custom H&Ps",mdc1,"","","cpbbbai0","",""); //Epic Stop in nvcu_lw
cpbgbao0 = new mdxp_o("Patient Specific H&Ps","custom H&Ps",mdc1,"","","cpbgbao0");

cpbbbai9 = new mdxp_o("Patient Specific H&Ps","custom H&Ps",sm_chaa_ii,"","","cpbbbai9","",""); 

cpbgcbb7 = new mdxp_o("iDox&#174; Patient-Specific NOTES","pt-sp Notes",mdc4,"","","cpbgcbb7");
cpbgcbb8 = new mdxp_o("iDox&#174; Patient-Specific NOTES TEST","pt-sp Notes",mdc4,"","","cpbgcbb8");
cpbgcbc1 = new mdxp_o("Patient Specific H&Ps","custom H&Ps",mdc4,"","","cpbgcbc1");
cpbgcbh2 = new mdxp_o("Patient Specific H&Ps (abbrevs)","custom H&Ps (abbrevs)",mdc4,"","","cpbgcbh2");	

cpbgddc3 = new mdxp_o("Patient Specific H&Ps","custom H&Ps",mdc4,"","","cpbgddc3");
cpbgddh4 = new mdxp_o("Patient Specific H&Ps (abbrevs)","custom H&Ps (abbrevs)",mdc4,"","","cpbgddh4");
cpbgdfd5 = new mdxp_o("Patient Specific H&Ps","custom H&Ps",mdc4,"","","cpbgdfd5");	
cpbgdfg6 = new mdxp_o("Patient Specific H&Ps (abbrevs)","custom H&Ps (abbrevs)",mdc4,"","","cpbgdfg6");	


cpkcdbc1 = new mdxp_o("Master H&Ps","master H&P",mdc4,"","","cpkcdbc1");
cpkcddb5 = new mdxp_o("Master H&Ps (dark)","master H&P (dark)",mdc4,"","","cpkcddb5");

cpscddc0 = new mdxp_o("Patient Specific Data","Pt-sp Data",sm_dmaa_iis,"","","cpscddc0");

//////////////////
fpbai000 = new mdxp_o("mCalx&#153; Master Calculator","mCalx&#153;",sm_fdaa_cc,"","zt","fpbai000");
fpbgb111 = new mdxp_o("mCalx&#153; Master Calculator","mCalx&#153;",sm_fdaa_cc,"Master Calculator","","fpbgb111");
fpbgc222 = new mdxp_o("mCalx&#153; Master Calculator (abbrevs)","mCalx&#153 (abbrevs)",sm_fdaa_cc,"Master Calculator","","fpbgc222");	
fpbgg555 = new mdxp_o("mCalx&#153; Master Calculator","mCalx&#153;",sm_fdaa_cc,"Master Calculator","","fpbgg555");


dpbgc111 = new mdxp_o("iDox&#174;","iDox&#174;",sm_dmaa_ii,"","","dpbgc111");
syaax000 = new mdxp_o("Synt&#153;","Medical Intelligence Augmentation&#153;",sm_synt_ii,"","3","syaax000","166083","4993b9","4E5965","_self","mdxp1","h9b","","","");
sybgc333 = new mdxp_o("Synt&#153;","Synt&#153;",sm_synt_ii,"","","sybgc333");


smnxCP = [cpbbbai0];
smnxCPB = [cpbbbai0,cpbgbao0,cpbgcbc1];
/////////////
dpbbbai0 = new mdxp_o("iDox Master","iDox Mstr",sm_dmaa_ii,"","","dpbbbai0");
dpbcbbc0 = new mdxp_o("iDox Master Page","iDox Mstr Page",sm_dmaa_ii,"","","dpbcbbc0");
dpbcbhh0 = new mdxp_o("iDox Master Info","iDox Mstr Info",sm_dmaa_ii,"","","dpbcbhh0");
fpbbbai0 = new mdxp_o("BloodCalc Master","BloodCalc Mstr",sm_fdaa_ii,"","","fpbbbai0");
fpbcbbc0 = new mdxp_o("BloodCalc Master Page","BloodCalc Mstr Page",sm_fdaa_ii,"","","fpbcbbc0");


ckbbbai0 = new mdxp_o("Endocrinology","Endo",sm_chaa_iis,"","","ckbbbai0");	
ckbcbao0 = new mdxp_o(vManifestationsofDisease,"",mdc2,"","","ckbcbao0");	
	
ckbgbao0 = new mdxp_o("Metabolic Disease","",mdc2,"","","ckbgbao0");	
ckbgcbc1 = new mdxp_o("Diabetes Mellitus","DM",mdc4,"","daznttaazx","ckbgcbc1",sm_endos);	
ckbgccb2 = new mdxp_o("Diabetic Ketoacidosis","DKA",mdc4,"","","ckbgccb2",sm_endos);	
ckbjbao0 = new mdxp_o("Thyroid Disease","",mdc2,"","","ckbjbao0",sm_endos);	
ckbjcbc1 = new mdxp_o("Hypothyroidism","Hypothyroidism",mdc4,"","","ckbjcbc1",sm_endos);	
ckbjccd2 = new mdxp_o("Hyperthyroidism","Hyperthyroidism",mdc4,"","","ckbjccd2",sm_endos);	
ckbmbao0 = new mdxp_o("Adrenal Disease","",mdc2,"","","ckbmbao0",sm_endos);	
ckbmcbc1 = new mdxp_o("Adrenal Insufficiency ","Adrenal Insuf",mdc4,"","","ckbmcbc1",sm_endos);	
ckbmccd2 = new mdxp_o("Hypercortisolism","Hypercortisolism",mdc4,"","","ckbmccd2",sm_endos);	
ckbpbao0 = new mdxp_o("Parathyroid Disease","",mdc2,"","","ckbpbao0",sm_endos);	
ckbpcbc1 = new mdxp_o("Hypoparathyroidism","Hypopara",mdc4,"","","ckbpcbc1",sm_endos);	
ckbpccd2 = new mdxp_o("Hyperparathyroidism","Hyperpara",mdc4,"","","ckbpccd2",sm_endos);
ckbpcdb3 = new mdxp_o("Osteoporosis","Osteoporosis",mdc4,"","","ckbpcdb3",sm_endos);

ckcbbai0 = new mdxp_o("Gastrointestinal","GI",sm_chaa_iis,"","","ckcbbai0");	
ckcdbao0 = new mdxp_o(vManifestationsofDisease,"",mdc2,"","","ckcdbao0");	
ckcddcd1 = new mdxp_o("Abdominal Pain","abdo pain",mdc4,"","","ckcddcd1",sm_gasts);	
ckcdddb2 = new mdxp_o("Nausea & Vomiting","N&V",mdc4,"","","ckcdddb2",sm_gasts);	
ckcddfb3 = new mdxp_o("Weight Loss","wt loss",mdc4,"","","ckcddfb3",sm_gasts);	
ckcddkb4 = new mdxp_o("Diarrhea","diarrhea",mdc4,"","","ckcddkb4",sm_gasts);	
ckcfbao0 = new mdxp_o("Gastrointestinal Disease","GI disease",mdc2,"","","ckcfbao0",sm_gasts);	
ckcffbc1 = new mdxp_o("GI Bleeding","GIB",mdc4,"","","ckcffbc1",sm_gasts);	
ckcffcd2 = new mdxp_o("Upper GI Bleeding","UGIB",mdc4,"","","ckcffcd2",sm_gasts);	
ckcffdk3 = new mdxp_o("Lower GI Bleeding","LGIB",mdc4,"","","ckcffdk3",sm_gasts);	
ckcfgdb1 = new mdxp_o("Peptic Ulcer Disease","PUD",mdc4,"","","ckcfgdb1",sm_gasts);	
ckchbao0 = new mdxp_o("Absorption","",mdc2,"","","ckchbao0",sm_gasts);	
ckckbao0 = new mdxp_o("Intestinal Disease","",mdc2,"","","ckckbao0",sm_gasts);	
ckckcbc1 = new mdxp_o("Mesenteric Ischemia","Mesenteric Ischemia",mdc4,"","","ckckcbc1",sm_gasts);	
ckckdcb2 = new mdxp_o("Intestinal Obstruction","Int Obst",mdc4,"","","ckckdcb2",sm_gasts);	
ckckfgb2 = new mdxp_o("Inflammatory Bowel Disease","IBD",mdc4,"","","ckckfgb2",sm_gasts);	
ckckfhf3 = new mdxp_o("Crohn's Disease","Crohn",mdc4,"","","ckckfhf3",sm_gasts);	
ckckfjk4 = new mdxp_o("Ulcerative Colitis","UC",mdc4,"","","ckckfjk4",sm_gasts);	
ckckhlb1 = new mdxp_o("Irritable Bowel Syndrome","IBS",mdc4,"","","ckckhlb1",sm_gasts);	
ckckkmc2 = new mdxp_o("Acute Appendicitis","Ac Appendicitis",mdc4,"","","ckckkmc2",sm_gasts);	
ckcmbao0 = new mdxp_o("Liver","liver",mdc2,"","zt","ckcmbao0");	
ckcmcbc1 = new mdxp_o("Jaundice","Jaundice",mdc4,"","","ckcmcbc1",sm_livers);	
ckcmdcb1 = new mdxp_o("Hepatitis","Hepatitis",mdc4,"","","ckcmdcb1",sm_livers);	
ckcmfdc4 = new mdxp_o("Liver Cirrhosis","Cirrhosis",mdc4,"","","ckcmfdc4",sm_livers);	
ckcmjhh7 = new mdxp_o("Alcohol Withdrawal","Etoh withd",mdc4,"","","ckcmjhh7",sm_livers);	
ckcpbao0 = new mdxp_o("Gallbladder Disease","",mdc2,"","","ckcpbao0");	
ckcpcbc1 = new mdxp_o("Cholecystitis","Cholecystitis",mdc4,"","","ckcpcbc1",sm_gasts);	
ckcrbao0 = new mdxp_o("Pancreas","pancreas",mdc2,"","","ckcrbao0",sm_gasts);	
ckcrcbc1 = new mdxp_o("Pancreatitis","Pancreatitis",mdc4,"","","ckcrcbc1",sm_gasts);	
ckcvbao0 = new mdxp_o("Miscellaneous","",mdc2,"","","ckcvbao0");	
ckfbbai0 = new mdxp_o("Hematology","Hemato",sm_chaa_iis,"","","ckfbbai0");	
ckfcbao0 = new mdxp_o(vManifestationsofDisease,"",mdc2,"","","ckfcbao0");	
ckfcdbc1 = new mdxp_o("Anemia","Anemia",mdc4,"","","ckfcdbc1",sm_hemes);	
ckfchcd3 = new mdxp_o("Thrombocytopenia","Thrombocytopenia",mdc4,"","","ckfchcd3",sm_hemes);	
ckgbbai0 = new mdxp_o("Oncology","Onco",sm_chaa_iis,"","","ckgbbai0",sm_hemes);	
ckgcbao0 = new mdxp_o(vManifestationsofDisease,"",mdc2,"","","ckgcbao0");	
ckggbao0 = new mdxp_o("Cancers","",mdc2,"","","ckggbao0",sm_hemes);	
ckggcbc1 = new mdxp_o("Lung Cancer","Lung CA",mdc4,"","","ckggcbc1",sm_hemes);	
ckggdcd2 = new mdxp_o("Breast Cancer","Breast CA",mdc4,"","","ckggdcd2",sm_hemes);	
ckggffb1 = new mdxp_o("Colon Cancer","Colon CA",mdc4,"","","ckggffb1",sm_hemes);	
ckgggfc6 = new mdxp_o("Pancreatic Cancer","Pancreatic CA",mdc4,"","","ckgggfc6",sm_hemes);	
ckhbbai0 = new mdxp_o("Cardiology","Cardio",sm_chaa_iis,"","","ckhbbai0");	
ckhcbao0 = new mdxp_o(vManifestationsofDisease,"",mdc2,"","","ckhcbao0");	
ckhccba1 = new mdxp_o("Cardio-Joker","Cardio-JK",mdc4,"","","ckhccba1");	
ckhcdbc1 = new mdxp_o("Chest Pain","CP",mdc4,"","","ckhcdbc1",sm_cards);	
ckhcfcb1 = new mdxp_o("Dyspnea","Dyspnea",mdc4,"","","ckhcfcb1",sm_cards);	
ckhchdb1 = new mdxp_o("Edema","Edema",mdc4,"","","ckhchdb1",sm_cards);	
ckhfbao0 = new mdxp_o("Vascular Disease","",mdc2,"","","ckhfbao0",sm_cards);	
ckhffbc1 = new mdxp_o("Ischemic Heart Disease","IHD",mdc4,"","","ckhffbc1",sm_cards);	
ckhffcd3 = new mdxp_o("Acute Myocardial Infarction","AMI",mdc4,"","","ckhffcd3",sm_cards);	
ckhffdd4 = new mdxp_o("Unstable Angina","UA",mdc4,"","","ckhffdd4",sm_cards);
ckhffhd5 = new mdxp_o("Non-ST Segment Elevation Myocardial Infarction","NSTEMI",mdc4,"","","ckhffhd5",sm_cards);
ckhffkd6 = new mdxp_o("ST Segment Elevation Myocardial Infarction","STEMI",mdc4,"","","ckhffkd6",sm_cards);

ckhhbao0 = new mdxp_o("Heart Disease","",mdc2,"","","ckhhbao0");	
ckhhcbc1 = new mdxp_o("Congestive Heart Failure","CHF",mdc4,"","","ckhhcbc1",sm_cards);	
ckhhfbd2 = new mdxp_o("Rheumatic Fever","RF",mdc4,"","","ckhhfbd2",sm_cards);	
ckhhgbg3 = new mdxp_o("Cor Pulmonale","Cor Pulm",mdc4,"","","ckhhgbg3",sm_cards);	
ckhhhcb1 = new mdxp_o("Valvular Heart Disease","VHD",mdc4,"","","ckhhhcb1",sm_cards);	
ckhhhdb2 = new mdxp_o("Mitral Stenosis","MS",mdc4,"","","ckhhhdb2",sm_cards);	
ckhhhfb3 = new mdxp_o("Mitral Regurgitation","MR",mdc4,"","","ckhhhfb3",sm_cards);	
ckhhhhb4 = new mdxp_o("Aortic Stenosis","AS",mdc4,"","","ckhhhhb4",sm_cards);	
ckhhhjb5 = new mdxp_o("Aortic Regurgitation","AR",mdc4,"","","ckhhhjb5",sm_cards);	
ckhhhlb6 = new mdxp_o("Tricuspid Stenosis","TS",mdc4,"","","ckhhhlb6",sm_cards);	
ckhhhmb7 = new mdxp_o("Tricuspid Regurgitation","TR",mdc4,"","","ckhhhmb7",sm_cards);	
ckhhjbc1 = new mdxp_o("Cardiomyopathy","CMP",mdc4,"","","ckhhjbc1",sm_cards);	
ckhhjcd2 = new mdxp_o("Dilated Cardiomyopathy","DCMP",mdc4,"","","ckhhjcd2",sm_cards);	
ckhhjdh3 = new mdxp_o("Hypertrophic Cardiomyopathy","HCMP",mdc4,"","","ckhhjdh3",sm_cards);	
ckhhjfr4 = new mdxp_o("Restrictive Cardiomyopathy","RCMP",mdc4,"","","ckhhjfr4",sm_cards);	
ckhhkbc1 = new mdxp_o("Myocarditis","Myocarditis",mdc4,"","","ckhhkbc1",sm_cards);	
ckhhkgd2 = new mdxp_o("Constrictive Pericarditis","Pericarditis",mdc4,"","","ckhhkgd2",sm_cards);	
ckhkbao0 = new mdxp_o("Diseases of the Rhythm","",mdc2,"","","ckhkbao0",sm_cards);	
ckhkcbc1 = new mdxp_o("Atrial Fibrillation","A Fib",mdc4,"","","ckhkcbc1",sm_cards);	
ckhvbao0 = new mdxp_o("Miscellaneous","",mdc2,"","","ckhvbao0");	
ckhvcbc1 = new mdxp_o("Syncope","Syncope",mdc4,"","","ckhvcbc1",sm_cards);	
ckhvncd1 = new mdxp_o("Infective Endocarditis","IE",mdc4,"","","ckhvncd1",sm_cards);	
ckjbbai0 = new mdxp_o("Vascular","Vasc",sm_chaa_iis,"","","ckjbbai0",sm_cards);	
ckjdcbc1 = new mdxp_o("Aortic Aneurysm, Abdominal","AAA",mdc4,"","","ckjdcbc1",sm_cards);	
ckjffcd1 = new mdxp_o("Atherosclerosis","Atherosclerosis",mdc4,"","","ckjffcd1",sm_cards);	
ckjhhcb0 = new mdxp_o("Hypertension","HTN",mdc4,"","","ckjhhcb0",sm_cards);	
ckkbbai0 = new mdxp_o("Infectious D","ID",sm_chaa_iis,"","","ckkbbai0");	
ckkcbao0 = new mdxp_o(vManifestationsofDisease,"",mdc2,"","","ckkcbao0");	
ckkfbao0 = new mdxp_o("Infections","",mdc2,"","","ckkfbao0",sm_infds);	
ckkffbc1 = new mdxp_o("Urinary Tract Infection","UTI",mdc4,"","","ckkffbc1",sm_infds);	
ckkffdf2 = new mdxp_o("Pyelonephritis","Pyelo",mdc4,"","","ckkffdf2",sm_infds);	
ckkgdbd3 = new mdxp_o("Cellulitis","Cellulitis",mdc4,"","aaznttaazx","ckkgdbd3",sm_infds);
ckklcbb2 = new mdxp_o("Pneumonia, COVID19","COVID19 PNA",mdc4,"","aaznttaazx","ckklcbb2", sm_infds);

ckkndbc7 = new mdxp_o("Meningitis","Meningitis",mdc4,"","","ckkndbc7",sm_infds);
ckcddkd9 = new mdxp_o("Diarrhea","Diarrhea",mdcz,"","","ckcddkd9",sm_synt_iis,"","","","","","","","");
	
ckkvbao0 = new mdxp_o("Miscellaneous","",mdc2,"","","ckkvbao0");	
ckmbbai0 = new mdxp_o("Miscellaneous","Misc",mdc1,"","","ckmbbai0");
ckpbbai0 = new mdxp_o("Gynecology","Gyn",sm_chaa_iis,"","","ckpbbai0");	
ckpcbao0 = new mdxp_o(vManifestationsofDisease,"",mdc2,"","","ckpcbao0");	
ckpccbc1 = new mdxp_o("Amenorrhea","Amenorrhea",mdc4,"","","ckpccbc1",sm_obgys);	
ckpdfcd1 = new mdxp_o("Uterine Bleeding","Uterine Bleeding",mdc4,"","","ckpdfcd1",sm_obgys);	
ckpgcbf1 = new mdxp_o("Ectopic Pregnancy","Ectopic Pregnancy",mdc4,"","","ckpgcbf1",sm_obgys);	
ckrbbai0 = new mdxp_o("Pulmonary","Pulmo",sm_chaa_iis,"","","ckrbbai0");	
ckrcbao0 = new mdxp_o(vManifestationsofDisease,"",mdc2,"","","ckrcbao0");	
ckrccbc1 = new mdxp_o("Hemoptysis","Hemoptysis",mdc4,"","","ckrccbc1",sm_pulms);	
ckrdbao0 = new mdxp_o("Pulmonary  Disease","",mdc2,"","","ckrdbao0");	
ckrdcbc1 = new mdxp_o("Asthma","asthma",mdc4,"","","ckrdcbc1",sm_pulms);	
ckrddcd2 = new mdxp_o("Chronic Obstructive Pulmonary Disease","COPD",mdc4,"","","ckrddcd2",sm_pulms);	
ckrdddf3 = new mdxp_o("Emphysema","Emphysema",mdc4,"","","ckrdddf3",sm_pulms);	
ckrddfb4 = new mdxp_o("Chronic Bronchitis","Bronchitis",mdc4,"","","ckrddfb4",sm_pulms);	
ckrdgbc1 = new mdxp_o("Pulmonary Embolism","PE",mdc4,"","","ckrdgbc1",sm_pulms);	
ckrdgfd2 = new mdxp_o("Deep Venous Thrombosis","DVT",mdc4,"","","ckrdgfd2",sm_pulms);	
ckrdggh3 = new mdxp_o("Venous Thromboembolism ","VTE",mdc4,"","","ckrdggh3",sm_pulms);
ckrdhbc1 = new mdxp_o("Bronchiectasis","Bronchiectasis",mdc4,"","","ckrdhbc1",sm_pulms);	
ckrdhdf2 = new mdxp_o("Cystic Fibrosis","CF",mdc4,"","","ckrdhdf2",sm_pulms);	
ckrdkbc2 = new mdxp_o("Pulmonary Hypertension","Pulm HTN",mdc4,"","","ckrdkbc2",sm_pulms);	
ckrvbao0 = new mdxp_o("Miscellaneous","",mdc2,"","","ckrvbao0",sm_pulms);	
ckrvvbb1 = new mdxp_o("Pneumonia","Pneumonia",mdc4,"","aaznttaazx","ckrvvbb1",sm_pulms);	
ckrvvdd2 = new mdxp_o("Pneumocystis Pneumonia","PJP",mdc4,"","","ckrvvdd2",sm_pulms);	
cksbbai0 = new mdxp_o("Nephrology","Nephro",sm_chaa_iis,"","","cksbbai0");	
ckscbao0 = new mdxp_o(vManifestationsofDisease,"",mdc2,"","","ckscbao0");	
cksccbb1 = new mdxp_o("Hematuria","Hematuria",mdc4,"","","cksccbb1",sm_nephs);	
cksfbao0 = new mdxp_o("Renal Disease","",mdc2,"","","cksfbao0");	
cksfcbc1 = new mdxp_o("Acute Renal Failure","ARF",mdc4,"","","cksfcbc1",sm_nephs);	
cksfcfd2 = new mdxp_o("Chronic Renal Failure","CRF",mdc4,"","","cksfcfd2",sm_nephs);	
cksffbc2 = new mdxp_o("Glomerulopathies","GN",mdc4,"","","cksffbc2",sm_nephs);	
cksfffd4 = new mdxp_o("Nephritic Syndrome","Nephritic Sx",mdc4,"","","cksfffd4",sm_nephs);	
cksffgc6 = new mdxp_o("Nephrotic Syndrome","Nephrotic Sx",mdc4,"","","cksffgc6",sm_nephs);	
cksfkbc1 = new mdxp_o("Nephrolithiasis","Nephrolithiasis",mdc4,"","","cksfkbc1",sm_nephs);	
ckshbao0 = new mdxp_o("Electrolytes","",mdc2,"","","ckshbao0",sm_nephs);	
ckshcbc1 = new mdxp_o("Hyperkalemia","Hyper K+",mdc4,"","","ckshcbc1",sm_nephs);	
ckshcdf2 = new mdxp_o("Hypokalemia","Hypo K+",mdc4,"","","ckshcdf2",sm_nephs);	
ckshfcb1 = new mdxp_o("Hypernatremia","Hyper Na+",mdc4,"","","ckshfcb1",sm_nephs);	
ckshfdf2 = new mdxp_o("Hyponatremia","Hypo Na+",mdc4,"","","ckshfdf2",sm_nephs);	
cksvbao0 = new mdxp_o("Miscellaneous","",mdc2,"","","cksvbao0");	
cktbbai0 = new mdxp_o("Rheumatology","Rheuma",sm_chaa_iis,"","","cktbbai0");	
cktcbao0 = new mdxp_o(vManifestationsofDisease,"",mdc2,"","","cktcbao0");	
cktfbao0 = new mdxp_o("Diseases","",mdc2,"","","cktfbao0");	
cktfcbc1 = new mdxp_o("Systemic Lupus Erythematosus","SLE",mdc4,"","","cktfcbc1",sm_rheus);	
cktfcdf2 = new mdxp_o("Rheumatoid Arthritis","RA",mdc4,"","","cktfcdf2",sm_rheus);	
cktfcfb0 = new mdxp_o("Connective Tissue Diseases","CTDs",mdc4,"","","cktfcfb0",sm_rheus);	
ckvbbai0 = new mdxp_o("Neurology","Neuro",sm_chaa_iis,"","zt","ckvbbai0");	
ckvcbao0 = new mdxp_o(vManifestationsofDisease,"",mdc2,"","","ckvcbao0");	
ckvdcbb1 = new mdxp_o("Headache","H/A",mdc4,"","","ckvdcbb1",sm_neurs);	
ckvdcdc2 = new mdxp_o("Dizziness & Vertigo","Dizziness",mdc4,"","","ckvdcdc2",sm_neurs);	
ckvdcgd4 = new mdxp_o("Delirium-Coma","Coma",mdc4,"","","ckvdcgd4",sm_neurs);	
ckvgbao0 = new mdxp_o("Neurologic Disease","",mdc2,"","","ckvgbao0",sm_neurs);	
ckvggbb1 = new mdxp_o("Seizures","Seizures",mdc4,"","","ckvggbb1",sm_neurs);	
ckvggdc2 = new mdxp_o("Cerebro-Vascular Accident","CVA",mdc4,"","","ckvggdc2",sm_neurs);	
ckvvbao0 = new mdxp_o("Miscellaneous","",mdc2,"","","ckvvbao0");	
ckwbbai0 = new mdxp_o("Psychiatry","Psych",sm_chaa_iis,"","","ckwbbai0");	
ckwobao0 = new mdxp_o(vManifestationsofDisease,"",mdc2,"","","ckwobao0");	
ckwcdbc1 = new mdxp_o("Suicide Attempt","Suicide Attempt",mdc4,"","","ckwcdbc1",sm_psycs);	
cjbbbai0 = new mdxp_o("H&P Elements","H&P elems",ehnp_cogs,"","","cjbbbai0");
cjccbao0 = new mdxp_o("H&P Templates","",mdc2,"","","cjccbao0");	
cjcdcbc1 = new mdxp_o("Generic","generic",mdc4,"","","cjcdcbc1");	
cjcdddf2 = new mdxp_o("Female (Adult)","",mdc4,"","","cjcdddf2");	
cjcdddm3 = new mdxp_o("H&P (Adult)","",mdc4,"","","cjcdddm3");	
cjcdfft4 = new mdxp_o("H&P Template","H&P tem",mdc4,"","","cjcdfft4");	
cjffbao0 = new mdxp_o("H&P Elements","",ehnp_cogs,"","","cjffbao0");	
cjffcbc1 = new mdxp_o("History Elements","History Elements",ehnp_cogs,"","","cjffcbc1");	
cjfffbc2 = new mdxp_o("Physical Exam Elements","PE Elements",ehnp_cogs,"","","cjfffbc2");	
cjfffdf3 = new mdxp_o("H&P Generic Elements","",ehnp_cogs,"","","cjfffdf3");	
cjfffgb4 = new mdxp_o("H&P Specific Elements (history)","",ehnp_cogs,"","","cjfffgb4");	
cjfffgf5 = new mdxp_o("H&P Specific Elements (physical)","",ehnp_cogs,"","","cjfffgf5");	
cjfffhb1 = new mdxp_o("Review Of Systems Elements","ROS Elements",ehnp_cogs,"","","cjfffhb1");	
cjfffkc2 = new mdxp_o("Chest Exam Elements","",ehnp_cogs,"","","cjfffkc2");	
cjfffmc7 = new mdxp_o("Abdominal Exam Elements","",ehnp_cogs,"","","cjfffmc7");
cjfffnd0 = new mdxp_o("Neurological Exam Elements","",ehnp_cogs,"","","cjfffnd0");	

hrfdcao0 = new mdxp_o("Cardiovascular","CV",mdc2,"","a","hrfdcao0");	

ckhhctb1 = new mdxp_o("  NYHA, 6-min Walk Test","CHF",mdc6,"","","ckhhctb1");
ckhhcth2 = new mdxp_o("  Stages of HF and Rx","CHF",mdc6,"","","ckhhcth2");



smnxCK = new Array(cjbbbai0,ckhbbai0,ckbbbai0,ckcbbai0,ckfbbai0,ckkbbai0,ckpbbai0,cksbbai0,ckvbbai0,ckgbbai0,ckrbbai0,ckwbbai0,cktbbai0,ckjbbai0)
smnxCKB = new Array(ckbbbai0,ckbgbao0,ckbgcbc1,ckbgccb2,ckbjbao0,ckbjcbc1,ckbjccd2,ckbmbao0,ckbmcbc1,ckbmccd2,ckbpbao0,ckbpcbc1,ckbpccd2)
smnxCKC = new Array(ckcbbai0,ckcdbao0,ckcddcd1,ckcdddb2,ckcddfb3,ckcddkb4,ckcfbao0,ckcffbc1,ckcffcd2,ckcffdk3,ckcfgdb1,ckckbao0,ckckcbc1,ckckdcb2,
ckckfgb2,ckckfhf3,ckckfjk4,ckckhlb1,ckckkmc2,ckcmbao0,ckcmcbc1,ckcmdcb1,ckcmfdc4,ckcmjhh7,ckcpbao0,ckcpcbc1,ckcrbao0,ckcrcbc1)
smnxCKF = new Array(ckfbbai0,ckfcdbc1,ckfchcd3)
smnxCKG = new Array(ckgbbai0,ckggbao0,ckggcbc1,ckggdcd2,ckggffb1,ckgggfc6)
smnxCKH = new Array(ckhbbai0,ckhcbao0,ckhcdbc1,ckhcfcb1,ckhchdb1,ckhfbao0,ckhffbc1,ckhffcd3,ckhffdd4,ckhffhd5,ckhffkd6,ckhhbao0,ckhhcbc1,ckhhfbd2,ckhhgbg3,ckhhhcb1,
ckhhhdb2,ckhhhfb3,ckhhhhb4,ckhhhjb5,ckhhhlb6,ckhhhmb7,ckhhjbc1,ckhhjcd2,ckhhjdh3,ckhhjfr4,ckhhkbc1,ckhhkgd2,ckhkbao0,ckhkcbc1,ckhvbao0,ckhvcbc1,ckhvncd1)
smnxCKJ = new Array(ckjbbai0,ckjdcbc1,ckjffcd1,ckjhhcb0)
smnxCKK = new Array(ckkbbai0,ckkfbao0,ckkffbc1,ckkffdf2,ckkgdbd3,ckklcbb2,ckkndbc7)
smnxCKP = new Array(ckpbbai0,ckpcbao0,ckpccbc1,ckpdfcd1,ckpgcbf1)
smnxCKR = new Array(ckrbbai0,ckrcbao0,ckrccbc1,ckrdbao0,ckrdcbc1,ckrddcd2,ckrdddf3,ckrddfb4,ckrdgbc1,ckrdgfd2,ckrdggh3,ckrdhbc1,ckrdhdf2,ckrdkbc2,ckrvbao0,ckrvvbb1,ckrvvdd2)
smnxCKS = new Array(cksbbai0,ckscbao0,cksccbb1,cksfbao0,cksfcbc1,cksfcfd2,cksffbc2,cksfffd4,cksffgc6,cksfkbc1,ckshbao0,ckshcbc1,ckshcdf2,ckshfcb1,ckshfdf2)
smnxCKT = new Array(cktbbai0,cktfbao0,cktfcbc1,cktfcdf2,cktfcfb0)
smnxCKV = new Array(ckvbbai0,ckvcbao0,ckvdcbb1,ckvdcdc2,ckvdcgd4,ckvgbao0,ckvggbb1,ckvggdc2)
smnxCKW = new Array(ckwbbai0,ckwcdbc1)
smnxCJ = new Array(cjbbbai0,cjccbao0,cjcdddf2,cjcdddm3,cjcdfft4,cjffbao0,cjffcbc1,cjfffbc2,cjfffdf3,cjfffgb4,cjfffgf5,cjfffhb1,cjfffkc2,cjfffnd0)


///////////////////////////
pbbai000 = new mdxp_o("Endocrine","Endo",sm_endo,"","zt","pbbai000");
pbhao000 = new mdxp_o("Cholesterol","Chol",sm_endos,"","ztznnnaazx","pbhao000","","","","","","","","","");
pbhcc770 = new mdxp_o("Cholesterol Master","Chol_mstr",sm_endos,"","","pbhcc770");
pbkao000 = new mdxp_o("Calcium","Ca++",sm_endos,"","","pbkao000");
pblao000 = new mdxp_o("Insulin","",sm_endos,"","","pblao000");
pbtao000 = new mdxp_o("Thyroid","T4",sm_endos,"","","pbtao000");
pbwao000 = new mdxp_o("Endocrine " + vmccalx,"",sm_endos,"","","pbwao000");
pbxao000 = new mdxp_o("Endocrine Parameters","",sm_endos,"","","pbxao000");
pcbai000 = new mdxp_o("Gastrointestinal","Gastroint",sm_gast,"","zt","pcbai000");
pcdao000 = new mdxp_o("Liver","Liver",sm_livers,"","zt","pcdao000");
pcfao000 = new mdxp_o("Pancreas","",sm_gasts,"","","pcfao000");
pchao000 = new mdxp_o("Intestinal","Int",sm_gasts,"","","pchao000");
pcwao000 = new mdxp_o("Gastrointestinal " + vmccalx,"",sm_gasts,"","","pcwao000");
pcxao000 = new mdxp_o("GI Parameters","",sm_gasts,"","","pcxao000");
pfbai000 = new mdxp_o("Hematology-Oncology","Heme-Onc",sm_heme,"","zt","pfbai000");
pfdao000 = new mdxp_o("Red Blood Cells","RBC",sm_hemes,"","","pfdao000");
pfdcc770 = new mdxp_o("RBC Master","RBC_mstr",eb19,"","","pfdcc770");
pfgao000 = new mdxp_o("Reticulocytes","Retis",sm_hemes,"","","pfgao000");
pfkao000 = new mdxp_o("White Blood Cells","WBC",sm_hemes,"","","pfkao000");
pfmao000 = new mdxp_o("Coagulation","coags",sm_hemes,"","","pfmao000");
pfrao000 = new mdxp_o("Iron","Fe++",sm_hemes,"","","pfrao000");
pfsao000 = new mdxp_o("Miscellaneous","misc",sm_hemes,"","","pfsao000");
pfwao000 = new mdxp_o("Hematology " + vmccalx,"",sm_hemes,"","zt","pfwao000");
pfxao000 = new mdxp_o("Hematology Parameters"," ",sm_hemes," "," ","pfxao000");
phbai000 = new mdxp_o("Cardiology","",sm_card,"","zt","phbai000");
phdao000 = new mdxp_o("Hemodynamics","hemodyn",sm_cards,"","zt","phdao000");
phgao000 = new mdxp_o("Pressures","Press",sm_cards,"","","phgao000");
phkao000 = new mdxp_o("Resistances","resist",sm_cards,"","","phkao000");
phmao000 = new mdxp_o("Cardiac Work","CW ",sm_cards,"","","phmao000");
phnao000 = new mdxp_o("Electrocardiography","ECG",sm_cards,"","","phnao000");
phqao000 = new mdxp_o("Cardiovascular Risk","CV Risk",sm_cards,"","","phqao000","","","","","","","","","");
phwao000 = new mdxp_o("Cardiology " + vmccalx,"",sm_cards,"","zt","phwao000");
phxao000 = new mdxp_o("Cardiology Parameters","",sm_cards,"","","phxao000");
pmbai000 = new mdxp_o("Miscellaneous","",sm_fdaa_ii,"","","pmbai000");
pmdao000 = new mdxp_o("Cerebrospinal Fluid","CSF",sm_neurs,"","","pmdao000");
pmfao000 = new mdxp_o("Sepsis","Sepsis",sm_sepss,"","zt","pmfao000");
pmrao000 = new mdxp_o("Reverse Calculators","Rev Calx",sm_fdaa_iis," "," ","pmrao000");
pmwao000 = new mdxp_o("Miscellaneous " + vmccalx,"",eb12,"","","pmwao000");
pmxao000 = new mdxp_o("Misc Parameters","",eb12,"","","pmxao000");
pnbai000 = new mdxp_o("Nutrition","",sm_nutr,"","zt","pnbai000");
pndao000 = new mdxp_o("Body Weight & Mass","Body Weight",sm_nutrs,"","zt","pndao000");
pnfao000 = new mdxp_o("Energy","",sm_nutrs,"","zt","pnfao000");
pnhao000 = new mdxp_o("Calories","kcal ",sm_nutrs,"","","pnhao000");
pnjao000 = new mdxp_o("Nitrogen","N+",sm_nutrs,"","","pnjao000");
pnnao000 = new mdxp_o("Nutritional Assessment","Nutri-assess",sm_nutrs,"","","pnnao000");
pnpao000 = new mdxp_o("Anthropometrics","",sm_nutrs,"","","pnpao000");
pnwao000 = new mdxp_o("Nutrition " + vmccalx,"",sm_nutrs,"","zt","pnwao000");
pnxao000 = new mdxp_o("Nutrition Parameters","",sm_nutrs,"","","pnxao000");
ppbai000 = new mdxp_o("Obstetrics & Gynecology","Ob-Gyn",sm_obgy,"","","ppbai000");
ppfao000 = new mdxp_o("Pregnancy","Preg",sm_obgys,"","","ppfao000");
pqbai000 = new mdxp_o("Pediatrics","Peds",sm_obgy,"","","pqbai000");
pqdao000 = new mdxp_o("Pediatric ICU","PICU",sm_obgys,"","","pqdao000");
pqwao000 = new mdxp_o("Pediatrics " + vmccalx,"",sm_obgys,"","zt","pqwao000");
pqxao000 = new mdxp_o("Pediatrics Parameters","",sm_obgys,"","","pqxao000");
prbai000 = new mdxp_o("Pulmonary","Pulmo",sm_pulm,"","zt","prbai000");
prdao000 = new mdxp_o("A-a Oxygen Gradient","A-a Gradient",sm_pulms,"","","prdao000");
prgao000 = new mdxp_o("Oxygen Content","O2 Content",sm_pulms,"","","prgao000");
prkao000 = new mdxp_o("Oxygen Delivery & Consumption","O2 Delivery ",sm_pulms,"","","prkao000");
prmao000 = new mdxp_o("Oxygen Transport","O2 Transport ",sm_pulms,"","","prmao000");
prpao000 = new mdxp_o("Lung Volumes","",sm_pulms,"","","prpao000");
prqao000 = new mdxp_o("Dead Space","VD ",sm_pulms,"","","prqao000");
prrao000 = new mdxp_o("Ventilation","Vent ",sm_pulms,"","zt","prrao000");
prsao000 = new mdxp_o("Compliance","Comp ",sm_pulms,"","","prsao000");
prwao000 = new mdxp_o("Pulmonary " + vmccalx,"",sm_pulms,"","zt","prwao000");
prxao000 = new mdxp_o("Pulmonary Parameters","",sm_pulms,"","","prxao000");
psbai000 = new mdxp_o("Renal","",sm_neph,"","zt","psbai000","","","","","","","","","");
psdao000 = new mdxp_o("Renal Clearances","Cl",sm_nephs,"","zt","psdao000");
psfao000 = new mdxp_o("Acid-Base","A-B",sm_nephs,"","zt","psfao000");
pshao000 = new mdxp_o("Electrolytes","Na+",sm_nephs,"","zt","pshao000");
pskao000 = new mdxp_o("Body Water","",sm_nephs,"","zt","pskao000");
psmao000 = new mdxp_o("Osmolality","Osm",sm_nephs,"","","psmao000");
pspao000 = new mdxp_o("Fractional Excretions","Fract. Excretions",sm_nephs,"","zt","pspao000");
psvao000 = new mdxp_o("Disease " + vmccalx,"",sm_nephs,"","","psvao000");
pswao000 = new mdxp_o("Renal " + vmccalx,"",sm_nephs,"","","pswao000");
psxao000 = new mdxp_o("Renal Parameters","",sm_nephs,"","","psxao000");
pwbai000 = new mdxp_o("MultiCalx&#153","",sm_fdaa_ii,"","zt","pwbai000");
pwdao000 = new mdxp_o("Miscellaneous","",sm_fdaa_iis,"","","pwdao000");

//////////////////for menues
psfdb034 = new mdxp_o("Anion Gap (Serum)","AG",sm_nephs,"Na-(Cl+HCO3)","ooxsttaaycxe","psfdb034","S","8","16","mEq/L","1","mmol/L","-100","300","");
psdgb014 = new mdxp_o("Glomerular Filtration Rate (Cockcroft)","GFR_cg",sm_nephs,"((140-age)*Wt)/(72*Cr)","ooxlttaaycxe","psdgb014","","90","131","mL/min","0.0167","mL/s","0","300","");
psdgp182 = new mdxp_o("Glomerular Filtration Rate (MDRD-4)","GFR_mdrd4",sm_nephs,"(186.3)*(Cr^-1.154)*(age^-0.203)*(GNF)*(ETF)","ooxlttaaycxe","psdgp182","","90","131","mL/min","0.0167","mL/s","0","300","");
psdgq277 = new mdxp_o("Glomerular Filtration Rate (MDRD-6)","GFR_mdrd6",sm_nephs,"(170)*(Cr^-0.999)*(age^-0.176)*(GNF)*(ETF)*(SUN^-0.17)*(alb^0.318)","ooxltcaaycze","psdgq277","","90","131","mL/min","0.0167","mL/s","0","300","");
pshdb101 = new mdxp_o("Fractional Excretion of Na+","FENa",sm_nephs,"((U/P Na)/(U/P Cr))*100","oowsttaaycxe","pshdb101","","0","1","%","0.01",vfraction,"0","100","");
prdgg001 = new mdxp_o("A-a Gradient","PA-aO2",sm_pulms,"(((FIO2)*(PB-PH2O))-(PaCO2/R))-(PaO2)","ooxsttnaycxe","prdgg001","","5","25","mmHg","0.1333","kPa","-760","760","");
prgdb276 = new mdxp_o("arterial Oxygen Content","CaO2",sm_pulms,"((Hb*1.36)*(SaO2))+(PaO2*0.0031)","ooxsttaaycxe","prgdb276","","17","20","mL/dL","1","vol%","0","100","");
prgdv334 = new mdxp_o("mixed venous Oxygen Content","CvO2",sm_pulms,"((Hb*1.36)*(SvO2))+(PvO2*0.0031)","ooxsttaaycxe","prgdv334","","12","15","mL/dL","1","vol%","0","100","");
prghc187 = new mdxp_o("Oxygen Content Difference, arterial-venous","Ca-vO2",sm_pulms,"(((Hb*1.36)*(SaO2))+(PaO2*0.0031)) - (((Hb*1.36)*(SvO2))+(PvO2*0.0031))","ooxsttaaycxe","prghc187","","4","5","mL/dL","1","vol%","-50","100","");
pbhdb125 = new mdxp_o("Low Density Lipoprotein Cholesterol","LDL",sm_endos,"chol-((TG/5)+(HDL))","ooxsttaaycxe","pbhdb125","S","60","130","mg/dL","0.0259","mmol/L","0","3000","");
pndmb015 = new mdxp_o("Body Surface Area","BSA",sm_nutrs,"(Wt\^0.425)*(Ht\^0.725)*(0.007184)","oexnttaaycxe","pndmb015","","1.3","2.5","m2","","","1","3","");
pndhb225 = new mdxp_o("Body Mass Index","BMI",sm_nutrs,"Wt/Ht^2","oexntcnaycze","pndhb225","","18.5","25","kg*m2","","","10","300","");
pndfb115 = new mdxp_o("Ideal Body Weight","IBW",sm_nutrs,"(Ht^2)*23","ooxsttaaysxe","pndfb115","","110","220","lb","0.454","kg","55","440","");
psmdb301 = new mdxp_o("Osmolality, calculated","Osm calc",sm_nephs,"(2*(Na+K))+(gluc/18)+(BUN/2.8)","oexnttaaycxe","psmdb301","S","275","295","mOsm/kg","","","100","500","");
psdcc220 = new mdxp_o("Renal Calc&#153 Master","Renal Calc&#153",sm_nephs,"","","psdcc220","","","","","","","","","");
psdcc770 = new mdxp_o("GFR Master","GFR master",sm_nephs,"","","psdcc770","","","","","","","","","");
prdcc770 = new mdxp_o("A-a Gradient Master","AaG master",sm_pulms,"","","prdcc770","","","","","","","","","");
pndcf770 = new mdxp_o("Body Metrics Master","BM master",sm_nutrs,"","","pndcf770","","","","","","","","","");
pswcc770 = new mdxp_o("Diabetic Ketoacidosis " + vmccalx,"DKA master",sm_nephs,"","","pswcc770","","","","","","","","","");
pcdcc770 = new mdxp_o("Liver Calc&#153","Liver Calc&#153",sm_livers,"","oevntmaaycx","pcdcc770","","","","","","","","","");
pcdjg513 = new mdxp_o("Child-Turcotte-Pugh Classification","Child Class",sm_livers,"Child Algorithm","mflntcaazxzz","pcdjg513","","n/a","n/a","Class","","","","","");							

///////////////////
pxbai000 = new mdxp_o(vMedRefCards,"",eb11,"","","pxbai000");
pxdao000 = new mdxp_o(vEnglish,"",eb12,""," ","fdaxx000");
pxhao000 = new mdxp_o(vSpanish,"",eb12,"","","fdaxx000");

smnxP = new Array(pwbai000,phbai000,pbbai000,pcbai000,pfbai000,pmbai000,pnbai000,ppbai000,pqbai000,prbai000,psbai000)
smnxPB = new Array(pbbai000,pbhao000,pbkao000,pblao000,pbtao000,pbwao000,pbxao000)
smnxPC = new Array(pcbai000,pcdao000,pcfao000,pchao000,pcwao000,pcxao000)
smnxPF = new Array(pfbai000,pfdao000,pfgao000,pfkao000,pfmao000,pfrao000,pfsao000,pfwao000,pfxao000)
smnxPH = new Array(phbai000,phdao000,phgao000,phkao000,phmao000,phqao000,phnao000,phwao000,phxao000)
smnxPM = new Array(pmbai000,pmfao000, pmdao000,pmrao000,pmwao000,pmxao000)
smnxPN = new Array(pnbai000,pndao000,pnfao000,pnhao000,pnjao000,pnnao000,pnpao000,pnwao000,pnxao000)
smnxPP = new Array(ppbai000,ppfao000)
smnxPQ = new Array(pqbai000,pqdao000,pqwao000,pqxao000)
smnxPR = new Array(prbai000,prdao000,prgao000,prkao000,prmao000,prpao000,prqao000,prrao000,prsao000,prwao000,prxao000)
smnxPS = new Array(psbai000,psdao000,psfao000,pshao000,pskao000,psmao000,pspao000,psvao000,pswao000,psxao000)
smnxPW = new Array(pwbai000)
//////smnxPX = new Array(pxddh211)
////ok

xbbai000 = new mdxp_o("Length","Length",cb11,"","","xbbai000","","");
xdbai000 = new mdxp_o("Mass","mass",cb11,"","","xdbai000","","");
xkbai000 = new mdxp_o("Volume","vol",cb11,"","","xkbai000","","");
xfbai000 = new mdxp_o("Pressure","Press",cb11,"","","xfbai000","","");
xgbai000 = new mdxp_o("Temperature","Temp",cb11,"","","xgbai000","","");
xhbai000 = new mdxp_o("Time","time",cb11,"","","xhbai000","","");
xjbai000 = new mdxp_o("Miscellaneous","Misc",cb11,"","","xjbai000","","");
xpbai000 = new mdxp_o("Household Measures","Household",cb11,"","","xpbai000","","");
xmbai000 = new mdxp_o("Measurement Systems","Measure Sys",cb11,"","","xmbai000","","");
xnbai000 = new mdxp_o("Systeme International","SI",cb11,"","","xnbai000","","");
xqbai000 = new mdxp_o("Apothecary Measures","Apothecary",cb11,"","","xqbai000","","");

smnxX = new Array(xbbai000,xdbai000,xkbai000,xfbai000,xgbai000,xhbai000,xjbai000,xpbai000,xmbai000,xqbai000,xnbai000)

xbrbc010 = new mdxp_o(in_n,mm_n,sm_conv_iis,in_a,"25.4","xbrbc010",mm_a,"0.0394");
xbrdc015 = new mdxp_o(in_n,cm_n,sm_conv_iis,in_a,"2.54","xbrdc015",cm_a,"0.3937");
xbrgc025 = new mdxp_o(in_n,m_n,sm_conv_iis,in_a,"0.0254","xbrgc025",m_a,"39.37");
xbsdc015 = new mdxp_o(ft_n,cm_n,sm_conv_iis,ft_a,"30.48","xbsdc015",cm_a,"0.0328");
xdkdc015 = new mdxp_o(g_n,mg_n,sm_conv_iis,g_a,"1000","xdkdc015",mg_a,"0.001");
xdkgc025 = new mdxp_o(g_n,kg_n,sm_conv_iis,g_a,"0.001","xdkgc025",kg_a,"1000");
xdpbc010 = new mdxp_o(oz_n,g_n,sm_conv_iis,oz_a,"28.3495","xdpbc010",g_a,"0.035274");
xdqbc010 = new mdxp_o(lb_n,g_n,sm_conv_iis,lb_a,"453.6","xdqbc010",g_a,"0.0022");
xdqdc015 = new mdxp_o(lb_n,kg_n,sm_conv_iis,lb_a,"0.4536","xdqdc015",kg_a,"2.205");
xklcn027 = new mdxp_o(floz_n,L_n,sm_conv_iis,floz_a,"0.029573","xklcn027",L_a,"33.814");
xklcf013 = new mdxp_o(floz_n,mL_n,sm_conv_iis,floz_a,"29.573","xklcf013",mL_a,"0.033814");
xgdbc010 = new mdxp_o(F_n,C_n,sm_conv_iis,F_a,"","xgdbc010",C_a,"");

/////////////////Labs
tbbaeae0 = new mdxp_o("Laboratory Values & Tests","Labs & Test",lb11,"","zt","tbbaeae0");
tbbaiai0 = new mdxp_o("Chemistry","Chem",lb11,"","zt","tbbaiai0");
tcbaiai0 = new mdxp_o("Urine","U",lb11,"","zt","tcbaiai0");
tdbaiai0 = new mdxp_o("Cerebrospinal Fluid","CSF",lb11,"","zt","tdbaiai0");
tfbaiai0 = new mdxp_o("Stool","F",lb11,"","zt","tfbaiai0");
tgbaiai0 = new mdxp_o("Hematology","Hemato",lb11,"","zt","tgbaiai0");
thbaiai0 = new mdxp_o("Pleural Fluid","Plf",lb11,"","zt","thbaiai0");
tjbaiai0 = new mdxp_o("Synovial Fluid","Synf",lb11,"","zt","tjbaiai0");
tlbaiai0 = new mdxp_o("Semen Analysis","SemF",lb11,"","zt","tlbaiai0");
tpbaiai0 = new mdxp_o("Peritoneal Fluid","Peritf",lb11,"","zt","tpbaiai0");
tsbaiai0 = new mdxp_o("Body Fluids","BF",lb11,"","zt","tsbaiai0");
tmbaiai0 = new mdxp_o("Metabolic Tests","Met Tests",lb11,"","zt","tmbaiai0");


smnxT = new Array(tbbaiai0,tcbaiai0,tgbaiai0,tdbaiai0,tmbaiai0,thbaiai0,tjbaiai0,tfbaiai0,tpbaiai0,tlbaiai0,tsbaiai0);

tbbaocb0 = new mdxp_o("Basic Metabolic Profile","BMP",lb11,"","zt","tbbaocb0");
tbbaocd0 = new mdxp_o("Comprehensive Metabolic Profile","CMP",lb11,"","zt","tbbaocd0");
tbbaodb0 = new mdxp_o("Liver Function Tests","LFTs",lb11,"","zt","tbbaodb0");
tbbaofb0 = new mdxp_o("Cardiac Enzymes","Cardiac",lb11,"","zt","tbbaofb0");
tbbaofp0 = new mdxp_o("Cholesterol Panel","Cholesterol",lb11,"","zt","tbbaofp0");


















