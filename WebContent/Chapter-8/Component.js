sap.ui.define([
    "sap/ui/core/UIComponent"
], function(UIComponent) {
    "use strict";
    return UIComponent.extend("sapui5.training.template.Component", {
        metadata : {
            manifest : "json"
        },
        init : function() {
            UIComponent.prototype.init.apply(this, arguments);

            // create the views based on the url/hash
            this.getRouter().initialize();
        }
    });
});
