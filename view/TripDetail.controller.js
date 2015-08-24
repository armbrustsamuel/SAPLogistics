sap.ui.core.mvc.Controller.extend("demo.view.TripDetail", {

	handleNavButtonPress : function (evt) {
		this.nav.back("TripMaster");
	}
});