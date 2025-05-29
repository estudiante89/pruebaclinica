<script>
  import { onMount } from 'svelte';
  import axios from 'axios';

  let notificaciones = [];

  onMount(async () => {
    const res = await axios.get('http://localhost:3000/notifications');
    notificaciones = res.data;
  });
</script>

<h2>Notificaciones</h2>
<table>
  <thead>
    <tr>
      <th>Mensaje</th>
      <th>Fecha</th>
    </tr>
  </thead>
  <tbody>
    {#each notificaciones as noti}
      <tr>
        <td>{noti.mensaje}</td>
        <td>{new Date(noti.createdAt).toLocaleString()}</td>
      </tr>
    {/each}
  </tbody>
</table>