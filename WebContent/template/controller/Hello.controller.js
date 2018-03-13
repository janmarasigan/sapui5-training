sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";
	return Controller.extend("sapui5.training.template.controller.Hello", {
		onButtonPress : function() {
			MessageToast.show("Hello");
		}
	});
});