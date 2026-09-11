document.addEventListener('DOMContentLoaded', () => {

  const previousOperandText = document.getElementById('previous-operand');
  const currentOperandText = document.getElementById('current-operand');
  const numberButtons = document.querySelectorAll('[data-number]');
  const operatorButtons = document.querySelectorAll('[data-operation]');
  const equalsButton = document.getElementById('btn-equals');
  const clearButton = document.getElementById('btn-clear');
  const deleteButton = document.getElementById('btn-delete');
  const percentButton = document.getElementById('btn-percent');
  const negateButton = document.getElementById('btn-negate');
  const allButtons = document.querySelectorAll('.btn');

  let currentOperand = '0';
  let previousOperand = '';
  let operation = null;
  let shouldResetScreen = false;
  let hasError = false;
  let lastCalculated = false;

  function clearAll() {
    currentOperand = '0';
    previousOperand = '';
    operation = null;
    shouldResetScreen = false;
    hasError = false;
    lastCalculated = false;
    clearOperatorHighlights();
    updateDisplay();
  }

  function deleteLastDigit() {
    if (hasError) {
      clearAll();
      return;
    }

    if (shouldResetScreen) {
      return;
    }

    if (currentOperand === '0') return;

    if (currentOperand.length === 1 || (currentOperand.length === 2 && currentOperand.startsWith('-'))) {
      currentOperand = '0';
    } else {
      currentOperand = currentOperand.slice(0, -1);
    }

    updateDisplay();
  }

  function appendNumber(number) {
    if (hasError) {
      clearAll();
    }
    if (lastCalculated) {
      currentOperand = '';
      previousOperand = '';
      lastCalculated = false;
      shouldResetScreen = false;
    } else if (shouldResetScreen) {
      currentOperand = '';
      shouldResetScreen = false;
    }
    if (number === '.') {
      if (currentOperand.includes('.')) return;
      if (currentOperand === '' || currentOperand === '0') {
        currentOperand = '0.';
        updateDisplay();
        return;
      }
    }
    if (currentOperand === '0' && number !== '.') {
      currentOperand = number;
      updateDisplay();
      return;
    }
    if (currentOperand.replace(/[^0-9]/g, '').length >= 14) return;
    currentOperand += number;
    updateDisplay();
  }

  function chooseOperation(nextOperation) {
    if (hasError) return;

    if (lastCalculated) {
      lastCalculated = false;
    }

    if (shouldResetScreen && operation !== null) {
      operation = nextOperation;
      highlightActiveOperator(nextOperation);
      updateDisplay();
      return;
    }

    if (previousOperand !== '' && operation !== null && !shouldResetScreen) {
      calculateResult();
      if (hasError) return;
    }

    operation = nextOperation;
    previousOperand = currentOperand;
    shouldResetScreen = true;
    highlightActiveOperator(nextOperation);
    updateDisplay();
  }

  function calculateResult() {
    if (hasError) return;
    if (operation === null || previousOperand === '') return;

    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    let computation;

    switch (operation) {
      case '+':
        computation = prev + current;
        break;
      case '−':
      case '-':
        computation = prev - current;
        break;
      case '×':
      case '*':
        computation = prev * current;
        break;
      case '÷':
      case '/':
        if (current === 0) {
          hasError = true;
          currentOperand = 'N/A';
          previousOperand = `${formatDisplayNumber(prev)} ${operation} 0 =`;
          operation = null;
          clearOperatorHighlights();
          updateDisplay();
          return;
        }
        computation = prev / current;
        break;
      default:
        return;
    }

    const normalized = normalizePrecision(computation);
    previousOperand = `${formatDisplayNumber(prev)} ${operation} ${formatDisplayNumber(current)} =`;
    currentOperand = normalized.toString();
    operation = null;
    shouldResetScreen = true;
    lastCalculated = true;
    clearOperatorHighlights();
    updateDisplay();
  }

  function toggleSign() {
    if (hasError || currentOperand === '0' || currentOperand === '') return;

    if (currentOperand.startsWith('-')) {
      currentOperand = currentOperand.substring(1);
    } else {
      currentOperand = '-' + currentOperand;
    }
    updateDisplay();
  }

  function calculatePercentage() {
    if (hasError) return;
    const current = parseFloat(currentOperand);
    if (isNaN(current)) return;

    const result = normalizePrecision(current / 100);
    currentOperand = result.toString();
    updateDisplay();
  }

  function normalizePrecision(number) {
    if (!isFinite(number)) return 'Error';
    return parseFloat(number.toPrecision(12));
  }

  function formatDisplayNumber(value) {
    if (typeof value === 'number') {
      value = value.toString();
    }

    if (value === 'N/A' || value === 'Error' || value === '') {
      return value;
    }

    const parts = value.split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1];

    let formattedInteger = '';
    if (integerPart === '-') {
      formattedInteger = '-';
    } else if (integerPart !== '') {
      const parsed = parseFloat(integerPart);
      if (!isNaN(parsed)) {
        formattedInteger = parsed.toLocaleString('en-US');
      } else {
        formattedInteger = integerPart;
      }
    }

    if (decimalPart !== undefined) {
      return `${formattedInteger}.${decimalPart}`;
    }

    return formattedInteger || '0';
  }

  function updateDisplay() {
    if (hasError) {
      currentOperandText.textContent = currentOperand;
      currentOperandText.classList.add('error-text');
      previousOperandText.textContent = previousOperand;
      return;
    }

    currentOperandText.classList.remove('error-text');

    if (currentOperand === '') {
      currentOperandText.textContent = '0';
    } else {
      currentOperandText.textContent = formatDisplayNumber(currentOperand);
    }

    if (operation !== null && previousOperand !== '' && !lastCalculated) {
      previousOperandText.textContent = `${formatDisplayNumber(previousOperand)} ${operation}`;
    } else {
      previousOperandText.textContent = previousOperand;
    }

    adjustDisplayFontSize();
  }

  function adjustDisplayFontSize() {
    const textLength = currentOperandText.textContent.length;
    if (textLength > 13) {
      currentOperandText.style.fontSize = '1.45rem';
    } else if (textLength > 10) {
      currentOperandText.style.fontSize = '1.8rem';
    } else if (textLength > 7) {
      currentOperandText.style.fontSize = '2.05rem';
    } else {
      currentOperandText.style.fontSize = '2.25rem';
    }
  }

  function highlightActiveOperator(op) {
    operatorButtons.forEach(btn => {
      const btnOp = btn.getAttribute('data-operation');
      if (btnOp === op) {
        btn.classList.add('is-active-operator');
      } else {
        btn.classList.remove('is-active-operator');
      }
    });
  }

  function clearOperatorHighlights() {
    operatorButtons.forEach(btn => btn.classList.remove('is-active-operator'));
  }

  function triggerButtonEffect(key) {
    let matchedBtn = null;

    allButtons.forEach(btn => {
      const dataKey = btn.getAttribute('data-key');
      const dataNumber = btn.getAttribute('data-number');
      const dataOp = btn.getAttribute('data-operation');

      if (dataKey === key || dataNumber === key || dataOp === key) {
        matchedBtn = btn;
      }
    });

    if (matchedBtn) {
      matchedBtn.classList.add('is-pressed');
      setTimeout(() => {
        matchedBtn.classList.remove('is-pressed');
      }, 120);
    }
  }

  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      appendNumber(button.getAttribute('data-number'));
    });
  });

  operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
      chooseOperation(button.getAttribute('data-operation'));
    });
  });

  equalsButton.addEventListener('click', () => {
    calculateResult();
  });

  clearButton.addEventListener('click', () => {
    clearAll();
  });

  deleteButton.addEventListener('click', () => {
    deleteLastDigit();
  });

  if (percentButton) {
    percentButton.addEventListener('click', () => {
      calculatePercentage();
    });
  }

  if (negateButton) {
    negateButton.addEventListener('click', () => {
      toggleSign();
    });
  }

  window.addEventListener('keydown', (e) => {
    const key = e.key;

    if (/^[0-9]$/.test(key)) {
      triggerButtonEffect(key);
      appendNumber(key);
      return;
    }

    if (key === '.') {
      triggerButtonEffect('.');
      appendNumber('.');
      return;
    }

    if (key === '+') {
      triggerButtonEffect('+');
      chooseOperation('+');
      return;
    }
    if (key === '-') {
      triggerButtonEffect('-');
      chooseOperation('−');
      return;
    }
    if (key === '*') {
      triggerButtonEffect('*');
      chooseOperation('×');
      return;
    }
    if (key === '/') {
      e.preventDefault(); 
      triggerButtonEffect('/');
      chooseOperation('÷');
      return;
    }

    if (key === 'Enter' || key === '=') {
      e.preventDefault(); 
      triggerButtonEffect('Enter');
      calculateResult();
      return;
    }

    if (key === 'Backspace') {
      triggerButtonEffect('Backspace');
      deleteLastDigit();
      return;
    }

    if (key === 'Escape' || key.toLowerCase() === 'c') {
      triggerButtonEffect('Escape');
      clearAll();
      return;
    }

    if (key === '%') {
      triggerButtonEffect('%');
      calculatePercentage();
      return;
    }
  });

  updateDisplay();
});
