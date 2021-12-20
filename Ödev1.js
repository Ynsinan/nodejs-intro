const arguments = process.argv.slice(2);
const radius = arguments[0]*1
function daireninAlni(radius) {
    return Math.PI *  radius * radius;
  }
const alan= daireninAlni(radius)
  
console.log(`Yarıçapı ${radius} olan dairenin alanı: ${alan}`)