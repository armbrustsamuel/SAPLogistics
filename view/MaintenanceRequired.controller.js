sap.ui.controller("demo.view.MaintenanceRequired", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf demo.view.MaintenanceRequired
	 */
	//	onInit: function() {
	//
	//	},
	handleNavButtonPress : function (evt) {
		this.nav.back("Master");
	}

});