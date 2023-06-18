var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/space', function(req, res, next) {
  const id = req.query.id;
  if(id==1){
   return  res.send({
      "content": "温度：30\n湿度：60\n当日能耗：40"
    })
  }
  if(id==2){
   return  res.send({
      "content": "温度：30\n湿度：60\n当日能耗：40"
    })
  }

  res.send({
    "content": "温度：99\n湿度：99\n当日能耗：99"
  })
  
});


module.exports = router;
