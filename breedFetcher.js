const req = require('request');
const fs = require('fs');
const breed = process.argv[2];

const breedFetcher = function(breedName) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  req(url, (err, response, body) => {
    if (err) {
      console.log(`That ain't it son!`, err);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`Breed type not found`);
      return;
    }
    // console.log(typeof body);
    
    // console.log(data)
    console.log(data[0].description);
    // console.log(typeof data);
  });
};

breedFetcher(breed);

