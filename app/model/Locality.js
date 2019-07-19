Ext.define('RTTask.model.Locality', {
    extend: 'Ext.data.Model',
    fields: [
        'guid'
        , 'age'
        , 'name'
        , {name: 'firstName', mapping: 'name.first', type: 'string'}
        , {name: 'lastName', mapping: 'name.last', type: 'string'}
        , {
            name: 'agregatetInfo', mapping: function (data) {
                return `${data.name.first[0]}.${data.name.last[0]}. - ${data.email}`
            },
            type: 'string',
        }
        , 'email'
    ],
    identifier: 'sequential',
    schema: {
        namespace: 'RTTask.model'
    },
    proxy: {
        type: 'ajax',
        url: '/resources/info/mates.json',
        reader: {
            type: 'json',
        }
    },
});
