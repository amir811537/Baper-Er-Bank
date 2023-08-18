// step1
document.getElementById("btn-deposit").addEventListener("click", function () {
    // step2
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

// step3
  const depositTotalElement = document.getElementById("deposit-Total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
// step4
  const currentDepositTotal = previousDepositTotal + newDepositAmount;

  depositTotalElement.innerText = currentDepositTotal;
// step5
const balanceTotalElement= document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;

const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// step 6
const currentBalanceTotal =previousBalanceTotal+ newDepositAmount;
balanceTotalElement.innerText =currentBalanceTotal;

// step7
  depositField.value = "";
});
