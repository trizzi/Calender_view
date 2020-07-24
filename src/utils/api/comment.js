import transport from '../transport';

export default {
    // Gets all comments
    getComments: function () {
        return transport.get('/api/comment');
    },
    // Saves a project to the database
    saveComment: function (comment) {
        return transport.post('/api/comment', comment);
    },
    // Delete a comment
    deleteComment: function (commentID) {
        return transport.delete(`/api/comment/${commentID}`)
    },
    // Get comments by event ID
    // other routes here
};
