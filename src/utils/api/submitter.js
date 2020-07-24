import transport from '../transport';

export default {
    // Gets all sumbitters
    getSubmitter: function () {
        return transport.get('/api/submitter');
    },
    // Saves a submitter to the database
    saveSubmitter: function (submitter) {
        return transport.post('/api/submitter', submitter);
    },
    // Retrieve submitters when searching by name
    getSubmittersByName: function (name) {
        return transport.get(`/api/submitter/search?name=${name}`)
    },
    // Retrieve submitter by submitter id
    getSubmitterByID: function (submitterID) {
        return transport.get(`/api/submitter/${submitterID}`)
    },
    // Update submitter details 
    updateSubmitter: function (submitter) {
        return transport.put(`/api/submitter/${submitter._id}`, submitter)
    },
    // Delete submitter
    deleteSubmitter: function (submitterID) {
        return transport.delete(`/api/submitter/${submitterID}`)
    },
};
