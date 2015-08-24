sap.ui.core.mvc.Controller.extend("demo.view.TripMaster", {

	onInit: function(evt) {
		//this.getRouter().attachRoutePatternMatched(this.onRouteMatched, this);
	},
	
	handleNavButtonPressTo: function (evt) {
		var oContext = evt.getSource().getBindingContext();//--follow added
		this.nav.to("TripDetail", oContext);
	},
	
	handleNavButtonPress : function (evt) {
		var filters=[];
		var list = this.getView().byId("List1");
		var binding = list.getBinding("items");
		binding.filter(filters);
		this.nav.back("Master");
	},
	
	handleIconTabBarSelect: function (evt) {
		// var sValue = evt.getParameter("title");
		// var oFilter = new sap.ui.model.Filter("/Trip", sap.ui.model.FilterOperator.Contains, sValue);
		// var oBinding = evt.getSource().getBinding("items");
		// oBinding.filter(oFilter);
		
		var filters = [];
		var sFilter;
		//var query = evt.getParameter("title");
		var query = evt.getSource().getProperty('title');
		console.log(query);
		if (query && query.length > 0) {
		
		    if(query == "4" )
		    {
		       sFilter = new sap.ui.model.Filter("Trip", sap.ui.model.FilterOperator.EQ, query);
		    }
		    else if(query == "6")
		    {
		       sFilter = new sap.ui.model.Filter("Trip", sap.ui.model.FilterOperator.EQ, query);
		    }
		     //and so on...
		
		    filters.push(sFilter);
		}
		
		var list = this.getView().byId("List1");
		var binding = list.getBinding("items");
		binding.filter(filters);
		
		console.log(binding);
		
		var oContext = evt.getSource().getBindingContext();//--follow added
		this.nav.to("TripDetail", oContext);
		
		//console.log(oBinding);
	}
});