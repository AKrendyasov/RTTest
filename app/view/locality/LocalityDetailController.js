Ext.define('RTTask.view.locality.LocalityDetailController', {
    extend: 'RTTask.view.main.MainController',
    alias: 'controller.locality',

    onFormSave: btn => {
        let form = btn.up('form')
        let params = form.params;
        let curStore = params.store;
        let curRecord = params.record;
        form.updateRecord();
        if (!curStore.contains(curRecord)) {
            curStore.add(curRecord)
        }
        btn.up('window').close()

    },
    onFormBoxReady: view => {
        view.loadRecord(view.params.record)
    },
    onFormRefresh: function (btn) {
        this.onFormBoxReady(btn.up('form'));
    }
});
