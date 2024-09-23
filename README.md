# Aplicación de Clima en Consola 🌦️

Esta es una aplicación de consola construida con Node.js que permite buscar ciudades y obtener información del clima actual, utilizando las APIs externas de **Mapbox** y **OpenWeather**. 

## Características 🚀

- 🔍 Búsqueda de ciudades a través de la API de **Mapbox**.
- ☁️ Obtención del clima actual en la ciudad seleccionada mediante la API de **OpenWeather**.
- 📊 Información adicional sobre las condiciones climáticas, como temperatura, humedad y condiciones generales.

## Requisitos 📋

Antes de ejecutar el proyecto, asegúrate de tener instalados los siguientes componentes:

- **Node.js** (versión 14 o superior)
- **npm** o **yarn** para la gestión de paquetes.

Además, necesitas obtener las siguientes **API Keys**:

- Una **API Key de Mapbox**: [https://account.mapbox.com](https://account.mapbox.com)
- Una **API Key de OpenWeather**: [https://home.openweathermap.org/api_keys](https://home.openweathermap.org/api_keys)

## Instalación 🔧

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-proyecto.git
```
## Uso 📝

1. Inicia la aplicación con el siguiente comando:

   ```bash
   node app.js

2. La consola te permitirá buscar ciudades por nombre. Escribe el nombre de una ciudad, y la aplicación te devolverá una lista de coincidencias.

3. Selecciona la ciudad de la lista para obtener los detalles del clima, que incluyen:

  - 🌡️ Temperatura
  - 💧 Humedad
  - 🌤️ Condiciones generales (soleado, nublado, lluvia, etc.)
  
## APIs Externas 🌐
- Mapbox - Utilizado para la búsqueda de ciudades mediante coordenadas geográficas.
- OpenWeather - Utilizado para obtener datos meteorológicos de las ciudades seleccionadas.