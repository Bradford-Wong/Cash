(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['entry'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      <p class=\"entry-name\">\r\n        <span class = \"bold\">Recipient:</span> "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "\r\n      </p>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article class=\"entry\">\r\n  <div class=\"entry-icon\">\r\n    <i class=\"fa fa-money\"></i>\r\n  </div>\r\n  <div class=\"entry-content\">\r\n    <p class=\"entry-amount\">\r\n      <span class = \"bold\">Amount:</span> <span class = \"entry-sign\">"
    + alias4(((helper = (helper = helpers.sign || (depth0 != null ? depth0.sign : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sign","hash":{},"data":data}) : helper)))
    + "</span>$<span class = \"entry-amount-number\">"
    + alias4(((helper = (helper = helpers.amount || (depth0 != null ? depth0.amount : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amount","hash":{},"data":data}) : helper)))
    + "</span>\r\n    </p>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <p class=\"entry-description\">\r\n      <span class = \"bold\">Description:</span> "
    + alias4(((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"desc","hash":{},"data":data}) : helper)))
    + "\r\n    </p>\r\n  </div>\r\n</article>\r\n";
},"useData":true});
})();