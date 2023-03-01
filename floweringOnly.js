var timesInOne = dialogs.input("旅途开始之前，先请敏妹输入施肥次数：");


setScreenMetrics(1080, 2240);
home();
launchApp("支付宝");
sleep(1000);

var farm = text('芭芭农场').findOne();
var click_true = click(farm.bounds().centerX(), farm.bounds().centerY());
sleep(3500);

var i = 0;
while(i<timesInOne){
  i++;
  toast(i);
  \\click(500, 1800);
  sleep(1000);
 
 }
toast("本次服务到此结束，请自觉打赏。");
