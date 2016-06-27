---
layout: apipost
title: ColumnGroup
part: Types
typename: Classes
order: ColumnGroup
objectname: 
directiontype: 
permalink: /api/types/ColumnGroup/
tags:
  - ColumnGroup
  - Column
  - Group
  - ColumnGrouping
  - 컬럼그룹
  - 컬럼
  - 그룹
  - 컬럼그룹핑
---

#### Description

> 컬럼 그룹은 하나 이상의 컬럼 및 하위 컬럼 그룹들을 수평 혹은 수직으로 배치한다.

#### Properties

> **name**  
> Type: String   
> Default:  null     
> 컬럼 그룹 이름. 많은 곳에서 컬럼을 이 이름으로 참조하므로 반드시 지정해야 하며, 그리드 내에서 유일해야 한다. 

> **orientation**  
> Type: [ColumnGroupOrientation](/api/types/ColumnGroupOrientation)  
> Default: [ColumnGroupOrientation](/api/types/ColumnGroupOrientation).HORIZONTAL   
> 자식 컬럼 및 컬럼 그룹들의 배치 방향. 

> **header**  
> Type: [ColumnGroupHeader](/api/types/ColumnGroupHeader)   
> Default: null  
> 이 컬럼그룹의 헤더 영역과 관련된 속성들을 지정한다.    

> **width**  
> Type: Number   
> Default: 120   
> 컬럼의 시작 너비를 pixel 단위로 지정한다. 컬럼의 실제 표시 너비는 상황에 따라 이 값과 다를 수 있다. 또한 실행 중 사용자에 의해 변경될 수도 있다. 

> **visible**  
> Type: Boolean   
> Default:  true      
> true면 이 컬럼그룹에 포함된 셀들을 표시한다. false면 셀들을 표시하지 않는다. 컬럼그룹 객체가 제거되는 것은 아니다.  

> **resizable**  
> Type: Boolean   
> Default:  true      
> true로 지정하면 사용자 컬럼그룹 헤더의 오른쪽 경계를 마우스로 드래깅해서 컬럼의 너비를 변경할 수 있다.   

> **movable**  
> Type: Boolean   
> Default:  true     
> true로 지정하면 사용자 컬럼 헤더를 마우스로 드래깅해서 컬럼의 위치를 변경할 수 있다. 현재 같은 컬럼 그룹내에서만 이동이 가능하다. 최상위 컬럼이나 그룹은 최상위 레벨에서만 이동 가능하다.  

> **displayWidth**  
> Type: Number   
> Default: undefined     
> 컬럼그룹이 속한 그룹내에서 컬럼그룹의 표시 너비를 지정한다.    

> **displayIndex**  
> Type: Number   
> Default:  undefined      
> 컬럼그룹이 속한 그룹내에서  컬럼그룹의 표시 순서를 나타낸다.   

> **hideChildHeaders**  
> Type: Boolean   
> Default:  false      
> 자식헤더의 숨김여부를 지정한다.   

> **styles**  
> Type: Object   
> Default:  null     
> 컬럼그룹에 적용할 스타일들을 지정한다.     

### Example  

<pre class="prettyprint">
	var columns = [{
        "type": "group",
        "name": "GroupOrder",
        "orientation": "vertical",
        "resizable": true,
        "movable": false,
        "hideChildHeaders": false,
        "width": 250,
        "columns": [{
            "type": "group",
            "name": "GroupIds",
            "columns": [{
                "name": "OrderID",
                "fieldName": "OrderID",
                "type": "data",
                "width": "90",
                "styles": {
                    "textAlignment": "center"
                },
                "header": {
                    "text": "Order"
                }
            }, {
                "name": "CustomerID",
                "fieldName": "CustomerID",
                "width": "130",
                "styles": {
                    "textAlignment": "center"
                },
                "header": {
                    "text": "Customer ID"
                }
            }, {
                "name": "EmployeeID",
                "fieldName": "EmployeeID",
                "width": "100",
                "styles": {
                    "textAlignment": "center"
                },
                "header": {
                    "text": "Employee ID"
                }
            }]
        }, {
            "name": "OrderDate",
            "fieldName": "OrderDate",
            "width": "130",
            "styles": {
                "textAlignment": "center"
            },
            "header": {
                "text": "Order Date"
            }
        }]
	}];
	
	gridView.setColumns(columns);
</pre>

#### See Also 

> [Column Grouping](http://demo.realgrid.net/Demo/ColumnGrouping) 참조  

> [ColumnGroupHeader](/api/types/ColumnGroupHeader)  

