import transport from '../transport';

export default {
    // Gets all locations
    getLocations: function () {
        return transport.get('/api/location');
    },
    // Saves a location to the database
    saveLocation: function (project) {
        return transport.post('/api/location', project);
    },
    // Retrieve locations when searching by venue
    getLocationsByVenue: function (venue) {
        return transport.get(`/api/location/search?venue=${venue}`)
    },
    // Retrieve locations when searching by post code
    getLocationsByPostCode: function (postCode) {
        return transport.get(`/api/location/search?postcode=${postCode}`)
    },
    // Retrieve location by location id
    getLocationByID: function (locationID) {
        return transport.get(`/api/location/${locationID}`)
    },
    // Update location details 
    updateLocation: function (location) {
        return transport.put(`/api/location/${location._id}`, location)
    },
    // Delete location
    deleteLocation: function (locationID) {
        return transport.delete(`/api/location/${locationID}`)
    }
};
