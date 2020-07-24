import transport from '../transport';

export default {
    // Gets all objective types
    getObjectiveTypes: function () {
        return transport.get('/api/objective-type');
    },
    // Saves an objective type to the database
    saveObjectiveType: function (type) {
        return transport.post('/api/objective-type', type);
    },
    // Retrieve ObjectiveTypes when searching by name
    getObjectiveTypesByName: function (name) {
        return transport.get(`/api/objective-type/search?name=${name}`)
    },
    // Retrieve ObjectiveType by objectiveType id
    getObjectiveTypeByID: function (objectiveTypeID) {
        return transport.get(`/api/objective-type/${objectiveTypeID}`)
    },
    // Update ObjectiveType details 
    updateObjectiveType: function (objectiveType) {
        return transport.put(`/api/objective-type/${objectiveType._id}`, objectiveType)
    },
    // Delete ObjectiveType
    deleteObjectiveType: function (objectiveTypeID) {
        return transport.delete(`/api/objective-type/${objectiveTypeID}`)
    }
};
