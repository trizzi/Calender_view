import transport from '../transport';

export default {
    // Gets all countries
    getCountries: function () {
        return transport.get('/api/country');
    },
    // Saves a country to the database
    saveCountry: function (country) {
        return transport.post('/api/country', country);
    },
    // Retrieve countries when searching by name
    getCountriesByName: function (name) {
        return transport.get(`/api/country/search?name=${name}`)
    },
    // Retrieve country by country id
    getCountryByID: function (countryID) {
        return transport.get(`/api/country/${countryID}`)
    },
    // Update country details 
    updateCountry: function (country) {
        return transport.put(`/api/country/${country._id}`, country)
    },
    // Delete country
    deleteCountry: function (countryID) {
        return transport.delete(`/api/country/${countryID}`)
    }
};
