// lodash.js
// https://github.com/bgrins/devtools-snippets
// Add jQuery to any page that does not have it already.

(function () {
    var s = document.createElement('script');
    //s.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js');
    s.setAttribute('src', "http://localhost:8899/G%3A/Projects/snippets/live/js/lodash.min.js");
    //s.setAttribute('src', "http://localhost:8899/G%3A/Projects/snippets/live/js/lodash.js");
    s.addEventListener('load', function(){
      console.log('lodash loaded!');
    });
    document.body.appendChild(s);
 
})();