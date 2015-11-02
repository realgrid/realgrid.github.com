---
layout: faqpost
title:  SyntaxError ... Range out of order in character class
date:   2015-10-25 00:00:00
categories: faq
part: RealGridJS
directiontype: 
tags:
    - syntaxerror
    - range
    - characterset
    - 인코딩
    - encoding
---

# Q.

아래와 같은 오류가 발생하는 이유는 뭔가요?

<pre class="prettyprint">
> Uncaught SyntaxError: Invalid regular expression: /[ã„±-ã…Žã…-ã…£ê°€-íž£]/: Range out of order in character class.</pre> 

---

# A.

## 원인

위 오류의 원인은 페이지의 인코딩 타입을 의심해 보아야 합니다. 

## 해결방법

JSP의 경우 페이지 상단에 

<pre class="prettyprint">
&lt;%@ page contentType=&quot;text/html; charset=euc-kr&quot; %&gt;
</pre>

ASP의 경우 Response전에

<pre class="prettyprint">
Response.ContentType = "text/html"
Response.CharSet = "UTF-8

Response.AddHeader "Content-Type", "text/html;charset=UTF-8"</pre>

HTML 페이지에는 

<pre class="prettyprint">
  &lt;meta charset=&quot;utf-8&quot;&gt;</pre>

등과 같이 인코딩 정보를 설정해 주면 해결 할 수 있습니다.
