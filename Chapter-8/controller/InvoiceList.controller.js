sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel",
		"sapui5/training/template/model/Formatter",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator"
], function (Controller, JSONModel, Formatter, Filter, FilterOperator) {
	"use strict";
	return Controller.extend("sapui5.training.template.controller.InvoiceList", {
		formatter : Formatter,
		
		onInit : function () {
			// Add code here
		},

		onFilterInvoices : function (oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.getView().byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},

		onPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail", {
				invoicePath: encodeURIComponent(oItem.getBindingContext("invoice").getPath())
			});
		}
	});
});