var Handlebars = require('handlebars');

module.exports = {
    mapURL: function(location) {
        var openstreetmap = 'https://www.openstreetmap.org/search?query=';
        var fields = [
            Handlebars.escapeExpression(location.address || ''),
            Handlebars.escapeExpression(location.postalCode || ''),
            Handlebars.escapeExpression(location.city || ''),
            Handlebars.escapeExpression(location.region || ''),
            Handlebars.escapeExpression(location.countryCode || '')
        ];
        return new Handlebars.SafeString(openstreetmap + encodeURIComponent(fields.join(' ').replace(/\s+/g, ' ')));
    }
};
