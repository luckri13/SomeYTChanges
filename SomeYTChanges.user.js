// ==UserScript==
// @name         SomeYTChanges
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Fix YT design
// @author       Vidarr
// @resource     oldytcss https://raw.githubusercontent.com/luckri13/tempFiles/master/oldyt.css
// @include      /https?:\/\/www\.(youtube)\.com\/.*/
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    var newCSS = GM_getResourceText ("oldytcss");
    GM_addStyle (newCSS);
})();
