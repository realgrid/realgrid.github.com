---
layout: post
title: 공동개발 참여 방법
date: 2015-04-30 15:47:54 +9:00 GMT
category: help
permalink: /help/help-posting
tags: doc.realgrid.com markdown github jekyll help.realgrid.com realgrid
---

<blockquote class="quote-from">
<strong>본 사이트의 개발에 참여하여 작성하는 모든 문서의 <code>저작권</code>은 작성자 본인에게 있지만 문서의 <code>게시여부</code>는 (주)우리테크인터내셔날의 권리임을 알려드립니다.</strong>
</blockquote>

#### 목차
* [들어가며](#head1)
* [깃허브(GitHub) 이해하기](#head1-1)
* [깃허브 아이디 만들기](#head2)
* [깃허브 아바타(Avata) 변경하기](#head3)
* [리파지터리(repository)에 참여하기](#head4)
* [내 PC에 로컬 클론(local clone)만들기](#head5)
* [새로운 강좌 올리기](#head7)
* [작성한 강좌를 깃허블에 올리기](#head8)
* [깃허브에서 직접 코드 수정하기](#head9)
* [본 페이지 소스 코드 보기](#head10)
* [도움이 될만한 사이트](#head11)


### <a name="head1"></a>들어가며

이 문서는 doc.realgrid.com(help.realgrid.com)에 자신의 컨텐츠를 게시하는 것과 같이, 사이트의 개발에 직접 참여하는 방법을 설명 하고 있습니다. 하지만, 내부직원이 아닌 경우 API 문서를 추가/변경 하는 것에는 제한이 있으며, RealGrid를 사용하는 방법이나 활용하여 응용프로그램을 만드는 방법등에 대한 강좌는 작성하여 게시할 수 있습니다.

### <a name="head1-1"></a>깃허브(GitHub) 이해하기
만약, 깃허브를 잘 알지 못하거나 좀더 확실히 이해 하고 싶은 분은 아래 두 개의 링크를 이용해 깃허브에 대해 이해하시기 바랍니다. 정말 많은 도움이 되리라 생각 됩니다.

[Github를 이용하는 전체 흐름 이해하기 #1](http://blog.outsider.ne.kr/865)

[Github를 이용하는 전체 흐름 이해하기 #2](http://blog.outsider.ne.kr/866)

### <a name="head2"></a>깃허브 아이디 만들기
doc.realgrid.com공동개발에 참여하기 위해서는 [깃허브](http://github.com) 아이디가 있어야 합니다. 만약 깃허브 아이디가 없다면, 아래 링크된 사이트에서 아이디, 메일주소, 암호를 입력하고 새로운 계정을 만들어야 합니다. 아이디가 있다면
계정을 만들고 처음 깃허브에 로그인 하면 화면과 같습니다.

![](/images/help/img-git01.png)

### <a name="head3"></a>깃허브 아바타(Avata) 변경하기
깃허브가 처음이라면, 공동(Collaboration)개발시 본인임을 알 수 있는 사진이나 아바타를 변경해 주시기 바랍니다. 사진이 어려우신 분들 [옥토덱스](https://octodex.github.com/)를 이용해 주세요.

![](/images/help/img-octodex.png)

### <a name="head4"></a>리파지터리(repository)에 참여하기
help.realgrid.com의 깃허브 리파지터리는 아래와 같습니다.

`realgrid/realgrid.github.com`

이 리파지터리에 참여 하는 방법은 다음과 같습니다.

1. help.realgrid.com 리파지터리를 본인의 리파지터리로 fork해서 수정된 내용을 pull request하는 방법이 있습니다. 이 방법은 별도의 브렌치(branch)를 구성하게 됩니다.
2. 리파지터리 오너에게 메일로 본인의 깃허브 아이디를 알려주고 협업자(Collaborator)로 참여 하는 방법이 있습니다. 이 방법은 master 브렌치에서 직접 작업 합니다. (only staff)

### <a name="head5"></a>내 PC에 로컬 클론(local clone)만들기

아래 나열된 재료는 개발자의 개발 환경에 따라 선택적으로 설치하면 됩니다.

##### 재료(for Mac)
* 깃허브 API 설치
* [깃허브 맥 데스크탑 설치](https://mac.github.com/)
* [지킬(Jekyll) 설치](http://jekyllrb-ko.github.io/docs/installation/)
* [Sublime Text 설치](http://www.sublimetext.com/)
* [Visual Studio Code 설치](https://code.visualstudio.com/)
* [Atom 설치](https://atom.io/)

##### 재료(for Windows)
* 깃허브 API 설치
* [깃허브 윈도우 데스크탑 설치](https://windows.github.com/)
* [Visual Studio 확장 설치](https://visualstudio.github.com/)
* [지킬(Jekyll) 설치](http://jekyllrb-ko.github.io/docs/installation/)
* [Sublime Text 설치](http://www.sublimetext.com/)
* [Visual Studio Code 설치](https://code.visualstudio.com/)

##### Sublime Markdown Package 설치
* Package Control 설치 (https://packagecontrol.io/installation)후 sublime restart
* Cmd+Shift+P 단축키를 눌러 "Package Control:Install Package" 선택.
* Package Browser에서 Markdown editor 선택하여 설치.


##### 리퀴드(Liquid) 템플릿 사용시 주의할 점
템플릿은 사이트가 생성(Generate)되는 시점에 번역되는 언어이므로 스크립트 주석(&lt;!--  --&gt;)내부에 존재 한다고 해도 번역되기 때문에 사용하지 않는 코드를 주석에 잘못 넣어 둘 경우 사이트 생성이나 실행에 부하를 줄 수 있습니다. 이때에는 리퀴드 언어의 주석 구문인 `{% comment %} ... {% endcomment %}`를 사용합니다.

리퀴드 언어 사용에 대한 자세한 설명은 [리퀴드 마크업 깃허브](https://github.com/Shopify/liquid)를 참조 하세요.

##### help.realgrid.com 사이트 구조 이해하기

기본적인 사이트 구조는 [지킬의 디렉토리 구조](http://jekyllrb-ko.github.io/docs/structure/)를 이해하시면 됩니다. 추가적으로 지킬의 collection기능을 사용하여 api라는 별도의 collection을 만들었습니다. api문서들은 \_api라는 폴더에 정리되어 있으며, api collection으로 표현합니다.

### <a name="head7"></a>새로운 강좌 작성하기

몇 가지 규칙만 지켜주시면 됩니다.

* \_draft폴더에 깃허브 post 파일명 작성법에 따라 파일을 만들어야 합나다.
* category meta 값은 `기초과정`, `중급과정`, `고급과정` 중 하나를 넣어주면 됩니다.

좀더 상세한 작성 방법은 아래 링크를 참조하세요.

* [지킬 포스트 작성 방법 참조](http://jekyllrb-ko.github.io/docs/posts/)
* [Markdown 작성 방법 참조](https://guides.github.com/features/mastering-markdown/)

### <a name="head8"></a>작성한 강좌를 깃허브에 올리기

\_draft폴더내에 작성된 강좌는 git hub에 add, push합니다. desktop GUI를 이용할 경우 `changes`탭에서 `Commit and Sync master`로 작성한 내용을 push합니다.

![](/images/help/img-mac-git-commit.png)

### <a name="head9"></a>깃허브에서 직접 코드 수정하기

**`가능하지만, 추천 하지 않습니다. 로컬 저장소를 만드세요.`**

### <a name="head10"></a>본 페이지 소스 코드 보기

페이지 작성에 대한 예를 확인 하고 싶다면 본 페이지의 markdown 텍스트를 확인 하시면 강좌나 API문서를 작성하는데 도움이 되리라 생각 됩니다.

<button type="button" class="btn btn-info" onclick="javascript:$('.prettyprint').toggle();">
  코드 보기/감추기
</button>

<pre class="prettyprint">
//코드는 생략 합니다.
</pre>


### <a name="head11"></a>도움이 될만한 사이트
* [지킬에서 다국어 처리 방법에 대한 포스팅](http://sylvaindurand.org/making-jekyll-multilingual/)