import transport from '../transport';

export default {
    // Gets all eventMedia
    getEventMedia: function () {
        return transport.get('/api/event-media');
    },
    // Saves eventMedia to the database
    saveEventMedia: function (data) {
        return transport.post('/api/event-media', data);
    },
    // Retrieve event media by event media id
    getEventMediaByID: function (eventMediaID) {
        return transport.get(`/api/event-media/${eventMediaID}`)
    },
    // Update event media details 
    updateEventMedia: function (eventMedia) {
        return transport.put(`/api/event-media/${eventMedia._id}`, eventMedia)
    },
    // Delete event media
    deleteEventMedia: function (eventMediaID) {
        return transport.delete(`/api/event-media/${eventMediaID}`)
    }
};
