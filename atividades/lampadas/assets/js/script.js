const button = document.querySelector("#btnAddItem");
const conteudo = document.querySelector('.conteudo')

button.addEventListener('click', () => {
    const input = document.querySelector("#item");

    const valor = input.value.trim();
    if (!valor) {
        alert("Digite algum texto");
        return;
    }

    conteudo.innerHTML +=
        ` <div class="lampada">
        <img src='assets/img/apagada.jpg' alt="Imagem de uma lâmpada apagada" class="imagem"> 
        <p>${item.value}</p>
      </div>
    `;

    input.value = "";

    const selecionarLampadas = document.querySelectorAll(".lampada");

    selecionarLampadas.forEach(lampada => {
        const imagem = lampada.querySelector('.imagem');
        let quebrada = false;

        function acenderLampada() {
            if (!quebrada) {
                imagem.src = 'assets/img/acesa.jpg';
            }
        }

        function apagarLampada() {
            if (!quebrada) {
                imagem.src = 'assets/img/apagada.jpg';
            }
        }

        function quebrarLampada() {
            imagem.src = 'assets/img/quebrada.jpg';
            quebrada = true;
        }

        imagem.addEventListener('mouseover', acenderLampada);
        imagem.addEventListener('mouseout', apagarLampada);
        imagem.addEventListener('click', quebrarLampada);
    });

});



