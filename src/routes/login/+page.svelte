<script lang="ts">
    import "./style.css";
</script>

<svelte:head>
    <title>Login using facebook</title>
</svelte:head>

<form action="">
    <label for="username">Username</label>
    <input type="text" id="username" name="username">
    <label for="password">Password</label>
    <input type="text" id="password" name="password">
    <button type="submit">Login</button>
</form>