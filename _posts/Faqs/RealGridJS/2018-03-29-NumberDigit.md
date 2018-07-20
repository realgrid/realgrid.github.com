---
layout: faqpost
title:  숫자를 입력 받을때 자릿수를 제한하고 싶습니다.  
date:   2017-09-07 00:00:00
categories: faq
part: RealGridJS
permalink: /faq/NumberDigit/
directiontype: 
tags:
    - number
    - 숫자
    - 소수점
    - 자릿수
    - 제한    
---

# Q.

RealGridJS 숫자를 입력 받을때 자릿수를 제한하고 싶습니다.

---

# A.

숫자의 자릿수를 제한하여 입력하고 싶은 경우 아래와 같이 컬럼의 editor 속성을 사용하여 지정할 수 있습니다.  
필드의 dataType은 반드시 'number'로 설정되어 있어야 합니다.   

정수부의 자릿수는 maxIntegerLength에 필요한 자릿수 만큼 지정합니다.  
소수부의 자릿수는 editFormat에서 소수점 이후로 필요한 자릿수 만큼 '#' 을 지정합니다.   

<pre class="prettyprint">
var columns = [{
	"fieldName": "pay",
	"width": 90,
	"header": { "text": "&#xae09;&#xc5ec;" },
	"editor": {
		"type": "number",
		"editFormat": "#,##0.##",    //소수부는 2자리까지만 입력가능
		"maxIntegerLength": 6        //정수부는 6자리까지만 입력가능
	},
	"styles": {
		"textAlignment": "far",	
		"font": "Tahoma",
		"numberFormat": "#,##0.##"
	}	
}]

gridView.setColumns(columns);
</pre>	

해당 기능은 `RealGridJS 1.1.23` 버전부터 지원합니다.  
	
--------------------------------------------------------------------------------

**참조**
* [NumberCellEditor](http://help.realgrid.com/api/types/NumberCellEditor/){:target="_blank"}
