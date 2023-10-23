require('../database');

const { GestorModel } = require('../models/gestor-model');

const gestors = [
    {
        nome: 'beatriz',
        sobrenome: 'Costa',
        genero: 'Feminino',
        dataDeNascimento: new Date(1998, 2, 14),
        idade: 25,
        localDeTrabalho: 'Maternidade Municipal',
        CRM: 246813,
        tipoDeContrato: 'CLT',
        formacao: 'Graduação em Obstetrícia',
        senhaProvisoria: 'senha357',
        metas: 170,
        atendimentos: 180,
        eventosP: ""
    },
    {
        nome: 'rafael',
        sobrenome: 'Santos',
        genero: 'Masculino',
        dataDeNascimento: new Date(1982, 8, 7),
        idade: 41,
        localDeTrabalho: 'Clínica Cardiológica',
        CRM: 159357,
        tipoDeContrato: 'PJ',
        formacao: 'Pós-Graduação em Cardiologia',
        senhaProvisoria: 'senha468',
        metas: 190,
        atendimentos: 200,
        eventosP: ""
    },
    {
        nome: 'lídia',
        sobrenome: 'Martins',
        genero: 'Feminino',
        dataDeNascimento: new Date(1989, 6, 23),
        idade: 34,
        localDeTrabalho: 'Centro de Reabilitação',
        CRM: 753951,
        tipoDeContrato: 'CLT',
        formacao: 'Graduação em Fonoaudiologia',
        senhaProvisoria: 'senha579',
        metas: 180,
        atendimentos: 190,
        eventosP: ""
    },
    {
        nome: 'fernando',
        sobrenome: 'Lopes',
        genero: 'Masculino',
        dataDeNascimento: new Date(1996, 11, 5),
        idade: 26,
        localDeTrabalho: 'Laboratório de Pesquisa',
        CRM: 987654,
        tipoDeContrato: 'PJ',
        formacao: 'Pós-Graduação em Pesquisa Médica',
        senhaProvisoria: 'senha690',
        metas: 200,
        atendimentos: 200,
        eventosP: ""
    },
    {
        nome: 'marina',
        sobrenome: 'Ferreira',
        genero: 'Feminino',
        dataDeNascimento: new Date(1992, 5, 20),
        idade: 31,
        localDeTrabalho: 'Hospital Municipal',
        CRM: 135792,
        tipoDeContrato: 'CLT',
        formacao: 'Graduação em Psicologia',
        senhaProvisoria: 'senha246',
        metas: 180,
        atendimentos: 190,
        eventosP: ""
    },
    {
        nome: 'pedro',
        sobrenome: 'Pereira',
        genero: 'Masculino',
        dataDeNascimento: new Date(1980, 11, 8),
        idade: 42,
        localDeTrabalho: 'Clínica Ortopédica',
        CRM: 369258,
        tipoDeContrato: 'PJ',
        formacao: 'Pós-Graduação em Fisioterapia',
        senhaProvisoria: 'senha135',
        metas: 200,
        atendimentos: 180,
        eventosP: ""
    },
    {
        nome: 'lucia',
        sobrenome: 'Ribeiro',
        genero: 'Feminino',
        dataDeNascimento: new Date(1987, 9, 12),
        idade: 35,
        localDeTrabalho: 'Laboratório de Análises',
        CRM: 753159,
        tipoDeContrato: 'CLT',
        formacao: 'Graduação em Biomedicina',
        senhaProvisoria: 'senha789',
        metas: 190,
        atendimentos: 200,
        eventosP: ""
    },
    {
        nome: 'roberto',
        sobrenome: 'Almeida',
        genero: 'Masculino',
        dataDeNascimento: new Date(1993, 4, 30),
        idade: 28,
        localDeTrabalho: 'Centro de Saúde',
        CRM: 951753,
        tipoDeContrato: 'PJ',
        formacao: 'Pós-Graduação em Nutrição',
        senhaProvisoria: 'senha246',
        metas: 200,
        atendimentos: 200,
        eventosP: ""
    },
    // ... (repeat the pattern for 4 more entries)
]

;

(async () => {
    for (let gestor of gestors) {
        await GestorModel.create({
            nome: gestor.nome,
            sobrenome: gestor.sobrenome,
            idade: gestor.idade,
            genero: gestor.genero,
            dataDeNascimento: gestor.dataDeNascimento,
            localDeTrabalho: gestor.localDeTrabalho,
            CRM: gestor.CRM,
            tipoDeContrato: gestor.tipoDeContrato,
            formacao: gestor.formacao,
            senhaProvisoria: gestor.senhaProvisoria,
            metas: gestor.metas,
            atendimentos: gestor.vendas,
            eventosP: gestor.eventosP
        });
    }
    console.log('Tudo os gestores cadastrado!');
})();
