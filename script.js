const loginBtn = document.getElementById('login-btn');

// Login button event handler
loginBtn.addEventListener('click', function () {
  const loginArea = document.getElementById('login-area');
  const transactionArea = document.getElementById('transaction-area');
  loginArea.style.display = 'none';
  transactionArea.style.display = 'block';
});
