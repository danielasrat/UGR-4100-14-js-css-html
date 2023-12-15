  var myButton = document.getElementById('button_contact');
  var Facebook = document.getElementById('facebook');
  var Instagram = document.getElementById('instagram');
  var Youtube = document.getElementById('youtube');
  var Linkedin = document.getElementById('linkedin');

  
  myButton.addEventListener('click', function() {
    
      var filePath = './contact-me.html';

    
      window.location.href = filePath;
  });

  Facebook.addEventListener('click', function() {

    location.href = "https://www.facebook.com";
  })

  Instagram.addEventListener('click', function() {

    location.href = "https://www.instagram.com";
  })

  Youtube.addEventListener('click', function() {

    location.href = "https://www.youtube.com";
  })

  Linkedin.addEventListener('click', function() {

    location.href = "https://www.linkedin.com";
  })