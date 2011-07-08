/*
 * File: CarMasterDetail.js
 * Date: Mon Apr 12 2010 15:36:27 GMT-0700 (PDT)
 * 
 * This file was generated by Ext Designer version xds-1.0.0.7c.
 * http://www.sencha.com/products/designer/
 *
 * This file will be generated the first time you export.
 *
 * You should implement event handling and custom methods in this
 * class.
 */

CarMasterDetail = Ext.extend(CarMasterDetailUi, {
    initComponent: function() {
        CarMasterDetail.superclass.initComponent.call(this);
        var sm = this.grid.getSelectionModel();
        sm.on('rowselect', this.onGridRowSelect, this);
    },
    onGridRowSelect: function(sm, rowIdx, r) {
        this.detail.update(r.data);
    }
});
