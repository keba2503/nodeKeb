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
        tags: ["lifestyle", "mobile", "electronic"],
        imagen: "mac.jpg"
      },

      {
        name: "Car",
        sale: false,
        price: 5000,
        tags: ["lifestyle", "motor"],
        imagen: "car.jpg"
      },

      {
        name: "Ipad",
        sale: false,
        price: 2500,
        tags: ["lifestyle", "mobile", "electronic"],
        imagen: "ipad.jpg"
      },

      {
        name: "Echo Dot (3.ª generación)",
        sale: true,
        price: 35,
        tags: ["lifestyle", "mobile", "electronic"],
        imagen: "echo.jpg"
      },
      {
        name: "Smarwathc",
        sale: true,
        price: 300,
        tags: ["lifestyle", "mobile", "electronic"],
        imagen: "apple.jpg"
      },
      {
        name: "apple watch 3",
        sale: true,
        price: 200,
        tags: ["lifestyle", "mobile", "electronic"],
        imagen: "apple.jpg"
      },
      {
        name: "apple watch 5",
        sale: true,
        price: 35,
        tags: ["lifestyle", "mobile", "electronic"],
        imagen: "apple.jpg"
      },
      {
        name: "Alexa",
        sale: true,
        price: 30,
        tags: ["lifestyle", "mobile", "electronic"],
        imagen: "alexa.jpg"
      },
      {
        name: "Bicicleta",
        sale: true,
        price: 300,
        tags: ["lifestyle", "mobile", "electronic"],
        imagen: "bici.jpg"
      },
      {
        name: "Iphone",
        sale: true,
        price: 1000,
        tags: [ "lifestyle", "mobile", "electronic"],
        imagen: "iphone.jpg"
    },

    ]);
}

