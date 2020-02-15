const express = require('express');
const router = express.Router();


// 제품데이터 생성하기 create
router.post('/', (req, res) => {
    res.json({
       msg: "create product"
    });
});

// 제품데이터 불러오기 read
router.get('/', (req, res) => {
   res.json({
      msg: "get product"
   });
});

//제품 수정하기 patch or put
router.patch('/', (req, res) => {
   res.json({
      msg: "update product"
   });
});

//제품 삭제 delete
router.delete('/', (req, res) => {
   res.json({
      msg: "delete product"
   });
});






//라우터를 모듈화시켜서 내보내겠다
module.exports = router;