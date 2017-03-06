/**
 * Created by Administrator on 2016/12/21.
 */

/*坑B四级联动*/

//ajax获取JSON
function fourLink(inputElement,callback) {
    var addressData = [
        {
            "id": "1",
            "name": "河北省",
            "pid": "0",
            "create_time": "1482291191",
            "type": "1",
            "token": "aeacb1b60ffcf0f120e8e9164d1c10f7",
            "status": "0",
            "child": [
                {
                    "id": "2",
                    "name": "张家口市",
                    "pid": "1",
                    "create_time": "1482291211",
                    "type": "2",
                    "token": "aeacb1b60ffcf0f120e8e9164d1c10f7",
                    "status": "0",
                    "child": [
                        {
                            "id": "4",
                            "name": "赤城县",
                            "pid": "2",
                            "create_time": "1482291253",
                            "type": "3",
                            "token": "aeacb1b60ffcf0f120e8e9164d1c10f7",
                            "status": "0",
                            "child": [
                                {
                                    "id": "5",
                                    "name": "龙关乡",
                                    "pid": "4",
                                    "create_time": "1482291285",
                                    "type": "4",
                                    "token": "aeacb1b60ffcf0f120e8e9164d1c10f7",
                                    "status": "0"
                                },
                                {
                                    "id": "6",
                                    "name": "后城乡",
                                    "pid": "4",
                                    "create_time": "1482291310",
                                    "type": "4",
                                    "token": "aeacb1b60ffcf0f120e8e9164d1c10f7",
                                    "status": "0"
                                }
                            ]
                        },
                        {
                            "id": "7",
                            "name": "张北县",
                            "pid": "2",
                            "create_time": "1482291341",
                            "type": "3",
                            "token": "aeacb1b60ffcf0f120e8e9164d1c10f7",
                            "status": "0"
                        }
                    ]
                },
                {
                    "id": "3",
                    "name": "石家庄市",
                    "pid": "1",
                    "create_time": "1482291232",
                    "type": "2",
                    "token": "aeacb1b60ffcf0f120e8e9164d1c10f7",
                    "status": "1"
                }
            ]
        },
        {
            "id": "21",
            "name": "北京",
            "pid": "0",
            "create_time": "1482311145",
            "type": "1",
            "token": "aeacb1b60ffcf0f120e8e9164d1c10f7",
            "status": "0",
            "child": [
                {
                    "id": "22",
                    "name": "北京市",
                    "pid": "21",
                    "create_time": "1482311155",
                    "type": "2",
                    "token": "aeacb1b60ffcf0f120e8e9164d1c10f7",
                    "status": "1",
                    "child": [
                        {
                            "id": "23",
                            "name": "海淀区",
                            "pid": "22",
                            "create_time": "1482311218",
                            "type": "3",
                            "token": "aeacb1b60ffcf0f120e8e9164d1c10f7",
                            "status": "0",
                            "child": [
                                {
                                    "id": "24",
                                    "name": "上地",
                                    "pid": "23",
                                    "create_time": "1482311233",
                                    "type": "4",
                                    "token": "aeacb1b60ffcf0f120e8e9164d1c10f7",
                                    "status": "0"
                                },
                                {
                                    "id": "25",
                                    "name": "西二旗",
                                    "pid": "23",
                                    "create_time": "1482311244",
                                    "type": "4",
                                    "token": "aeacb1b60ffcf0f120e8e9164d1c10f7",
                                    "status": "0"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "21",
            "name": "北京1",
            "pid": "0",
            "create_time": "1482311145",
            "type": "1",
            "token": "aeacb1b60ffcf0f120e8e9164d1c10f7",
            "status": "0"
        },
        {
            "id": "21",
            "name": "北京2",
            "pid": "0",
            "create_time": "1482311145",
            "type": "1",
            "token": "aeacb1b60ffcf0f120e8e9164d1c10f7",
            "status": "0"
        },
        {
            "id": "21",
            "name": "北京3",
            "pid": "0",
            "create_time": "1482311145",
            "type": "1",
            "token": "aeacb1b60ffcf0f120e8e9164d1c10f7",
            "status": "0"
        },
        {
            "id": "21",
            "name": "北京4",
            "pid": "0",
            "create_time": "1482311145",
            "type": "1",
            "token": "aeacb1b60ffcf0f120e8e9164d1c10f7",
            "status": "0"
        },
        {
            "id": "21",
            "name": "北京5",
            "pid": "0",
            "create_time": "1482311145",
            "type": "1",
            "token": "aeacb1b60ffcf0f120e8e9164d1c10f7",
            "status": "0"
        },
        {
            "id": "21",
            "name": "北京6",
            "pid": "0",
            "create_time": "1482311145",
            "type": "1",
            "token": "aeacb1b60ffcf0f120e8e9164d1c10f7",
            "status": "0"
        }
    ];
    var firstProvince, firstArea, firstCity, firstCountry;

//渲染省
    function randarProvince() {
        var html = "";
        $.each(addressData, function (i, e) {
            if (i === 0) {
                firstProvince = e.name;
                html += '<li data-lv="0">' + e.name + '</li>';
            } else {
                html += '<li data-lv="0">' + e.name + '</li>';
            }
        });
        return html;
    }

//渲染地区
    function randarArea(nowProvince) {
        var html = "";
        for (var i = 0; i < addressData.length; i++) {
            if (addressData[i].name === nowProvince && addressData[i].child) {
                for (var j = 0; j < addressData[i].child.length; j++) {
                    if (j === 0) {
                        firstArea = addressData[i].child[j].name;
                        html += '<li data-lv="1">' + addressData[i].child[j].name + '</li>';
                    } else {
                        html += '<li data-lv="1">' + addressData[i].child[j].name + '</li>';
                    }
                }
            }
        }
        return html;
    }
    //渲染城市
    function randarCity(nowProvince, nowArea) {
        var html = "";
        for (var i = 0; i < addressData.length; i++) {
            if (addressData[i].name === nowProvince && addressData[i].child) {
                for (var j = 0; j < addressData[i].child.length; j++) {
                    if (addressData[i].child[j].name === nowArea && addressData[i].child[j].child) {
                        for (var k = 0; k < addressData[i].child[j].child.length; k++) {
                            if (k === 0) {
                                firstCity = addressData[i].child[j].child[k].name;
                                html += '<li data-lv="2">' + addressData[i].child[j].child[k].name + '</li>';
                            } else {
                                html += '<li data-lv="2" >' + addressData[i].child[j].child[k].name + '</li>';
                            }
                        }
                    }
                }
            }
        }
        return html;
    }
    //渲染村
    function randarCountry(nowProvince, nowArea, nowCity) {
        var html = "";
        for (var i = 0; i < addressData.length; i++) {
            if (addressData[i].name === nowProvince && addressData[i].child) {
                for (var j = 0; j < addressData[i].child.length; j++) {
                    if (addressData[i].child[j].name === nowArea && addressData[i].child[j].child) {
                        for (var k = 0; k < addressData[i].child[j].child.length; k++) {
                            if (addressData[i].child[j].child[k].name === nowCity && addressData[i].child[j].child[k].child) {
                                for (var l = 0; l < addressData[i].child[j].child[k].child.length; l++) {
                                    if (l === 0) {
                                        html += '<li data-lv="3">' + addressData[i].child[j].child[k].child[l].name + '</li>';
                                    } else {
                                        html += '<li data-lv="3" >' + addressData[i].child[j].child[k].child[l].name + '</li>'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return html;
    }

    //默认渲染第一层
    var provinceWarp = $('.province-warp ul'),
        areaWarp = $('.area-warp ul'),
        cityWarp = $('.city-warp ul'),
        countryWarp = $('.country-warp ul');
    provinceWarp.html(randarProvince());

//点击给对应li添加active
    $('#link-body').on('click', 'li', function () {
        var firstProvince, firstArea, firstCity, firstCountry;
        var actProvince, actArea, actCity, actCountry;
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        //判断点击对象
        if ($(this).attr('data-lv') === "0") {
            actProvince = provinceWarp.find('li.active');
            clearLi(1);
            //清空其他所有的li
            areaWarp.html(randarArea(actProvince.html()));
            actArea = areaWarp.find('li.active');
            cityWarp.html(randarCity(actProvince.html(), actArea.html()));
            actCity = cityWarp.find('li.active');
            countryWarp.html(randarCountry(actProvince.html(), actArea.html(), actCity.html()));
            /*actCountry = countryWarp.find('li.active');*/
            
        } else if ($(this).attr('data-lv') === "1") {
            //点击第二层
            actProvince = provinceWarp.find('li.active');
            clearLi(2);
            actArea = areaWarp.find('li.active');
            cityWarp.html(randarCity(actProvince.html(), actArea.html()));
            actCity = cityWarp.find('li.active');
            countryWarp.html(randarCountry(actProvince.html(), actArea.html(), actCity.html()));
            /*actCountry = countryWarp.find('li.active');*/
        } else if ($(this).attr('data-lv') === "2") {
            //点击第三层
            actProvince = provinceWarp.find('li.active');
            actArea = areaWarp.find('li.active');
            actCity = cityWarp.find('li.active');
            countryWarp.html(randarCountry(actProvince.html(), actArea.html(), actCity.html()));
            /*actCountry = countryWarp.find('li.active');*/
        } else {
            //点击最后一层
            /* actProvince = provinceWarp.find('li.active');
             actArea = areaWarp.find('li.active');
             actCity = cityWarp.find('li.active');
             actCountry = countryWarp.find('li.active');*/
        }
        
    });
    //input点击展开
    var __this = null;
    inputElement.on('click',function(){
        __this = $(this);
        var provinceWarp = $('.province-warp ul'),
            areaWarp = $('.area-warp ul'),
            cityWarp = $('.city-warp ul'),
            countryWarp = $('.country-warp ul');
        provinceWarp.html(randarProvince());
/*
        areaWarp.html(randarArea(firstProvince));
        cityWarp.html(randarCity(firstProvince, firstArea));
        countryWarp.html(randarCountry(firstProvince, firstArea, firstCity));
*/
        $('#four-link-mask').show();
    });
    //点击取消事件
    $("#link-header .close").on('click', function () {
        $('#four-link-mask').hide();
    });
    //点击确认时间
    $("#link-header .sure").on('click', function () {
        if(__this){
            __this.val(nowActive());
        }
        if(callback){
            callback();
        }
        $('#four-link-mask').hide();
        inputElement = null;
        __this = null;
    });
    
    function clearLi(num) {
        if (num === 0) {
            provinceWarp.html("");
            areaWarp.html("");
            cityWarp.html("");
            countryWarp.html("");
        } else if (num === 1) {
            areaWarp.html("");
            cityWarp.html("");
            countryWarp.html("");
        } else if (num === 2) {
            cityWarp.html("");
            countryWarp.html("");
        } else {
            countryWarp.html("");
        }
    }
    
    function nowActive(){
        var actProvinceVal, actAreaVal, actCityVal, actCountryVal;
        actProvinceVal = provinceWarp.find('li.active').html()?provinceWarp.find('li.active').html():"";
        actAreaVal = areaWarp.find('li.active').html()?areaWarp.find('li.active').html():"";
        actCityVal = cityWarp.find('li.active').html()?cityWarp.find('li.active').html():"";
        actCountryVal = countryWarp.find('li.active').html()?countryWarp.find('li.active').html():"";
        var html = actProvinceVal + " " + actAreaVal + " " + actCityVal + " " + actCountryVal;
        return html;
    }
    
}

