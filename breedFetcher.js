const request = require("request");

const breedName = process.argv[2];

const fetchBreed = (breed) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
    (error, response, body) => {
      const data = JSON.parse(body);
      if (error) {
        console.log(error);
      } else if (data.length === 0) {
        console.log("breed not found");
      } else if (response.statusCode !== 200) {
        console.log(`Server responed with ${response.statusCode}`);
      } else {
        console.log(data[0].description);
      }
    }
  );
};

fetchBreed(breedName);
