// outline.js
// https://github.com/bgrins/devtools-snippets
// Add jQuery to any page that does not have it already.

(function () {
    'use strict';

    window.outline=function(){
    $$('*').forEach(a=>{a.style.outline='1px solid red'})
    };

    window.nooutline=function(){
    $$('*').forEach(a=>{a.style.outline=''})
    };

    if ($$('*')[0].style.outline) {
    //below line fails causing outline function not executed
    //if($$('*').filter(ele=>ele.style.outline!='')) {
    window.nooutline();
    } else {
        window.outline();
    }
})();