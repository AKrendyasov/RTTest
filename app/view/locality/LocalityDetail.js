Ext.define('RTTask.view.locality.LocalityDetail', {
    extend: 'Ext.form.Panel',
    alias: 'widget.localitydetail',
    xtype: 'localitydetail',
    controller: 'locality',
    clientValidation: true,
    padding: 0,
    layout: 'fit',
    width: '100%',
    height: '100%',
    items: [
        {
            xtype: 'fieldset',
            width: '100%',
            height: '100%',
            fieldDefaults: {
                msgTarget: 'side',
                labelWidth: 350,
                labelStyle: 'font-weight:bold',
                width: 650,
            },
            items: [
                {
                    xtype: 'numberfield',
                    name: 'age',
                    fieldLabel: 'Возраст',
                    allowBlank: false,
                    minValue: 1

                },
                {
                    xtype: 'textfield',
                    name: 'firstName',
                    fieldLabel: 'First Name',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    name: 'lastName',
                    fieldLabel: 'Last Name',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    name: 'email',
                    fieldLabel: 'Электронная почта',
                    vtype: 'email',
                }
            ]
        }
    ],
    buttons: [
        {
            text: 'Сохранить',
            handler: 'onFormSave',
            formBind: true
        },
        {
            text: 'Обновить',
            handler: 'onFormRefresh'
        }
    ],
    listeners: {
        boxready: 'onFormBoxReady'
    }
});
