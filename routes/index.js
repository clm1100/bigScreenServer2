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
      data:{ "content": "温度：30\n湿度：60\n当日能耗：40"}
    })
  }
  if(id==2){
   return  res.send({
      data:{"content": "温度：30\n湿度：60\n当日能耗：40"}
    })
  }

  res.send({
    data:{ "content": "温度：99\n湿度：99\n当日能耗：99"}
  })
  
});

router.get('/energy',(req,res)=>{
  res.send({
    data:[
      {
        "x": "房间1",
        "y": 60,
        "s": "系列一",
        "colorField": 100
      },
      {
        "x": "房间2",
        "y": 40,
        "s": "系列一"
      }
    ]
  })
})

router.get('/warning',(req,res)=>{
  const t = Math.random()*10;
  const result = t-6>0;
  if(result){
    return res.send({
      data:{
        "content": "warning 空间1温度过高"
      }
    })
  }else{
    return res.send({
      data:{
        "content": "no warning"
      }
    })
  }
})




module.exports = router;
