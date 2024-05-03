
const fs=require('fs')
const http=require('http')













let html=fs.readFileSync('./templates/index.html','utf-8')

//Lecture 8. CREATE SERVER

//1.CREATE SERVER
const server=http.createServer((request,response)=>{
    console.log('A new request has been recieved');
    
    let path=request.url
  
    if (path==='/'||path.toLowerCase()==='/home'){
     response.writeHead(200,{
        "Content-Type":"text/html",
        "my-header":'Fazliddins header'
     })
      response.end(html.replace('{{%CONTENT%}}','You are in home page'))
    }else if (path.toLowerCase()==='/about') {
        response.writeHead(200,{
            "Content-Type":"text/html",
            "my-header":'Fazliddins header'
         })
        response.end(html.replace('{{%CONTENT%}}','You are in about page'))

    }else if(path.toLowerCase()==='/contact'){
        response.writeHead(200,{
            "Content-Type":"text/html",
            "my-header":'Fazliddins header'
         })
        response.end(html.replace('{{%CONTENT%}}','You are in contact page'))
    }else{
     response.writeHead(404,{
        "Content-Type":"text/html",
        "my-header":'Fazliddins header'
     })
        response.end(html.replace('{{%CONTENT%}}','PAGE NOT FOUND !'))
    }
})





//2.START SERVER

server.listen(8000,'127.0.0.1',()=>{
    console.log('Server has started');
})







//Lecture 7.  How to read and write file asynchronously

// fs.readFile('./files/input.text','utf-8',(error,data)=>{
//       console.log(error);
//       console.log(data);
//       fs.readFile(`./files/${data}`,'utf-8',(error2,data2)=>{
//         console.log(data2);
//         fs.readFile(`./files/append.text`,'utf-8',(error3,data3)=>{
//             console.log(data3);
//                 let content=`Data read from input.xt : ${data2}.\nDate created ${new Date()}`
//                 fs.writeFile('./files/output.txt',content,()=>{
//                     console.log('File written successfully');
//                 })
//           })
//       })
// })

//  console.log('Reading file....');


//Lecture 5.  How to read and write file synchronously
// let text=fs.readFileSync('./files/input.text','utf-8')
// console.log(text);


// let content=`Data read from input.xt : ${text}.\nDate created ${new Date()}`

// fs.writeFileSync('./files/output.txt',content)


//Lecture 4. How to output something  into terminal and how to read inputs from terminal

// const readline=require('readline')


// const rl=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })



// rl.question("Enter name  :  ",(name)=>{
//     console.log('Hello '+name);
//     rl.close()
// })


// rl.on('close',()=>{
//     console.log('EInterface closed');
//     process.exit(0)
// })