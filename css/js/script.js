document.addEventListener("DOMContentLoaded", () => {

    const botoesHumor =
        document.querySelectorAll(".humor button");

    const inputAgua =
        document.querySelectorAll("input")[0];

    const inputSono =
        document.querySelectorAll("input")[1];

    const inputExercicio =
        document.querySelectorAll("input")[2];

    const inputMeta =
        document.querySelectorAll("input")[3];

    const anotacao =
        document.querySelector("textarea");

    const botoes =
        document.querySelectorAll(".card button");

    let humorSelecionado = "";

    botoesHumor.forEach(botao => {

        botao.addEventListener(
            "click",
            () => {

                humorSelecionado =
                    botao.textContent;

                localStorage.setItem(
                    "humor",
                    humorSelecionado
                );

                alert(
                  "Humor salvo!"
                );

            }

        );

    });

    botoes[5].addEventListener(
        "click",
        () => {

            localStorage.setItem(
                "meta",
                inputMeta.value
            );

            alert(
             "Meta salva!"
            );

        }

    );

    botoes[6].addEventListener(
        "click",
        () => {

            const registro = {

                agua:
                    inputAgua.value,

                sono:
                    inputSono.value,

                exercicio:
                    inputExercicio.value,

                anotacao:
                    anotacao.value,

                humor:
                    humorSelecionado

            };

            localStorage.setItem(

                "registro",

                JSON.stringify(
                    registro
                )

            );

            alert(
             "Registro salvo!"
            );

        }

    );

    carregarDados();

});

function carregarDados(){

    const registro =

    JSON.parse(

        localStorage.getItem(
            "registro"
        )

    );

    if(registro){

        document
        .querySelectorAll(
        "input"
        )[0].value =
        registro.agua;

        document
        .querySelectorAll(
        "input"
        )[1].value =
        registro.sono;

        document
        .querySelectorAll(
        "input"
        )[2].value =
        registro.exercicio;

        document
        .querySelector(
        "textarea"
        ).value =
        registro.anotacao;

    }

    const meta =

    localStorage.getItem(
    "meta"
    );

    if(meta){

        document
        .querySelectorAll(
        "input"
        )[3].value =
        meta;

    }

}