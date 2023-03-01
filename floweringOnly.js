var timesInOne=rawInput("旅途开始之前，先请敏妹输入施肥次数：");
sleep(1000);
auto.waitFor();
setScreenMetrics(1080, 2240);
home();
launchApp("支付宝");
sleep(2000);
console.show();
log("好戏就要开场了，客官稍等……");

var farm = text('芭芭农场').findOne();
var click_true = click(farm.bounds().centerX(), farm.bounds().centerY());
log("尊敬的任小风，任先锋，绝yi，不找对象不换头像的人，头像像中老年的人inneace，human without balls, 憋屎第一人，美而不自知的敏妹，你好。");
sleep(4000);

var i = 0;
while(i<timesInOne){
  i++;
  click(500, 1800);
  sleep(1000);
 
 }
log("本次服务到此结束，请自觉打赏。");
