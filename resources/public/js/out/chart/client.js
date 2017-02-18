// Compiled by ClojureScript 1.9.293 {}
goog.provide('chart.client');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('goog.string');
goog.require('carr.move');
goog.require('chart.controls');
goog.require('ask.master');
goog.require('goog.string.format');
goog.require('csasync.proc');
chart.client.HOST = "http://localhost:";
chart.client.PORT = (4444);
chart.client.URL = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"base","base",185279322),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/")].join(''),new cljs.core.Keyword(null,"chart","chart",1173225425),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/chart/")].join(''),new cljs.core.Keyword(null,"directives","directives",-2003276356),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/directives/")].join(''),new cljs.core.Keyword(null,"instructions","instructions",1724333802),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/instructions/")].join(''),new cljs.core.Keyword(null,"command","command",-894540724),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/command/")].join(''),new cljs.core.Keyword(null,"question","question",-1411720117),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/question/")].join(''),new cljs.core.Keyword(null,"answer","answer",-742633163),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/answer/")].join(''),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/manual-data/")].join('')], null);
chart.client.TIO = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),new cljs.core.Keyword(null,"instructions","instructions",1724333802),new cljs.core.Keyword(null,"carrier","carrier",1085800622),new cljs.core.Keyword(null,"ext-data-popup","ext-data-popup",-108746127),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),new cljs.core.Keyword(null,"ext-data","ext-data",-1961942246),new cljs.core.Keyword(null,"directives","directives",-2003276356)],[(6000),(979),(1000),(60000),(4200),(831),(200),(15000),(911)]);
chart.client.URL_ICO = cljs.core.PersistentHashMap.fromArrays(["DESCEND","river","edu","landmark","city","GROUND","event","waterbody","COUNTER","isle","railwaystation","mountain","CLIMB","airport","LEVEL","FOLLOWING","default","INTERSECT"],[[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/river.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/edu.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/landmark.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/city.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/event.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/waterbody.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/b.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/isle.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/railwaystation.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/mountain.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/airport.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/r.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/info.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join('')]);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.PLACEMARKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.error_handler = (function chart$client$error_handler(response){
var map__34737 = response;
var map__34737__$1 = ((((!((map__34737 == null)))?((((map__34737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34737):map__34737);
var status = cljs.core.get.call(null,map__34737__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__34737__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
chart.client.no_handler = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null);
chart.client.read_transit = (function chart$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
chart.client.move_vehicle = (function chart$client$move_vehicle(id){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var vmp = temp__4657__auto__;
carr.move.move.call(null,vmp);

var mp_34745 = cljs.core.deref.call(null,vmp);
var mrk_34746 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_34745);
var vec__34742_34747 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_34745);
var lat_34748 = cljs.core.nth.call(null,vec__34742_34747,(0),null);
var lon_34749 = cljs.core.nth.call(null,vec__34742_34747,(1),null);
var pos_34750 = (new L.LatLng(lat_34748,lon_34749));
mrk_34746.setLatLng(pos_34750);

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id,vmp));
} else {
return null;
}
});
chart.client.delete_vehicle = (function chart$client$delete_vehicle(id){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var veh = temp__4657__auto__;
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh)));

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.dissoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id));
} else {
return null;
}
});
chart.client.clear_vehicles = (function chart$client$clear_vehicles(){
var seq__34755_34759 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__34756_34760 = null;
var count__34757_34761 = (0);
var i__34758_34762 = (0);
while(true){
if((i__34758_34762 < count__34757_34761)){
var veh_34763 = cljs.core._nth.call(null,chunk__34756_34760,i__34758_34762);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_34763)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_34763)));

var G__34764 = seq__34755_34759;
var G__34765 = chunk__34756_34760;
var G__34766 = count__34757_34761;
var G__34767 = (i__34758_34762 + (1));
seq__34755_34759 = G__34764;
chunk__34756_34760 = G__34765;
count__34757_34761 = G__34766;
i__34758_34762 = G__34767;
continue;
} else {
var temp__4657__auto___34768 = cljs.core.seq.call(null,seq__34755_34759);
if(temp__4657__auto___34768){
var seq__34755_34769__$1 = temp__4657__auto___34768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34755_34769__$1)){
var c__9995__auto___34770 = cljs.core.chunk_first.call(null,seq__34755_34769__$1);
var G__34771 = cljs.core.chunk_rest.call(null,seq__34755_34769__$1);
var G__34772 = c__9995__auto___34770;
var G__34773 = cljs.core.count.call(null,c__9995__auto___34770);
var G__34774 = (0);
seq__34755_34759 = G__34771;
chunk__34756_34760 = G__34772;
count__34757_34761 = G__34773;
i__34758_34762 = G__34774;
continue;
} else {
var veh_34775 = cljs.core.first.call(null,seq__34755_34769__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_34775)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_34775)));

var G__34776 = cljs.core.next.call(null,seq__34755_34769__$1);
var G__34777 = null;
var G__34778 = (0);
var G__34779 = (0);
seq__34755_34759 = G__34776;
chunk__34756_34760 = G__34777;
count__34757_34761 = G__34778;
i__34758_34762 = G__34779;
continue;
}
} else {
}
}
break;
}

return cljs.core.vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.PersistentArrayMap.EMPTY);
});
chart.client.info = (function chart$client$info(id){
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("info?id="),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.create_update_marker = (function chart$client$create_update_marker(mrk,mp){
if(cljs.core.truth_(mrk)){
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk);
} else {
}

var vec__34784 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__34784,(0),null);
var lon = cljs.core.nth.call(null,vec__34784,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__34784,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__34784,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__34780_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__34780_SHARP_))),e.target);
});})(vec__34784,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__34784,lat,lon,pos,ico,opt,mrk__$1))
);

mrk__$1.addTo(cljs.core.deref.call(null,chart.client.CHART));

mrk__$1.options.angle = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp);

return mrk__$1;
});
chart.client.create_update_vehicle = (function chart$client$create_update_vehicle(id,mp){
chart.client.delete_vehicle.call(null,id);

var ms = cljs.core.volatile_BANG_.call(null,"START");
var mp__$1 = cljs.core.assoc.call(null,mp,new cljs.core.Keyword(null,"marker","marker",865118313),chart.client.create_update_marker.call(null,null,mp),new cljs.core.Keyword(null,"step-hrs","step-hrs",-504384679),(new cljs.core.Keyword(null,"vehicles","vehicles",-161247303).cljs$core$IFn$_invoke$arity$1(chart.client.TIO) / (3600000)),new cljs.core.Keyword(null,"movst","movst",1585301628),ms,new cljs.core.Keyword(null,"mover","mover",935114769),csasync.proc.start_process.call(null,ms,((function (ms){
return (function (){
return chart.client.move_vehicle.call(null,id);
});})(ms))
,new cljs.core.Keyword(null,"vehicles","vehicles",-161247303).cljs$core$IFn$_invoke$arity$1(chart.client.TIO)));
var carr__$1 = cljs.core.volatile_BANG_.call(null,mp__$1);
carr.move.set_turn_point.call(null,carr__$1);

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id,carr__$1));
});
chart.client.create_placemark = (function chart$client$create_placemark(iname,lat,lon,feature){
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": (function (){var or__9181__auto__ = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__9181__auto__)){
return or__9181__auto__;
} else {
return chart.client.URL_ICO.call(null,"default");
}
})(), "iconSize": [(24),(24)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk = L.rotatedMarker(pos,opt);
mrk.on("click",((function (pos,ico,opt,mrk){
return (function (e){
return chart.client.info.call(null,[cljs.core.str("pm"),cljs.core.str(iname)].join(''));
});})(pos,ico,opt,mrk))
);

mrk.addTo(cljs.core.deref.call(null,chart.client.CHART));

return cljs.core._vreset_BANG_.call(null,chart.client.PLACEMARKS,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.PLACEMARKS),iname,mrk));
});
chart.client.clear_placemarks = (function chart$client$clear_placemarks(){
var seq__34791_34795 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__34792_34796 = null;
var count__34793_34797 = (0);
var i__34794_34798 = (0);
while(true){
if((i__34794_34798 < count__34793_34797)){
var mrk_34799 = cljs.core._nth.call(null,chunk__34792_34796,i__34794_34798);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_34799);

var G__34800 = seq__34791_34795;
var G__34801 = chunk__34792_34796;
var G__34802 = count__34793_34797;
var G__34803 = (i__34794_34798 + (1));
seq__34791_34795 = G__34800;
chunk__34792_34796 = G__34801;
count__34793_34797 = G__34802;
i__34794_34798 = G__34803;
continue;
} else {
var temp__4657__auto___34804 = cljs.core.seq.call(null,seq__34791_34795);
if(temp__4657__auto___34804){
var seq__34791_34805__$1 = temp__4657__auto___34804;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34791_34805__$1)){
var c__9995__auto___34806 = cljs.core.chunk_first.call(null,seq__34791_34805__$1);
var G__34807 = cljs.core.chunk_rest.call(null,seq__34791_34805__$1);
var G__34808 = c__9995__auto___34806;
var G__34809 = cljs.core.count.call(null,c__9995__auto___34806);
var G__34810 = (0);
seq__34791_34795 = G__34807;
chunk__34792_34796 = G__34808;
count__34793_34797 = G__34809;
i__34794_34798 = G__34810;
continue;
} else {
var mrk_34811 = cljs.core.first.call(null,seq__34791_34805__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_34811);

var G__34812 = cljs.core.next.call(null,seq__34791_34805__$1);
var G__34813 = null;
var G__34814 = (0);
var G__34815 = (0);
seq__34791_34795 = G__34812;
chunk__34792_34796 = G__34813;
count__34793_34797 = G__34814;
i__34794_34798 = G__34815;
continue;
}
} else {
}
}
break;
}

return cljs.core.vreset_BANG_.call(null,chart.client.PLACEMARKS,cljs.core.PersistentArrayMap.EMPTY);
});
chart.client.popup = (function chart$client$popup(var_args){
var args34816 = [];
var len__10289__auto___34822 = arguments.length;
var i__10290__auto___34823 = (0);
while(true){
if((i__10290__auto___34823 < len__10289__auto___34822)){
args34816.push((arguments[i__10290__auto___34823]));

var G__34824 = (i__10290__auto___34823 + (1));
i__10290__auto___34823 = G__34824;
continue;
} else {
}
break;
}

var G__34818 = args34816.length;
switch (G__34818) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34816.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__34819 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__34819,(0),null);
var lon = cljs.core.nth.call(null,vec__34819,(1),null);
return chart.client.popup.call(null,lat,lon,html,time);
});

chart.client.popup.cljs$core$IFn$_invoke$arity$4 = (function (lat,lon,html,time){
var pop = L.popup(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"maxWidth","maxWidth",-1375124795),(600),new cljs.core.Keyword(null,"maxHeight","maxHeight",-2066822365),(800)], null)).setLatLng([lat,lon]).setContent(html);
cljs.core.deref.call(null,chart.client.CHART).addLayer(pop);

if((time > (0))){
return csasync.proc.delayer.call(null,((function (pop){
return (function (){
return cljs.core.deref.call(null,chart.client.CHART).removeLayer(pop);
});})(pop))
,time);
} else {
return null;
}
});

chart.client.popup.cljs$lang$maxFixedArity = 4;

chart.client.add_trail = (function chart$client$add_trail(id,points,options,time){
var ops = cljs.core.clj__GT_js.call(null,options);
var pts = cljs.core.map.call(null,((function (ops){
return (function (p1__34826_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__34826_SHARP_),cljs.core.second.call(null,p1__34826_SHARP_)));
});})(ops))
,cljs.core.partition.call(null,(3),points));
var pts__$1 = cljs.core.clj__GT_js.call(null,pts);
var trl = L.polyline(pts__$1,ops);
cljs.core.deref.call(null,chart.client.CHART).addLayer(trl);

if((time > (0))){
return csasync.proc.delayer.call(null,((function (ops,pts,pts__$1,trl){
return (function (){
return cljs.core.deref.call(null,chart.client.CHART).removeLayer(trl);
});})(ops,pts,pts__$1,trl))
,time);
} else {
return null;
}
});
chart.client.visible_map = (function chart$client$visible_map(){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bnd.getNorth(),bnd.getSouth(),bnd.getWest(),bnd.getEast()], null);
});
chart.client.new_visible = (function chart$client$new_visible(){
var vec__34830 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__34830,(0),null);
var s = cljs.core.nth.call(null,vec__34830,(1),null);
var w = cljs.core.nth.call(null,vec__34830,(2),null);
var e = cljs.core.nth.call(null,vec__34830,(3),null);
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__34830,n,s,w,e,url){
return (function (response){
return null;
});})(vec__34830,n,s,w,e,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__34833){
var vec__34837 = p__34833;
var lat = cljs.core.nth.call(null,vec__34837,(0),null);
var lon = cljs.core.nth.call(null,vec__34837,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,chart.client.CHART).getZoom();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return chart.client.new_visible.call(null);
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__34878 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__34879 = null;
var count__34880 = (0);
var i__34881 = (0);
while(true){
if((i__34881 < count__34880)){
var map__34882 = cljs.core._nth.call(null,chunk__34879,i__34881);
var map__34882__$1 = ((((!((map__34882 == null)))?((((map__34882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34882.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34882):map__34882);
var ins = map__34882__$1;
var instruct = cljs.core.get.call(null,map__34882__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__34884_34916 = cljs.core._EQ_;
var expr__34885_34917 = instruct;
if(cljs.core.truth_(pred__34884_34916.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__34885_34917))){
var map__34887_34918 = ins;
var map__34887_34919__$1 = ((((!((map__34887_34918 == null)))?((((map__34887_34918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34887_34918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34887_34918):map__34887_34918);
var id_34920 = cljs.core.get.call(null,map__34887_34919__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_34921 = cljs.core.get.call(null,map__34887_34919__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_34920,vehicle_34921);
} else {
if(cljs.core.truth_(pred__34884_34916.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__34885_34917))){
var map__34889_34922 = ins;
var map__34889_34923__$1 = ((((!((map__34889_34922 == null)))?((((map__34889_34922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34889_34922.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34889_34922):map__34889_34922);
var id_34924 = cljs.core.get.call(null,map__34889_34923__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_34924);
} else {
if(cljs.core.truth_(pred__34884_34916.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__34885_34917))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__34884_34916.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__34885_34917))){
var map__34891_34925 = ins;
var map__34891_34926__$1 = ((((!((map__34891_34925 == null)))?((((map__34891_34925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34891_34925.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34891_34925):map__34891_34925);
var id_34927 = cljs.core.get.call(null,map__34891_34926__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_34928 = cljs.core.get.call(null,map__34891_34926__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_34929 = cljs.core.get.call(null,map__34891_34926__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_34930 = cljs.core.get.call(null,map__34891_34926__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_34931 = cljs.core.get.call(null,map__34891_34926__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_34927)){
chart.client.popup.call(null,id_34927,html_34930,time_34931);
} else {
if(cljs.core.truth_((function (){var and__9169__auto__ = lat_34928;
if(cljs.core.truth_(and__9169__auto__)){
return lon_34929;
} else {
return and__9169__auto__;
}
})())){
chart.client.popup.call(null,lat_34928,lon_34929,html_34930,time_34931);
} else {
}
}
} else {
if(cljs.core.truth_(pred__34884_34916.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__34885_34917))){
var map__34893_34932 = ins;
var map__34893_34933__$1 = ((((!((map__34893_34932 == null)))?((((map__34893_34932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34893_34932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34893_34932):map__34893_34932);
var id_34934 = cljs.core.get.call(null,map__34893_34933__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_34935 = cljs.core.get.call(null,map__34893_34933__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_34936 = cljs.core.get.call(null,map__34893_34933__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_34937 = cljs.core.get.call(null,map__34893_34933__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_34934,points_34935,options_34936,time_34937);
} else {
if(cljs.core.truth_(pred__34884_34916.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__34885_34917))){
var map__34895_34938 = ins;
var map__34895_34939__$1 = ((((!((map__34895_34938 == null)))?((((map__34895_34938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34895_34938.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34895_34938):map__34895_34938);
var coord_34940 = cljs.core.get.call(null,map__34895_34939__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_34940);
} else {
if(cljs.core.truth_(pred__34884_34916.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__34885_34917))){
var map__34897_34941 = ins;
var map__34897_34942__$1 = ((((!((map__34897_34941 == null)))?((((map__34897_34941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34897_34941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34897_34941):map__34897_34941);
var iname_34943 = cljs.core.get.call(null,map__34897_34942__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var lat_34944 = cljs.core.get.call(null,map__34897_34942__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_34945 = cljs.core.get.call(null,map__34897_34942__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_34946 = cljs.core.get.call(null,map__34897_34942__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
chart.client.create_placemark.call(null,iname_34943,lat_34944,lon_34945,feature_34946);
} else {
if(cljs.core.truth_(pred__34884_34916.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__34885_34917))){
chart.client.clear_placemarks.call(null);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}
}
}

var G__34947 = seq__34878;
var G__34948 = chunk__34879;
var G__34949 = count__34880;
var G__34950 = (i__34881 + (1));
seq__34878 = G__34947;
chunk__34879 = G__34948;
count__34880 = G__34949;
i__34881 = G__34950;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34878);
if(temp__4657__auto__){
var seq__34878__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34878__$1)){
var c__9995__auto__ = cljs.core.chunk_first.call(null,seq__34878__$1);
var G__34951 = cljs.core.chunk_rest.call(null,seq__34878__$1);
var G__34952 = c__9995__auto__;
var G__34953 = cljs.core.count.call(null,c__9995__auto__);
var G__34954 = (0);
seq__34878 = G__34951;
chunk__34879 = G__34952;
count__34880 = G__34953;
i__34881 = G__34954;
continue;
} else {
var map__34899 = cljs.core.first.call(null,seq__34878__$1);
var map__34899__$1 = ((((!((map__34899 == null)))?((((map__34899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34899.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34899):map__34899);
var ins = map__34899__$1;
var instruct = cljs.core.get.call(null,map__34899__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__34901_34955 = cljs.core._EQ_;
var expr__34902_34956 = instruct;
if(cljs.core.truth_(pred__34901_34955.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__34902_34956))){
var map__34904_34957 = ins;
var map__34904_34958__$1 = ((((!((map__34904_34957 == null)))?((((map__34904_34957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34904_34957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34904_34957):map__34904_34957);
var id_34959 = cljs.core.get.call(null,map__34904_34958__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_34960 = cljs.core.get.call(null,map__34904_34958__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_34959,vehicle_34960);
} else {
if(cljs.core.truth_(pred__34901_34955.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__34902_34956))){
var map__34906_34961 = ins;
var map__34906_34962__$1 = ((((!((map__34906_34961 == null)))?((((map__34906_34961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34906_34961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34906_34961):map__34906_34961);
var id_34963 = cljs.core.get.call(null,map__34906_34962__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_34963);
} else {
if(cljs.core.truth_(pred__34901_34955.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__34902_34956))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__34901_34955.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__34902_34956))){
var map__34908_34964 = ins;
var map__34908_34965__$1 = ((((!((map__34908_34964 == null)))?((((map__34908_34964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34908_34964.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34908_34964):map__34908_34964);
var id_34966 = cljs.core.get.call(null,map__34908_34965__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_34967 = cljs.core.get.call(null,map__34908_34965__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_34968 = cljs.core.get.call(null,map__34908_34965__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_34969 = cljs.core.get.call(null,map__34908_34965__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_34970 = cljs.core.get.call(null,map__34908_34965__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_34966)){
chart.client.popup.call(null,id_34966,html_34969,time_34970);
} else {
if(cljs.core.truth_((function (){var and__9169__auto__ = lat_34967;
if(cljs.core.truth_(and__9169__auto__)){
return lon_34968;
} else {
return and__9169__auto__;
}
})())){
chart.client.popup.call(null,lat_34967,lon_34968,html_34969,time_34970);
} else {
}
}
} else {
if(cljs.core.truth_(pred__34901_34955.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__34902_34956))){
var map__34910_34971 = ins;
var map__34910_34972__$1 = ((((!((map__34910_34971 == null)))?((((map__34910_34971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34910_34971.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34910_34971):map__34910_34971);
var id_34973 = cljs.core.get.call(null,map__34910_34972__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_34974 = cljs.core.get.call(null,map__34910_34972__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_34975 = cljs.core.get.call(null,map__34910_34972__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_34976 = cljs.core.get.call(null,map__34910_34972__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_34973,points_34974,options_34975,time_34976);
} else {
if(cljs.core.truth_(pred__34901_34955.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__34902_34956))){
var map__34912_34977 = ins;
var map__34912_34978__$1 = ((((!((map__34912_34977 == null)))?((((map__34912_34977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34912_34977.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34912_34977):map__34912_34977);
var coord_34979 = cljs.core.get.call(null,map__34912_34978__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_34979);
} else {
if(cljs.core.truth_(pred__34901_34955.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__34902_34956))){
var map__34914_34980 = ins;
var map__34914_34981__$1 = ((((!((map__34914_34980 == null)))?((((map__34914_34980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34914_34980.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34914_34980):map__34914_34980);
var iname_34982 = cljs.core.get.call(null,map__34914_34981__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var lat_34983 = cljs.core.get.call(null,map__34914_34981__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_34984 = cljs.core.get.call(null,map__34914_34981__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_34985 = cljs.core.get.call(null,map__34914_34981__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
chart.client.create_placemark.call(null,iname_34982,lat_34983,lon_34984,feature_34985);
} else {
if(cljs.core.truth_(pred__34901_34955.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__34902_34956))){
chart.client.clear_placemarks.call(null);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}
}
}

var G__34986 = cljs.core.next.call(null,seq__34878__$1);
var G__34987 = null;
var G__34988 = (0);
var G__34989 = (0);
seq__34878 = G__34986;
chunk__34879 = G__34987;
count__34880 = G__34988;
i__34881 = G__34989;
continue;
}
} else {
return null;
}
}
break;
}
});
chart.client.receive_instructions = (function chart$client$receive_instructions(){
return ajax.core.GET.call(null,new cljs.core.Keyword(null,"instructions","instructions",1724333802).cljs$core$IFn$_invoke$arity$1(chart.client.URL),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),chart.client.instructions_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.move_to = (function chart$client$move_to(var_args){
var args34991 = [];
var len__10289__auto___34994 = arguments.length;
var i__10290__auto___34995 = (0);
while(true){
if((i__10290__auto___34995 < len__10289__auto___34994)){
args34991.push((arguments[i__10290__auto___34995]));

var G__34996 = (i__10290__auto___34995 + (1));
i__10290__auto___34995 = G__34996;
continue;
} else {
}
break;
}

var G__34993 = args34991.length;
switch (G__34993) {
case 0:
return chart.client.move_to.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return chart.client.move_to.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chart.client.move_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34991.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector1.call(null,"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__34990_SHARP_){
return chart.client.move_to.call(null,sel,p1__34990_SHARP_);
}));
}))
;
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$2 = (function (cnt,aps){
ask.master.selector2.call(null,"chart.client","airports",aps,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler2 = (function chart$client$handler2(sel){
var prm = [cljs.core.str("?country="),cljs.core.str(cnt),cljs.core.str("&airport="),cljs.core.str(sel)].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("move-to"),cljs.core.str(prm)].join(''),chart.client.no_handler);

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.move_to.cljs$lang$maxFixedArity = 2;

chart.client.schedule = (function chart$client$schedule(var_args){
var args35002 = [];
var len__10289__auto___35005 = arguments.length;
var i__10290__auto___35006 = (0);
while(true){
if((i__10290__auto___35006 < len__10289__auto___35005)){
args35002.push((arguments[i__10290__auto___35006]));

var G__35007 = (i__10290__auto___35006 + (1));
i__10290__auto___35006 = G__35007;
continue;
} else {
}
break;
}

var G__35004 = args35002.length;
switch (G__35004) {
case 0:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35002.length)].join('')));

}
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$0 = (function (){
ask.master.input1.call(null,"chart.client","new callsign",(80));

return (
chart.client.handler1 = (function chart$client$handler1(call){
ask.master.input2.call(null,"chart.client","hh:mm",(80));

return (
chart.client.handler2 = (function chart$client$handler1_$_handler2(tim){
return chart.client.schedule.call(null,call,tim);
}))
;
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$2 = (function (call,tim){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__34998_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__34998_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector3.call(null,"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__34999_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__34999_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector4.call(null,"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__35000_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__35000_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector5.call(null,"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__35001_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__35001_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$6 = (function (call,tim,cnt1,apt1,cnt2,aps2){
ask.master.selector6.call(null,"chart.client","to airport",aps2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler6 = (function chart$client$handler6(sel){
var prm = [cljs.core.str("?callsign="),cljs.core.str(call),cljs.core.str("&time="),cljs.core.str(tim),cljs.core.str("&country1="),cljs.core.str(cnt1),cljs.core.str("&airport1="),cljs.core.str(apt1),cljs.core.str("&country2="),cljs.core.str(cnt2),cljs.core.str("&airport2="),cljs.core.str(sel)].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("schedule"),cljs.core.str(prm)].join(''),chart.client.no_handler);

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.schedule.cljs$lang$maxFixedArity = 6;

chart.client.command = (function chart$client$command(cmd){
var pred__35012 = cljs.core._EQ_;
var expr__35013 = cmd;
if(cljs.core.truth_(pred__35012.call(null,"commands",expr__35013))){
return null;
} else {
if(cljs.core.truth_(pred__35012.call(null,"watch-visible",expr__35013))){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm = [cljs.core.str("?n="),cljs.core.str(bnd.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd.getWest()),cljs.core.str("&e="),cljs.core.str(bnd.getEast())].join('');
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__35012.call(null,"move-to",expr__35013))){
return chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__35012.call(null,"schedule",expr__35013))){
return chart.client.schedule.call(null);
} else {
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd)].join(''),chart.client.no_handler);
}
}
}
}
});
chart.client.init_chart = (function chart$client$init_chart(){
cljs.core.println.call(null,new cljs.core.Keyword(null,"INIT-CHART","INIT-CHART",-256567932));

var m = L.map("map").setView([60.3,25.0],(10));
var tile1 = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",({"maxZoom": (16), "attribution": "Ru, OpenStreetMap &copy;"}));
var tile2 = L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile3 = L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile4 = L.tileLayer("http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile5 = L.tileLayer("http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var base = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, ["OpenStreetMap",tile1,"Google Satellite",tile2,"Google Streets",tile3,"Google Hybrid",tile4,"Google Terrain",tile5], null));
var ctrl = L.control.layers(base,null);
tile1.addTo(m);

ctrl.addTo(m);

m.on("mousemove",((function (m,tile1,tile2,tile3,tile4,tile5,base,ctrl){
return (function (e){
return chart.controls.mouse_move.call(null,e.latlng.lat,e.latlng.lng);
});})(m,tile1,tile2,tile3,tile4,tile5,base,ctrl))
);

return cljs.core.vreset_BANG_.call(null,chart.client.CHART,m);
});
chart.client.on_load_chart = (function chart$client$on_load_chart(){
cljs.core.enable_console_print_BANG_.call(null);

chart.client.init_chart.call(null);

csasync.proc.repeater.call(null,chart.client.receive_instructions,new cljs.core.Keyword(null,"instructions","instructions",1724333802).cljs$core$IFn$_invoke$arity$1(chart.client.TIO));

return chart.controls.show_chart_controls.call(null);
});
chart.client.follow = (function chart$client$follow(id){
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("follow?id="),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.stopfollow = (function chart$client$stopfollow(){
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("stopfollow")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.trail = (function chart$client$trail(id){
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("trail?id="),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map