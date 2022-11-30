const { Calculator } = require("./calculator");
const prompts = require("prompts");

let cc = new Calculator()

async function testCLI (){
    const quelCal = [
        {
            type: "select",
            name: "choixCalcul",
            message: "Quel calcul souhaitez-vous effectuer ?",
            choices: [
                {title: "Addition", value: 1},
                {title: "Soustraction", value: 2},
                {title: "Multiplication", value: 3},
                {title: "Division", value: 4},
                {title: "Pourcentage", value: 5},
                {title: "Puissance", value: 6},
            ]
        }
    ];

    const res = await prompts(quelCal)
    console.log(res);

    const val_a = {
        type: 'number',
        name: 'value_a',
        message: "Quelle est votre première valeur ?"
}

    if (res.value === 1) {
        const inputValues = await prompts(val_a)
    }
}

testCLI()
