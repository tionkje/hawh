<script>
  import { onMount } from 'svelte';

  onMount(() => {
    history.pushState(null, null, location.href);
    window.onpopstate = function (event) {
      history.go(1);
    };
  });
</script>

<h1>Bedankt voor uw aandacht</h1>

<style>
  :global(body) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }

  h1 {
    font-size: 3rem;
    text-align: center;
  }
</style>
