---
layout: apipost
title: DateCellEditor
part: Types
typename: Cell Editors
order: DateCellEditor
objectname: 
directiontype: 
permalink: /api/types/DateCellEditor/
tags:
  - DateCellEditor
  - DateEditor
  - 날짜에디터
  - 달력수정
  - 요일수정  
---

#### Description

Date picker를 표시해서 날짜를 선택한다.  
RealGridJS V1.0.12 버전 부터는 달력 팝업에 표시되는 달력의 년, 월이나 요일의 표시 문구를 GridBase.setEditorOptions()을 통해 개발자가 원하는 대로 바꿀 수 있다. (ex 월, 화, 수... -> Mon, Tue, Wed...) 

#### Properties

> **textReadOnly**    
> Type: boolean    
> Default: false    
> true인경우 키보드를 이용해서 날짜를 입력할수 없다.    

> **yearNavigation**    
> Type: boolean    
> Default: false    
> true이면 달력 팝업에 년도이동버튼이 표시된다    

> **commitOnSelect**    
> Type: boolean    
> Default: true    
> true이면 달력 팝업에서 날짜를 선택과 동시에 값이 반영되고 onCellEdited event가 발생한다.    
> false이면 날짜를 선택시 grid에 날짜가 입력되고 dataProvider에는 Edit종료후 반영된다.    

> **editFormat**    
> Type: String    
> Default: null    

> **yearDisplayFormat**    
> Type: String    
> Default: "{Y}년"    
> '년'에 대한 문구를 지정한다.   
> ex) "{Y} year"

> **monthDisplayFormat**    
> Type: String    
> Default: "{M}월"    
> '월'에 대한 문구를 지정한다.
> ex) "{Y} month"

> **months**    
> Type: Array of String    
> Default: undefined   
> 월에 대한 표시 방법을 지정한다. months 속성을 지정하면 monthDisplayFormat 속성은 무시된다.   
> ex) ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

> **weekDays**    
> Type: Array of String    
> Default: undefined   
> 각 요일에 대한 표시 방법을 지정한다.    
> ex> ["sun", "mon", "tue", "wed", "thr", "fri", "sat"]  

> **maxLength**  
> Type: Number  
> Default:  
> 사용자가 입력할 수 있는 문자의 최대 개수. 

> **mask**  
> Type: [Mask](/api/types/Mask)     
> Default: null  
> 입력 마스크를 지정한다.  
> JS ver 1.1.22부터 지원된다. 

#### Examples   

<pre class="prettyprint">
gridView.setColumns([{
	"name": "OrderDate",
	"fieldName": "OrderDate",
	"width": "180",
	"sortable": false,
	"editor": {
	    "type": "date",
	    "datetimeFormat": "yyyy.MM.dd",
	    "yearDisplayFormat": "{Y} Year ",   
	    "monthDisplayFormat": "{M} Month",  
	    "months": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],  // ['Jan', 'Feb, 'Mar', 'Apr'....]   
	    "weekDays": ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
	    "mask": {
	      "editMask": "9999.99.99",  
	      "includedFormat": true,
	      "overWrite": true 
	    }, 	    
	},
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
