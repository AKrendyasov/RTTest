Ext.define('RTTask.Application', {
    extend: 'Ext.app.Application',
    name: 'RTTask',
    stores: [
        'Localities'
    ],

    launch: function () {

        Ext.create({
            xtype: 'app-main'
        });
    }
});