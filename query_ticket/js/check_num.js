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

// 国际化参数
// var i_more = getJSLocale("ishop_more");
// var i_packUp = getJSLocale("ishop_packUp");
// var i_fold = getJSLocale("ishop_fold");
// var i_unfold = getJSLocale("ishop_unfold");
// var i_searching = getJSLocale("flightresult_searching");
// var i_anewSearch = getJSLocale("flightresult_anewSearch");
// var i_airline = getJSLocale("flightresult_airline");
// var i_transit = getJSLocale("ishop_transit");
// var i_search = getJSLocale("ishop_search");
// var i_departureperiod = getJSLocale("flightresult_departureperiod");
// var i_departure = getJSLocale("flightresult_departure");
// var i_arrival = getJSLocale("flightresult_arrival");
// var i_stopOver = getJSLocale("flightresult_stopOver");
// var i_booking = getJSLocale("flightresult_booking");
// var i_remarks = getJSLocale("flightresult_remarks");
// var i_none = getJSLocale("flightresult_none");
// var i_go = getJSLocale("flightresult_go");
// var i_back = getJSLocale("flightresult_back");
// var i_codeshare = getJSLocale("flightresult_codeshare");
//
// $(".btn-o-c").click(function(){
//     if($.trim($(this).text())===i_more){
//         $(this).text(i_packUp).closest(".section-bottom").find(".model-more").show();
//     }
//     else if($.trim($(this).text())===i_packUp) {
//         $(this).text(i_more).closest(".section-bottom").find(".model-more").hide();
//     }
//
// });
//
// var timeSegment=[getJSLocale("ishop_beforeDawn")+" :00:00 ~ 06:00",
//     getJSLocale("ishop_morning")+" :06:00 ~ 12:00",
//     getJSLocale("ishop_noon")+" :12:00 ~ 14:00",
//     getJSLocale("ishop_afternoon")+" :14:00 ~ 18:00",
//     getJSLocale("ishop_evening")+" :18:00 ~ 24:00"];
// var transfer=[getJSLocale("ishop_nonstop"),getJSLocale("ishop_oneStop"),getJSLocale("ishop_twoStop")];
// var filter=[];
// var channelInfo = {};
//
// $(function(){
//     if(typeof JSON == 'undefined'){
//         $('header').append( $("<script type='text/javascript' src='"+$("#ctx").val()+"'/js/flight/json2.js'></script>") );
//     }
//     $("input[value='RT']").attr("checked",true);
//     $("#single-form").hide();
//     $("#round-form").show();
//     $("#multi-form").hide();
// });
// $(document).on("mouseover",".trigger-other-box",function(){
//     var hoverCon=$(this).find(".trigger-con"),
//         bodyHeight = $("body").height(),
//         conHeight=hoverCon.height(),
//         top=$(this).offset().top;
//     if(bodyHeight-conHeight<top){
//         hoverCon.find(".box-arrow").addClass("box-arrow-up");
//         hoverCon.css({"top":-conHeight-2}).show();
//     }
//     else{
//         $(this).addClass("hover-show").find(".trigger-con").show();
//     }
//
// }).on("mouseout",".trigger-other-box",function(){
//     var hoverCon=$(this).find(".trigger-con");
//     hoverCon.hide().css({"top":20}).find(".box-arrow").removeClass("box-arrow-up");
//     $(this).removeClass("hover-show");
// });
// function bindAll(){
//     bindSortAndFilter();
//     $(".btn-book").unbind("click").on("click",airbooklayer).on("click",airbook);
//
//     $(".btn-o-c").unbind("click").on("click",opencabin);
//     $(".trigger-box").unbind("click").on("click",function(){
//             var tktRuleBox=$(this);
//             var show = $(this).attr("show");
//             if (show == 'false') {
//                 var tktRuleNode=$(this).find(".ticket-rule-con");
//                 if(tktRuleNode.html()){
//                     tktRuleBox.addClass("hover-show").find(".trigger-con").show();
//                     $(this).attr("show","true");
//                 }else{
//                     tktRuleNode.html(getJSLocale("ishop_inQuery"));
//                     tktRuleBox.addClass("hover-show").find(".trigger-con").show();
//                     $(this).attr("show","true");
//                     var pIndex=$(this).find("input[name='passengerIndex']").val();
//                     var jIndex=$(this).closest(".ticket-model").find("input[name='journeyIndex']").val();
//                     var cIndex=$(this).closest(".ticket-model").find("input[name='cabinIndex']").val();
//                     var ruleRqs=resultList[jIndex].cabinGroups[cIndex].airPriceList[pIndex];
//                     var ruleRq=ruleRqs.ticketRuleRQ;
//                     if (!isEmptyObject(channelInfo)) {
//                         ruleRq.channelInfo = channelInfo;
//                     }
//
//                     $.ajax({
//                         type: 'POST',
//                         contentType: "application/json;",
//                         url : $("#ctx").val() + "/airsearch/intl/rule.htm",
//                         dataType:"json",
//                         data :JSON.stringify(ruleRq),
//                         success : function(tktRule) {
//                             var rule = "";
//                             if(tktRule.minStay!=null && tktRule.minStay!=""){
//                                 rule="<p>"+getJSLocale("ishop_stayRules")+"：</p><div style='text-indent:30px'>"+getJSLocale("ishop_minDwell")+":"+tktRule.minStay+" "+getJSLocale("ishop_maxDwell")+"："+tktRule.maxStay+"</div>";
//                             }
//                             rule = rule +"<p>"+getJSLocale("ishop_changeRules")+"：</p>";
//                             for(var i in tktRule.endorseRules){
//                                 var er = tktRule.endorseRules[i].rule;
//                                 if (er == null || er == "") {
//                                     er = i_none;
//                                 }
//                                 rule = rule+"<div style='text-indent:30px'>"+tktRule.endorseRules[i].type+ er +"</div>";
//                             }
//                             rule = rule + "<div style='text-indent:30px'>"+getJSLocale("ishop_airlineSubject")+"</div>";
//                             rule=rule+"<p>"+getJSLocale("ishop_refundRules")+"：</p>";
//                             for(var i in tktRule.refundRules){
//                                 var rr = tktRule.refundRules[i].rule;
//                                 if (rr == null || rr == "") {
//                                     rr = i_none;
//                                 }
//                                 rule = rule+"<div style='text-indent:30px'>"+tktRule.refundRules[i].type+rr+"</div>";
//                             }
//                             rule = rule + "<div style='text-indent:30px'>"+getJSLocale("ishop_subject")+"</div>";
//                             rule=rule+"<p>"+getJSLocale("ishop_noshowRules")+"：</p>";
//                             for(var i in tktRule.noshowRules){
//                                 var nr = tktRule.noshowRules[i].rule;
//                                 if (nr == null || nr == "") {
//                                     nr = i_none;
//                                 }
//                                 rule = rule+"<div style='text-indent:30px'>"+tktRule.noshowRules[i].type+nr+"</div>";
//                             }
//                             rule = rule + "<div style='text-indent:30px'>"+getJSLocale("ishop_subject")+"</div>";
//                             tktRuleNode.html(rule);
//                         },
//                         error : function(msg){
//                             tktRuleNode.html(getJSLocale("ishop_rulesQueryFailed"));
//                         }
//                     });
//
//                 }
//             } else {
//                 $(this).removeClass("hover-show").find(".trigger-con").hide();
//                 $(this).attr("show","false");
//             }
//         }
//         /**,function(){
// 	    $(this).removeClass("hover-show").find(".trigger-con").hide();
// 	}**/);
//     $(".btn-more-result").unbind("click").click(function(){
//         if($.trim($(this).text())===i_unfold){
//             $(this).text(i_fold).closest(".section-top").find(".round-title").addClass("route-title-avianize");
//             $(this).closest(".flight-section").find(".section-con").show();
//         }
//         else if($.trim($(this).text())===i_fold) {
//             $(this).text(i_unfold).closest(".section-top").find(".round-title").removeClass("route-title-avianize");
//             $(this).closest(".flight-section").find(".section-con").hide();
//         }
//     });
//     $(".policy-btn").unbind("click").on("click",selectpolicy);
//     $(".city-code").unbind("hover").hover(function(){
//         var chineseCity=$(this).attr("data-value"),
//             chinese ="<div class='detail-box city-chinese-box'>"+
//                 "<span class='box-arrow'></span>"+
//                 "<div class='detail-con city-chinese-con'>"+ chineseCity +
//                 "</div>"+
//                 "</div>";
//         if(chineseCity){
//             $(this).parent().append(chinese).css({zIndex:2}).find(".city-chinese-box").css({left:$(this).position().left-20,top:28});
//             $(this).parent().css({zIndex:2});
//         }
//     },function(){
//         $(this).parent().css({zIndex:0});
//         $(this).siblings(".city-chinese-box").remove();
//     });
//
//     $(".stay").unbind("hover").hover(function(){
//         $(this).parent().addClass("hover-show").find(".stay-info-box").show();
//     },function(){
//         $(this).parent().removeClass("hover-show").find(".stay-info-box").hide();
//     });
//
// }
// function refresh(){
//     location.reload();
// }
// $(".route-type").change(function(){
//     var typeVal = parseInt($(this).attr("data-value"),10),
//         $singleForm = $("#single-form"),
//         $roundForm = $("#round-form"),
//         $multiForm = $("#multi-form");
//     $(this).attr("checked",true);
//     switch (typeVal){
//         case 1:
//             $singleForm.hide();
//             $multiForm.hide();
//             $roundForm.find("input[name='returnDate']").attr("disabled",true).addClass("input-disabled");
//             $roundForm.find("input[name='returnDate']").parent().prev().addClass("route-r-date");
//             $roundForm.find("input[name='returnConnections[0]']").prev().attr("disabled",true).addClass("input-disabled");
//             $roundForm.find(".more-condition").find(".c17:first").text(i_transit);
//             $roundForm.find(".more-condition").find(".c18:first").hide().next().hide();
//             $roundForm.show();
//             break;
//         case 2:
//             $roundForm.find("input[name='returnDate']").attr("disabled",false).removeClass("input-disabled");
//             $roundForm.find("input[name='returnDate']").parent().prev().removeClass("route-r-date");
//             $roundForm.find("input[name='returnConnections[0]']").prev().attr("disabled",false).removeClass("input-disabled");
//             $roundForm.find(".more-condition").find(".c17:first").text(getJSLocale("ishop_goTransitPoint"));
//             $roundForm.find(".more-condition").find(".c18:first").show().next().show();
//             $roundForm.show();
//             $singleForm.hide();
//             $multiForm.hide();
//             break;
//         case 3:
//             $multiForm.show();
//             $singleForm.hide();
//             $roundForm.hide();
//             break;
//     }
//
// });
//
//
// ///===================================== 避免与全站冲突
//
// $(".cbt").click(function(){
//     var typeVal = parseInt($(this).attr("data-value"),10),
//         $singleForm = $("#single-form"),
//         $roundForm = $("#round-form"),
//         $multiForm = $("#multi-form");
//     $(this).attr("checked",true);
//     switch (typeVal){
//         case 1:
//             $singleForm.hide();
//             $multiForm.hide();
//             $roundForm.find("input[name='returnDate']").attr("disabled",true).addClass("input-disabled");
//             $roundForm.find("input[name='returnDate']").val("");
//             $roundForm.find("input[name='returnDate'] + span").css("display","none");  // 去掉提示错误
//             $roundForm.find("input[name='returnDate']").parent().prev().addClass("route-r-date");
//             $roundForm.find("input[name='returnConnections[0]']").prev().attr("disabled",true).addClass("input-disabled");
//             $roundForm.find(".more-condition").find(".c17:first").text(i_transit);
//             $roundForm.find(".more-condition").find(".c18:first").hide().next().hide();
//             $roundForm.show();
//             break;
//         case 2:
//             $roundForm.find("input[name='returnDate']").attr("disabled",false).removeClass("input-disabled");
//             $roundForm.find("input[name='returnDate'] + span").css("display","block");  //  显示提示错误
//             $roundForm.find("input[name='returnDate']").parent().prev().removeClass("route-r-date");
//             $roundForm.find("input[name='returnConnections[0]']").prev().attr("disabled",false).removeClass("input-disabled");
//             $roundForm.find(".more-condition").find(".c17:first").text(getJSLocale("ishop_goTransitPoint"));
//             $roundForm.find(".more-condition").find(".c18:first").show().next().show();
//             $roundForm.show();
//             $singleForm.hide();
//             $multiForm.hide();
//             break;
//         case 3:
//             $multiForm.show();
//             $singleForm.hide();
//             $roundForm.hide();
//             break;
//     }
//
// });
// ///===========================
// $(".search-control-btn").click(function(){
//     var $condtion = $(".more-condition");
//     if($(this).hasClass("up")){
//         $(this).removeClass("up").text(getJSLocale('ishop_fold'));
//         $condtion.show();
//     }
//     else {
//         $(this).addClass("up").text(getJSLocale('ishop_unfold'));
//         $condtion.hide();
//     }
//
// });
// $(".order-time , .order-price").click(function(){
//     $(this).addClass("order-up");
// });
// $(".btn-flight-search").click(function(){
//     if($(this).text()==i_searching){
//
//     }else{
//         var avjType = parseInt($(".input-radio:checked").attr("data-value"),10);
//         switch (avjType){
//             case 1:
//                 $("#international-form").submit();
//                 break;
//             case 2:
//                 $("#international-form").submit();
//                 break;
//             case 3:
//                 $("#international-multi-form").submit();
//                 break;
//         };
//         //$(this).text(i_searching).append("<img src='"+$("#ctx").val()+"/images/loading.gif'/>");    /* 请开发人员返回结果后  remove掉图片*/
//         // 	query();
//     }
// });
//
// $(".section-control").click(function(){
//     var $parent = $(this).parent();
//     if($parent.hasClass("section-control-o")){
//         $parent.removeClass("section-control-o").next(".section-bd").show();
//     }
//     else {
//         $parent.addClass("section-control-o").next(".section-bd").hide();
//     }
// });
// $(".appendix > a").hover(function(){
//     $(this).parent().addClass("hover-show").find(".appendix-detail-box").show();
// },function(){
//     $(this).parent().removeClass("hover-show").find(".appendix-detail-box").hide();
// });
//
// $("#section-passenger").on("click", ".passenger-link-dell", function(){
//     var $passengerBtnPlus =  $(".passenger-btn-plus");
//     $(this).closest(".passenger-model").remove();
//     if( $passengerBtnPlus.hasClass("passenger-max")){
//         $passengerBtnPlus.removeClass("passenger-max");
//     }
//
// });
// var ctx=$("#ctx").val();
// var resultList ;//存储结果列表
// var journeyType;
// var lastRq;
// var helper;
// function date2string(btime){
//     var bdate = new Date(parseInt(btime));
//     var timeStr = bdate.Format("yyyy-MM-dd hh:mm");
//     return timeStr;
// }
// var errorInput="<span class='spandel'><div class='error-con'>" +
//     "<div class='error-box'>" +
//     "<span class='error-arrow'></span>" +
//     "<span class='error-text'>"+getJSLocale("ishop_totalNumber")+"</span>" +
//     "</div>" +
//     "<div></div>" +
//     "</div>" +
//     "</span>";
// function query(){
//     $(".spandel").remove();
//     $(".btn-flight-search").text(i_searching).append("<img src='"+$("#ctx").val()+"/images/loading.gif'/>");    /* 请开发人员返回结果后  remove掉图片*/
//     //$("#single-form").find("form").submit();
//     filter["trans"]=null;
//     filter["timeSeg"]=null;
//     filter["carr"]=null;
//     var avjType = parseInt($(".input-radio:checked").attr("data-value"),10);
//     var rq ={};
//     var queryURL;
//     if($("#custom-type")&&$("#custom-type").val()=='1'){
//
//         if(!$("#channel-input").val()||!$("#operator-id").val()||!$("#operator-acc").val()||!$("#channel-name").val()){
//             $(".flight-search-result").html(printError("请选择具体的操作人"));
//             $(".btn-flight-search").text(i_anewSearch);
//             return ;
//         }
//         channelInfo.channelName=$("#channel-name").val();
//         channelInfo.channelId=$("#channel-input").val();
//         channelInfo.operatorAccount=$("#operator-acc").val();
//         channelInfo.operatorId=$("#operator-id").val();
//         channelInfo.operator=$("#operator-acc").val();
//         rq.channelInfo = channelInfo;
//     }
//     switch (avjType){
//         case 1:
//             var owform = $("#round-form").find("form");
//             rq.journeyType="OW";
//             rq.oriCode=owform.find("input[name='oriCode']").val();
//             rq.desCode=owform.find("input[name='desCode']").val();
//             var physicalCabin=owform.find("input[name='physicalCabin']").val();
//             if(physicalCabin){
//                 rq.physicalCabin=physicalCabin;
//             }
//             rq.departureDate=owform.find("input[name='departureDate']").val();
//             var adtcount=parseInt(owform.find("input[name='passengerType[0].passgerNumber']").val());
//             var chdcount=parseInt(owform.find("input[name='passengerType[1].passgerNumber']").val());
//             var totalcount= adtcount+chdcount;
//             if(totalcount>9 || totalcount==0){
//                 owform.find("input[name='passengerType[0].passgerNumber']").parent().parent().append(errorInput);
//                 $(".btn-flight-search").text(i_search);
//                 return;
//             }
//             if(totalcount>0){
//                 var passengers=[];
//                 if(adtcount>0){
//                     var adt={};
//                     adt.passgerType="ADT";
//                     adt.passgerNumber=adtcount;
//                     adt.passgerIdentity=owform.find("input[name='passengerType[0].passgerIdentity']").val()+"";
//                     passengers.push(adt);
//                 }
//                 if(chdcount>0){
//                     var chd={};
//                     chd.passgerType="CHD";
//                     chd.passgerNumber=chdcount;
//                     passengers.push(chd);
//                 }
//                 rq.passengerType=passengers;
//             }
//             var connectionCity = owform.find("input[name='connectionCodes[0]']").val();
//             if(connectionCity){
//                 var connectionCities=[];
//                 connectionCities.push(connectionCity);
//                 rq.connectionCodes=connectionCities;
//             }
//             var carrier = owform.find("input[name='carrier']").val();
//             if(carrier){
//                 rq.carrier=carrier;
//             }
//             if(owform.find("input[name='input_DirectFlightsOnly']").attr("checked")){
//                 //如果选中了，那么
//                 rq.directFlightsOnly=true;
//             }
//             else{
//                 rq.directFlightsOnly=false;
//             }
//             queryURL = owform.attr("action");
//             break;
//         case 2:
//             var rtform = $("#round-form").find("form");
//             rq.journeyType="RT";
//             rq.oriCode=rtform.find("input[name='oriCode']").val();
//             rq.desCode=rtform.find("input[name='desCode']").val();
//             rq.departureDate=rtform.find("input[name='departureDate']").val();
//             var physicalCabin=rtform.find("input[name='physicalCabin']").val();
//             if(physicalCabin){
//                 rq.physicalCabin=physicalCabin;
//             }
//
//             rq.returnDate=rtform.find("input[name='returnDate']").val();
//             var adtcount=parseInt(rtform.find("input[name='passengerType[0].passgerNumber']").val());
//             var chdcount=parseInt(rtform.find("input[name='passengerType[1].passgerNumber']").val());
//             if((adtcount+chdcount)>9 || (adtcount+chdcount)==0){
//                 rtform.find("input[name='passengerType[0].passgerNumber']").parent().parent().append(errorInput);
//                 $(".btn-flight-search").text(i_search);
//                 return;
//             }
//             var totalcount= adtcount+chdcount;
//             if(totalcount>0){
//                 var passengers=[];
//                 if(adtcount>0){
//                     var adt={};
//                     adt.passgerType="ADT";
//                     adt.passgerNumber=adtcount;
//                     adt.passgerIdentity=rtform.find("input[name='passengerType[0].passgerIdentity']").val()+"";
//                     passengers.push(adt);
//                 }
//                 if(chdcount>0){
//                     var chd={};
//                     chd.passgerType="CHD";
//                     chd.passgerNumber=chdcount;
//                     passengers.push(chd);
//                 }
//                 rq.passengerType=passengers;
//             }
//
//             var connectionCode = rtform.find("input[name='connectionCodes[0]']").val();
//             if(connectionCode){
//                 var connectionCodes=[];
//                 connectionCodes.push(connectionCode);
//                 rq.connectionCodes=connectionCodes;
//             }
//
//             var returnConnection = rtform.find("input[name='returnConnections[0]']").val();
//             if(returnConnection){
//                 var returnConnections=[];
//                 returnConnections.push(returnConnection);
//                 rq.returnConnections=returnConnections;
//             }
//             var carrier = rtform.find("input[name='carrier']").val();
//             if(carrier){
//                 rq.carrier=carrier;
//             }
//             if(rtform.find("input[name='input_DirectFlightsOnly']").attr("checked")){
//                 //如果选中了，那么
//                 rq.directFlightsOnly=true;
//             }
//             else{
//                 rq.directFlightsOnly=false;
//             }
//             queryURL = rtform.attr("action");
//             break;
//         case 3:
//             var msform = $("#multi-form").find("form");
//             rq.journeyType="MS";
//             rq.oriCode=msform.find("input[name='oriCode']").val();
//             rq.desCode=msform.find("input[name='desCode']").val();
//             rq.departureDate=msform.find("input[name='departureDate']").val();
//             var connectionCode=msform.find("input[name='connectionCodes[0]']").val();
//             if(connectionCode){
//                 var connectionCodes=[];
//                 connectionCodes.push(connectionCode);
//                 rq.connectionCodes=connectionCodes;
//             }
//             fltsegs=[];
//             fltseg={};
//             fltseg.oriCode=msform.find("input[name='flightSegments[0].oriCode']").val();
//             fltseg.desCode=msform.find("input[name='flightSegments[0].desCode']").val();
//             fltseg.departureDate=msform.find("input[name='flightSegments[0].departureDate']").val();
//             var fltConnectionCode = msform.find("input[name='flightSegments[0].connectionCodes[0]']").val();
//             if(fltConnectionCode){
//                 var fltconnectionCodes=[];
//                 fltconnectionCodes.push(fltConnectionCode);
//                 fltseg.connectionCodes=fltconnectionCodes;
//             }
//             fltsegs.push(fltseg);
//             rq.flightSegments=fltsegs;
//
//             var physicalCabin=msform.find("input[name='physicalCabin']").val();
//             if(physicalCabin){
//                 rq.physicalCabin=physicalCabin;
//             }
//
//             var adtcount=parseInt(msform.find("input[name='passengerType[0].passgerNumber']").val());
//             var chdcount=parseInt(msform.find("input[name='passengerType[1].passgerNumber']").val());
//             if((adtcount+chdcount)>9 || (adtcount+chdcount)==0){
//                 msform.find("input[name='passengerType[0].passgerNumber']").parent().parent().append(errorInput);
//                 $(".btn-flight-search").text(i_search);
//                 return ;
//             }
//             var totalcount= adtcount+chdcount;
//             if(totalcount>0){
//                 var passengers=[];
//                 if(adtcount>0){
//                     var adt={};
//                     adt.passgerType="ADT";
//                     adt.passgerNumber=adtcount;
//                     adt.passgerIdentity=msform.find("input[name='passengerType[0].passgerIdentity']").val()+"";
//                     passengers.push(adt);
//                 }
//                 if(chdcount>0){
//                     var chd={};
//                     chd.passgerType="CHD";
//                     chd.passgerNumber=chdcount;
//                     passengers.push(chd);
//                 }
//                 rq.passengerType=passengers;
//             }
//             var carrier = msform.find("input[name='carrier']").val();
//             if(carrier){
//                 rq.carrier=carrier;
//             }
//             if(msform.find("input[name='input_DirectFlightsOnly']").attr("checked")){
//                 //如果选中了，那么
//                 rq.directFlightsOnly=true;
//             }
//             else{
//                 rq.directFlightsOnly=false;
//             }
//             queryURL = msform.attr("action");
//             break;
//     };
//     $(".flight-search-result").empty();
//     journeyType=rq.journeyType;
//     $.ajax({
//         type: 'POST',
//         url: queryURL,
//         contentType: "application/json;",
//         dataType: "json",
//         data: JSON.stringify(rq),
//         success: function(rs){
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
//             $(".flight-search-result").empty();
//             $(".flight-search-result").html(printError(getJSLocale("flightresult_serverException")));
//             $(".btn-flight-search").text(i_anewSearch);
//         }
//     });
// }
// function sortUp2LowByPrice(a,b){
//     if(a.settlementPriceAmount < b.settlementPriceAmount) return -1;
//     if(a.settlementPriceAmount > b.settlementPriceAmount) return 1;
//     return 0;
// }
//
// function sortLow2UpByPrice(a,b){
//     if(a.settlementPriceAmount > b.settlementPriceAmount) return -1;
//     if(a.settlementPriceAmount < b.settlementPriceAmount) return 1;
//     return 0;
// }
//
// function sortLate2Early(a,b){
//     var departTimeA=a.availableJourneys[0].availableJourneyOptions[0].airFlightSearchResults[0].departureTime;
//     var departTimeB=b.availableJourneys[0].availableJourneyOptions[0].airFlightSearchResults[0].departureTime;
//     if(departTimeA > departTimeB) return -1;
//     if(departTimeA < departTimeB) return 1;
//     return 0;
// }
//
// function sortEarly2Late(a,b){
//     var departTimeA=a.availableJourneys[0].availableJourneyOptions[0].airFlightSearchResults[0].departureTime;
//     var departTimeB=b.availableJourneys[0].availableJourneyOptions[0].airFlightSearchResults[0].departureTime;
//     if(departTimeA < departTimeB) return -1;
//     if(departTimeA > departTimeB) return 1;
//     return 0;
// }
//
// function drawAllSections(){
//     var flightHtml='';
//     var count = 0;
//     var codeshareFlag = false;
//     var stopFlag = false;
//     $.each(resultList,function(i,avjsWithPrice){
//         codeshareFlag = false;
//         stopFlag = false;
//         if(filter["trans"] && avjsWithPrice.transfer!=parseInt(filter["trans"])){
//             return true;
//         }
//         if(filter["timeSeg"] && avjsWithPrice.departTimeSeg!=parseInt(filter["timeSeg"])){
//             return true;
//         }
//         if(filter["carr"] && avjsWithPrice.ticketingCarrier!=filter["carr"]){
//             return true;
//         }
//         count++;
//         flightHtml+=
//             '<div class="flight-section" id="inter-shop-'+avjsWithPrice.index+'">';
//         var avjs = avjsWithPrice.availableJourneys;
//         var firstCabin = (avjsWithPrice.cabinGroups[0].cabinGroup+'').split(';');//同样是list,为毛一个是;一个是,
//         var firstPhysicalCabin = (avjsWithPrice.cabinGroups[0].physicalCabins+'').split(',');
//         var flightIndex=0;
//         flightHtml+='<div class="section-top clearfix">';
//         flightHtml+='<div class="section-top-left iwidth623" data-index="'+i+'">';
//         // 航班共享的数量
//         $.each(avjs,function(j,avj){
//             if(j==0){
//                 flightHtml+='<div class="travel-route-model model-first">';
//             }else{
//                 flightHtml+='<div class="travel-route-model">';
//             }
//             if(journeyType!='OW'){
//                 flightHtml+='<div class="round-title">'+findJourneyTitle(j)+'</div>';
//             }
//             var j1stFlt=avj.availableJourneyOptions[0].airFlightSearchResults[0];
//             var jlastFlt=avj.availableJourneyOptions[0].airFlightSearchResults[avj.availableJourneyOptions[0].airFlightSearchResults.length-1];
//             flightHtml+='<div class="flight-time">'+
//                 '<p><strong>'+i_departure+'&nbsp;&nbsp;'+date2string(j1stFlt.departureTime)+'</strong></p>'+
//                 '<p class="flight-time-p"><strong>'+i_arrival+'&nbsp;&nbsp;'+date2string(jlastFlt.arriveTime)+'</strong></p>'+
//                 '</div>'+
//                 '<div class="info-city">'+
//                 '<p>'+helper.airportCityMap[j1stFlt.orgCity]+'</p>'+
//                 '<p>'+helper.airportCityMap[jlastFlt.desCity]+'</p>'+
//                 '</div>'+
//                 '<ul class="route-city-box">';
//             var avopts = avj.availableJourneyOptions;
//             $.each(avopts,function(k,avopt){
//                 var airflights = avopt.airFlightSearchResults;
//                 var len=airflights.length-1;
//                 $.each(airflights,function(m,airflight){
//                     flightHtml+='<li>'+
//                         '<img src="'+ctx+'/images/logo/'+airflight.airline+'.gif"/>'+airflight.airline+airflight.airFlightNo+
//                         '<div class="code-box">'+
//                         '<span class="city-code" data-value="'+helper.airportMap[airflight.orgCity]+'">'+airflight.orgCity+'</span>-'+
//                         '<span class="city-code" data-value="'+helper.airportMap[airflight.desCity]+'">'+airflight.desCity+'</span>'+
//                         '</div>'+
//                         '</li>';
//                     if(m<len){
//                         flightHtml+='<li class="route-city-arrow">-&gt;</li>';
//                     }
//                 });
//             });
//             '</ul>'+
//             '</div>';
//             flightHtml+='</div>';
//         });
//         flightHtml+='</div>';
//         if(journeyType=='OW'){
//             flightHtml+='<a class="btn-more-result show-flight-num'+i+'" href="javascript:void(0);">'+i_unfold+'</a>';
//         }else if(journeyType=='MS'){
//             flightHtml+='<a class="btn-more-result btn-more-multi-1 show-flight-num'+i+'" href="javascript:void(0);">'+i_unfold+'</a>';
//         }else{
//             flightHtml+='<a class="btn-more-result btn-more-result-refund show-flight-num'+i+'" href="javascript:void(0);">'+i_unfold+'</a>';
//         }
//         flightHtml+='</div>';
//         flightHtml+='<div class="section-con clearfix">';
//         $.each(avjs,function(j,avj){
//             if(j==0){
//                 flightHtml+=
//                     '<div class="round-box round-first">';
//             }else{
//                 flightHtml+=
//                     '<div class="round-box">';
//             }
//             if(journeyType!='OW'){
//                 flightHtml+='<div class="round-title">'+findJourneyTitle(j)+'</div>';
//             }
//             var avopts = avj.availableJourneyOptions;
//             $.each(avopts,function(k,avopt){
//                 var airflights = avopt.airFlightSearchResults;
//
//                 $.each(airflights,function(m,airflight){
//                     if(k==0&&m==0){
//                         flightHtml+='<div class="airline-model airline-model-first">';
//                     }else{
//                         flightHtml+='<div class="airline-model">';
//                     }
//                     flightHtml+='<div class="airline">'+
//                         '<img src="'+ctx+'/images/logo/'+airflight.airline+'.gif" height="20"/>'+
//                         '<span class="airline-name">'+helper.carrierMap[airflight.airline]+'</span>'+
//                         '</div>'+
//                         '<div class="airline-info">'+
//                         '<div class="info-top">'+
//                         '<strong>'+airflight.airline+airflight.airFlightNo;
//
//                     flightHtml+='</strong>';
//                     flightHtml+= '<span>'+helper.cabinMap[firstPhysicalCabin[flightIndex]]+firstCabin[flightIndex++]+'</span>'+
//                         '<span>'+getJSLocale("flightresult_aircraftModel")+'：'+airflight.plane+'</span>';
//                     if(airflight.codeshare){
//                         flightHtml+= '<div class="stay-box">'+
//                             '<span class="stay">'+i_codeshare+'</span>'+
//                             '<div class="detail-box stay-info-box">'+
//                             '<span class="box-arrow"></span>'+
//                             '<div class="detail-con stay-info-con">';
//                         flightHtml+='<p>'+getJSLocale("flightresult_carrier")+'：'+helper.carrierMap[airflight.airCarrierCor]+'</p>'+
//                             '<p>'+getJSLocale("flightresult_flightNo")+'：'+airflight.airCarrierCor+airflight.airCarrierFlight+' </p>';
//                         flightHtml+='</div>'+
//                             '</div>'+
//                             '</div>';
//                         codeshareFlag = true;
//                     }
//                     if(airflight.stop>0){
//                         flightHtml+= '<div class="stay-box">'+
//                             '<span class="stay">'+i_stopOver+'</span>'+
//                             '<div class="detail-box stay-info-box">'+
//                             '<span class="box-arrow"></span>'+
//                             '<div class="detail-con stay-info-con">';
//                         $.each(airflight.stopInfoList, function(stopIndex,stopInfo){
//                             flightHtml+='<p>'+getJSLocale("ishop_placeOfStop")+'：'+helper.airportCityMap[stopInfo.airport]+'</p>'+
//                                 '<p>'+getJSLocale("ishop_dwellTime")+'：'+stopInfo.duration+' </p>';
//                         });
//                         flightHtml+='</div>'+
//                             '</div>'+
//                             '</div>';
//                         stopFlag = true;
//                     }
//                     flightHtml+=	'<span class="time-sum">'+getJSLocale("ishop_totalFlightDuration")+'：'+airflight.duration+'</span>'+
//                         '</div>'+
//                         '<div class="info-bottom">'+
//                         '<div class="flight-time">'+
//                         '<p><strong>'+i_departure+'&nbsp;&nbsp;'+date2string(airflight.departureTime)+'</strong>';
//                     flightHtml+='</p>'+
//                         '<p><strong>'+i_arrival+'&nbsp;&nbsp;'+date2string(airflight.arriveTime)+'</strong></p>'+
//                         '</div>'+
//                         '<div class="flight-route">'+
//                         '<div class="info-city">'+
//                         '<p>'+helper.airportCityMap[airflight.orgCity]+'</p>'+
//                         '<p>'+helper.airportCityMap[airflight.desCity]+'</p>'+
//                         '</div>'+
//                         '<div class="info-airport">'+
//                         '<p>'+helper.airportMap[airflight.orgCity]+airflight.orgCity+'&nbsp;'+(airflight.termdep==null?' ':(airflight.termdep+getJSLocale("flightresult_terminal")))+'</p>'+
//                         '<p>'+helper.airportMap[airflight.desCity]+airflight.desCity+'&nbsp;'+(airflight.termarr==null?' ':(airflight.termarr+getJSLocale("flightresult_terminal")))+'</p>'+
//                         '</div>'+
//                         '</div>'+
//                         '</div>'+
//                         '</div>'+
//                         '</div>';
//                 });
//             });
//             flightHtml+='</div>';
//         });
//         flightHtml+='</div><div class="section-bottom">';
//         var cabinPrice=avjsWithPrice.cabinGroups;
//         $.each(cabinPrice,function(n,cabinGroup){
//             var cabinG ='';
//             var spliter="+";
//             $.each((cabinGroup.cabinGroup+'').split(';'),function(x,cabinClz){
//                 cabinG+=cabinClz+spliter;
//             });
//             cabinG = cabinG.substring(0,cabinG.length-2);
//             if(n==0){
//                 flightHtml+=
//                     '<div class="ticket-model clearfix">'+
//                     '<div class="ticket-model-left">'+
//
//
//                     '<div class="trigger-box" style="float:left; padding: 0; width:60px; margin-right:5px;" show="false" onmouseover="this.style.cursor=\'hand\'">'+
//                     '<span style="font-weight:bold; color:#333; text-decoration: underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis; width:60px; display:block;">'+cabinG +cabinGroup.connector+cabinGroup.seats+'</span>'+
//                     '<div class="trigger-con" style="display: none;">'+
//                     '<div class="detail-box ticket-rule-box" style="width:140px;">'+
//                     '<span class="box-arrow"></span>'+
//                     '<div class="detail-con ticket-rule-con" style="width:140px;">'+
//                     cabinG +cabinGroup.connector+cabinGroup.seats+
//                     '</div>'+
//                     '</div>'+
//                     '</div>'+
//                     '</div>'+
//
//
//                     '<div class="ticket-box ticket-box-ll">';
//                 $.each(cabinGroup.airPriceList,function(y,airPrice){
//                     flightHtml+=drawtkt(airPrice,i,n,y,0);
//                 });
//                 flightHtml+='</div>'+'</div>'+
//                     '</div>';
//                 if(cabinGroup.airPriceList.length==1){
//                     flightHtml+='<div class="ticket-mode-right ticket-mode-right-ll">';
//                 }else{
//                     flightHtml+='<div class="ticket-mode-right btn-2-1">';
//                 }
//                 flightHtml+='<a class="btn-green btn-book">'+i_booking+'</a><a class="btn-o-c" href="javascript:void(0);">'+i_more+'</a>'+
//                     '<input type="hidden" name="journeyIndex" value="'+i+'"/>'+
//                     '<input type="hidden" name="cabinIndex" value="'+n+'"/>'+
//
//                     '</div>';
//             }else{
//
//             }
//         });
//         flightHtml+='</div>';flightHtml+='</div></div>';
//         var queryStr = "";
//         var marginTopNum = 0;
//         if(journeyType=='OW'){
//             queryStr = "<a class=\"btn-more-result show-flight-num"+i+"\"";
//             marginTopNum = 24;
//         }else if(journeyType=='MS'){
//             queryStr = "<a class=\"btn-more-result btn-more-multi-1 show-flight-num"+i+"\"";
//             marginTopNum = 58;
//         }else{
//             queryStr = "<a class=\"btn-more-result btn-more-result-refund show-flight-num"+i+"\"";
//             marginTopNum = 58;
//         }
//         if (stopFlag) {
//             var beginStr = flightHtml.substring(0, flightHtml.indexOf(queryStr));
//             var endStr = flightHtml.substring(flightHtml.indexOf(queryStr));
//             queryStr = "<span class=\"stay\" id='stop"+i+"' style='float:left; margin-top:"+marginTopNum+"px; margin-left: 8px; color:#8B0000;'>"+i_stopOver+"</span>";
//             flightHtml = beginStr + queryStr + endStr;
//         } else {
//             flightHtml = flightHtml.replace("class=\"section-top-left iwidth623\" data-index=\""+i+"\"", "class=\"section-top-left iwidth599\" data-index=\""+i+"\"");
//         }
//         if (codeshareFlag) {
//             var beginStr = flightHtml.substring(0, flightHtml.indexOf(queryStr));
//             var endStr = flightHtml.substring(flightHtml.indexOf(queryStr));
//             flightHtml = beginStr + "<span class=\"stay\" style='float:left; margin-top:"+marginTopNum+"px; margin-left: 8px; color:#8B0000;'>"+i_codeshare+"</span>" + endStr;
//             flightHtml = flightHtml.replace("class=\"section-top-left iwidth623\" data-index=\""+i+"\"", "class=\"section-top-left iwidth567\" data-index=\""+i+"\"");
//         } else {
//             flightHtml = flightHtml.replace("class=\"section-top-left iwidth599\" data-index=\""+i+"\"", "class=\"section-top-left\" data-index=\""+i+"\"");
//         }
//     });
//     if(count==0){
//         flightHtml+=printError(getJSLocale("flightresult_noResult"));
//     }
//     return flightHtml;
// }
// function printError(msg){
//     var errorHtml="";
//     errorHtml+='<div class="flight-section"><div class="book-result book-fail">';
//     errorHtml+='<div class="book-result-ico"></div>';
//     errorHtml+='<div class="book-result-text">';
//     errorHtml+= msg;
//     errorHtml+='</div>';
//     errorHtml+='</div></div>';
//     return errorHtml;
// }
// function drawPolicy(airPrice,policyIndex){
//     var plc=airPrice.policyInfo[policyIndex];
//     var db,dd,dp,info;
//     if(!plc.resultDownB){
//         db=0;
//     }else{
//         db=plc.resultDownB*100;
//     }
//     if(!plc.resultDownD){
//         dd=0;
//     }else{
//         dd=plc.resultDownD*100;
//     }
//     if(!plc.resultDownP){
//         dp=0;
//     }else{
//         dp=plc.resultDownP;
//     }
//     if(!plc.downPolicyRemark || plc.downPolicyRemark == '无'){
//         info= i_remarks+"("+i_none+")";
//     }else{
//         info=plc.downPolicyRemark;
//     }
//     if (info == 'null;null' || info == ';') {
//         info= i_remarks+"("+i_none+")";
//         plc.downPolicyRemark = '';
//     }
//     var html='<div class="ticket-policy">'+getJSLocale("flightresult_policy")+'：<div class="trigger-box" show="false">';
//     html+='<span class="policy-rule" onmouseover="this.style.cursor=\'hand\'">'+db.toFixed(1)+'%;'+dd.toFixed(1)+'%;'+dp.toFixed(1)+'</span>';
//     html+='<div class="trigger-con" style="display: none;">'+
//         '<div class="detail-box ticket-rule-box">'+
//         '<span class="box-arrow"></span>'+
//         '<div class="detail-con ticket-rule-con ticket-rule-con-s">'+
//         info+
//         '</div>'+
//         '</div>'+
//         '</div>'+
//         '</div>';
//     html+='<input type="hidden" name="policyIndex" value="'+policyIndex+'">';
//     html+='<a class="policy-btn" href="javascript:void(0);"></a>'+
//         '</div>';
//     return html;
// }
// function drawtkt(airPrice,jIndex,cIndex,pIndex,policyIndex){
//     var html = '';
//
//     html+='<div class="ticket-item ticket-item-ll">'+
//         '<div class="ticket-person">'+helper.passengerMap[airPrice.passengerType]+' </div>'+
//         '<div class="ticket-face">'+getJSLocale("flightresult_tprice")+'：<span style="font-weight: normal; font-family: Arial;">￥</span>'+airPrice.ticketPriceAmount+
//         '<div class="trigger-box" show="false"><span class="ticket-rule">'+getJSLocale("flightresult_rules")+'</span>'+
//         '<input type="hidden" name="passengerIndex" value="'+pIndex+'"/>'+
//         '<div class="trigger-con" style="display: none;">'+
//         '<div class="detail-box ticket-rule-box">'+
//         '<span class="box-arrow"></span>'+
//         '<div class="detail-con ticket-rule-con">'+
//
//         '</div>'+
//         '</div>'+
//         '</div>'+
//         '</div>'+
//         '</div>'+
//         '<div class="ticket-tax">'+
//         getJSLocale("flightresult_taxes")+'：<span style="font-weight: normal; font-family: Arial;">￥</span>'+airPrice.taxAmount+
//         '</div>'+
//         drawPolicy(airPrice,policyIndex)+
//         '<div class="ticket-pay">'+getJSLocale("flightresult_settlementPrice")+'：'+
//         '<div class="trigger-other-box">'+
//         '<span style="font-weight: normal; font-family: Arial;">￥</span><strong>'+airPrice.policyInfo[policyIndex].downSinglePrice+'</strong>'+
//         '<div class="trigger-con">'+
//         '<div class="detail-box ticket-rule-box">'+
//         '<span class="box-arrow">'+
//         '</span><div class="detail-con ticket-rule-con">'+(airPrice.policyInfo[policyIndex].finalDownFormula!=''?airPrice.policyInfo[policyIndex].finalDownFormula:' ')+
//         '</div>'+
//         '</div>'+
//         '</div>'+
//         //'结算价：<span style="font-weight: normal; font-family: Arial;">￥</span><strong>'+airPrice.policyInfo[policyIndex].downSinglePrice+'</strong>'+
//         '</div>'+
//         '<input type="hidden" name="journeyIndex" value="'+jIndex+'"/>'+
//         '<input type="hidden" name="cabinIndex" value="'+cIndex+'"/>'+
//         '</div>';
//     return html;
// }
//
//
// function opencabin(){
//     if($.trim($(this).text())===i_more){
//         var jIndex = $(this).parent().find("input[name='journeyIndex']").val();
//         var rq =lastRq;
//         var kknode = $(this).parent().parent().parent();
//         if(kknode.find(".model-more").html()){
//             $(this).text(i_packUp).closest(".section-bottom").find(".model-more").show();
//             return;
//         }else{
//             $(this).text(i_searching);
//         }
//         var thisbtn=$(this);
//         rq.avjourneys=resultList[jIndex].availableJourneys;
//         $.ajax({
//             type: 'POST',
//             url: $("#ctx").val() + "/airsearch/intl/flight/query.htm",
//             contentType: "application/json;",
//             dataType: "json",
//             data: JSON.stringify(rq),
//             success: function(rs){
//                 var cabinHtml='<div class="model-more">';
//                 var helper=rs.helper;
//                 resultList[jIndex].cabinGroups=rs.results[0].cabinGroups;
//                 if(rs.results[0].cabinGroups.length<2){
//                     thisbtn.text(getJSLocale("ishop_noClasses"));
//                     return ;
//                 }
//                 $.each( rs.results[0].cabinGroups,function(i,cabinGroup){
//                     var cabinG ='';
//                     $.each((cabinGroup.cabinGroup+'').split(';'),function(x,cabinClz){
//                         cabinG+=cabinClz+'+';
//                     });
//                     cabinG = cabinG.substring(0,cabinG.length-2);
//                     if(i==0){
//                         //无更多舱位提示
//                         cabinHtml+='<div class="ticket-model model-first clearfix">';
//                     }else{
//                         if(i==1){
//                             cabinHtml+='<div class="ticket-model model-first clearfix">';
//                         }else{
//                             cabinHtml+='<div class="ticket-model clearfix">';
//                         }
//                         cabinHtml+='<div class="ticket-model-left">'+
//
//
//                             '<div class="trigger-box" style="float:left; padding: 0; width:60px; margin-right:5px;">'+
//                             '<span style="font-weight:bold; color:#333; text-decoration: underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis; width:60px; display:block;">'+cabinG +cabinGroup.connector + cabinGroup.seats+'</span>'+
//                             '<div class="trigger-con" style="display: none;">'+
//                             '<div class="detail-box ticket-rule-box" style="width:140px;">'+
//                             '<span class="box-arrow"></span>'+
//                             '<div class="detail-con ticket-rule-con" style="width:140px;">'+
//                             cabinG +cabinGroup.connector + cabinGroup.seats+
//                             '</div>'+
//                             '</div>'+
//                             '</div>'+
//                             '</div>'+
//
//
//                             '<div class="ticket-box">';
//                         $.each(cabinGroup.airPriceList,function(y,airPrice){
//                             cabinHtml+=drawtkt(airPrice,jIndex,i,y,0);
//                         });
//                         cabinHtml+='</div>'+'</div>'+
//                             '</div>';
//                         if(cabinGroup.airPriceList.length==1){
//                             cabinHtml+='<div class="ticket-mode-right">';
//                         }else{
//                             cabinHtml+='<div class="ticket-mode-right btn-2-1">';
//                         }
//                         cabinHtml+=
//                             '<a class="btn-green btn-book">'+i_booking+'</a>'+
//                             '<input type="hidden" name="journeyIndex" value="'+jIndex+'"/>'+
//                             '<input type="hidden" name="cabinIndex" value="'+i+'"/>'+
//
//                             '</div>';
//                     }
//                 });
//                 cabinHtml+='</div>';
//                 kknode.append(cabinHtml);
//                 $(".btn-book").unbind("click").on("click",airbook);
//                 bindAll();
//
//                 thisbtn.text(i_packUp).closest(".section-bottom").find(".model-more").show();
//             },
//             error:function(){
//                 thisbtn.text(getJSLocale("ishop_searchFails"));
//             }
//         });
//         //3画圈圈
//         //4ajax请求
//         //5返回对象绑定到resultList中，并在more中显示。
//         //6展示more
//     }
//     else if($.trim($(this).text())===i_packUp) {
//         $(this).text(i_more).closest(".section-bottom").find(".model-more").hide();
//     }
//     else if($.trim($(this).text())===i_searching) {
//
//     }
// }
//
// function findJourneyTitle(jIndex){
//     if(journeyType){
//         if(journeyType=='RT'){
//             return jIndex==0?i_go:i_back;
//         }
//         if(journeyType=='MS'){
//             return ''+(jIndex+1);
//         }
//         if(journeyType=='OW'){
//             return '单';
//         }
//     }
//     return jIndex==0?i_go:i_back;
// }
// function   sleep(n)
// {
//     var   start=new   Date().getTime();
//     while(true)   if(new   Date().getTime()-start> n)   break;
// }
// function airbook(){
//     var $btn = $(this);
//     if($btn.hasClass("booking-failed")||$btn.hasClass("booking")){
//         return;
//     }
//     layer.load(getJSLocale("ishop_bookingWait")+"...");
//     $(this).addClass("booking");$btn.text(getJSLocale("ishop_bookingNow"));
//     airbookOneTime($btn);
// };
// function airbooklayer(){
//
// }
// //拼JSON
// function airbookOneTime(btn){
//     //sleep(1000);
//     var jIndex = btn.parent().find("input[name='journeyIndex']").val();
//     var cIndex = btn.parent().find("input[name='cabinIndex']").val();
//     var policyIndexes=[];
//     $.each(btn.parent().parent().find("input[name='policyIndex']"),function(pi,chd){
//         policyIndexes.push(parseInt(chd.value));
//     });
//     airbookInLayer(jIndex,cIndex,policyIndexes,btn);
// }
// function airbookInLayer(jIndex,cIndex,policyIndexes,btn){
//     var avjType = lastRq.journeyType;
//     var journey = resultList[jIndex];
//     var cabin = journey.cabinGroups[cIndex];
//     var airbookq= {};
//     airbookq.departLocationCode=lastRq.oriCode;
//     airbookq.arriveLocationCode=lastRq.desCode;
//     airbookq.routeType=lastRq.journeyType;
//     var cabinclasses = (cabin.cabinGroup+"").split(';');
//     var cabinPhy=cabin.physicalCabins;
//     airbookq.tktAirlineCode=cabin.airPriceList[0].tktAirline;
//     airbookq.isFit="0";
//     airbookq.bookType="1";
//     if(lastRq.channelInfo){
//         airbookq.createAccount=lastRq.channelInfo.operatorAccount;
//         airbookq.createAccountId=lastRq.channelInfo.operatorId;
//         airbookq.customer=lastRq.channelInfo.channelName;
//         airbookq.customerId=lastRq.channelInfo.channelId;
//     }
//     var fareBasesCode = [];
//     var baggages = [];
//     var policys =[];
//     var tktRulesMap= {};
//     var adtIndentity;
//     airbookq.chdNumber=0;
//     airbookq.adtNumber=0;
//     $.each(cabin.airPriceList,function(i,airPrice){
//         if(airPrice.policyInfo){
//             var plcy=airPrice.policyInfo[policyIndexes[i]];
//
//             policys.push(plcy);
//         }
//         if(airPrice.passengerType=='ADT'){
//             adtIndentity = airPrice.passengerIdentity;
//             airbookq.adtNumber=airPrice.passengerCount;
//         }
//         if(airPrice.passengerType=='CHD'){
//             airbookq.chdNumber=airPrice.passengerCount;//
//         }
//     });
//     airbookq.airPolicy=policys;
//
//     var airflights=[];
//     var fightIndex=0;
//     var flightRph=[];
//
//     var firstdlc=journey.availableJourneys[0].availableJourneyOptions[0].airFlightSearchResults[0].orgCity;
//     var firstfltC=journey.availableJourneys[0].availableJourneyOptions[0].airFlightSearchResults.length;
//     var firstalc=journey.availableJourneys[0].availableJourneyOptions[0].airFlightSearchResults[firstfltC-1].desCity;
//     airbookq.departLocationCode = firstdlc;
//     airbookq.arriveLocationCode = firstalc;
//     airbookq.departTakeOffDate=journey.availableJourneys[0].availableJourneyOptions[0].airFlightSearchResults[0].departureTime;
//     if(journey.availableJourneys[1]){
//         var secdlc=journey.availableJourneys[1].availableJourneyOptions[0].airFlightSearchResults[0].orgCity;
//         var secfltC=journey.availableJourneys[1].availableJourneyOptions[0].airFlightSearchResults.length;
//         var secalc=journey.availableJourneys[1].availableJourneyOptions[0].airFlightSearchResults[secfltC-1].desCity;
//         airbookq.secondDepartLocationCade=secdlc;
//         airbookq.secondArrLocationCode=secalc;
//         airbookq.arriveTakeoffDate=journey.availableJourneys[1].availableJourneyOptions[0].airFlightSearchResults[0].departureTime;
//     }
//
//     $.each(journey.availableJourneys,function(i,jn){
//         var flag = i+1+"";
//         $.each(jn.availableJourneyOptions,function(j,avo){
//             $.each(avo.airFlightSearchResults,function(k,flt){
//                 var airflight={};
//                 airflight.RPH=flt.rph;
//
//                 airflight.index = fightIndex+1;
//                 airflight.flag=flag;
//                 flightRph.push(airflight.index);
//                 airflight.departAirportcode=flt.orgCity;
//                 airflight.arrAirportcode=flt.desCity;
//                 airflight.airMarketCor=flt.airline;
//                 airflight.airMarketFlight=flt.airFlightNo;
//                 airflight.airCarrierCor=flt.airCarrierCor;
//                 airflight.airCarrierFlight=flt.airCarrierFlight;
//                 airflight.departureTakeoffTime=flt.departureTime;
//                 airflight.arriveTakeoffTime=flt.arriveTime;
//                 //airflight.cabin=cabinclasses[fightIndex];
//                 airflight.resBookDesigCode=cabinclasses[fightIndex];
//                 $.each(flt.airFlightClasses,function(l,fltCabin){
//                     if(fltCabin.classCode==airflight.ResBookDesigCode){
//                         airflight.subCabin=fltCabin.subClassCode;
//                     }
//                 });
//                 //airflight.orgCity=flt.orgCity;
//                 //airflight.desCity=flt.desCity;
//                 //airflight.actionCode;
//                 //airflight.type;
//                 //airflight.isIntlSeg = false;
//                 airflight.codeShare = flt.codeshare;
// //				airflight.tktNumber=airbookq.chdNumber+airbookq.adtNumber;
//
//                 airflight.airEquipType=flt.plane;
//                 airflights.push(airflight);
//                 fightIndex++;
//             });
//         });
//     });
//     var airAvailByFltInfoRQ = {};
//     airAvailByFltInfoRQ.airFlightSegmentInfos = airflights;
//     airAvailByFltInfoRQ.passengerNumber = airbookq.chdNumber+airbookq.adtNumber;
//     airAvailByFltInfoRQ.tripType = lastRq.journeyType;
//     airAvailByFltInfoRQ.tripType = lastRq.journeyType;
//     if (!isEmptyObject(channelInfo)) {// 添加客户信息
//         airAvailByFltInfoRQ.channelInfo = channelInfo;
//     }
//     var airpinfo = [];
//     if(airbookq.chdNumber){
//         for(var pi=0;pi<airbookq.chdNumber;pi++){
//             var airPassenger ={};
//             airPassenger.passengerType="1";
//             airPassenger.gender="0";
//             airPassenger.rph = fightIndex + 1;
//             airpinfo.push(airPassenger);
//             airPassenger.flightRph=flightRph;
//         }
//     }
//     if(airbookq.adtNumber){
//         for(var pi=0;pi<airbookq.adtNumber;pi++){
//             var airPassenger ={};
//             airPassenger.passengerType="0";
//             airPassenger.gender="0";
//             airPassenger.passengerTitle=adtIndentity;
//             airpinfo.push(airPassenger);
//             airPassenger.flightRph=flightRph;
//         }
//     }
//     airbookq.airPassengerInfo=airpinfo;
//     airbookq.airFlightSegmentInfos =airflights;
//     airbookq.tktRulesMap = tktRulesMap;
//     $.ajax({
//         type: 'POST',
//         contentType: "application/json;charset=UTF-8",
//         url : $("#ctx").val()+"/bookIntlFlight/validateBookCabin.htm",
//         dataType: "json",
//         data: JSON.stringify(airAvailByFltInfoRQ),
//         success : function(data) {
//             if(data.message=="success"){
//
//                 $.each(cabin.airPriceList,function(i,airPrice){
//                     var ruleRq=airPrice.ticketRuleRQ;
//                     $.ajax({
//                         type: 'POST',
//                         async: false,
//                         contentType: "application/json;",
//                         url : $("#ctx").val() + "/airsearch/intl/rule.htm",
//                         dataType:"json",
//                         data :JSON.stringify(ruleRq),
//                         success : function(tktRule) {
//                             if(airPrice.passengerType=='ADT'){
//                                 tktRulesMap.ADT=tktRule.tktRule;
//                             }
//                             if(airPrice.passengerType=='CHD'){
//                                 tktRulesMap.CHD=tktRule.tktRule;
//                             }
//                         },
//                         error: function(msg){
//                         }
//                     });
//                     var passengerType = airPrice.passengerType;
//                     var fareBases = airPrice.fareBasesCode;
//                     var add = {
//                         name : passengerType,
//                         value : fareBases
//                     };
//                     fareBasesCode.push(add);
//
//                     var baggageStr = "";
//                     $.each(airPrice.baggages, function(n, baggage) {
//                         if (baggage.baggageWeight != null && baggage.baggageWeight != "" && baggage.baggageWeightUnit != null && baggage.baggageWeightUnit != null) {
//                             var str = parseInt(baggage.baggageWeight) + baggage.baggageWeightUnit;
//                             baggageStr = (baggageStr + "+" + str);
//                         };
//                     });
//                     if (baggageStr != null && baggageStr != "") {
//                         baggageStr = baggageStr.substring(1);
//                     }
//                     var baggageAdd = {
//                         name : passengerType,
//                         value : baggageStr
//                     };
//                     baggages.push(baggageAdd);
//                 });
//                 airbookq.tktRulesMap=tktRulesMap;
//                 airbookq.fareBasesCode = JSON.stringify(fareBasesCode);
//                 airbookq.baggage = JSON.stringify(baggages);
//                 $.ajax({
//                     type: 'POST',
//                     contentType: "application/json;charset=UTF-8",
//                     url : $("#ctx").val()+"/bookIntlFlight/validateBookPrice.htm",
//                     dataType: "json",
//                     data: JSON.stringify(airbookq),
//                     success : function(data) {
//                         if (data.mess == "fail") {
//                             layer.closeAll();
//                             alert(getJSLocale("ishop_tpoysfhcPsa"));
//                             //layer.msg(getJSLocale("ishop_tpoysfhcPsa"),2,3000);
//                             btn.removeClass("booking").addClass("booking-failed");
//                             btn.css("background-color","#a4cf9a");
//                             btn.text(getJSLocale("ishop_Failure"));
//                             return;
//                         } else {
//                             $("#airbookform").find("input").val(JSON.stringify(airbookq));
//                             $("#airbookform").submit();
//                         }
//                     }
//                 });
//             }else{
//                 layer.closeAll();
//                 alert(getJSLocale("ishop_isapr"));
//                 //layer.msg(getJSLocale("ishop_isapr"),2,3000);
//                 btn.removeClass("booking").addClass("booking-failed");
//                 btn.css("background-color","#a4cf9a");
//                 btn.text(getJSLocale("ishop_Failure"));
//                 return;
//             }
//         }
//     });
// }
//
//
// // 对Date的扩展，将 Date 转化为指定格式的String
// // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// // 例子：
// // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
// Date.prototype.Format = function (fmt) { //author: meizz
//     var o = {
//         "M+": this.getMonth() + 1, //月份
//         "d+": this.getDate(), //日
//         "h+": this.getHours(), //小时
//         "m+": this.getMinutes(), //分
//         "s+": this.getSeconds(), //秒
//         "q+": Math.floor((this.getMonth() + 3) / 3), //季度
//         "S": this.getMilliseconds() //毫秒
//     };
//     if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
//     for (var k in o)
//         if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
//     return fmt;
// };
//
// function selectpolicy(){
//     var policyIndex=$(this).parent().find("input[name='policyIndex']").val();
//     var jIndex = $(this).parent().parent().find("input[name='journeyIndex']").val();
//     var cIndex = $(this).parent().parent().find("input[name='cabinIndex']").val();
//     var pIndex = $(this).parent().parent().find("input[name='passengerIndex']").val();
//     var tktNode = $(this).parent().parent();
//     var airPrice=resultList[jIndex].cabinGroups[cIndex].airPriceList[pIndex];
//     var policyInfos = airPrice.policyInfo;
//     var html =''+
//         '<div id="dialog-policy" class="dialog-outer dialog-policy">'+
//         '<div class="dialog-inner">'+
//         '<a class="dialog-closed" href="javascript:void(0);"></a>'+
//         '<div class="detail-ticket-content"><div class="dialog-ticket-scroll">';
//     $.each(policyInfos ,function(i,policyInfo){
//         var plc=policyInfos[i];
//         var db,dd,dp,info;
//         if(!plc.resultDownB){
//             db=0;
//         }else{
//             db=plc.resultDownB*100;
//         }
//         if(!plc.resultDownD){
//             dd=0;
//         }else{
//             dd=plc.resultDownD*100;
//         }
//         if(!plc.resultDownP){
//             dp=0;
//         }else{
//             dp=plc.resultDownP;
//         }
//         if(!plc.downPolicyRemark){
//             info=i_remarks+":"+i_none;
//         }else{
//             info=plc.downPolicyRemark;
//         }
//         html+= '<div class="dialog-ticket-box '+(i==0?'ticket-box-first':'')+' clearfix">'+
//             '<input class="dialog-ticket-radio" type="radio" name="policyIndex" value="'+i+'" '+(i==0?'checked':'')+'>'+
//             '<div class="ticket-box-right">'+
//             '<div class="dialog-ticket-item">'+
//             '<div class="dialog-ticket-front">'+
//             '<div class="dialog-ticket-person" style="display:none">'+getJSLocale("flightresult_policy")+'ID：'+policyInfo.policyId+'</div>'+
//             '</div>'+
//             '<div class="dialog-ticket-policy">'+
//             '<span>'+db.toFixed(1)+'%;'+dd.toFixed(1)+'%;'+dp.toFixed(1)+'</span>（<span class="detail-green">'+info+'</span>）'+
//             '</div>'+
//             '<div class="dialog-ticket-pay">'+getJSLocale("flightresult_taxes")+'：'+
//             '<div class="trigger-other-box">'+
//             '<span style="font-weight: normal; font-family: Arial;">￥</span><strong>'+plc.downSinglePrice+'</strong>'+
//             '<div class="trigger-con">'+
//             '<div class="detail-box ticket-rule-box">'+
//             '<span class="box-arrow">'+
//             '</span><div class="detail-con ticket-rule-con">'+(plc.finalDownFormula!=''?plc.finalDownFormula:' ')+
//             '</div>'+
//             '</div>'+
//             '</div>'+
// //                            '结算价：<strong><span style="font-weight: normal; font-family: Arial;">￥</span>'+plc.downSinglePrice+'</strong>'+
//             '</div>'+
//             '</div>'+
//             '</div>'+
//             '</div>';
//     });
//     html+= '</div>'+
//         '</div></div><div class="dialog-b">'+
//         '<a class="btn-green btn-policy-confirm" href="javascript:void(0)">'+getJSLocale("flightresult_choose")+'</a>'+
//         '<a class="btn-white btn-policy-cancle" href="javascript:void(0);">'+getJSLocale("flightresult_cancel")+'</a>'+
//         '</div>'+
//         '</div>';
//     $.layer({
//         type: 1,
//         title: false, //不显示默认标题栏
//         shade: [0.1, '#000',true],
//         closeBtn:false,
//         page: {html:html},
//         border: [0] ,
//         fix: true,
//         success: function(layerE){
//             $("#dialog-policy").show();
//             $('.btn-policy-cancle').unbind('click').bind('click',function(){
//                 var index = layer.getIndex(this);
//                 layer.close(index);
//             });
//             $('.btn-policy-confirm').unbind('click').bind('click',function(){
//                 var index = layer.getIndex(this);
//                 policyIndex= $(this).parent().parent().find("input:checked").val();
//                 tktNode.html(drawtkt(airPrice,jIndex,cIndex,pIndex,policyIndex));
//                 bindAll();
//                 layer.close(index);
//             });
//             $(".dialog-closed").unbind('click').bind('click',function(){
//                 var index = layer.getIndex(this);
//                 layer.close(index);
//             });
//         }
//     });
//
// }
//
// function bindSortAndFilter(){
//
//     $(".order-time").unbind("click").on("click",function(){
//         if($(this).hasClass("order-up")){
//             resultList= resultList.sort(function(a,b){
//                 var res = sortLate2Early(a,b);
//                 if(res==0){
//                     return sortLow2UpByPrice(a,b);
//                 }
//                 return res;
//             });
//             $(".order-price,.order-time").removeClass("order-up").removeClass("order-down");
//             $(this).addClass("order-down");
//         }else{
//             resultList= resultList.sort(function(a,b){
//                 var res=sortEarly2Late(a,b);
//                 if(res==0){
//                     return sortLow2UpByPrice(a,b);
//                 }
//                 return res;
//             });
//             $(".order-price,.order-time").removeClass("order-up").removeClass("order-down");
//             $(this).addClass("order-up");
//         }
//         $(".flight-section").remove();
//         $(".flight-search-result")[0].innerHTML+=drawAllSections();
//         bindAll();
//     });
//
//     $(".order-price").unbind("click").on("click",function(){
//         if($(this).hasClass("order-up")){
//             resultList= resultList.sort(function(a,b){
//                 var res= sortLow2UpByPrice(a,b);
//                 if(res==0){
//                     return sortEarly2Late(a,b);
//                 }
//                 return res;
//             });
//             $(".order-price,.order-time").removeClass("order-up").removeClass("order-down");
//             $(this).addClass("order-down");
//         }else{
//             resultList= resultList.sort(function(a,b){
//                 var res= sortUp2LowByPrice(a,b);
//                 if(res==0){
//                     return sortEarly2Late(a,b);
//                 }
//                 return res;
//             });
//             $(".order-price,.order-time").removeClass("order-up").removeClass("order-down");
//             $(this).addClass("order-up");
//         }
//         $(".flight-section").remove();
// //		$(".flight-search-result").append(drawAllSections());
//         $(".flight-search-result")[0].innerHTML+=drawAllSections();
//         bindAll();
//     });
//     $(".price").unbind("click").on("click",function(){
//         if($(this).hasClass("no")){
//
//         }else{
//             var height = document.body.clientHeight;
//             var idSelector = "#inter-shop-"+$(this).parent().find("input").val();
//             var top=$(idSelector).offset().top - height/2 + 40;
//             $('body,html').animate({scrollTop:top},300);
//         }
//     });
//
//     $(".filter-box").find(".select-option").unbind("click").on("click",function(){
//         var select = $(this).closest(".select-con");
//         var datavalue = $(this).attr("data-value");
//         if(select.hasClass("filter-timeseg")){
//             filter["timeSeg"]=datavalue;
//         }else if(select.hasClass("filter-transfer")){
//             filter["trans"]=datavalue;
//         }else if(select.hasClass("filter-carr")){
//             filter["carr"]=datavalue;
//         }
//         select.find(".select-text").text($(this).text());
//         select.find("input").val($(this).attr("data-value"));
//         // select closed
//         select.find(".select-list").removeClass("vv");
//         select.removeClass("select-focus");
//         $(".flight-section").remove();
// //		$(".flight-search-result").append(drawAllSections());
//         $(".flight-search-result")[0].innerHTML+=drawAllSections();
//         bindAll();
//     }).on("click", function (e) {
//         var heNode = $(e.target).closest(".select-con");
//         // select closed
//         if (heNode.length == 0) {
//             $(".select-list").removeClass("vv");
//             $(".select-con").removeClass("select-focus");
//         }
//     });
//
// }







