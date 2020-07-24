import transport from '../transport';

export default {
    // Gets all partners
    getPartners: function () {
        return transport.get('/api/partner');
    },
    // Saves a partner to the database
    savePartner: function (partner) {
        return transport.post('/api/partner', partner);
    },
    // Retrieve partners when searching by name
    getPartnersByName: function (name) {
        return transport.get(`/api/partner/search?name=${name}`)
    },
    // Retrieve partner by partner id
    getPartnerByID: function (partnerID) {
        return transport.get(`/api/partner/${partnerID}`)
    },
    // Update partner details 
    updatePartner: function (partner) {
        return transport.put(`/api/partner/${partner._id}`, partner)
    },
    // Delete partner
    deletePartner: function (partnerID) {
        return transport.delete(`/api/partner/${partnerID}`)
    },
};
