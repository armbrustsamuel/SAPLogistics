jQuery.sap.declare("demo.Component");

sap.ui.core.UIComponent.extend("demo.Component", {

	init: function() {
        //load googlemaps library
        sap.ui.getCore().loadLibrary("openui5.googlemaps", "../../openui5/googlemaps/");
        
        openui5.googlemaps.ScriptsUtil.setApiKey('AIzaSyDY0kkJiTPVd2U7aTOAwhc9ySH6oHxOIYM');

        //register controls library
        jQuery.sap.registerResourcePath('controls', '../controls');
        jQuery.sap.require('openui5.googlemaps.MapUtils');
        
        sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
    },
	
	createContent : function() {

		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "demo.view.App",
			type : "JS",
			viewData : { component : this }
		});

//		// Using OData model to connect against a real service
//		var url = "/proxy/http/<server>:<port>/sap/opu/odata/sap/ZGWSAMPLE_SRV/";
//		var oModel = new sap.ui.model.odata.ODataModel(url, true, "<user>", "<password>");
//		oView.setModel(oModel);

		// Using a local model for offline development
		var oData = "https://logisticswebappi843655trial.hanatrial.ondemand.com/LogisticsWebApp/LogisticsOData.svc/TripDatas?%24format=json";
		//var oModel = new sap.ui.model.json.JSONModel("model/mock_3.json");
		var oModel = new sap.ui.model.json.JSONModel(oData);
		oView.setModel(oModel);
		
	    var i18nModel = new sap.ui.model.resource.ResourceModel({
		   bundleUrl: "i18n/messageBundle.properties" 
		});                         
		oView.setModel(i18nModel,"i18n");

		// done
		return oView;
	}
});