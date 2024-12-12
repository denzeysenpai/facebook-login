<script lang="ts">
  import "./style.css";

</script>

<svelte:head>
  <title>Login using facebook</title>
  <script>
        (function(){
            var js, fjs = document.getElementsByTagName('script')[0];
            if (document.getElementById('facebook-jssdk')) {return;}
            js = document.createElement('script'); js.id ='facebook-jssdk';
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
            }()
        );
 
        window.fbAsyncInit = function() {
            FB.init({
                      appId            : '614267834507665',
                      xfbml            : true,
                      version          : 'v21.0'
                    });
            FB.login(function(response) {
                      if (response.authResponse) {
                           console.log('Welcome!  Fetching your information.... ');
                           FB.api('/me', {fields: 'name, email'}, function(response) {
                               document.getElementById("profile").innerHTML = "Good to see you, " + response.name + ". i see your email address is " + response.email
                           });
                        location.replace("/dashboard")
                           
                      } else { 
                           console.log('User cancelled login or did not fully authorize.'); }
            });
        };
  </script>
</svelte:head>

<div id="profile"></div>
