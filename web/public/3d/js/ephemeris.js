// Data from NASA, eg.
// http://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html

(function() {
  var eph = {
    mercury: {
      full_name: 'Mercury',
      a: 0.38709893,
      e: 0.20563069,
      i: 7.00487,
      w: 77.45645,
      L: 252.25084,
      om: 48.33167
    },
    venus: {
      full_name: 'Venus',
      a:0.72333566,
      e:0.00677672,
      i:3.39467605,
      w:131.60246718,
      L:181.97909950,
      om:76.67984255
    },
    earth: {
      full_name: 'Earth',
      a:1.00000261,
      e:0.01671123,
      i:-0.00001531,
      w:102.93768193,
      L:100.46457166,
      om:-11.26064
      //om:0

    },
    mars:{
      full_name: 'Mars',
      a: 1.52366231,
      e: 0.09341233,
      i: 1.85061,
      w: 336.04084,
      L:355.45332,
      om:49.57854
    },
    jupiter: {
      full_name: 'Jupiter',
      a:5.20288700,
      e:0.04838624,
      i:1.30439695,
      w:14.72847983,
      L:34.39644051,
      om:100.47390909
    },
  };
  window.Ephemeris = eph;
})();