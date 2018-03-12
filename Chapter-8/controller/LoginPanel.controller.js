sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast"
	], function (Controller, MessageToast) {
	"use strict";
	return Controller.extend("sapui5.training.template.controller.LoginPanel", {
		_getDialog : function () {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("sapui5.training.template.fragment.LoginDialog", this);
				this.getView().addDependent(this._oDialog);
			}
			return this._oDialog;
		},
				
		onOpenDialog : function () {
			this._getDialog().open();
		},

		onCloseDialog : function () {
			this._getDialog().close();
		}

	});
});
