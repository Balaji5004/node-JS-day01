const express = require ("express");
const fs = require ("fs")
const path = require ("path")
const dirName= path.join(__dirname,"timeStamps")

//initialize express server framework
const app = express();

app.get("/",(req,res) =>{
    res.send("hey this is my web server❤️")
})

app.get ("/date-time", (req, res)=>{
    let date = new Date();
    let currentTimeStamp = date. toUTCString(). slice(0, -3).split("").join(" ")
    let content = `The last Upadted Timestamp: ${currentTimeStamp}`
    console.log(dirName)
    fs.writeFile(`${dirName}/date-time.txt`, content, (err)=>{
        if(err){
            console.log(err)
            res.send("error in writing the file")
            return
        }
        res.sendFile(path.join(dirName,"date-time.txt"))
    })
})

//listen to server
app.listen(9000, ()=>console.log(`Server started in localhost:9000`));