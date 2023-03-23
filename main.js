const valorA = document.querySelector('#valor-a');
const valorB = document.querySelector('#valor-b');
const submitButton = document.querySelector('#btn-calc');
const error = document.querySelector('.error-message');
const sucesso = document.querySelector('.sucess-message');

error.classList = '';
error.innerHTML = '';
sucesso.classList = '';
sucesso.innerHTML = '';

    submitButton.addEventListener('click', function(e) {
        e.preventDefault()

        const valorAvalue = valorA.value;
        const valorBvalue = valorB.value;

            if(valorAvalue === '' || valorBvalue === ''){
                error.classList = 'error-message';
                error.innerHTML = 'Por favor preencha todos os campos!';

                setInterval(() => {
                    error.classList = '';
                    error.innerHTML = '';
                }, 3000);
                return;
            }


            if(valorBvalue > valorAvalue) {
                sucesso.classList = 'sucess-message';
                sucesso.innerHTML = 'Verificando: ValorB é maior que o valorA 😎'

                setInterval(() => {
                    sucesso.classList = '';
                    sucesso.innerHTML = ''
                }, 5000);
            } else {
                error.classList = 'error-message';
                error.innerHTML = `Valor A: ${valorAvalue}<br>Valor B: ${valorBvalue}<br><br>ValorB precisa ser maior que o valorA 😕`;

                setInterval(() => {
                    error.classList = '';
                    error.innerHTML = '';
                }, 5000);

                return;
            }
     });