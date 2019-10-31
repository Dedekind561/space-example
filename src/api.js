const axios = require('axios');

export const fetchPlanets = () =>
  axios.get('https://space-facts.herokuapp.com/api/planets').then(({ data: { planets } }) => planets);

export const fetchSinglePlanet = planet_id =>
  axios.get(`https://space-facts.herokuapp.com/api/planets/${planet_id}`).then(({ data: { planet } }) => planet);

export const addNewPlanet = ({ name, au_from_sun, type, img }) => {
  const newPlanet = { name, au_from_sun, type, img };
  return axios.post(`https://space-facts.herokuapp.com/api/planets`, newPlanet).then(({ data: { planet } }) => planet);
};
