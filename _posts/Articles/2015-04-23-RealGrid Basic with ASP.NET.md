---
layout: post
title:  RealGrid Basic with ASP.NET & MS SQLServer
date:   2015-04-23 15:47:54
categories: article
course: 기초과정
---

### Architeatures
> * Tools & Tech: VisualStudio Professional 2012, ASP.NET 4.5 Web Pages (Razor2)
> * Web Server & WAS: Windows Server 2008 64bit, IIS 7, .NET Framework
> * Database: MS SQLServer 2008 R2
> * Table: Products
>   * <th>Field Name</th>
>   * <td>Code</td>
>   * <td>ProductName</td>
>   * <td>Volume</td> 
>   * <td>Unit</td>
>   * <td>Price</td>


### Introduction
사실 ASP.NET과 SQLServer의 조합은 MS기반 웹 개발 플랫폼 구성의 기본적인 조합이라고 할 수 있습니다. .NET Framework에서 SQLServer에 접근하기 위해서는 ADO.NET기술을 이용하게 됩니다. 본 가이드는 SQLServer의 특정 테이블에 들어 있는 데이터를 RealGrid가 포함된 웹화면에서 조회, 추가, 수정, 삭제기능을 구현하고 있습니다.

### A New WEB Site
VisualStudio 2012를 실행 합니다. File(파일)메뉴에서 새 웹사이트 메뉴를 실행 합니다. 새 웹 사이트 대화상자에서 ASP.NET 빈 웹 사이트를 선택하고 확인 버튼을 눌러 새로운 웹 사이트를 생성 합니다.![a new web site](/img/apiex/RealGrid_ASP.NET_MSSQLServer-a_new_web_site.gif)

### Create a Web Page
RealGrid를 장착할 새로운 웹 페이지를 생성 합니다. 새로운 웹 페이지의 이름은 default.cshtml로 합니다. ![create a new web page](/img/apiex/RealGrid_ASP.NET_MSSQLServer-create_a_web_page.gif)  

추가된 웹 페이지에 기본적인 HTML코드를 작성 합니다.

**Default.cshtml**

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

RealGrid를 설치하는 작업은 어떤 개발환경이나 실행환경에서도 간단히 처리할 수 있습니다. 정식으로 제품을 구매한 경우와 평가판으로 제품을 받은 경우 모두 동일한 방법으로 설치를 진행 할 수 있습니다. 공급받은 제품에 포함된 objects폴더와 scripts폴더를 웹 사이트의 폴더 위치로 복사합니다. ![setup the RealGrid](/img/apiex/RealGrid_ASP.NET_MSSQLServer-setup_the_RealGrid.gif)

RealGrid가 위치할 부분에 object태그를 사용하여 아래와 같이 코딩 합니다.

<pre class="prettyprint">
&lt;!DOCTYPE hteml&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;RealGrid Sample Page&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
    &lt;/body&gt;
&lt;/html&gt;&lt;h1&gt;RealGrid on ASP.NET and SQL Server&lt;/h1&gt;
&lt;object type=&quot;application/x-shockwave-flash&quot; name=&quot;grdMain&quot; id=&quot;grdMain&quot; data=&quot;/objects/RealGridWeb.swf&quot; width=&quot;100%&quot; height=&quot;300&quot;&gt;
    &lt;param name=&quot;quality&quot; value=&quot;high&quot;&gt;
    &lt;param name=&quot;wmode&quot; value=&quot;opaque&quot;&gt;
    &lt;param name=&quot;allowscriptaccess&quot; value=&quot;sameDomain&quot;&gt;
    &lt;param name=&quot;allowfullscreen&quot; value=&quot;false&quot;&gt;
    &lt;param name=&quot;seamlesstabbing&quot; value=&quot;false&quot;&gt;
    &lt;param name=&quot;flashvars&quot; value=&quot;id=grdMain&quot;&gt;
&lt;/object&gt;
</pre>

RealGrid의 core 라이브러리 파일인 realgridplus.js파일을 웹 페이지에 포함 해야 합니다. 공급받은 그리드의 라이선스 키는 “realGridLic” 변수를 만들어 입력해 주면 됩니다. “realGridLic”변수는 변경할 수 없는 고정된 이름입니다. 여기까지 진행 한 다음 페이지를 실행하면 브라우저에는 아래와 같이 설치된 RealGrid가 표시 됩니다.
![setup the RealGrid2](/img/apiex/RealGrid_ASP.NET_MSSQLServer-setup_the_RealGrid2.gif)

### Initialization

GridView와 DataProvider를 매핑하기 위한 변수를 선언하고 RealGrids 객체로 부터 두 객체를 각각 전달 받아 넣어 둡니다. setDataProvider()를 호출 하여 GridView에 DataProvider를 연결합니다.

<pre class="prettyprint">
var gridView;
var dataProvider;
RealGrids.onload = function (id) {
    gridView = new RealGrids.GridView(id);
    dataProvider = new RealGrids.LocalDataProvider();
    gridView.setDataProvider(dataProvider);
};
</pre>

## Add Fields and Columns

RealGrid는 구조적으로 데이터 영역과 뷰 영역이 분리 되어 있습니다. Column은 데이터 영역에서 Field를 표현하는 ViewModel이므로 그리드 위에 Field를 표현하기 위해서는 Column에 대한 정의가 필요합니다. DataProvider의 setFields()로 Field를 정의합니다. GridView의 setColumns()로 Column을 정의합니다.
