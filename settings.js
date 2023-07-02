const fs = require('fs')

global.creator = 'kaveesha' 
global.apikey = ["kaveesha", "darknero", "intel-queen" , "nima"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
