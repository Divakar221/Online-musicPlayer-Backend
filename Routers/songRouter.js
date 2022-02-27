var express= require("express");
var router= express.Router();

const songModule=require("../modules/songModules")


module.exports=router.post("/updateSong",songModule.updateSong)

module.exports=router.get('/getsong',songModule.getsong)

module.exports=router.put('/playlist',songModule.playList)





/* for Updating Songs   =>  /song/updateSong  */
/* Get List of songs => /song/getsong */