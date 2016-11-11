---
layout: apipost
title: EditorOptions
part: Types
typename: Classes
order: EditorOptions
objectname: 
directiontype: 
permalink: /api/types/EditorOptions/
jsonly: true
tags: 
  - EditorOptions
  - 에디터옵션
  - 달력수정 
  - 요일수정
---

#### Description

 그리드 수준에서 관리되는 에디터 정보들에 대한 설정 모델이다.  

#### Properties

> **yearDisplayFormat**  
> Type: String   
> Default: "{Y}년"      
> 달력 팝업에 표시되는 년의 표시형태를 지정한다. "년"에 대한 문구만 수정 가능하다.    
> ex) "{Y} Year"  

> **monthDisplayFormat**    
> Type: String     
> Default: "{M}월"     
> 달력 팝업에 표시되는 월의 표시형태를 지정한다. "월"에 대한 문구만 수정 가능하다.  
> month 속성이 지정되면 monthDisplayFormat 속성은 무시된다.  
> ex) "{M} Month"    

> **months**    
> Type: Array of String     
> Default: Null   
> 달력 팝업에 표시되는 월의 표시형태를 지정한다.   
> ex) ['Jan', 'Feb, 'Mar', 'Apr'....]    

> **weekDays**  
> Type: Array of String     
> Default: Null   
> 달력 팝업에 표시되는 요일의 표시형태를 지정한다.   
> ex) ['SUN', 'MON', 'TUE', 'WED'....]   

> **viewGridInside**  
> Type: Boolean     
> Default: false   
> editor element가 그리드 element내부에 생성되어 브라우저가 스크롤 되는 경우 함께 스크롤 된다.        

> **useCssStyle**  
> Type: Boolean     
> Default: false   
> dropDown, search, date Editor에 CSS Style을 적용할 것인지의 여부를 지정한다.       

> **useCssStyleDropDownList**  
> Type: Boolean     
> Default: false   
> dropDown, search Editor에 CSS Style을 적용할 것인지의 여부를 지정한다.       
> useCssStyle, useCssStyleDropDownList 둘 중 하나라도 true이면 사용으로 설정된다.   

> **useCssStyleDatePicker**  
> Type: Boolean     
> Default: false   
> date Editor에 CSS Style을 적용할 것인지의 여부를 지정한다.       
> useCssStyle, useCssStyleDatePicker 둘 중 하나라도 true이면 사용으로 설정된다.  

> **useCssStylePopupMenu**  
> Type: Boolean     
> Default: false   
> popup 메뉴에 CSS Style을 적용할 것인지의 여부를 지정한다.       
> useCssStyle, useCssStylePopupMenu 둘 중 하나라도 true이면 사용으로 설정된다.  

> **applyCellFont**  
> Type: Boolean     
> Default: false   
> Cell Editor에 해당 컬럼의 font 및 fontSize 적용여부를 지정한다.       


#### Examples   

<pre class="prettyprint">
gridView.setEditorOptions({
    useCssStyle: true,
    yearDisplayFormat:"{Y}년",   // "{Y} Year"
    //monthDisplayFormat:"{M}월",  // "{M} Month"  
    months: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],  // ['Jan', 'Feb, 'Mar', 'Apr'....]   
    weekDays: ["일", "월", "화", "수", "목", "금", "토"] // ['SUN', 'MON', 'TUE', 'WED'....]  
});
</pre>

<pre class="prettyprint">
&lt;style type=&quot;text/css&quot;&gt;
   .rg-calendar {
        font-family: "나눔고딕코딩";
        font-size: 12px;
        background:#fff;
        border:1px solid rgba(50, 50, 50, 1);
        box-shadow:rgba(0, 0, 0, 0.8) 1px 2px 5px;
    }
    .rg-cal-header {
        height:20px;
    }
    .rg-cal-year {
        cursor:default;
        top:5px;
    }
    .rg-cal-month {
        cursor:pointer;
        top:5px;
    }
    .rg-cal-prev-month {
        background-image:url("../../Scripts/realgridjs/assets/cal_prev.png");
        width:20px;
        height:20px;
    }
    .rg-cal-prev-month:hover {
        background-image:url("../../Scripts/realgridjs/assets/cal_prev_hover.png");
    }
    .rg-cal-prev-month:active {
        background-image:url("../../Scripts/realgridjs/assets/cal_prev_active.png");
    }
    .rg-cal-next-month {
        background-image:url("../../Scripts/realgridjs/assets/cal_next.png");
        width:20px;
        height:20px;
    }
    .rg-cal-next-month:hover {
        background-image:url("../../Scripts/realgridjs/assets/cal_next_hover.png");
    }
    .rg-cal-next-month:active {
        background-image:url("../../Scripts/realgridjs/assets/cal_next_active.png");
    }
    .rg-cal-today-button {
        padding: 2px;
        font-size: 12px;
        font-family: "나눔고딕코딩";
        border: 1px solid transparent;
        border-radius: 3px;
        cursor:pointer;
    }
    .rg-cal-today-button:hover {
        border: 1px solid #aaa;
        background-color: #fff;
        text-decoration: underline;
    }
    .rg-cal-today-button:active {
    }
    .rg-cal-next-year {
        background-image:url("../../Scripts/realgridjs/assets/cal_up.png");
    }
    .rg-cal-next-year:hover{
        background-image:url("../../Scripts/realgridjs/assets/cal_up_hover.png");
    }
    .rg-cal-next-year:active{
        background-image:url("../../Scripts/realgridjs/assets/cal_up_active.png");
    }
    .rg-cal-prev-year {
        background-image:url("../../Scripts/realgridjs/assets/cal_down.png");
    }
    .rg-cal-prev-year:hover{
        background-image:url("../../Scripts/realgridjs/assets/cal_down_hover.png");
    }
    .rg-cal-prev-year:active{
        background-image:url("../../Scripts/realgridjs/assets/cal_down_active.png");
    }
    .rg-cal-weeks {
        color:black;
        font-size:12px;
        font-family: "나눔고딕코딩";
        cursor:default;
    }
    .rg-cal-week-sun {
        color:red;
    }
    .rg-cal-week-sat {
        color:blue;
    }
    .rg-cal-days {
        font-family: "나눔고딕코딩";
        font-size:12px;
        text-align: center;
    }
    .rg-cal-day {
        cursor:pointer;
        background: #f5f5f5;
        border:1px solid #eee;
        width:30px;
        height: 30px;
        border-radius: 7px;
        font-family: "나눔고딕코딩";
        font-size:12px;
    }
    .rg-cal-day:hover {
        background: #55FFf5;
        color:red;
        border:1px solid #eee;
    }
    .rg-cal-prev-day {
        color:#ccc;
        border:1px solid #fff;
    }
    .rg-cal-next-day {
        color:#ccc;
        border:1px solid #fff;
    }
    .rg-cal-today {
        background: #d5d5d5;
    }
    .rg-cal-focusday {
        background: rgba(255, 255, 0, 0.3);
        border: 1px solid #aaa;
        color: #333;
    }
    .rg-cal-month-picker {
        margin: 0px;
        cursor: pointer;
        background: #fff;
        border: 1px solid rgba(50, 50, 50, 0.5);
        box-shadow: rgba(0, 0, 0, 0.5) 1px 2px 5px;
        font-family: "나눔고딕코딩";
        font-size: 12px;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
    }
    .rg-cal-month-picker-month {
        padding: 1px 4px 1px 4px;
        width:20px;
        height:20px;
        border-radius: 7px;
        text-align: center;
    }
    .rg-cal-month-picker-month:hover {
        background:#e8e8e8;
    }

    .rg-dropdownlist{
        background:#fff;
        font-family: 나눔고딕코딩;
        border: 1px solid rgb(50, 50, 50);
        box-shadow: rgba(0, 0, 0, 0.8) 1px 2px 5px;
        font-size: 10pt;
        padding: 0px;
        margin: 0px;
    }
    .rg-dropdown-select {
        background:#fffa00;
        margin:2px;
    }
    .rg-dropdown-item {
        margin:2px;
    }
    .rg-dropdown-item:hover {
        background:#88ff88;
    }

    .rg-popup-menu {
        background : rgb(233, 233, 233);
        border : 1px solid rgb(200, 200, 200);
        box-shadow : rgba(0, 0, 0, 0.8) 1px 2px 5px;
        font-family : 나눔고딕코딩;
        font-style : normal;
        font-variant : normal;
        font-weight : normal;
        font-size : 10pt;
        padding : 4px;
        margin : 0px;
    }
    .rg-popup-item {
        padding-top : 2px;
        padding-bottom : 2px;
        height:20px;
        cursor:pointer;
    }
    .rg-popup-item:hover {
        background-color : #f8f8f8; 
    }
    .rg-popup-separator-hr {
        height : 1px;
        border : 0px;
        margin : 2px;
        color : #777;
        background-color : #777;
    }
    .rg-popup-expander {
        background-image:url("../../Scripts/realgridjs/assets/menu_expander.png");
        background-repeat : no-repeat;
        background-position : center center;

    }
    .rg-popup-check {
        /*
        background-image:url("../../Scripts/realgridjs/assets/menu_uncheck.png");
        background-repeat : no-repeat;
        background-position : center center;
        */
    }
    .rg-popup-check-checked {
        background-image:url("../../Scripts/realgridjs/assets/menu_check.png");
        background-repeat : no-repeat;
        background-position : center center;
    }
    .rg-popup-radio {
        /*
        background-image:url("../../Scripts/realgridjs/assets/menu_unradio.png");
        background-repeat : no-repeat;
        background-position : center center;
        */}
    .rg-popup-radio-checked {
        background-image:url("../../Scripts/realgridjs/assets/menu_radio.png");
        background-repeat : no-repeat;
        background-position : center center;
    }
    .rg-popup-group1 {
        background : #ffd800
    }
&lt;/style&gt;
</pre>
---

#### API Links

* [DateCellEditor](/api/types/DateCellEditor/)
* [getEditorOptions](/api/GridBase/getEditorOptions/)   
* [setEditorOptions](/api/GridBase/setEditorOptions/)   
 