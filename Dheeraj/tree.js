// function
let fs = require("fs");
let path = require("path");
function treefn(src){
    if(src == undefined){
        console.log("PLEASE ENTER THE PATH");
        return;
    }
    else{
        let itexists = fs.existsSync(src);
        if(itexists){
                treeDone(src , "");
        }
        else{
            console.log("PLEASE ENTER VALID PATH");
            return;
        }       
    }
}
function treeDone(src , indent){
    // 1. CHECK  -> IS FILE OR FOLDER?
     let isFile = fs.lstatSync(src).isFile();
    if( isFile == true){
        let fileName = path.basename(src);
        console.log(indent + "├──" + fileName);
    }
    else{
        let dirName = path.basename(src)
        console.log(indent + "└──" + dirName);
        let entity = fs.readdirSync(src);
        for(let i = 0 ; i < entity.length ; i++){
            let entityPath = path.join(src , entity[i]);
            treeDone(entityPath , indent + "\t");
        }
    }
}

//code export
module.exports =  {
    fxn : treefn
}