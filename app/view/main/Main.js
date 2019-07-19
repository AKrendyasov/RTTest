Ext.define('RTTask.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'RTTask.view.locality.Localities',
        'Ext.grid.filters.Filters'
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

    ui: 'navigation',
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'top'
        }
    },

    defaults: {
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    width: 200
                },
                tall: {
                    iconAlign: 'left',
                    textAlign: 'left'
                }
            }
        }
    },

    items: [{
        title: 'Персоналии',
        xtype: 'localitieslist'
    }]
});