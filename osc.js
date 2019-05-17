const body = document.getElementsByTagName('body')[0]

// I should learn how to memoize this function
function sinFuncFac() {
  let sinArr = [];
  for (let i = 0.0; i < 1; i += 0.005) {
    sinArr.push((Math.sin(i*2*Math.PI)+1)/2);
  }
  return sinArr;
}
const sine = sinFuncFac();

const harmonicOsc = x => (Math.sin(x*2*Math.PI)+1)

let count = {
  i: 0,
  update: function() {
    this.i = this.i >= 3600000 ? 0 : this.i + 1;
  // if(this.i >= 360) {
  //   this.i = 0;
  // }
  // this.i++;
  }
};

function formatColorValue(value, offset=0) {
  return Math.ceil(value + offset % 255);
}

function updateBackgroundColor(mod) {

  body.style[0] = `background-image: 
    linear-gradient(to right, 
rgb(
${formatColorValue(188, mod)}, 
${formatColorValue(130, mod)}, 
${formatColorValue(228, mod)}
),
rgb(
${formatColorValue(60, mod )}, 
${formatColorValue(151, mod)}, 
${formatColorValue(193, mod)}
)
    )`.replace(/(\r\n|\n|\r)/gm,"");
    console.log(body.style)
}

function update() {

    // console.log(sine[count.i%sine.length])
    updateBackgroundColor(sine[count.i%sine.length]);
    count.update();
    requestAnimationFrame(update);
}

document.addEventListener('DOMContentLoaded', function(e) {
    requestAnimationFrame(update);
})