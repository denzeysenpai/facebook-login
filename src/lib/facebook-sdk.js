export function OpenFacebookLogin() {
      (function () {
      var js,
        fjs = document.getElementsByTagName("script")[0];
      if (document.getElementById("facebook-jssdk")) {
        return;
      }
      js = document.createElement("script");
      js.id = "facebook-jssdk";
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })();
    window.fbAsyncInit = function () {
      FB.init({ appId: "614267834507665", xfbml: true, version: "v21.0" });
      FB.login(function (response) {
        if (response.authResponse) {
          FB.api("/me", { fields: "name, email" }, function (response) {
            document.getElementById("profile").innerHTML =
              "Good to see you, " +
              response.name +
              ". i see your email address is " +
              response.email;
              return true;
            });
          location.replace("/dashboard");
        } else {
          console.log("User cancelled login or did not fully authorize.");
          return false;
        }
      });
    };
}