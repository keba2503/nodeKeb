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
        },

        {
            name: "Car",
            sale: false,
            price: 5000,
        },
        
        {
          name: "Ipad",
          sale: false,
          price: 2500,
      },
    ]);
}

