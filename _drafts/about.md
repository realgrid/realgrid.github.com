---
layout: post
title: About
date: 2015-04-24 15:47:54 +9:00 GMT
categories: ABOUT
---

### Apr 28, 2015
* 레드마인에서 기존 wiki문서를 각각 md파일로 변환하여 저장
* Api문서 객체의 구성
    * part: Types, Fectures, Objects
    * objectname: 객체명(GridBase, LocalDataProvider ...)
    * directiontype: Method, Callback, Property
    * directionname: 함수명이나 이벤트명
* FileName
    * Object: objectname + "_" + title + ".md"
    * Type: REPLACE(title, " ", "_") + "_Type.md"
    * Fecture: 

### Apr 27, 2015
* 새로운 방법으로 md파일에서 md파일을 include하는 것은 가능하므로 index파일을 md파일로 만들고 들어갈 내용을 include에 넣어 include를 이용하기로 한다. --> `이 방법도 어느정도 실패.`
* 페이지 레이아웃은 어느정도 마무리 된거 같은데... 데이터는??
* 데이터를 레드마인 DB에서 직접 쿼리해서 파일로 만들어 보기로함.
    일단 쿼리

<pre class="prettyprint">
    select * from bitnami_redmine.wiki_contents
    where page_id in (select id from bitnami_redmine.wiki_pages
                      where wiki_id = 2 and parent_id = 33)
    and page_id &lt;&gt; 467
    ;
</pre>

### Apr 25, 2015
* 페이지 레이아웃 수정, 스타일 수정, bootstrap적용
* jekyll에서 markdown파일을 include할 때 html 인코딩되는 플러그인 설치 [문서링크][1]{:target="_new"}, 깃 페이지에서 플러그인 적용 안되는 관계로 제외

### Apr 24, 2015
* 깃허브에 리파지토리 개설 [https://github.com/realgrid/realgrid.github.com.git][2]

### Apr 23, 2015
* doc.realgrid.com의 문제점
    * 위키를 이용해서 편집하고 html로 자동변환하여 VS를 통해 기타 편집작업 후 배포 하는 현재 작업 방법이 번거로울 뿐만 아니라 각각 페이지에 대한 수정 작업이 어렵다.
    * 각 문서에 대한 데이터 관리가 어렵다.
    * 실제 배포된 사이트에서 끊어져 있는 링크, 오타, 잘못된 내용등이 있는데 이를 수정 하려면 위키 부터 다시 시작 해야 한다. 개별 작업이 어렵다.
* jekyll(지킬) + Github pages(깃허브 페이지)를 통해 문서관리를 할 경우 장,단점
    * 개별 문서에 대한 수정 및 배포 작업이 간편하다.
    * 새로운 문서 추가도 쉽다.
    * 문서편집을 markdown으로 하기 때문에 문서 작성에 집중 할 수 있다는 장점은 있지만, 이미지 추가나 모양내는 작업은 좀 까다로울 수 있다.
    * jekyll의 meta tag를 통해 간단한 구조화가 가능 하며, 이 meta data를 이용해 DB에 마이그레이션도 가능하다.
    * 현재 만들어져 있는 문서를 최소한의 인적 자원으로 변환작업을 완료 해야 한다.
    * 계획은 2인 1주일 정도 작업.

[1]:	http://wolfslittlestore.be/2013/10/rendering-markdown-in-jekyll/ 
[2]:	https://github.com/realgrid/realgrid.github.com.git