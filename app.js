const pessoas = [
    {
        name: 'Josefa',
        age: 61,
        profession: 'Enginer',
        city: 'Cerro Corá'
    },
    {
        name: 'José',
        age: 55,
        profession: 'Motoboy',
        city: 'Natal'
    },
    {
        name: 'Elitiziane',
        age: 27,
        profession: 'Terapeuta',
        city: 'Pato Branco'
    },
    {
        name: 'Miguel',
        age: 5,
        profession: 'Estudante',
        city: 'Natal'
    }
];

for (let i in pessoas) {
    console.log(`Pessoa ${parseInt(i) + 1}:`);
    for (let prop in pessoas[i]) {
        console.log(`${prop}: ${pessoas[i][prop]}`);
    }

    console.log('---');
}

console.log('Nome das Pessoas:');
for (let people of person) {
    console.log(person.name)
}