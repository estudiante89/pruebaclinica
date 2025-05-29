<script>
  import { onMount } from 'svelte';
  import axios from 'axios';

  let registros = [];

  onMount(async () => {
    const res = await axios.get('http://localhost:3000/historial');
    registros = res.data;
  });
</script>

<h2>Registros Médicos</h2>
<table>
  <thead>
    <tr>
      <th>Paciente</th>
      <th>Diagnóstico</th>
      <th>Fecha</th>
    </tr>
  </thead>
  <tbody>
    {#each registros as r}
      <tr>
        <td>{r.paciente}</td>
        <td>{r.diagnostico}</td>
        <td>{new Date(r.fecha).toLocaleDateString()}</td>
      </tr>
    {/each}
  </tbody>
</table>