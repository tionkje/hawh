<script lang="ts">
import { page } from '$app/state';

async function clicked() {
  const res = await fetch(`http://homeassistant.local:8123/api/webhook/${page.params.webhookId}`)
  .then(res=>{
      console.log('STATUS:',res.status, res.statusText);
      return res.text();
  })

  console.log('RESULT:', res);
}
</script>

<h2>{page.params.webhookId.replace(/_/g,' ')}</h2>
<br>

<button onclick={clicked}>Click Me</button>

<style>
  button {
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
