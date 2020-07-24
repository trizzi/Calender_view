import transport from '../transport';

export default {
    // Gets all audience types
    getAudienceTypes: function () {
        return transport.get('/api/audience-type');
    },
    // Saves an audience type to the database
    saveAudienceType: function (type) {
        return transport.post('/api/audience-type', type);
    },
    // Retrieve audience types when searching by name
    getAudienceTypesByName: function (name) {
        return transport.get(`/api/audience-type/search?name=${name}`)
    },
    // Retrieve audience type by audience type id
    getAudienceTypeByID: function (audienceTypeID) {
        return transport.get(`/api/audience-type/${audienceTypeID}`)
    },
    // Update audience type details 
    updateAudienceType: function (audienceType) {
        return transport.put(`/api/audience-type/${audienceType._id}`, audienceType)
    },
    // Delete audience type
    deleteAudienceType: function (audienceTypeID) {
        return transport.delete(`/api/audience-type/${audienceTypeID}`)
    }
    // other routes here
};
