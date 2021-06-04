(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{384:function(e,t,a){"use strict";a.r(t);var s=a(19),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"database-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-structure"}},[e._v("#")]),e._v(" Database Structure")]),e._v(" "),a("p",[e._v("In QloApps the database tables start with a prefix for example PREFIX_orders. You have the option to change the prefix of the tables on the installation step where you need to fill your database data and associate a database.")]),e._v(" "),a("p",[e._v('We utilize lowercase while naming, and isolated the words with an underscore character ("_"):')]),e._v(" "),a("p",[e._v("Here are few examples:")]),e._v(" "),a("ul",[a("li",[e._v("PREFIX_customer")]),e._v(" "),a("li",[e._v("PREFIX_cart")]),e._v(" "),a("li",[e._v("PREFIX_order")]),e._v(" "),a("li",[e._v("PREFIX_module")]),e._v(" "),a("li",[e._v("PREFIX_product")])]),e._v(" "),a("p",[e._v("Right when a table develops the associations between two elements, the names of the two substances are referred to in the table's name. For instance, PREFIX_customer_group joins customers to their assigned groups.")]),e._v(" "),a("p",[e._v("A few nuances to note about tables:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Tables that contain translations must end with the _lang postfix. For example, PREFIX_product_lang has all the translations for the PREFIX_product table.")])]),e._v(" "),a("li",[a("p",[e._v("Tables that contain the records interfacing with a specific shop must end with the _shop addition. For instance, PREFIX_category_shop contains the circumstance of each class depending upon the store.")])])]),e._v(" "),a("p",[e._v("There is furthermore a few standard practices for data sections inside a table:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Use the id_lang field to store the language related with a record.")])]),e._v(" "),a("li",[a("p",[e._v("Use the id_shop field to store the store related with a record.")])])]),e._v(" "),a("h2",{attrs:{id:"database-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-content"}},[e._v("#")]),e._v(" Database content")]),e._v(" "),a("p",[e._v("Database substance is saved in XML records in introduce/information/xml/ as per defualt settings. Every element has one record (= table).")]),e._v(" "),a("p",[e._v("These records are utilized during the QloApps installation too.")]),e._v(" "),a("h2",{attrs:{id:"structure-and-content-upgrades"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structure-and-content-upgrades"}},[e._v("#")]),e._v(" Structure and content upgrades")]),e._v(" "),a("h3",{attrs:{id:"defining-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defining-changes"}},[e._v("#")]),e._v(" Defining changes")]),e._v(" "),a("p",[e._v("As soon as QloApps is installed, the default structure and substance records we saw are not utilized any longer.")]),e._v(" "),a("p",[e._v("On the off chance that another release of QloApps must carry changes to the current database, an upgrade document must be made along with the "),a("code",[e._v("db_structure.sql")]),e._v("  update. This SQL document will be put away in the "),a("code",[e._v("/install/upgrade/sql/")]),e._v(".")]),e._v(" "),a("p",[e._v("Its name is the QloApps variant on which the change will be applied.")]),e._v(" "),a("h2",{attrs:{id:"applying-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#applying-changes"}},[e._v("#")]),e._v(" Applying changes")]),e._v(" "),a("p",[e._v("Applying the changes on your database can be done:")]),e._v(" "),a("ul",[a("li",[e._v("by reinstalling the shop")]),e._v(" "),a("li",[e._v("from a previous version of QloApps, by copying the new files and calling the PHP script "),a("code",[e._v("install/upgrade/upgrade.php")])])]),e._v(" "),a("p",[e._v("QloApps lists the upgrade files waiting to be applied, by selecting the names fitting between the configuration property "),a("code",[e._v("PS_VERSION_DB")]),e._v(" and the constant "),a("code",[e._v("_PS_INSTALL_VERSION_")]),e._v(" defined in "),a("code",[e._v("install/install_version.php")]),e._v(".")]),e._v(" "),a("p",[e._v("In the first part of this article, we talked about entities being managed only by Doctrine. Applying the changes on the database is done with the following command:")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[e._v("php bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("console "),a("span",{pre:!0,attrs:{class:"token argument-name"}},[e._v("prestashop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token argument-name"}},[e._v("schema")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("update"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("without"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("foreign\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);