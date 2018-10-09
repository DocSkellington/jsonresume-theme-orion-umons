var Handlebars = require('handlebars');

module.exports = {
    mapURL: function(location) {
        var googleMaps = 'https://www.google.com/maps?q=';
        var fields = [
            Handlebars.escapeExpression(location.address || ''),
            Handlebars.escapeExpression(location.postalCode || ''),
            Handlebars.escapeExpression(location.city || ''),
            Handlebars.escapeExpression(location.region || ''),
            Handlebars.escapeExpression(location.countryCode || '')
        ];
        return new Handlebars.SafeString(googleMaps + encodeURIComponent(fields.join(' ').replace(/\s+/g, ' ')));
    }
};
