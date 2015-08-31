 function statusChangeCallback(response) {
      console.log('statusChangeCallback');
      console.log(response);
      if (response.status === 'connected') {
        testAPI();
      } else if (response.status === 'not_authorized') {
        document.getElementById('status').innerHTML = 'Please log ' +
          'into this app.';
      } else {
        document.getElementById('status').innerHTML = 'Please log ' +
          'into Facebook.';
      }
    }

    function checkLoginState() {
      FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
      });
    }

    window.fbAsyncInit = function() {

    FB.init({
    appId      : '398551460344466',
    status     : true,
    xfbml      : true,
    version    : 'v2.4'
  });

    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
var gender= response.gender; var name=response.name; var age=age_range.min;
    function testAPI() {
      console.log('Welcome!  Fetching your information.... ');
      FB.api('/me', {fields: 'name,first_name,last_name,age_range,address,gender'}, function(response) {
        console.log('Successful login for: ' + response.name);
        console.log(response.age_range);
        document.getElementById('status').innerHTML =
          '<table><td>Nombre</td><td>Genero</td><td>Edad</td><th>'
              + response.name +'</th><th>'+ response.gender +'</th><th>'+ response.age_range.min + '</th></table>';

      });
    }