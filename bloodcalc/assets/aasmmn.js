var spacer_path = "../../images/mc_t.gif", arrow_path = "../../imagesa/sm_mnblt.gif";
var arrow_img = '<img src="' + arrow_path + '" width="9" height="9" border="0" alt="" align=center valign=center>';
var open_menu = "", open_sub = "", open_hi = "";

function setVis(id, vis) {
  vis ? vis = "visible" : vis = "hidden";
  if (document.getElementById) {
    document.getElementById(id).style.visibility = vis;
  } else if (document.all) {
    document.all[id].style.visibility = vis;
  } else if (document.layers) {
    document.layers[id].visibility = vis;
  }
}

function setPos(id, x, y) {
  if (document.getElementById) {
    document.getElementById(id).style.left = x;
    document.getElementById(id).style.top = y;
  } else if (document.all) {
    document.all[id].style.pixelLeft = x;
    document.all[id].style.pixelTop = y;
  } else if (document.layers) {
    document.layers[id].left = x;
    document.layers[id].top = y;
  }
}

function buildLayer(id, vis, x, y, z, w, h, attr_div, attr_lay, over, out, content) {
  vis ? vis = "visible" : vis = "hidden";
  if (document.getElementById || document.all) {
    return '<DIV ID="' + id + '" STYLE="visibility:' + vis + '; position: absolute; left: ' + x.toString() + '; top: ' + y.toString() + '; z-index: ' + z.toString() + '; width: ' + w.toString() + '; height: ' + h.toString() + ';' + attr_div + '" onMouseOver="' + over + '" onMouseOut="' + out + '">' + content + '</DIV>';
  } else if (document.layers) {
    return '<LAYER NAME="' + id + '" VISIBILITY="' + vis + '" LEFT="' + x.toString() + '" TOP="' + y.toString() + '" Z-INDEX="' + z.toString() + '" WIDTH="' + w.toString() + '" HEIGHT="' + h.toString() + '"' + attr_lay + ' onMouseOver="' + over +'" onMouseOut="' + out +'">' + content + '</LAYER>';
  }
}

function buildMapArea(url, x, y, w, h, over, out) {
  return '<AREA SHAPE="rect" COORDS="' + x + ', ' + y + ', ' + (x + w) + ', ' + (y + h) + '" HREF="' + url + '" onMouseOver="' + over + '" onMouseOut="' + out + '">';
}

function buildSpacer(w, h) {
  return '<IMG SRC="' + spacer_path + '" WIDTH="' + w.toString() + '" HEIGHT="' + h.toString() + '" BORDER="0" ALT="">';
}

function nt_itemOver(id, x, y) {
  setPos(id, x, y);
  setVis(id, true);
}
function nt_itemOut(id) {
  setVis(id, false);
}
function closeMenu(id) {
  setVis(id, false);
  setVis(id + "_map", false);
  setVis(id + "_bg", false);
  setVis(id + "_hi", false);
}
function openMenu(id) {
  setVis(id, true);
  setVis(id + "_map", true);
  setVis(id + "_bg", true);
}
function openSub(id) {
  if (open_sub != "") {
  	closeMenu(open_sub);
  }
  open_sub = id;
  openMenu(open_sub);
}

function closeSub() {
	if (open_sub != "") {
    closeMenu(open_sub);
    open_sub = "";
  }
}
function closeBaseMenu(id) {
  if (id != "") {
    open_menu = "";
    closeSub();
    closeMenu(id);
    setVis(id + "_deact", false);
  }
}
function openBaseMenu(id) {
  if (open_menu != "") {
    closeBaseMenu(open_menu);
  }
  open_menu = id;
  openMenu(id);
}
function closeAll() {
  closeBaseMenu(open_menu);
}
function addItem(label, url) {
  this._items[this._items.length] = new NT_Item(this.id + this._items.length, label, url);
}
function addSubItem(label, url) {
  this._items[(this._items.length - 1)].sub_menu.addItem(label, url);
}
function buildMenu(style_id, vis, x, y, z, item_w, item_h, spacer_w, spacer_h, parent_id) {
  var over = "", out = "", map_over = "", map_out = "";
  var bg_style_id = style_id + "_bg", hi_style_id = style_id + "_hi", sp_style_id = style_id + "_sp";
  var menu_map_id = this.id + "_map", menu_bg_id = this.id + "_bg", menu_hi_id = this.id + "_hi", menu_deact_id = this.id + "_deact";
  var menu_w = item_w + spacer_w, menu_h = 0, sub_length = 0;

  var menu_map = '<MAP NAME="' + menu_map_id + '">';
  var menu_html = '<table width="' + menu_w + '" border="0" cellpadding="0" cellspacing="0">';
  var menu_bg = menu_html, menu_hi = menu_html;
  menu_hi += '<tr><td class="' + hi_style_id + '">' + buildSpacer(menu_w, item_h) + '</td></tr></table>';

  for (var i = 0; i < this._items.length; i++) {
    map_over = "";
    map_out = "";

    map_over += "nt_itemOut('" + menu_hi_id + "'); nt_itemOver('" + menu_hi_id + "', " + x + ", " + (y + menu_h + spacer_h) + ");";

    if (i < this._items.length) {
      menu_html += '<TR><TD CLASS="' + sp_style_id + '" COLSPAN="3">' + buildSpacer(1, spacer_h) + '</TD></TR>';
      menu_h += spacer_h;
    }

    menu_html += '<TR><TD CLASS="' + style_id + '" width="100%" height="' + item_h.toString() + '">';
    menu_html += this._items[i].label + '</TD><TD CLASS="' + style_id + '" align="right">';

    sub_length = this._items[i].sub_menu._items.length;

    if (sub_length > 0) {
      var sub_x = x + menu_w, sub_y = y + menu_h - spacer_h, sub_h = sub_length * (item_h + spacer_h);

      menu_html += arrow_img;
      map_over += "openSub('" + this.id + i.toString() + "');";


      if (sub_y + sub_h > view_h) {
        var off_items = Math.ceil((sub_y + sub_h - view_h) / (item_h + spacer_h));
        sub_y = sub_y - (off_items * (item_h + spacer_h));
      }

      this._items[i].sub_menu.buildMenu(style_id, false, sub_x, sub_y, z, item_w, item_h, spacer_w, spacer_h, this.id);
      
    } else {
      menu_html += '&nbsp;';
      if (parent_id != null) {
      } else {
      	map_over += "closeSub();";
      }

    }

    menu_html += '</TD><TD CLASS="' + sp_style_id + '" WIDTH="' + spacer_w.toString() + '">' + buildSpacer(spacer_w, item_h) + '</TD></TR>';
    menu_map += buildMapArea(this._items[i].url, 1, menu_h, item_w, item_h, map_over, map_out);
    menu_h += item_h;
  }

  menu_html += '</TABLE>';
  menu_map += '</MAP><IMG SRC="' + spacer_path + '" WIDTH="' + menu_w.toString() + '" HEIGHT="' + menu_h.toString() + '" BORDER="0" ALT="" USEMAP="#' + menu_map_id + '">';
  menu_bg += '<TR><TD CLASS="' + bg_style_id + '">' + buildSpacer(menu_w, menu_h) + '</TD></TR></TABLE>';

  var deact = "";
  if (parent_id == null) {
  	over = "setVis('" + menu_deact_id + "', true);";
    deact = buildLayer(menu_deact_id, false, 0, 69, 0, x + (menu_w * 3), menu_h * 2, "", "", "closeBaseMenu('" + this.id + "');", "", buildSpacer(x + (menu_w * 3), menu_h * 2));
  }

  var menu = buildLayer(this.id, vis, x, y, z, menu_w, menu_h, "", "", "", "", menu_html);
  var map = buildLayer(menu_map_id, vis, x, y, z + 1, menu_w, menu_h, "", "", over, out, menu_map);
  var bg = buildLayer(menu_bg_id, vis, x, y, z - 2, menu_w, menu_h, "", "", "", "", menu_bg);
  var hi = buildLayer(menu_hi_id, false, x, y, z - 1, menu_w, item_h, "", "", "", "", menu_hi);

  with(document) {
    write(bg);
    write(menu);
    write(map);
    write(hi);
    write(deact);
  }
}

function NT_Menu(id) {
  this.id = id;
  this._items = new Array();
  this.addItem = addItem;
  this.addSubItem = addSubItem;
  this.buildMenu = buildMenu;
}
function NT_Item(id, label, url) {
  this.label = label;
  this.url = url;
  this.sub_menu = new NT_Menu(id);
}

var view_h = 0;
var menu_1_item_w = 140, menu_1_item_h = 20, menu_1_spacer_w = 1, menu_1_spacer_h = 1;
var menu_2_item_w = 140, menu_2_item_h = 18, menu_2_spacer_w = 1, menu_2_spacer_h = 1;

var menu_chaax = new NT_Menu("menu_chaax");
var menu_bcaax = new NT_Menu("menu_bcaax");
var menu_pat = new NT_Menu("menu_pat");
var menu_fdaax = new NT_Menu("menu_fdaax");

//// isys
menu_bcaax.addItem("<font class=h9bw>&#160;" +this.bcahx000.bltpix.blt + "&#160; "+this.bcahx000.name,"smnx"+this.bcahx000.pagelinx.substring(0,2)+"/smnx"+this.bcahx000.pagelinx.substring(0,2)+".htm");
menu_bcaax.addSubItem("&#160; "+this.ckhbbai0.name,"smnx"+this.ckhbbai0.pagelinx.substring(0,2)+"/smnx"+this.ckhbbai0.pagelinx.substring(0,2)+".htm");
menu_bcaax.addSubItem("&#160; "+this.ckkbbai0.name,"smnx"+this.ckkbbai0.pagelinx.substring(0,2)+"/smnx"+this.ckkbbai0.pagelinx.substring(0,2)+".htm");
menu_bcaax.addSubItem("&#160; "+this.ckrbbai0.name,"smnx"+this.ckrbbai0.pagelinx.substring(0,2)+"/smnx"+this.ckrbbai0.pagelinx.substring(0,2)+".htm");
menu_bcaax.addSubItem("&#160; "+this.cksbbai0.name,"smnx"+this.cksbbai0.pagelinx.substring(0,2)+"/smnx"+this.cksbbai0.pagelinx.substring(0,2)+".htm");
menu_bcaax.addSubItem("&#160; "+this.cjbbbai0.name,"smnx"+this.cjbbbai0.pagelinx.substring(0,2)+"/smnx"+this.cjbbbai0.pagelinx.substring(0,2)+".htm");

menu_bcaax.addItem("<font class=h9bw>&#160;" +this.bcamx000.bltpix.blt + "&#160; "+this.bcamx000.name,"smnx"+this.bcamx000.pagelinx.substring(0,2)+"/smnx"+this.bcamx000.pagelinx.substring(0,2)+".htm");
menu_bcaax.addItem("&#160; "+this.ckhbbai0.name,"smnx"+this.ckhbbai0.pagelinx.substring(0,2)+"/smnx"+this.ckhbbai0.pagelinx.substring(0,2)+".htm");
menu_bcaax.addSubItem("&#160; "+this.ckhcfcb1.name,"smnx"+this.ckhcfcb1.pagelinx.substring(0,2)+"/"+this.ckhcfcb1.pagelinx+"b.htm");
menu_bcaax.addItem("&#160; "+this.ckkbbai0.name,"smnx"+this.ckkbbai0.pagelinx.substring(0,2)+"/smnx"+this.ckkbbai0.pagelinx.substring(0,2)+".htm");

menu_bcaax.addItem("&#160; XSUM home", "smnxbc/smnxbcaa.htm");
menu_bcaax.addItem("&#160; geocities Home", "smnxab/smnxabaa.htm");
menu_bcaax.addItem("&#160; geocities Network", "smnxab/smnxabnd.htm");



//// BloodCalc
menu_fdaax.addItem("<font class=h9bw>&#160;" +this.fdahx000.bltpix.blt + "&#160; "+this.fdahx000.name,"smnx"+this.fdahx000.pagelinx.substring(0,2)+"/smnx"+this.fdahx000.pagelinx.substring(0,4)+".htm");
menu_fdaax.addSubItem("&#160;" +this.pwbai000.bltpix.blt + "&#160; "+this.pwbai000.name,"smnx"+this.pwbai000.pagelinx.substring(0,2)+"/smnx"+this.pwbai000.pagelinx.substring(0,2)+".htm");
menu_fdaax.addSubItem("&#160;" +this.psbai000.bltpix.blt + "&#160; "+this.psbai000.name,"smnx"+this.psbai000.pagelinx.substring(0,2)+"/smnx"+this.psbai000.pagelinx.substring(0,2)+".htm");
menu_fdaax.addSubItem("&#160;" +this.prbai000.bltpix.blt + "&#160; "+this.prbai000.name,"smnx"+this.prbai000.pagelinx.substring(0,2)+"/smnx"+this.prbai000.pagelinx.substring(0,2)+".htm");
menu_fdaax.addSubItem("&#160;" +this.phbai000.bltpix.blt + "&#160; "+this.phbai000.name,"smnx"+this.phbai000.pagelinx.substring(0,2)+"/smnx"+this.phbai000.pagelinx.substring(0,2)+".htm");
menu_fdaax.addSubItem("&#160;" +this.pnbai000.bltpix.blt + "&#160; "+this.pnbai000.name,"smnx"+this.pnbai000.pagelinx.substring(0,2)+"/smnx"+this.pnbai000.pagelinx.substring(0,2)+".htm");
menu_fdaax.addSubItem("&#160;" +this.pbbai000.bltpix.blt + "&#160; "+this.pbbai000.name,"smnx"+this.pbbai000.pagelinx.substring(0,2)+"/smnx"+this.pbbai000.pagelinx.substring(0,2)+".htm");
menu_fdaax.addSubItem("&#160;" +this.pcbai000.bltpix.blt + "&#160; "+this.pcbai000.name,"smnx"+this.pcbai000.pagelinx.substring(0,2)+"/smnx"+this.pcbai000.pagelinx.substring(0,2)+".htm");
menu_fdaax.addSubItem("&#160;" +this.pfbai000.bltpix.blt + "&#160; "+this.pfbai000.name_a,"smnx"+this.pfbai000.pagelinx.substring(0,2)+"/smnx"+this.pfbai000.pagelinx.substring(0,2)+".htm");
menu_fdaax.addSubItem("&#160;" +this.pqbai000.bltpix.blt + "&#160; "+this.pqbai000.name,"smnx"+this.pqbai000.pagelinx.substring(0,2)+"/smnx"+this.pqbai000.pagelinx.substring(0,2)+".htm");

menu_fdaax.addItem("<font class=h9bw>&#160;" +this.fdahx000.bltpix.blt + "&#160; "+this.fdajx000.name,"smnx"+this.fdajx000.pagelinx.substring(0,2)+"/smnx"+this.fdajx000.pagelinx.substring(0,4)+".htm");
menu_fdaax.addSubItem("&#160;" + arrow_img + "&#160; "+this.psfdb034.name,"smnx"+this.psfdb034.pagelinx.substring(0,2)+"/"+this.psfdb034.pagelinx+".htm");
menu_fdaax.addSubItem("&#160;" + arrow_img + "&#160; "+this.pswcc770.name_a,"smnx"+this.pswcc770.pagelinx.substring(0,2)+"/"+this.pswcc770.pagelinx+".htm");
menu_fdaax.addSubItem("&#160;" + arrow_img + "&#160; "+this.psdgb014.name_a,"smnx"+this.psdgb014.pagelinx.substring(0,2)+"/"+this.psdgb014.pagelinx+".htm");
menu_fdaax.addSubItem("&#160;" + arrow_img + "&#160; "+this.psdgp182.name_a,"smnx"+this.psdgp182.pagelinx.substring(0,2)+"/"+this.psdgp182.pagelinx+".htm");
menu_fdaax.addSubItem("&#160;" + arrow_img + "&#160; "+this.psdgq277.name_a,"smnx"+this.psdgq277.pagelinx.substring(0,2)+"/"+this.psdgq277.pagelinx+".htm");
menu_fdaax.addSubItem("&#160;" + arrow_img + "&#160; "+this.psdcc770.name_a,"smnx"+this.psdcc770.pagelinx.substring(0,2)+"/"+this.psdcc770.pagelinx+".htm");
menu_fdaax.addSubItem("&#160;" + arrow_img + "&#160; "+this.psdcc220.name_a,"smnx"+this.psdcc220.pagelinx.substring(0,2)+"/"+this.psdcc220.pagelinx+".htm");
menu_fdaax.addSubItem("&#160;" + arrow_img + "&#160; "+this.pshdb101.name_a,"smnx"+this.pshdb101.pagelinx.substring(0,2)+"/"+this.pshdb101.pagelinx+".htm");
menu_fdaax.addSubItem("&#160;" + arrow_img + "&#160; "+this.psmdb301.name,"smnx"+this.psmdb301.pagelinx.substring(0,2)+"/"+this.psmdb301.pagelinx+".htm");
menu_fdaax.addSubItem("&#160;" + arrow_img + "&#160; "+this.prdgg001.name,"smnx"+this.prdgg001.pagelinx.substring(0,2)+"/"+this.prdgg001.pagelinx+".htm");
menu_fdaax.addSubItem("&#160;" + arrow_img + "&#160; "+this.prdcc770.name_a,"smnx"+this.prdcc770.pagelinx.substring(0,2)+"/"+this.prdcc770.pagelinx+".htm");
menu_fdaax.addSubItem("&#160;" + arrow_img + "&#160; "+this.prgdb276.name_a,"smnx"+this.prgdb276.pagelinx.substring(0,2)+"/"+this.prgdb276.pagelinx+".htm");
menu_fdaax.addSubItem("&#160;" + arrow_img + "&#160; "+this.prgdv334.name_a,"smnx"+this.prgdv334.pagelinx.substring(0,2)+"/"+this.prgdv334.pagelinx+".htm");
menu_fdaax.addSubItem("&#160;" + arrow_img + "&#160; "+this.prghc187.name_a,"smnx"+this.prghc187.pagelinx.substring(0,2)+"/"+this.prghc187.pagelinx+".htm");
menu_fdaax.addSubItem("&#160;" + arrow_img + "&#160; "+this.pbhdb125.name_a,"smnx"+this.pbhdb125.pagelinx.substring(0,2)+"/"+this.pbhdb125.pagelinx+".htm");
menu_fdaax.addSubItem("&#160;" + arrow_img + "&#160; "+this.pndfb115.name_a,"smnx"+this.pndfb115.pagelinx.substring(0,2)+"/"+this.pndfb115.pagelinx+".htm");
menu_fdaax.addSubItem("&#160;" + arrow_img + "&#160; "+this.pndmb015.name_a,"smnx"+this.pndmb015.pagelinx.substring(0,2)+"/"+this.pndmb015.pagelinx+".htm");
menu_fdaax.addSubItem("&#160;" + arrow_img + "&#160; "+this.pndhb225.name,"smnx"+this.pndhb225.pagelinx.substring(0,2)+"/"+this.pndhb225.pagelinx+".htm");
menu_fdaax.addSubItem("&#160;" + arrow_img + "&#160; "+this.pndcf770.name_a,"smnx"+this.pndcf770.pagelinx.substring(0,2)+"/"+this.pndcf770.pagelinx+".htm");
menu_fdaax.addSubItem("&#160;" + arrow_img + "&#160; "+this.pcdjg513.name_a,"smnx"+this.pcdjg513.pagelinx.substring(0,2)+"/"+this.pcdjg513.pagelinx+".htm");
menu_fdaax.addSubItem("&#160;" + arrow_img + "&#160; "+this.pcdcc770.name_a,"smnx"+this.pcdcc770.pagelinx.substring(0,2)+"/"+this.pcdcc770.pagelinx+".htm");

menu_fdaax.addItem("<font class=h9bw>&#160;" +sm_conv_iis.blt + "&#160; "+this.fdamx000.name,"smnx"+this.fdamx000.pagelinx.substring(0,2)+"/smnx"+this.fdamx000.pagelinx.substring(0,4)+".htm");
menu_fdaax.addSubItem("&#160; "+this.xbbai000.name,"smnx"+this.xbbai000.pagelinx.substring(0,2)+"/smnx"+this.xbbai000.pagelinx.substring(0,2)+".htm");
menu_fdaax.addSubItem("&#160; "+this.xdbai000.name,"smnx"+this.xdbai000.pagelinx.substring(0,2)+"/smnx"+this.xdbai000.pagelinx.substring(0,2)+".htm");
menu_fdaax.addSubItem("&#160; "+this.xkbai000.name,"smnx"+this.xkbai000.pagelinx.substring(0,2)+"/smnx"+this.xkbai000.pagelinx.substring(0,2)+".htm");

menu_fdaax.addSubItem("&#160; "+this.xfbai000.name,"smnx"+this.xfbai000.pagelinx.substring(0,2)+"/smnx"+this.xfbai000.pagelinx.substring(0,2)+".htm");
menu_fdaax.addSubItem("&#160; "+this.xgbai000.name,"smnx"+this.xgbai000.pagelinx.substring(0,2)+"/smnx"+this.xgbai000.pagelinx.substring(0,2)+".htm");
menu_fdaax.addSubItem("&#160; "+this.xhbai000.name,"smnx"+this.xhbai000.pagelinx.substring(0,2)+"/smnx"+this.xhbai000.pagelinx.substring(0,2)+".htm");
menu_fdaax.addSubItem("&#160; "+this.xjbai000.name,"smnx"+this.xjbai000.pagelinx.substring(0,2)+"/smnx"+this.xjbai000.pagelinx.substring(0,2)+".htm");
menu_fdaax.addSubItem("&#160; "+this.xpbai000.name,"smnx"+this.xpbai000.pagelinx.substring(0,2)+"/smnx"+this.xpbai000.pagelinx.substring(0,2)+".htm");
menu_fdaax.addSubItem("&#160; "+this.xqbai000.name,"smnx"+this.xqbai000.pagelinx.substring(0,2)+"/smnx"+this.xqbai000.pagelinx.substring(0,2)+".htm");
menu_fdaax.addSubItem("&#160; "+this.xnbai000.name,"smnx"+this.xnbai000.pagelinx.substring(0,2)+"/smnx"+this.xnbai000.pagelinx.substring(0,2)+".htm");

menu_fdaax.addItem("<font class=h9bw>&#160;"+this.fdanx000.name,"smnx"+this.fdamx000.pagelinx.substring(0,2)+"/smnx"+this.fdamx000.pagelinx.substring(0,4)+".htm");
menu_fdaax.addSubItem("&#160; "+this.xgdbc010.name + " <--> " + this.xgdbc010.spcmn_,"smnx"+this.xgdbc010.pagelinx.substring(0,2)+"/"+this.xgdbc010.pagelinx+".htm");
menu_fdaax.addSubItem("&#160; "+this.xbrbc010.name + " <--> " + this.xbrbc010.spcmn_,"smnx"+this.xbrbc010.pagelinx.substring(0,2)+"/"+this.xbrbc010.pagelinx+".htm");
menu_fdaax.addSubItem("&#160; "+this.xbrdc015.name + " <--> " + this.xbrdc015.spcmn_,"smnx"+this.xbrdc015.pagelinx.substring(0,2)+"/"+this.xbrdc015.pagelinx+".htm");
menu_fdaax.addSubItem("&#160; "+this.xbrgc025.name + " <--> " + this.xbrgc025.spcmn_,"smnx"+this.xbrgc025.pagelinx.substring(0,2)+"/"+this.xbrgc025.pagelinx+".htm");
menu_fdaax.addSubItem("&#160; "+this.xbsdc015.name + " <--> " + this.xbsdc015.spcmn_,"smnx"+this.xbsdc015.pagelinx.substring(0,2)+"/"+this.xbsdc015.pagelinx+".htm");
menu_fdaax.addSubItem("&#160; "+this.xdkdc015.name + " <--> " + this.xdkdc015.spcmn_,"smnx"+this.xdkdc015.pagelinx.substring(0,2)+"/"+this.xdkdc015.pagelinx+".htm");
menu_fdaax.addSubItem("&#160; "+this.xdkgc025.name + " <--> " + this.xdkgc025.spcmn_,"smnx"+this.xdkgc025.pagelinx.substring(0,2)+"/"+this.xdkgc025.pagelinx+".htm");
menu_fdaax.addSubItem("&#160; "+this.xdpbc010.name + " <--> " + this.xdpbc010.spcmn_,"smnx"+this.xdpbc010.pagelinx.substring(0,2)+"/"+this.xdpbc010.pagelinx+".htm");
menu_fdaax.addSubItem("&#160; "+this.xdqbc010.name + " <--> " + this.xdqbc010.spcmn_,"smnx"+this.xdqbc010.pagelinx.substring(0,2)+"/"+this.xdqbc010.pagelinx+".htm");
menu_fdaax.addSubItem("&#160; "+this.xdqdc015.name + " <--> " + this.xdqdc015.spcmn_,"smnx"+this.xdqdc015.pagelinx.substring(0,2)+"/"+this.xdqdc015.pagelinx+".htm");
menu_fdaax.addSubItem("&#160; "+this.xklcn027.name_sp + " <--> " + this.xklcn027.spcmn_,"smnx"+this.xklcn027.pagelinx.substring(0,2)+"/"+this.xklcn027.pagelinx+".htm");
menu_fdaax.addSubItem("&#160; "+this.xklcf013.name_sp + " <--> " + this.xklcf013.spcmn_,"smnx"+this.xklcf013.pagelinx.substring(0,2)+"/"+this.xklcf013.pagelinx+".htm");

//////menu_fdaax.addItem("&#160;" +sm_conv_iis.blt + "&#160; "+this.tbbaeae0.name_a,"smnx"+this.fdakx000.pagelinx.substring(0,2)+"/smnx"+this.fdakx000.pagelinx.substring(0,4)+".htm");
menu_fdaax.addItem("&#160; BloodCalc Home","smnxfd/smnxfdaa.htm");
menu_fdaax.addItem("&#160; geocities Home", "smnxab/smnxabaa.htm");
menu_fdaax.addItem("&#160; geocities Network", "smnxab/smnxabnd.htm");


//////eH&P cpbgcbc1
menu_chaax.addItem("<font class=h9bw>&#160;" +this.chakx000.bltpix.blt + "&#160; "+this.chakx000.name,"smnx"+this.chakx000.pagelinx.substring(0,2)+"/smnx"+this.chakx000.pagelinx.substring(0,4)+".htm");
menu_chaax.addItem("<font class=h9bw>&#160;" +this.chakx000.bltpix.blt + "&#160; "+this.cpbgcbc1.name_a,"smnx"+this.cpbgcbc1.pagelinx.substring(0,2)+"/"+this.cpbgcbc1.pagelinx+".htm");
menu_chaax.addItem("<font class=h9bw>&#160;" +this.chajx000.bltpix.blt + "&#160; "+this.chajx000.name,"smnx"+this.chajx000.pagelinx.substring(0,2)+"/smnx"+this.chajx000.pagelinx.substring(0,4)+".htm");
menu_chaax.addSubItem("&#160; "+this.ckbgcbc1.name,"smnx"+this.ckbgcbc1.pagelinx.substring(0,2)+"/"+this.ckbgcbc1.pagelinx+".htm");
menu_chaax.addSubItem("&#160; "+this.ckcddcd1.name,"smnx"+this.ckcddcd1.pagelinx.substring(0,2)+"/"+this.ckcddcd1.pagelinx+".htm");
menu_chaax.addSubItem("&#160; "+this.ckcdddb2.name,"smnx"+this.ckcdddb2.pagelinx.substring(0,2)+"/"+this.ckcdddb2.pagelinx+".htm");

menu_chaax.addSubItem("&#160; "+this.ckcffbc1.name,"smnx"+this.ckcffbc1.pagelinx.substring(0,2)+"/"+this.ckcffbc1.pagelinx+".htm");
menu_chaax.addSubItem("&#160; "+this.ckcmfdc4.name,"smnx"+this.ckcmfdc4.pagelinx.substring(0,2)+"/"+this.ckcmfdc4.pagelinx+".htm");
menu_chaax.addSubItem("&#160; "+this.ckcrcbc1.name,"smnx"+this.ckcrcbc1.pagelinx.substring(0,2)+"/"+this.ckcrcbc1.pagelinx+".htm");
menu_chaax.addSubItem("&#160; "+this.ckhcdbc1.name,"smnx"+this.ckhcdbc1.pagelinx.substring(0,2)+"/"+this.ckhcdbc1.pagelinx+".htm");
menu_chaax.addSubItem("&#160; "+this.ckhffcd3.name_a,"smnx"+this.ckhffcd3.pagelinx.substring(0,2)+"/"+this.ckhffcd3.pagelinx+".htm");
menu_chaax.addSubItem("&#160; "+this.ckhhcbc1.name,"smnx"+this.ckhhcbc1.pagelinx.substring(0,2)+"/"+this.ckhhcbc1.pagelinx+".htm");
menu_chaax.addSubItem("&#160; "+this.ckhkcbc1.name,"smnx"+this.ckhkcbc1.pagelinx.substring(0,2)+"/"+this.ckhkcbc1.pagelinx+".htm");
menu_chaax.addSubItem("&#160; "+this.ckhvcbc1.name,"smnx"+this.ckhvcbc1.pagelinx.substring(0,2)+"/"+this.ckhvcbc1.pagelinx+".htm");
menu_chaax.addSubItem("&#160; "+this.ckrvvbb1.name,"smnx"+this.ckrvvbb1.pagelinx.substring(0,2)+"/"+this.ckrvvbb1.pagelinx+".htm");
menu_chaax.addSubItem("&#160; "+this.ckkffbc1.name_a,"smnx"+this.ckkffbc1.pagelinx.substring(0,2)+"/"+this.ckkffbc1.pagelinx+".htm");
menu_chaax.addSubItem("&#160; "+this.ckkffdf2.name,"smnx"+this.ckkffdf2.pagelinx.substring(0,2)+"/"+this.ckkffdf2.pagelinx+".htm");
menu_chaax.addSubItem("&#160; "+this.cksfcbc1.name_a,"smnx"+this.cksfcbc1.pagelinx.substring(0,2)+"/"+this.cksfcbc1.pagelinx+".htm");
menu_chaax.addSubItem("&#160; "+this.cksfcfd2.name_a,"smnx"+this.cksfcfd2.pagelinx.substring(0,2)+"/"+this.cksfcfd2.pagelinx+".htm");
menu_chaax.addSubItem("&#160; "+this.cksfkbc1.name,"smnx"+this.cksfkbc1.pagelinx.substring(0,2)+"/"+this.cksfkbc1.pagelinx+".htm");
menu_chaax.addSubItem("&#160; "+this.ckrddcd2.name_a,"smnx"+this.ckrddcd2.pagelinx.substring(0,2)+"/"+this.ckrddcd2.pagelinx+".htm");
menu_chaax.addSubItem("&#160; "+this.ckrdcbc1.name,"smnx"+this.ckrdcbc1.pagelinx.substring(0,2)+"/"+this.ckrdcbc1.pagelinx+".htm");
menu_chaax.addSubItem("&#160; "+this.ckrdgbc1.name,"smnx"+this.ckrdgbc1.pagelinx.substring(0,2)+"/"+this.ckrdgbc1.pagelinx+".htm");
menu_chaax.addSubItem("&#160; "+this.ckrdggh3.name_a,"smnx"+this.ckrdggh3.pagelinx.substring(0,2)+"/"+this.ckrdggh3.pagelinx+".htm");

menu_chaax.addItem("<font class=h9bw>&#160;" +this.chahx000.bltpix.blt + "&#160; "+this.chahx000.name,"smnx"+this.chahx000.pagelinx.substring(0,2)+"/smnx"+this.chahx000.pagelinx.substring(0,4)+".htm");
menu_chaax.addItem("<font class=h9bw>&#160;" +this.hbbaeae0.bltpix.blt + "&#160; "+this.hbbaeae0.name,"smnx"+this.hbbaeae0.pagelinx.substring(0,2)+"/smnx"+this.hbbaeae0.pagelinx.substring(0,4)+".htm");
menu_chaax.addSubItem("&#160; "+this.hcbaiai0.name,"smnx"+this.hcbaiai0.pagelinx.substring(0,2)+"/smnx"+this.hcbaiai0.pagelinx.substring(0,2)+".htm");
menu_chaax.addSubItem("&#160; "+this.hdbaiai0.name,"smnx"+this.hdbaiai0.pagelinx.substring(0,2)+"/smnx"+this.hdbaiai0.pagelinx.substring(0,2)+".htm");
menu_chaax.addSubItem("&#160; "+this.hfbaiai0.name,"smnx"+this.hfbaiai0.pagelinx.substring(0,2)+"/smnx"+this.hfbaiai0.pagelinx.substring(0,2)+".htm");
menu_chaax.addSubItem("&#160; "+this.hgbaiai0.name_a,"smnx"+this.hgbaiai0.pagelinx.substring(0,2)+"/smnx"+this.hgbaiai0.pagelinx.substring(0,2)+".htm");
menu_chaax.addSubItem("&#160; "+this.hhbaiai0.name,"smnx"+this.hhbaiai0.pagelinx.substring(0,2)+"/smnx"+this.hhbaiai0.pagelinx.substring(0,2)+".htm");
menu_chaax.addSubItem("&#160; "+this.hjbaiai0.name,"smnx"+this.hjbaiai0.pagelinx.substring(0,2)+"/smnx"+this.hjbaiai0.pagelinx.substring(0,2)+".htm");
menu_chaax.addSubItem("&#160; "+this.hkbaiai0.name_a,"smnx"+this.hkbaiai0.pagelinx.substring(0,2)+"/smnx"+this.hkbaiai0.pagelinx.substring(0,2)+".htm");
menu_chaax.addSubItem("&#160; "+this.hlbaiai0.name_a,"smnx"+this.hlbaiai0.pagelinx.substring(0,2)+"/smnx"+this.hlbaiai0.pagelinx.substring(0,2)+".htm");
menu_chaax.addSubItem("&#160; "+this.hrbaiai0.name_a,"smnx"+this.hrbaiai0.pagelinx.substring(0,2)+"/smnx"+this.hrbaiai0.pagelinx.substring(0,2)+".htm");

menu_chaax.addItem("<font class=h9bw>&#160;" +this.kbbaeae0.bltpix.blt + "&#160; "+this.kbbaeae0.name_a,"smnx"+this.kbbaeae0.pagelinx.substring(0,2)+"/smnx"+this.kbbaeae0.pagelinx.substring(0,4)+".htm");
menu_chaax.addSubItem("&#160; "+this.kcbaiai0.name,"smnx"+this.kcbaiai0.pagelinx.substring(0,2)+"/smnx"+this.kcbaiai0.pagelinx.substring(0,2)+".htm");
menu_chaax.addSubItem("&#160; "+this.kdbaiai0.name,"smnx"+this.kdbaiai0.pagelinx.substring(0,2)+"/smnx"+this.kdbaiai0.pagelinx.substring(0,2)+".htm");
menu_chaax.addSubItem("&#160; "+this.kfbaiai0.name,"smnx"+this.kfbaiai0.pagelinx.substring(0,2)+"/smnx"+this.kfbaiai0.pagelinx.substring(0,2)+".htm");
menu_chaax.addSubItem("&#160; "+this.kgbaiai0.name,"smnx"+this.kgbaiai0.pagelinx.substring(0,2)+"/smnx"+this.kgbaiai0.pagelinx.substring(0,2)+".htm");
menu_chaax.addSubItem("&#160; "+this.khbaiai0.name,"smnx"+this.khbaiai0.pagelinx.substring(0,2)+"/smnx"+this.khbaiai0.pagelinx.substring(0,2)+".htm");
menu_chaax.addSubItem("&#160; "+this.kjbaiai0.name,"smnx"+this.kjbaiai0.pagelinx.substring(0,2)+"/smnx"+this.kjbaiai0.pagelinx.substring(0,2)+".htm");
menu_chaax.addSubItem("&#160; "+this.kkbaiai0.name,"smnx"+this.kkbaiai0.pagelinx.substring(0,2)+"/smnx"+this.kkbaiai0.pagelinx.substring(0,2)+".htm");
menu_chaax.addSubItem("&#160; "+this.kmbaiai0.name,"smnx"+this.kmbaiai0.pagelinx.substring(0,2)+"/smnx"+this.kmbaiai0.pagelinx.substring(0,2)+".htm");
menu_chaax.addSubItem("&#160; "+this.kpbaiai0.name,"smnx"+this.kpbaiai0.pagelinx.substring(0,2)+"/smnx"+this.kpbaiai0.pagelinx.substring(0,2)+".htm");
menu_chaax.addSubItem("&#160; "+this.kqbaiai0.name,"smnx"+this.kqbaiai0.pagelinx.substring(0,2)+"/smnx"+this.kqbaiai0.pagelinx.substring(0,2)+".htm");
menu_chaax.addSubItem("&#160; "+this.krbaiai0.name,"smnx"+this.krbaiai0.pagelinx.substring(0,2)+"/smnx"+this.krbaiai0.pagelinx.substring(0,2)+".htm");
menu_chaax.addSubItem("&#160; "+this.ksbaiai0.name,"smnx"+this.ksbaiai0.pagelinx.substring(0,2)+"/smnx"+this.ksbaiai0.pagelinx.substring(0,2)+".htm");
menu_chaax.addSubItem("&#160; "+this.ktbaiai0.name_a,"smnx"+this.ktbaiai0.pagelinx.substring(0,2)+"/smnx"+this.ktbaiai0.pagelinx.substring(0,2)+".htm");
menu_chaax.addSubItem("&#160; "+this.kvbaiai0.name,"smnx"+this.kvbaiai0.pagelinx.substring(0,2)+"/smnx"+this.kvbaiai0.pagelinx.substring(0,2)+".htm");

menu_chaax.addItem("&#160; eH&P home","smnxch/smnxchaa.htm");
menu_chaax.addItem("&#160; geocities home", "smnxab/smnxabaa.htm");
menu_chaax.addItem("&#160; geocities Network", "smnxab/smnxabnd.htm");


if (menu_bcaax._items.length > menu_pat._items.length) {
  view_h = menu_bcaax._items.length * (menu_1_item_h + menu_1_spacer_h) + 411;
} else {
  view_h = menu_pat._items.length * (menu_2_item_h + menu_2_spacer_h) + 411;
}


menu_bcaax.buildMenu("menu_bcaax", false, 0, 544, 100, menu_1_item_w, menu_1_item_h, menu_1_spacer_w, menu_1_spacer_h, null);
menu_fdaax.buildMenu("menu_fdaax", false, 0, 544, 100, menu_1_item_w, menu_1_item_h, menu_1_spacer_w, menu_1_spacer_h, null);
menu_chaax.buildMenu("menu_chaax", false, 0, 544, 100, menu_1_item_w, menu_1_item_h, menu_1_spacer_w, menu_1_spacer_h, null);
menu_pat.buildMenu("menu_pat", false, 100,101, 100, menu_2_item_w, menu_2_item_h, menu_2_spacer_w, menu_2_spacer_h, null);














