const axios = require('axios');

exports.fetchPlanets = () =>
  axios
    .get('https://space-facts.herokuapp.com/api/planets')
    .then(({ data: { planets } }) => planets);

exports.fetchSinglePlanet = planetID =>
  axios
    .get(`https://space-facts.herokuapp.com/api/planets/${planetID}`)
    .then(({ data: { planet } }) => planet);
