'use client';
export default function Register() {
  function w(e) {
      localStorage.setItem('user', JSON.stringify({
        login: e.target.login.value,
        password: e.target.password.value
      }));
    alert('OK');
  }
  return (
    <form onSubmit={w}>
      <input name="login" placeholder="login"/>
      <input name="password" placeholder="password"/>
      <button>Register</button>
    </form>
  );
}