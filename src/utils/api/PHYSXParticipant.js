import transport from '../transport';

export default {
    // Gets all PHYSXParticipant
    getPHYSXParticipant: function () {
        return transport.get('/api/physx-participant');
    },
    // Saves a PHYSXParticipant to the database
    savePHYSXParticipant: function (participant) {
        return transport.post('/api/physx-participant', participant);
    },
    // Retrieve participants when searching by name
    getPHYSXParticipantsByName: function (name) {
        return transport.get(`/api/physx-participant/search?name=${name}`)
    },
    // Retrieve participant by participant id
    getPHYSXParticipantByID: function (participantID) {
        return transport.get(`/api/physx-participant/${participantID}`)
    },
    // Update participant details 
    updatePHYSXParticipant: function (participant) {
        return transport.put(`/api/physx-participant${participant._id}`, participant)
    },
    // Delete participant
    deletePHYSXParticipant: function (participantID) {
        return transport.delete(`/api/physx-participant/${participantID}`)
    }
}
