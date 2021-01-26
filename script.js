const loginBtn = document.getElementById('login-btn');
const addDeposit = document.getElementById('deposit-btn');

// Login button event handler
loginBtn.addEventListener('click', function () {
  const loginArea = document.getElementById('login-area');
  const transactionArea = document.getElementById('transaction-area');
  loginArea.style.display = 'none';
  transactionArea.style.display = 'block';
});

// Deposit & Balance button event handler
addDeposit.addEventListener('click', function () {
  const depositValue = document.getElementById('deposit-value').value;
  const depositValueNumber = parseFloat(depositValue);

  // Deposit
  updateAmount('current-deposit', depositValueNumber);
  // Balance
  updateAmount('current-balance', depositValueNumber);

  document.getElementById('deposit-value').value = '';
});

// Deposit & Balance calculator
function updateAmount(id, depositValueNumber) {
  const current = document.getElementById(id).innerText;
  currentNumber = parseFloat(current);
  const totalAmount = currentNumber + depositValueNumber;
  document.getElementById(id).innerText = totalAmount;
}
