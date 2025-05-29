<script>
  import { onMount } from 'svelte';
  let mensaje = "Bienvenido al Frontend Svelte";
</script>

<main>
  <h1>{mensaje}</h1>
</main>

<style>
  main {
    padding: 2rem;
    text-align: center;
  }
</style>