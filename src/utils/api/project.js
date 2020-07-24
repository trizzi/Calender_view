import transport from '../transport';

export default {
    // Gets all projects
    getProjects: function () {
        return transport.get('/api/project');
    },
    // Saves a project to the database
    saveProject: function (project) {
        return transport.post('/api/project', project);
    },
    // Retrieve projects when searching by name
    getProjectsByName: function (name) {
        return transport.get(`/api/project/search?name=${name}`)
    },
    // Retrieve project by project id
    getProjectByID: function (projectID) {
        return transport.get(`/api/project/${projectID}`)
    },
    // Update project details 
    updateProject: function (project) {
        return transport.put(`/api/project/${project._id}`, project)
    },
    // Delete project
    deleteProject: function (projectID) {
        return transport.delete(`/api/project/${projectID}`)
    },
};
