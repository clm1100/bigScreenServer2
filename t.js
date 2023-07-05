// 大屏控制代码开发区
const canvas = ui.canvas

const D3Layer = ui.query("#container-4a9eah82jh");
const Btn1 = ui.query("#container-7l3lhk9jh9");
const Switch1 = ui.query("#container-ejl84d27dg");
setTimeout(() => {
  console.log('测试', THING.App.current)
  THING.App.current.on('closeDialog', () => {
    console.log('大屏接收到了信息 ')
  })
}, 1000)



Btn1.on('click', (params) => {
  console.log(params)
  const visible = D3Layer.visible;
  if (visible) {

    D3Layer.hidden()
  } else {
    D3Layer.show()
  }
  THING.App.current.trigger("open", { data: 100 })
})

Switch1.on('click',(ele)=>{
    console.log('switch',ele.target.value);
})