---
layout: faqpost
title:  lookuptree를 이용한 2단계 dropDown리스트
date:   2018-04-16 00:00:00
categories: faq
part: RealGrid
directiontype: 
tags:
    - dropdown
    - lookuptree
---

# Q.

간단한 2단계 dropDown리스트는 어떻게 구현하나요?

---
***

# A.

동적으로 가져오는 것이 아닌 정적으로 구성된 룩업트리예제는 아래와 같습니다.   
주석 부분을 참고하시기 바랍니다.

<pre class="prettyprint">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=UTF-8&quot;&gt;
&lt;title&gt;&#xb8e9;&#xc5c5;&#xc0d8;&#xd50c; 2&#xb2e8;&#xacc4;&lt;/title&gt;

&lt;script type=&quot;text/javascript&quot; src=&quot;./scripts/jszip.min.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;./scripts/jquery-2.1.1.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;./scripts/realgridjs-lic.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;./scripts/realgridjs_eval.1.1.27.min.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;./scripts/realgridjs-api.1.1.27.js&quot;&gt;&lt;/script&gt;

&lt;script type=&quot;text/javascript&quot;&gt;

    var gridView;
    var dataProvider;

    window.onload = function () {
        RealGridJS.setRootContext(&quot;scripts&quot;);
        dataProvider = new RealGridJS.LocalDataProvider();
        gridView = new RealGridJS.GridView(&quot;realgrid&quot;);
        gridView.setDataSource(dataProvider);
        dataProvider.setOptions({ datetimeFormat: &quot;yyyy/MM/dd&quot; });

        setFields(dataProvider);
        setColumns(gridView);
        setLookups(gridView);

        //&#xcf54;&#xb4dc;&#xd615;&#xd0dc;&#xb85c; &#xac12;&#xc774; &#xb118;&#xc5b4;&#xc634;.
        rows = [
            [&quot;O&quot;, &quot;O1&quot;],
            [&quot;M&quot;, &quot;M1&quot;],
            [&quot;O&quot;, &quot;O2&quot;],
            [&quot;O&quot;, &quot;O3&quot;],
            [&quot;M&quot;, &quot;M2&quot;],
            [&quot;M&quot;, &quot;M3&quot;],
            [&quot;O&quot;, &quot;O3&quot;]
        ];

        dataProvider.setRows(rows);

        gridView.onCellEdited = function (grid, itemIndex, dataRow, field) {
            var fieldName = dataProvider.getOrgFieldName(field);

            if (fieldName == &quot;field1&quot;) {
                grid.setValue(itemIndex, &quot;field2&quot;, &quot;&quot;);
            };
        }
    };

    function setLookups(grid) {
        grid.setLookups([{
            id: &quot;type1&quot;,
            levels: 2,
            //&#xbaa8;&#xb4e0; &#xacbd;&#xc6b0;&#xc758; &#xc218;&#xb97c; &#xb098;&#xc5f4;
            keys: [
                [&quot;O&quot;, &quot;O1&quot;],
                [&quot;O&quot;, &quot;O2&quot;],
                [&quot;O&quot;, &quot;O3&quot;],
                [&quot;M&quot;, &quot;M1&quot;],
                [&quot;M&quot;, &quot;M2&quot;],
                [&quot;M&quot;, &quot;M3&quot;],
            ],
            //&#xacbd;&#xc6b0;&#xc758; &#xc218;&#xc5d0; &#xb530;&#xb978; &#xd45c;&#xc2dc;&#xac12; &#xc124;&#xc815;
            values: [
                [&quot;3&#xbd84;&#xce74;&#xb808;&quot;],
                [&quot;&#xcc38;&#xce58;&quot;],
                [&quot;&#xbd88;&#xace0;&#xae30;&#xd53c;&#xc790;&quot;],
                [&quot;&#xc6b0;&#xc720;&quot;],
                [&quot;&#xbc14;&#xc774;&#xc624;&#xb538;&#xae30;&quot;],
                [&quot;&#xc0c1;&#xd558;&#xce58;&#xc988;&quot;]
            ]
        }]);
    }

    function setFields(provider) {
        var fields = [{
            fieldName: &quot;field1&quot;
        }, {
            fieldName: &quot;field2&quot;
        }];

        provider.setFields(fields);
    }

    function setColumns(grid) {
        var columns = [{
            name: &quot;column1&quot;,
            fieldName: &quot;field1&quot;,
            width: 150,
            header: {
                text: &quot;&#xc81c;&#xc870;&#xc0ac;&quot;
            },
            styles: {
                textAlignment: &quot;center&quot;
            },
            lookupDisplay: true,
            //1&#xb2e8;&#xacc4;&#xc758; &#xacbd;&#xc6b0; &#xbc14;&#xb85c; values, labels&#xc5d0; &#xc124;&#xc815;
            values: [&quot;O&quot;,&quot;M&quot;],
            labels: [&quot;&#xc624;&#xb69c;&#xae30;&quot;,&quot;&#xb9e4;&#xc77c;&#xc720;&#xc5c5;&quot;],
            editor:{
              type: &quot;dropDown&quot;
            }
        }, {
            name: &quot;column2&quot;,
            fieldName: &quot;field2&quot;,
            width: 150,
            header: {
                text: &quot;&#xc81c;&#xd488;&#xba85;&quot;
            },
            styles: {
                textAlignment: &quot;center&quot;
            },
            editor:{
                type:&quot;dropDown&quot;
            },
            lookupDisplay: true,
            //&#xc704;&#xc758; setLookups&#xc5d0;&#xc11c; &#xc124;&#xc815;&#xd55c; id &#xc9c0;&#xc815;
            lookupSourceId: &quot;type1&quot;,
            lookupKeyFields: [
                &quot;field1&quot;,
                &quot;field2&quot;
            ]
        }];

        grid.setColumns(columns);
    }


&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div id=&quot;realgrid&quot; style=&quot;width:80%; height:505px;&quot;&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
