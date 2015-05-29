---
layout: faqpost
title:  단축키를 추가하여 사용가능 한가요?
date:   2015-05-29 00:00:00
categories: faq
part: RealGrid
directiontype: 
---

# Q.

업무상 편의를 위해 기본으로 제공하는 단축키 외에 추가로 생성하여 사용하고 싶습니다. 가능한가요?

---
***

# A.

RealGrid+버전은 chrome일 경우 onkeyup, onkeydown, onkeypress 모두 제한없이 사용할 수 있습니다.  
하지만 IE는 document.onkeyup, onkeydown은 내부적으로 사용하여 값을 반환하고 있지 않습니다.  
onkeypress는 값 반환을 허용하고 있으나 alt나 ctrl는 onkeypress에서 keyCode값을 반환하지 않기 때문에
단축키를 추가하여 사용할 수 없습니다.  
RealGridJS버전의 경우 브라우저 제한없이 추가하여 사용하 수 있습니다.
