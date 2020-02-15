const express = require('express');
const app = express();




app.use((req, res) => {
   res.json({
       msg: '서버 시작됨!'
   });
});



const port = 1234;


app.listen(port, () => console.log("server started"));