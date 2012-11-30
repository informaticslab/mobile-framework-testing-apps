/*
 * File: app/view/EvaluateFile.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('IrdaEval.view.EvaluateFile', {
    extend: 'Ext.Container',

    config: {
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'container',
                flex: 1,
                items: [
                    {
                        xtype: 'button',
                        centered: true,
                        text: 'Write File'
                    }
                ]
            },
            {
                xtype: 'container',
                flex: 1,
                items: [
                    {
                        xtype: 'button',
                        centered: true,
                        text: 'Read File'
                    }
                ]
            },
            {
                xtype: 'container',
                html: '',
                flex: 4
            }
        ]
    }

});