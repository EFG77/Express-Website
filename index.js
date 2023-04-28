const express= require('express');

const path=require('path');

const server=express();



//Middleware Static
server.use(express.static(path.join(__dirname, 'public')));


server.listen(3000, ()=>console.log('Server is ready'));

