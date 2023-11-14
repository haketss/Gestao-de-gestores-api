require("../database");

const { EventoModel } = require("../models/evento-model");

const eventos = [
    {
        nome: "Lançamento do Produto X",
        data: new Date(2023, 11, 20),
        adendo: "Evento de lançamento do nosso novo produto X",
    },
    {
        nome: "Reunião Anual",
        data: new Date(2024, 0, 15),
        adendo: "Reunião anual para revisão do desempenho da empresa",
    },
    {
        nome: "Feira de Tecnologia",
        data: new Date(2024, 2, 25),
        adendo: "Participação na feira de tecnologia internacional",
    },
    {
        nome: "Treinamento de Equipe",
        data: new Date(2024, 3, 10),
        adendo: "Treinamento interno para desenvolvimento de habilidades da equipe",
    },
    {
        nome: "Conferência de Negócios",
        data: new Date(2024, 4, 18),
        adendo: "Participação em uma conferência de negócios importante",
    },
    {
        nome: "Evento de Networking",
        data: new Date(2024, 5, 5),
        adendo: "Evento de networking para estabelecer novas parcerias comerciais",
    },
    {
        nome: "Aniversário da Empresa",
        data: new Date(2024, 6, 7),
        adendo: "Celebração do aniversário da nossa empresa",
    },
    {
        nome: "Webinar sobre Produto Y",
        data: new Date(2024, 7, 15),
        adendo: "Webinar para apresentar as características do nosso novo produto Y",
    },
    {
        nome: "Feira de Emprego",
        data: new Date(2024, 8, 20),
        adendo: "Feira de emprego para recrutar novos talentos",
    },
    {
        nome: "Seminário de Inovação",
        data: new Date(2024, 9, 10),
        adendo: "Seminário sobre as últimas tendências e inovações em nosso setor",
    },
    {
        nome: "Lançamento do Relatório Anual",
        data: new Date(2024, 10, 30),
        adendo: "Lançamento do nosso relatório anual de desempenho",
    },
    {
        nome: "Festa de Fim de Ano",
        data: new Date(2024, 11, 20),
        adendo: "Festa de fim de ano para celebrar as conquistas do ano",
    },
    {
        nome: "Workshop de Estratégia",
        data: new Date(2025, 0, 15),
        adendo: "Workshop interno para planejar a estratégia do próximo ano",
    },
    {
        nome: "Treinamento de Equipe",
        data: new Date(2024, 3, 10),
        adendo: "Treinamento interno para desenvolvimento de habilidades da equipe",
    },
    {
        nome: "Conferência de Negócios",
        data: new Date(2024, 4, 18),
        adendo: "Participação em uma conferência de negócios importante",
    },
    {
        nome: "Evento de Networking",
        data: new Date(2024, 5, 5),
        adendo: "Evento de networking para estabelecer novas parcerias comerciais",
    },
    {
        nome: "Aniversário da Empresa",
        data: new Date(2024, 6, 7),
        adendo: "Celebração do aniversário da nossa empresa",
    },
    {
        nome: "Webinar sobre Produto Y",
        data: new Date(2024, 7, 15),
        adendo: "Webinar para apresentar as características do nosso novo produto Y",
    },
    {
        nome: "Feira de Emprego",
        data: new Date(2024, 8, 20),
        adendo: "Feira de emprego para recrutar novos talentos",
    },
    {
        nome: "Seminário de Inovação",
        data: new Date(2024, 9, 10),
        adendo: "Seminário sobre as últimas tendências e inovações em nosso setor",
    },
    {
        nome: "Lançamento do Relatório Anual",
        data: new Date(2024, 10, 30),
        adendo: "Lançamento do nosso relatório anual de desempenho",
    },
    {
        nome: "Festa de Fim de Ano",
        data: new Date(2024, 11, 20),
        adendo: "Festa de fim de ano para celebrar as conquistas do ano",
    },
    {
        nome: "Workshop de Estratégia",
        data: new Date(2025, 0, 15),
        adendo: "Workshop interno para planejar a estratégia do próximo ano",
    },
    {
        nome: "Lançamento do Produto X",
        data: new Date(2023, 11, 20),
        adendo: "Evento de lançamento do nosso novo produto X",
    },
    {
        nome: "Reunião Anual",
        data: new Date(2024, 0, 15),
        adendo: "Reunião anual para revisão do desempenho da empresa",
    },
    {
        nome: "Feira de Tecnologia",
        data: new Date(2024, 2, 25),
        adendo: "Participação na feira de tecnologia internacional",
    },
    {
        nome: "Treinamento de Equipe",
        data: new Date(2024, 3, 10),
        adendo: "Treinamento interno para desenvolvimento de habilidades da equipe",
    },
    {
        nome: "Conferência de Negócios",
        data: new Date(2024, 4, 18),
        adendo: "Participação em uma conferência de negócios importante",
    },
    {
        nome: "Evento de Networking",
        data: new Date(2024, 5, 5),
        adendo: "Evento de networking para estabelecer novas parcerias comerciais",
    },
    {
        nome: "Aniversário da Empresa",
        data: new Date(2024, 6, 7),
        adendo: "Celebração do aniversário da nossa empresa",
    },
    {
        nome: "Webinar sobre Produto Y",
        data: new Date(2024, 7, 15),
        adendo: "Webinar para apresentar as características do nosso novo produto Y",
    },
    {
        nome: "Feira de Emprego",
        data: new Date(2024, 8, 20),
        adendo: "Feira de emprego para recrutar novos talentos",
    },
    {
        nome: "Seminário de Inovação",
        data: new Date(2024, 9, 10),
        adendo: "Seminário sobre as últimas tendências e inovações em nosso setor",
    },
    {
        nome: "Lançamento do Relatório Anual",
        data: new Date(2024, 10, 30),
        adendo: "Lançamento do nosso relatório anual de desempenho",
    },
    {
        nome: "Festa de Fim de Ano",
        data: new Date(2024, 11, 20),
        adendo: "Festa de fim de ano para celebrar as conquistas do ano",
    },
    {
        nome: "Workshop de Estratégia",
        data: new Date(2025, 0, 15),
        adendo: "Workshop interno para planejar a estratégia do próximo ano",
    },
    {
        nome: "Treinamento de Equipe",
        data: new Date(2024, 3, 10),
        adendo: "Treinamento interno para desenvolvimento de habilidades da equipe",
    },
    {
        nome: "Conferência de Negócios",
        data: new Date(2024, 4, 18),
        adendo: "Participação em uma conferência de negócios importante",
    },
    {
        nome: "Evento de Networking",
        data: new Date(2024, 5, 5),
        adendo: "Evento de networking para estabelecer novas parcerias comerciais",
    },
    {
        nome: "Aniversário da Empresa",
        data: new Date(2024, 6, 7),
        adendo: "Celebração do aniversário da nossa empresa",
    },
    {
        nome: "Webinar sobre Produto Y",
        data: new Date(2024, 7, 15),
        adendo: "Webinar para apresentar as características do nosso novo produto Y",
    },
    {
        nome: "Feira de Emprego",
        data: new Date(2024, 8, 20),
        adendo: "Feira de emprego para recrutar novos talentos",
    },
    {
        nome: "Seminário de Inovação",
        data: new Date(2024, 9, 10),
        adendo: "Seminário sobre as últimas tendências e inovações em nosso setor",
    },
    {
        nome: "Lançamento do Relatório Anual",
        data: new Date(2024, 10, 30),
        adendo: "Lançamento do nosso relatório anual de desempenho",
    },
    {
        nome: "Festa de Fim de Ano",
        data: new Date(2024, 11, 20),
        adendo: "Festa de fim de ano para celebrar as conquistas do ano",
    },
    {
        nome: "Workshop de Estratégia",
        data: new Date(2025, 0, 15),
        adendo: "Workshop interno para planejar a estratégia do próximo ano",
    }
    
    
    
];

(async () => {
    for (let evento of eventos) {
        await EventoModel.create({
            nome: evento.nome,
            data: evento.data,
            adendo: evento.adendo,
        });
    }
    console.log("Tudo os eventos cadastrado!");
})();
