sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function(Controller, MessageToast, JSONModel) {
    "use strict";
    return Controller.extend("sapui5.training.helloworld.controller.App", {
        onInit : function() {
        	/* For this chapter, we move the JSONModel creation 
        	 * from the controller to the Component
        	 * 
        	 * In the Component file, add sap.ui.model.json.JSONModel to the definition
        	 * */
            var oData = {
                recipient : {
                    name : "World"
                }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onButtonPress : function() {
            var oModel = this.getView().getModel();
            var sName = oModel.getData().recipient.name;
            MessageToast.show("Hello " + sName);
        }
    });
});
