import axios from 'axios';

const API_URL = 'http://localhost:1337/api'; 

export const fetchTeamMembers = async () => {
  const response = await axios.get(`${API_URL}/articles`);
  return response.data;
};

export const fetchTeamMemberById = async (id) => {
  const response = await axios.get(`${API_URL}/articles/${id}`);
  return response.data;
};


export const fetchDiensten = async () => {
  const response = await axios.get(`${API_URL}/dienstens?populate=*`);
  console.log(response.data); 
  return response.data;
};


export const fetchDienstBySlug = async (slug) => {
  const response = await axios.get(`${API_URL}/dienstens?filters[slug][$eq]=${slug}`);
  console.log(response.data); 
  return response.data;
  
};

  export const fetchFaq = async () => {
    const response = await axios.get(`${API_URL}/faqs`);
    return response.data;
  };

  export const fetchExpert = async () => {
    const response = await axios.get(`${API_URL}/experts?populate=*`);
    return response.data;
  };

  export const fetchExpertOfferte = async () => {
    const response = await axios.get(`${API_URL}/expert-offertes?populate=*`);
    return response.data;
  };

  export const fetchWaarden = async () => {
    const response = await axios.get(`${API_URL}/waardens?populate=*`);
    return response.data;
  };


  export const fetchInstructie = async () => {
    const response = await axios.get(`${API_URL}/instructies?populate=*`); 
    return response.data;
  };

  export const fetchOverons = async () => {
    const response = await axios.get(`${API_URL}/over-ons?populate=*`);
    return response.data.data;  
};


  export const fetchContactInfo = async () => {
    const response = await axios.get(`${API_URL}/contactinfos`); 
    return response.data;
  };

  export const submitContactForm = async (formData) => {
    try {
      const response = await axios.post(`${API_URL}/contact-formuliers`, {
        data: formData
      });
      return response.data;
    } catch (error) {
      console.error('Fout bij het verzenden van het contactformulier:', error);
      throw error;
    }
  };

  export const sendOfferteAanvraag = async (formData) => {
    try {
      const response = await axios.post(`${API_URL}/offerteaanvraags`, {
        data: formData, 
      });
  
      return response.data; 
    } catch (error) {
      console.error("Error sending offerte aanvraag:", error.response?.data || error.message);
      throw error;
    }
  };

  export const sendSamenwerkingAanvraag = async (formData) => {
    try {
      const response = await axios.post(`${API_URL}/samenwerkings`, {
        data: formData,
      });
      return response.data;
    } catch (error) {
      console.error("Error sending samenwerking aanvraag:", error.response?.data || error.message);
      throw error;
    }
  };

  




