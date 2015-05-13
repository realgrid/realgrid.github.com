---
layout: post
title: RealGridJs Basic with JAVA Spring & MyBatis & MS SQLServer
date: 2015-05-12 00:00:00 +9:00 GMT
categories: article
course: 기초과정
--- 


### Architectures

* 개발도구: eGovFrame 2.6, Spring 3.1.2.RELEASE
* 웹서버: Windows Server 2008 64bit, IIS 7
* WAS: tomcat 7.0
* 데이터베이스: MS SQLServer 2008 R2
* Table   
![](/images/articles/20150423-table-product.png)

### Introduction

본 가이드는 Java Spring MVC와 MS SQLServer 환경에서 RealGrid에 데이터를 뿌려주는 간단한 화면을 만드는 방법에 대해 설명하고 있습니다. 본 자습서를 읽고 내용을 이해 하기 위해서는 Java에 대한 기초적인 지식이 필요합니다.  
본 예제에서는 전자정부프레임웍 eGovFrame 2.6에 Spring MVC 만  사용하였습니다.  
본 가이드는 SQLServer의 특정 테이블에 들어 있는 데이터를 RealGrid가 포함된 웹화면에서 조회, 추가, 수정, 삭제기능을 구현하고 있습니다.
    

    
### A New WEB Site
eGovFrame 2.6를 실행 합니다.
File(파일)메뉴에서 New eGovFrame Web Project 메뉴를 실행 합니다.
Project name, Group Id, Target Runtime을 설정해주고 새프로젝트를 생성 합니다.

![](/images/articles/RealGridJS_JAVASpring_MyBatis_MSSQLServer-a_new_web_site.gif/)
    
### Create a Web Page
   
RealGrid를 장착할 새로운 웹 페이지를 생성 합니다.
새로운 웹 페이지의 이름은 default.jsp로 합니다.

![](/images/articles/RealGridJS_JAVASpring_MyBatis_MSSQLServer-create_a_web_page.gif/)
    

    
### Setup the RealGrid

RealGrid를 설치하는 작업은 어떤 개발환경이나 실행환경에서도 간단히 처리할 수 있습니다. 정식으로 제품을 구매한 경우와 평가판으로 제품을 받은 경우 모두 동일한 방법으로 설치를진행 할 수 있습니다.
공급받은 제품에 포함된 assets폴더와 scripts폴더를 웹 사이트의 폴더 위치로 복사합니다.
        
![](/images/articles/RealGridJS_JAVASpring_MyBatis_MSSQLServer-setup_the_realgrid.gif/)  
RealGrid가 위치할 부분에 아래와 같이 코딩 합니다.  

>작업을 쉽고 편하게 이용하기 위해 jQuery를 사용하였습니다.  
>jQuery를 사용하려면   
>&lt;script src="http://code.jquery.com/jquery-1.11.0.min.js"&gt;&lt;/script&gt;  
>추가하거나 http://jquery.com/ 사이트 에서 다운 받아 사용할 수 있습니다.
    

    
### Initialization

    
GridView와 DataProvider를 매핑하기 위한 변수를 선언하고 RealGridJS 객체로 부터 두 객체를 각각 전달 받아 넣어 둡니다.  
setDataSource()를 호출 하여 GridView에 DataProvider를 연결합니다.  
RealGrid의 core 라이브러리 파일인 realgridjs.js파일을 웹 페이지에 포함 해야 합니다.  
그리드의 라이선스 키는 “dlgrids_eval.js” 파일에 암호화되어 저장되어 있습니다.  
        

**default.jsp**  
<pre class="prettyprint">
&lt;script type="text/javascript" src="/sample/scripts/dlgrids_eval.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="/sample/scripts/jszip.min.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="/sample/scripts/realgridjs.js"&gt;&lt;/script&gt;
&lt;script src="http://code.jquery.com/jquery-1.11.0.min.js"&gt;&lt;/script&gt;

&lt;script type="text/javascript"&gt;
    $(function() {
        setupGridJs("grdMain", "100%", "300");
    });

    var grdMain;
    var dataProvider;
    
    function setupGridJs(id, width, height) {
        $("#"+id).css({ width : width, height : height });
        grdMain = new RealGridJS.GridView(id);
        dataProvider = new RealGridJS.LocalDataProvider();
        grdMain.setDataSource(dataProvider);
    };
&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="title"&gt;
        &lt;span&gt;RealGrid on Java Spring MVC and SQLServer&lt;/span&gt;
    &lt;/div&gt;
    
    &lt;div id="grdMain"&gt;&lt;/div&gt;
&lt;/body&gt;
</pre>

          
  

여기까지 진행 한 다음 페이지를 실행하면 브라우저에는 아래와 같이 설치된 RealGrid가 표시 됩니다.
        
![](/images/articles/RealGridJS_JAVASpring_MyBatis_MSSQLServer-initialization.gif/)
    

    
### Add Fields and Columns

    
RealGrid는 구조적으로 데이터 영역과 뷰 영역이 분리 되어 있습니다. Column은 데이터 영역에서 Field를 표현하는 ViewModel이므로 그리드 위에 Field를 표현하기 위해서는 Column에 대한 정의가 필요합니다.

DataProvider의 setFields()로 Field를 정의합니다.
        
**default.jsp**

<pre class="prettyprint">
    function setFields(provider) {
        var fields = [ {
            fieldName : "code"
        }, {
            fieldName : "productName"
        }, {
            fieldName : "volumne"
        }, {
            fieldName : "unit"
        }, {
            fieldName : "price",
            dataType : "number"
        } ];

        if (provider == dataProvider)
            provider.setFields(fields);
    }
</pre>
          
  

GridView의 setColumns()로 Column을 정의합니다.
        
**default.jsp**

<pre class="prettyprint">
    function setColumns(grid) {
        var columns = [ {
            fieldName : "code",
            width : 80,
            header : {
                text : "코드"
            },
            styles : {
                textAlignment : "near"
            }
        }, {
            fieldName : "productName",
            width : 80,
            header : {
                text : "제품명"
            },
            styles : {
                textAlignment : "near"
            }
        }, {
            fieldName : "volumne",
            width : 80,
            header : {
                text : "용량"
            },
            styles : {
                textAlignment : "near"
            }
        }, {
            fieldName : "unit",
            width : 80,
            header : {
                text : "단위"
            },
            styles : {
                textAlignment : "near"
            }
        }, {
            fieldName : "price",
            width : 80,
            header : {
                text : "단가"
            },
            styles : {
                textAlignment : "far"
            }
        } ];

        if (grid == grdMain)
            grid.setColumns(columns);
    }
</pre>
          
  

이제 필드와 컬럼을 정의한 부분을 RealGrid가 로드된 시점에 호출해 보겠습니다.
아래 화면에서 선택된 부분을 코딩 합니다. id는 <div id=”grdMain”>태그의 id 속성값 이며, 화면에 그리드가 여러개인 경우 처리를 위해 필요합니다.
        
**default.jsp**

<pre class="prettyprint">
    function setupGridJs(id, width, height) {
        $("#"+id).css({ width : width, height : height });
        grdMain = new RealGridJS.GridView(id);
        dataProvider = new RealGridJS.LocalDataProvider();
        grdMain.setDataSource(dataProvider);
        
        setFields(dataProvider);
        setColumns(grdMain);
        setOption(grdMain);
        
        loadData(dataProvider);
    };
</pre>

이제 웹 페이지를 실행해 보면 그리드에 컬럼이 추가된 모습을 확인 할 수 있습니다.
        
![](/images/articles/RealGridJS_JAVASpring_MyBatis_MSSQLServer-add_fields_and_columns.gif/)
    

    
### Connecting a Database

    
이제 서버 작업으로 잠시 눈을 돌려 보겠습니다. Java Spring에서 MS SQLServer에 연결하여 데이터를 가져오는 작업은 어렵지 않습니다.

먼저 DB연결이 되었는지 요청에 응답할 페이지를 새로 하나 만들어 보겠습니다. 웹사이트 test/test.jsp 파일을 생성하고 DB연결 테스트용 Controller를 생성합니다.
        
**test.jsp**

<pre class="prettyprint">
&lt;%&#64; page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%&gt;
&lt;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv="Content-Type" content="text/html; charset=UTF-8"&gt;
&lt;title&gt;DB Test&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
연결됨.
&lt;/body&gt;
&lt;/html&gt;
</pre>
          
  

        
**TestController.java**

<pre class="prettyprint">
package com.test;

import java.sql.Connection;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

&#64;Controller
&#64;RequestMapping("/test/test.do")
public class TestController {
    &#64;Autowired private DataSource dataSource;
    
    &#64;RequestMapping
    public void db(){
        Connection conn = null;
        try{
            conn = dataSource.getConnection();
            System.out.println(conn);
        }catch(SQLException e){
            System.out.println("db connection is not obtained");
            e.printStackTrace();
        }finally{
            if(conn != null) try{conn.close();} catch(SQLException e){};
        }
    }
}
</pre>
          
  

WEB-INF 에 있는 web.xml에 dispather-servlet에 전해줄 url 값과 UTF-8 encodingFilter를 설정합니다.
        
**web.xml**

<pre class="prettyprint">
  &lt;servlet&gt;
    &lt;servlet-name&gt;dispatcher&lt;/servlet-name&gt;
    &lt;servlet-class&gt;org.springframework.web.servlet.DispatcherServlet&lt;/servlet-class&gt;
  &lt;/servlet&gt;
  &lt;servlet-mapping&gt;
    &lt;servlet-name&gt;dispatcher&lt;/servlet-name&gt;
    &lt;url-pattern&gt;*.do&lt;/url-pattern&gt;
  &lt;/servlet-mapping&gt;
  &lt;filter&gt;
    &lt;filter-name&gt;encodingFilter&lt;/filter-name&gt;
    &lt;filter-class&gt;org.springframework.web.filter.CharacterEncodingFilter&lt;/filter-class&gt;
    &lt;init-param&gt;
      &lt;param-name&gt;encoding&lt;/param-name&gt;
      &lt;param-value&gt;UTF-8&lt;/param-value&gt;
    &lt;/init-param&gt;
  &lt;/filter&gt;
  &lt;filter-mapping&gt;
    &lt;filter-name&gt;encodingFilter&lt;/filter-name&gt;
    &lt;url-pattern&gt;/*&lt;/url-pattern&gt;
  &lt;/filter-mapping&gt;
</pre>

          
  

dispatcher-servlet.xml파일을 생성해서 스프링 설정을 합니다.
우선은 test component만 등록하기 때문에 component-scan에 com.test 패키지 만 설정해줍니다.
<pre class="prettyprint">
&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;beans xmlns="http://www.springframework.org/schema/beans"
     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
     xmlns:context="http://www.springframework.org/schema/context"
     xmlns:tx="http://www.springframework.org/schema/tx"
     xmlns:mvc="http://www.springframework.org/schema/mvc"
     xsi:schemaLocation="http://www.springframework.org/schema/beans 
     http://www.springframework.org/schema/beans/spring-beans-3.1.xsd
     http://www.springframework.org/schema/context 
     http://www.springframework.org/schema/context/spring-context-3.1.xsd
     http://www.springframework.org/schema/tx 
     http://www.springframework.org/schema/tx/spring-tx-3.1.xsd
     http://www.springframework.org/schema/mvc
     http://www.springframework.org/schema/mvc/spring-mvc-3.1.xsd"&gt;
    
     &lt;mvc:annotation-driven/&gt;
         
     &lt;context:component-scan base-package="com.test"/&gt;
     
     &lt;bean id="viewResolver" class="org.springframework.web.servlet.view.InternalResourceViewResolver"&gt;
        &lt;property name="prefix" value="/view/"/&gt;
        &lt;property name="suffix" value=".jsp"/&gt;
     &lt;/bean&gt;
     
    &lt;bean id="dataSource" class="org.apache.tomcat.dbcp.dbcp.BasicDataSource"&gt;
        &lt;property name="driverClassName" value="${mssql.driver}"/&gt;
        &lt;property name="url" value="${mssql.url}"/&gt;
        &lt;property name="username" value="${mssql.username}" /&gt;
        &lt;property name="password" value="${mssql.password}" /&gt;
     &lt;/bean&gt;
     
 &lt;/beans&gt;
</pre>
        
![](/images/articles/RealGridJS_JAVASpring_MyBatis_MSSQLServer-connection_a_database.gif/)
          
  

Ms SQLServer와 연결하기위한 sqljdbc4.jar파일을 lib 폴더에 넣어줍니다.  
현재 까지 만든 파일과 위치를 보면 이렇게 구성되어 있습니다.
        
![](/images/articles/RealGridJS_JAVASpring_MyBatis_MSSQLServer-connection_a_database2.gif/)
          
  

윈도우 브라우저에 http://localhost:6918/sample/test/test.do 를 (현재 저의 톰캣서버 HTTP/1.1 포트번호는 6918입니다. ) 입력 하면은 콘솔창에 접속정보와

![](/images/articles/RealGridJS_JAVASpring_MyBatis_MSSQLServer-connection_a_database3.gif/)
          
  

윈도우 브라우저에서 연결됨의 메세지를 확인 할 수 있습니다.
        
![](/images/articles/RealGridJS_JAVASpring_MyBatis_MSSQLServer-connection_a_database4.gif/)
          
  

DB가 연결되었으면 MVC방식의 클래스 구성을 합니다.
먼저 DB정보를 받고 넘겨줄 Product 빈을 com.products.model 패키지에 생성합니다.
        
**Product.java**

<pre class="prettyprint">
package com.products.model;

public class Product {
    private int price;
    private String unit;
    private String code;
    private String volumne;
    private String productName;
    
    public String getCode() {
        return code;
    }
    public void setCode(String code) {
        this.code = code;
    }
    public String getProductName() {
        return productName;
    }
    public void setProductName(String productName) {
        this.productName = productName;
    }
    public String getVolumne() {
        return volumne;
    }
    public void setVolumne(String volumne) {
        this.volumne = volumne;
    }
    public String getUnit() {
        return unit;
    }
    public void setUnit(String unit) {
        this.unit = unit;
    }
    public int getPrice() {
        return price;
    }
    public void setPrice(int price) {
        this.price = price;
    }
}
</pre>
    

    
### ＠Repository

    
퍼시스턴스 계층에 사용할 interface ProductsDao, class ProductsDaoImpl를 
com.products.dao에 생성합니다.
        
**ProductsDao.java**

<pre class="prettyprint">
package com.products.dao;

import java.util.List;

import com.products.model.Product;

public interface ProductsDao {
    
    public List&lt;Product&gt; getProductList();
    public int addProduct(Product product);
    public int updateProduct(Product product);
    public int delProduct(String code);
}
</pre>
          
  

쿼리문을 담을 Mapper클래스와 xml생성해 보겠습니다.  
먼저 com.products.dao 패키지에 ProductsMapper클래스 생성합니다.
        
**ProductsMapper.java**

<pre class="prettyprint">
package com.products.dao.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Select;

import com.products.model.Product;

public interface ProductsMapper {
    
    &#64;Select("select * from Products")
    public List&lt;Product&gt; getProductList();
    
    public int addProduct(Product product);
    
    public int updateProduct(Product product);
    
    public int delProduct(String code);
}
</pre>
          
  

resources폴더에 com/products/config 폴더와 com/products/mapper폴더 생성하여서 config폴더엔 SqlMapConfig.xml 파일을 생성하고,
        
**SqlMapConfig.xml**

<pre class="prettyprint">
&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;!DOCTYPE configuration PUBLIC "-//mybatis.org//DTD Config 3.0//EN" "http://mybatis.org/dtd/mybatis-3-config.dtd"&gt;
&lt;configuration&gt;
    &lt;typeAliases&gt;
        &lt;typeAlias alias="product" type="com.products.model.Product" /&gt;
    &lt;/typeAliases&gt;
    
    &lt;mappers&gt;
        &lt;mapper resource="com/products/mapper/ProductsMapper.xml"/&gt;
    &lt;/mappers&gt;
&lt;/configuration&gt;
</pre>
  
  

mapper폴더엔 ProductsMapper.xml파일을 생성하겠습니다.

**ProductsMapper.xml**

<pre class="prettyprint">
&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"      
    "http://mybatis.org/dtd/mybatis-3-mapper.dtd"&gt;
&lt;mapper namespace="com.products.dao.mapper.ProductsMapper"&gt;

    &lt;insert id="addProduct" parameterType="product" &gt;
        INSERT INTO Products 
        VALUES(#{code},#{productName},#{volumne},#{unit},#{price})
    &lt;/insert&gt;
    
    &lt;update id="updateProduct" parameterType="product" &gt;
        UPDATE Products
        SET 
            productName = #{productName},
            volumne = #{volumne},
            unit = #{unit},
            price = #{price}
        WHERE code = #{code}
    &lt;/update&gt;
    
    &lt;delete id="delProduct" parameterType="String" &gt;
        DELETE Products
        WHERE code = #{code}
    &lt;/delete&gt;
    
&lt;/mapper&gt;
</pre>
          
  

간단한 쿼리문은 ProductsMapper 클래스에 정의하였습니다.
(본예제에서는 전체 리스트를 불러오는 select 쿼리만 클래스에 사용.)
새로 생성한 클래스와 xml을 dispatcher-servlet.xml에 설정해 줍니다.
        
**dispatcher-servlet.xml**

<pre class="prettyprint">
&lt;context:component-scan base-package="com.test"/&gt;
&lt;context:component-scan base-package="com.products"/&gt;
     
&lt;bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean"&gt;
    &lt;property name="dataSource" ref="dataSource"/&gt;
    &lt;property name="configLocation" value="classpath:com/products/config/SqlMapConfig.xml"/&gt;
&lt;/bean&gt;
     
&lt;bean id="productsMapper" class="org.mybatis.spring.mapper.MapperFactoryBean"&gt;
    &lt;property name="mapperInterface" value="com.products.dao.mapper.ProductsMapper" /&gt;
    &lt;property name="sqlSessionFactory" ref="sqlSessionFactory" /&gt;
&lt;/bean&gt;
</pre>
          
  

pom.xml에 ＠RequestBody나 ＠ResponseBody로 Json형태의 데이타를 주고받기 위해 jackson-mapper를 선언하고
Mybais의 기능을 사용하려면 mybatis- spring 선언해야 합니다.
        
**pom.xml**

<pre class="prettyprint">
&lt;dependency&gt;
    &lt;groupId&gt;org.mybatis&lt;/groupId&gt;
    &lt;artifactId&gt;mybatis-spring&lt;/artifactId&gt;
    &lt;version&gt;1.2.0&lt;/version&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
    &lt;groupId&gt;org.codehaus.jackson&lt;/groupId&gt;
    &lt;artifactId&gt;jackson-mapper-asl&lt;/artifactId&gt;
    &lt;version&gt;1.9.13&lt;/version&gt;
&lt;/dependency&gt;
</pre>
    

    
### ＠Service

    
서비스 계층에서 사용할 interface ProductsService, class ProductsServiceImpl을 만듭니다.
        
**ProductsService.java**

<pre class="prettyprint">
package com.products.service;

import java.util.List;

import com.products.model.Product;

public interface ProductsService {

    public List&lt;Product&gt; getProductList();
    
    public int addProduct(Product product);
    public int updateProduct(Product product);
    public int delProduct(String code);
}
</pre>
          
  

        
**ProductsServiceImpl.java**

<pre class="prettyprint">
package com.products.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.products.dao.ProductsDao;
import com.products.model.Product;

&#64;Service
public class ProductsServiceImpl implements ProductsService {
    &#64;Autowired ProductsDao proDao;
    
    public List&lt;Product&gt; getProductList() {
        return proDao.getProductList();
    }

    public int addProduct(Product product) {
        return proDao.addProduct(product);
    }

    public int updateProduct(Product product) {
        return proDao.updateProduct(product);
    }

    public int delProduct(String code) {
        return proDao.delProduct(code);
    }
}
</pre>
    

    
### ＠Controller

    
        

controller를 만듭니다.
        
**ProductsController.java**

<pre class="prettyprint">
package com.products.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.products.model.Product;
import com.products.service.ProductsService;

&#64;Controller
public class ProductsController {
    &#64;Autowired ProductsService proService;
    
    &#64;RequestMapping(value="/default.do", method=RequestMethod.GET)
    public void openPage(){ }
    
    &#64;RequestMapping(value="/getProducts.do")
    public &#64;ResponseBody List&lt;Product&gt; productlList(){
        List&lt;Product&gt; product = proService.getProductList();
        return product;
    }
}
</pre>

＠ResponseBody 로 JSONArray형태로 반활할 List 타입의 빈을 지정해주면 깔끔하게 json형태로 넘어가서 dataProvider.loadData에 값이 들어가게 됩니다.
    

    
### Load Data

    
RealGrid에 데이터를 설정하는 방법은 여러가지가 있습니다. 본 자습서에서는 DataProvider의 fillJsonData()를 이용해 비동기 방식으로 데이터를 가져오는 방법에 대해 설명합니다. 이전 장에서 만든 서버 페이지를 호출 하여 데이터를 가져온 다음 이를 DataProvider에 넘겨 주기 위해 아래 코드를 입력 합니다.
        
**default.jsp**

<pre class="prettyprint">
function loadData(provider) {
    $.ajax({
        type : "post",
        dataType : "json",
        url : "/sample/getProducts.do",
        success : function(data){
            provider.fillJsonData(data);
        },
        error : function(xhr, status, error){
            alert(error);
        }
    });
}
</pre>
          
  

다시 한번 setupGridJs에 loadData()함수를 호출하여 데이터를 RealGrid에 로드해 보도록 하겠습니다.
<pre class="prettyprint">
function setupGridJs(id, width, height) {
    $("#"+id).css({ width : width, height : height });
    grdMain = new RealGridJS.GridView(id);
    dataProvider = new RealGridJS.LocalDataProvider();
    grdMain.setDataSource(dataProvider);
    
    setFields(dataProvider);
    setColumns(grdMain);
    
    loadData(dataProvider);
};
</pre>
          
  

이제 웹 사이트를 실행 하면 그리드에 데이터베이스에서 가져온 데이터가 로드되는 모습을 확인 할 수 있습니다.

![](/images/articles/RealGridJS_JAVASpring_MyBatis_MSSQLServer-load_data.gif/)
    

    
### Insert Data

    
그리드의 editOptions.insertable이 true이면 사용자는 Insert키로 행 삽입을 시작할 수 있습니다. 또, editOptions.appendable이 true이면 마지막 행에서 아래 화살표 키로 행 추가를 시작할 수 있습니다. 셀 편집 중 Esc 키를 누르면 셀 편집이 취소되고, 셀 편집 중이 아닌 상태에서 Esc 키를 누르면 행 추가가 취소됩니다.
또, 아래 예제와 같이 javascript 메소드를 통해 사용자가 행 삽입/추가를 할 수 있습니다.
          
  

editOptions에 대한 보다 자세한 설명은 다음 링크를 참조하세요.
[http://doc.realgrid.net/ApiDoc/EditOptions](http://doc.realgrid.net/ApiDoc/EditOptions)
<pre class="prettyprint">
function setupGridJs(id, width, height) {
    $("#"+id).css({ width : width, height : height });
    grdMain = new RealGridJS.GridView(id);
    dataProvider = new RealGridJS.LocalDataProvider();
    grdMain.setDataSource(dataProvider);
    
    setFields(dataProvider);
    setColumns(grdMain);
    setOption(grdMain);
    
    loadData(dataProvider);
};

function setOption(grid) {
    grid.setOptions({
        edit : {
            insertable : true,
            appendable : true
        }
    });
}
</pre>
          
  

이 예제에서는 바로  행 저장하는 방식으로 처리하도록 하겠습니다.  
우선 서버에서 인서트 작업을 처리 하기 위해 controller에 insert 메서드를 추가하도록 하겠습니다.
          
  

insert 메서드의 내용은 다음과 같습니다.
        
**ProductsController.java**

<pre class="prettyprint">
&#64;RequestMapping(value="/insertProducts.do")
public &#64;ResponseBody int insertProduct(&#64;ModelAttribute Product product){
    int num = proService.addProduct(product);
    return num;
}
</pre>
          
  

default.jsp로 돌아와서 아래와 같이 삽입/추가/저장 버튼 3개를 추가하도록 합니다.
<pre class="prettyprint">
&lt;input type="button" id="btnInsert" value="Insert Row" /&gt;
&lt;input type="button" id="btnAppend" value="Append Row" /&gt;
&lt;input type="button" id="btnSaveData" value="Save Data" /&gt;
</pre>
          
  

각 버튼이 수행할 메소드를 작성합니다.
<pre class="prettyprint">
$(function() {
    $("#btnInsert").click(btnInsertClickHandler);
    $("#btnAppend").click(btnAppendClickHandler);
    $("#btnSaveData").click(btnSaveDataClickHandler);
    setupGridJs("grdMain", "100%", "300");
});

function btnInsertClickHandler(e) {
    var curr = grdMain.getCurrent();
    grdMain.beginInsertRow(Math.max(0, curr.itemIndex));
    grdMain.showEditor();
    grdMain.setFocus();
}

function btnAppendClickHandler(e) {
    grdMain.beginAppendRow();
    grdMain.showEditor();
    grdMain.setFocus();
}

function btnSaveDataClickHandler(e) {
    grdMain.commit();

    var currRow = grdMain.getCurrent().dataRow;
    if (currRow &lt; 0)
        return;

    var currState = dataProvider.getRowState(currRow);
    if (currState == "created") {
        saveData("/sample/insertProducts.do");
    }
}

function saveData(urlStr) {
    var jRowData = dataProvider.getJsonRow(grdMain.getCurrent().dataRow);

    $.post(urlStr, jRowData, function(data) {
        if (data &gt; 0) {
            alert("저장 성공");
            dataProvider.clearRowStates(true);
        } else {
            alert("저장 실패!");
        }
    });
}
</pre>
          
  

웹 페이지를 실행하여, 인서트 후 저장버튼을 클릭하여 정상적으로 Insert가 되는지 확인 합니다. 단, 저장 버튼은 현재 선택된 행에만 작동합니다.
          
  

RealGrid는 dataProvider를 통하여 데이터 입출력을 행합니다. 
그리드에서 편집된 데이터는 그리드에만 존재하며 편집 완료시에만 dataProvider로 반영됩니다. 
          
  

편집 완료는 행 바꿈이나 RealGrids.commit() 메소드를 호출 하여 편집 완료를 시킬 수 있습니다.
          
  

행 추가후 인서트할 자료를 입력 한 후 Row를 변경(commit())하여 stateBar 영역이 어떻게 바뀌었는지 확인해보세요
        
![](/images/articles/RealGridJS_JAVASpring_MyBatis_MSSQLServer-insert_data.gif/)
        
>RealGrid 의 RowStates  
>RealGrid 의 RowState는 5가지의 상태가 있으며  NONE, CREATED, UPDATED, DELETED, CREATE_AND_DELETED로 구분됩니다.
    

    
### Update Data

    
Update는 Insert의 작업방법과 같습니다. update 메소드를 생성 후 ajax url만 수정해주시면 됩니다.
        
**ProductsController.java**

<pre class="prettyprint">
&#64;RequestMapping(value="/updateProducts.do")
public &#64;ResponseBody int updateProduct(&#64;ModelAttribute Product product){
    return proService.updateProduct(product);
}
</pre>    
          
  

수정은 별도의 버튼이 필요하지 않고 저장시에만 이 데이터가 수정되었는지 확인하면 됩니다.
RealGrid는 데이터가 수정되면 RowState를 UPDATED로 변경합니다. 이것을 토대로 default.jsp 을 수정해보도록 하겠습니다.
<pre class="prettyprint">
grdMain.commit();

var currRow = grdMain.getCurrent().dataRow;
if (currRow < 0)
    return;

var currState = dataProvider.getRowState(currRow);
if(currState == "created") {
    saveData("/sample/insertProducts.do");
} else if (currState == "updated") {
    saveData("/sample/updateProducts.do");
}
</pre>
          
  

위의 코드와 같이 현재 그리드 상태가 UPDATED인지 확인하고 “/sample/updateProducts.do” 를 호출하도록 수정하면 됩니다.
          
  

기존에 입력되어 있는 데이터를 수정하여 편집완료(행 바꿈 or commit()) 시킨 후 statusBar 영역이 어떻게 바뀌었는지 확인해보세요.
        
![](/images/articles/RealGridJS_JAVASpring_MyBatis_MSSQLServer-update_data.gif/)
    

    
### Delete Data

    
그리드 editOptions.deletable이 true이면 사용자는 Ctrl+Del 키를 눌러 현재 선택된 행을 삭제할 수 있습니다.
실제 삭제하기 전에 사용자 확인을 받을 필요가 있다면 editOptions.deleteRowsConfirm 속성을 true로 지정하면 됩니다.
확인 메시지를 editOptions.deleteRowsMessage로 지정할 수도 있습니다.
          
  

이 예제에서는 삭제 기능 수행시 바로 삭제하는 것이 아닌 RowState를 DELETED 나 CREATE_AND_DELETED로 변경하는 softDeleting 옵션을 사용합니다. 
          
  

물론 삭제 기능 사용시 행을 바로 삭제하는 것도 RealGrid 에서 제공되는 callback 함수인  dataProvider.onRowDeleting() 이나 dataProvider.onRowDeleted() 를 이용하여 처리 할 수 있습니다.
          
  

이제 실제 작업을 해보도록 하겠습니다.  
INSERT, UPDATE DATA에서 작업했던것과 같은 방법으로 DataDelete메소드를 생성합니다.
        
**ProductsController.java**

<pre class="prettyprint">
&#64;RequestMapping(value="/deleteProducts.do")
public &#64;ResponseBody int delProduct(&#64;RequestParam String code){
    return proService.delProduct(code);
}
</pre>  
          
  

default.jsp 로 돌아와서 삭제 기능을 사용하기 위해 setOptions를 다음과 같이 수정합니다.
<pre class="prettyprint">
function setOption(grid) {
    grid.setOptions({
        edit : {
            insertable : true,
            appendable : true,
            deletable : true,
            deleteRowsConfirm : true,
            deleteRowsMessage : "Are you sure?"
        }
    });

    dataProvider.setOptions({
        softDeleting : true
    });
}
</pre>
          
  

btnSaveDataClickHandler()는 다음과 같이 수정합니다.
<pre class="prettyprint">
function btnSaveDataClickHandler(e) {
    grdMain.commit();

    var currRow = grdMain.getCurrent().dataRow;
    if (currRow < 0)
        return;

    var currState = dataProvider.getRowState(currRow);
    if (currState == "created") {
        saveData("/sample/insertProducts.do");
    } else if (currState == "updated") {
        saveData("/sample/updateProducts.do");
    } else if (currState == "deleted") {
        saveData("/sample/deleteProducts.do");
    }
}
</pre>
          
  

자료를 조회 후 CTRL+DEL 키를 입력하여 삭제 상태로 바꾼 후 statusBar 영역이 어떻게 바뀌었는지 확인해보세요.
        
![](/images/articles/RealGridJS_JAVASpring_MyBatis_MSSQLServer-delete_data.gif/)

deleteRowsConfirm, softDeleting property를  true, false로 바꿔보면서 테스트해보세요.   
저장버튼을 클릭하여 삭제가 제대로 수행되는지 확인해보세요.  
삭제가 잘 되셨나요??  
저장버튼을 눌러 삭제를 했음에도 불구하고 DB에서는 삭제가 됐지만 그리드에는 데이터가 남아 있음을 확인 하실 수 있습니다.    

이 경우 RealGrids.clearRowStates()의 파라메터를 true로 주시면 해결하실 수 있습니다.  
해당 파라메터의 기능은 RowState를 Clear할때 RowState가 DELETE인것은 Row를 삭제하는 기능입니다.  
<pre class="prettyprint">
function saveData(urlStr) {
    var jRowData = dataProvider.getJsonRow(grdMain.getCurrent().dataRow);

    $.post(urlStr, jRowData, function(data) {
        if (data > 0) {
            alert("저장 성공");
            dataProvider.clearRowStates(true);//true
        } else {
            alert("저장 실패!");
        }
    });
}
</pre>
    

    
### Save Data

    
지금까지의 작업은 모두 행 단위 작업이었습니다. 업무 처리를 하다보면 행 단위 작업이 아닌 일괄 작업이 필요한 경우가 많이 있었을 것입니다. 

지금부터는 RealGrid를 사용하여 INSERT, UPDATE, DELETE를 트랙젝션으로 묶어서 처리하는 방법으로 해보도록 하겠습니다.

default.jsp에 btnSaveAllData 버튼을 추가하고 해당 메소드를 아래와 같이 작성합니다.
<pre class="prettyprint">
function btnSaveAllDataClickHandler(e) {
    grdMain.commit();

    savadataAll("/sample/allSaveProducts.do");
}

function savadataAll(urlStr) {
    var state;
    var jData;
    var jRowsData = [];

    var rows = dataProvider.getAllStateRows();

    if (rows.updated.length > 0) {
        $.each(rows.updated, function(k, v) {
            jData = dataProvider.getJsonRow(v);
            jData.state = "updated";
            jRowsData.push(jData);
        });
    }

    if (rows.deleted.length > 0) {
        $.each(rows.deleted, function(k, v) {
            jData = dataProvider.getJsonRow(v);
            jData.state = "deleted";
            jRowsData.push(jData);
        });
    }

    if (rows.created.length > 0) {
        $.each(rows.created, function(k, v) {
            jData = dataProvider.getJsonRow(v);
            jData.state = "created";
            jRowsData.push(jData);
        });
    }

    if (jRowsData.length == 0) {
        dataProvider.clearRowStates(true);
        return;
    }
</pre>
          
  

JSON Array로 넘겨받은 데이터를 루프 돌면서 RowState를 확인하고, 해당 액션에 맞게 처리합니다.  
dataProvider.getAllStateRows() 함수를 이용하면 state가 none이 아닌 row번호를  
{updated: Array[0], deleted: Array[0], created: Array[0], createAndDeleted: Array[0]} 형식으로 가져올수 있습니다.
          

>*자세한 내용은 [http://demo.realgrid.net/Demo/RowState](http://demo.realgrid.net/Demo/RowState) 페이지를 참조해주세요.
<pre class="prettyprint">
$.ajax({
        headers : {
            "Accept" : "application/json",
            "Content-Type" : "application/json"
        },
        url : urlStr,
        type : "post",
        data : JSON.stringify(jRowsData),
        dataType : "json",
        success : function(data) {
            if (data > 0) {
                alert("저장 성공!");
                dataProvider.clearRowStates(true);
            } else {
                alert("저장 실패!");
            }
        },
        error : function(request, status, error) {
            alert("code:" + request.status + "\n" + "error:" + error);
        }
    });
}
</pre>
<pre class="prettyprint">
&lt;input type="button" id="btnInsert" value="Insert Row" /&gt;
&lt;input type="button" id="btnAppend" value="Append Row" /&gt;
&lt;input type="button" id="btnSaveData" value="Save Data" /&gt;
&lt;input type="button" id="btnSaveAllData" value="Save All Data" /&gt;
</pre>
          
  

다건의 데이터를 받으려면 List형식의 빈으로 받아야 하는데 Spring 3.1에서는 ＠ModelAttribute 나 ＠RequestBody로 List<Object>로 받는건 안됩니다.  
스프링을 4.0으로 업그레이드를 하거나 아니면 JSON.stringify함수를 이용해서 String 타입의 JsonArray로 서버로 Request 합니다.
          

본예제는 Spring 3.1에서 구현 하였습니다.
          

먼저 Product 빈에 새로 추가된 state를 받을 변수를 추가합니다.
        
**Product.java**

<pre class="prettyprint">
package com.products.model;

public class Product {
    private int price;
    private String unit;
    private String code;
    private String volumne;
    private String productName;
    private String state;
    
    public String getState() {
        return state;
    }
    public void setState(String state) {
        this.state = state;
    }
    public String getCode() {
        return code;
    }
    public void setCode(String code) {
        this.code = code;
    }
    ...
}
</pre>
          
  

JSONArray 를 사용하기 위해 pom.xml에  json-lib을 추가해 줍니다.
        
**pom.xml**

<pre class="prettyprint">
&lt;dependency&gt;
    &lt;groupId&gt;net.sf.json-lib&lt;/groupId&gt;
    &lt;artifactId&gt;json-lib&lt;/artifactId&gt;
    &lt;version&gt;2.4&lt;/version&gt;
    &lt;classifier&gt;jdk15&lt;/classifier&gt;
&lt;/dependency&gt;
</pre>
          
  

controller에 allSave메소드를 생성하고 아래와 같이 작성합니다.
        
**ProductsController.java**

<pre class="prettyprint">
@RequestMapping(value="/allSaveProducts.do",method=RequestMethod.POST)
public &#64;ResponseBody int allSave(&#64;RequestBody String pdStringList){
    List&lt;Product&gt; pdList = new ArrayList&lt;Product&gt;();
    JSONArray productJson = JSONArray.fromObject(JSONSerializer.toJSON(pdStringList));
        
    for(int i = 0; i &lt; productJson.size(); i++){
        Product pd = (Product)JSONObject.toBean(productJson.getJSONObject(i), Product.class);
        pdList.add(pd);
    }
        
    return proService.addAllProduct(pdList);
}
</pre>  
          
  

다건의 데이타 전송시 트랜잭션 관리를 위해 Service 에 pdList를 인자로 받을 메소드를 추가합니다.
        
**ProductsService.java**

<pre class="prettyprint">
package com.products.service;

import java.util.List;

import com.products.model.Product;

public interface ProductsService {

    public List&lt;Product&gt; getProductList();
    
    public int addAllProduct(List&lt;Product&gt; productList);
    
    ...
}
</pre>
        
**ProductsServiceImpl.java**

<pre class="prettyprint">
package com.products.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.products.dao.ProductsDao;
import com.products.model.Product;

&#64;Service
public class ProductsServiceImpl implements ProductsService {
    &#64;Autowired ProductsDao proDao;
    
    &#64;Transactional
    public int addAllProduct(List&lt;Product&gt; pdList) {
        
        int num = 0;
        
        for(Product product : pdList){
            if(product.getState().equals("created"))
                num += proDao.addProduct(product);
            else if(product.getState().equals("updated"))
                num += proDao.updateProduct(product);
            else if(product.getState().equals("deleted"))
                num += proDao.delProduct(product.getCode());
        }
        return num;
    }

    ...
}
</pre>
          
  

＠Transactional 어노테이션을 붙여서   데이타 저장 오류시   Rollback 합니다.  
트랜잭션을 사용하기위해 dispatcher-servlet.xml에 tx:annotation-driven을 추가합니다.
        
**dispatcher-servlet.xml**

<pre class="prettyprint">
 &lt;bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager"&gt;
    &lt;property name="dataSource" ref="dataSource"/&gt;
 &lt;/bean&gt;
</pre>
          
  

데이타를 변경한 후 테스트를 하면
        
![](/images/articles/RealGridJS_JAVASpring_MyBatis_MSSQLServer-save_data.gif/)
          
  

성공적으로 잘 변경됩니다.
        
![](/images/articles/RealGridJS_JAVASpring_MyBatis_MSSQLServer-save_data2.gif/)
    
