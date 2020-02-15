const express = require('express');
const router = express.Router();


//create
router.post('/', (req, res) => {
   res.json({
      message: "post order"
   });
});

//read
router.get('/', (req, res) => {
   res.json({
      message: "read order"
   });
});

//update
router.patch('/', (req, res) => {
    res.json({
        message: "update order"
    });
});
//delete
router.delete('/', (req, res) => {
    res.json({
        message: "delete order"
    });
});




// 이 부분이 없으면 인식을 할 수 없음
module.exports = router;