---
layout: apipost
title: BTDateCellEditor
part: Types
typename: Cell Editors
order: BTDateCellEditor
objectname: 
directiontype: 
permalink: /api/types/BTDateCellEditor/
jsonly: true
versions:
    - JS 1.1.26+
tags:
  - DateCellEditor
  - DateEditor
  - 날짜에디터
  - 달력수정
  - 요일수정  
---

#### Description

BootStrap DatePicker를 이용한 Editor이다.    
반드시 아래와 같이 bootstrap-datepicker 파일을 적용해야 정상적으로 월 선택 달력 기능을 사용할 수 있다.   
&lt;script type=&quot;text/javascript&quot; src=&quot;/lib/bootstrap/bootstrap-datepicker.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;/lib/bootstrap/bootstrap-datepicker.ko.min.js&quot;&gt;&lt;/script&gt;
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;/lib/css/bootstrap-datepicker.css&quot;&gt;
 

#### Properties

> **btOptions**    
> Type: object    
> Default: null    
> BootStrap DatePicker의 옵션과 동일하다.(https://uxsolutions.github.io/bootstrap-datepicker/  참조)  

> **textReadOnly**    
> Type: boolean    
> Default: false    
> true인경우 키보드를 이용해서 날짜를 입력할수 없다.    

> **editFormat**    
> Type: String    
> Default: null  
> 편집 형식을 지정한다.    

> **minDate**  
> Type: Date | String     
> Default: null  
> 입력 가능한 최소 날짜를 지정한다. 키보드로 입력시 minDate보다 이전 날짜가 입력되면 minDate로 변경된다      

> **maxDate**  
> Type: Date | String     
> Default: null  
> 입력 가능한 최대날짜를 지정한다. 키보드로 입력시 maxDate보다 이후 날짜가 입력되면 maxDate로 변경된다.  

> **commitOnSelect**    
> Type: boolean    
> Default: false    
> true이면 달력 팝업에서 날짜를 선택과 동시에 값이 반영되고 onCellEdited event가 발생한다.    
> false이면 날짜를 선택시 grid에 날짜가 입력되고 dataProvider에는 Edit종료후 반영된다.    
> RealGridJS 1.1.29부터 가능한다.  

#### Examples   

<pre class="prettyprint">
gridView.setColumns([{
	"name": "OrderDate",
	"fieldName": "OrderDate",
	"width": "180",
	"sortable": false,
    "editor": {
        "type": "btdate",
        "btOptions": {
            "startView": 1,
            "minViewMode": 1,
            "todayBtn": "linked",
            "language": "kr",
            "todayHighlight": true,
            "language": "ko"
        },
        "datetimeFormat": "yyyyMMdd",
        "textReadOnly": true,
        "mask": {
            "editMask": "9999-99-99"
        }
    }
	"styles": {
	    "textAlignment": "center",
        "datetimeFormat": "yyyy.MM.dd"
	},
	"header": {
	    "text": "Date Edit",
	    "styles": {
	        "background": "linear,#22ffd500,#ffffd500,90"
	    }
	}
}]);
</pre>

---

#### API Links

* [EditorOptions](/api/types/EditorOptions/)
* [getEditorOptions](/api/GridBase/getEditorOptions/)   
* [setEditorOptions](/api/GridBase/setEditorOptions/)   
