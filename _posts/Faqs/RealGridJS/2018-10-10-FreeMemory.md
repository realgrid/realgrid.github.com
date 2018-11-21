---
layout: faqpost
title:  리얼그리드가 사용한 메모리를 해제시킬 수 있나요?  
date:   2018-10-10 00:00:00
categories: faq
part: RealGridJS
permalink: /faq/FreeMemory/
directiontype: 
tags:
    - 메모리해제
    - free
    - memory
    - leak
---

# Q.

리얼그리드가 사용한 메모리를 해제시킬 수 있나요?     

---

# A.

리얼그리드 사용이 끝난 시점(화면창 닫기 등)에 아래 코드를 실항하시면 됩니다.  
해당 기능은 1.1.22 이상 버전에서 사용 가능합니다.   

<pre class="prettyprint">
//데이터 초기화
dataProvider.clearRows();

//grid, provider 초기화
grid.destroy();
dataProvider.destroy();

//LocalDataProvider와 GridView 객체 초기화
grid = null;
dataProvider = null;
</pre>	

	
--------------------------------------------------------------------------------
