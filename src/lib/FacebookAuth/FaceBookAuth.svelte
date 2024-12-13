<script lang="ts">
  import { OpenFacebookLogin } from "$lib/facebook-sdk";
  import { onMount } from "svelte";

    let {successful = $bindable()} = $props()
    let response = $state()
    $effect(() => {
        successful = response
    })
</script>


<svelte:head>
  <script id="facebook-jssdk" src="https://connect.facebook.net/en_US/sdk.js"></script>
  <script>
  <script>
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
  </script>
</svelte:head>