---
layout: apipost
title: CellIndex
part: Types
typename: Classes
order: CellIndex
objectname: 
directiontype: 
permalink: /api/types/CellIndex/
---


#### Properties

> **itemIndex**  
> Type: Number   
> Default: -1   
> Grid상의 Index            

> **column**     
> Type: String   
> Default: null  
> 컬럼 이름  

> **dataRow**    
> Type: Number  
> Default: -1   
> provider에서의 고유 번호  

> **fieldIndex**    
> Type: Number  
> Default: -1   
> provider에서의 필드 순서  

> **fieldName**  
> Type: String   
> Default: null  
> 필드 이름   

#### Examples   

<pre class="prettyprint">
    var index = gridView.getCurrent();

    console.log(index);
</pre>

#### Demo Links

> [getCurrent](/api/GridBase/getCurrent)