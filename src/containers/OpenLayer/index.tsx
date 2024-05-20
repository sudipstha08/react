/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { useState, useEffect, useRef } from 'react'
import { Feature, Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import 'ol/ol.css'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import Point from 'ol/geom/Point'
import { Projection, fromLonLat } from 'ol/proj'

var epsg4326 = new Projection({ code: 'EPSG:4326' })
var projectTo = new Projection({ code: 'EPSG:3857' })

export function OpenLayer() {
  const [map, setMap] = useState<any>(null)
  const mapElement = useRef<any>()
  const mapRef = useRef()
  mapRef.current = map

  const osmLayer = new TileLayer({
    preload: Infinity,
    source: new OSM(),
  })

  //A vector object for geographic features with a geometry and other attribute properties,
  // similar to the features in vector file formats like GeoJSON.
  // Features can be styled individually with setStyle; otherwise they use the style of their vector layer.
  const iconFeature = new Feature({
    geometry: new Point([10, 0]).transform(epsg4326, projectTo),
    name: 'Null Island2',
  })

  const iconFeature2 = new Feature({
    geometry: new Point([20, 0]).transform(epsg4326, projectTo),
    name: 'Null Island2',
  })

  const iconFeature3 = new Feature({
    geometry: new Point([20, 10]).transform(epsg4326, projectTo),
    name: 'Null Island2',
  })

  // Provides a source of features for vector layers.
  // Vector features provided by this source are suitable for editing
  const vectorSource = new VectorSource({
    features: [iconFeature, iconFeature2, iconFeature3],
  })

  // Vector data is rendered client-side, as vectors. This layer type provides most accurate
  // rendering even during animations. Points and labels stay upright on rotated views.
  // For very large amounts of vector data, performance may suffer during pan and zoom animations.
  const vectorLayer = new VectorLayer({
    source: vectorSource,
  })

  const initialMap = new Map({
    target: mapElement.current,
    layers: [osmLayer, vectorLayer],
    view: new View({
      center: fromLonLat([0, 0]),
      zoom: 3,
    }),
  })

  useEffect(() => {
    setMap(initialMap)

    return () => {
      if (map) {
        map.setTarget(null)
      }
    }
  }, [])

  // useEffect(() => {
  //   if (!map) return
  //   const content = document.getElementById('popup-content')
  //   const container = document.getElementById('popup')
  //   if (!content || !container) return

  //   map.on('click', evt => {
  //     const coordinate = evt.coordinate
  //     const hdms = toStringHDMS(toLonLat(coordinate))

  //     const overlay = new Overlay({
  //       element: container,
  //       autoPan: {
  //         animation: {
  //           duration: 250,
  //         },
  //       },
  //     })

  //     content.innerHTML = '<p>You clicked here:</p><code>' + hdms + '</code>'
  //     overlay.setPosition(coordinate)
  //   })
  // }, [map])

  return (
    <>
      <div
        style={{ height: '100vh', width: '100%' }}
        ref={mapElement}
        className="map-container"
      />
    </>
  )
}

// https://mxd.codes/articles/how-to-create-a-web-map-with-open-layers-and-react
