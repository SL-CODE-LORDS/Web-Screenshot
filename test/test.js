var fs = require('fs')
var {WebScreenShot,WebPdf,valid_devices} = require('../index')
async function test() {

var data = await WebScreenShot('https://ravindumanoj.ml','desktop',false)
fs.writeFileSync('ravindumanoj-ml.png',data)

var data = await WebPdf('https://ravindumanoj.ml')
fs.writeFileSync('ravindumanoj-ml.pdf',data)

}
test()