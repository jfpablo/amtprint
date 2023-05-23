navigator.getBattery().then(function(battery) {
  console.log(battery.level*100 + "%");
batterylevel.style.width = battery.level*100 + "%";
batteryimg.title = battery.level*100 + "%";
percentbat.innerHTML = battery.level*100 + "%";
  // ... and any subsequent updates.
  battery.onlevelchange = function() {
    console.log(this.level*100 + "%");
batterylevel.style.width = this.level*100 + "%";
batteryimg.title = battery.level*100 + "%";
percentbat.innerHTML = battery.level*100 + "%";
  };
});