export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${JSON.stringify(import.meta.env.VITE_GEODB_API_KEY)}`,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/cities", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
