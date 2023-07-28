// 監聽滾動事件
window.addEventListener('scroll', function() {
  // 取得網頁的高度
  var pageHeight = document.documentElement.scrollHeight;
  // 取得視窗的高度
  var windowHeight = window.innerHeight;
  // 取得滾動的距離
  var scrollDistance = window.scrollY || document.documentElement.scrollTop;

  // 判斷滾動超過一半
  if (scrollDistance > (pageHeight - windowHeight) / 2) {
    // 加上fade-in的class
    document.getElementById('flatbox').classList.add('fade-in');
  } else {
    // 移除fade-in的class
    document.getElementById('flatbox').classList.remove('fade-in');
  }
});