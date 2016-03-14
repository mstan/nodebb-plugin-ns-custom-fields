var AppDispatcher = require('../dispatcher/AppDispatcher'),
    Constants     = require('../Constants');

module.exports = {
    changeFieldOrder: function (id, offset) {
        AppDispatcher.dispatch({
            actionType: Constants.EVENT_CHANGE_FIELD_ORDER,
            id        : id,
            offset    : offset
        });
    },

    createField: function (key, name, type, img, meta) {
        AppDispatcher.dispatch({
            actionType: Constants.EVENT_CREATE_FIELD,
            key       : key,
            name      : name,
            type      : type,
            img       : img,
            meta      : meta
        });
    },

    deleteField: function (id) {
        AppDispatcher.dispatch({
            actionType: Constants.EVENT_REMOVE_FIELD,
            id        : id
        });
    },

    getFields: function () {
        AppDispatcher.dispatch({
            actionType: Constants.EVENT_GET_ALL_FIELDS
        });
    },

    getSettings: function () {
        AppDispatcher.dispatch({
            actionType: Constants.EVENT_GET_SETTINGS
        });
    },

    saveSettings: function (settings) {
        AppDispatcher.dispatch({
            actionType: Constants.EVENT_SAVE_SETTINGS,
            settings  : settings
        });
    }
};