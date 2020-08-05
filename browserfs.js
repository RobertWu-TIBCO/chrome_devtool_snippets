// browserfs.js
// https://github.com/bgrins/devtools-snippets
// https://cdnjs.cloudflare.com/ajax/libs/BrowserFS/2.0.0/browserfs.min.js

(function () {
    var s = document.createElement('script');
    s.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/BrowserFS/2.0.0/browserfs.min.js');
    s.addEventListener('load', function(){
      console.log('browserfs loaded!');
    });
    document.body.appendChild(s);
 
})();
