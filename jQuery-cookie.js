// jquery-cookie.js
// https://github.com/bgrins/devtools-snippets
// Add jQuery cookie to any page that does not have it already.

(function () {
    var s = document.createElement('script');
    s.setAttribute('src', 'https://cdn.bootcss.com/jquery-cookie/1.4.1/jquery.cookie.min.js');
    s.addEventListener('load', function(){
      console.log('jQuery cookie loaded!');
    });
    document.body.appendChild(s);
 
})();