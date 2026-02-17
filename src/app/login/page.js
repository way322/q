'use client';
export default function Login() {
  const handleSubmit = (e) => {
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
      <form onSubmit={handleSubmit}>
        <input name="login" placeholder="Логин"/>
        <input name="password" placeholder="Пароль"/>
        <button type="submit" >Войти</button>
      </form>
    </main>
  );
}