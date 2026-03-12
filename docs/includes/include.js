// Simple HTML include loader for static sites
(function(){
  function loadFragment(containerId, url){
    var container = document.getElementById(containerId);
    if(!container) return;
    fetch(url).then(function(resp){
      if(!resp.ok) throw new Error('Network response was not ok');
      return resp.text();
    }).then(function(html){
      container.innerHTML = html;
    }).catch(function(err){
      console.error('Include failed for', url, err);
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    loadFragment('site-header', 'includes/header.html');
    loadFragment('site-footer', 'includes/footer.html');
  });
})();
