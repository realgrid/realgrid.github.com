---
layout: post
title: About
date: 2015-04-24 15:47:54 +9:00 GMT
categories: ABOUT
---

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

[1]:	http://wolfslittlestore.be/2013/10/rendering-markdown-in-jekyll/ 
[2]:	https://github.com/realgrid/realgrid.github.com.git