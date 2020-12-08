var Links={
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}

var Body ={
  setColor:function(color){
  document.querySelector('body').style.color = color;
  },
  setBackgroundColor:function(color){
  document.querySelector('body').style.backgroundColor = color;
  }
}
function nightDay(self){
 if(self.value === '야'){
   Body.setBackgroundColor('black');
   Body.setColor('white');
   self.value = '주';

   Links.setColor('white');
 }
    else {
   Body.setBackgroundColor('white');
   Body.setColor('black');
   self.value = '야';

   Links.setColor('black');
   }
}
