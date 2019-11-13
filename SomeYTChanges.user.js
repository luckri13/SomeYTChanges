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
    
    var itemsPerRow = 8;
    
    var customSettingsCss = '#contents.ytd-rich-grid-renderer{ --ytd-rich-grid-items-per-row: ' + itemsPerRow + ';--ytd-rich-grid-posts-per-row: ' + itemsPerRow + ';--ytd-rich-grid-movies-per-row: ' + itemsPerRow + ';}';

    var newCSS = GM_getResourceText ("customcss");
    GM_addStyle (newCSS);
    
    GM_addStyle (customSettingsCss);
})();
