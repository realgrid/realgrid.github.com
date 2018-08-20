---
layout: apipost
title: LinkCellRenderer
part: Types
typename: Cell Renderers
order: LinkCellRenderer
objectname: 
directiontype: 
permalink: /api/types/LinkCellRenderer/
tags:
  - 링크셀랜더러
  - 렌더러
---


#### Description

 Link 셀 렌더러는 컬럼에 Hyperlink형태로 표현하고 클릭할 때 다른 페이지를 띄우거나 팝업처리 등을 구현할 수 있다. Link Renderer에서 Url을 지정하는 방법은 Url형태의 값을 가진 필드를 지정하거나 수식으로 Url Format를 지정하는 방법 두 가지가 있다.   
전자는 UrlField로 지정하는 경우로 지정된 필드의 값을 모두 Url로 인지한다.   
후자의 경우 Url 속성으로 Format을 지정할 수 있다. 예를들어 url: `http://demo.realgrid.net/${Page}` 로 하면 `Page`라는 이름의 필드값을 이용해 경로를 지정할 수 있다.  

#### Properties

> **url**  
> Type: string  
> Default: null  
> 필드값을 url Format값으로 사용할 url을 지정한다.   

> **urlField**  
> Type: string  
> Default: null  
> url 형태의 값을 가진 필드를 지정한다.  

> **showUrl**  
> Type: boolean  
> Default: true  
> url을 ToolTip창으로 표시할것인지를 결정한다.  

> **requiredFields**  
> Type: string  
> Default: null  
> url 표현식으로 지정할때 표현식에 포함된 필드값중에 빈값이면 안되는 field명을 콤마(,)로 구분하여 입력한다. requiredFields에 명시된 필드중 하나이상이 빈값인 경우 해당 셀은 Hyperlink가 생기지 않는다.

> **showUrl**  
> Type: boolean  
> Default: true  
> url을 ToolTip창으로 표시할것인지를 결정한다.  

> **cursor**  
> Type: string   
> Default: null     
> 링크셀에 마우스 커서가 위치할때 표시될 마우스 커서의 모양을 지정한다.  
> 지정할 수 있는 값은 W3C 표준([http://www.w3.org/wiki/CSS/Properties/cursor](http://www.w3.org/wiki/CSS/Properties/cursor)) 을 준수한다. uri 미지원    
> RealGridJS 1.1.29부터 지원된다.  