
auto.waitFor();
setScreenMetrics(1080, 2240);
home();
launchApp("支付宝");
sleep(3000);
toast("我来讲个更浪漫的故事：")

var baba_nongchang = text('芭芭农场').findOne(2000);
var click_true = click(baba_nongchang.bounds().centerX(), baba_nongchang.bounds().centerY());
sleep(5000);

var renwu=text("任务列表").depth(15).findOne();
renwu.click();
sleep(3000);
click(900, 1010);
sleep(1000);
click(900, 1200);
sleep(2000);
swipe(500, 1500, 500, 500, 1000);
sleep(16000);   
swipe(500, 500, 500, 1500, 1000);
sleep(300);
back();
sleep(1000);


 for (var j = 0; j < 3; j++) {
      click(900, 1400);
      sleep(2000);

    
      swipe(500, 1500, 500, 500, 1000);
      sleep(16000);   
      swipe(500, 500, 500, 1500, 1000);
      sleep(300);

      back();
      sleep(1000);
 
     }
click(500, 400);


var i = 0;
while(i<50){
  i++;
  click(500, 1800);
  sleep(1000);
 
 }
toast("爱情树更长啊长");
