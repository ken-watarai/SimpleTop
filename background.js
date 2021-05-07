day_of_week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
function twoDigit(num) {
  let ret;
  if( num < 10 ) 
    ret = '0' + num; 
  else 
    ret = num; 
  return ret;
}
function showclock() {
  const nowTime = new Date();
  const day = nowTime.getDay();
  const hour = twoDigit(nowTime.getHours());
  const min = twoDigit(nowTime.getMinutes());
  time = hour + ' : ' + min;
  document.getElementById('day').innerHTML = day_of_week[day];
  if ( day == 0 ) {
    document.getElementById('day').style.color = '#f14242';
  } else if ( day == 6 ) {
    document.getElementById('day').style.color = '#4b5cfa';
  }
  document.getElementById('time').innerHTML = time;
}

showclock();
setInterval(showclock, 1000);
