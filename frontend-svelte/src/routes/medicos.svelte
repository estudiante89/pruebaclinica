<script>
  import { onMount } from 'svelte';
  import axios from 'axios';

  let medicos = [];

  onMount(async () => {
    const res = await axios.get('http://localhost:3000/patients/doctors');
    medicos = res.data;
  });
</script>

<h2>Médicos</h2>
<table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Especialidad</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    {#each medicos as m}
      <tr>
        <td>{m.nombre}</td>
        <td>{m.especialidad}</td>
        <td>{m.email}</td>
      </tr>
    {/each}
  </tbody>
</table>