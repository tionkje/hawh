<script lang="ts">
  import { page } from '$app/state';

  let loading = $state(false);

</script>

<h2>{page.params.webhookId.replace(/_/g, ' ')}</h2>
<br />
<form method="POST" onsubmit={() => (loading = true)}>
  <input type="hidden" name="webhookId" value={page.params.webhookId} />
  {#if loading}
    <div>Loading...</div>
  {:else}
    <button>Click Me</button>
  {/if}
</form>

<style>
  button,div {
    background-color: #ff0000; /* Red */
    border: none;
    color: white;
    padding: 20px 40px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    margin: 4px 2px;
    cursor: pointer;
  }

  /* Center the button on the page */
  :global(body) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }
</style>
