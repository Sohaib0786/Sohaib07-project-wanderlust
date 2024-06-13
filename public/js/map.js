mapboxgl.accessToken = mapToken;

const map=new mapboxgl.Map({
        container: "map", // container ID
            //choose from mapbox's core styles, or make your own style with mapbox studio
            style:"mapbox://styles/mapbox/streets-v12",//style URL
            center:listing.geometry.coordinates, // starting position [lng, lat]
            zoom: 8,// starting zoom
});

      //Create a default marker and add it to the map
      const marker=new mapboxgl.Marker({color:"red"})
      .setLngLat(listing.geometry.coordinates)   //listing.geometry.coordinates
      .setPopup(
        new mapboxgl.Popup({offset:25}) .setHTML(`<h4>${listing.title}</h4><p>Exact Location provided after booking</p>`))

      .addTo(map);

/*
      multiple markers can be created 


      const marker2=new mapboxgl.Marker({color:"red"})
      .setLngLat(listing.geometry.coordinates)   //listing.geometry.coordinates
      .setPopup(
        new mapboxgl.Popup({offset:25}) .setHTML(`<h4>${listing.title}</h4><p>Exact Location provided after booking</p>`))

      .addTo(map);


      */