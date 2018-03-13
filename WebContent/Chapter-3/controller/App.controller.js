sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast) {
    "use strict";
    return Controller.extend("sapui5.training.template.controller.App", {
    	onButtonPress : function() {
    		MessageToast.show("I was pressed");
    	}
    });
});
