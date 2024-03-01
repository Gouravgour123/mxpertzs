const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mxpertz")
.then(()=>console.log("connect")).catch(()=>console.log("not connect"))