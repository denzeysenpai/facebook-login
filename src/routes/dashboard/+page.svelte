<script lang="ts">
  import { InitializeFB } from "$lib/states/facebook-auth.svelte";
  import { onMount } from "svelte";
    import "./style.css";

    onMount(()=>{
        InitializeFB(document,"script", "facebook-jssdk")
    })

    
</script>

<svelte:head>
    <title>Welcome to Dashboard!</title>
</svelte:head>

<h1>Welcome!</h1>