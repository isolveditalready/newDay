(function (global, fnc) {
  fnc(global);
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
  var jQuery = function (selector, context) {
    return new jQuery.fn.init(selector, context);
  };

  // this is so awesome
  jQuery.fn = jQuery.prototype = {
    anynewFunction: function () {
      console.log("calling anynewFunction");
      console.log("this must work");
      return this;
    },
  };

  init = jQuery.fn.init = function (selector, context, root) {
    var match, elem;
    // HANDLE: $(""), $(null), $(undefined), $(false)
    if (!selector) {
      return this;
    }

    return document.getElementById(selector);
  };
  init.prototype = jQuery.fn;
  window.jQuery = window.$ = jQuery;

  return jQuery;
});
