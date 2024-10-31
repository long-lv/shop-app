const app = require('./app');
const PORT = process.env.PORT || 3066;
const server = app.listen(PORT, () =>{
    console.log('shop app with port', PORT);
})

process.on("SIGINT", () =>{
    server.close(() => console.log(`close sever express port ${PORT}`));

})


