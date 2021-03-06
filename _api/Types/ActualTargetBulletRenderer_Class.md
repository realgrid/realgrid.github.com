---
layout: apipost
title: ActualTargetBulletRenderer
part: Types
typename: Cell Renderers
order: ActualTargetBulletRenderer
objectname: 
directiontype: 
permalink: /api/types/ActualTargetBulletRenderer/
tags:
    - 렌더러랜더러
---

#### Description

각각 두 개의 데이터 필드에 저장된 목표값(혹은 기대값)과 실행값을 비교하여 표시하는 시리즈 렌더러이다. 
Bullet renderer는 목표값을 수직바로 실행값을 수평바로 표시한다. 

#### Properties

> **minValue**  
> Type: Number  
> Default: 0  
> 최소값을 지정한다.  

> **maxValue**  
> Type: Number  
> Default: 1  
> 최대값을 지정한다.  

> **maximumBackground**  
> Type: String  
> Default: null  
> 배경색을 지정한다.  

#### Examples   

<pre class="prettyprint">
    var fields = [{
        fieldName: "target",
        dataType: "number"
    }, {
        fieldName: "actual",
        dataType: "number"
    }];
    dataProvider.setFields(fields);
    
    var columns = [{
        name: "colBullet",
        type: "series",
        fieldNames: "target,actual",
        height: 30,
        renderer: {
            type: "actualTargetBullet",
            maxValue: 100,
            maximumBackground: "#18000000"
        },
        header: { text: "Bullet" },
    }]
    gridView.setColumns(columns);
</pre>

---

#### Demo Links

* [Actual / Target Renderer](http://demo.realgrid.com/Series/ActualTargetRenderer/) 참조  
