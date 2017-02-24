// 给当前页面的form表单新增两个表单
var pageTerm = document.getElementById("international-form");
var addTerm1 = document.createElement("div");
addTerm1.className = "form-row";
pageTerm.appendChild(addTerm1);

var addTerm2 = document.createElement("div");
addTerm2.className = "form-row";
pageTerm.appendChild(addTerm2);

// 新增的第一个表单
var addTerm1Label = document.createElement("div");
addTerm1Label.className = "row-label";
addTerm1Label.innerHTML = "航班号";
addTerm1.appendChild(addTerm1Label);

var addTerm1Input = document.createElement("input");
addTerm1Input.className = "input-widget-control input-text";
addTerm1.appendChild(addTerm1Input);

//新增的第二个表单
var addTerm2Label = document.createElement("div");
addTerm2Label.className = "row-label";
addTerm2Label.innerHTML = "舱位";
addTerm2.appendChild(addTerm2Label);

var addTerm2Input = document.createElement("input");
addTerm2Input.className = "input-widget-control input-text";
addTerm2.appendChild(addTerm2Input);

var addBtnQuery = document.createElement("button");
addBtnQuery.className = "sss";
addBtnQuery.innerHTML = "查询机票";
pageTerm.appendChild(addBtnQuery);

// $(".btn-green").css("display","none");
$(".sss").hover(function(){
    console.log("OKOKOKOK");
});

// $('.btn-flight').click(function() {
//     console.log("1234567");
//     $(".spandel").remove();
//     // $(".btn-flight-search").text("").append("<img src='" + $("#ctx").val() + "/images/loading.gif'/>");
//     /* 请开发人员返回结果后  remove掉图片*/
//     //$("#single-form").find("form").submit();
//     // filter["trans"] = null;
//     // filter["timeSeg"] = null;
//     // filter["carr"] = null;
//     var avjType = parseInt($(".input-radio:checked").attr("data-value"), 10);
//     var rq = {};
//     var queryURL;
//     if ($("#custom-type") && $("#custom-type").val() == '1') {
//
//         if (!$("#channel-input").val() || !$("#operator-id").val() || !$("#operator-acc").val() || !$("#channel-name").val()) {
//             $(".flight-search-result").html(printError("请选择具体的操作人"));
//             // $(".btn-flight-search").text(i_anewSearch);
//             return;
//         }
//         channelInfo.channelName = $("#channel-name").val();
//         channelInfo.channelId = $("#channel-input").val();
//         channelInfo.operatorAccount = $("#operator-acc").val();
//         channelInfo.operatorId = $("#operator-id").val();
//         channelInfo.operator = $("#operator-acc").val();
//         rq.channelInfo = channelInfo;
//     }
//     switch (avjType) {
//         case 2:
//             var owform = $("#round-form").find("form");
//             rq.journeyType = "OW";
//             rq.oriCode = owform.find("input[name='oriCode']").val();
//             rq.desCode = owform.find("input[name='desCode']").val();
//             var physicalCabin = owform.find("input[name='physicalCabin']").val();
//             if (physicalCabin) {
//                 rq.physicalCabin = physicalCabin;
//             }
//             rq.departureDate = owform.find("input[name='departureDate']").val();
//             var adtcount = parseInt(owform.find("input[name='passengerType[0].passgerNumber']").val());
//             var chdcount = parseInt(owform.find("input[name='passengerType[1].passgerNumber']").val());
//             var totalcount = adtcount + chdcount;
//             if (totalcount > 9 || totalcount == 0) {
//                 owform.find("input[name='passengerType[0].passgerNumber']").parent().parent().append(errorInput);
//                 // $(".btn-flight-search").text(i_search);
//                 return;
//             }
//             if (totalcount > 0) {
//                 var passengers = [];
//                 if (adtcount > 0) {
//                     var adt = {};
//                     adt.passgerType = "ADT";
//                     adt.passgerNumber = adtcount;
//                     adt.passgerIdentity = owform.find("input[name='passengerType[0].passgerIdentity']").val() + "";
//                     passengers.push(adt);
//                 }
//                 if (chdcount > 0) {
//                     var chd = {};
//                     chd.passgerType = "CHD";
//                     chd.passgerNumber = chdcount;
//                     passengers.push(chd);
//                 }
//                 rq.passengerType = passengers;
//             }
//             var connectionCity = owform.find("input[name='connectionCodes[0]']").val();
//             if (connectionCity) {
//                 var connectionCities = [];
//                 connectionCities.push(connectionCity);
//                 rq.connectionCodes = connectionCities;
//             }
//             var carrier = owform.find("input[name='carrier']").val();
//             if (carrier) {
//                 rq.carrier = carrier;
//             }
//             if (owform.find("input[name='input_DirectFlightsOnly']").attr("checked")) {
//                 //如果选中了，那么
//                 rq.directFlightsOnly = true;
//             }
//             else {
//                 rq.directFlightsOnly = false;
//             }
//             queryURL = owform.attr("action");
//             break;
//         case 2:
//             var rtform = $("#round-form").find("form");
//             rq.journeyType = "RT";
//             rq.oriCode = rtform.find("input[name='oriCode']").val();
//             rq.desCode = rtform.find("input[name='desCode']").val();
//             rq.departureDate = rtform.find("input[name='departureDate']").val();
//             var physicalCabin = rtform.find("input[name='physicalCabin']").val();
//             if (physicalCabin) {
//                 rq.physicalCabin = physicalCabin;
//             }
//
//             rq.returnDate = rtform.find("input[name='returnDate']").val();
//             var adtcount = parseInt(rtform.find("input[name='passengerType[0].passgerNumber']").val());
//             var chdcount = parseInt(rtform.find("input[name='passengerType[1].passgerNumber']").val());
//             if ((adtcount + chdcount) > 9 || (adtcount + chdcount) == 0) {
//                 rtform.find("input[name='passengerType[0].passgerNumber']").parent().parent().append(errorInput);
//                 // $(".btn-flight-search").text(i_search);
//                 return;
//             }
//             var totalcount = adtcount + chdcount;
//             if (totalcount > 0) {
//                 var passengers = [];
//                 if (adtcount > 0) {
//                     var adt = {};
//                     adt.passgerType = "ADT";
//                     adt.passgerNumber = adtcount;
//                     adt.passgerIdentity = rtform.find("input[name='passengerType[0].passgerIdentity']").val() + "";
//                     passengers.push(adt);
//                 }
//                 if (chdcount > 0) {
//                     var chd = {};
//                     chd.passgerType = "CHD";
//                     chd.passgerNumber = chdcount;
//                     passengers.push(chd);
//                 }
//                 rq.passengerType = passengers;
//             }
//
//             var connectionCode = rtform.find("input[name='connectionCodes[0]']").val();
//             if (connectionCode) {
//                 var connectionCodes = [];
//                 connectionCodes.push(connectionCode);
//                 rq.connectionCodes = connectionCodes;
//             }
//
//             var returnConnection = rtform.find("input[name='returnConnections[0]']").val();
//             if (returnConnection) {
//                 var returnConnections = [];
//                 returnConnections.push(returnConnection);
//                 rq.returnConnections = returnConnections;
//             }
//             var carrier = rtform.find("input[name='carrier']").val();
//             if (carrier) {
//                 rq.carrier = carrier;
//             }
//             if (rtform.find("input[name='input_DirectFlightsOnly']").attr("checked")) {
//                 //如果选中了，那么
//                 rq.directFlightsOnly = true;
//             }
//             else {
//                 rq.directFlightsOnly = false;
//             }
//             queryURL = rtform.attr("action");
//             break;
//         case 3:
//             var msform = $("#multi-form").find("form");
//             rq.journeyType = "MS";
//             rq.oriCode = msform.find("input[name='oriCode']").val();
//             rq.desCode = msform.find("input[name='desCode']").val();
//             rq.departureDate = msform.find("input[name='departureDate']").val();
//             var connectionCode = msform.find("input[name='connectionCodes[0]']").val();
//             if (connectionCode) {
//                 var connectionCodes = [];
//                 connectionCodes.push(connectionCode);
//                 rq.connectionCodes = connectionCodes;
//             }
//             fltsegs = [];
//             fltseg = {};
//             fltseg.oriCode = msform.find("input[name='flightSegments[0].oriCode']").val();
//             fltseg.desCode = msform.find("input[name='flightSegments[0].desCode']").val();
//             fltseg.departureDate = msform.find("input[name='flightSegments[0].departureDate']").val();
//             var fltConnectionCode = msform.find("input[name='flightSegments[0].connectionCodes[0]']").val();
//             if (fltConnectionCode) {
//                 var fltconnectionCodes = [];
//                 fltconnectionCodes.push(fltConnectionCode);
//                 fltseg.connectionCodes = fltconnectionCodes;
//             }
//             fltsegs.push(fltseg);
//             rq.flightSegments = fltsegs;
//
//             var physicalCabin = msform.find("input[name='physicalCabin']").val();
//             if (physicalCabin) {
//                 rq.physicalCabin = physicalCabin;
//             }
//
//             var adtcount = parseInt(msform.find("input[name='passengerType[0].passgerNumber']").val());
//             var chdcount = parseInt(msform.find("input[name='passengerType[1].passgerNumber']").val());
//             if ((adtcount + chdcount) > 9 || (adtcount + chdcount) == 0) {
//                 msform.find("input[name='passengerType[0].passgerNumber']").parent().parent().append(errorInput);
//                 // $(".btn-flight-search").text(i_search);
//                 return;
//             }
//             var totalcount = adtcount + chdcount;
//             if (totalcount > 0) {
//                 var passengers = [];
//                 if (adtcount > 0) {
//                     var adt = {};
//                     adt.passgerType = "ADT";
//                     adt.passgerNumber = adtcount;
//                     adt.passgerIdentity = msform.find("input[name='passengerType[0].passgerIdentity']").val() + "";
//                     passengers.push(adt);
//                 }
//                 if (chdcount > 0) {
//                     var chd = {};
//                     chd.passgerType = "CHD";
//                     chd.passgerNumber = chdcount;
//                     passengers.push(chd);
//                 }
//                 rq.passengerType = passengers;
//             }
//             var carrier = msform.find("input[name='carrier']").val();
//             if (carrier) {
//                 rq.carrier = carrier;
//             }
//             if (msform.find("input[name='input_DirectFlightsOnly']").attr("checked")) {
//                 //如果选中了，那么
//                 rq.directFlightsOnly = true;
//             }
//             else {
//                 rq.directFlightsOnly = false;
//             }
//             queryURL = msform.attr("action");
//             break;
//     };
//
//     $(".flight-search-result").empty();
//     journeyType=rq.journeyType;
//     $.ajax({
//         type: 'POST',
//         url: queryURL,
//         contentType: "application/json;",
//         dataType: "json",
//         data: JSON.stringify(rq),
//         success: function(rs){
//             console.log("hahahaha")
//             console.log(rs);
//             if(!rs){
//                 $(".flight-search-result").empty();
//                 $(".flight-search-result").html(printError(getJSLocale("flightresult_noResult")));
//                 $(".btn-flight-search").text(i_anewSearch);
//                 return false;
//             }
//             var queryStartTime = new Date();
//             if(rs.autherror){
//
//                 setTimeout("refresh();",3000);
//                 $(".flight-search-result").empty();
//                 $(".flight-search-result").html(printError(getJSLocale("flightresult_permissionError")));
//                 $(".btn-flight-search").text(i_anewSearch).removeClass("btn-flight-search").addClass(".btn-green-disabled").attr("disabled",true);
//                 return false;
//             }
//             if(rs.error){
//                 $(".flight-search-result").empty();
//                 $(".flight-search-result").html(printError(rs.error));
//                 $(".btn-flight-search").text(i_anewSearch);
//                 return false;
//             }
//
//             helper = rs.helper;
//             resultList=rs.results;
//             lastRq=rs.rqInfo;
//
//             $(".flight-search-result").empty();
//             var flightHtml = '';
//             if($("#custom-type")&&$("#custom-type").val()=='1'){
//                 flightHtml ='<div class="price-tb-box">'+rs.debugInfo+'</div>';
//             }
//             flightHtml+='<div class="line-box clearfix">';
//             if(lastRq.journeyType=='RT'){
//                 flightHtml+='<div class="line-item">';
//                 if(helper.airportCityMap[rs.oriCode]){
//                     flightHtml+=helper.airportCityMap[rs.oriCode];
//                 }else{
//                     flightHtml+=helper.cityMap[rs.oriCode];
//                 }
//                 flightHtml+='<span class="line-mark line-mark-r"></span>';
//                 if(helper.airportCityMap[rs.desCode]){
//                     flightHtml+=helper.airportCityMap[rs.desCode];
//                 }else{
//                     flightHtml+=helper.cityMap[rs.desCode];
//                 }
//                 flightHtml+='</div>';
//             }else if(lastRq.journeyType=='OW'){
//                 flightHtml+='<div class="line-item">';
//                 if(helper.airportCityMap[rs.oriCode]){
//                     flightHtml+=helper.airportCityMap[rs.oriCode];
//                 }else{
//                     flightHtml+=helper.cityMap[rs.oriCode];
//                 }
//                 flightHtml+='<span class="line-mark "></span>';
//                 if(helper.airportCityMap[rs.desCode]){
//                     flightHtml+=helper.airportCityMap[rs.desCode];
//                 }else{
//                     flightHtml+=helper.cityMap[rs.desCode];
//                 }
//                 flightHtml+='</div>';
//             }else if(lastRq.journeyType=='MS'){
//                 flightHtml+='<div class="line-item">';
//                 if(helper.airportCityMap[rs.oriCode]){
//                     flightHtml+=helper.airportCityMap[rs.oriCode];
//                 }else{
//                     flightHtml+=helper.cityMap[rs.oriCode];
//                 }
//                 flightHtml+='<span class="line-mark "></span>';
//                 if(helper.airportCityMap[rs.desCode]){
//                     flightHtml+=helper.airportCityMap[rs.desCode];
//                 }else{
//                     flightHtml+=helper.cityMap[rs.desCode];
//                 }
//                 flightHtml+='</div>';
//                 flightHtml+='<div class="line-item">';
//                 if(helper.airportCityMap[lastRq.flightSegments[0].oriCode]){
//                     flightHtml+=helper.airportCityMap[lastRq.flightSegments[0].oriCode];
//                 }else{
//                     flightHtml+=helper.cityMap[lastRq.flightSegments[0].oriCode];
//                 }
//                 flightHtml+='<span class="line-mark "></span>';
//                 if(helper.airportCityMap[lastRq.flightSegments[0].desCode]){
//                     flightHtml+=helper.airportCityMap[lastRq.flightSegments[0].desCode];
//                 }else{
//                     flightHtml+=helper.cityMap[lastRq.flightSegments[0].desCode];
//                 }
//                 flightHtml+='</div>';
//             }
//             flightHtml+='</div>';
//             flightHtml+='<div class="price-tb-box">';
//             flightHtml+='<div class="tb-l-t"></div>'+
//                 '<table class="common-tb price-tb">'+
//                 '<colgroup>'+
//                 '<col width="67"/>'+
//                 '<col width="138"/>'+
//                 '<col width="138"/>'+
//                 '<col width="138"/>'+
//                 '<col width="138"/>'+
//                 '<col width="138"/>'+
//                 '</colgroup>'+
//                 '<thead>'+
//                 '<tr>'+
//                 '<th>'+
//
//                 '</th>';
//             for(var io=0;io<5;io++){
//                 var carrPrice = rs.priceTable[io];
//                 if(carrPrice && carrPrice.carr){
//                     flightHtml+='<th><img src="'+ctx+'/images/logo/'+carrPrice.carr+'.gif" height="20"/>'+carrPrice.carr+'</th>';
//                 }else{
//                     flightHtml+='<th>－</th>';
//                 }
//             }
//             flightHtml+='</tr>'+
//                 '</thead>'+
//                 '<tbody>'+
//                 '<tr>'+
//                 '<td>'+
//                 transfer[1]+
//                 '</td>';
//             for(var io=0;io<5;io++){
//                 var carrPrice = rs.priceTable[io];
//                 if(carrPrice && carrPrice.lpo){
//                     flightHtml+='<td><span class="price"><span>¥</span>'+carrPrice.lpo+'</span><input type="hidden" value="'+carrPrice.lpoIndex+'"/></td>';
//                 }else{
//                     flightHtml+='<td><span class="price no">－</span></td>';
//                 }
//             }
//             flightHtml+=  '</tr>'+
//                 '<tr>'+
//                 '<td>'+
//                 transfer[2]+
//                 '</td>';
//             for(var io=0;io<5;io++){
//                 var carrPrice = rs.priceTable[io];
//                 if(carrPrice && carrPrice.lpt){
//                     flightHtml+='<td><span class="price"><span>¥</span>'+carrPrice.lpt+'</span><input type="hidden" value="'+carrPrice.lptIndex+'"/></td>';
//                 }else{
//                     flightHtml+='<td><span class="price no">－</span></td>';
//                 }
//             }
//             flightHtml+=  '</tr>'+
//                 '<tr>'+
//                 '<td>'+
//                 transfer[0]+
//                 '</td>';
//             for(var io=0;io<5;io++){
//                 var carrPrice = rs.priceTable[io];
//                 if(carrPrice && carrPrice.lp){
//                     flightHtml+='<td><span class="price"><span style="font-weight: normal;">￥</span>'+carrPrice.lp+'</span><input type="hidden" value="'+carrPrice.lpIndex+'"/></td>';
//                 }else{
//                     flightHtml+='<td><span class="price no">－</span></td>';
//                 }
//             }
//             flightHtml+=  '</tr>'+
//                 '</tbody>'+
//                 '</table>';
//             flightHtml+='</div>';
//             flightHtml+=
//                 '<div class="filter-box clearfix">'+
//                 '<div class="select-con filter-carr">'+
//                 '<input class="select-input" type="hidden" value=""/>'+
//                 '<div class="select-show"><span class="select-text">'+i_airline+'</span><b class="select-arrow"></b></div>'+
//                 '<dl class="select-list">'+
//                 '<dd data-value="" class="select-option">'+i_airline+'</dd>';
//             $.each(rs.carrierSet,function(j,carr){
//                 var carri = carr.split("|");
//                 flightHtml+='<dd data-value="'+carri[0]+'" class="select-option">'+helper.carrierMap[carri[0]]+'<span class="select-airport"></span></dd>';
//             });
//             flightHtml+=
//                 '</dl>'+
//                 '</div>'+
//                 '<div class="select-con filter-timeseg">'+
//                 '<input class="select-input" type="hidden" value=""/>'+
//                 '<div class="select-show"><span class="select-text">'+i_departureperiod+'</span><b class="select-arrow"></b></div>'+
//                 '<dl class="select-list">'+
//                 '<dd data-value="" class="select-option">'+i_departureperiod+'</dd>';
//             $.each(rs.timeSeg,function(j,ts){
//                 flightHtml+='<dd data-value="'+ts+'" class="select-option">'+timeSegment[ts]+'</dd>';
//             });
//             flightHtml+=
//                 '</dl>'+
//                 '</div>'+
//                 '<div class="select-con select-spe filter-transfer filter-transfer1">'+
//                 '<input class="select-input" type="hidden" value=""/>'+
//                 '<div class="select-show"><span class="select-text">'+getJSLocale("ishop_allTransitPoint")+'</span><b class="select-arrow"></b></div>'+
//                 '<dl class="select-list">'+
//                 '<dd data-value="" class="select-option">'+getJSLocale("ishop_allTransitPoint")+'</dd>';
//             $.each(rs.transfer,function(j,ts){
//                 flightHtml+='<dd data-value="'+ts+'" class="select-option">'+transfer[ts]+'</dd>';
//             });
//             flightHtml+=
//                 '</dl>'+
//                 '</div>'+
//                 '<div class="order-btn-box">'+
//                 '<a class="btn-white order-time">'+getJSLocale("flightresult_time")+'</a>'+
//                 '<a class="btn-white order-price order-up">'+getJSLocale("flightresult_price")+'</a>'+
//                 '</div>';
//             flightHtml+='</div>';
//             flightHtml+=drawAllSections();
//             $(".flight-search-result").html(flightHtml);
//
//             bindAll();
//             $(".btn-flight-search").text(i_anewSearch);
//             // var queryEndTime = new Date(); 没地方用，先注释了   zhengpd  2016-12-13
//             bindSortAndFilter();
//         },
//         error:function(XMLHttpRequest, textStatus, errorThrown){
//             console.log("出错了")
//             $(".flight-search-result").empty();
//             $(".flight-search-result").html(printError(getJSLocale("flightresult_serverException")));
//             $(".btn-flight-search").text(i_anewSearch);
//         }
//     });
// });




