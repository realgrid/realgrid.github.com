---
layout: apipost
title: ToastOptions
part: Types
typename: Classes
order: ToastOptions
objectname: 
directiontype: 
permalink: /api/types/ToastOptions/
tags: 
    - 토스트옵션
    - 진행중메시지
    - 모래시계
---


#### Description

 대량 데이터셋의 정렬/필터링/그룹핑시 화면이 멈춰있는 상태일때 진행중임을 알려주는 Toast View 표시여부와 메세지를 지정한다.


#### Properties

> **visible**  
> Type: boolean    
> Default: false  
> 토스트 표시 여부를 지정한다.

> **message**  
> Type: string  
> Default: 지정되지 않으면 sorting/filtering/grouping 별로 기본값이 표시  
> 토스트에 표시할 메시지를 지정한다.

> **styles**  
> Type: Object   
> Default: null  
> ToastView의 스타일을 지정한다.   
>   
> ToastView에서 사용하는 VisualStyles의 속성은 다음과 같습니다.   
> background  
> foreground  
> border  
> figureBackground : css box-Shadow 색상  
> fontFamily  
> fontItalic  
> fontBold  
> fontUnderline  
> paddingLeft  
> paddingRight  
> paddingTop  
> paddingBottom  

#### Examples

<pre class="prettyprint">
gridView.setOptions({
    checkBar: {
    visible: false
    },
    sorting: {
        toast: {
            visible: true,
            message: "정렬 중입니다..."
        }
    },
    filtering: {
        toast: {
            visible: true,
            message: "필터링 중입니다..."
        }
    },
    grouping: {
        toast: {
            visible: true,
            message: "그룹핑 중입니다..."
        }
    }
});

// load data
loadData(dataProvider);
</pre>

---

#### Demo Links

* [ToastView](http://demo.realgrid.com/Demo/ToastView?ptype=js) 