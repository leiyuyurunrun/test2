var timesInOne = 0;
timesInOne = dialogs.input("旅途开始之前，先请敏妹输入施肥次数：");
setScreenMetrics(1080, 2240);
home();
launchApp("支付宝");
sleep(2000);

toast("好戏就要开场了，客官稍等……");

var farm = text('芭芭农场').findOne();
var click_true = click(farm.bounds().centerX(), farm.bounds().centerY());
toast("尊敬的任小风，任先锋，绝yi，不找对象不换头像的人，头像像中老年的人inneace，human without balls, 憋屎第一人，美而不自知的敏妹，你好。");
sleep(4000);
toast("让我们来到第一项服务，广告服务；");
var task=text("任务列表").depth(15).findOne();
task.click();
sleep(1500);
click(900, 1010);
sleep(1000);
click(900, 1200);
sleep(2000);
swipe(500, 1500, 500, 500, 1000);
sleep(15500);   
swipe(500, 500, 500, 1500, 1000);
sleep(400);
back();
sleep(1000);
 for (var j = 0; j < 3; j++) {
      click(900, 1400);
      sleep(2000);

      swipe(500, 1500, 500, 500, 1000);
      sleep(15500);   
      swipe(500, 500, 500, 1500, 1000);
      sleep(300);
      back();
      sleep(1000);
     }
click(500, 400);

toast("电视服务结束了，该起床浇树了；");
var i = 0;
while(i<timesInOne){
  i++;
  click(500, 1800);
  sleep(800);
 
 }
toast("本次服务到此结束，请自觉打赏leiyuyu。");
