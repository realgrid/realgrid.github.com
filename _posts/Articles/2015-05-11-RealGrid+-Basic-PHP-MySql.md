---
layout: post
title: RealGrid+ Basic with PHP & MySQL
date: 2015-05-11 23:14:09
categories: article
course: 기초과정
---

### 개발도구 및 사용기술
* 개발언어: PHP 5.2.12
* 웹서버: Apache 2.2.14
* 데이터베이스: MySQL 5.1.39
* Table 
    ![](/images/articles/20150423-table-product.png)

**※ Engine은 트랜젝션을 사용하므로 InnoDB로 설정합니다.**

### Introduction

사실 PHP와 MYSQL의 조합은 웹 개발 플랫폼 구성의 전통적이고 기본적인 조합이라고 할 수 있습니다. 

본 가이드는 MYSQL의 특정 테이블에 들어 있는 데이터를 RealGrid가 포함된 웹화면에서 조회, 추가, 수정, 삭제기능을 구현하고 있습니다.

### Create a Web Page

RealGrid를 장착할 새로운 웹 페이지를 생성 합니다.
새로운 웹 페이지의 이름은 default.html로 합니다.
저장 위치는 apmsetup이 설정된 기본 경로인 “C:\APM_Setup\htdocs\”입니다.

추가된 웹 페이지에 기본적인 HTML코드를 작성 합니다.

###### &lt;default.cshtml&gt;

<pre class="prettyprint">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;RealGrid Sample Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>

### Setup the RealGrid

RealGrid를 설치하는 작업은 어떤 개발환경이나 실행환경에서도 간단히 처리할 수 있습니다. 정식으로 제품을 구매한 경우와 평가판으로 제품을 받은 경우 모두 동일한 방법으로 설치를 진행 할 수 있습니다.

공급받은 제품에 포함된 objects폴더와 scripts폴더를 웹 사이트의 폴더 위치 “C:\APM_Setup\htdocs\” 로 복사합니다.


![setup the RealGrid 1](/images/articles/RealGrid_PHP_MySQL-setup_the_RealGrid.gif)

![setup the RealGrid 2](/images/articles/RealGrid_PHP_MySQL-setup_the_RealGrid2.gif)

RealGrid가 위치할 부분에 object태그를 사용하여 아래와 같이 코딩 합니다.

<pre class="prettyprint">
&lt;body&gt;
&lt;h1&gt;RealGrid on PHP and MySQL&lt;/h1&gt;
&lt;object type="application/x-shockwave-flash" name="grdMain" id="grdMain" data="/objects/RealGridWeb.swf" width="100%" height="300"&gt;
&lt;param name="quality" value="high"&gt;
&lt;param name="wmode" value="opaque"&gt;
&lt;param name="allowscriptaccess" value="sameDomain"&gt;
&lt;param name="allowfullscreen" value="false"&gt;
&lt;param name="seamlesstabbing" value="false"&gt;
&lt;param name="flashvars" value="id=grdMain"&gt;
&lt;/object&gt;
&lt;/body&gt;
</pre>

RealGrid의 core 라이브러리 파일인 realgridplus.js파일을 웹 페이지에 포함 해야 합니다.
공급받은 그리드의 라이선스 키는 “realGridLic” 변수를 만들어 입력해 주면 됩니다. “realGridLic”변수는 변경할 수 없는 고정된 이름입니다.

여기까지 진행 한 다음 페이지를 실행하면 브라우저에는 아래와 같이 설치된 RealGrid가 표시 됩니다.
![](https://lh4.googleusercontent.com/CHYK3-PrHxaS3xJp__QoXvL_GzXxovY84B0ObFzdxwR2QRqvsq0b8NAePRFxKObzee0EfRjJplXfQAUMhLKqzDWYqb8gw7kqquDxNMdpMPiW3w2ieY1H0SJUaT8DJTH8E1JOQaA)

### Initialization

GridView와 DataProvider를 매핑하기 위한 변수를 선언하고 RealGrids 객체로 부터 두 객체를 각각 전달 받아 넣어 둡니다.
setDataProvider()를 호출 하여 GridView에 DataProvider를 연결합니다.

<pre class="prettyprint">
var gridView;
var dataProvider;

RealGrids.onload = function (id) {
	gridView = new RealGrids.GridView(id);
	dataProvider = new RealGrids.LocalDataProvider();
	gridView.setDataProvider(dataProvider);
};
&lt;/script&gt;
</pre>

### Add Fields and Columns

RealGrid는 구조적으로 데이터 영역과 뷰 영역이 분리 되어 있습니다. Column은 데이터 영역에서 Field를 표현하는 ViewModel이므로 그리드 위에 Field를 표현하기 위해서는 Column에 대한 정의가 필요합니다.

DataProvider의 setFields()로 Field를 정의합니다.
GridView의 setColumns()로 Column을 정의합니다.

<pre class="prettyprint">
function setDataFields() {
	var fields = [
		{ fieldName: "code"  },
		{ fieldName: "productname" },
		{ fieldName: "volume" },
		{ fieldName: "unit" },
		{ fieldName: "price" }
	];
	
	dataProvider.setFields(fields);
}

function setColumns() {
	var columns = [ {
		fieldName : "Code",
		width : 80,
		header : {
			text : "코드"
		},
		styles : {
			textAlignment : "near"
		}
	}, {
		fieldName : "Productname",
		width : 80,
		header : {
			text : "제품명"
		},
		styles : {
			textAlignment : "near"
		}
	}, {
		fieldName : "Volume",
		width : 80,
		header : {
			text : "용량"
		},
		styles : {
			textAlignment : "near"
		}
	}, {
		fieldName : "Unit",
		width : 80,
		header : {
			text : "단위"
		},
		styles : {
			textAlignment : "near"
		}
	}, {
		fieldName : "Price",
		width : 80,
		header : {
			text : "단가"
		},
		styles : {
			textAlignment : "far"
		}
	} ];
	
	gridView.setColumns(columns);
}
</pre>

이제 필드와 컬럼을 정의한 부분을 RealGrid가 로드된 시점에 호출 해 보도록 하겠습니다.

아래 화면에서 선택된 부분을 코딩 합니다. RealGrids의 onload이벤트는 RealGrid 컨트롤이 화면에 완전히 로드된 다음 호출 됩니다. 인자로 넘어오는 id는 `<object>`태그의 id 속성값 이며, 화면에 그리드가 여러개인 경우 처리를 위해 필요합니다.

<pre class="prettyprint">
	RealGrids.onload = function (id) {
	gridView = new RealGrids.GridView(id);
	dataProvider = new RealGrids.LocalDataProvider();
	gridView.setDataProvider(dataProvider);
	
	setDataFields();
	setColumns();
};
</pre>

이제 웹 페이지를 실행해 보면 그리드에 컬럼이 추가된 모습을 확인 할 수 있습니다.

![그리드에 컬럼이 추가된 화면](/images/articles/RealGrid_PHP_MySQL-add_fields_and_columns.gif)

### Connecting a Database

이제 서버 작업으로 잠시 눈을 돌려 보겠습니다. PHP에서 MySQL에 연결하여 데이터를 가져오는 작업은 어렵지 않습니다.

데이터의 요청에 응답할 페이지를 새로 하나 만들어 보겠습니다. 웹 사이트에 DataGet.php 이름을 가진 새로운 웹 페이지를 만들고 Database연결을 위한 mysql_connect를 생성합니다.

###### &lt;DataGet.php&gt;

<pre class="prettyprint">
&lt;?php

$db=mysql_connect("localhost", "root", "apmsetup") or die('Could not connect');
mysql_select_db("mysql", $db) or die('');
</pre>

연습을 위한 데이터베이스를 만들고 거기에 본 자습서의 첫 부분에 정의된 products테이블을 생성 합니다. 또한 테스트를 위해 샘플 데이터도 입력 합니다.

### Get Data and Mapping

이제 클라이언트의 요청에 데이터를 돌려주는 작업을 합니다. 그 전에 서버와 클라이언트간의 데이터 전송 포멧을 결정해야 합니다. RealGrid가 받아들일 수있는 데이터 포멧은 JSON, XML, CSV, Array등 다양하지만, 본 자습서에서는 JSON포멧을 사용하기로 합니다. 

이제 실제 데이터베이스에서 데이터를 가져와 JSON포멧으로 변환해 보도록 하겠습니다. 위에서 작성했던 DataGet.php파일을 열고 다음 코드를 추가 합니다.

json_encode()를 이용해 간단하게 object를 JSON포멧의 텍스트로 변경 할 수 있습니다.

###### &lt;DataGet.php&gt;

<pre class="prettyprint">
&lt;?php

$db=mysql_connect("localhost", "root", "apmsetup") or die('Could not connect');
mysql_select_db("mysql", $db) or die('');

$return_array = array();
$result = mysql_query("SELECT * from products") or die('Could not query');

while ($row = mysql_fetch_array($result, MYSQL_ASSOC))
{
	$row_array['code'] = $row['code'];
	$row_array['productname'] = $row['productname'];
	$row_array['volume'] = $row['volume'];
	$row_array['unit'] = $row['unit'];
	$row_array['price'] = $row['price'];
	
	array_push($return_array, $row_array);  
}

echo json_encode($return_array);

mysql_free_result($result);

mysql_close($db);
?&gt;
</pre>

변경된 내용을 확인 하기 위해 직접 페이지의 URL을 호출 하여 결과를 확인 할 수 있습니다.

![get data and mapping](/images/articles/RealGrid_PHP_MySQL-get_data_and_mapping.gif)

### Load Data

RealGrid가 데이터를 가져오는 방법은 여러가지가 있습니다. 본 자습서에서는 DataProvider의 loaddata()를 이용해 비동기 방식으로 데이터를 가져오는 방법에 대해 설명합니다. 이전 장에서 만든 서버 페이지를 호출 하여 데이터를 가져온 다음 이를 DataProvider에 넘겨 주기 위해 아래 코드를 입력 합니다.

<pre class="prettyprint">
function loadData() {
	dataProvider.loadData({
		type: "Json",
		method: "post",
		url: "/DataGet.php",
		progress: true
	}, function (provider) {
	}, function (provider, message) {
	});
}   
</pre>

> dataProvider.loadData는 RealGrid+ 버전에만 지원하는 함수로   
> RealGridJS버전으로 데이타를 로드하는 방법은 RealGridsJs Basic 가이드를 참조하여 주세요.

다시 한번 RealGrids의 onload이벤트에서 loadData()함수를 호출하여 데이터를 RealGrid에 로드해 보도록 하겠습니다.

<pre class="prettyprint">
	RealGrids.onload = function (id) {
	gridView = new RealGrids.GridView(id);
	dataProvider = new RealGrids.LocalDataProvider();
	gridView.setDataProvider(dataProvider);
	
	setDataFields();
	setColumns();
	
	loadData();
};
</pre>

이제 웹 사이트를 실행 하면 그리드에 데이터베이스에서 가져온 데이터가 로드되는 모습을 확인 할 수 있습니다.

![load data](/images/articles/RealGrid_PHP_MySQL-load_data.gif)

> 아래 Insert, Update, Delete, Save Data는 작업을 쉽고 편하게 이용하기 위해 jQuery를 사용하였습니다. 

jQuery를 사용하려면 jQuery.com을 방문하여 도움을 받을 수 있습니다.


### Insert Data

그리드의 editOptions.insertable이 true이면 사용자는 Insert키로 행 삽입을 시작할 수 있습니다. 또, editOptions.appendable이 true이면 마지막 행에서 아래 화살표 키로 행 추가를 시작할 수 있습니다. 셀 편집 중 Esc 키를 누르면 셀 편집이 취소되고, 셀 편집 중이 아닌 상태에서 Esc 키를 누르면 행 추가가 취소됩니다.
또, 아래 예제와 같이 javascript 메소드를 통해 사용자가 행 삽입/추가를 할 수 있습니다.

editOptions에 대한 보다 자세한 설명은 다음 링크를 참조하세요.

[EditOptions](/api/types/EditOptions/)

<pre class="prettyprint">
RealGrids.onload = function (id) {
    gridView = new RealGrids.GridView(id);
    dataProvider = new RealGrids.LocalDataProvider();
    gridView.setDataProvider(dataProvider);

    setDataFields();
    setColumns();
    setOptions();

    loadData();
};

function setOptions() {
    gridView.setOptions({
        edit: {
            insertable: true,
            appendable: true,
        }
    });
}
</pre>

이 예제에서는 바로  행 저장하는 방식으로 처리하도록 하겠습니다.
우선 서버에서 인서트 작업을 처리 하기 위한 DataInsert.php 파일을 먼저 생성하도록 하겠습니다. 

클라이언트에서 json 포맷으로 넘겨받은 데이터를 SqlClient를 이용하여 Insert 작업을 처리합니다.

DataInsert.php 의 내용은 다음과 같습니다.

###### &lt;DataInsert.php&gt;

<pre class="prettyprint">
&lt;?php
$json = file_get_contents('php://input');
$jData = json_decode($json, true);

$db=mysql_connect("localhost", "root", "apmsetup") or die('Could not connect');
mysql_select_db("mysql", $db) or die('');

mysql_query("INSERT INTO products (code, productname, volume, unit, price) 
 VALUES ('".$jData['code']."','".$jData['productname']."','".$jData['volume']."','"
   .$jData['unit']."','".$jData['price']."')") or die(mysql_error());   

mysql_close($db);

echo $json;
?&gt;
</pre>

default.html로 돌아와서 아래와 같이 삽입/추가/저장 버튼 3개를 추가하도록 합니다.

<pre class="prettyprint">
	&lt;param name="flashvars" value="id=grdMain"&gt;
	&lt;/object>
	
	&lt;input type="button" id="btnInsert" value="Insert Row" &gt;
	&lt;input type="button" id="btnAppend" value="Append Row" &gt;  
	&lt;input type="button" id="btnSaveData" value="Save Data" &gt;
	&lt;/body&gt;
	&lt;/html&gt;
</pre>

각 버튼이 수행할 메소드를 작성합니다.

<pre class="prettyprint">
&lt;script&gt;
var gridView;
var dataProvider;

$(function () {
	$("#btnInsert").click(btnInsertClickHandler);
	$("#btnAppend").click(btnAppendClickHandler);
	$("#btnSaveData").click(btnSaveDataClickHandler);
});

function btnInsertClickHandler(e) {
    var curr = gridView.getCurrent();
    gridView.beginInsertRow(Math.max(0, curr.itemIndex));
    gridView.showEditor();
    gridView.setFocus(); 
}
 
function btnAppendClickHandler(e) {
    gridView.beginAppendRow();
    gridView.showEditor();
    gridView.setFocus();
}

function btnSaveDataClickHandler(e) {
    gridView.commit();

    var currRow = gridView.getCurrent().dataRow;
    if (currRow &lt; 0) return;

    var currState = dataProvider.getRowState(currRow); 

    if (currState == RealGrids.RowState.CREATED) {
        saveData("/DataInsert.php");
    }
}

function saveData(urlStr) {
    var jRowData = dataProvider.getJsonRow(gridView.getCurrent().dataRow);

    $.ajax({
        type: "post",
        url: urlStr,
        data: JSON.stringify(jRowData),
        processData: false,
        dataType: "json",
        success: function (data) {
            alert('저장 성공');
            dataProvider.clearRowStates(true);
        },
        error: function (data, status, error) {
            alert('fail:' + data.responseText); 
        }
    });
}
&lt;/script&gt;
</pre>
  
  

웹 페이지를 실행하여, 인서트 후 저장버튼을 클릭하여 정상적으로 Insert가 되는지 확인 합니다. 단, 저장 버튼은 현재 선택된 행에만 작동합니다.

RealGrid+는 dataProvider를 통하여 데이터 입출력을 행합니다. 
그리드에서 편집된 데이터는 그리드에만 존재하며 편집 완료시에만 dataProvider로 반영됩니다. 

편집 완료는 행 바꿈이나 RealGrids.commit() 메소드를 호출 하여 편집 완료를 시킬 수 있습니다.

행 추가후 인서트할 자료를 입력 한 후 Row를 변경(commit())하여 statusBar 영역이 어떻게 바뀌었는지 확인해보세요

![insert data](/images/articles/RealGrid_PHP_MySQL-insert_data.gif)

> ※ RealGrid+ 의 RowStates  
> RealGrid+ 의 RowState는 5가지의 상태가 있으며  NONE, CREATED, UPDATED, DELETED, CREATE_AND_DELETED로 구분됩니다.

### Update Data

Update는 Insert의 작업방법과 같습니다. DataUpdate.php를 생성 후 mysql_query만 UPDATE SQL로 수정해주시면 됩니다. 나머지 내용은 DataInsert.php와 같습니다.

<pre class="prettyprint">
mysql_query("UPDATE products
    SET productname = '".$jData['productname']."'
      , volume  = '".$jData['volume']."'
      , unit= '".$jData['unit']."' 
      , price   = '".$jData['price']."'
      WHERE code= '".$jData['code']."' ");
</pre>

수정은 별도의 버튼이 필요하지 않고 저장시에만 이 데이터가 수정되었는지 확인하면 됩니다.
RealGrid+는 데이터가 수정되면 RowState를 UPDATED로 변경합니다. 이것을 토대로 default.html 을 수정해보도록 하겠습니다.

<pre class="prettyprint">
function btnSaveDataClickHandler(e) {
	gridView.commit();
	
	var currRow = gridView.getCurrent().dataRow;
	if (currRow &lt; 0) return;
	
	var currState = dataProvider.getRowState(currRow); 
	
	if (currState == RealGrids.RowState.CREATED) {
	    saveData("/DataInsert.php");
	}
	else if (currState == RealGrids.RowState.UPDATED) {
	    saveData("/DataUpdate.php");
    }
}
</pre>

위의 코드와 같이 현재 그리드 상태가 UPDATED인지 확인하고 “DataUpdate” 를 호출하도록 수정하면 됩니다.

기존에 입력되어 있는 데이터를 수정하여 편집완료(행 바꿈 or commit()) 시킨 후 statusBar 영역이 어떻게 바뀌었는지 확인해보세요.

![update data](/images/articles/RealGrid_PHP_MySQL-update_data.gif)

### Delete Data

그리드 editOptions.deletable이 true이면 사용자는 Ctrl+Del 키를 눌러 현재 선택된 행을 삭제할 수 있습니다. 실제 삭제하기 전에 사용자 확인을 받을 필요가 있다면 editOptions.deleteRowsConfirm 속성을 true로 지정하면 됩니다. 확인 메시지를 editOptions.deleteRowsMessage로 지정할 수도 있습니다.

이 예제에서는 삭제 기능 수행시 바로 삭제하는 것이 아닌 RowState를 DELETED 나 CREATE_AND_DELETED로 변경하는 softDeleting 옵션을 사용합니다. 

물론 삭제 기능 사용시 행을 바로 삭제하는 것도 RealGrid+ 에서 제공되는 callback 함수인 dataProvider.onRowDeleting() 이나 dataProvider.onRowDeleted() 를 이용하여 처리 할 수 있습니다.

이제 실제 작업을 해보도록 하겠습니다.
INSERT, UPDATE DATA에서 작업했던것과 같은 방법으로 DataDelete.php를 생성합니다. 역시 같은 방법으로 mysql_query만 DELETE SQL로 수정해주시면 됩니다.

<pre class="prettyprint">
mysql_query("DELETE
   FROM products
  WHERE code= '".$jData['code']."' ");
</pre>
  
  

default.html로 돌아와서 삭제 기능을 사용하기 위해 setOptions를 다음과 같이 수정합니다.

<pre class="prettyprint">
function setOptions() {
    gridView.setOptions({
        edit: {
            insertable: true,
            appendable: true,
            deletable: true,
            deleteRowsConfirm: true,
            deleteRowsMessage: "Are You sure?"
    }
});

dataProvider.setOptions({
        softDeleting: true
    })  
}   
</pre>
  
  

btnSaveDataClickHandler()는 다음과 같이 수정합니다.

<pre class="prettyprint">
function btnSaveDataClickHandler(e) {
    gridView.commit();

    var currRow = gridView.getCurrent().dataRow;
    if (currRow &lt; 0) return;

    var currState = dataProvider.getRowState(currRow); 

    if (currState == RealGrids.RowState.CREATED) {
        saveData("/DataInsert.php");
    }
    else if (currState == RealGrids.RowState.UPDATED) {
        saveData("/DataUpdate.php");
    }
    else if (currState == RealGrids.RowState.DELETED) {
        saveData("/DataDelete.php");
    }
}
</pre>

자료를 조회 후 `CTRL+DEL` 키를 입력하여 삭제 상태로 바꾼 후 statusBar 영역이 어떻게 바뀌었는지 확인해보세요.

![delete data](/images/articles/RealGrid_PHP_MySQL-delete_data.gif)

deleteRowsConfirm, softDeleting property를  true, false로 바꿔보면서 테스트해보세요.

저장버튼을 클릭하여 삭제가 제대로 수행되는지 확인해보세요.

삭제가 잘 되셨나요??
저장버튼을 눌러 삭제를 했음에도 불구하고 DB에서는 삭제가 됐지만 그리드에는 데이터가 남아 있음을 확인 하실 수 있습니다.

이 경우 RealGrids.clearRowStates()의 파라메터를 true로 주시면 해결하실 수 있습니다.  
해당 파라메터의 기능은 RowState를 Clear할때 RowState가 DELETE인것은 Row를 삭제하는 기능입니다.

<pre class="prettyprint">
function saveData(urlStr) {
    var jRowData = dataProvider.getJsonRow(gridView.getCurrent().dataRow);

    $.ajax({
        type: "post",
        url: urlStr,
        data: JSON.stringify(jRowData),
        processData: false,
        dataType: "json",
        success: function (data) {
            alert('저장 성공');
            dataProvider.clearRowStates(true);
        },
        error: function (data, status, error) {
            alert('fail:' + data.responseText); 
        }
    });
}
&lt;/script&gt; 
</pre>

### Save Data

지금까지의 작업은 모두 행 단위 작업이었습니다. 업무 처리를 하다보면 행 단위 작업이 아닌 일괄 작업이 필요한 경우가 많이 있었을 것입니다. 

지금부터는 RealGrid+를 사용하여 INSERT, UPDATE, DELETE를 트랙젝션으로 묶어서 처리하는 방법으로 해보도록 하겠습니다.

default.html에 btnSaveAllData 버튼을 추가하고 해당 메소드를 아래와 같이 작성합니다.

<pre class="prettyprint">
function btnSaveAllDataClickHandler(e) {
    gridView.commit();
    saveDataAll("/DataSaveAll.php");
}

function saveDataAll(urlStr) {
var state;
var jData;
var jRowsData = []; 
 
for (var i = 0; i &lt; dataProvider.getRowCount() ; i++) {
    state = dataProvider.getRowState(i);
     
    if ((state != RealGrids.RowState.NONE) &amp;&amp; (state != RealGrids.RowState.CREATE_AND_DELETED)) {
            jData = dataProvider.getJsonRow(i);
            jData.state = state;
         
            jRowsData.push(jData);
        }
    }
     
    if (jRowsData.length == 0) {
        dataProvider.clearRowStates(true);
        return;
    }
     
    $.ajax({
        type: "post",
        url: urlStr,
        data: JSON.stringify(jRowsData),
        processData: false,
        success: function (data) {
            if (data.substr(0,6) != "Error:") {
                alert('저장 성공');
                dataProvider.clearRowStates(true);
            }
            else {
                alert(data);
            }   
        },
        error: function (data, status, error) {
            alert(data.responseText);
        }
    });
}   
</pre>

DataSaveAll.php를 생성하고 아래와 같이 작성합니다.

<pre class="prettyprint">
&lt;?php
$json = file_get_contents('php://input');
$jData = json_decode($json, true);

$db= new PDO('mysql:host=127.0.0.1;dbname=mysql;', 'root', 'apmsetup'); 
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$db->beginTransaction();
try {
    for ($i = 0; $i &lt; sizeof($jData); $i++) {   
        if ($jData[$i]['state'] == 'created') { 
            $db->exec("INSERT INTO products (code, productname, volume, unit, price) 
               VALUES ('".$jData[$i]['code']."','".$jData[$i]['productname']."','".$jData[$i]['volume']."','"
             .$jData[$i]['unit']."','".$jData[$i]['price']."') ");  
        } 
        else if ($jData[$i]['state'] == 'updated') {
            $db->exec("UPDATE products
              SET productname = '".$jData[$i]['productname']."'
            , volume  = '".$jData[$i]['volume']."'
            , unit= '".$jData[$i]['unit']."' 
            , price   = '".$jData[$i]['price']."'
            WHERE code= '".$jData[$i]['code']."' ");
        } 
        else if ($jData[$i]['state'] == 'deleted') {
            $db->exec("DELETE FROM products
            WHERE code= '".$jData[$i]['code']."' ");
        }   
    }
    $db->commit();  
} catch (PDOException $e) {
    $db->rollback();
    echo "Error: ".$e->getMessage()." ";
}
?&gt;
</pre>


INSERT, UPDATE, DELETE에서 보신 내용과 크게 다르지 않습니다.

JSON Array로 넘겨받은 데이터를 루프 돌면서 RowState를 확인하고, 해당 액션에 맞게 처리하는것이 끝입니다.

