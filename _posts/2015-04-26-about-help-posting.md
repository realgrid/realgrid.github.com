---
layout: post
title: DOC.REALGRID.COM 공동개발에 참여하기
date: 2015-04-30 15:47:54 +9:00 GMT
category: about
permalink: /about/help-posing
tags: doc.realgrid.com markdown github jekyll help.realgrid.com realgrid
---

<blockquote class="quote-from">
<strong>본 사이트의 개발에 참여하여 작성하는 모든 문서의 <code>저작권</code>은 작성자 본인에게 있지만 문서의 <code>게시여부</code>는 (주)우리테크인터내셔날의 권리임을 알려드립니다.</strong>
</blockquote>

#### 목차
---

* [들어가며](#head1)
* [깃허브(GitHub) 아이디 만들기](#head2)
* 깃허브 아바타(Avata) 변경하기
* realgrid/realgrid.github.com 리파지터리(repository)에 참여하기
* 내 PC에 로컬 클론(local clone)만들기
* doc.realgrid.com 사이트 구성 이해하기
* [새로운 강좌 올리기](#head6)
* 작성한 강좌를 깃허블에 올리기
* 깃허브에서 직접 코드 수정하기
* 본 페이지 소스 코드 보기

---


### 들어가며

이 문서는 doc.realgrid.com(help.realgrid.com)에 자신의 컨텐츠를 게시하는 것과 같이, 사이트의 개발에 직접 참여하는 방법을 설명 하고 있습니다. 하지만, 내부직원이 아닌 경우 API 문서를 추가/변경 하는 것에는 제한이 있으며, RealGrid를 사용하는 방법이나 활용하여 응용프로그램을 만드는 방법등에 대한 강좌는 작성하여 게시할 수 있습니다.

### 깃허브(GitHub) 아이디 만들기
doc.realgrid.com공동개발에 참여하기 위해서는 [깃허브](http://github.com) 아이디가 있어야 합니다. 만약 깃허브 아이디가 없다면, 아래 링크된 사이트에서 아이디, 메일주소, 암호를 입력하고 새로운 계정을 만들어야 합니다. 아이디가 있다면 
계정을 만들고 처음 깃허브에 로그인 하면 화면과 같습니다.

![](/images/about/img-git01.png)

### 깃허브 아바타(Avata) 변경하기
https://octodex.github.com/

### 리파지터리(repository)에 참여하기
realgrid/realgrid.github.com 

### 내 PC에 로컬 클론(local clone)만들기

##### 재료(for Mac)
* 깃허브 API 설치
* 깃허브 데스크탑 설치
* [지킬(Jekyll) 설치](http://jekyllrb-ko.github.io/docs/installation/)
* Sublime Text 설치

##### 재료(for Windows)
* 깃허브 API 설치
* 깃허브 데스크탑 설치
* [지킬(Jekyll) 설치](http://jekyllrb-ko.github.io/docs/installation/)
* Sublime Text 설치

##### 디버깅시 주의
로컬 개발환경에서 지킬 사이트를 디버깅 할때 api.html페이지와 apipost.html 레이아웃 페이지는 대량의 콜렉션에 대한 루프를 돌기 때문에 

##### 추가/변경된 코드 푸시(push) 하기


### doc.realgrid.com 사이트 구성 이해하기

### <a name="head6"></a>새로운 강좌 작성하기

#### 리퀴드(Liquid) 템플릿 사용시 주의할 점
템플릿은 사이트가 생성(Generate)되는 시점에 번역되는 언어이므로 스크립트 주석(&lt;!--  --&gt;)내부에 존재 한다고 해도 번역되기 때문에 사용하지 않는 코드를 주석에 잘못 넣어 둘 경우 사이트 생성이나 실행에 부하를 줄 수 있습니다. 이때에는 리퀴드 언어의 주석 구문인 `{% comment %} ... {% endcomment %}`를 사용합니다.

### 작성한 강좌를 깃허블에 올리기

### 깃허브에서 직접 코드 수정하기

### 본 페이지 소스 코드 보기

페이지 작성에 대한 예를 확인 하고 싶다면 본 페이지의 markdown 텍스트를 확인 하시면 도움이 되리라 생각 됩니다.

**javascript테스트**

<button type="button" class="btn btn-info" onclick="javascript:$('.prettyprint').toggle();">
  코드 보기/감추기
</button>

<script>
    $(document).ready( function() {
        $.ajaxSetup ({
            cache: false
        });

        $("#link").click( function(e) {
            e.preventDefault();

            var url = "/apisidemenu.html";
            $("#sidemenu").html("<p>loading...</p>").load(url);

        });
    });
</script>

<button type="button" id="link" class="btn btn-info">
  메뉴 보기
</button>

<div id="sidemenu"> </div>

<pre class="prettyprint">
---
layout: post
title: DOC.REALGRID.COM 공동개발에 참여하기
date: 2015-04-30 15:47:54 +9:00 GMT
category: about
permalink: /about/help-posing
---

&lt;blockquote class=&quot;quote-from&quot;&gt;
&lt;strong&gt;본 사이트의 개발에 참여하여 작성하는 모든 문서의 &lt;code&gt;저작권&lt;/code&gt;은 작성자 본인에게 있지만 문서의 &lt;code&gt;게시여부&lt;/code&gt;는 (주)우리테크인터내셔날의 권리임을 알려드립니다.&lt;/strong&gt;
&lt;/blockquote&gt;

#### 목차
* [들어가며](#head1)
* [깃허브(GitHub) 아이디 만들기](#head2)
* [새로운 강좌 올리기](#head6)

### 들어가며

이 문서는 doc.realgrid.com(help.realgrid.com)에 자신의 컨텐츠를 게시하는 것과 같이, 사이트의 개발에 직접 참여하는 방법을 설명 하고 있습니다. 하지만, 내부직원이 아닌 경우 API 문서를 추가/변경 하는 것에는 제한이 있으며, RealGrid를 사용하는 방법이나 활용하여 응용프로그램을 만드는 방법등에 대한 강좌는 작성하여 게시할 수 있습니다.

### 깃허브(GitHub) 아이디 만들기

doc.realgrid.com공동개발에 참여하기 위해서는 [깃허브](http://github.com) 아이디가 있어야 합니다. 만약 깃허브 아이디가 없다면, 아래 링크된 사이트에서 아이디, 메일주소, 암호를 입력하고 새로운 계정을 만들어야 합니다. 아이디가 있다면 
계정을 만들고 처음 깃허브에 로그인 하면 화면과 같습니다.

![](/images/about/img-git01.png)

### 깃허브 아바타(Avata) 변경하기

https://octodex.github.com/

### realgrid/realgrid.github.com 리파지터리(repository)에 참여하기

### doc.realgrid.com 사이트 구성 이해하기

### &lt;a name=&quot;head6&quot;&gt;&lt;/a&gt;새로운 강좌 올리기
</pre>