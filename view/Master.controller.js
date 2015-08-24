sap.ui.controller("demo.view.Master", {

	handleListItemPress : function (evt) {
		var oContext = evt.getSource().getBindingContext();//--follow added
		//var sPath = evt.getSource().getBindingContext().getProperty('title');
		var sPath = evt.getSource().getProperty('title'); // These two lines works to bindingData
		if(sPath === "Trip Monitor"){ 
			sPath="TripMaps";
		}
		if(sPath === "Best Drivers"){ 
			sPath="BestDrivers";
		}
		if(sPath === "Routes Chart"){ 
			sPath="RoutesChart";
		}
		if(sPath === "Maintenance Required"){ 
			sPath="MaintRequired";
		}
		if(sPath === "Maintain Routes"){ 
			sPath="TripMaster";
		}
		if(sPath === "Maintain Vehicles"){ 
			sPath="MaintainVehicle";
		}
		this.nav.to(sPath, oContext);
	},
	
	handleEditPress : function (evt) {
        var oTileContainer = this.getView().byId("myTileContainer");
        var newValue = ! oTileContainer.getEditable();
        oTileContainer.setEditable(newValue);
        evt.getSource().setText(newValue ? "Done" : "Edit");
      },
      
    handleAddPress : function(evt) {
        var tile = evt.getParameter("tile");
        evt.getSource().addTile(tile);
    },
    
    handleTileDelete : function (evt) {
        var tile = evt.getParameter("tile");
        evt.getSource().removeTile(tile);
      }
});