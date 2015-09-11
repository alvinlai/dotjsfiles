
['footer', 'mw-panel', 'mw-page-base', 'mw-navigation'].forEach(function(id){
  // document.getElementById(id).style.display = 'none';
  document.getElementById(id).remove();
});

var content = document.getElementById('content');
content.style.margin = 0;
