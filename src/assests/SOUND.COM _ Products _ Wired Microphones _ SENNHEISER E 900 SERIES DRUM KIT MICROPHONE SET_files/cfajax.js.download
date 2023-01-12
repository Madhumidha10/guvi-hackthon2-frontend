/*ADOBE SYSTEMS INCORPORATED
Copyright 2012 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
function cfinit(){
if(!window.ColdFusion){
ColdFusion={};
var $C=ColdFusion;
if(!$C.Ajax){
$C.Ajax={};
}
var $A=$C.Ajax;
if(!$C.AjaxProxy){
$C.AjaxProxy={};
}
var $X=$C.AjaxProxy;
if(!$C.Bind){
$C.Bind={};
}
var $B=$C.Bind;
if(!$C.Event){
$C.Event={};
}
var $E=$C.Event;
if(!$C.Log){
$C.Log={};
}
var $L=$C.Log;
if(!$C.Util){
$C.Util={};
}
var $U=$C.Util;
if(!$C.DOM){
$C.DOM={};
}
var $D=$C.DOM;
if(!$C.Spry){
$C.Spry={};
}
var $S=$C.Spry;
if(!$C.Pod){
$C.Pod={};
}
var $P=$C.Pod;
if(!$C.objectCache){
$C.objectCache={};
}
if(!$C.required){
$C.required={};
}
if(!$C.importedTags){
$C.importedTags=[];
}
if(!$C.requestCounter){
$C.requestCounter=0;
}
if(!$C.bindHandlerCache){
$C.bindHandlerCache={};
}
window._cf_loadingtexthtml="<div style=\"text-align: center;\">"+window._cf_loadingtexthtml+"&nbsp;"+CFMessage["loading"]+"</div>";
$C.globalErrorHandler=function(_3a,_3b){
if($L.isAvailable){
$L.error(_3a,_3b);
}
if($C.userGlobalErrorHandler){
$C.userGlobalErrorHandler(_3a);
}
if(!$L.isAvailable&&!$C.userGlobalErrorHandler){
alert(_3a+CFMessage["globalErrorHandler.alert"]);
}
};
$C.handleError=function(_3c,_3d,_3e,_3f,_40,_41,_42,_43){
var msg=$L.format(_3d,_3f);
if(_3c){
$L.error(msg,"http");
if(!_40){
_40=-1;
}
if(!_41){
_41=msg;
}
_3c(_40,_41,_43);
}else{
if(_42){
$L.error(msg,"http");
throw msg;
}else{
$C.globalErrorHandler(msg,_3e);
}
}
};
$C.setGlobalErrorHandler=function(_45){
$C.userGlobalErrorHandler=_45;
};
$A.createXMLHttpRequest=function(){
try{
return new XMLHttpRequest();
}
catch(e){
}
var _46=["Microsoft.XMLHTTP","MSXML2.XMLHTTP.5.0","MSXML2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP"];
for(var i=0;i<_46.length;i++){
try{
return new ActiveXObject(_46[i]);
}
catch(e){
}
}
return false;
};
$A.isRequestError=function(req){
return ((req.status!=0&&req.status!=200)||req.getResponseHeader("server-error"));
};
$A.sendMessage=function(url,_4a,_4b,_4c,_4d,_4e,_4f){
var req=$A.createXMLHttpRequest();
if(!_4a){
_4a="GET";
}
if(_4c&&_4d){
req.onreadystatechange=function(){
$A.callback(req,_4d,_4e);
};
}
if(_4b){
_4b+="&_cf_nodebug=true&_cf_nocache=true";
}else{
_4b="_cf_nodebug=true&_cf_nocache=true";
}
if(window._cf_clientid){
_4b+="&_cf_clientid="+_cf_clientid;
}
if(_4a=="GET"){
if(_4b){
_4b+="&_cf_rc="+($C.requestCounter++);
if(url.indexOf("?")==-1){
url+="?"+_4b;
}else{
url+="&"+_4b;
}
}
$L.info("ajax.sendmessage.get","http",[url]);
req.open(_4a,url,_4c);
req.send(null);
}else{
$L.info("ajax.sendmessage.post","http",[url,_4b]);
req.open(_4a,url,_4c);
req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(_4b){
req.send(_4b);
}else{
req.send(null);
}
}
if(!_4c){
while(req.readyState!=4){
}
if($A.isRequestError(req)){
$C.handleError(null,"ajax.sendmessage.error","http",[req.status,req.statusText],req.status,req.statusText,_4f);
}else{
return req;
}
}
};
$A.callback=function(req,_52,_53){
if(req.readyState!=4){
return;
}
req.onreadystatechange=new Function;
_52(req,_53);
};
$A.submitForm=function(_54,url,_56,_57,_58,_59){
var _5a=$C.getFormQueryString(_54);
if(_5a==-1){
$C.handleError(_57,"ajax.submitform.formnotfound","http",[_54],-1,null,true);
return;
}
if(!_58){
_58="POST";
}
_59=!(_59===false);
var _5b=function(req){
$A.submitForm.callback(req,_54,_56,_57);
};
$L.info("ajax.submitform.submitting","http",[_54]);
var _5d=$A.sendMessage(url,_58,_5a,_59,_5b);
if(!_59){
$L.info("ajax.submitform.success","http",[_54]);
return _5d.responseText;
}
};
$A.submitForm.callback=function(req,_5f,_60,_61){
if($A.isRequestError(req)){
$C.handleError(_61,"ajax.submitform.error","http",[req.status,_5f,req.statusText],req.status,req.statusText);
}else{
$L.info("ajax.submitform.success","http",[_5f]);
if(_60){
_60(req.responseText);
}
}
};
$C.empty=function(){
};
$C.setSubmitClicked=function(_62,_63){
var el=$D.getElement(_63,_62);
el.cfinputbutton=true;
$C.setClickedProperty=function(){
el.clicked=true;
};
$E.addListener(el,"click",$C.setClickedProperty);
};
$C.getFormQueryString=function(_65,_66){
var _67;
if(typeof _65=="string"){
_67=(document.getElementById(_65)||document.forms[_65]);
}else{
if(typeof _65=="object"){
_67=_65;
}
}
if(!_67||null==_67.elements){
return -1;
}
var _68,elementName,elementValue,elementDisabled;
var _69=false;
var _6a=(_66)?{}:"";
for(var i=0;i<_67.elements.length;i++){
_68=_67.elements[i];
elementDisabled=_68.disabled;
elementName=_68.name;
elementValue=_68.value;
if(_68.id&&_68.id.startsWith("cf_textarea")){
var _6c=CKEDITOR.instances;
if(_6c){
for(ta in _6c){
if(_6c[ta].getData){
elementValue=_6c[ta].getData();
break;
}
}
}
}
if(!elementDisabled&&elementName){
switch(_68.type){
case "select-one":
case "select-multiple":
for(var j=0;j<_68.options.length;j++){
if(_68.options[j].selected){
if(window.ActiveXObject){
_6a=$C.getFormQueryString.processFormData(_6a,_66,elementName,_68.options[j].attributes["value"].specified?_68.options[j].value:_68.options[j].text);
}else{
_6a=$C.getFormQueryString.processFormData(_6a,_66,elementName,_68.options[j].hasAttribute("value")?_68.options[j].value:_68.options[j].text);
}
}
}
break;
case "radio":
case "checkbox":
if(_68.checked){
_6a=$C.getFormQueryString.processFormData(_6a,_66,elementName,elementValue);
}
break;
case "file":
case undefined:
case "reset":
break;
case "button":
_6a=$C.getFormQueryString.processFormData(_6a,_66,elementName,elementValue);
break;
case "submit":
if(_68.cfinputbutton){
if(_69==false&&_68.clicked){
_6a=$C.getFormQueryString.processFormData(_6a,_66,elementName,elementValue);
_69=true;
}
}else{
_6a=$C.getFormQueryString.processFormData(_6a,_66,elementName,elementValue);
}
break;
case "textarea":
var _6e;
if(window.FCKeditorAPI&&(_6e=$C.objectCache[elementName])&&_6e.richtextid){
var _6f=FCKeditorAPI.GetInstance(_6e.richtextid);
if(_6f){
elementValue=_6f.GetXHTML();
}
}
_6a=$C.getFormQueryString.processFormData(_6a,_66,elementName,elementValue);
break;
default:
_6a=$C.getFormQueryString.processFormData(_6a,_66,elementName,elementValue);
break;
}
}
}
if(!_66){
_6a=_6a.substr(0,_6a.length-1);
}
return _6a;
};
$C.getFormQueryString.processFormData=function(_70,_71,_72,_73){
if(_71){
if(_70[_72]){
_70[_72]+=","+_73;
}else{
_70[_72]=_73;
}
}else{
_70+=encodeURIComponent(_72)+"="+encodeURIComponent(_73)+"&";
}
return _70;
};
$A.importTag=function(_74){
$C.importedTags.push(_74);
};
$A.checkImportedTag=function(_75){
var _76=false;
for(var i=0;i<$C.importedTags.length;i++){
if($C.importedTags[i]==_75){
_76=true;
break;
}
}
if(!_76){
$C.handleError(null,"ajax.checkimportedtag.error","widget",[_75]);
}
};
$C.getElementValue=function(_78,_79,_7a){
if(!_78){
$C.handleError(null,"getelementvalue.noelementname","bind",null,null,null,true);
return;
}
if(!_7a){
_7a="value";
}
var _7b=$B.getBindElementValue(_78,_79,_7a);
if(typeof (_7b)=="undefined"){
_7b=null;
}
if(_7b==null){
$C.handleError(null,"getelementvalue.elnotfound","bind",[_78,_7a],null,null,true);
return;
}
return _7b;
};
$B.getBindElementValue=function(_7c,_7d,_7e,_7f,_80){
var _81="";
if(window[_7c]){
var _82=eval(_7c);
if(_82&&_82._cf_getAttribute){
_81=_82._cf_getAttribute(_7e);
return _81;
}
}
var _83=$C.objectCache[_7c];
if(_83&&_83._cf_getAttribute){
_81=_83._cf_getAttribute(_7e);
return _81;
}
var el=$D.getElement(_7c,_7d);
var _85=(el&&((!el.length&&el.length!=0)||(el.length&&el.length>0)||el.tagName=="SELECT"));
if(!_85&&!_80){
$C.handleError(null,"bind.getbindelementvalue.elnotfound","bind",[_7c]);
return null;
}
if(el.tagName!="SELECT"){
if(el.length>1){
var _86=true;
for(var i=0;i<el.length;i++){
var _88=(el[i].getAttribute("type")=="radio"||el[i].getAttribute("type")=="checkbox");
if(!_88||(_88&&el[i].checked)){
if(!_86){
_81+=",";
}
_81+=$B.getBindElementValue.extract(el[i],_7e);
_86=false;
}
}
}else{
_81=$B.getBindElementValue.extract(el,_7e);
}
}else{
var _86=true;
for(var i=0;i<el.options.length;i++){
if(el.options[i].selected){
if(!_86){
_81+=",";
}
_81+=$B.getBindElementValue.extract(el.options[i],_7e);
_86=false;
}
}
}
if(typeof (_81)=="object"){
$C.handleError(null,"bind.getbindelementvalue.simplevalrequired","bind",[_7c,_7e]);
return null;
}
if(_7f&&$C.required[_7c]&&_81.length==0){
return null;
}
return _81;
};
$B.getBindElementValue.extract=function(el,_8a){
var _8b=el[_8a];
if((_8b==null||typeof (_8b)=="undefined")&&el.getAttribute){
_8b=el.getAttribute(_8a);
}
return _8b;
};
$L.init=function(){
if(window.YAHOO&&YAHOO.widget&&YAHOO.widget.Logger){
YAHOO.widget.Logger.categories=[CFMessage["debug"],CFMessage["info"],CFMessage["error"],CFMessage["window"]];
YAHOO.widget.LogReader.prototype.formatMsg=function(_8c){
var _8d=_8c.category;
return "<p>"+"<span class='"+_8d+"'>"+_8d+"</span>:<i>"+_8c.source+"</i>: "+_8c.msg+"</p>";
};
var _8e=new YAHOO.widget.LogReader(null,{width:"30em",fontSize:"100%"});
_8e.setTitle(CFMessage["log.title"]||"ColdFusion AJAX Logger");
_8e._btnCollapse.value=CFMessage["log.collapse"]||"Collapse";
_8e._btnPause.value=CFMessage["log.pause"]||"Pause";
_8e._btnClear.value=CFMessage["log.clear"]||"Clear";
$L.isAvailable=true;
}
};
$L.log=function(_8f,_90,_91,_92){
if(!$L.isAvailable){
return;
}
if(!_91){
_91="global";
}
_91=CFMessage[_91]||_91;
_90=CFMessage[_90]||_90;
_8f=$L.format(_8f,_92);
YAHOO.log(_8f,_90,_91);
};
$L.format=function(_93,_94){
var msg=CFMessage[_93]||_93;
if(_94){
for(i=0;i<_94.length;i++){
if(!_94[i].length){
_94[i]="";
}
var _96="{"+i+"}";
msg=msg.replace(_96,_94[i]);
}
}
return msg;
};
$L.debug=function(_97,_98,_99){
$L.log(_97,"debug",_98,_99);
};
$L.info=function(_9a,_9b,_9c){
$L.log(_9a,"info",_9b,_9c);
};
$L.error=function(_9d,_9e,_9f){
$L.log(_9d,"error",_9e,_9f);
};
$L.dump=function(_a0,_a1){
if($L.isAvailable){
var _a2=(/string|number|undefined|boolean/.test(typeof (_a0))||_a0==null)?_a0:recurse(_a0,typeof _a0,true);
$L.debug(_a2,_a1);
}
};
$X.invoke=function(_a3,_a4,_a5,_a6,_a7){
return $X.invokeInternal(_a3,_a4,_a5,_a6,_a7,false,null,null);
};
$X.invokeInternal=function(_a8,_a9,_aa,_ab,_ac,_ad,_ae,_af){
var _b0="method="+_a9+"&_cf_ajaxproxytoken="+_aa;
if(_ad){
_b0+="&_cfclient="+"true";
var _b1=$X.JSON.encodeInternal(_a8._variables,_ad);
_b0+="&_variables="+encodeURIComponent(_b1);
var _b2=$X.JSON.encodeInternal(_a8._metadata,_ad);
_b0+="&_metadata="+encodeURIComponent(_b2);
}
var _b3=_a8.returnFormat||"json";
_b0+="&returnFormat="+_b3;
if(_a8.queryFormat){
_b0+="&queryFormat="+_a8.queryFormat;
}
if(_a8.formId){
var _b4=$C.getFormQueryString(_a8.formId,true);
if(_ab!=null){
for(prop in _b4){
_ab[prop]=_b4[prop];
}
}else{
_ab=_b4;
}
_a8.formId=null;
}
var _b5="";
if(_ab!=null){
_b5=$X.JSON.encodeInternal(_ab,_ad);
_b0+="&argumentCollection="+encodeURIComponent(_b5);
}
$L.info("ajaxproxy.invoke.invoking","http",[_a8.cfcPath,_a9,_b5]);
if(_a8.callHandler){
_a8.callHandler.call(null,_a8.callHandlerParams,_a8.cfcPath,_b0);
return;
}
var _b6;
var _b7=_a8.async;
if(_ae!=null){
_b7=true;
_b6=function(req){
$X.callbackOp(req,_a8,_ac,_ae,_af);
};
}else{
if(_a8.async){
_b6=function(req){
$X.callback(req,_a8,_ac);
};
}
}
var req=$A.sendMessage(_a8.cfcPath,_a8.httpMethod,_b0,_b7,_b6,null,true);
if(!_b7){
return $X.processResponse(req,_a8);
}
};
$X.callback=function(req,_bc,_bd){
if($A.isRequestError(req)){
$C.handleError(_bc.errorHandler,"ajaxproxy.invoke.error","http",[req.status,_bc.cfcPath,req.statusText],req.status,req.statusText,false,_bd);
}else{
if(_bc.callbackHandler){
var _be=$X.processResponse(req,_bc);
_bc.callbackHandler(_be,_bd);
}
}
};
$X.callbackOp=function(req,_c0,_c1,_c2,_c3){
if($A.isRequestError(req)){
var _c4=_c0.errorHandler;
if(_c3!=null){
_c4=_c3;
}
$C.handleError(_c4,"ajaxproxy.invoke.error","http",[req.status,_c0.cfcPath,req.statusText],req.status,req.statusText,false,_c1);
}else{
if(_c2){
var _c5=$X.processResponse(req,_c0);
_c2(_c5,_c1);
}
}
};
$X.processResponse=function(req,_c7){
var _c8=true;
for(var i=0;i<req.responseText.length;i++){
var c=req.responseText.charAt(i);
_c8=(c==" "||c=="\n"||c=="\t"||c=="\r");
if(!_c8){
break;
}
}
var _cb=(req.responseXML&&req.responseXML.childNodes.length>0);
var _cc=_cb?"[XML Document]":req.responseText;
$L.info("ajaxproxy.invoke.response","http",[_cc]);
var _cd;
var _ce=_c7.returnFormat||"json";
if(_ce=="json"){
try{
_cd=_c8?null:$X.JSON.decode(req.responseText);
}
catch(e){
if(typeof _c7._metadata!=="undefined"&&_c7._metadata.servercfc&&typeof req.responseText==="string"){
_cd=req.responseText;
}else{
throw e;
}
}
}else{
_cd=_cb?req.responseXML:(_c8?null:req.responseText);
}
return _cd;
};
$X.init=function(_cf,_d0,_d1){
if(typeof _d1==="undefined"){
_d1=false;
}
var _d2=_d0;
if(!_d1){
var _d3=_d0.split(".");
var ns=self;
for(i=0;i<_d3.length-1;i++){
if(_d3[i].length){
ns[_d3[i]]=ns[_d3[i]]||{};
ns=ns[_d3[i]];
}
}
var _d5=_d3[_d3.length-1];
if(ns[_d5]){
return ns[_d5];
}
ns[_d5]=function(){
this.httpMethod="GET";
this.async=false;
this.callbackHandler=null;
this.errorHandler=null;
this.formId=null;
};
_d2=ns[_d5].prototype;
}else{
_d2.httpMethod="GET";
_d2.async=false;
_d2.callbackHandler=null;
_d2.errorHandler=null;
_d2.formId=null;
}
_d2.cfcPath=_cf;
_d2.setHTTPMethod=function(_d6){
if(_d6){
_d6=_d6.toUpperCase();
}
if(_d6!="GET"&&_d6!="POST"){
$C.handleError(null,"ajaxproxy.sethttpmethod.invalidmethod","http",[_d6],null,null,true);
}
this.httpMethod=_d6;
};
_d2.setSyncMode=function(){
this.async=false;
};
_d2.setAsyncMode=function(){
this.async=true;
};
_d2.setCallbackHandler=function(fn){
this.callbackHandler=fn;
this.setAsyncMode();
};
_d2.setErrorHandler=function(fn){
this.errorHandler=fn;
this.setAsyncMode();
};
_d2.setForm=function(fn){
this.formId=fn;
};
_d2.setQueryFormat=function(_da){
if(_da){
_da=_da.toLowerCase();
}
if(!_da||(_da!="column"&&_da!="row"&&_da!="struct")){
$C.handleError(null,"ajaxproxy.setqueryformat.invalidformat","http",[_da],null,null,true);
}
this.queryFormat=_da;
};
_d2.setReturnFormat=function(_db){
if(_db){
_db=_db.toLowerCase();
}
if(!_db||(_db!="plain"&&_db!="json"&&_db!="wddx")){
$C.handleError(null,"ajaxproxy.setreturnformat.invalidformat","http",[_db],null,null,true);
}
this.returnFormat=_db;
};
$L.info("ajaxproxy.init.created","http",[_cf]);
if(_d1){
return _d2;
}else{
return ns[_d5];
}
};
$U.isWhitespace=function(s){
var _dd=true;
for(var i=0;i<s.length;i++){
var c=s.charAt(i);
_dd=(c==" "||c=="\n"||c=="\t"||c=="\r");
if(!_dd){
break;
}
}
return _dd;
};
$U.getFirstNonWhitespaceIndex=function(s){
var _e1=true;
for(var i=0;i<s.length;i++){
var c=s.charAt(i);
_e1=(c==" "||c=="\n"||c=="\t"||c=="\r");
if(!_e1){
break;
}
}
return i;
};
$C.trim=function(_e4){
return _e4.replace(/^\s+|\s+$/g,"");
};
$U.isInteger=function(n){
var _e6=true;
if(typeof (n)=="number"){
_e6=(n>=0);
}else{
for(i=0;i<n.length;i++){
if($U.isInteger.numberChars.indexOf(n.charAt(i))==-1){
_e6=false;
break;
}
}
}
return _e6;
};
$U.isInteger.numberChars="0123456789";
$U.isArray=function(a){
return (typeof (a.length)=="number"&&!a.toUpperCase);
};
$U.isBoolean=function(b){
if(b===true||b===false){
return true;
}else{
if(b.toLowerCase){
b=b.toLowerCase();
return (b==$U.isBoolean.trueChars||b==$U.isBoolean.falseChars);
}else{
return false;
}
}
};
$U.isBoolean.trueChars="true";
$U.isBoolean.falseChars="false";
$U.castBoolean=function(b){
if(b===true){
return true;
}else{
if(b===false){
return false;
}else{
if(b.toLowerCase){
b=b.toLowerCase();
if(b==$U.isBoolean.trueChars){
return true;
}else{
if(b==$U.isBoolean.falseChars){
return false;
}else{
return false;
}
}
}else{
return false;
}
}
}
};
$U.checkQuery=function(o){
var _eb=null;
if(o&&o.COLUMNS&&$U.isArray(o.COLUMNS)&&o.DATA&&$U.isArray(o.DATA)&&(o.DATA.length==0||(o.DATA.length>0&&$U.isArray(o.DATA[0])))){
_eb="row";
}else{
if(o&&o.COLUMNS&&$U.isArray(o.COLUMNS)&&o.ROWCOUNT&&$U.isInteger(o.ROWCOUNT)&&o.DATA){
_eb="col";
for(var i=0;i<o.COLUMNS.length;i++){
var _ed=o.DATA[o.COLUMNS[i]];
if(!_ed||!$U.isArray(_ed)){
_eb=null;
break;
}
}
}
}
return _eb;
};
$X.JSON=new function(){
var _ee={}.hasOwnProperty?true:false;
var _ef=/^("(\\.|[^"\\\n\r])*?"|[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t])+?$/;
var pad=function(n){
return n<10?"0"+n:n;
};
var m={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r","\"":"\\\"","\\":"\\\\"};
var _f3=function(s){
if(/["\\\x00-\x1f]/.test(s)){
return "\""+s.replace(/([\x00-\x1f\\"])/g,function(a,b){
var c=m[b];
if(c){
return c;
}
c=b.charCodeAt();
return "\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16);
})+"\"";
}
return "\""+s+"\"";
};
var _f8=function(o){
var a=["["],b,i,l=o.length,v;
for(i=0;i<l;i+=1){
v=o[i];
switch(typeof v){
case "undefined":
case "function":
case "unknown":
break;
default:
if(b){
a.push(",");
}
a.push(v===null?"null":$X.JSON.encode(v));
b=true;
}
}
a.push("]");
return a.join("");
};
var _fb=function(o){
return "\""+o.getFullYear()+"-"+pad(o.getMonth()+1)+"-"+pad(o.getDate())+"T"+pad(o.getHours())+":"+pad(o.getMinutes())+":"+pad(o.getSeconds())+"\"";
};
this.encode=function(o){
return this.encodeInternal(o,false);
};
this.encodeInternal=function(o,cfc){
if(typeof o=="undefined"||o===null){
return "null";
}else{
if(o instanceof Array){
return _f8(o);
}else{
if(o instanceof Date){
if(cfc){
return this.encodeInternal({_date_:o.getTime()},cfc);
}
return _fb(o);
}else{
if(typeof o=="string"){
return _f3(o);
}else{
if(typeof o=="number"){
return isFinite(o)?String(o):"null";
}else{
if(typeof o=="boolean"){
return String(o);
}else{
if(cfc&&typeof o=="object"&&typeof o._metadata!=="undefined"){
return "{\"_metadata\":"+this.encodeInternal(o._metadata,false)+",\"_variables\":"+this.encodeInternal(o._variables,cfc)+"}";
}else{
var a=["{"],b,i,v;
for(var i in o){
if(!_ee||o.hasOwnProperty(i)){
v=o[i];
switch(typeof v){
case "undefined":
case "function":
case "unknown":
break;
default:
if(b){
a.push(",");
}
a.push(this.encodeInternal(i,cfc),":",v===null?"null":this.encodeInternal(v,cfc));
b=true;
}
}
}
a.push("}");
return a.join("");
}
}
}
}
}
}
}
};
this.decode=function(json){
if(typeof json=="object"){
return json;
}
if($U.isWhitespace(json)){
return null;
}
var _103=$U.getFirstNonWhitespaceIndex(json);
if(_103>0){
json=json.slice(_103);
}
if(window._cf_jsonprefix&&json.indexOf(_cf_jsonprefix)==0){
json=json.slice(_cf_jsonprefix.length);
}
try{
if(_ef.test(json)){
return eval("("+json+")");
}
}
catch(e){
}
throw new SyntaxError("parseJSON");
};
}();
if(!$C.JSON){
$C.JSON={};
}
$C.JSON.encode=$X.JSON.encode;
$C.JSON.encodeInternal=$X.JSON.encodeInternal;
$C.JSON.decode=$X.JSON.decode;
$C.navigate=function(url,_105,_106,_107,_108,_109){
if(url==null){
$C.handleError(_107,"navigate.urlrequired","widget");
return;
}
if(_108){
_108=_108.toUpperCase();
if(_108!="GET"&&_108!="POST"){
$C.handleError(null,"navigate.invalidhttpmethod","http",[_108],null,null,true);
}
}else{
_108="GET";
}
var _10a;
if(_109){
_10a=$C.getFormQueryString(_109);
if(_10a==-1){
$C.handleError(null,"navigate.formnotfound","http",[_109],null,null,true);
}
}
if(_105==null){
if(_10a){
if(url.indexOf("?")==-1){
url+="?"+_10a;
}else{
url+="&"+_10a;
}
}
$L.info("navigate.towindow","widget",[url]);
window.location.replace(url);
return;
}
$L.info("navigate.tocontainer","widget",[url,_105]);
var obj=$C.objectCache[_105];
if(obj!=null){
if(typeof (obj._cf_body)!="undefined"&&obj._cf_body!=null){
_105=obj._cf_body;
}
}
$A.replaceHTML(_105,url,_108,_10a,_106,_107);
};
$A.checkForm=function(_10c,_10d,_10e,_10f,_110){
var _111=_10d.call(null,_10c);
if(_111==false){
return false;
}
var _112=$C.getFormQueryString(_10c);
$L.info("ajax.submitform.submitting","http",[_10c.name]);
$A.replaceHTML(_10e,_10c.action,_10c.method,_112,_10f,_110);
return false;
};
$A.replaceHTML=function(_113,url,_115,_116,_117,_118){
var _119=document.getElementById(_113);
if(!_119){
$C.handleError(_118,"ajax.replacehtml.elnotfound","http",[_113]);
return;
}
var _11a="_cf_containerId="+encodeURIComponent(_113);
_116=(_116)?_116+"&"+_11a:_11a;
$L.info("ajax.replacehtml.replacing","http",[_113,url,_116]);
if(_cf_loadingtexthtml){
try{
_119.innerHTML=_cf_loadingtexthtml;
}
catch(e){
}
}
var _11b=function(req,_11d){
var _11e=false;
if($A.isRequestError(req)){
$C.handleError(_118,"ajax.replacehtml.error","http",[req.status,_11d.id,req.statusText],req.status,req.statusText);
_11e=true;
}
var _11f=new $E.CustomEvent("onReplaceHTML",_11d);
var _120=new $E.CustomEvent("onReplaceHTMLUser",_11d);
$E.loadEvents[_11d.id]={system:_11f,user:_120};
if(req.responseText.search(/<script/i)!=-1){
try{
_11d.innerHTML="";
}
catch(e){
}
$A.replaceHTML.processResponseText(req.responseText,_11d,_118);
}else{
try{
_11d.innerHTML=req.responseText;
$A.updateLayouttab(_11d);
}
catch(e){
}
}
$E.loadEvents[_11d.id]=null;
_11f.fire();
_11f.unsubscribe();
_120.fire();
_120.unsubscribe();
$L.info("ajax.replacehtml.success","http",[_11d.id]);
if(_117&&!_11e){
_117();
}
};
try{
$A.sendMessage(url,_115,_116,true,_11b,_119);
}
catch(e){
try{
_119.innerHTML=$L.format(CFMessage["ajax.replacehtml.connectionerrordisplay"],[url,e]);
}
catch(e){
}
$C.handleError(_118,"ajax.replacehtml.connectionerror","http",[_113,url,e]);
}
};
$A.replaceHTML.processResponseText=function(text,_122,_123){
var pos=0;
var _125=0;
var _126=0;
_122._cf_innerHTML="";
while(pos<text.length){
var _127=text.indexOf("<s",pos);
if(_127==-1){
_127=text.indexOf("<S",pos);
}
if(_127==-1){
break;
}
pos=_127;
var _128=true;
var _129=$A.replaceHTML.processResponseText.scriptTagChars;
for(var i=1;i<_129.length;i++){
var _12b=pos+i+1;
if(_12b>text.length){
break;
}
var _12c=text.charAt(_12b);
if(_129[i][0]!=_12c&&_129[i][1]!=_12c){
pos+=i+1;
_128=false;
break;
}
}
if(!_128){
continue;
}
var _12d=text.substring(_125,pos);
if(_12d){
_122._cf_innerHTML+=_12d;
}
var _12e=text.indexOf(">",pos)+1;
if(_12e==0){
pos++;
continue;
}else{
pos+=7;
}
var _12f=_12e;
while(_12f<text.length&&_12f!=-1){
_12f=text.indexOf("</s",_12f);
if(_12f==-1){
_12f=text.indexOf("</S",_12f);
}
if(_12f!=-1){
_128=true;
for(var i=1;i<_129.length;i++){
var _12b=_12f+2+i;
if(_12b>text.length){
break;
}
var _12c=text.charAt(_12b);
if(_129[i][0]!=_12c&&_129[i][1]!=_12c){
_12f=_12b;
_128=false;
break;
}
}
if(_128){
break;
}
}
}
if(_12f!=-1){
var _130=text.substring(_12e,_12f);
var _131=_130.indexOf("<!--");
if(_131!=-1){
_130=_130.substring(_131+4);
}
var _132=_130.lastIndexOf("//-->");
if(_132!=-1){
_130=_130.substring(0,_132-1);
}
if(_130.indexOf("document.write")!=-1||_130.indexOf("CF_RunContent")!=-1){
if(_130.indexOf("CF_RunContent")!=-1){
_130=_130.replace("CF_RunContent","document.write");
}
_130="var _cfDomNode = document.getElementById('"+_122.id+"'); var _cfBuffer='';"+"if (!document._cf_write)"+"{document._cf_write = document.write;"+"document.write = function(str){if (_cfBuffer!=null){_cfBuffer+=str;}else{document._cf_write(str);}};};"+_130+";_cfDomNode._cf_innerHTML += _cfBuffer; _cfBuffer=null;";
}
try{
eval(_130);
}
catch(ex){
$C.handleError(_123,"ajax.replacehtml.jserror","http",[_122.id,ex]);
}
}
_127=text.indexOf(">",_12f)+1;
if(_127==0){
_126=_12f+1;
break;
}
_126=_127;
pos=_127;
_125=_127;
}
if(_126<text.length-1){
var _12d=text.substring(_126,text.length);
if(_12d){
_122._cf_innerHTML+=_12d;
}
}
try{
_122.innerHTML=_122._cf_innerHTML;
$A.updateLayouttab(_122);
}
catch(e){
}
_122._cf_innerHTML="";
};
$A.updateLayouttab=function(_133){
var _134=_133.id;
if(_134.length>13&&_134.indexOf("cf_layoutarea")==0){
var s=_134.substr(13,_134.length);
var cmp=Ext.getCmp(s);
var _137=_133.innerHTML;
var _138=document.getElementById(_134);
var html=_138.innerHTML;
_138.innerHTML="";
if(cmp){
cmp.update("<div id="+_133.id+">"+html+"</div>");
}
var _138=document.getElementById(_134);
if(_138){
}
}
};
$A.replaceHTML.processResponseText.scriptTagChars=[["s","S"],["c","C"],["r","R"],["i","I"],["p","P"],["t","T"]];
$D.getElement=function(_13a,_13b){
var _13c=function(_13d){
return (_13d.name==_13a||_13d.id==_13a);
};
var _13e=$D.getElementsBy(_13c,null,_13b);
if(_13e.length==1){
return _13e[0];
}else{
return _13e;
}
};
$D.getElementsBy=function(_13f,tag,root){
tag=tag||"*";
var _142=[];
if(root){
root=$D.get(root);
if(!root){
return _142;
}
}else{
root=document;
}
var _143=root.getElementsByTagName(tag);
if(!_143.length&&(tag=="*"&&root.all)){
_143=root.all;
}
for(var i=0,len=_143.length;i<len;++i){
if(_13f(_143[i])){
_142[_142.length]=_143[i];
}
}
return _142;
};
$D.get=function(el){
if(!el){
return null;
}
if(typeof el!="string"&&!(el instanceof Array)){
return el;
}
if(typeof el=="string"){
return document.getElementById(el);
}else{
var _146=[];
for(var i=0,len=el.length;i<len;++i){
_146[_146.length]=$D.get(el[i]);
}
return _146;
}
return null;
};
$E.loadEvents={};
$E.CustomEvent=function(_148,_149){
return {name:_148,domNode:_149,subs:[],subscribe:function(func,_14b){
var dup=false;
for(var i=0;i<this.subs.length;i++){
var sub=this.subs[i];
if(sub.f==func&&sub.p==_14b){
dup=true;
break;
}
}
if(!dup){
this.subs.push({f:func,p:_14b});
}
},fire:function(){
for(var i=0;i<this.subs.length;i++){
var sub=this.subs[i];
sub.f.call(null,this,sub.p);
}
},unsubscribe:function(){
this.subscribers=[];
}};
};
$E.windowLoadImpEvent=new $E.CustomEvent("cfWindowLoadImp");
$E.windowLoadEvent=new $E.CustomEvent("cfWindowLoad");
$E.windowLoadUserEvent=new $E.CustomEvent("cfWindowLoadUser");
$E.listeners=[];
$E.addListener=function(el,ev,fn,_154){
var l={el:el,ev:ev,fn:fn,params:_154};
$E.listeners.push(l);
var _156=function(e){
if(!e){
var e=window.event;
}
fn.call(null,e,_154);
};
if(el.addEventListener){
el.addEventListener(ev,_156,false);
return true;
}else{
if(el.attachEvent){
el.attachEvent("on"+ev,_156);
return true;
}else{
return false;
}
}
};
$E.isListener=function(el,ev,fn,_15b){
var _15c=false;
var ls=$E.listeners;
for(var i=0;i<ls.length;i++){
if(ls[i].el==el&&ls[i].ev==ev&&ls[i].fn==fn&&ls[i].params==_15b){
_15c=true;
break;
}
}
return _15c;
};
$E.callBindHandlers=function(id,_160,ev){
var el=document.getElementById(id);
if(!el){
return;
}
var ls=$E.listeners;
for(var i=0;i<ls.length;i++){
if(ls[i].el==el&&ls[i].ev==ev&&ls[i].fn._cf_bindhandler){
ls[i].fn.call(null,null,ls[i].params);
}
}
};
$E.registerOnLoad=function(func,_166,_167,user){
if($E.registerOnLoad.windowLoaded){
if(_166&&_166._cf_containerId&&$E.loadEvents[_166._cf_containerId]){
if(user){
$E.loadEvents[_166._cf_containerId].user.subscribe(func,_166);
}else{
$E.loadEvents[_166._cf_containerId].system.subscribe(func,_166);
}
}else{
func.call(null,null,_166);
}
}else{
if(user){
$E.windowLoadUserEvent.subscribe(func,_166);
}else{
if(_167){
$E.windowLoadImpEvent.subscribe(func,_166);
}else{
$E.windowLoadEvent.subscribe(func,_166);
}
}
}
};
$E.registerOnLoad.windowLoaded=false;
$E.onWindowLoad=function(fn){
if(window.addEventListener){
window.addEventListener("load",fn,false);
}else{
if(window.attachEvent){
window.attachEvent("onload",fn);
}else{
if(document.getElementById){
window.onload=fn;
}
}
}
};
$C.addSpanToDom=function(){
var _16a=document.createElement("span");
document.body.insertBefore(_16a,document.body.firstChild);
};
$E.windowLoadHandler=function(e){
if(window.Ext){
Ext.BLANK_IMAGE_URL=_cf_ajaxscriptsrc+"/resources/ext/images/default/s.gif";
}
$C.addSpanToDom();
$L.init();
$E.registerOnLoad.windowLoaded=true;
$E.windowLoadImpEvent.fire();
$E.windowLoadImpEvent.unsubscribe();
$E.windowLoadEvent.fire();
$E.windowLoadEvent.unsubscribe();
if(window.Ext){
Ext.onReady(function(){
$E.windowLoadUserEvent.fire();
});
}else{
$E.windowLoadUserEvent.fire();
}
$E.windowLoadUserEvent.unsubscribe();
};
$E.onWindowLoad($E.windowLoadHandler);
$B.register=function(_16c,_16d,_16e,_16f){
for(var i=0;i<_16c.length;i++){
var _171=_16c[i][0];
var _172=_16c[i][1];
var _173=_16c[i][2];
if(window[_171]){
var _174=eval(_171);
if(_174&&_174._cf_register){
_174._cf_register(_173,_16e,_16d);
continue;
}
}
var _175=$C.objectCache[_171];
if(_175&&_175._cf_register){
_175._cf_register(_173,_16e,_16d);
continue;
}
var _176=$D.getElement(_171,_172);
var _177=(_176&&((!_176.length&&_176.length!=0)||(_176.length&&_176.length>0)||_176.tagName=="SELECT"));
if(!_177){
$C.handleError(null,"bind.register.elnotfound","bind",[_171]);
}
if(_176.length>1&&!_176.options){
for(var j=0;j<_176.length;j++){
$B.register.addListener(_176[j],_173,_16e,_16d);
}
}else{
$B.register.addListener(_176,_173,_16e,_16d);
}
}
if(!$C.bindHandlerCache[_16d.bindTo]&&typeof (_16d.bindTo)=="string"){
$C.bindHandlerCache[_16d.bindTo]=function(){
_16e.call(null,null,_16d);
};
}
if(_16f){
_16e.call(null,null,_16d);
}
};
$B.register.addListener=function(_179,_17a,_17b,_17c){
if(!$E.isListener(_179,_17a,_17b,_17c)){
$E.addListener(_179,_17a,_17b,_17c);
}
};
$B.assignValue=function(_17d,_17e,_17f,_180){
if(!_17d){
return;
}
if(_17d.call){
_17d.call(null,_17f,_180);
return;
}
var _181=$C.objectCache[_17d];
if(_181&&_181._cf_setValue){
_181._cf_setValue(_17f);
return;
}
var _182=document.getElementById(_17d);
if(!_182){
$C.handleError(null,"bind.assignvalue.elnotfound","bind",[_17d]);
}
if(_182.tagName=="SELECT"){
var _183=$U.checkQuery(_17f);
var _184=$C.objectCache[_17d];
if(_183){
if(!_184||(_184&&(!_184.valueCol||!_184.displayCol))){
$C.handleError(null,"bind.assignvalue.selboxmissingvaldisplay","bind",[_17d]);
return;
}
}else{
if(typeof (_17f.length)=="number"&&!_17f.toUpperCase){
if(_17f.length>0&&(typeof (_17f[0].length)!="number"||_17f[0].toUpperCase)){
$C.handleError(null,"bind.assignvalue.selboxerror","bind",[_17d]);
return;
}
}else{
$C.handleError(null,"bind.assignvalue.selboxerror","bind",[_17d]);
return;
}
}
_182.options.length=0;
var _185;
var _186=false;
if(_184){
_185=_184.selected;
if(_185&&_185.length>0){
_186=true;
}
}
if(!_183){
for(var i=0;i<_17f.length;i++){
var opt=new Option(_17f[i][1],_17f[i][0]);
_182.options[i]=opt;
if(_186){
for(var j=0;j<_185.length;j++){
if(_185[j]==opt.value){
opt.selected=true;
}
}
}
}
}else{
if(_183=="col"){
var _18a=_17f.DATA[_184.valueCol];
var _18b=_17f.DATA[_184.displayCol];
if(!_18a||!_18b){
$C.handleError(null,"bind.assignvalue.selboxinvalidvaldisplay","bind",[_17d]);
return;
}
for(var i=0;i<_18a.length;i++){
var opt=new Option(_18b[i],_18a[i]);
_182.options[i]=opt;
if(_186){
for(var j=0;j<_185.length;j++){
if(_185[j]==opt.value){
opt.selected=true;
}
}
}
}
}else{
if(_183=="row"){
var _18c=-1;
var _18d=-1;
for(var i=0;i<_17f.COLUMNS.length;i++){
var col=_17f.COLUMNS[i];
if(col==_184.valueCol){
_18c=i;
}
if(col==_184.displayCol){
_18d=i;
}
if(_18c!=-1&&_18d!=-1){
break;
}
}
if(_18c==-1||_18d==-1){
$C.handleError(null,"bind.assignvalue.selboxinvalidvaldisplay","bind",[_17d]);
return;
}
for(var i=0;i<_17f.DATA.length;i++){
var opt=new Option(_17f.DATA[i][_18d],_17f.DATA[i][_18c]);
_182.options[i]=opt;
if(_186){
for(var j=0;j<_185.length;j++){
if(_185[j]==opt.value){
opt.selected=true;
}
}
}
}
}
}
}
}else{
_182[_17e]=_17f;
}
$E.callBindHandlers(_17d,null,"change");
$L.info("bind.assignvalue.success","bind",[_17f,_17d,_17e]);
};
$B.localBindHandler=function(e,_190){
var _191=document.getElementById(_190.bindTo);
var _192=$B.evaluateBindTemplate(_190,true);
$B.assignValue(_190.bindTo,_190.bindToAttr,_192);
};
$B.localBindHandler._cf_bindhandler=true;
$B.evaluateBindTemplate=function(_193,_194,_195,_196,_197){
var _198=_193.bindExpr;
var _199="";
if(typeof _197=="undefined"){
_197=false;
}
for(var i=0;i<_198.length;i++){
if(typeof (_198[i])=="object"){
var _19b=null;
if(!_198[i].length||typeof _198[i][0]=="object"){
_19b=$X.JSON.encode(_198[i]);
}else{
var _19b=$B.getBindElementValue(_198[i][0],_198[i][1],_198[i][2],_194,_196);
if(_19b==null){
if(_194){
_199="";
break;
}else{
_19b="";
}
}
}
if(_195){
_19b=encodeURIComponent(_19b);
}
_199+=_19b;
}else{
var _19c=_198[i];
if(_197==true&&i>0){
if(typeof (_19c)=="string"&&_19c.indexOf("&")!=0){
_19c=encodeURIComponent(_19c);
}
}
_199+=_19c;
}
}
return _199;
};
$B.jsBindHandler=function(e,_19e){
var _19f=_19e.bindExpr;
var _1a0=new Array();
var _1a1=_19e.callFunction+"(";
for(var i=0;i<_19f.length;i++){
var _1a3;
if(typeof (_19f[i])=="object"){
if(_19f[i].length){
if(typeof _19f[i][0]=="object"){
_1a3=_19f[i];
}else{
_1a3=$B.getBindElementValue(_19f[i][0],_19f[i][1],_19f[i][2],false);
}
}else{
_1a3=_19f[i];
}
}else{
_1a3=_19f[i];
}
if(i!=0){
_1a1+=",";
}
_1a0[i]=_1a3;
_1a1+="'"+_1a3+"'";
}
_1a1+=")";
var _1a4=_19e.callFunction.apply(null,_1a0);
$B.assignValue(_19e.bindTo,_19e.bindToAttr,_1a4,_19e.bindToParams);
};
$B.jsBindHandler._cf_bindhandler=true;
$B.urlBindHandler=function(e,_1a6){
var _1a7=_1a6.bindTo;
if($C.objectCache[_1a7]&&$C.objectCache[_1a7]._cf_visible===false){
$C.objectCache[_1a7]._cf_dirtyview=true;
return;
}
var url=$B.evaluateBindTemplate(_1a6,false,true,false,true);
var _1a9=$U.extractReturnFormat(url);
if(_1a9==null||typeof _1a9=="undefined"){
_1a9="JSON";
}
if(_1a6.bindToAttr||typeof _1a6.bindTo=="undefined"||typeof _1a6.bindTo=="function"){
var _1a6={"bindTo":_1a6.bindTo,"bindToAttr":_1a6.bindToAttr,"bindToParams":_1a6.bindToParams,"errorHandler":_1a6.errorHandler,"url":url,returnFormat:_1a9};
try{
$A.sendMessage(url,"GET",null,true,$B.urlBindHandler.callback,_1a6);
}
catch(e){
$C.handleError(_1a6.errorHandler,"ajax.urlbindhandler.connectionerror","http",[url,e]);
}
}else{
$A.replaceHTML(_1a7,url,null,null,_1a6.callback,_1a6.errorHandler);
}
};
$B.urlBindHandler._cf_bindhandler=true;
$B.urlBindHandler.callback=function(req,_1ab){
if($A.isRequestError(req)){
$C.handleError(_1ab.errorHandler,"bind.urlbindhandler.httperror","http",[req.status,_1ab.url,req.statusText],req.status,req.statusText);
}else{
$L.info("bind.urlbindhandler.response","http",[req.responseText]);
var _1ac;
try{
if(_1ab.returnFormat==null||_1ab.returnFormat==="JSON"){
_1ac=$X.JSON.decode(req.responseText);
}else{
_1ac=req.responseText;
}
}
catch(e){
if(req.responseText!=null&&typeof req.responseText=="string"){
_1ac=req.responseText;
}else{
$C.handleError(_1ab.errorHandler,"bind.urlbindhandler.jsonerror","http",[req.responseText]);
}
}
$B.assignValue(_1ab.bindTo,_1ab.bindToAttr,_1ac,_1ab.bindToParams);
}
};
$A.initSelect=function(_1ad,_1ae,_1af,_1b0){
$C.objectCache[_1ad]={"valueCol":_1ae,"displayCol":_1af,selected:_1b0};
};
$S.setupSpry=function(){
if(typeof (Spry)!="undefined"&&Spry.Data){
Spry.Data.DataSet.prototype._cf_getAttribute=function(_1b1){
var val;
var row=this.getCurrentRow();
if(row){
val=row[_1b1];
}
return val;
};
Spry.Data.DataSet.prototype._cf_register=function(_1b4,_1b5,_1b6){
var obs={bindParams:_1b6};
obs.onCurrentRowChanged=function(){
_1b5.call(null,null,this.bindParams);
};
obs.onDataChanged=function(){
_1b5.call(null,null,this.bindParams);
};
this.addObserver(obs);
};
if(Spry.Debug.trace){
var _1b8=Spry.Debug.trace;
Spry.Debug.trace=function(str){
$L.info(str,"spry");
_1b8(str);
};
}
if(Spry.Debug.reportError){
var _1ba=Spry.Debug.reportError;
Spry.Debug.reportError=function(str){
$L.error(str,"spry");
_1ba(str);
};
}
$L.info("spry.setupcomplete","bind");
}
};
$E.registerOnLoad($S.setupSpry,null,true);
$S.bindHandler=function(_1bc,_1bd){
var url;
var _1bf="_cf_nodebug=true&_cf_nocache=true";
if(window._cf_clientid){
_1bf+="&_cf_clientid="+_cf_clientid;
}
var _1c0=window[_1bd.bindTo];
var _1c1=(typeof (_1c0)=="undefined");
if(_1bd.cfc){
var _1c2={};
var _1c3=_1bd.bindExpr;
for(var i=0;i<_1c3.length;i++){
var _1c5;
if(_1c3[i].length==2){
_1c5=_1c3[i][1];
}else{
_1c5=$B.getBindElementValue(_1c3[i][1],_1c3[i][2],_1c3[i][3],false,_1c1);
}
_1c2[_1c3[i][0]]=_1c5;
}
_1c2=$X.JSON.encode(_1c2);
_1bf+="&method="+_1bd.cfcFunction;
_1bf+="&argumentCollection="+encodeURIComponent(_1c2);
$L.info("spry.bindhandler.loadingcfc","http",[_1bd.bindTo,_1bd.cfc,_1bd.cfcFunction,_1c2]);
url=_1bd.cfc;
}else{
url=$B.evaluateBindTemplate(_1bd,false,true,_1c1);
$L.info("spry.bindhandler.loadingurl","http",[_1bd.bindTo,url]);
}
var _1c6=_1bd.options||{};
if((_1c0&&_1c0._cf_type=="json")||_1bd.dsType=="json"){
_1bf+="&returnformat=json";
}
if(_1c0){
if(_1c0.requestInfo.method=="GET"){
_1c6.method="GET";
if(url.indexOf("?")==-1){
url+="?"+_1bf;
}else{
url+="&"+_1bf;
}
}else{
_1c6.postData=_1bf;
_1c6.method="POST";
_1c0.setURL("");
}
_1c0.setURL(url,_1c6);
_1c0.loadData();
}else{
if(!_1c6.method||_1c6.method=="GET"){
if(url.indexOf("?")==-1){
url+="?"+_1bf;
}else{
url+="&"+_1bf;
}
}else{
_1c6.postData=_1bf;
_1c6.useCache=false;
}
var ds;
if(_1bd.dsType=="xml"){
ds=new Spry.Data.XMLDataSet(url,_1bd.xpath,_1c6);
}else{
ds=new Spry.Data.JSONDataSet(url,_1c6);
ds.preparseFunc=$S.preparseData;
}
ds._cf_type=_1bd.dsType;
var _1c8={onLoadError:function(req){
$C.handleError(_1bd.errorHandler,"spry.bindhandler.error","http",[_1bd.bindTo,req.url,req.requestInfo.postData]);
}};
ds.addObserver(_1c8);
window[_1bd.bindTo]=ds;
}
};
$S.bindHandler._cf_bindhandler=true;
$S.preparseData=function(ds,_1cb){
var _1cc=$U.getFirstNonWhitespaceIndex(_1cb);
if(_1cc>0){
_1cb=_1cb.slice(_1cc);
}
if(window._cf_jsonprefix&&_1cb.indexOf(_cf_jsonprefix)==0){
_1cb=_1cb.slice(_cf_jsonprefix.length);
}
return _1cb;
};
$P.init=function(_1cd){
$L.info("pod.init.creating","widget",[_1cd]);
var _1ce={};
_1ce._cf_body=_1cd+"_body";
$C.objectCache[_1cd]=_1ce;
};
$B.cfcBindHandler=function(e,_1d0){
var _1d1=(_1d0.httpMethod)?_1d0.httpMethod:"GET";
var _1d2={};
var _1d3=_1d0.bindExpr;
for(var i=0;i<_1d3.length;i++){
var _1d5;
if(_1d3[i].length==2){
_1d5=_1d3[i][1];
}else{
_1d5=$B.getBindElementValue(_1d3[i][1],_1d3[i][2],_1d3[i][3],false);
}
_1d2[_1d3[i][0]]=_1d5;
}
var _1d6=function(_1d7,_1d8){
$B.assignValue(_1d8.bindTo,_1d8.bindToAttr,_1d7,_1d8.bindToParams);
};
var _1d9={"bindTo":_1d0.bindTo,"bindToAttr":_1d0.bindToAttr,"bindToParams":_1d0.bindToParams};
var _1da={"async":true,"cfcPath":_1d0.cfc,"httpMethod":_1d1,"callbackHandler":_1d6,"errorHandler":_1d0.errorHandler};
if(_1d0.proxyCallHandler){
_1da.callHandler=_1d0.proxyCallHandler;
_1da.callHandlerParams=_1d0;
}
$X.invoke(_1da,_1d0.cfcFunction,_1d0._cf_ajaxproxytoken,_1d2,_1d9);
};
$B.cfcBindHandler._cf_bindhandler=true;
$U.extractReturnFormat=function(url){
var _1dc;
var _1dd=url.toUpperCase();
var _1de=_1dd.indexOf("RETURNFORMAT");
if(_1de>0){
var _1df=_1dd.indexOf("&",_1de+13);
if(_1df<0){
_1df=_1dd.length;
}
_1dc=_1dd.substring(_1de+13,_1df);
}
return _1dc;
};
$U.replaceAll=function(_1e0,_1e1,_1e2){
var _1e3=_1e0.indexOf(_1e1);
while(_1e3>-1){
_1e0=_1e0.replace(_1e1,_1e2);
_1e3=_1e0.indexOf(_1e1);
}
return _1e0;
};
$U.cloneObject=function(obj){
var _1e5={};
for(key in obj){
var _1e6=obj[key];
if(typeof _1e6=="object"){
_1e6=$U.cloneObject(_1e6);
}
_1e5.key=_1e6;
}
return _1e5;
};
$C.clone=function(obj,_1e8){
if(typeof (obj)!="object"){
return obj;
}
if(obj==null){
return obj;
}
var _1e9=new Object();
for(var i in obj){
if(_1e8===true){
_1e9[i]=$C.clone(obj[i]);
}else{
_1e9[i]=obj[i];
}
}
return _1e9;
};
$C.printObject=function(obj){
var str="";
for(key in obj){
str=str+"  "+key+"=";
value=obj[key];
if(typeof (value)=="object"){
value=$C.printObject(value);
}
str+=value;
}
return str;
};
}
}
cfinit();
