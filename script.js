window.onload = function() {
    let display = document.getElementById('display');
    let buttons = Array.from(document.getElementsByClassName('btn'));
    buttons.map( button => {
        button.addEventListener('click', (e) => {
            switch(e.target.innerText){
                case '=':
                    try{
                        display.value = eval(display.value);
                    } catch {
                        display.value = "Error"
                    }
                    break;
                case 'AC':
                    display.value = '';
                    break;
                case 'Del':
                    display.value = display.value.slice(0, -1);
                    break;
                case '√':
                    display.value = Math.sqrt(parseFloat(display.value)).toString();
                    break;
                default:
                    display.value += e.target.innerText;
            }
        });
    });
}
