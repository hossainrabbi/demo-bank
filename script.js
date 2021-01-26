const loginBtn = document.getElementById('login-btn');
const addDeposit = document.getElementById('deposit-btn');
const addWithdraw = document.getElementById('withdraw-btn');

// Login button event handler
loginBtn.addEventListener('click', function () {
  const loginArea = document.getElementById('login-area');
  const transactionArea = document.getElementById('transaction-area');
  loginArea.style.display = 'none';
  transactionArea.style.display = 'block';
});

// Deposit & Balance button event handler
addDeposit.addEventListener('click', function () {
  const depositValueNumber = getInputValue('deposit-value');

  // Deposit
  updateAmount('current-deposit', depositValueNumber);
  // Balance
  updateAmount('current-balance', depositValueNumber);

  document.getElementById('deposit-value').value = '';
});

// withdraw & Balance button event handler
addWithdraw.addEventListener('click', function () {
  const withdrawValueNumber = getInputValue('withdraw-value');

  // withdraw
  updateAmount('current-withdraw', withdrawValueNumber);
  // Balance
  updateAmount('current-balance', -1 * withdrawValueNumber);

  document.getElementById('withdraw-value').value = '';
});

// Get Input value
function getInputValue(id) {
  const amountInputValue = document.getElementById(id).value;
  const amountInputValueNumber = parseFloat(amountInputValue);
  return amountInputValueNumber;
}

// Deposit & Balance calculator
function updateAmount(id, value) {
  const current = document.getElementById(id).innerText;
  currentNumber = parseFloat(current);
  const totalAmount = currentNumber + value;
  document.getElementById(id).innerText = totalAmount;
}
