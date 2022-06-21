const request = require("request");

const fetchBreedDescription = (breed, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
    (error, response, body) => {
      if (error) {
        callback(error, null);
      } else {
        const data = JSON.parse(body);
        if (data.length === 0) {
          callback("breed not found");
        } else if (response.statusCode !== 200) {
          callback(`Server responed with ${response.statusCode}`);
        } else {
          callback(null, data[0].description);
        }
      }
    }
  );
};

module.exports = { fetchBreedDescription };
