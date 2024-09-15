//Bot by 𝐉𝐅𝐋𝐄𝐗 𝐎𝐆//


require("./all/module")
global.owner = "255786535571" 
global.namaCreator = "𝐉𝐅𝐋𝐄𝐗 𝐎𝐆"
global.autoJoin = false 
global.antilink = false 
global.versisc = '6.𝟏' 
global.codeInvite = "https://chat.whatsapp.com/LjPBSY8dmlPGUq5i5EjhvB"
global.isLink = 'https://chat.whatsapp.com/LjPBSY8dmlPGUq5i5EjhvB'
global.sessionName = '{"noiseKey":{"private":{"type":"Buffer","data":"yDPSRaJHGYIfHqgEa0IRVcKfRf8g0bP4LfG8MMqMlHg="},"public":{"type":"Buffer","data":"UNTEzZcNx76iDYi7cQj6+tSGOyNXF4DQN83uvWM9VxE="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"ACfbQWj2mJYYeWGo/Ab08qRz9CqxSQch4ImcS82pQXw="},"public":{"type":"Buffer","data":"mzS6jq0oyALkeBxvp/tpRX55Jg71/Sam6eOc4ZUOmmI="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"0EEyVzsfWyvZsUyb+vx34hrZE7rgJbR2U/Hw7gmFk2Q="},"public":{"type":"Buffer","data":"K4q3JQsIUy3MlvkmjgdDykJhrH5Zg1T4rhzCBL5trFc="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"uJL+bcmSQUG5/QiYK5zyG+l1/EZUM1IA+/qrIGYCNHE="},"public":{"type":"Buffer","data":"1KRzBalB/Ej9/SEYG6B/fAeiCProTJm1lCf41yQp2wA="}},"signature":{"type":"Buffer","data":"/6DqQRSScvUyeKEB7bc5z9ejdn5bLAGkLuHcImhJoGgI7Y63BdFkuvDRIQskxymJYelPJNTwIXWd61Why9OzCg=="},"keyId":1},"registrationId":128,"advSecretKey":"jqr2fR6gfUcFpgBCtw3B4iD2yM6SvLiOG+p9Hj9gzjc=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"I88mAwBlSRqrmEIzQ1gFsA","phoneId":"935efe5a-85e7-4f1c-bd5d-d9a2d0947ac9","identityId":{"type":"Buffer","data":"e8oLXa9SAlhfvvV5j/UvCoK9MQY="},"registered":true,"backupToken":{"type":"Buffer","data":"jUWlLSNjRTFHumD5VyaBp9Ij7Gw="},"registration":{},"pairingCode":"Z8GV4VF9","me":{"id":"263773337800:13@s.whatsapp.net"},"account":{"details":"CJq6zpwDENP8s7UGGAIgACgA","accountSignatureKey":"51+ooYLYD1IjsmRv9WOMsBV5VUH4A8il2daKLGtEP3A=","accountSignature":"Mrb58FsnoQ8JopSBO5YVFV8Q3WPmnYHTzj9BdbRY0Ox3xk2sBFOENepswqm+BIXd4mgMiXb/pLgdtisBGK5pBA==","deviceSignature":"rCXqWBXTJ2HXwPwUQRbXpdv6biyxJQU6lPmSO7/w4wByh56gPjMX4v1QgoSaeWI/Ihk4mO7u2AVH9eLEtsCVAQ=="},"signalIdentities":[{"identifier":{"name":"263773337800:13@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BedfqKGC2A9SI7Jkb/VjjLAVeVVB+APIpdnWiixrRD9w"}}],"platform":"android","lastAccountSyncTimestamp":1722613359,"myAppStateKeyId":"AAAAAAbE"}'
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "𝐉𝐅𝐋𝐄𝐗 𝐎𝐆" 
global.author = "𝐆𝐇𝐎𝐒𝐓-IV" 
global.jumlah = "5" 
global.namabot = "𝐆𝐇𝐎𝐒𝐓-IV" 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
