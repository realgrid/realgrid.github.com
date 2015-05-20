---
layout: faqpost
title:  샘플파일을 받아서 페이지를 열어보면 다음과 같은에러가 콜솔창에서 확인됩니다. 왜그런 건가요?
date:   2015-05-13 00:00:00
categories: faq
part: RealGridJS
directiontype: 
---

# Q.

샘플파일을 받아서 페이지를 열어보면 다음과 같은에러가 콜솔창에서 확인됩니다. 왜그런 건가요?

>SCRIPT5007: 정의되지 않음 또는 null 참조인 '$_isMobile' 속성을 가져올 수 없습니다.  
>SCRIPT5007: 정의되지 않음 또는 null 참조인 'setRootContext' 속성을 가져올 수 없습니다.   

또는  

>SCRIPT5009: 'Element'이(가) 정의되지 않았습니다. 

---
***

# A.

초기 그리드를 실행할 때 발생하는 에러 메세지는 도메인 및 사용기간 정보가 틀려 암호화되어 있는 dlgrids파일을 복호화하지 못하여 발생하는 메세지 입니다.

또는 IE인 경우 호환성보기 모드로 설정되어 있는경우 html5실행 가능한 버전 이하로 설정되어 에러메세지가 발생할 수 있습니다.

>SCRIPT5007: 정의되지 않음 또는 null 참조인 '$_isMobile' 속성을 가져올 수 없습니다.  
>SCRIPT5007: 정의되지 않음 또는 null 참조인 'setRootContext' 속성을 가져올 수 없습니다.  

위 에러메세지는 도메인이 틀렸거나 사용기간이 만료 되었을때 발생합니다.  
신청한 url이 localhost인 경우 localhost의 ip주소인 127.0.0.1는 인식하지 못합니다.     
개발서버에 ip주소와 도메인 주소를 동시 사용해야 할 경우 도메인주소와 ip주소를 같이 신청해야 합니다.

>SCRIPT5009: 'Element'이(가) 정의되지 않았습니다.

element가 정의되지 않았다는 에러메세지는 IE8버전 이하에서 실행하면 발생하는 에러메세지로 페이지 상단에 IE버전을 현재 설치되어 있는 최신 버전으로 유지하는 meta tag를 설정함으로 해결할 수 있습니다.

>&lt;meta http-equiv="X-UA-Compatible" content="IE=edge" /&gt;




