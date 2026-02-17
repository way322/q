'use client';
export default function Login() {
  const w = (e) => {
    const form = e.target;
    const stored = JSON.parse(localStorage.getItem('user') || '{}');
    if (stored.login === form.login.value && stored.password === form.password.value) {
      alert('Успешный вход');
    } else {
      alert('Неверные данные');
    }
  };
  return (
    <main>
      <form onSubmit={w}>
        <input name="login" placeholder="Логин"/>
        <input name="password" placeholder="Пароль"/>
        <button>Войти</button>
      </form>
    </main>
  );
}