// fp_lodash.js
// https://github.com/bgrins/devtools-snippets
// Add jQuery to any page that does not have it already.

(function () {
    var s = document.createElement('script');
    s.setAttribute('src', 'https://cdn.jsdelivr.net/g/lodash@4(lodash.min.js+lodash.fp.min.js)');
    s.addEventListener('load', function(){
      console.log('lodash fp loaded!');
    });
    document.body.appendChild(s);
 
})();