const prompt = require('prompt-sync')({ sigint: true });

let consultas = [];

while (true) {
    console.log(`
    //     === Menu de Cadastro de Consultas ===
    //     1. Adicionar um novo cadastro
    //     2. Listar todas as consultas
    //     3. Atualizar Consulta
    //     4. Excluir Consulta
    //     0. Sair
    //     `);

    let opcao = prompt('Escolha uma opção: ');

    if (opcao === '1') {
        let paciente = prompt('Nome do paciente: ');
        let medico = prompt('nome do medico: ');
        let data = prompt('data: ');
        let hora = prompt('hora da consulta: ');

        consultas.push({ paciente, medico, data, hora });
        console.log('Cadastro adicionado com sucesso!', consultas);
    } else if (opcao === '2') {
        if (consultas.length === 0) {
            console.log('Nenhuma consulta agendada.');
            break;
        } else {
            consultas.forEach((consultas, index) => {
                console.log(`
                    ${index + 1}. ${consultas.paciente} - ${consultas.medico} - ${consultas.data} - ${consultas.hora}
                `);
            });
        }
    } else if (opcao === '3') {
        console.log('digite o numero da consulta a ser alterada: ');
        consultas.forEach((consultas, index) => {
            console.log(`
                ${index + 1}. ${consultas.paciente} - ${consultas.medico} - ${consultas.data} - ${consultas.hora}\n
            `);
        });
        let escolha = prompt('consulta a ser modificada: ');
        consultas.pop(escolha - 1);

        let paciente = prompt('\nNome do paciente: ');
        let medico = prompt('nome do medico: ');
        let data = prompt('data: ');
        let hora = prompt('hora da consulta: ');
        consultas.push({ paciente, medico, data, hora });
    } else if (opcao === '4') {
        console.log('digite o numero da consulta a ser alterada: ');
        consultas.forEach((consultas, index) => {
            console.log(`
                ${index + 1}. ${consultas.paciente} - ${consultas.medico} - ${consultas.data} - ${consultas.hora}\n
            `);
        });
        let escolha = prompt('consulta a ser excluida: ');
        consultas.pop(escolha - 1);
    } else if (opcao === '0') {
        console.log('Saindo do sistema. Até logo!');
        break;
    } else {
        console.log('Opção inválida. Tente novamente.');
    }
}