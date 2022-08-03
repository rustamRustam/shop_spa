import React, { useRef, useEffect, useState } from 'react';
import './Address.scss';
import divMap, { mapAddEventClick, mapRemoveEventClick } from './YandexMap.js';


export default function Address(props) {
  const idMap = useRef(null);
  const coordsMap = useRef(null);

  const [values, setValues] = useState({
    address: '',
    coords: ''
  });

  const funcEvent = (_coords, _address, _res)=>{
      // console.log(_coords, _address, _res);
      setValues({
        address: _address,
        coords: _coords
      });
    };

  useEffect(()=>{
    if (idMap) {
      idMap.current.append(divMap);
    }

    mapAddEventClick(funcEvent);

    return ()=>{
      mapRemoveEventClick(funcEvent);
    }

  });

  return (
    <div className="componentAddress">
      <div id="map" className="componentMap" ref={idMap} />

      <div className="componentValueCoords">{values.address}</div>
      <div className="componentValueAddress">{values.coords}</div>

    </div>
  );
};
