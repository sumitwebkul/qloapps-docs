(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{386:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("To create a SQL queries you will need DBQuery class which is a query builder. For an example,")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sql")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DbQuery")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sql")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sql")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'cms'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sql")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("innerJoin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'cms_lang'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'l'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'c.id_cms = l.id_cms AND l.id_lang = '")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword type-casting"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id_lang")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sql")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("where")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'c.active = 1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sql")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("orderBy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'position'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Db")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("executeS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Here is a list of some of the methods from this class")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name of the method and parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("__toString()")]),t._v(" "),a("td",[t._v("Create and get the query.")])]),t._v(" "),a("tr",[a("td",[t._v("build()")]),t._v(" "),a("td",[t._v("Create and get the query (return a string).")])]),t._v(" "),a("tr",[a("td",[t._v("from(string $table, mixed $alias = null)")]),t._v(" "),a("td",[t._v("Set table for FROM clause.")])]),t._v(" "),a("tr",[a("td",[t._v("groupBy(string $fields)")]),t._v(" "),a("td",[t._v("Add a GROUP BY restriction.")])]),t._v(" "),a("tr",[a("td",[t._v("having(string $restriction)")]),t._v(" "),a("td",[t._v("Add a restriction in the HAVING clause (each restriction will be separated by an AND statement).")])]),t._v(" "),a("tr",[a("td",[t._v("innerJoin(string $table, string $alias = null, string $on = null)")]),t._v(" "),a("td",[t._v("Add a INNER JOIN clause, E.g. $this->innerJoin('product p ON ...').")])]),t._v(" "),a("tr",[a("td",[t._v("join(string $join)")]),t._v(" "),a("td",[t._v("Add a JOIN clause, E.g. $this->join('RIGHT JOIN'."),a("em",[t._v("DB_PREFIX")]),t._v(".'product p ON ...');.")])]),t._v(" "),a("tr",[a("td",[t._v("leftJoin(string $table, string $alias = null, string $on = null)")]),t._v(" "),a("td",[t._v("Add a LEFT JOIN clause.")])]),t._v(" "),a("tr",[a("td",[t._v("leftOuterJoin(string $table, string $alias = null, string $on = null)")]),t._v(" "),a("td",[t._v("Add a LEFT OUTER JOIN clause.")])]),t._v(" "),a("tr",[a("td",[t._v("limit(string $limit, mixed $offset = 0)")]),t._v(" "),a("td",[t._v("Limit results in query.")])]),t._v(" "),a("tr",[a("td",[t._v("naturalJoin(string $table, string $alias = null)")]),t._v(" "),a("td",[t._v("Add a NATURAL JOIN clause.")])]),t._v(" "),a("tr",[a("td",[t._v("orderBy(string $fields)")]),t._v(" "),a("td",[t._v("Add an ORDER B restriction.")])]),t._v(" "),a("tr",[a("td",[t._v("select(string $fields)")]),t._v(" "),a("td",[t._v("Add fields in query selection.")])]),t._v(" "),a("tr",[a("td",[t._v("where(string $restriction)")]),t._v(" "),a("td",[t._v("Add a restriction in WHERE clause (each restriction will be separated by an AND statement).")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);