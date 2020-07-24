import transport from '../transport';

export default {
    // Gets all roles
    getRoles: function () {
        return transport.get('/api/role');
    },
    // Saves a role to the database
    saveRole: function (project) {
        return transport.post('/api/role', project);
    },
    // Retrieve roles when searching by name
    getRolesByName: function (name) {
        return transport.get(`/api/role/search?name=${name}`)
    },
    // Retrieve role by role id
    getRoleByID: function (roleID) {
        return transport.get(`/api/role/${roleID}`)
    },
    // Update role details 
    updateRole: function (role) {
        return transport.put(`/api/role/${role._id}`, role)
    },
    // Delete role
    deleteRole: function (roleID) {
        return transport.delete(`/api/role/${roleID}`)
    }
};
