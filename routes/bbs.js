const express = require('express');
const router = express.Router();


//create
router.post('/', (req, res) => {
    res.json({
        message: "post bbs"
    });
});

//read
router.get('/', (req, res) => {
    res.json({
        message: "read bbs"
    });
});

//update
router.patch('/', (req, res) => {
    res.json({
        message: "update bbs"
    });
});
//delete
router.delete('/', (req, res) => {
    res.json({
        message: "delete bbs"
    });
});




// 이 부분이 없으면 인식을 할 수 없음
module.exports = router;