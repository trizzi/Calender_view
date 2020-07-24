import transport from '../transport';

export default {
    // Gets all organisers
    getOrganisers: function () {
        return transport.get('/api/organiser');
    },
    // Saves an organiser to the database
    saveOrganiser: function (organiser) {
        return transport.post('/api/organiser', organiser);
    },
    // Retrieve organisers when searching by name
    getOrganisersByName: function (organiserName) {
        return transport.get(`/api/organiser/search?name=${organiserName}`)
    },
    // Retrive organiser by organiser id
    getOrganiserByID: function (organiserID) {
        return transport.get(`/api/organiser/${organiserID}`)
    },
    // Edit organiser
    updateOrganiser: function (organiser) {
        return transport.put(`/api/organiser/${organiser._id}`, organiser)
    },
    // Delete an organiser 
    deleteOrganiser: function (organiserID) {
        return transport.delete(`/api/organiser/${organiserID}`)
    }
};
