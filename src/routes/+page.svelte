<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

    onMount(()=>{
        setTimeout(()=>{
            // cookie checking or whatever you want to put in
            let someCondition = true;
            goto(someCondition ? "/login":"/dashboard")
        },0)
    })
</script>

<svelte:head>
    <title>Please Wait..</title>
</svelte:head>
