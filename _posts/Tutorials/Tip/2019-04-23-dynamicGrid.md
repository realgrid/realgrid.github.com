---
layout: tutopost
title: 모바일 화면 크기에 따른 동적 컬럼 구성.  
date: 2019-04-23 09:00:00 +9:00 GMT
permalink: /tip/dynamicGrid/
categories: Tutorial
course:
  - Tip
tags: 
  - 모바일 화면 
  - dynamicColumn
  - MobileView
---
   
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<title>Mobile View</title>
<style>
    {margin: 0; padding: 0;}
    #area1 {height:100vh;}
</style>
<script type="text/javascript" src="/script/realgridjs-lic.js"></script>
<script type="text/javascript" src="/script/realgridjs_eval.1.1.27.min.js"></script>
<script type="text/javascript" src="/script/realgridjs-api.1.1.27.js"></script>
<script src="/script/jszip.min.js"></script>
<script src="/script/jquery-1.11.2.min.js"></script>

<script type="text/javascript">

    var gridView;
    var dataProvider;

    window.onload = function () {
        console.log("==> RealGrid loaded.");

        var columns2 = [{
            "name": "group1",
            "type": "group",
            "width": 550,
            "header": { "visible": false },
            "orientation": "vertical",
            "columns": [{            
            "name": "group11",
            "type": "group",
            "width": 480,
            "header": { "visible": false },
            "columns": [{
                "fieldName": "userid",
                "name": "userid",
                "width": 80,
                "header": { "text": "사용자 Id" },
                "styles": { "textAlignment": "near", "font": "Tahoma" }
            }, {
                "fieldName": "company",
                "name": "company",
                "width": 80,
                "header": { "text": "회사" },
                "styles": { "textAlignment": "near", "font": "Tahoma" }
            }, {
                "fieldName": "first_name",
                "name": "first_name",
                "width": 80,
                "header": { "text": "이름" },
                "styles": { "textAlignment": "near", "font": "Tahoma" }
            }, {
                "fieldName": "last_name",
                "name": "last_name",
                "width": 80,
                "header": { "text": "성" },
                "styles": { "textAlignment": "near", "font": "Tahoma" }
            }, {
                "fieldName": "gender",
                "name": "gender",
                "width": 80,
                "header": { "text": "성별" },
                "styles": { "textAlignment": "center", "font": "Tahoma" }
            }, {
                "fieldName": "email",
                "name": "email",
                "width": 80,
                "header": { "text": "E-Mail" },
                "styles": { "textAlignment": "near", "font": "Tahoma" }
            }]
            }, {
                "name": "group12",
                "type": "group",
                "width": 480,
                "header": { "visible": false },
                "columns": [{
                    "fieldName": "city",
                    "name": "city",
                    "width": 80,
                    "header": { "text": "시" },
                    "styles": { "textAlignment": "near", "font": "Tahoma" }             
                }, {
                    "fieldName": "ip_address",
                    "name": "ip_address",
                    "width": 80,
                    "header": { "text": "IP Address" },
                    "styles": { "textAlignment": "near", "font": "Tahoma" }
                }, {
                    "fieldName": "birthday",
                    "name": "birthday",
                    "width": 80,
                    "header": { "text": "생년월일" },
                    "styles": {
                        "textAlignment": "center",
                        "font": "Tahoma",
                        "datetimeFormat": "yyyy/MM/dd"
                    }
                }, {
                    "fieldName": "pay",
                    "name": "pay",
                    "width": 80,
                    "header": { "text": "급여" },
                    "editor": {
                        "type": "number"
                    },
                    "styles": {
                        "textAlignment": "far", 
                        "font": "Tahoma"
                    }           
                }, {
                    "fieldName": "card_number",
                    "name": "card_number",
                    "width": 80,
                    "header": { "text": "신용카드" },
                    "styles": { "textAlignment": "near", "font": "Tahoma" }
                }, {
                    "fieldName": "card_type",
                    "name": "card_type",
                    "width": 80,
                    "header": { "text": "카드종류" },
                    "styles": { "textAlignment": "near", "font": "Tahoma" }
                }]
            }]
        }];

        var columns3 = [{
            "name": "group1",
            "type": "group",
            "width": 240,
            "header": { "visible": false },
            "orientation": "vertical",
            "columns": [{
                "name": "group21",
                "type": "group",
                "width": 240,
                "header": { "visible": false },
                "columns": [{
                    "fieldName": "userid",
                    "name": "userid",
                    "width": 80,
                    "header": { "text": "사용자 Id" },
                    "styles": { "textAlignment": "center", "font": "Tahoma" }
                }, {
                    "fieldName": "company",
                    "name": "company",
                    "width": 80,
                    "header": { "text": "회사" },
                    "styles": { "textAlignment": "center", "font": "Tahoma" }
                }, {
                    "fieldName": "first_name",
                    "name": "first_name",
                    "width": 80,
                    "header": { "text": "이름" },
                    "styles": { "textAlignment": "center", "font": "Tahoma" }
                }],
            }, {
                "name": "group22",
                "type": "group",
                "width": 240,
                "header": { "visible": false },
                "columns": [{
                    "fieldName": "last_name",
                    "name": "last_name",
                    "width": 80,
                    "header": { "text": "성" },
                    "styles": { "textAlignment": "center", "font": "Tahoma" }
                }, {
                    "fieldName": "gender",
                    "name": "gender",
                    "width": 80,
                    "header": { "text": "성별" },
                    "styles": { "textAlignment": "center", "font": "Tahoma" }
                }, {
                    "fieldName": "email",
                    "name": "email",
                    "width": 80,
                    "header": { "text": "E-Mail" },
                    "styles": { "textAlignment": "center", "font": "Tahoma" }
                }]
            }, {
                "name": "group23",
                "type": "group",
                "width": 480,
                "header": { "visible": false },
                "columns": [{
                    "fieldName": "city",
                    "name": "city",
                    "width": 80,
                    "header": { "text": "시" },
                    "styles": { "textAlignment": "center", "font": "Tahoma" }               
                }, {
                    "fieldName": "ip_address",
                    "name": "ip_address",
                    "width": 80,
                    "header": { "text": "IP Address" },
                    "styles": { "textAlignment": "center", "font": "Tahoma" }
                }, {
                    "fieldName": "birthday",
                    "name": "birthday",
                    "width": 80,
                    "header": { "text": "생년월일" },
                    "styles": {
                        "textAlignment": "center",
                        "font": "Tahoma",
                        "datetimeFormat": "yyyy/MM/dd"
                    }
                }]
            }, {
                "name": "group24",
                "type": "group",
                "width": 480,
                "header": { "visible": false },
                "columns": [{
                    "fieldName": "pay",
                    "name": "pay",
                    "width": 80,
                    "header": { "text": "급여" },
                    "editor": {
                        "type": "number"
                    },
                    "styles": {
                        "textAlignment": "center",  
                        "font": "Tahoma"
                    }           
                }, {
                    "fieldName": "card_number",
                    "name": "card_number",
                    "width": 80,
                    "header": { "text": "신용카드" },
                    "styles": { "textAlignment": "center", "font": "Tahoma" }
                }, {
                    "fieldName": "card_type",
                    "name": "card_type",
                    "width": 80,
                    "header": { "text": "카드종류" },
                    "styles": { "textAlignment": "center", "font": "Tahoma" }
                }]
            }]
        }];

        RealGridJS.setRootContext("/scripts");
        dataProvider = new RealGridJS.LocalDataProvider();
        gridView = new RealGridJS.GridView("realgrid");
        gridView.setDataSource(dataProvider);

        setFields(dataProvider);
        setColumns(gridView);
        setOptions(gridView);

        gridView.linearizeColumns();
            
        loadData(dataProvider);

        var width = $("#realgrid").width();

        if (width > 1000) {
            gridView.linearizeColumns();
        } else if (width > 600) { 
            gridView.setColumns(columns2);
        } else {
            gridView.setColumns(columns3);
        }

        $(window).resize(function () {
            var width = $("#realgrid").width();

            if (width > 1000) {
                gridView.linearizeColumns();
            } else if (width > 600) { 
                gridView.setColumns(columns2);
            } else {
                gridView.setColumns(columns3);
            }
        });
    };
    
    function setFields(provider) {
        var fields = [{
            "fieldName": "id"
        }, {
            "fieldName": "userid"
        }, {
            "fieldName": "company"
        }, {
            "fieldName": "first_name"
        }, {
            "fieldName": "last_name"
        }, {
            "fieldName": "gender"
        }, {
            "fieldName": "email"
        }, {
            "fieldName": "city"
        }, {
            "fieldName": "ip_address"
        }, {
            "fieldName": "birthday"
        }, {
            "fieldName": "pay",
            "dataType": "number"
        }, {
            "fieldName": "card_number"
        }, {
            "fieldName": "card_type"
        }]      
        provider.setFields(fields);
    };
    
    function setColumns(grid) {

        var columns = [{
            "name": "group1",
            "type": "group",
            "width": 240,
            "header": { "visible": false },
            "orientation": "vertical",
            "columns": [{
                "name": "group21",
                "type": "group",
                "width": 240,
                "header": { "visible": false },
                "columns": [{
                    "fieldName": "userid",
                    "name": "userid",
                    "width": 80,
                    "header": { "text": "사용자 Id" },
                    "styles": { "textAlignment": "center", "font": "Tahoma" }
                }, {
                    "fieldName": "company",
                    "name": "company",
                    "width": 80,
                    "header": { "text": "회사" },
                    "styles": { "textAlignment": "center", "font": "Tahoma" }
                }, {
                    "fieldName": "first_name",
                    "name": "first_name",
                    "width": 80,
                    "header": { "text": "이름" },
                    "styles": { "textAlignment": "center", "font": "Tahoma" }
                }],
            }, {
                "name": "group22",
                "type": "group",
                "width": 240,
                "header": { "visible": false },
                "columns": [{
                    "fieldName": "last_name",
                    "name": "last_name",
                    "width": 80,
                    "header": { "text": "성" },
                    "styles": { "textAlignment": "center", "font": "Tahoma" }
                }, {
                    "fieldName": "gender",
                    "name": "gender",
                    "width": 80,
                    "header": { "text": "성별" },
                    "styles": { "textAlignment": "center", "font": "Tahoma" }
                }, {
                    "fieldName": "email",
                    "name": "email",
                    "width": 80,
                    "header": { "text": "E-Mail" },
                    "styles": { "textAlignment": "center", "font": "Tahoma" }
                }]
            }, {
                "name": "group23",
                "type": "group",
                "width": 480,
                "header": { "visible": false },
                "columns": [{
                    "fieldName": "city",
                    "name": "city",
                    "width": 80,
                    "header": { "text": "시" },
                    "styles": { "textAlignment": "center", "font": "Tahoma" }               
                }, {
                    "fieldName": "ip_address",
                    "name": "ip_address",
                    "width": 80,
                    "header": { "text": "IP Address" },
                    "styles": { "textAlignment": "center", "font": "Tahoma" }
                }, {
                    "fieldName": "birthday",
                    "name": "birthday",
                    "width": 80,
                    "header": { "text": "생년월일" },
                    "styles": {
                        "textAlignment": "center",
                        "font": "Tahoma",
                        "datetimeFormat": "yyyy/MM/dd"
                    }
                }]
            }, {
                "name": "group24",
                "type": "group",
                "width": 480,
                "header": { "visible": false },
                "columns": [{
                    "fieldName": "pay",
                    "name": "pay",
                    "width": 80,
                    "header": { "text": "급여" },
                    "editor": {
                        "type": "number"
                    },
                    "styles": {
                        "textAlignment": "center",  
                        "font": "Tahoma"
                    }           
                }, {
                    "fieldName": "card_number",
                    "name": "card_number",
                    "width": 80,
                    "header": { "text": "신용카드" },
                    "styles": { "textAlignment": "center", "font": "Tahoma" }
                }, {
                    "fieldName": "card_type",
                    "name": "card_type",
                    "width": 80,
                    "header": { "text": "카드종류" },
                    "styles": { "textAlignment": "center", "font": "Tahoma" }
                }]
            }]
        }];

        grid.setColumns(columns);
    }       
            

    function setOptions(grid) {
        grid.setOptions({
            stateBar: {
                visible: false
            },
            checkBar: {
                visible: false
            },
            select: {
                style: RealGridJS.SelectionStyle.ROWS
            },
            footer: {
                visible: true
            },
            display: {
                fitStyle: "even"
            }
        });
    }
    
    
    function loadData(provider) {

        $.ajax({
            url: "/demoData/defaultdemodata.json?__time__=" + new Date().getTime(),
            success: function (data) {
                dataProvider.fillJsonData(data, {});
            },
            error: function (xhr, status, error) {
            },
            complete: function (data) {
                gridView.setFocus();
            },
            xhr: function () {
                var xhr = new window.XMLHttpRequest();
                //Download progress
                xhr.addEventListener("progress", function (evt) {
                    if (evt.lengthComputable) {
                        gridView.setProgress(0, evt.total, evt.loaded);
                    }
                }, false);
                return xhr;
            }
        });
    }
    

    
///////////////////////////////////////////////////////////////////////////////

</script>
</head>
<body>
    <section id = "area1"> 
    <div id="realgrid" style="width: 95%; height: 88%"></div>
    </section>
</body>
</html>