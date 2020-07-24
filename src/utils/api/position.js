import transport from '../transport';

export default {
    // Gets all positions
    getPositions: function () {
        return transport.get('/api/position');
    },
    // Saves a position to the database
    savePosition: function (position) {
        return transport.post('/api/position', position);
    },
    // Retrieve positions when searching by name
    getPositionsByName: function (name) {
        return transport.get(`/api/position/search?name=${name}`)
    },
    // Retrieve position by position id
    getPositionByID: function (positionID) {
        return transport.get(`/api/position/${positionID}`)
    },
    // Update position details 
    updatePosition: function (position) {
        return transport.put(`/api/position/${position._id}`, position)
    },
    // Delete position
    deletePosition: function (positionID) {
        return transport.delete(`/api/position/${positionID}`)
    },
};
