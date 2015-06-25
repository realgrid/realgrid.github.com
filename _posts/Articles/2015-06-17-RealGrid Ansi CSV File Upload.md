---
layout: post
title:  RealGrid Ansi CSV 파일 업로드
date:   2014-10-17 14:14:00
categories: article
course: 기초과정
tags:
    - spring
    - tomcat
    - csv
    - excel
---

### Architectures

* 개발도구: Spring STS, Spring 3.1.1.RELEASE
* 웹서버: local
* WAS: tomcat 7.0

### Introduction

본 가이드에서는 JAVA Spring 환경에서 Local에 있는 Ansi CSV 파일을 업로드하는 방법을 설명합니다.  
리얼그리드 화면 구현 설명은 생략합니다. 구현 방법은 이곳을 참조하세요.    
본 가이드에 포함된 소스 코드는 여기를 클릭 하여 다운로드 할 수 있습니다.  

> ※ CSV 파일 업로드 기능은 IE 9 이상부터 지원합니다.   

### Excel Save as CSV

Import 할 Excel파일을 csv 형식으로 저장합니다.

![](/images/articles/RealGrid_Ansi_CSV_File_Upload_ExcelSaveAsCSV.png)
파일 메뉴에서 다른 이름으로 저장 버튼을 누른후 파일형식을 'CSV (쉼표로 분리)'로 선택후 저장.

### HTML

Excel파일 업로드 방법에는 클라이언트 브라우저 IE버전에 따라 다르게 적용합니다.

#### IE 10, 11

**HTML**  

Input File과 Button을 생성합니다.

<pre class="prettyprint">
&lt;body&gt;	
	&lt;input type="file" id="csvInputFile" name="files"/&gt;
	&lt;input type="button" value="load local csv" onclick="handleFileSelect();"/&gt;
	&lt;div id="grdMain"&gt;&lt;/div&gt;
&lt;body&gt;
</pre>

**Javascript**

<pre class="prettyprint">
function handleFileSelect() {
	var input = document.getElementById('csvInputFile');
	if (!input.value) {
		alert("Um, couldn't find the csvInputFile element.");
	} else {
		if (typeof FileReader == "function") {
			var file = input.files[0];
			fileReader = new FileReader();
			fileReader.onload = receivedText;
			fileContent = null;
			fileReader.readAsText(file, "euc-kr");
		}
	}
}	

//RealGrid+ version
function receivedText() {
	if(fileReader)
		fileContent = fileReader.result;
		
	mainProvider.loadData({
		type : "csv",
		dataType : "csv",
		url : "localCsvLoadString.do",
		method : "POST",
		params : {
			files : fileContent
		}
	});
}   

//RealGridJS version
function receivedText() {
	if(fileReader)
		fileContent = fileReader.result;
		
	var params = "files=" + encodeURIComponent(fileContent);
	var xmlhttp = new XMLHttpRequest();
	
	xmlhttp.open("POST", "localCsvLoadString.do", true);
	xmlhttp.onreadystatechange = function(e) {
		if (xmlhttp.readyState == 4) {
			if (xmlhttp.status == 200) {
				mainProvider.fillCsvData(decodeURIComponent(xmlhttp.responseText), { start : 2 });
				console.log("status : " + xmlhttp.status + ", text : " + xmlhttp.responseText);
			} else
				console.log(xmlhttp.status);
		}
	}
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
	xmlhttp.setRequestHeader("Cache-Control","no-cache, must-revalidate");
	xmlhttp.setRequestHeader("Pragma","no-cache");
	xmlhttp.send(params);
}   
</pre>

**new FieldReader()**

IE는 버전 10이상부터 사용할수있는 javascript 기본 제공 함수입니다.

*FileReader() 브라우저 별 사용가능 버전정보*

IE | &nbsp; Firefox &nbsp; | Chvrome | Safari | Opera | iOS Safari | Android Browser | Chrome for Android
:-:|:-----:|:---------:|:--------:|:-------:|:------------:|:-----------------:|:--------------------:
10,11 | 31 ~ 33 | 31 ~ 38 | 6.1~71 | 24,25 | 7.1,8 | 4~4.4 | 38

출처 : [http://caniuse.com/#feat=filereader](http://caniuse.com/#feat=filereader)

**JAVA**

<pre class="prettyprint">
@RequestMapping(value="localCsvLoadString.do", method=RequestMethod.POST)
public void getCsvDataString(@RequestParam("files") String file, HttpServletResponse response)throws Exception{
	if(!file.isEmpty()){
		try{
			OutputStream os = response.getOutputStream();
			os.write(file.getBytes());
			os.flush();
		}catch(Exception e){
			out.println(e);
		}
	}
}
</pre>

**Large Size Data**

Data의 양이 많을 경우 앞에서 소개한 방법은 CSV파일을 읽어서 String 형태로 변환 후 Post형태로 서버에 보내는 방식입니다.  
Eclipse Tomcat을 사용 하였을 경우 Post size 제한에 걸리기 때문에 다음과 같이 설정합니다.

> Tomcat maxPostSize  
> 기본적으로 Tomcat은 POST 데이터를 2MB로 제한합니다. 이 제한은 이 제한보다 큰 데이터를 공개할 수 있는 규칙 세트를 사용할 때 문제가 발생할 수 있습니다. Tomcat에서 POST 제한을 사용 안함으로 설정하기 위해 maxPostSize="0" 속성을 server.xml 구성 파일의 <Connector> 요소에 추가할 수 있습니다.<br>  
>  &lt;Connector connectionTimeout="20000" maxPostSize="0" port="8080" protocol="HTTP/1.1" redirectPort="8443"/&gt;

**Small Size Data**

Data의 양이 적은 경우엔 [DataProvider.setRows()](/api/LocalDataProvider/setRows/)함수를 이용하여 Javascript 만으로 Data를 Load할수 있습니다.  
Javascript 소스에 fileReader.onload를 수정합니다.

<pre class="prettyprint">
function handleFileSelect() {
	var input = document.getElementById('csvInputFile');
	if (!input.value) {
		alert("Um, couldn't find the csvInputFile element.");
	} else {
		if (typeof FileReader == "function") {
			var file = input.files[0];
			fileReader = new FileReader();
			//fileReader.onload = receivedText;
			fileReader.onload = loadSetRows;
			fileContent = null;
			fileReader.readAsText(file, "euc-kr");
		}
	}
}	

// fileReader가  onload 된 후 호출하는 loadSetRows함수 생성.
function loadSetRows(){
	fileContent = fileReader.result;
	var rows = CSVtoArray(fileContent);
	mainProvider.setRows(rows);
}

// Parsing CSV Strings With Javascript Exec() Regular Expression Command
function CSVtoArray( strData, strDelimiter ){
    strDelimiter = (strDelimiter || ",");
    
    var objPattern = new RegExp(("(\\" + strDelimiter + "|\\r?\\n|\\r|^)" 
    		+ "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" + "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
    
    var arrData = [[]];
    var arrMatches = null;
    
    while (arrMatches = objPattern.exec( strData )){
        var strMatchedDelimiter = arrMatches[ 1 ];
        if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)){
            arrData.push( [] );
        }
        if (arrMatches[ 2 ]){
            var strMatchedValue = arrMatches[ 2 ].replace( new RegExp( "\"\"", "g" ), "\"" );
        } else {
            var strMatchedValue = arrMatches[ 3 ];
        }
        arrData[ arrData.length - 1 ].push( strMatchedValue );
    }
    
    return( arrData );
}
</pre>

**Selection Column**  

특정 컬럼을 지정해서 로드해야 할 경우 CSV 형식의 Data는 직접 소스로 구현해야 하기때문에 DataProvider.loadData함수를 사용할 수 없습니다.

loadSetRows() 함수를 수정합니다.

<pre class="prettyprint">
function loadSetRows(){
	fileContent = fileReader.result;
	var rows = CSVtoArray(fileContent);
	rows.pop();
	
	var select = [0,2];
	var selectRows = [[]];
	
	for(var i=0; i<rows.length; i++){
		for(var y=0; y<select.length; y++){
			var row = rows[i][select[y]]];
			if(!selectRows[i])
				selectRows[i] = [];
			selectRows[i].push(row);
		}
	}
	mainProvider.setRows(rows);
}
</pre>

select 변수에 Import할 컬럼의 Index 번호를 설정합니다.  
Index 번호는 csv파일의 컬럼순서로서 왼쪽부터 0번 입니다.  

###IE 9

IE 9 버전에서는 FileReader 함수가 없습니다. 대신 Form을 이용해 CSV파일 업로드를 구현할수 있습니다.

현재 DataProvider.loadData 함수로는 File을 url로 전송하는 기능은 지원하고 있지 않기 때문에 LocalDataProvider.setRows()를 이용해 Data를 Set합니다.

**HTML**

<pre class="prettyprint">
&lt;div id="fileReaderEmpty" style="display: none;"&gt;
	&lt;form id="addProductForm" method="post" action="localCsvLoad.do" enctype="multipart/form-data"&gt;
		&lt;input type="file" name="files"/&gt;
		&lt;input type="submit" value="load local csv" /&gt;
	&lt;/form&gt;
&lt;/div&gt;
</pre>

**Javascript**

> 작업을 쉽고 편하게 이용하기 위해 jQuery를 사용하였습니다.   
> jQuery를 사용하려면   
> &lt;script src="http://code.jquery.com/jquery-1.11.1.js"&gt;&lt;/script&gt;  
> 추가하거나 [http://jquery.com](http://jquery.com) 사이트 에서 다운 받아 사용할 수 있습니다.

FormData 함수를 이용하여 File을 추출해야 하나 IE10이상부터 지원하는 함수이기 때문에 jQuery.form.js를 사용하였습니다.

> jQuery.ajaxSubmit을 사용하려면 
> &lt;script src="http://malsup.github.com/jquery.form.js"&gt;&lt;/script&gt;  
> 추가하거나 http://malsup.com/jquery/form/#download 에서 다운 받아 사용할 수 있습니다.

<pre class="prettyprint">
$("#addProductForm").submit(function(e) {
	$(this).ajaxSubmit({
		success : function(data){
			var rows = CSVtoArray(data);
				rows.pop();
			if(rows.length < 20000)
				mainProvider.setRows(rows);
			else
				largeSizeSetData(rows);
		},
		error : function(error){
			alert(error);
		}
	});
	return false;
});
</pre>

CSVtoArray 함수는 앞에 작성한 Parsing CSV Strings With Javascript Exec() Regular Expression Command 를 사용했습니다.

**pom.xml**  

commons-fileupload, commons-io 를 등록합니다.

<pre class="prettyprint">
&lt;dependency&gt;
	&lt;groupId&gt;commons-fileupload&lt;/groupId&gt;
	&lt;artifactId&gt;commons-fileupload&lt;/artifactId&gt;
	&lt;version&gt;1.3.1&lt;/version&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
	&lt;groupId&gt;org.apache.commons&lt;/groupId&gt;
	&lt;artifactId&gt;commons-io&lt;/artifactId&gt;
	&lt;version&gt;1.3.2&lt;/version&gt;
&lt;/dependency&gt;
</pre>

**JAVA**

<pre class="prettyprint">
@RequestMapping(value="localCsvLoad.do", method=RequestMethod.POST)
public void getCsvData(@RequestParam("files") MultipartFile file, HttpServletResponse response)throws Exception{
	
	String text = null;
	byte[] bytes;
	
	if(!file.isEmpty()){
		try{
			bytes = file.getBytes();
			text = new String(bytes, "euc-kr");
			System.out.println(text.length());
			OutputStream os = response.getOutputStream();
			os.write(text.getBytes());
			os.flush();
		}catch(IOException e){
			out.println("FAIL] An I/O error occurred.");
		}
	}
}
</pre>

setRows 함수를 이용했을때 Data양이 많을 경우 그리드에 부하가 걸려 프로그램이 멈출 위험이 있습니다. 이때는 Data를 나눠서 set합니다.

**javascript**

<pre class="prettyprint">
function CsvAjax(fd) {
	$.ajax({
		url : 'localCsvLoad.do',
		type : 'POST',
		cache: false,	
	    contentType: false,
	    processData: false,
		data : fd,
		dataType : "text",
		success : function(returndata) {
			var rows = CSVtoArray(returndata);
			rows.pop();
			if(rows.length < 50000)
				mainProvider.setRows(rows);
			else
				largeSizeSetData(rows);
		},
		error : function() {
			alert("error in ajax form submission");
		}
	});
}

function largeSizeSetData(rows){
	var arrIndex = 0;
	
	var sliceArr = rows.slice(arrIndex, arrIndex + 50000);
	mainProvider.setRows(sliceArr, arrIndex);
	arrIndex += sliceArr.length;
	
	while(arrIndex < rows.length){
		var sliceArr = rows.slice(arrIndex, arrIndex + 50000);
		mainProvider.appendRows(sliceArr);
		arrIndex += sliceArr.length;
	}
	mainProvider.clearRowStates();
}
</pre>

###Sample Page
[Excel Import Sample](http://sample.realgrid.com/WaterExam/excelImport)