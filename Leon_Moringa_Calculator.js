var history = [];

function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var expression = document.getElementById('display').value;

    if (expression == '') {
        alert('please enter something first');
        return;
    }

    var result = eval(expression);

    history.push(expression + ' = ' + result);

    var list = document.getElementById('historyList');
    var newItem = document.createElement('li');
    newItem.innerText = expression + ' = ' + result;
    list.appendChild(newItem);

    document.getElementById('display').value = result;
}