// Compiled by ClojureScript 1.9.293 {}
goog.provide('view3d.client');
goog.require('cljs.core');
goog.require('calc.core');
goog.require('cognitect.transit');
goog.require('czm.core');
goog.require('ajax.core');
goog.require('carr.move');
goog.require('view3d.controls');
goog.require('cljs.reader');
goog.require('calc.dynamic');
goog.require('csasync.proc');
goog.require('nightlight.repl_server');
view3d.client.HOST = "http://localhost:";
view3d.client.PORT = (4444);
view3d.client.URL = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"base","base",185279322),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/")].join(''),new cljs.core.Keyword(null,"chart","chart",1173225425),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/chart/")].join(''),new cljs.core.Keyword(null,"directives","directives",-2003276356),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/directives/")].join(''),new cljs.core.Keyword(null,"instructions","instructions",1724333802),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/instructions/")].join(''),new cljs.core.Keyword(null,"command","command",-894540724),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/command/")].join(''),new cljs.core.Keyword(null,"question","question",-1411720117),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/question/")].join(''),new cljs.core.Keyword(null,"answer","answer",-742633163),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/answer/")].join(''),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/manual-data/")].join('')], null);
view3d.client.TIO = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"carrier","carrier",1085800622),(1000),new cljs.core.Keyword(null,"camera","camera",-1190348585),(2222),new cljs.core.Keyword(null,"directives","directives",-2003276356),(911),new cljs.core.Keyword(null,"instructions","instructions",1724333802),(979),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),(200),new cljs.core.Keyword(null,"display","display",242065432),(831),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),(6000),new cljs.core.Keyword(null,"ext-data-popup","ext-data-popup",-108746127),(60000)], null);
view3d.client.CARRIER = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"propeller","propeller",-1462065491),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"step-hrs","step-hrs",-504384679),new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692),new cljs.core.Keyword(null,"altitude","altitude",463588637)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(0),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(3),new cljs.core.Keyword(null,"accel","accel",-2118422974),(1),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1017)], null),"?",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"accel","accel",-2118422974),(1),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(2003)], null),(0),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(4),new cljs.core.Keyword(null,"accel","accel",-2118422974),(1),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(997)], null),(new cljs.core.Keyword(null,"carrier","carrier",1085800622).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO) / (3600000)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(16),(64),(2)], null),(0)]));
view3d.client.CAM_PROC = cljs.core.volatile_BANG_.call(null,"STOP");
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__41107 = response;
var map__41107__$1 = ((((!((map__41107 == null)))?((((map__41107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41107.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41107):map__41107);
var status = cljs.core.get.call(null,map__41107__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__41107__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
view3d.client.num_val = (function view3d$client$num_val(x){
if(typeof x === 'number'){
return x;
} else {
return cljs.reader.read_string.call(null,x);
}
});
view3d.client.read_transit = (function view3d$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
view3d.client.turn_and_bank = (function view3d$client$turn_and_bank(carr__$1,course){
var vec__41112 = new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1));
var rb = cljs.core.nth.call(null,vec__41112,(0),null);
var sa = cljs.core.nth.call(null,vec__41112,(1),null);
var ba = cljs.core.nth.call(null,vec__41112,(2),null);
var fa = cljs.core.nth.call(null,vec__41112,(3),null);
var bps = vec__41112;
var bnk = calc.dynamic.bank.call(null,new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1)),course,bps);
var spd = new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1));
if(((spd < (90))) || (cljs.core._EQ_.call(null,bnk,(0)))){
return carr.move.turn.call(null,carr__$1,course,(1));
} else {
var accel = (((calc.core.abs.call(null,bnk) > rb))?(2):(1));
czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),bnk);

carr.move.turn.call(null,carr__$1,course,accel);

return calc.dynamic.check_diff_and_do.call(null,carr__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"target","target",253001721)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course","course",1455432948)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"step","step",1288888124)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"time-out","time-out",-125288146)], null),((function (accel,vec__41112,rb,sa,ba,fa,bps,bnk,spd){
return (function (){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),(0));
});})(accel,vec__41112,rb,sa,ba,fa,bps,bnk,spd))
);
}
});
view3d.client.onboard = (function view3d$client$onboard(call){
if(cljs.core._EQ_.call(null,call,"manual")){
csasync.proc.stop_process.call(null,view3d.client.CAM_PROC);
} else {
}

return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(view3d.client.URL)),cljs.core.str("onboard?callsign="),cljs.core.str(call)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
});
view3d.client.carrier = (function view3d$client$carrier(callsign,vehicle){
if(cljs.core.not_EQ_.call(null,callsign,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)))){
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"mode","mode",654403691),callsign));
} else {
}

var old_crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER));
var new_crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle);
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),cljs.core.dissoc.call(null,vehicle,new cljs.core.Keyword(null,"course","course",1455432948))));

carr.move.set_turn_point.call(null,view3d.client.CARRIER);

if(cljs.core.not_EQ_.call(null,new_crs,old_crs)){
return view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,new_crs);
} else {
return null;
}
});
view3d.client.view = (function view3d$client$view(dir){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"view","view",1247994814),dir);
});
view3d.client.pitch = (function view3d$client$pitch(deg){
var deg__$1 = view3d.client.num_val.call(null,deg);
if((((-180) <= deg__$1)) && ((deg__$1 <= (180)))){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),deg__$1);
} else {
return null;
}
});
view3d.client.roll = (function view3d$client$roll(deg){
var deg__$1 = view3d.client.num_val.call(null,deg);
if((((-180) <= deg__$1)) && ((deg__$1 <= (180)))){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),deg__$1);
} else {
return null;
}
});
view3d.client.course = (function view3d$client$course(crs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
var crs__$1 = view3d.client.num_val.call(null,crs);
if((((0) <= crs__$1)) && ((crs__$1 <= (360)))){
return view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,crs__$1);
} else {
return null;
}
} else {
return null;
}
});
view3d.client.speed = (function view3d$client$speed(spd){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
return carr.move.accel.call(null,view3d.client.CARRIER,view3d.client.num_val.call(null,spd));
} else {
return null;
}
});
view3d.client.altitude = (function view3d$client$altitude(alt){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
return carr.move.elevate.call(null,view3d.client.CARRIER,view3d.client.num_val.call(null,alt));
} else {
return null;
}
});
view3d.client.accel_speed = (function view3d$client$accel_speed(accel){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
return cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"propeller","propeller",-1462065491),new cljs.core.Keyword(null,"accel","accel",-2118422974)], null),accel));
} else {
return null;
}
});
view3d.client.accel_altitude = (function view3d$client$accel_altitude(accel){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
return cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"accel","accel",-2118422974)], null),accel));
} else {
return null;
}
});
view3d.client.latitude = (function view3d$client$latitude(lat){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
var car = cljs.core.deref.call(null,view3d.client.CARRIER);
var lat__$1 = view3d.client.num_val.call(null,lat);
var vec__41118 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var _ = cljs.core.nth.call(null,vec__41118,(0),null);
var lon = cljs.core.nth.call(null,vec__41118,(1),null);
return carr.move.set_turn_point.call(null,view3d.client.CARRIER,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat__$1,lon], null),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(car));
} else {
return null;
}
});
view3d.client.longitude = (function view3d$client$longitude(lon){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
var car = cljs.core.deref.call(null,view3d.client.CARRIER);
var lon__$1 = view3d.client.num_val.call(null,lon);
var vec__41124 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var lat = cljs.core.nth.call(null,vec__41124,(0),null);
var _ = cljs.core.nth.call(null,vec__41124,(1),null);
return carr.move.set_turn_point.call(null,view3d.client.CARRIER,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon__$1], null),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(car));
} else {
return null;
}
});
view3d.client.camera_move = (function view3d$client$camera_move(var_args){
var args41127 = [];
var len__36245__auto___41133 = arguments.length;
var i__36246__auto___41134 = (0);
while(true){
if((i__36246__auto___41134 < len__36245__auto___41133)){
args41127.push((arguments[i__36246__auto___41134]));

var G__41135 = (i__36246__auto___41134 + (1));
i__36246__auto___41134 = G__41135;
continue;
} else {
}
break;
}

var G__41129 = args41127.length;
switch (G__41129) {
case 1:
return view3d.client.camera_move.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return view3d.client.camera_move.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41127.length)].join('')));

}
});

view3d.client.camera_move.cljs$core$IFn$_invoke$arity$1 = (function (carr__$1){
return view3d.client.camera_move.call(null,carr__$1,(new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO) / (1000)));
});

view3d.client.camera_move.cljs$core$IFn$_invoke$arity$2 = (function (carr__$1,period){
var car_41137 = cljs.core.deref.call(null,carr__$1);
var vec__41130_41138 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car_41137);
var lat_41139 = cljs.core.nth.call(null,vec__41130_41138,(0),null);
var lon_41140 = cljs.core.nth.call(null,vec__41130_41138,(1),null);
var crs_41141 = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car_41137);
var alt_41142 = ((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(car_41137) / 3.28084) | (0));
var alt_41143__$1 = (((alt_41142 < (20)))?(20):alt_41142);
czm.core.fly_to.call(null,lat_41139,lon_41140,alt_41143__$1,crs_41141,period);

return true;
});

view3d.client.camera_move.cljs$lang$maxFixedArity = 2;

view3d.client.manual_vehicle = (function view3d$client$manual_vehicle(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-lat")),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-lon"))], null),new cljs.core.Keyword(null,"course","course",1455432948),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-crs")),new cljs.core.Keyword(null,"speed","speed",1257663751),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-spd")),new cljs.core.Keyword(null,"altitude","altitude",463588637),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-alt"))], null);
});
view3d.client.directives_handler = (function view3d$client$directives_handler(response){
var seq__41170 = cljs.core.seq.call(null,view3d.client.read_transit.call(null,response));
var chunk__41171 = null;
var count__41172 = (0);
var i__41173 = (0);
while(true){
if((i__41173 < count__41172)){
var map__41174 = cljs.core._nth.call(null,chunk__41171,i__41173);
var map__41174__$1 = ((((!((map__41174 == null)))?((((map__41174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41174.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41174):map__41174);
var dir = map__41174__$1;
var directive = cljs.core.get.call(null,map__41174__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__41176_41196 = cljs.core._EQ_;
var expr__41177_41197 = directive;
if(cljs.core.truth_(pred__41176_41196.call(null,new cljs.core.Keyword(null,"manual","manual",-237370608),expr__41177_41197))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"?")){
view3d.client.carrier.call(null,"MANUAL",view3d.client.manual_vehicle.call(null));
} else {
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"mode","mode",654403691),"MANUAL"));
}

csasync.proc.start_process.call(null,view3d.client.CAM_PROC,((function (seq__41170,chunk__41171,count__41172,i__41173,pred__41176_41196,expr__41177_41197,map__41174,map__41174__$1,dir,directive){
return (function (){
return view3d.client.camera_move.call(null,view3d.client.CARRIER);
});})(seq__41170,chunk__41171,count__41172,i__41173,pred__41176_41196,expr__41177_41197,map__41174,map__41174__$1,dir,directive))
,new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));
} else {
if(cljs.core.truth_(pred__41176_41196.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__41177_41197))){
var map__41179_41198 = dir;
var map__41179_41199__$1 = ((((!((map__41179_41198 == null)))?((((map__41179_41198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41179_41198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41179_41198):map__41179_41198);
var list_41200 = cljs.core.get.call(null,map__41179_41199__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,cljs.core.conj.call(null,list_41200,"manual"));
} else {
if(cljs.core.truth_(pred__41176_41196.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__41177_41197))){
var map__41181_41201 = dir;
var map__41181_41202__$1 = ((((!((map__41181_41201 == null)))?((((map__41181_41201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41181_41201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41181_41201):map__41181_41201);
var callsign_41203 = cljs.core.get.call(null,map__41181_41202__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_41204 = cljs.core.get.call(null,map__41181_41202__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
csasync.proc.stop_process.call(null,view3d.client.CAM_PROC);

view3d.client.carrier.call(null,callsign_41203,vehicle_41204);

view3d.client.camera_move.call(null,view3d.client.CARRIER);
} else {
if(cljs.core.truth_(pred__41176_41196.call(null,new cljs.core.Keyword(null,"fly-onboard","fly-onboard",69825475),expr__41177_41197))){
var map__41183_41205 = dir;
var map__41183_41206__$1 = ((((!((map__41183_41205 == null)))?((((map__41183_41205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41183_41205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41183_41205):map__41183_41205);
var callsign_41207 = cljs.core.get.call(null,map__41183_41206__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_41208 = cljs.core.get.call(null,map__41183_41206__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var period_41209 = cljs.core.get.call(null,map__41183_41206__$1,new cljs.core.Keyword(null,"period","period",-352129191));
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL"))){
view3d.client.carrier.call(null,callsign_41207,vehicle_41208);

view3d.client.camera_move.call(null,view3d.client.CARRIER,period_41209);
} else {
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}

var G__41210 = seq__41170;
var G__41211 = chunk__41171;
var G__41212 = count__41172;
var G__41213 = (i__41173 + (1));
seq__41170 = G__41210;
chunk__41171 = G__41211;
count__41172 = G__41212;
i__41173 = G__41213;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41170);
if(temp__4657__auto__){
var seq__41170__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41170__$1)){
var c__35951__auto__ = cljs.core.chunk_first.call(null,seq__41170__$1);
var G__41214 = cljs.core.chunk_rest.call(null,seq__41170__$1);
var G__41215 = c__35951__auto__;
var G__41216 = cljs.core.count.call(null,c__35951__auto__);
var G__41217 = (0);
seq__41170 = G__41214;
chunk__41171 = G__41215;
count__41172 = G__41216;
i__41173 = G__41217;
continue;
} else {
var map__41185 = cljs.core.first.call(null,seq__41170__$1);
var map__41185__$1 = ((((!((map__41185 == null)))?((((map__41185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41185.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41185):map__41185);
var dir = map__41185__$1;
var directive = cljs.core.get.call(null,map__41185__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__41187_41218 = cljs.core._EQ_;
var expr__41188_41219 = directive;
if(cljs.core.truth_(pred__41187_41218.call(null,new cljs.core.Keyword(null,"manual","manual",-237370608),expr__41188_41219))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"?")){
view3d.client.carrier.call(null,"MANUAL",view3d.client.manual_vehicle.call(null));
} else {
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"mode","mode",654403691),"MANUAL"));
}

csasync.proc.start_process.call(null,view3d.client.CAM_PROC,((function (seq__41170,chunk__41171,count__41172,i__41173,pred__41187_41218,expr__41188_41219,map__41185,map__41185__$1,dir,directive,seq__41170__$1,temp__4657__auto__){
return (function (){
return view3d.client.camera_move.call(null,view3d.client.CARRIER);
});})(seq__41170,chunk__41171,count__41172,i__41173,pred__41187_41218,expr__41188_41219,map__41185,map__41185__$1,dir,directive,seq__41170__$1,temp__4657__auto__))
,new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));
} else {
if(cljs.core.truth_(pred__41187_41218.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__41188_41219))){
var map__41190_41220 = dir;
var map__41190_41221__$1 = ((((!((map__41190_41220 == null)))?((((map__41190_41220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41190_41220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41190_41220):map__41190_41220);
var list_41222 = cljs.core.get.call(null,map__41190_41221__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,cljs.core.conj.call(null,list_41222,"manual"));
} else {
if(cljs.core.truth_(pred__41187_41218.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__41188_41219))){
var map__41192_41223 = dir;
var map__41192_41224__$1 = ((((!((map__41192_41223 == null)))?((((map__41192_41223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41192_41223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41192_41223):map__41192_41223);
var callsign_41225 = cljs.core.get.call(null,map__41192_41224__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_41226 = cljs.core.get.call(null,map__41192_41224__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
csasync.proc.stop_process.call(null,view3d.client.CAM_PROC);

view3d.client.carrier.call(null,callsign_41225,vehicle_41226);

view3d.client.camera_move.call(null,view3d.client.CARRIER);
} else {
if(cljs.core.truth_(pred__41187_41218.call(null,new cljs.core.Keyword(null,"fly-onboard","fly-onboard",69825475),expr__41188_41219))){
var map__41194_41227 = dir;
var map__41194_41228__$1 = ((((!((map__41194_41227 == null)))?((((map__41194_41227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41194_41227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41194_41227):map__41194_41227);
var callsign_41229 = cljs.core.get.call(null,map__41194_41228__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_41230 = cljs.core.get.call(null,map__41194_41228__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var period_41231 = cljs.core.get.call(null,map__41194_41228__$1,new cljs.core.Keyword(null,"period","period",-352129191));
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL"))){
view3d.client.carrier.call(null,callsign_41229,vehicle_41230);

view3d.client.camera_move.call(null,view3d.client.CARRIER,period_41231);
} else {
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}

var G__41232 = cljs.core.next.call(null,seq__41170__$1);
var G__41233 = null;
var G__41234 = (0);
var G__41235 = (0);
seq__41170 = G__41232;
chunk__41171 = G__41233;
count__41172 = G__41234;
i__41173 = G__41235;
continue;
}
} else {
return null;
}
}
break;
}
});
view3d.client.receive_directives = (function view3d$client$receive_directives(){
return ajax.core.GET.call(null,new cljs.core.Keyword(null,"directives","directives",-2003276356).cljs$core$IFn$_invoke$arity$1(view3d.client.URL),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),view3d.client.directives_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
});
view3d.client.send_manual_data = (function view3d$client$send_manual_data(){
var carr__$1 = cljs.core.deref.call(null,view3d.client.CARRIER);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(carr__$1),"MANUAL")){
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"manual-data","manual-data",1249538213).cljs$core$IFn$_invoke$arity$1(view3d.client.URL)),cljs.core.str("?coord="),cljs.core.str(new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(carr__$1)),cljs.core.str("&course="),cljs.core.str(new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(carr__$1)),cljs.core.str("&speed= "),cljs.core.str(new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(carr__$1)),cljs.core.str("&altitude="),cljs.core.str(new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(carr__$1))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (carr__$1){
return (function (response){
return null;
});})(carr__$1))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
} else {
return null;
}
});
view3d.client.on_load = (function view3d$client$on_load(){
cljs.core.enable_console_print_BANG_.call(null);

ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(view3d.client.URL)),cljs.core.str("terrain")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return czm.core.init_3D_view.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(view3d.client.URL),response);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(view3d.client.URL)),cljs.core.str("new-czml-doc")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

csasync.proc.repeater.call(null,carr.move.move,view3d.client.CARRIER,new cljs.core.Keyword(null,"carrier","carrier",1085800622).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

csasync.proc.repeater.call(null,view3d.controls.show_flight_data,view3d.client.CARRIER,new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

csasync.proc.repeater.call(null,view3d.client.receive_directives,new cljs.core.Keyword(null,"directives","directives",-2003276356).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

csasync.proc.repeater.call(null,view3d.client.send_manual_data,new cljs.core.Keyword(null,"manual-data","manual-data",1249538213).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

return view3d.controls.show_controls.call(null);
});
window.onload = view3d.client.on_load.call(null);

//# sourceMappingURL=client.js.map