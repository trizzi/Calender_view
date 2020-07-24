import transport from '../transport';

export default {
    // Gets all users
    getUsers: function () {
        return transport.get('/api/user');
    },
    // Saves a user to the database
    saveUser: function (user) {
        return transport.post('/api/user', user);
    },
    // Search for a user by title
    getUsersByTitle: function (title) {
        return transport.get(`/api/user/search?title=${title}`)
    },
    // Retrieve user by user id
    getUserByID: function (userID) {
        return transport.get(`/api/user/${userID}`)
    },
    // Edit event details 
    updateUser: function (user) {
        return transport.put(`/api/user/${user._id}`, user)
    },
    // Retrieve password reset link
    forgotPassword: function (email) {
        return transport.get(`/api/user/forgot?email=${email}`)
    },
    // Retrieve a user by email
    getUserByEmail: function (email) {
        return transport.get(`/api/user?email=${email}`)
    },
    // Resend email verification link 
    resendVerificationEmail: function (email) {
        return transport.get(`/api/user/resend?email=${email}`)
    },
    // Assign role 
    assignRoleToUser: function (userID, roleID) {
        return transport.put(`/api/user/assign-role?userID=${userID}&roleID=${roleID}`)
    },
    // Deny role 
    denyUserRole: function (userID, roleID) {
        return transport.put(`/api/user/deny-role?userID=${userID}&roleID=${roleID}`)
    },
    // Delete user 
    deleteUser: function (userID) {
        return transport.delete(`/api/user/${userID}`)
    },
};
