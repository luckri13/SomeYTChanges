// ==UserScript==
// @name         SomeYTChanges
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Fix YT design
// @author       Vidarr
// @resource     customcss https://raw.githubusercontent.com/luckri13/SomeYTChanges/master/customYT.css
// @include      /https?:\/\/www\.(youtube)\.com\/.*/
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    var newCSS = GM_getResourceText ("customcss");
    GM_addStyle (newCSS);
})();
