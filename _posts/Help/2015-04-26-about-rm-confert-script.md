---
layout: post
title: Redmine WiKi Convert Script
date: 2015-04-24 15:47:54 +9:00 GMT
category: help
permalink: /help/rm-convert-script/
---

### rm convert code

<pre class="prettyprint">

-- 임시테이블 삭제
drop table if exists tempWiki1;
drop table if exists tempWiki1_1;
drop table if exists tempWiki1_2;
drop table if exists tempWiki2;
drop table if exists tempWiki3;
drop table if exists tempWiki4;
drop table if exists tempWiki4_1;
drop table if exists tempWiki4_9;
drop table if exists tempWiki5;

/*작업전 원본 text

    select `text` from bitnami_redmine.wiki_contents where id = 34 into outfile 'D:\\rm_wiki_files\\origine_32.md' CHARACTER SET utf8;;

*/

-- realgrid web wiki만 뽑아낸다. 첫행을 분리해 내고 제거한다.
create temporary table if not exists tempWiki1 AS (
    select id, substring_index(`text`, '\r\n', 1) as filename,
            replace(text, substring_index(`text`, '\r\n', 1), '') as body
    from bitnami_redmine.wiki_contents
    where page_id in (
            select id
            from bitnami_redmine.wiki_pages
            where wiki_id = 2 and parent_id = 33)
    and page_id <> 467
);

-- filename을 파일명으로 만들기 위한 작업
 create temporary table if not exists tempWiki1_1 as (
    select id, replace(replace(replace(filename, '  ', ' '), 'h1. ', ''), 'h2. ', '') filename,
            replace(replace(body, 'h1.', '###'), 'h2. ', '#### ') body
    from tempWiki1
 );

-- pre code tag
 create temporary table if not exists tempWiki1_2 as (
    select id, filename,
            replace(body, 'pre type="code"', 'pre class="prettyprint"') body
    from tempWiki1_1
 );

-- ------------- temp
 create temporary table if not exists tempWiki2 as (
    select *
    from tempWiki1_2
 );

-- seperate an object types as 'part' in the filename field
 create temporary table if not exists tempWiki3 as (
    select id, case when locate('Type', filename) > 0 then 'Types'
                when locate('Class', filename) > 0 then 'Types'
                when locate('GridBase', filename) > 0 then 'Objects'
                when locate('TreeDataProvider', filename) > 0 then 'Objects'
                when locate('LocalDataProvider', filename) > 0 then 'Objects'
                when locate('DataProvider', filename) > 0 then 'Objects'
                when locate('TreeView', filename) > 0 then 'Objects'
                when locate('GridView', filename) > 0 then 'Objects'
                else 'Features'
            end as part,
           case when locate('Type', filename) > 0 then trim(replace(filename, ' Type', ''))
                when locate('Class', filename) > 0 then trim(replace(filename, 'Class', ''))
                when locate('GridBase', filename) > 0 then trim(replace(filename, 'GridBase', ''))
                when locate('TreeDataProvider', filename) > 0 then trim(replace(filename, 'TreeDataProvider', ''))
                when locate('LocalDataProvider', filename) > 0 then trim(replace(filename, 'LocalDataProvider', ''))
                when locate('DataProvider', filename) > 0 then trim(replace(filename, 'DataProvider', ''))
                when locate('TreeView', filename) > 0 then trim(replace(filename, 'TreeView', ''))
                when locate('GridView', filename) > 0 then trim(replace(filename, 'GridView', ''))
                else filename
            end as title,
           case when locate('GridBase', filename) > 0 then 'GridBase'
                when locate('TreeDataProvider', filename) > 0 then 'TreeDataProvider'
                when locate('LocalDataProvider', filename) > 0 then 'LocalDataProvider'
                when locate('DataProvider', filename) > 0 then 'DataProvider'
                when locate('TreeView', filename) > 0 then 'TreeView'
                when locate('GridView', filename) > 0 then 'GridView'
                else null
            end as objectname,
            filename, body
    from tempWiki2
);

-- get object directiontype
create temporary table if not exists tempWiki4 as (

    select id, part, objectname,
            replace(replace(filename, ' ', '_'), '\r\n', '') as filename,
        case when left(title, 2) = 'on' and part = 'Objects' then 'Callback'
             when left(title, 2) <> 'on' and part = 'Objects' then 'Function'
        end as directiontype,
        -- link path
        case when part = "Features" then concat("/api/features/")
             when part = "Types" then concat("/api/types/")
             when part = "Objects" then concat("/api/", objectname, "/")
        end as linkpath,
        -- make permalink field
        case when part = "Features" then concat("/api/features/", title, "/")
             when part = "Types" then concat("/api/types/", title, "/")
             when part = "Objects" then concat("/api/", objectname, "/", title, "/")
        end as permalink,

        title, body
    from tempWiki3

);

-- convert to link mark
create temporary table if not exists tempWiki4_1 as (
    select id, part, objectname, directiontype, permalink, title, filename, linkpath,
            replace(replace(replace(body, '[[APIReference#', '[['), '[[', '['), ']]', concat('](', linkpath, ')'))  body
    from tempWiki4
);


-- ------------- temp > do not change table name.
 create temporary table if not exists tempWiki4_9 as (
    select *
    from tempWiki4_1
 );

-- set document meta tag
create temporary table if not exists tempWiki5 (
    nid INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id int,
    meta  varchar(8000),
    filename varchar(200),
    body text
) as (

    select id,  concat("---\nlayout: apipost\n"
                "title: ", ifnull(title, filename), '\n'
                "part: ", ifnull(part, ""),  '\n'
                "objectname: ", ifnull(objectname, ""), '\n'
                "directiontype: ", ifnull(directiontype, ""), '\n'
                "permalink: ",  ifnull(permalink, ""), '\n'
                "---", '\n', replace(body, '\r\n', '\n')) as meta, filename, body
     from tempWiki4_9

);

-- generate the script that save as md file.
/*
    select concat('select meta from tempWiki5 where nid=', nid, ' into outfile ''D:\\\\rm_wiki_files\\\\', replace(filename, '\r\n', ''), '.md'' CHARACTER SET utf8;')
     from tempWiki5;

*/

/* test

select meta from tempWiki5 where nid = 1 into outfile 'D:\\rm_wiki_files\\outfile_test1.md' CHARACTER SET utf8;
select replace(meta, '\n', '\n') from tempWiki5 where id = 1 into outfile 'D:\\rm_wiki_files\\outfile_test2.md' CHARACTER SET utf8;

select concat('a', '\n', 'b');
select concat('a', '\n', 'b') into outfile 'D:\\rm_wiki_files\\outfile_test1.md' CHARACTER SET utf8;
select concat('a', CHAR(10 using utf8), 'b', '한') into outfile 'D:\\rm_wiki_files\\outfile_test2.md' CHARACTER SET utf8;
select concat('a', CHAR(10 using utf8), 'b', '한') into outfile 'D:\\rm_wiki_files\\outfile_test3.md' CHARACTER SET utf8 LINES TERMINATED BY '\n';
*/
</pre>
