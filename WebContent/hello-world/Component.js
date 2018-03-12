sap.ui.define([
	"sap/ui/core/UIComponent"
], function(UIComponent) {
//    "sap/ui/core/UIComponent",
//    "sap/ui/model/json/JSONModel"
//], function(UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("sapui5.training.helloworld.Component", {
        metadata : {
            manifest : "json"
        },
        init : function() {
            UIComponent.prototype.init.apply(this, arguments);
            
//            var oData = {
//                recipient : {
//                    name : "World"
//                }
//            };
//            var oModel = new JSONModel(oData);
//            this.setModel(oModel);  // <- this.setModel() is used instead of this.getView().setModel()
        }
    });
});
