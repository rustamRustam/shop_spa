var myMap;
var myMapEvents = [];

function functionMapClick(e) {
  const coords = e.get('coords');
  ymaps.geocode(coords)
    .then((_res)=>{
      const address = _res.geoObjects.get(0).properties.getAll().text;
      myMapEvents.forEach((_event)=>{
        _event(coords, address, _res);
      });
    })
    .catch((_res)=>{
      myMapEvents.forEach((_event)=>{
        _event(coords, null, _res);
      });
    })
    // .finally(()=>{
    //   myMapEvents.forEach((_event)=>{
    //     _event(coords, address, res);
    //   });
    // });
}

var divMap =  document.createElement("div");

const script = document.createElement("script");
script.src = 'https://api-maps.yandex.ru/2.1.79/?lang=ru_RU&;apikey=<ваш API-ключ>';
script.charset = "utf-8";
script.async = true;
script.onload = function () {
  console.log('!!! script.onload');

  ymaps.ready(()=>{
    myMap = new ymaps.Map(divMap, {
        center: [54.31,48.39],
        zoom: 12
    });

    myMap.events.add('click',functionMapClick);

  });
};
document.head.appendChild(script);

export default divMap;

export const mapAddEventClick = (_event)=>{
  if (myMapEvents.indexOf(_event) < 0) {
    myMapEvents.push(_event);
  }
};

export const mapRemoveEventClick = (_event)=>{
  const index = myMapEvents.indexOf(_event)
  if( index >= 0) {
    myMapEvents.splice(index,1);
  }
};
