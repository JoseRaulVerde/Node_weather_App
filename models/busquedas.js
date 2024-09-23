require('dotenv').config()
const fs = require('fs')
const axios = require('axios')

class Busqueda {

  historial = []
  dbPath = './db/database.json'

  constructor(){
    //Todo: leerDb si existe 
    this.leerDB()
  }

  get historialCapitalizado(){
    return this.historial.map(place =>{
      let letter = place.split(' ')
      letter = letter.map( p=> p[0].toUpperCase() + p.substring(1))

      return letter.join(' ')
    })
  }

  async ciudad(lugar = ''){
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/search/geocode/v6/`
      });
  
      const resp = await instance.get('forward', {
        params: {
          q: lugar,
          proximity: 'ip',
          language: 'es',
          access_token: process.env.MAPBOX_KEY
        }
      });
      
      const features = resp.data.features;

      return features.map((feature) => ({
        id: feature.id,
        name: feature.properties.full_address, 
        lng: feature.geometry.coordinates[0], 
        lat: feature.geometry.coordinates[1], 

      }));
    } catch (error) {
      return [];
    }

  }

  async wheatherPlace (lat, lon){
    try {
      const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/`
      });

      const resp = await instance.get('weather', {
        params: {
          lat,
          lon,
          appid: process.env.OPENWHEATHER_KEY,
          units: 'metric',
          lang: 'es'
        }
      });
      return {
        desc: resp.data.weather[0].description,
        min: resp.data.main.temp_min,
        max: resp.data.main.temp_max,
        temp: resp.data.main.temp
      }
    } catch (error) {
      console.log('error')
    }
  }
  addHistory(lugar= ''){

    if (this.historial.includes(lugar.toLocaleLowerCase())){
      return
    }
    this.historial = this.historial.splice(0,5)
    this.historial.unshift(lugar.toLocaleLowerCase())

    this.guardarDB()
  }

  guardarDB(){
    const payload = {
      historial: this.historial
    }
    fs.writeFileSync(this.dbPath, JSON.stringify(payload))
  }
  leerDB(){
    if (!fs.existsSync(this.dbPath)) return
    const info = fs.readFileSync(this.dbPath,{encoding: 'utf-8'})
    const data = JSON.parse(info)
    this.historial = data.historial
  }
}

module.exports = Busqueda