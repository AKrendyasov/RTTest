Ext.define('RTTask.store.Localities', {
    extend: 'Ext.data.Store',
    model: "RTTask.model.Locality",
    alias: 'store.localities',
    storeId: 'localities',
    autoSync: false,
    autoLoad: true,
    remoteFilter: false,
    remoteSort: false,
    sorters: {
        property: 'id',
        direction: 'ASC'
    }
});
