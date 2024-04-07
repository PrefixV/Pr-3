function openTab(event, tabId) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "#ffffff";
  }

  document.getElementById(tabId).style.display = "flex";
  event.currentTarget.style.backgroundColor = "#858f84";
}



var accordionHeaders = document.querySelectorAll('.accordion-header');
var accordionContents = document.querySelectorAll('.accordion-content');

accordionHeaders.forEach(function(header) {
  header.addEventListener('click', function() {
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});

