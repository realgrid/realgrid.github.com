---
layout: post
title: RealGridJs Basic with 전자정부 프레임워크 & iBatis & MS SQLServer
date: 2015-05-12 00:00:00 +9:00 GMT
categories: Tutorial
course: Project
tags:
    - 전자정부
    - 전자정부 프레임워크
    - ibatis
    - sqlserver
    - egivframe
    - spring
    - tomcat
---
  
### Architectures

* 개발도구: eGovFrame 3.1, Spring 3.2.9.RELEASE
* 웹서버: Windows Server 2008 64bit, IIS 7
* WAS: tomcat 7.0
* 데이터베이스: MS SQLServer 2008 R2
* Table  
    ![](/images/articles/RealGridJS_egovFrame_MyBatis_MSSQLServer-table.gif)

### Introduction


본 가이드는 SQLServer의 특정 테이블에 들어 있는 데이터를 RealGrid가 포함된 웹화면에서 조회, 추가, 수정, 삭제기능을 구현하고 있습니다.



### A New WEB Site


eGovFrame 3.1를 실행 합니다.  
File(파일)메뉴에서 New eGovFrame Web Project 메뉴를 실행 합니다.  
Project name, Group Id, Target Runtime을 설정해주고 새프로젝트를 생성 합니다.  
![](/images/articles/RealGridJS_egovFrame_MyBatis_MSSQLServer-a_new_web_site.gif)

Next를 클릭후 Generate Example창에서 Generate Example을 채크한 다음 Finish를 클릭합니다.  

![](/images/articles/RealGridJS_egovFrame_MyBatis_MSSQLServer-a_new_web_site2.gif)



### Create a Web Page


RealGrid를 장착할 새로운 웹 페이지를 생성 합니다. 새로운 웹 페이지의 이름은 columnGrouping.jsp로 합니다. RealGrid가 위치할 부분에 아래와 같이 코딩 합니다.

![](/images/articles/RealGridJS_egovFrame_MyBatis_MSSQLServer-create_a_web_page.gif)

RealGrid의 core 라이브러리 파일인 realgridjs.js파일을 웹 페이지에 포함 해야 합니다. RealGrid의 Style을 미리 설정해놓은 styles.js파일을 등록합니다. RealGrid의 화면을 구성할 스크립트 파일 ColumnGrouping.js파일을 등록합니다.


### Initialization


GridView와 DataProvider를 매핑하기 위한 변수를 선언하고 RealGrids 객체로 부터 두 객체를 각각 전달 받아 넣어 둡니다.  
setDataProvider()를 호출 하여 GridView에 DataProvider를 연결합니다.  

**ColumnGrouping.js**  

<pre class="prettyprint">
var gridView;
var dataProvider;

window.onload = function () {
    dataProvider = new RealGridJS.LocalDataProvider();
    gridView = new RealGridJS.GridView("realgrid");
    gridView.setDataSource(dataProvider);
};
</pre>

### Add Fields and Columns

RealGrid는 구조적으로 데이터 영역과 뷰 영역이 분리 되어 있습니다. Column은 데이터 영역에서 Field를 표현하는 ViewModel이므로 그리드 위에 Field를 표현하기 위해서는 Column에 대한 정의가 필요합니다.  

DataProvider의 setFields()로 Field를 정의합니다.  
GridView의 setColumns()로 Column을 정의합니다.  

**ColumnGrouping.js**

<pre class="prettyprint">
function setFields(provider) {
    var fields = [{
        fieldName: "id",
        dataType:"number"
    }, {
    	fieldName: "orderId",
        dataType:"number"
    }, {
        fieldName: "customerId"
    }, {
        fieldName: "employeeId",
        dataType:"number"
    }, {
        fieldName: "orderDate",
        dataType: "datetime"
    }, {
        fieldName: "companyName"
    }, {
        fieldName: "country"
    }, {
        fieldName: "phone"
    }, {
        fieldName: "productName"
    }, {
        fieldName: "quantityPerUnit"
    }, {
        fieldName: "quantity",
        dataType: "number"
    }, {
        fieldName: "unitPrice",
        dataType: "number"
    }];
    provider.setFields(fields);
}

function setColumns(grid) {
    var columns = [{
        type: "group",
        name: "GroupOrder",
        orientation: "vertical",
        width: "150",
        header: {
            text: "Order",
            "visible": true
        },
        columns: [{
            type: "group",
            name: "GruopIds",
            width: "200",
            header: {
                text: "IDs",
                visible: true
            },
            columns: [{
                name: "orderId",
                fieldName: "orderId",
                type: "data",
                width: "120",
                styles: {
                    textAlignment: "center"
                },
                header: {
                    text: "Order ID"
                }
            }, {
                name: "employeeId",
                fieldName: "employeeId",
                type: "data",
                width: "80",
                styles: {
                    textAlignment: "center"
                },
                header: {
                    text: "Emp ID"
                }
            }]
        }, {
            name: "orderDate",
            fieldName: "orderDate",
            type: "data",
            width: "130",
            styles: {
                textAlignment: "center"
            },
            header: {
                text: "Order Date"
            }
        }]
    }, {
        type: "group",
        name: "GroupCustomer",
        width: "260",
        header: {
            text: "Customer"
        },
        columns: [{
            name: "companyName",
            fieldName: "companyName",
            type: "data",
            width: "200",
            styles: {
                textAlignment: "near"
            },
            header: {
                text: "Company"
            }
        }, {
            type: "group",
            name: "GroupCompany",
            width: "150",
            orientation: "vertical",
            header: {
                text: "Company"
            },
            columns: [{
                name: "customerId",
                fieldName: "customerId",
                type: "data",
                width: "100",
                styles: {
                    textAlignment: "center"
                },
                header: {
                    text: "ID"
                }
            }, {
                name: "country",
                fieldName: "country",
                width: "100",
                styles: {
                    textAlignment: "center"
                },
                header: {
                    text: "Country"
                }
            }, {
                name: "phone",
                fieldName: "phone",
                width: "100",
                styles: {
                    textAlignment: "center"
                },
                header: {
                    text: "Phone"
                }
            }]
        }]
    }, {
        name: "productName",
        fieldName: "productName",
        width: "130",
        mergeRule: {
            criteria: "value"
        },
        styles: {
            textAlignment: "near"
        },
        header: {
            text: "Product"
        }
    }, {
        type: "group",
        name: "GroupSales",
        width: "240",
        header: {
            text: "Sales"
        },
        columns: [{
            name: "unit",
            fieldName: "quantityPerUnit",
            width: "150",
            styles: {
                textAlignment: "near"
            },
            header: {
                text: "Unit"
            }
        }, {
            name: "quantity",
            fieldName: "quantity",
            width: "100",
            styles: {
                numberFormat: "#,##0",
                textAlignment: "far",
                paddingRight: 5,
                fontFamily: "Arial",
                fontSize: 11,
                fontBold: true
            },
            header: {
                text: "quantity"
            },
            footer: {
                expression: "sum",
                groupExpression: "sum",
                styles: {
                    textAlignment: "far",
                    numberFormat: "#,##0"
                }
            }
        }, {
            name: "unitPrice",
            fieldName: "unitPrice",
            width: "100",
            styles: {
                numberFormat: "#,##0.0",
                textAlignment: "far",
                paddingRight: 5
            },
            header: {
                text: "Unit Price"
            },
            mergeRule: {
                criteria: "value"
            },
            footer: {
                expression: "sum",
                groupExpression: "sum",
                styles: {
                    textAlignment: "far",
                    numberFormat: "#,##0.0",
                    suffix: "$"
                }
            }
        }]
    }];

    grid.setColumns(columns);
}
</pre>



### SetStyles


RealGrid Style은 화면 표시를 효과적이고 융통성있게 관리하기 위한 방법입니다. 그리드는 몇 개의 영역으로 구분되어 있으며 각 영역은 셀로 채워져 있습니다. 예를 들어 인디케이터영역은 인디케이터 셀로 구성되고, 각 데이터행은 데이터 셀들로 채워집니다. 종류별 셀을 화면에 그리는 것이 셀 Renderer인데 이 렌더러가 각 영역의 스타일셋에 지정된 그리기 속성들을 사용하게 됩니다.
스타일에 관한 자세한 내용은 [Styles](http://demo.realgrid.com/Demo/StylesConcept)페이지를 참조해 주세요.


include한 styles.js에 그리드 스타일 속성값을 정의한 styles변수를 setStyles함수의 파라메타로 지정합니다.  

<pre class="prettyprint">
function setStyles(grid){
	grid.setStyles(styles);
}
</pre>



### SetOptions


Panel을 숨기기 위해 visible을 false로 설정합니다.

<pre class="prettyprint">
function setOptions(grid) {
    grid.setOptions({
        panel: {
            visible: false
        }
    });
}
</pre>


이제 필드와 컬럼,스타일,옵션 정의한 부분을 RealGrid가 로드된 시점에 호출 해 보도록 하겠습니다.

<pre class="prettyprint">
window.onload = function () {
    dataProvider = new RealGridJS.LocalDataProvider();
    gridView = new RealGridJS.GridView("realgrid");
    gridView.setDataSource(dataProvider);
    
    setFields(dataProvider);
    setColumns(gridView);
    
    setStyles(gridView);
    setOptions(girdView);
};
</pre>

이제 웹 페이지를 실행해 보면 그리드에 컬럼이 추가된 모습을 확인 할 수 있습니다.

![](/images/articles/RealGridJS_egovFrame_MyBatis_MSSQLServer-add_fields_and_columns.gif)



### Connecting a Database


Ms SQLServer와 연결하기위한 sqljdbc4.jar파일을 lib 폴더에 넣어줍니다.  

![](/images/articles/RealGridJS_egovFrame_MyBatis_MSSQLServer-connecting_a_database.gif)

먼저 DB정보를 받고 넘겨줄 CustomerOrders빈을 egovframework.example.sample.service 패키지에 생성합니다.  

**CostomerOrders.java**  

<pre class="prettyprint">
package egovframework.example.sample.service;

public class CustomerOrders {

    private int id;
    private ing orderId;
    private String customerId;
    private int employeeId;
    private String orderDate;
    private String companyName;
    private String country;
    private String phone;
    private String productName;
    private String quantityPerUnit;
    private int quantity;
    private int unitPrice;
    private String state;

    public int getOrderId() {
        return orderId;
    }
    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }
    public String getCustomerId() {
        return customerId;
    }
    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }
}
</pre>


### @Repository


퍼시스턴스 계층에 사용할 egovframework.example.sample.service.impl 패키지에 있는 SampleDAO를 수정합니다.

<pre class="prettyprint">
public List&lt;?&gt; selectCustomerOrdersList() throws Exception{
    return list("sampleDAO.selectCustomerOrdersList");
}
</pre>

src-main-resources-egovframework-sqlmap-example-sample    
폴더에 있는 EgovSample_Sample_SQL.xml 파일에 쿼리를 등록합니다.

**select**  

<pre class="prettyprint">
&lt;select id="sampleDAO.selectCustomerOrdersList" resultClass="egovMap"&gt;
    SELECT
        Id                                  AS id
       ,OrderId                             AS orderId 
       ,CustomerId                          AS customerId
       ,EmployeeId                          AS employeeId
       ,CONVERT(CHAR(10), OrderDate, 23)    AS orderDate
       ,CompanyName                         AS companyName
       ,Country                             AS country
       ,Phone                               AS phone
       ,ProductName                         AS productName
       ,QuantityPerUnit                     quantityPerUnit
       ,Quantity                            quantity
       ,UnitPrice                           unitPrice
    FROM demo.CustomerOrders
&lt;/select&gt;
</pre>

pom.xml에 Json형태의 데이터를 주고받기 위해 jackson-lib를 선언해야 합니다.

<pre class="prettyprint">
&lt;dependency&gt;
    &lt;groupId&gt;net.sf.json-lib&lt;/groupId&gt;
    &lt;artifactId&gt;json-lib&lt;/artifactId&gt;
    &lt;version&gt;2.4&lt;/version&gt;
    &lt;classifier&gt;jdk15&lt;/classifier&gt;
&lt;/dependency&gt;
</pre>

src/main/resources/egovframework/spring/폴더
context-datasource.xml 파일에 Mssql DB 접속정보를 등록합니다.

<pre class="prettyprint">
&lt;bean id="dataSource" class="org.apache.tomcat.dbcp.dbcp.BasicDataSource"&gt;
    &lt;property name="driverClassName" value="com.microsoft.sqlserver.jdbc.SQLServerDriver"/&gt;
    &lt;property name="url" value="jdbc:sqlserver://;DatabaseName=WRW_DB"/&gt;
    &lt;property name="username" value=""/&gt;
    &lt;property name="password" value=""/&gt;
&lt;/bean&gt;
</pre>

### @Service

서비스 계층에서 사용할  
egovframework.example.sample.service 패키지에 interface EgovSampleService,  
egovframework.example.sample.service.impl 패키지에 class EgovSampleServiceImpl  
을 수정합니다.  

**EgovSampleService**

<pre class="prettyprint">
List&lt;?&gt; selectCustomerOrdersList() throws Exception;
</pre>

**EgovSampleServiceImpl**

<pre class="prettyprint">
public List&lt;?&gt; selectCustomerOrdersList() throws Exception{
    return sampleDAO.selectCustomerOrdersList();
}
</pre>

### ＠Controller

<pre class="prettyprint">
＠RequestMapping("/columnGrouping.do")
public String getCustomerOrders(ModelMap model) throws Exception{
    List&lt;?&gt; sampleList = sampleService.selectCustomerOrdersList();
    if(sampleList.size() > 0){
        JSONArry jArr = JSONArray.fromObject(sampleList);
        model.addAttribute("resultJson", jArr);
    }
    return "realgrid/columnGrouping";
}
</pre>

### Load Data

RealGrid가 데이터를 가져오는 방법은 여러가지가 있습니다. 본 자습서에는 DataProvider의 setRows()를 이용해 데이터를 가져오는 방법에 대해 설명합니다.   
먼저 columnGrouping.jsp 페이지에 서버에서 등록한 Attribute의 값을 가져오기 위해 다음 소스를 추가합니다.  

<pre class="prettyprint">
&lt;head>
    &lt;meta http-equiv="Content-Type" content="text/html; charset=utf8" /&gt;
    &lt;title>Column Grouping&lt;/title&gt;
    &lt;script type="text/javascript"&gt;
        var resultJson = &lt;%=request.getAttribute("resultJson")%&gt;;
    &lt;/script&gt;
    &lt;script src="scripts/dlgrids_200.js"&gt;&lt;/script&gt;
    &lt;script src="scripts/realgridjs.js"&gt;&lt;/script&gt;
</pre>

다시 한번 window의 onload이벤트에서 loadData(dataProvider)함수를 호출하여 데이터를 RealGrid에 로드해 보도록 하겠습니다.

<pre class="prettyprint">
window.onload = function() {
    dataProvider = new RealGridJS.LocalDataProvider();
    gridView = new RealGridJS.GridView("realgrid");
    gridView.setDataSource(dataProvider);
    
    setFields(dataProvider);
    setColumns(gridView);
    
    setStyles(gridView);
    setOption(gridView);
    
    loadData(dataProvider);
}

function loadData(provider) {
    var jArr = resultJson;
    dataProvider.setRows(jArr);
}
</pre>

이제 웹 사이트를 실행 하면 그리드에 데이터베이스에서 가져온 데이터가 로드되는 모습을 확인 할 수 있습니다.

![](/images/articles/RealGridJS_egovFrame_MyBatis_MSSQLServer-load_data.gif)

### Insert Data

 그리드에 새로운 행을 만들기 위해 다음과 같은 버튼을 생성합니다.

 **columnGrouping.jsp**
 
<pre class="prettyprint">
&lt;body&gt;
	&lt;div id="realgrid" style="height: 500px; width: 900px;"&gt;&lt;/div&gt;
	&lt;div&gt;
		&lt;form name="jsonDataForm" method="post"&gt;
			&lt;input type="button" id="btnInsert" onclick="btnInsertClick()" value="Insert" /&gt; 
		&lt;/form&gt;
	&lt;/div&gt;
&lt;/body&gt;
</pre>
 
DataProvider.insertRow(row, values)함수를 사용해 새로운 행을 생성합니다.
테스트의 편의성을 위해 미리 입력할 값을 values에 설정하였습니다.
빈 Array([])로 설정하면 아무런 값도 입력되지 않은 행이 생성 됩니다.
 
 **ColumnGrouping.js**
 
<pre class="prettyprint">
function btnInsertClick(){
    dataProvider.insertRow(0,[ ,10000,"test1",111,"2014-11-11","test2","test3","test4","test5",test6",222,333]);
}
</pre>
 
웹 페이지를 실행하여, 인서트버튼을 클릭하여 정상적으로 Insert가 되는지 확인 합니다.  
행 추가후 stateBar 영역이 어떻게 바뀌었는지 확인해보세요.  

![](/images/articles/RealGridJS_egovFrame_MyBatis_MSSQLServer-insert_data.gif)

>※ RealGridJS 의 RowStates  
>RealGridJS 의 RowState는 5가지의 상태가 있으며  NONE, CREATED, UPDATED, DELETED, CREATE_AND_DELETED로 구분됩니다.  
 
### Update Data

수정은 별도의 버튼이 필요하지 않고 저장시에만 이 데이터가 수정되었는지 확인하면 됩니다.  
RealGridJS는 데이터가 수정되면 RowState를 UPDATED로 변경합니다.

그리드에서 편집된 데이터는 그리드에만 존재하며 편집 완료시에만 dataProvider로 반영됩니다.  
편집 완료는 행 바꿈이나 RealGrids.commit() 메소드를 호출 하여 편집 완료를 시킬 수 있습니다.

기존에 입력되어 있는 데이터를 수정하여 편집완료(행 바꿈 or commit()) 시킨 후 statusBar 영역이 어떻게 바뀌었는지 확인해보세요. 

![](/images/articles/RealGridJS_egovFrame_MyBatis_MSSQLServer-update_data.gif)

### Delete Data

그리드의 행을 삭제 하기위해 다음과 같은 버튼을 생성합니다.  

**columnGrouping.jsp**

<pre class="prettyprint">
&lt;body&gt;  
	&lt;div id="realgrid" style="height: 500px; width: 900px;"&gt;&lt;/div&gt;  
	&lt;div&gt;  
		&lt;form name="jsonDataForm" method="post"&gt;  
			&lt;input type="button" id="btnInsert" onclick="btnInsertClick()" value="Insert" /&gt;  
    			&lt;input type="button" id="btnDel" onclick="btnDelClick()" value="Delete" /&gt;  
		&lt;/form&gt;  
	&lt;/div&gt;  
</pre>

btnDellClick()함수를 다음과 같이 설정합니다.
        
 **ColumnGrouping.js**
 
<pre class="prettyprint">
function btnDelClick(){
    if(confirm("선택한 행을 삭제하시겠습니까?") == true){
        var curRow = gridView.getCurrent().dataRow;
        dataProvider.setRowState(curRow, "deleted");
    }else{
        return false;
    }
}
</pre>

자료를 조회 후 Delete 버튼을를 클릭하여 삭제 상태로 바꾼 후 statusBar 영역이 어떻게 바뀌었는지 확인해보세요.
 
![](/images/articles/RealGridJS_egovFrame_MyBatis_MSSQLServer-delete_data.gif)

### Save Data

지금부터는 RealGrid+를 사용하여 INSERT, UPDATE, DELETE를 트랙젝션으로 묶어서 처리하는 방법으로 해보도록 하겠습니다.  
columnGrouping.jsp에 form 태그를 추가하고 다음과 같이 textbox와 button을 추가합니다.  

**columnGrouping.jsp**

<pre class="prettyprint">
&lt;div id="realgrid" style="height: 500px; width: 900px;"&gt;&lt;/div&gt;
&lt;div&gt;
	&lt;form name="jsonDataForm" method="post"&gt;
		&lt;input type="button" id="btnInsert" onclick="btnInsertClick()" value="Insert" /&gt;
        &lt;input type="button" id="btnDel" onclick="btnDelClick()" value="Delete" /&gt;
        &lt;input type="text" id="txtJson" name="txtJson" style="display: none" /&gt; 
		&lt;input type="button" id="btnSave" onclick="btnSaveClick()" value="Save" /&gt;
	&lt;/form&gt;
&lt;/div&gt;
</pre>

본 예제는 Jquery를 사용하지 않고 Javascript만으로 구현하기 위해 form 태그를 이용하였습니다.  
Jquery Ajax를 이용하면 더욱 쉽고 편리한 구현이 가능합니다.  

btnSaveClick함수는 다음과 같이 설정합니다.  

**columnGrouping.js**

<pre class="prettyprint">
function btnSaveClick(){
    gridView.commit();

    var jData;
    var jRowsData = [];

    var rows = dataProvider.getAllStateRows();

    if(rows.updatad.length > 0){
        for(var i=0; i < rows.updated.length; i++){
            jData = dataProvider.getJsonRow(rows.updated[i]);
            jData.state = "updated";
            jRowsData.push(jData);
        };
    }

    if(rows.deleted.length > 0){
        for(var i=0; i < rows.deleted.length; i ++){
            jData = dataProvider.getJsonRow(rows.deleted[i]);
            jData.state = "deleted";
            jRowsData.push(jData);
        };
    }

    if(rows.created.length > 0){
        for(var i=0; i < rows.created.length; i++){
            jData = dataProvider.getJsonRow(rows.created[i]);
            jData.state = "created";
            jRowsData.push(jData);
        };
    }

    if(jRowsData.length == 0){
        dataProvider.clearRowStates(true);
        return;
    }

    document.getElementById("txtJson").value= JSON.stringify(jRowsData);
    var frm = document.jsonDataForm;
    if(!frm){
        return false;
    }else{
        frm.actioin = "cgSaveData.do";
        frm.submit();
    }
}
</pre>
위와 같이 삭제와 동시에 DB에 데이터도 같이 삭제하는 방법이 아닌  
State를 이용하여 삭제 하였을 때 DB에서는 삭제가 됐지만 그리드에는 데이터가 남아 있습니다.  
 
이 경우 RealGrids.clearRowStates()의 파라메터를 true로 주시면 해결하실 수 있습니다.  
해당 파라메터의 기능은 RowState를 Clear할때 RowState가 DELETE인것은 Row를 삭제하는 기능입니다.  

먼저 만든 Controller,Service,Repository에 Save를 실행할 소스를 추가합니다.  

**@Controller**

<pre class="prettyprint">
＠RequestMapping(value="/cgSaveData.do")
public String allCgSave(＠RequestParam("txtJson") String coStringList, Model model) throws Exception{
    coStringList = coStringList.replaceAll("&quot;", "\"");
    List&lt;CustomerOrders&gt; coList = new ArryList&lt;CustomerOrders&gt;();
    JSONArray cusJson = JSONArry.fromObject(JSONSerializer.toJSON(coStringList));

    for(int i = 0; i < cusJson.size(); i++){
        CustomerOrders co = (CustomerOrders)JSONObject.toBean(cusJson.getJSONObject(i), CustomerOrders.class);
        coList.add(co);
    }

    int result = sampleService.addAllCustomerOrders(coList);
    model.addAttribute("resultCgSave", result);
    return "forward:/columnGrouping.do";
}
</pre>

**@Service**  

**EgovSampleService**

<pre class="prettyprint">
List&lt;?&gt; selectCustomerOrdersList() throws Exception;
int addAllCustomerOrders(List&lt;CustomerOrders&gt; coList) throws Exception;
</pre>

**EgovSampleServiceImpl**

<pre class="prettyprint">
public List&lt;?&gt; selectCustomerOrdersList() throws Exception{
    return sampleDAO.selectCustomerOrdersList();
}

＠Transactional
public int addAllCustomerOrdersList(List&lt;CustomerOrders&gt; coList) throws Exception{
    int num = 0;
    String str = "";
    for(CustomerOrders co : coList){
        if(co.getState() != null && co.getState().equals("created")){
            str = sampleDAO.addCustomerOrders(co);
            if(str == null || !str.isEmpty())
                num++;
            str = "";
        }
        else if(co.getState() != null && co.getState().equals("updated"))
            num += sampleDAO.updateCustomerOrders(co);
        else if(co.getState() != null && co.getState().equals("deleted"))
            num += sampleDAO.delCustomerOrder(co.getId());
    }
    return num;
}
</pre>


**@Repository**

<pre class="prettyprint">
public List<?> selectCustomerOrdersList() throws Exception{
    return list("sampleDAO.selectCustomerOrdersList");
}

public String addCustomerOrders(CustomerOrders co) throws Exception{
    return (string) insert("sampleDAO.insertCustomerOrders", co);
}

public int updateCustomerOrders(CustomerOrders co) throws Exception{
    return update("sampleDAO.updateCustomerOrders", co);
}

public int delCustomerOrders(int id) throws Exception{
    return delete("sampleDAO.delCustomerOrders", id);
}
</pre>

**iBatis**  

**Insert**

<pre class="prettyprint">
&lt;insert id="sampleDAO.insertCustomerOrders" parameterClass="egovframewrok.example.sample.service.CustomerOrders"&gt;
    &lt;![CDATA[
        INSERT INTO demo.CustomerOrders
            (   OrderId
               ,OrderDate
               ,CustomerId
               ,EmployeeId
               ,CompanyName
               ,Country
               ,Phone
               ,ProductName
               ,QuantityPerUnit
               ,Quantity
               ,UnitPrice
               )
        VALUES( #orderId#
               ,#orderDate#
               ,#customerId#
               ,#employeeId#
               ,#companyName#
               ,#country#
               ,#phone#
               ,#productName#
               ,#quantityPerUnit#
               ,#quantity#
               ,#unitPrice#
               )
    ]]&gt;
&lt;/insert&gt;
</pre>

**Update**

<pre class="prettyprint">
&lt;update id="sampleDAO.updateCustomerOrders" parameterClass="egovframework.example.sample.service.CustomerOrders"&gt;
    &lt;![CDATA[
        UPDATE demo.CustomerOrders
        SET OrderId = #orderId#
            ,CustomerId     = #customerId#
            ,EmployeeId     = #employeeId#
            ,OrderDate      = #orderDate#
            ,CompanyName    = #companyName#
            ,Country        = #country#
            ,Phone          = #phone#
            ,ProductName    = #productName#
            ,QuantityPerUnit    = #quantityPerUnit#
            ,Quantity       = #quantity#
            ,UnitPrice      = #unitPrice#
        WHERE Id=#id#
    ]]&gt;
&lt;/update&gt;
</pre>}

**Delete**

<pre class="prettyprint">
&lt;delete id="sampleDAO.delCustomerOrders" parameterClass="int"&gt;
DELETE demo.CustomerOrders
WHERE Id=#id#
&lt;/delete&gt;
</pre>
이제 소스가 정상적으로 동작하는지 확인해 보겠습니다.  
먼저 Header에 Order ID를 클릭하여 정렬합니다.  
그리고 Insert버튼으로 새로운 행을 추가 하고 추가한 아래행의 데이터를 수정합니다.  

Delete역시 제대로 삭제 되었는지 확인하기 위해 삭제할 행의 Data를 “delete”로 변경하였습니다.  
![](/images/articles/RealGridJS_egovFrame_MyBatis_MSSQLServer-ibatis.gif)

이제 Save버튼을 누른후 다시 Order ID로 정렬하면 데이터가 잘 변경 되었음을 확인할 수 있습니다.
![](/images/articles/RealGridJS_egovFrame_MyBatis_MSSQLServer-ibatis2.gif)
