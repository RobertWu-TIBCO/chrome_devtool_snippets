// enc-base64.js
// https://github.com/bgrins/devtools-snippets
// Add jQuery to any page that does not have it already.

(function () {
    var s = document.createElement('script');
    s.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/enc-base64.min.js');
    s.addEventListener('load', function(){
      console.log('crypto enc-base64 js loaded!');
    });
    document.body.appendChild(s);
 
    window.base64 = window.base64enc = function(str){  
    const parseStr = CryptoJS.enc.Utf8.parse(str);
    const base64Str = CryptoJS.enc.Base64.stringify(parseStr);
    return base64Str
    }
    window.base64dec = window.base64decode = function(str){
      const words = CryptoJS.enc.Base64.parse(str);
      const parseStr = words.toString(CryptoJS.enc.Utf8);
      return parseStr;
    }

})();