const { inquireMenu, pouse, leerInput, placesList } = require("./helpers/inquirer");
const Busqueda = require("./models/busquedas");



const main = async() =>{
  
  const busqueda = new Busqueda()
  let opt 

  
  do {
    opt = await inquireMenu()
    
    switch (opt) {
      case 1:
        console.clear()
        //mostrar mensaje 
        const readCity = await leerInput('Ciudad: ')
        //mostrar los luares
        const places = await busqueda.ciudad(readCity)
        //seleccionar lugar
        const selection = await placesList(places)
        const placeSelected = places.find(l => l.id === selection )
        
        if (selection ==='0' ) continue;
        //guardar en historia 
        busqueda.addHistory(placeSelected.name)
        //clima 
        const weather = await busqueda.wheatherPlace(placeSelected.lat, placeSelected.lng)

        //mostrar resultados 
        console.log('\n INFORMACION DE LA CIUDAD \n')
        console.log('ciudad: ', placeSelected.name)
        console.log('Lat:  ', placeSelected.lat)
        console.log('Lng: ', placeSelected.lng)
        console.log('Temperatura: ', weather.temp)
        console.log('tipo de clima: ',weather.desc.green)
        console.log('Temperatura minima: ', weather.min)
        console.log('temperatura maxima ', weather.max)
        break;
      case 2:
        busqueda.historialCapitalizado.forEach((zone, i) =>{
          const idx = `${i +1 }.`.green
          console.log(`${idx} ${zone}`)
        })
        break
      default:
        break;
    }


    if ( opt ){
      await pouse()
    }

  } while (opt !== 0 );


}

main()