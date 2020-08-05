// crypto-js.js
// https://github.com/bgrins/devtools-snippets
// Add jQuery to any page that does not have it already.

(function () {
    var s = document.createElement('script');
    //s.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js');
    s.setAttribute('src', 'http://localhost:8899/G%3A/Projects/snippets/live/js/crypto-js.min.js');
    s.addEventListener('load', function(){
      console.log('crypto js loaded!');
    });
    document.body.appendChild(s);
 
    window.md5 = window.MD5 = function(str){
        return CryptoJS.MD5(str).toString().toUpperCase();
    }
    window.sha1 = window.SHA1 = function(str){
      return  CryptoJS.SHA1(str).toString().toUpperCase();
    }

    const sleep = ms => new Promise((resolve, reject) => setTimeout(resolve, ms));

    sleep(100).then(()=>{
         console.log('prepare to load crypto enc-base64 js!');
    // add base64 
    s = document.createElement('script');
    // use http instead of https for faster loading
    s.setAttribute('src', 'http://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/enc-base64.min.js');
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
    })

    
})();