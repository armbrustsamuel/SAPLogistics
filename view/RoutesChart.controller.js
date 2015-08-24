sap.ui.controller("demo.view.RoutesChart", {
	
	onInit: function(oEvent) {
        var oVizFrame = this.getView().byId("idVizFramePie");
        var oPopOver = this.getView().byId("idPopOver");
        //var oModel = new sap.ui.model.json.JSONModel("test-resources/sap/viz/demokit/dataset/bookstore_fiori/ByItemCity_pie.json");
        //source from: https://sapui5.hana.ondemand.com/sdk/test-resources/sap/viz/demokit/dataset/bookstore_fiori/ByItemCity_sum.json
        var oModel = new sap.ui.model.json.JSONModel("model/chartData.json");
        var oDataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [{
                name: "Item Category",
                value: "{Item Category}"
            }],
            measures: [{
                name: 'Revenue',
                value: '{Revenue}'
            }],
            data: {
                path: "/book"
            }
        });

        oVizFrame.setDataset(oDataset);
        oVizFrame.setModel(oModel);

        var feedSize = new sap.viz.ui5.controls.common.feeds.FeedItem({
                'uid': "size",
                'type': "Measure",
                'values': ["Revenue"]
            }),
            feedColor = new sap.viz.ui5.controls.common.feeds.FeedItem({
                'uid': "color",
                'type': "Dimension",
                'values': ["Item Category"]
            });

        oVizFrame.setVizProperties({
            legend: {
                title: {
                    visible: false
                }
            },

            title: {
                visible: true,
                text: 'Revenue by Route'
            }
        });



        oVizFrame.addFeed(feedSize);
        oVizFrame.addFeed(feedColor);
        oPopOver.connect(oVizFrame.getVizUid());
    },
    
    onButtonPressed: function (evt) {
    	//===========================  Build Logic   ==============================//
    	var oVizFrame = this.getView().byId("idVizFramePie");
        var oPopOver = this.getView().byId("idPopOver");
        //var oModel = new sap.ui.model.json.JSONModel("test-resources/sap/viz/demokit/dataset/bookstore_fiori/ByItemCity_pie.json");
        //source from: https://sapui5.hana.ondemand.com/sdk/test-resources/sap/viz/demokit/dataset/bookstore_fiori/ByItemCity_sum.json
        var oModel = new sap.ui.model.json.JSONModel("model/chartData.json");
        var oDataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [{
                name: "Item Category",
                value: "{Item Category}"
            }],
            measures: [{
                name: 'Revenue',
                value: '{Revenue}'
            }],
            data: {
                path: "/book"
            }
        });

        oVizFrame.setDataset(oDataset);
        oVizFrame.setModel(oModel);

        var feedSize = new sap.viz.ui5.controls.common.feeds.FeedItem({
                'uid': "size",
                'type': "Measure",
                'values': ["Revenue"]
            }),
            feedColor = new sap.viz.ui5.controls.common.feeds.FeedItem({
                'uid': "color",
                'type': "Dimension",
                'values': ["Item Category"]
            });

        oVizFrame.setVizProperties({
            legend: {
                title: {
                    visible: false
                }
            },

            title: {
                visible: true,
                text: 'Revenue by Route'
            }
        });
        
        oVizFrame.addFeed(feedSize);
        oVizFrame.addFeed(feedColor);
        oPopOver.connect(oVizFrame.getVizUid());
    },
    
    handleNavButtonPress : function (evt) {
		this.nav.back("Master");
	}

});