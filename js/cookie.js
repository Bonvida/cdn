
if(location.hostname!="checkout.lodgify.com"){
document.addEventListener('DOMContentLoaded', function load() {
    if (!window.jQuery||!window.cookieconsent) return setTimeout(load, 50);
    
$(function() {
var p;
console.log('ready');


function scrollfaq(){

console.log('scroll');
}

window.cookieconsent.initialise({
  "position": "top-right",
  "type": "opt-in",
    "palette": {
    "popup": {
      "background": "#bd6302",
      "text": "#ffffff"
    },
    "button": {
      "background": "#0656a5",
      "text": "#ffffff"
    }
  },
  blacklistPage: ['/\/bonvida/?currency/'],
  onInitialise: function (status) {
  var type = this.options.type;
  var didConsent = this.hasConsented();
  if (type == 'opt-in' && didConsent) {
    // enable cookies
   smarty();
  }
  if (type == 'opt-out' && !didConsent) {
    // disable cookies
  }
},
 
   blacklist: ["checkout.lodgify.com"],
    onStatusChange: function(status) {
      console.log(this.hasConsented() ?
        'enable cookies' : 'disable cookies');
     if(this.hasConsented()){
            set_cookie('ssupp.banner', true);
	}

    }
  },   function (popup) {
console.log('pop');
        p = popup;
        popup.toggleRevokeButton(false);
        }, function (err) {
        console.error(err);
      
});

if(document.getElementById('btn-revokeChoice')!=undefined){
   document.getElementById('btn-revokeChoice').onclick = function (e) {
        console.log("Calling <em>revokeChoice()</em>");
        p.revokeChoice();
      };
}

});

$(".checkout-btn-wrapper").on("DOMSubtreeModified","span",function(){
$(this).append("<span>test</span>");
});

$(".BookingSearch").live("DOMSubtreeModified",".BookingSearch-price",function(){


var bookDiv=$("#bookdiv-included");
if(bookDiv.length==0){
$(".BookingSearch-price").after("<div class='row' id='bookdiv-included'> <div class='col-xs-12'><p>Inclusief</p><ul><li>Schoonmaak</li><li>Linnengoed</li><li>Reserveringskosten</li></ul><small><b>Volgende stap voor overzicht/extra\'s</b></small></div></div>");
 }

  });

$('.booking-search-content .btn-cta btn-block btn btn-lg btn-primary span').html('test');

}, false);
}





function set_cookie(name, value) {
  document.cookie = name +'='+ value +'; Path=/;';
}

var _smartsupp = _smartsupp || {};
_smartsupp.key = 'e413685e3bd64952b691d7d22dc86c71a6e58f51';

_smartsupp.gaKey = 'UA-57467742-1';

function smarty(){
window.smartsupp||(function(d) {
	var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
	s=d.getElementsByTagName('script')[0];c=d.createElement('script');
	c.type='text/javascript';c.charset='utf-8';c.async=true;
	c.src='//www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
window.smartsupp('theme:colors', { primary:'#ef7d03', banner:'#02378c' });
window.smartsupp('theme:options', { widgetHeight: 60 });
window.smartsupp('theme:options', { buttonHeight: 40 });
window.smartsupp('theme:options', { banner: true});
window.smartsupp('variables', {

		frontend: { label: 'FRONTEND', value: 'MAIN WEBSITE' }
	});


//var language = navigator.languages && navigator.languages[0] || // Chrome / Firefox
        //       navigator.language ||   // All browsers
        //       navigator.userLanguage; // IE <= 10

var language = document.documentElement.lang;

if(language=='en'){
	window.smartsupp('language','en');
}
if(language=='de-DE'){
	window.smartsupp('language','de');
}
if(language=='de'){
  window.smartsupp('language','de');
}
if(language=='es-ES'){
	window.smartsupp('language','es');
}

}
