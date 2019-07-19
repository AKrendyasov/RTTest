Ext.define('RTTask.view.locality.LocalitiesController', {
    extend: 'RTTask.view.main.MainController',
    alias: 'controller.localities',

    addTitleAttr: value => {
        return '<span title="' + value + '" style="cursor:pointer;">' + value + '</span>';
    },
    addAvatar: () => {
        return '<img src="/resources/images/User.png" width="50" height="50" border="0" />'
    },

    createItem: function () {
        this.editItem(this.view.getView(), Ext.create('RTTask.model.Locality'))
    },
    prepareForEdit: function (btn) {
        this.editItem(this.view.getView(), btn.up().$widgetRecord)
    },
    editItem: (view, record) => {
        console.log('record', record)
        Ext.create('Ext.window.Window', {
            title: `Мастер настройки для: ${record.data.agregatetInfo}`,
            resizable: false,
            autoShow: true,
            modal: true,
            layout: 'fit',
            items: [{
                xtype: record.entityName.toLowerCase()+'detail',
                params: {
                    record: record,
                    store: view.getStore()
                }
            }]
        });
    },
    deleteRecord: btn => {
        let curRecord = btn.up().$widgetRecord;
        let curStore = curRecord.store;
        curStore.remove(curRecord);
    }
});
