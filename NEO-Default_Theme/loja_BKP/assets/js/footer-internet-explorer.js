function GetBrowserInfo() {
    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
    var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6
    if (isOpera) {
        return 1;
    }
    else if (isFirefox) {
        return 2;
    }
    else if (isChrome) {
        return 3;
    }
    else if (isSafari) {
        return 4;
    }
    else if (isIE) {
        console.log("Internet Explorer detectado.");
        return 5;
    }
    else {
        return 0;
    }
}
$(document).ready(function(){
  var navegador = GetBrowserInfo();
    if(navegador == 5)
    {
        $(".footer .footer-wrapper .right-column").css({"display": "block", "flex-grow": "8"});
        $(".img-certificado img").css("width", "20%");
        $(".menu-header .menu").css({"height": "80px", "margin-top": "15px"});
        $(".infoBar .infoBar-wrapper").css("margin-top", "100px");
        $(".infoBar .infoBar-wrapper .item .icon").css("margin-top", "-60px");
        $(".menu-header .menu .navigation ul:not(.submenu)").css("margin-top", "30px");
        $(".footer .footer-wrapper .right-column .column:last-child").css("display", "none");
        console.log("Internet Explorer ajustado.");
    }
});