'use strict';

const conn = require('./lib/connectMongoose');
const Anuncios = require('./models/Anuncios');

conn.once('open', async () => {
    try {
  
      await initAgentes();
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
            price: 23015,
        },

        {
            name: "Car",
            sale: false,
            price: 5000,
        },
    ]);
}

