---
layout: post
title: HELP.REALGRID.COM 공동개발에 참여하기
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
---
layout: post
title: HELP.REALGRID.COM &#xacf5;&#xb3d9;&#xac1c;&#xbc1c;&#xc5d0; &#xcc38;&#xc5ec;&#xd558;&#xae30;
date: 2015-04-30 15:47:54 +9:00 GMT
category: help
permalink: /help/help-posing
tags: doc.realgrid.com markdown github jekyll help.realgrid.com realgrid
---

&lt;blockquote class=&quot;quote-from&quot;&gt;
&lt;strong&gt;&#xbcf8; &#xc0ac;&#xc774;&#xd2b8;&#xc758; &#xac1c;&#xbc1c;&#xc5d0; &#xcc38;&#xc5ec;&#xd558;&#xc5ec; &#xc791;&#xc131;&#xd558;&#xb294; &#xbaa8;&#xb4e0; &#xbb38;&#xc11c;&#xc758; &lt;code&gt;&#xc800;&#xc791;&#xad8c;&lt;/code&gt;&#xc740; &#xc791;&#xc131;&#xc790; &#xbcf8;&#xc778;&#xc5d0;&#xac8c; &#xc788;&#xc9c0;&#xb9cc; &#xbb38;&#xc11c;&#xc758; &lt;code&gt;&#xac8c;&#xc2dc;&#xc5ec;&#xbd80;&lt;/code&gt;&#xb294; (&#xc8fc;)&#xc6b0;&#xb9ac;&#xd14c;&#xd06c;&#xc778;&#xd130;&#xb0b4;&#xc154;&#xb0a0;&#xc758; &#xad8c;&#xb9ac;&#xc784;&#xc744; &#xc54c;&#xb824;&#xb4dc;&#xb9bd;&#xb2c8;&#xb2e4;.&lt;/strong&gt;
&lt;/blockquote&gt;

#### &#xbaa9;&#xcc28;
* [&#xb4e4;&#xc5b4;&#xac00;&#xba70;](#head1)
* [&#xae43;&#xd5c8;&#xbe0c;(GitHub) &#xc774;&#xd574;&#xd558;&#xae30;](#head1-1)
* [&#xae43;&#xd5c8;&#xbe0c; &#xc544;&#xc774;&#xb514; &#xb9cc;&#xb4e4;&#xae30;](#head2)
* [&#xae43;&#xd5c8;&#xbe0c; &#xc544;&#xbc14;&#xd0c0;(Avata) &#xbcc0;&#xacbd;&#xd558;&#xae30;](#head3)
* [&#xb9ac;&#xd30c;&#xc9c0;&#xd130;&#xb9ac;(repository)&#xc5d0; &#xcc38;&#xc5ec;&#xd558;&#xae30;](#head4)
* [&#xb0b4; PC&#xc5d0; &#xb85c;&#xceec; &#xd074;&#xb860;(local clone)&#xb9cc;&#xb4e4;&#xae30;](#head5)
* [&#xc0c8;&#xb85c;&#xc6b4; &#xac15;&#xc88c; &#xc62c;&#xb9ac;&#xae30;](#head7)
* [&#xc791;&#xc131;&#xd55c; &#xac15;&#xc88c;&#xb97c; &#xae43;&#xd5c8;&#xbe14;&#xc5d0; &#xc62c;&#xb9ac;&#xae30;](#head8)
* [&#xae43;&#xd5c8;&#xbe0c;&#xc5d0;&#xc11c; &#xc9c1;&#xc811; &#xcf54;&#xb4dc; &#xc218;&#xc815;&#xd558;&#xae30;](#head9)
* [&#xbcf8; &#xd398;&#xc774;&#xc9c0; &#xc18c;&#xc2a4; &#xcf54;&#xb4dc; &#xbcf4;&#xae30;](#head10)


### &lt;a name=&quot;head1&quot;&gt;&lt;/a&gt;&#xb4e4;&#xc5b4;&#xac00;&#xba70;

&#xc774; &#xbb38;&#xc11c;&#xb294; doc.realgrid.com(help.realgrid.com)&#xc5d0; &#xc790;&#xc2e0;&#xc758; &#xcee8;&#xd150;&#xce20;&#xb97c; &#xac8c;&#xc2dc;&#xd558;&#xb294; &#xac83;&#xacfc; &#xac19;&#xc774;, &#xc0ac;&#xc774;&#xd2b8;&#xc758; &#xac1c;&#xbc1c;&#xc5d0; &#xc9c1;&#xc811; &#xcc38;&#xc5ec;&#xd558;&#xb294; &#xbc29;&#xbc95;&#xc744; &#xc124;&#xba85; &#xd558;&#xace0; &#xc788;&#xc2b5;&#xb2c8;&#xb2e4;. &#xd558;&#xc9c0;&#xb9cc;, &#xb0b4;&#xbd80;&#xc9c1;&#xc6d0;&#xc774; &#xc544;&#xb2cc; &#xacbd;&#xc6b0; API &#xbb38;&#xc11c;&#xb97c; &#xcd94;&#xac00;/&#xbcc0;&#xacbd; &#xd558;&#xb294; &#xac83;&#xc5d0;&#xb294; &#xc81c;&#xd55c;&#xc774; &#xc788;&#xc73c;&#xba70;, RealGrid&#xb97c; &#xc0ac;&#xc6a9;&#xd558;&#xb294; &#xbc29;&#xbc95;&#xc774;&#xb098; &#xd65c;&#xc6a9;&#xd558;&#xc5ec; &#xc751;&#xc6a9;&#xd504;&#xb85c;&#xadf8;&#xb7a8;&#xc744; &#xb9cc;&#xb4dc;&#xb294; &#xbc29;&#xbc95;&#xb4f1;&#xc5d0; &#xb300;&#xd55c; &#xac15;&#xc88c;&#xb294; &#xc791;&#xc131;&#xd558;&#xc5ec; &#xac8c;&#xc2dc;&#xd560; &#xc218; &#xc788;&#xc2b5;&#xb2c8;&#xb2e4;.

### &lt;a name=&quot;head1-1&quot;&gt;&lt;/a&gt;&#xae43;&#xd5c8;&#xbe0c;(GitHub) &#xc774;&#xd574;&#xd558;&#xae30;
&#xb9cc;&#xc57d;, &#xae43;&#xd5c8;&#xbe0c;&#xb97c; &#xc798; &#xc54c;&#xc9c0; &#xbabb;&#xd558;&#xac70;&#xb098; &#xc880;&#xb354; &#xd655;&#xc2e4;&#xd788; &#xc774;&#xd574; &#xd558;&#xace0; &#xc2f6;&#xc740; &#xbd84;&#xc740; &#xc544;&#xb798; &#xb450; &#xac1c;&#xc758; &#xb9c1;&#xd06c;&#xb97c; &#xc774;&#xc6a9;&#xd574; &#xae43;&#xd5c8;&#xbe0c;&#xc5d0; &#xb300;&#xd574; &#xc774;&#xd574;&#xd558;&#xc2dc;&#xae30; &#xbc14;&#xb78d;&#xb2c8;&#xb2e4;. &#xc815;&#xb9d0; &#xb9ce;&#xc740; &#xb3c4;&#xc6c0;&#xc774; &#xb418;&#xb9ac;&#xb77c; &#xc0dd;&#xac01; &#xb429;&#xb2c8;&#xb2e4;.

[Github&#xb97c; &#xc774;&#xc6a9;&#xd558;&#xb294; &#xc804;&#xccb4; &#xd750;&#xb984; &#xc774;&#xd574;&#xd558;&#xae30; #1](http://blog.outsider.ne.kr/865)

[Github&#xb97c; &#xc774;&#xc6a9;&#xd558;&#xb294; &#xc804;&#xccb4; &#xd750;&#xb984; &#xc774;&#xd574;&#xd558;&#xae30; #2](http://blog.outsider.ne.kr/866)

### &lt;a name=&quot;head2&quot;&gt;&lt;/a&gt;&#xae43;&#xd5c8;&#xbe0c; &#xc544;&#xc774;&#xb514; &#xb9cc;&#xb4e4;&#xae30;
doc.realgrid.com&#xacf5;&#xb3d9;&#xac1c;&#xbc1c;&#xc5d0; &#xcc38;&#xc5ec;&#xd558;&#xae30; &#xc704;&#xd574;&#xc11c;&#xb294; [&#xae43;&#xd5c8;&#xbe0c;](http://github.com) &#xc544;&#xc774;&#xb514;&#xac00; &#xc788;&#xc5b4;&#xc57c; &#xd569;&#xb2c8;&#xb2e4;. &#xb9cc;&#xc57d; &#xae43;&#xd5c8;&#xbe0c; &#xc544;&#xc774;&#xb514;&#xac00; &#xc5c6;&#xb2e4;&#xba74;, &#xc544;&#xb798; &#xb9c1;&#xd06c;&#xb41c; &#xc0ac;&#xc774;&#xd2b8;&#xc5d0;&#xc11c; &#xc544;&#xc774;&#xb514;, &#xba54;&#xc77c;&#xc8fc;&#xc18c;, &#xc554;&#xd638;&#xb97c; &#xc785;&#xb825;&#xd558;&#xace0; &#xc0c8;&#xb85c;&#xc6b4; &#xacc4;&#xc815;&#xc744; &#xb9cc;&#xb4e4;&#xc5b4;&#xc57c; &#xd569;&#xb2c8;&#xb2e4;. &#xc544;&#xc774;&#xb514;&#xac00; &#xc788;&#xb2e4;&#xba74;
&#xacc4;&#xc815;&#xc744; &#xb9cc;&#xb4e4;&#xace0; &#xcc98;&#xc74c; &#xae43;&#xd5c8;&#xbe0c;&#xc5d0; &#xb85c;&#xadf8;&#xc778; &#xd558;&#xba74; &#xd654;&#xba74;&#xacfc; &#xac19;&#xc2b5;&#xb2c8;&#xb2e4;.

![](/images/help/img-git01.png)

### &lt;a name=&quot;head3&quot;&gt;&lt;/a&gt;&#xae43;&#xd5c8;&#xbe0c; &#xc544;&#xbc14;&#xd0c0;(Avata) &#xbcc0;&#xacbd;&#xd558;&#xae30;
&#xae43;&#xd5c8;&#xbe0c;&#xac00; &#xcc98;&#xc74c;&#xc774;&#xb77c;&#xba74;, &#xacf5;&#xb3d9;(Collaboration)&#xac1c;&#xbc1c;&#xc2dc; &#xbcf8;&#xc778;&#xc784;&#xc744; &#xc54c; &#xc218; &#xc788;&#xb294; &#xc0ac;&#xc9c4;&#xc774;&#xb098; &#xc544;&#xbc14;&#xd0c0;&#xb97c; &#xbcc0;&#xacbd;&#xd574; &#xc8fc;&#xc2dc;&#xae30; &#xbc14;&#xb78d;&#xb2c8;&#xb2e4;. &#xc0ac;&#xc9c4;&#xc774; &#xc5b4;&#xb824;&#xc6b0;&#xc2e0; &#xbd84;&#xb4e4; [&#xc625;&#xd1a0;&#xb371;&#xc2a4;](https://octodex.github.com/)&#xb97c; &#xc774;&#xc6a9;&#xd574; &#xc8fc;&#xc138;&#xc694;.

![](/images/help/img-octodex.png)

### &lt;a name=&quot;head4&quot;&gt;&lt;/a&gt;&#xb9ac;&#xd30c;&#xc9c0;&#xd130;&#xb9ac;(repository)&#xc5d0; &#xcc38;&#xc5ec;&#xd558;&#xae30;
help.realgrid.com&#xc758; &#xae43;&#xd5c8;&#xbe0c; &#xb9ac;&#xd30c;&#xc9c0;&#xd130;&#xb9ac;&#xb294; &#xc544;&#xb798;&#xc640; &#xac19;&#xc2b5;&#xb2c8;&#xb2e4;.

`realgrid/realgrid.github.com`

&#xc774; &#xb9ac;&#xd30c;&#xc9c0;&#xd130;&#xb9ac;&#xc5d0; &#xcc38;&#xc5ec; &#xd558;&#xb294; &#xbc29;&#xbc95;&#xc740; &#xb2e4;&#xc74c;&#xacfc; &#xac19;&#xc2b5;&#xb2c8;&#xb2e4;.

1. help.realgrid.com &#xb9ac;&#xd30c;&#xc9c0;&#xd130;&#xb9ac;&#xb97c; &#xbcf8;&#xc778;&#xc758; &#xb9ac;&#xd30c;&#xc9c0;&#xd130;&#xb9ac;&#xb85c; fork&#xd574;&#xc11c; &#xc218;&#xc815;&#xb41c; &#xb0b4;&#xc6a9;&#xc744; pull request&#xd558;&#xb294; &#xbc29;&#xbc95;&#xc774; &#xc788;&#xc2b5;&#xb2c8;&#xb2e4;. &#xc774; &#xbc29;&#xbc95;&#xc740; &#xbcc4;&#xb3c4;&#xc758; &#xbe0c;&#xb80c;&#xce58;(branch)&#xb97c; &#xad6c;&#xc131;&#xd558;&#xac8c; &#xb429;&#xb2c8;&#xb2e4;.
2. &#xb9ac;&#xd30c;&#xc9c0;&#xd130;&#xb9ac; &#xc624;&#xb108;&#xc5d0;&#xac8c; &#xba54;&#xc77c;&#xb85c; &#xbcf8;&#xc778;&#xc758; &#xae43;&#xd5c8;&#xbe0c; &#xc544;&#xc774;&#xb514;&#xb97c; &#xc54c;&#xb824;&#xc8fc;&#xace0; &#xd611;&#xc5c5;&#xc790;(Collaborator)&#xb85c; &#xcc38;&#xc5ec; &#xd558;&#xb294; &#xbc29;&#xbc95;&#xc774; &#xc788;&#xc2b5;&#xb2c8;&#xb2e4;. &#xc774; &#xbc29;&#xbc95;&#xc740; master &#xbe0c;&#xb80c;&#xce58;&#xc5d0;&#xc11c; &#xc9c1;&#xc811; &#xc791;&#xc5c5; &#xd569;&#xb2c8;&#xb2e4;. (only staff)

### &lt;a name=&quot;head5&quot;&gt;&lt;/a&gt;&#xb0b4; PC&#xc5d0; &#xb85c;&#xceec; &#xd074;&#xb860;(local clone)&#xb9cc;&#xb4e4;&#xae30;

&#xc544;&#xb798; &#xb098;&#xc5f4;&#xb41c; &#xc7ac;&#xb8cc;&#xb294; &#xac1c;&#xbc1c;&#xc790;&#xc758; &#xac1c;&#xbc1c; &#xd658;&#xacbd;&#xc5d0; &#xb530;&#xb77c; &#xc120;&#xd0dd;&#xc801;&#xc73c;&#xb85c; &#xc124;&#xce58;&#xd558;&#xba74; &#xb429;&#xb2c8;&#xb2e4;.

##### &#xc7ac;&#xb8cc;(for Mac)
* &#xae43;&#xd5c8;&#xbe0c; API &#xc124;&#xce58;
* [&#xae43;&#xd5c8;&#xbe0c; &#xb9e5; &#xb370;&#xc2a4;&#xd06c;&#xd0d1; &#xc124;&#xce58;](https://mac.github.com/)
* [&#xc9c0;&#xd0ac;(Jekyll) &#xc124;&#xce58;](http://jekyllrb-ko.github.io/docs/installation/)
* [Sublime Text &#xc124;&#xce58;](http://www.sublimetext.com/)
* [Visual Studio Code &#xc124;&#xce58;](https://code.visualstudio.com/)

##### &#xc7ac;&#xb8cc;(for Windows)
* &#xae43;&#xd5c8;&#xbe0c; API &#xc124;&#xce58;
* [&#xae43;&#xd5c8;&#xbe0c; &#xc708;&#xb3c4;&#xc6b0; &#xb370;&#xc2a4;&#xd06c;&#xd0d1; &#xc124;&#xce58;](https://windows.github.com/)
* [Visual Studio &#xd655;&#xc7a5; &#xc124;&#xce58;](https://visualstudio.github.com/)
* [&#xc9c0;&#xd0ac;(Jekyll) &#xc124;&#xce58;](http://jekyllrb-ko.github.io/docs/installation/)
* [Sublime Text &#xc124;&#xce58;](http://www.sublimetext.com/)
* [Visual Studio Code &#xc124;&#xce58;](https://code.visualstudio.com/)

##### &#xb9ac;&#xd034;&#xb4dc;(Liquid) &#xd15c;&#xd50c;&#xb9bf; &#xc0ac;&#xc6a9;&#xc2dc; &#xc8fc;&#xc758;&#xd560; &#xc810;
&#xd15c;&#xd50c;&#xb9bf;&#xc740; &#xc0ac;&#xc774;&#xd2b8;&#xac00; &#xc0dd;&#xc131;(Generate)&#xb418;&#xb294; &#xc2dc;&#xc810;&#xc5d0; &#xbc88;&#xc5ed;&#xb418;&#xb294; &#xc5b8;&#xc5b4;&#xc774;&#xbbc0;&#xb85c; &#xc2a4;&#xd06c;&#xb9bd;&#xd2b8; &#xc8fc;&#xc11d;(&amp;lt;!--  --&amp;gt;)&#xb0b4;&#xbd80;&#xc5d0; &#xc874;&#xc7ac; &#xd55c;&#xb2e4;&#xace0; &#xd574;&#xb3c4; &#xbc88;&#xc5ed;&#xb418;&#xae30; &#xb54c;&#xbb38;&#xc5d0; &#xc0ac;&#xc6a9;&#xd558;&#xc9c0; &#xc54a;&#xb294; &#xcf54;&#xb4dc;&#xb97c; &#xc8fc;&#xc11d;&#xc5d0; &#xc798;&#xbabb; &#xb123;&#xc5b4; &#xb458; &#xacbd;&#xc6b0; &#xc0ac;&#xc774;&#xd2b8; &#xc0dd;&#xc131;&#xc774;&#xb098; &#xc2e4;&#xd589;&#xc5d0; &#xbd80;&#xd558;&#xb97c; &#xc904; &#xc218; &#xc788;&#xc2b5;&#xb2c8;&#xb2e4;. &#xc774;&#xb54c;&#xc5d0;&#xb294; &#xb9ac;&#xd034;&#xb4dc; &#xc5b8;&#xc5b4;&#xc758; &#xc8fc;&#xc11d; &#xad6c;&#xbb38;&#xc778; `{% comment %} ... {% endcomment %}`&#xb97c; &#xc0ac;&#xc6a9;&#xd569;&#xb2c8;&#xb2e4;.

&#xb9ac;&#xd034;&#xb4dc; &#xc5b8;&#xc5b4; &#xc0ac;&#xc6a9;&#xc5d0; &#xb300;&#xd55c; &#xc790;&#xc138;&#xd55c; &#xc124;&#xba85;&#xc740; [&#xb9ac;&#xd034;&#xb4dc; &#xb9c8;&#xd06c;&#xc5c5; &#xae43;&#xd5c8;&#xbe0c;](https://github.com/Shopify/liquid)&#xb97c; &#xcc38;&#xc870; &#xd558;&#xc138;&#xc694;.

##### help.realgrid.com &#xc0ac;&#xc774;&#xd2b8; &#xad6c;&#xc870; &#xc774;&#xd574;&#xd558;&#xae30;

&#xae30;&#xbcf8;&#xc801;&#xc778; &#xc0ac;&#xc774;&#xd2b8; &#xad6c;&#xc870;&#xb294; [&#xc9c0;&#xd0ac;&#xc758; &#xb514;&#xb809;&#xd1a0;&#xb9ac; &#xad6c;&#xc870;](http://jekyllrb-ko.github.io/docs/structure/)&#xb97c; &#xc774;&#xd574;&#xd558;&#xc2dc;&#xba74; &#xb429;&#xb2c8;&#xb2e4;. &#xcd94;&#xac00;&#xc801;&#xc73c;&#xb85c; &#xc9c0;&#xd0ac;&#xc758; collection&#xae30;&#xb2a5;&#xc744; &#xc0ac;&#xc6a9;&#xd558;&#xc5ec; api&#xb77c;&#xb294; &#xbcc4;&#xb3c4;&#xc758; collection&#xc744; &#xb9cc;&#xb4e4;&#xc5c8;&#xc2b5;&#xb2c8;&#xb2e4;. api&#xbb38;&#xc11c;&#xb4e4;&#xc740; \_api&#xb77c;&#xb294; &#xd3f4;&#xb354;&#xc5d0; &#xc815;&#xb9ac;&#xb418;&#xc5b4; &#xc788;&#xc73c;&#xba70;, api collection&#xc73c;&#xb85c; &#xd45c;&#xd604;&#xd569;&#xb2c8;&#xb2e4;.

### &lt;a name=&quot;head7&quot;&gt;&lt;/a&gt;&#xc0c8;&#xb85c;&#xc6b4; &#xac15;&#xc88c; &#xc791;&#xc131;&#xd558;&#xae30;

&#xba87; &#xac00;&#xc9c0; &#xaddc;&#xce59;&#xb9cc; &#xc9c0;&#xcf1c;&#xc8fc;&#xc2dc;&#xba74; &#xb429;&#xb2c8;&#xb2e4;.

* \_draft&#xd3f4;&#xb354;&#xc5d0; &#xae43;&#xd5c8;&#xbe0c; post &#xd30c;&#xc77c;&#xba85; &#xc791;&#xc131;&#xbc95;&#xc5d0; &#xb530;&#xb77c; &#xd30c;&#xc77c;&#xc744; &#xb9cc;&#xb4e4;&#xc5b4;&#xc57c; &#xd569;&#xb098;&#xb2e4;.
* category meta &#xac12;&#xc740; `&#xae30;&#xcd08;&#xacfc;&#xc815;`, `&#xc911;&#xae09;&#xacfc;&#xc815;`, `&#xace0;&#xae09;&#xacfc;&#xc815;` &#xc911; &#xd558;&#xb098;&#xb97c; &#xb123;&#xc5b4;&#xc8fc;&#xba74; &#xb429;&#xb2c8;&#xb2e4;.

&#xc880;&#xb354; &#xc0c1;&#xc138;&#xd55c; &#xc791;&#xc131; &#xbc29;&#xbc95;&#xc740; &#xc544;&#xb798; &#xb9c1;&#xd06c;&#xb97c; &#xcc38;&#xc870;&#xd558;&#xc138;&#xc694;.

* [&#xc9c0;&#xd0ac; &#xd3ec;&#xc2a4;&#xd2b8; &#xc791;&#xc131; &#xbc29;&#xbc95; &#xcc38;&#xc870;](http://jekyllrb-ko.github.io/docs/posts/)
* [Markdown &#xc791;&#xc131; &#xbc29;&#xbc95; &#xcc38;&#xc870;](https://guides.github.com/features/mastering-markdown/)

### &lt;a name=&quot;head8&quot;&gt;&lt;/a&gt;&#xc791;&#xc131;&#xd55c; &#xac15;&#xc88c;&#xb97c; &#xae43;&#xd5c8;&#xbe0c;&#xc5d0; &#xc62c;&#xb9ac;&#xae30;

\_draft&#xd3f4;&#xb354;&#xb0b4;&#xc5d0; &#xc791;&#xc131;&#xb41c; &#xac15;&#xc88c;&#xb294; git hub&#xc5d0; add, push&#xd569;&#xb2c8;&#xb2e4;. desktop GUI&#xb97c; &#xc774;&#xc6a9;&#xd560; &#xacbd;&#xc6b0; `changes`&#xd0ed;&#xc5d0;&#xc11c; `Commit and Sync master`&#xb85c; &#xc791;&#xc131;&#xd55c; &#xb0b4;&#xc6a9;&#xc744; push&#xd569;&#xb2c8;&#xb2e4;.

![](/images/help/img-mac-git-commit.png)

### &lt;a name=&quot;head9&quot;&gt;&lt;/a&gt;&#xae43;&#xd5c8;&#xbe0c;&#xc5d0;&#xc11c; &#xc9c1;&#xc811; &#xcf54;&#xb4dc; &#xc218;&#xc815;&#xd558;&#xae30;

**`&#xac00;&#xb2a5;&#xd558;&#xc9c0;&#xb9cc;, &#xcd94;&#xcc9c; &#xd558;&#xc9c0; &#xc54a;&#xc2b5;&#xb2c8;&#xb2e4;. &#xb85c;&#xceec; &#xc800;&#xc7a5;&#xc18c;&#xb97c; &#xb9cc;&#xb4dc;&#xc138;&#xc694;.`**

### &lt;a name=&quot;head10&quot;&gt;&lt;/a&gt;&#xbcf8; &#xd398;&#xc774;&#xc9c0; &#xc18c;&#xc2a4; &#xcf54;&#xb4dc; &#xbcf4;&#xae30;

&#xd398;&#xc774;&#xc9c0; &#xc791;&#xc131;&#xc5d0; &#xb300;&#xd55c; &#xc608;&#xb97c; &#xd655;&#xc778; &#xd558;&#xace0; &#xc2f6;&#xb2e4;&#xba74; &#xbcf8; &#xd398;&#xc774;&#xc9c0;&#xc758; markdown &#xd14d;&#xc2a4;&#xd2b8;&#xb97c; &#xd655;&#xc778; &#xd558;&#xc2dc;&#xba74; &#xac15;&#xc88c;&#xb098; API&#xbb38;&#xc11c;&#xb97c; &#xc791;&#xc131;&#xd558;&#xb294;&#xb370; &#xb3c4;&#xc6c0;&#xc774; &#xb418;&#xb9ac;&#xb77c; &#xc0dd;&#xac01; &#xb429;&#xb2c8;&#xb2e4;.

&lt;button type=&quot;button&quot; class=&quot;btn btn-info&quot; onclick=&quot;javascript:$(&#039;.prettyprint&#039;).toggle();&quot;&gt;
  &#xcf54;&#xb4dc; &#xbcf4;&#xae30;/&#xac10;&#xcd94;&#xae30;
&lt;/button&gt;

&lt;pre class=&quot;prettyprint&quot;&gt;
//&#xc18c;&#xc2a4;&#xcf54;&#xb4dc;
&lt;/pre&gt;

</pre>
