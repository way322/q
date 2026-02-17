'use client';
export default function Register() {
  function handleSubmit(e) {
      localStorage.setItem('user', JSON.stringify({
        login: e.target.login.value,
        password: e.target.password.value
      }));
    alert('OK');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="login" placeholder="login"/>
      <input name="password" placeholder="password"/>
      <button type="submit">Register</button>
    </form>
  );
}