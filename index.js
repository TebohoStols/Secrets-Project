//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
//Lines needed to locaate the path for any computer that might use the app
import {dirname} from "path";
import {fileURLToPath} from "url";

const app = express();
const port = 3000;
//Lines needed to locaate the path for any computer that might use the app
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended: true}));

const password = "ILoveProgramming";
 
function passwordCheck(req, res, next){
    console.log(req.body);
    var inpPassword = req.body["password"];
    if(password === inpPassword)
    {
        console.log("Correct Password!")
        res.sendFile(__dirname + "/public/secret.html")
        next();
    }
    else{
        console.log("Wrong Password!")
        res.sendFile(__dirname + "/public/index.html")
        next();
    }
}

app.use(passwordCheck);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
});

app.post("/check", (req, res) => {
    res.sendFile(__dirname + "/public/secret.html")
});

app.listen(port, () =>{
    console.log(`Server started in port: ${port}`);
});