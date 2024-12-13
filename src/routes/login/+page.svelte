<script lang="ts">
  import { OpenFacebookLogin } from "$lib/facebook-sdk";
  import FaceBookAuth from "$lib/FacebookAuth/FaceBookAuth.svelte";
import "./style.css";
  let showPass : boolean = $state(false)
  let loginUsingFacebook : boolean = $state(false);
</script>

<svelte:head>
  <title>Login using facebook</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playwrite+TZ+Guides&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
</svelte:head>

<div class="login-page">
  <form action="" class="form-box">
    <div class="form-content">
      <h1>LOGIN BOI</h1>
      <input type="text" id="username" name="username" placeholder="Username" class="input-box">
      <input type={showPass ? "text" : "password"} id="password" name="password" placeholder="Password" class="input-box">
      <div class="row" style="display: flex; flex-direction: row; margin: 10px 0px 20px 0px; justify-content: space-around;">
        <label for="show-pass">Show Password</label>
        <input type="checkbox" name="show-pass" id="show-pass" bind:checked={showPass} style="transform: scale(1.3);">
      </div>
      <button type="submit">Login</button>
      <div class="orline">
        <hr>
        <p>or</p>
        <hr>
      </div>
      <button type="button" onclick={
      ()=>{loginUsingFacebook = true;}}
      >Login using Facebook</button>
      {#if loginUsingFacebook}<FaceBookAuth bind:successful={loginUsingFacebook}/>{/if}
    </div>
  </form>
</div>
