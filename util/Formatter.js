jQuery.sap.declare("demo.util.Formatter");

sap.ui.demo.myFiori.util.Formatter = {
  
  _statusStateMap: {
      "P" : "Success",
      "N" : "Warning"
  },
  
  statusText : function(value) {
      
      var bundle = this.getModel("i18n").getResourceBundle();
      return bundle.getText("StatusText" + value, "?");
  },
  
  statusState : function(value) {
      
      var map = sap.ui.demo.myFiori.util.Formatter._statusStateMap;
      return (value && map[value]) ? map[value]: "None";
  }
};