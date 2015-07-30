---
layout: post
title: RealGrid 튜토리얼 작성 방법
date:   2015-07-24 21:13:31 +9:00 GMT
permalink: /tutorial/guide
categories: Tutorial
course:
  - guide
summary: 튜토리얼에 대한 요약 설명을 작성 합니다.
tags: 
  - RealGridJS
  - RealGrid
  - Tutorial
  - guide
  - 가이드
---

## 문장의 표현, 느낌
* 문장은 최대한 간결하게 작성합니다.
* "입니다.", "습니다.", "합니다." 정도의 존칭을 사용합니다.
* `강좌` 라는 표현을 사용한다. 강의, 글, 기사 등을 강좌로 통일합니다.
* 알아본다. 알아보자 대신 `배워본다.`, `배워보자.`를 사용합니다.
* 제품을 표현할때에는 `RealGrid`로, 일반적인 대명사로는 `그리드`를 사용합니다.

## 작성순서
1. 파일 생성
    * \\\_drafts\\Tutorials\\2015-00-00-tutorial-draft.md파일을 복사해서 새로운 파일을 만듭니다. (본 파일)
    * 파일명은 {날짜}-tutorial-{클래스번호}.md 로 만든다.
3. 메타정보 수정
    * category
    * course : {클래스}를 입력합니다. (A-Class, B-Class, C-Class, Project, Tip 중 선택)
    * tag: 5개에서 10개 이내로 넣습니다.
    * summary
4. 강좌 내용 작성
    * 아래 내용에 작성된 강좌 예시와 같은 형식으로 작성합니다.
    * 이미지는 \\images\\tutorials\\{yyyymmdd-realgrid-클래스번호-n.png}와 같은 형식으로 생성합니다. 단, 날짜는 생략해도 무방합니다. 또, 문서에 이미지 파일이 한 개인 경우는 순서번호(n)을 생략 합니다. 해당 폴더에 미리 작성되어 있는 다른 이미지 파일명을 확인 하세요.
    * 예제 데이터는 기초적인 설명외에는 의미있는 데이터를 사용하도록 합니다.(사용자 정보, 주소 데이터, 거래처정보 등)
5. 참조 링크 
    * 관계있는 다른 강좌를 참조에 링크 합니다.
    * 관계있는 demo의 페이지를 링크합니다.
    * 관계있는 api페이지를 링크 합니다.
6. 배포
    * 작성완료된 강좌를 배포 할때에는 \_post\\Tutorial\\{클래스}\\폴더로 이동합니다.
7. 작성후 강좌에 사용된 소스의 풀버전을 별도로 제작하여 깃허브에 올려야 합니다.
    * 소스는 {클래스번호}.html로 이름을 작성합니다. 
    * script는 하나의 script태그안에 모두 작성합니다.
    * 소스에 대한 부분은 차차 기록 합니다.
    * 소스관리를 위한 GitHub Repository : [https://github.com/realgrid/tutorials](https://github.com/realgrid/tutorials)

---

### 들어가며

* 강좌의 목적을 설명합니다.
* 이전 강좌 또는 유사한 강좌와의 관계를 설명합니다.

### 이론

* 강좌의 목적을 수강자에게 이해시킵니다.
* 강좌에 사용되는 API에 대해 이론적으로 설명하고 링크합니다.

### 실습

* 실행 코드중 설명이 필요한 부분을 명시합니다.
* 수강자가 직접 해 볼수 있는 동작이나 행위에 대해 설명합니다.
* 본강좌에 필요한 최소한의 코드만 작성합니다.

#### 실행화면

* 실행된 그리드를 임베드합니다.
* 수강자의 동작이나 실행의 이해를 돕기 위한 버튼을 올리고 행위에 대해 설명합니다.
* 그리드나 버튼 동작등은 군더더기 없이 본 강좌에 필요한 만큼만 작성합니다.

### 전체 소스코드

##### SCRIPT    
<pre class="prettyprint full-source-script">
&lt;link rel=&quot;stylesheet&quot; href=&quot;/css/bootstrap.css&quot;&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;/script/jquery-1.112.min.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;/script/bootstrap.min.js&quot;&gt;&lt;/script&gt;
&lt;!--realgrid--&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;/script/dlgrids_eval.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;/script/realgridjs.js&quot;&gt;&lt;/script&gt;

&lt;script&gt;

&lt;/script&gt;
</pre>

##### HTML
<pre class="prettyprint full-source-html">
&lt;div id=&quot;realgrid&quot; style=&quot;width: 100%; height: 200px;&quot;&gt;&lt;/div&gt;
</pre>


---
**참조**

* [RealGrid Help](http://help.realgrid.com){:target="_blank"}