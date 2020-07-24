import transport from '../transport';

export default {
    // Gets all research groups
    getResearchGroups: function () {
        return transport.get('/api/research-group');
    },
    // Saves a research group to the database
    saveResearchGroup: function (researchGroup) {
        return transport.post('/api/research-group', researchGroup);
    },
    // Retrieve research groups when searching by name
    getResearchGroupsByName: function (name) {
        return transport.get(`/api/research-group/search?name=${name}`)
    },
    // Retrieve research group by research group id
    getResearchGroupByID: function (researchGroupID) {
        return transport.get(`/api/research-group/${researchGroupID}`)
    },
    // Update research group details 
    updateResearchGroup: function (researchGroup) {
        return transport.put(`/api/research-group/${researchGroup._id}`, researchGroup)
    },
    // Delete research group
    deleteResearchGroup: function (researchGroupID) {
        return transport.delete(`/api/research-group/${researchGroupID}`)
    }
};
