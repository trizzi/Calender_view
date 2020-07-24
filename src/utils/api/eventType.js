import transport from '../transport';

export default {
    // Gets all event types
    getEventTypes: function () {
        return transport.get('/api/event-type');
    },
    // Saves a event type to the database
    saveEventType: function (type) {
        return transport.post('/api/event-type', type);
    },
    // Retrieve event types when searching by name
    getEventTypesByName: function (name) {
        return transport.get(`/api/event-type/search?name=${name}`)
    },
    // Retrieve event type by event type id
    getEventTypeByID: function (eventTypeID) {
        return transport.get(`/api/event-type/${eventTypeID}`)
    },
    // Update event type details 
    updateEventType: function (eventType) {
        return transport.put(`/api/event-type/${eventType._id}`, eventType)
    },
    // Delete event type
    deleteEventType: function (eventTypeID) {
        return transport.delete(`/api/event-type/${eventTypeID}`)
    }
};
