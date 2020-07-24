import transport from '../transport';

export default {
    // Gets all events
    getEvents: function () {
        return transport.get('/api/event');
    },
    // Saves a event to the database
    saveEvent: function (event) {
        return transport.post('/api/event', event);
    },
    // Retrieve events when searching by title
    getEventsByTitle: function (title) {
        return transport.get(`/api/event/search?title=${title}`)
    },
    // Retrieve event by event id
    getEventByID: function (eventID) {
        return transport.get(`/api/event/${eventID}`)
    },
    // Edit event details 
    updateEvent: function (event) {
        return transport.put(`/api/event/${event._id}`, event)
    },
    // Delete an event 
    deleteEvent: function (eventID) {
        return transport.delete(`/api/event/${eventID}`)
    },
    // Retrieve events created by a user (e.g. MyEvents)
    getEventsByUserID: function (userID) {
        return transport.get(`/api/event/user-id?userID=${userID}`)
    }
};
