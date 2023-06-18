var express = require('express');
var router = express.Router();
const moment = require('moment');
function rand(min,max){

  return parseInt(Math.random()*(max-min+1)+min);
  
  }

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/space', function(req, res, next) {
  const id = req.query.id;
  if(id==1){
   return  res.send({
      data:{ "content": `温度：${rand(20,36)}\n湿度：${rand(50,65)}\n当日能耗：${40,50}`}
    })
  }
  if(id==2){
   return  res.send({
    data:{ "content": `温度：${rand(20,36)}\n湿度：${rand(50,65)}\n当日能耗：${40,50}`}
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
  const result = t-3>0;
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

router.get('/average',(req,res)=>{

  const currentHours = moment().format("H");
  const t = moment().subtract(1,'hour').format("H");
  console.log(t)

  const arr = [];

  for (let i = 8; i > 0; i--) {
    const element = i;
    const t = moment().subtract(i,'hour').format("H");
    arr.push(t);
    
  }
  console.log(arr);

  let result = [];
  arr.forEach((ele)=>{
    console.log(ele);
    result=result.concat([
      {
        "x": `${ele}时`,
        "y": rand(18,36),
        "s": "房间1-温度"
      },
      {
        "x": `${ele}时`,
        "y": rand(50,60),
        "s": "房间1-湿度度"
      },
      {
        "x": `${ele}时`,
        "y": rand(17,35),
        "s": "房间2-温度"
      },
      {
        "x": `${ele}时`,
        "y": rand(55,65),
        "s": "房间2-湿度度"
      },
    ])
  })

  res.send({
    data:result
  })
})




module.exports = router;
