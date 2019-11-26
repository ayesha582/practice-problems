const str = [
  "CARS", "REPAID", "DUES", "NOSE", "SIGNED", "LANE",
  "PAIRED", "ARCS", "GRAB", "USED", "ONES", "BRAG",
  "SUED", "LEAN", "SCAR", "DESIGN"
];


const obj = {};

str.forEach(elem => {
  const arr = elem.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
  if (!obj[arr]) obj[arr] = [elem];
  else obj[arr].push(elem);
});


console.log(obj);
