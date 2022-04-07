const server = require('./src/app.js');
const db = require('./src/db.js');
const axios = require('axios');
const {User, Post} = require('./src/db').models;

db.sync({ force:true }).then(async () => {

    const createUser = await User.create({
        firstname: "user01",
        lastname: "user01",
        email: "user01@gmail.com",
        password: "12345678",
        phone: "11222333",
        contributions: "0",
        verifieldUser: true,
        sessionType: 'email'
    })

    const dog = await Post.create({
        name: "Raulito",
        race: "Labrador",
        age: "7",
        size: "Grande",
        status: "adopcion",
        observations: "Le gusta comer mucho",
        images: "../back/src/asset/Labrador.jpeg"
    })

    const dogUno = await Post.create({
        name: "Pepe",
        race: "Beagle",
        age: "3",
        size: "chico",
        status: "transito",
        observations: "Muy energetico, buscamos que tenga espacio para jugar",
        images: "../back/src/asset/beagle.jpg"
    })

    const dogDos = await Post.create({
        name: "Jorge",
        race: "bulldog",
        age: "6",
        size: "chico",
        status: "adopcion",
        observations: "Come mucho",
        images: "../back/src/asset/bulldog.jpg"
    })

    const dogTres = await Post.create({
        name: "Tomi",
        race: "Caniche",
        age: "3",
        size: "chico",
        status: "Adopcion",
        observations: "Muy mimoso y ladra mucho",
        images: "../back/src/asset/Caniche.jpeg"
    })

    const dogCuatro = await Post.create({
        name: "Luca",
        race: "Golden Retriver",
        age: "5",
        size: "Grande",
        status: "Transito",
        observations: "Necesita mucho espacio ya que es muy energetico",
        images: "../back/src/asset/Golden.jpeg"
    })

    const dogCinco = await Post.create({
        name: "Roberto",
        race: "Mastin Napolitano",
        age: "4 aprox",
        size: "Mediano a grande",
        status: "adopcion",
        observations: "Es muy bruto",
        images: "../back/src/asset/mastin-nap.jpg"
    })

    const dogSeis = await Post.create({
        name: "Juanjo",
        race: "callejero",
        age: "2 aprox",
        size: "mediano",
        status: "adopcion",
        observations: "Necesita medicamentos",
        images: "../back/src/asset/perro-blanco-con manchitas.jpg"
    })

    const dogSiete = await Post.create({
        name: "Lauchi",
        race: "callejero",
        age: "3 años",
        size: "mediano",
        status: "transito",
        observations: "Esta enfermo, y necesita atencion",
        images: "../back/src/asset/perro-callejero-blanco.jpg"
    })

    const dogOcho = await Post.create({
        name: "Negro",
        race: "callejero",
        age: "7",
        size: "mediano",
        status: "adopcion",
        observations: "Le gusta dormir mucho",
        images: "../back/src/asset/Perro-callejero-negro.png"
    })

    const dogNueve = await Post.create({
        name: "Barba",
        race: "callejero",
        age: "2",
        size: "chico",
        status: "adopcion",
        observations: "Ninguna",
        images: "../back/src/asset/perro-con-manchas-marrones.jpg"
    })


    server.listen(3001, () => {
        console.log('is listening at 3001');
    })
})