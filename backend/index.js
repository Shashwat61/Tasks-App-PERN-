const express=require('express')
const app=express()
const PORT=process.env.PORT || 8080
const cors=require('cors')
require('dotenv').config()
//Recursively crawl https://stackoverflow.com/questions using Node.js based crawler, harvest all questions on Stack Overflow and store them in a database of your choice. 
app.use(cors())

app.listen(PORT,()=>{
    console.log('port started on '+PORT)
})
app.get('/',(req,res)=>{
    res.send('Hi')
})
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use((err, req, res, next) => {
    if(err.statusCode) {
        res.status(err.statusCode).send(err.message);
    } else {
        console.log(err);
        res.status(500).send('Something unexpected happened');
    }
});

const boardRouter=require('./routes/boards')
app.use('/boards',boardRouter)
// What do you need to store?

// 1. Every unique URL (Stack Overflow question) you encountered.
// 2. The total reference count for every URL (How many time this URL was encountered).
// 3. Total # of upvotes and total # of answers for every question.
// 4. Dump the data in a CSV file when the user kills the script.

// Things you should keep in mind:

// 1. Maintain a **concurrency of 5 requests** at all times. Refrain from using **throttled-request** package to limit concurrency.
// 2. Your solution needs to be **asynchronous** in nature.
// 3. If you are using **request.js**, do not use its connection pool to throttle # of requests. 
// 4. You can use cheerio or similar library for HTML parsing.












// let count=0
// function call(){
//     count++
//     console.log(count)
//     if(count==10)
//     return;
//     call()
// }
// call()

//do something when app is closing
// setTimeout(()=>{process.exit(0)},10000)
// process.on('exit', (()=>console.log('exit')));

//catches ctrl+c event
process.on('SIGINT', ()=>console.log('ctrl+c'));

// if ((typeof process !== 'undefined') && 
// (process.release.name.search(/node|io.js/) !== -1)) {
//     console.log('this script is running in Node.js');
// } else {
//     console.log('this script is not running in Node.js');
// }





