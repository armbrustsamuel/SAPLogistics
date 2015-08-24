sap.ui.jsview("demo.view.App", {

	getControllerName: function () {
		return "demo.view.App";
	},
	
	createContent: function (oController) {
		
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		// create app
		this.app = new sap.m.App();
		
		// load the master page
		var master = sap.ui.xmlview("Master", "demo.view.Master");
		master.getController().nav = this.getController();
		this.app.addPage(master, true);
		
		// load the detail page
		var detail = sap.ui.xmlview("Detail", "demo.view.Detail");
		detail.getController().nav = this.getController();
		this.app.addPage(detail, false);
		
		var trip = sap.ui.xmlview("TripMaps", "demo.view.TripMaps");
		trip.getController().nav = this.getController();
		this.app.addPage(trip, false);
		
		var tripmaster = sap.ui.xmlview("TripMaster", "demo.view.TripMaster");
		tripmaster.getController().nav = this.getController();
		this.app.addPage(tripmaster, false); 
		
		var tripdetail = sap.ui.xmlview("TripDetail", "demo.view.TripDetail");
		tripdetail.getController().nav = this.getController();
		this.app.addPage(tripdetail, false);
		
		var maintainvehicle = sap.ui.xmlview("MaintainVehicle", "demo.view.MaintainVehicle");
		maintainvehicle.getController().nav = this.getController();
		this.app.addPage(maintainvehicle, false);
		
		var charts = sap.ui.xmlview("RoutesChart", "demo.view.RoutesChart");
	    charts.getController().nav = this.getController();
		this.app.addPage(charts, false);
		
		var bestdrivers = sap.ui.xmlview("BestDrivers", "demo.view.BestDrivers");
	    bestdrivers.getController().nav = this.getController();
		this.app.addPage(bestdrivers, false);
		
		var maintrequired = sap.ui.xmlview("MaintRequired", "demo.view.MaintenanceRequired");
	    maintrequired.getController().nav = this.getController();
		this.app.addPage(maintrequired, false);
		
		// done
		return this.app;
	}
});