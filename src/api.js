const axios = require('axios');

export const fetchPlanets = () =>
  axios.get('https://space-facts.herokuapp.com/api/planets').then(({ data: { planets } }) => planets);

export const fetchSinglePlanet = planetID =>
  axios.get(`https://space-facts.herokuapp.com/api/planets/${planetID}`).then(({ data: { planet } }) => planet);

export const addNewPlanet = ({ name }) => {
  const newPlanet = { name, au_from_sun: 7.5, type: 'rock' };
  return axios.post(`https://space-facts.herokuapp.com/api/planets`, newPlanet).then(({ data: { planet } }) => planet);
};
