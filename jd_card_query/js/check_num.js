
// 数据数组
var dataList = [
    {"number":"JDV9751657000466","pwd":"3471-15B2-D84D-DA57"},
    {"number":"JDV9751657000467","pwd":"48D6-35BE-2854-DCAE"},
    {"number":"JDV9751657000387","pwd":"7CC4-4A7A-28B2-DA85"},
    {"number":"JDV9751657000468","pwd":"10C9-8D00-263F-F22E"},
    {"number":"JDV9751657000386","pwd":"8695-7C23-1AE9-42AF"},
    {"number":"JDV9751657000385","pwd":"601F-CC29-F9C9-B353"},
    {"number":"JDV9751657000457","pwd":"0CC9-6B96-36EC-BACB"},
    {"number":"JDV9751657000456","pwd":"A184-378B-835F-24AD"},
    {"number":"JDV9751657000455","pwd":"DB0A-D6BE-0AEF-86E3"},
    {"number":"JDV9751657000454","pwd":"3128-C0EC-8318-0905"},
    {"number":"JDV9751657000453","pwd":"FA93-378E-8AD2-9873"},
    {"number":"JDV9751657000452","pwd":"92AA-7C8B-9823-D979"},
    {"number":"JDV9751657000451","pwd":"56C9-63BE-7765-8A04"},
    {"number":"JDV9751657000384","pwd":"65FE-3A48-4646-96AE"},
    {"number":"JDV9751657000466","pwd":"3471-15B2-D84D-DA57"},
    {"number":"JDV9751657000467","pwd":"48D6-35BE-2854-DCAE"},
    {"number":"JDV9751657000387","pwd":"7CC4-4A7A-28B2-DA85"},
    {"number":"JDV9751657000468","pwd":"10C9-8D00-263F-F22E"},
    {"number":"JDV9751657000386","pwd":"8695-7C23-1AE9-42AF"},
    {"number":"JDV9751657000385","pwd":"601F-CC29-F9C9-B353"},
    {"number":"JDV9751657000457","pwd":"0CC9-6B96-36EC-BACB"},
    {"number":"JDV9751657000456","pwd":"A184-378B-835F-24AD"},
    {"number":"JDV9751657000455","pwd":"DB0A-D6BE-0AEF-86E3"},
    {"number":"JDV9751657000454","pwd":"3128-C0EC-8318-0905"},
    {"number":"JDV9751657000453","pwd":"FA93-378E-8AD2-9873"},
    {"number":"JDV9751657000452","pwd":"92AA-7C8B-9823-D979"},
    {"number":"JDV9751657000451","pwd":"56C9-63BE-7765-8A04"},
    {"number":"JDV9751657000384","pwd":"65FE-3A48-4646-96AE"},
    {"number":"JDV9751657000466","pwd":"3471-15B2-D84D-DA57"},
    {"number":"JDV9751657000467","pwd":"48D6-35BE-2854-DCAE"},
    {"number":"JDV9751657000387","pwd":"7CC4-4A7A-28B2-DA85"},
    {"number":"JDV9751657000468","pwd":"10C9-8D00-263F-F22E"},
    {"number":"JDV9751657000386","pwd":"8695-7C23-1AE9-42AF"},
    {"number":"JDV9751657000385","pwd":"601F-CC29-F9C9-B353"},
    {"number":"JDV9751657000457","pwd":"0CC9-6B96-36EC-BACB"},
    {"number":"JDV9751657000456","pwd":"A184-378B-835F-24AD"},
    {"number":"JDV9751657000455","pwd":"DB0A-D6BE-0AEF-86E3"},
    {"number":"JDV9751657000454","pwd":"3128-C0EC-8318-0905"},
    {"number":"JDV9751657000453","pwd":"FA93-378E-8AD2-9873"},
    {"number":"JDV9751657000452","pwd":"92AA-7C8B-9823-D979"},
    {"number":"JDV9751657000451","pwd":"56C9-63BE-7765-8A04"},
    {"number":"JDV9751657000384","pwd":"65FE-3A48-4646-96AE"}
];



// 变量声明
var sourceNum = dataList.length; // 待查资源长度
var currentNum = 1;              // 当前查询到第几个资源
var boundNum = 0;                // 已绑定的资源个数
var unboundNum = 0;              // 未绑定的资源个数
var unboundTotal = 0;            // 未绑定的资源总价格
var cur_amountTotal  = 0;        // 当前资源的面值
var cur_amount = 0;              // 当前资源的余额
var isStop = true;

var pageDiv = document.getElementById("card02");
var createDivBox = document.createElement("div"); // 创建一个div包含所有的新添加的元素
var createDivStart = document.createElement("div"); // 创建一个开始结束标签 div元素。
var createDivReload = document.createElement("div"); // 创建一个重新加载的 div元素
var createSpanClose = document.createElement("span"); // 创建一个关闭所有添加标签的元素
var createImg = document.createElement("img");  // 创建一个 img元素
var createA = document.createElement("a");
createA.id = "hf";
createA.download = "test.xlsx";
createA.href = "";
// var createText = document.createElement("textarea");   // 创建一个文本输入区域

createDivStart.id = "myAddDiv";
createDivBox.id = "myDivBox";
createDivReload.id = "myDivReload";
createSpanClose.id = "myCreateSpan";
createImg.id = "myCreateImg";
// createText.id = "myCreateText";

createSpanClose.innerHTML = "x";

// createText.innerHTML = "文本输入";

pageDiv.appendChild(createDivBox);
createDivBox.appendChild(createSpanClose);
// createDivBox.appendChild(createText);
var lastResult = [{ "编号": "编号", "结果" : "结果"}];

var bindResult = "";

$("#myDivBox").css({
    "border":"1px solid #eee",
    "position":"fixed",
    "top": "50%",
    "right": 0,
    "background-color": "#fff",
    "width": "20%",
    "height":"400px",
    "padding": "20px",
    "white-space":"nowrap",
    "overflow":"scroll",
    "overflow-x":"scroll",
    "z-index":100000000
});

$("#myCreateSpan").css({
    "position": "absolute",
    "right": "10px",
    "top":"6px",
    "font-size": "20px",
    "cursor": "pointer",
    "width": "20px",
    "height": "20px",
    "background-color": "#eeeeee",
    "line-height": "17px",
    "text-align": "center",
    "border-radius": "50%",
    "color": "#fff",
    "font-weight": "bold"
});

$("#myCreateText").css({
    "pointer-events":"none"
});

$("#myCreateImg").css({
    'width':"50px",
    "height":"50px"
});


var checkCard = function(param, index) {
    // JD 查询卡的 URL
    var actionUrl = $("#frmQueryBind").attr("action") + "?t=" + Math.random();

    $.ajax({
        type: "POST",
        url: actionUrl,
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: param,
        cache: false,
        success: function(result){
            if (result){
                currentNum = index + 1; // 查询成功，显示当前被查询的资源序号 (从 1 开始)
                var status = result.code;
                if (status == "success"){
                    unboundNum += 1; // 未绑定资源数 +1
                    var card = result.data[0];

                    cur_amount = parseFloat(card.amount);
                    cur_amountTotal = parseFloat(card.amountTotal);
                    unboundTotal = parseFloat(unboundNum) + parseFloat(card.amountTotal);
                    // console.log(currentNum + "   " + card.giftCardId + "  " + dataList[index].pwd + "   " + card.amount + "/" + card.amountTotal);

                    var creatDivCardDetail = document.createElement("div"); //创建一个正在重查 div元素。
                    creatDivCardDetail.class = "myAddCardDetail" ;
                    creatDivCardDetail.innerHTML = "第\t" + currentNum +"\t卡，卡号是： \t" + card.giftCardId + "\t,卡密是：\t"+ dataList[index].pwd + "\t,卡数量是：\t" + card.amount +"\t,总额是：\t" + card.amountTotal
                    createDivBox.appendChild(creatDivCardDetail);

                    bindResult = bindResult + (currentNum + creatDivCardDetail.innerHTML);

                    currentNum += 1;
                    runAction(currentNum);
                } else if (status == "verifyexpired") {
                    isStop = true;
                } else {
                    boundNum += 1;

                    var createDivCardBind = document.createElement("div"); //创建一个正在重查 div元素。
                    createDivCardBind.class = "myAddCardDetail" ;
                    createDivCardBind.innerHTML = currentNum + "已绑定";
                    createDivBox.appendChild(createDivCardBind);
                    var tmpResult = {"编号": currentNum, "结果": "已绑定"};
                    lastResult.push(tmpResult);
                    bindResult = bindResult + (currentNum + "已绑定\n");
                    // console.log(bindResult);

                    currentNum += 1;
                    runAction(currentNum);
                }
            }
            else if(!isStop) {
                // console.log(currentNum + "查询失败，正在重查！");
                createDivReload.innerHTML = "<div>查询失败，正在重查！</div>";
                createDivBox.appendChild(createDivReload);

                setTimeout(function(){checkCard(param, index)}, 1000);
            }
        }
    });
};

var runAction = function(currentNum) {

        var index = currentNum - 1;
        if(index < sourceNum) {
            var giftCardPwd = dataList[index].pwd;
            var uuid = $("#verifyImg").attr("src").split("?uid=")[1].split("&")[0];

            var param = "";
            param += "actionType=" + "query";
            param += "&uuid=" + uuid;
            param += "&giftCardId=" + $("#giftCardId").val();
            param += "&giftCardPwd=" + giftCardPwd;
            param += "&verifyCode=" + $("#verifyCode").val();

            checkCard(param, index);
        }
        else
        {
            // 追加内容
            downloadExl(lastResult);
            createDivStart.innerHTML = "<span>任务结束</span>";
            createDivBox.appendChild(createDivStart);
        }

    };

var startORstop = function() {
    isStop = !isStop;
    if(!isStop) {
        // 追加内容
        createDivStart.innerHTML = "任务启动";
        createDivBox.appendChild(createDivStart);

        // 程序启动后添加动画
        createImg.setAttribute("src","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1484905305289&di=414434ea673a0ef4a2326d3195333440&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F012f8356fe6f266ac725794814618b.gif");
        createDivBox.appendChild(createImg);

        runAction(currentNum);
    } else {
        createDivStart.innerHTML = "<span>任务提前结束</span>";
        createDivBox.appendChild(createDivStart);
    }

};

$(".curr").click(startORstop); // 鼠标划上文本，开始任务

// 拖动鼠标
window.onload=function() {
    var oDiv=document.getElementById('myDivBox');
    oDiv.onmousedown=function(ev)
    {
        var oEvent=ev||event;
        var x=0;
        var y=0;
        x=oEvent.clientX-oDiv.offsetLeft;
        y=oEvent.clientY-oDiv.offsetTop;
        document.onmousemove=function(ev)
        {
            var oEvent=ev||event;
            var out1=oEvent.clientX-x;
            var out2=oEvent.clientY-y;

            var oWidth=document.documentElement.clientWidth-oDiv.offsetWidth;
            var oHeight=document.documentElement.clientHeight-oDiv.offsetHeight;
            if(out1<0)
            {out1=0;}
            else if (out1>oWidth)
            {
                out1=oWidth;
            }
            if(out2<0)
            {out2=0;}
            else if (out2>oHeight)
            {
                out2=oHeight;
            }

            oDiv.style.left=out1+'px';
            oDiv.style.top=out2+'px';
        };
        document.onmouseup=function()
        {
            document.onmousemove=null;
            document.onmouseup=null;
        };
        return false; //解决firefox低版本的bug问题
    }
};

// 关闭浮框
$("#myCreateSpan").click(function(){
    // $("#myDivBox").css("display","none");

});

var tmpDown; //导出的二进制对象
function downloadExl(json, type) {
    console.log(json);
    var keyMap = [];//获取键
    for(k in json[0]) {
        keyMap.push(k);
    }
    var tmpdata = [];//用来保存转换好的json
    json.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
        v: v[k],
        position: (j > 25 ? getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
    }))).reduce((prev, next) => prev.concat(next)).forEach((v, i) => tmpdata[v.position] = {
        v: v.v
    });
    console.log(tmpdata);
    var outputPos = Object.keys(tmpdata); //设置区域,比如表格从A1到D10
    var tmpWB = {
        SheetNames: ['mySheet'], //保存的表标题
        Sheets: {
            'mySheet': Object.assign({},
                tmpdata, //内容
                {
                    '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] //设置填充区域
                })
        }
    };
    tmpDown = new Blob([s2ab(XLSX.write(tmpWB,
        {bookType: (type == undefined ? 'xlsx':type),bookSST: false, type: 'binary'}//这里的数据是用来定义导出的格式类型
    ))], {
        type: ""
    }); //创建二进制对象写入转换好的字节流
    var href = URL.createObjectURL(tmpDown); //创建对象超链接
    console.log(href);
    // document.getElementById("hf").href = href;
    // document.getElementById("hf").click();
    createA.href = href; //绑定a标签
    createA.click(); //模拟点击实现下载
    setTimeout(function() { //延时释放
        URL.revokeObjectURL(tmpDown); //用URL.revokeObjectURL()来释放这个object URL
    }, 100);
    console.log("llll : " + createA.href);
}

function s2ab(s) { //字符串转字符流
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for(var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}
// 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
function getCharCol(n) {
    var temCol = '',
        s = '',
        m = 0
    while(n > 0) {
        m = n % 26 + 1
        s = String.fromCharCode(m + 64) + s
        n = (n - m) / 26
    }
    return s
}



