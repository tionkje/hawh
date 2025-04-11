<script lang="ts">
let webhookId = $state('');
</script>

<input bind:value={webhookId} type="text" placeholder="Enter Webhook ID" />
<a href={`./${webhookId}`}>Go</a>


<style>
a{
    background-color: #FF0000; /* Red */
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
