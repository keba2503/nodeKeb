'use strict';

const conn = require('./lib/connectMongoose');
const Anuncios = require('./models/Anuncios');

conn.once('open', async () => {
    try {
  
      await initAnuncios();
      conn.close();
  
    } catch(err) {
      console.error('error:', err);
      process.exit(1);
    }
  });

async function initAnuncios() {
    await Anuncios.deleteMany();
    await Anuncios.insertMany([
        {
            name: "Macbook",
            sale: true,
            price: 8000,
            tags: [ "lifestyle", "mobile", "electronic"]
        },

        {
            name: "Car",
            sale: false,
            price: 5000,
            tags: [ "lifestyle", "motor"]
        },
        
        {
          name: "Ipad",
          sale: false,
          price: 2500,
          tags: [ "lifestyle", "mobile", "electronic"]
      },
    ]);
}

