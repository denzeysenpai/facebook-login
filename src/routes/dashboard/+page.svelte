<script lang="ts">
  import {  InitializeFB } from "$lib/states/facebook-auth.svelte";
  import { onMount } from "svelte";
    import "./style.css";

    onMount(()=>{
        // InitializeFB(document,"script", "facebook-jssdk")
    })

    
</script>

<svelte:head>
    <title>Welcome to Dashboard!</title>
    <script>
        import {  InitializeFB } from "$lib/states/facebook-auth.svelte";
        
        InitializeFB(document,"script", "facebook-jssdk");
        window.fbAsyncInit = function() {
            FB.init({
                      appId            : '595758096286993',
                      xfbml            : true,
                      version          : 'v2.9'
                    });
            FB.login(function(response) {
                      if (response.authResponse) {
                           console.log('Welcome!  Fetching your information.... ');
                           FB.api('/me', {fields: 'name, email'}, function(response) {
                               document.getElementById("profile").innerHTML = "Good to see you, " + response.name + ". i see your email address is " + response.email
                           });
                      } else { 
                           console.log('User cancelled login or did not fully authorize.'); }
            });
        };
    </script>
</svelte:head>

<h1>Welcome!</h1>