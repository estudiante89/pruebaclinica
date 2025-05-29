<script>
  import axios from 'axios';
  let email = '';
  let password = '';
  let mensaje = '';

  async function login() {
    try {
      const res = await axios.post('http://localhost:3000/auth/login', { email, password });
      mensaje = 'Login exitoso: ' + res.data.access_token;
    } catch (err) {
      mensaje = 'Error al iniciar sesión';
    }
  }
</script>

<h2>Login</h2>
<form on:submit|preventDefault={login}>
  <input type="email" bind:value={email} placeholder="Email" required>
  <input type="password" bind:value={password} placeholder="Password" required>
  <button type="submit">Iniciar sesión</button>
</form>
<p>{mensaje}</p>