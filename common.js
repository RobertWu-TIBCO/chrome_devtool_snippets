(function () {
    var s = document.createElement('script');
 //   s.setAttribute('src', 'E:\\SRAll\\AllMayDay\\2016-08-26\\2017-03_Arch\\online-offer-pullpush_dev\\apicamtask\\common.js');
    s.setAttribute('src', 'http://localhost:8899/E%3A/SRAll/AllMayDay/2016-08-26/2017-03_Arch/online-offer-pullpush_dev/apicamtask/common.js');
    s.addEventListener('load', function(){
      console.log('local common.js loaded!');
    });
    document.body.appendChild(s);
 
})();