Ext.define('RTTask.view.locality.Localities', {
    extend: 'Ext.grid.Panel',
    xtype: 'localitieslist',

    requires: [
        'RTTask.view.locality.LocalitiesController',
        'RTTask.view.locality.LocalityDetail',
        'RTTask.view.locality.LocalityDetailController'
    ],
    plugins: 'gridfilters',
    controller: 'localities',
    store: 'localities',
    columns: [
        {text: 'ID', dataIndex: 'id', flex: 6, filter: 'string', renderer: 'addTitleAttr'},
        {text: 'First Name', dataIndex: 'firstName', flex: 4, filter: 'string', renderer: 'addTitleAttr'},
        {text: 'Last Name', dataIndex: 'lastName', flex: 4, filter: 'string', renderer: 'addTitleAttr'},
        {text: 'Age', dataIndex: 'age', flex: 2, filter: 'number'},
        {text: 'E-Mail', dataIndex: 'email', flex: 6, filter: 'string', renderer: 'addTitleAttr'},
        {text: 'Agregator', dataIndex: 'agregatetInfo', flex: 6, filter: 'string', renderer: 'addTitleAttr'},
        {text: 'Avatar', dataIndex: 'avatar', flex: 6, filter: 'string', renderer: 'addAvatar'},
        {
            xtype: 'widgetcolumn',
            text: 'Widget Column',
            dataIndex: 'widget',
            flex: 4,
            widget: {
                xtype: 'container',
                layout: 'hbox',
                defaults: {
                    margin: 5
                },
                items: [
                    {xtype: 'button', text: 'Edit', handler: 'prepareForEdit'},
                    {xtype: 'button', text: 'Delete', handler: 'deleteRecord'}
                ]
            }
        }
    ],
    tbar: [
        {xtype: 'button', text: 'Создать', handler: 'createItem'}
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Показаны заказы {0} - {1} из {2}',
        emptyMsg: "Заказы отсутствуют",
        store: 'localities'
    },
    listeners: {
        itemdblclick: 'editItem'
    }
});
