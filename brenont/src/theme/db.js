export const DATE = {
  sections: {
    aboutMe: {
      title: "Sobre Mim",
      myName: "Breno Nunes",
      intros: ["Desenvolvedor Front-End em busca de conhecimento e experiência"],
      textsExtra: ["Estudo desenvolvimento desde 2018. Estou em busca de uma oportunidade para por meus conhecimentos em prática e aprender cada vez mais."],
      mobileBttText: "Leia Mais"
    },
    skills: {
      title: "Habilidades",
      skillsArr: [
        {
          name: "Javascript",
          value: "65%"
        },
        {
          name: "React.js",
          value: "50%"
        },
        {
          name: "Angular",
          value: "60%"
        },
        {
          name: "Sass",
          value: "60%"
        },
        {
          name: "Git",
          value: "65%"
        },
        {
          name: "Ionic",
          value: "55%"
        },
        {
          name: "HTML",
          value: "75%"
        },
        {
          name: "CSS",
          value: "70%"
        },
        {
          name: "Bootstrap",
          value: "60%"
        }
      ]
    },
    works: {
      title: "Portifólio",
      works: [{
          title: "Sport Friend",
          company: "Estartando Devs",
          img: "../../../assets/img/works/sport-friend.png",
          info: "Plataforma (MVP) que tem o intuito de ser a ponte entre pessoas que queiram fazer alguma atividade em comum. Desenvolvido em React.js",
          text: "Gerenciei a equipe do projeto e também fiz parte do desenvolvimento.",
          date: "Dezembro, 2019",
          url: "https://github.com/estartando-devs/sport-friend",
        },
        {
          title: "Agendamento Rede D'Or São Luiz",
          company: "Rede D'Or São Luiz",
          img: "../../../assets/img/works/rede-dor.png",
          info: "Sistema de agendamento para a empresa Rede D'Or São Luiz em Angular 2+",
          text: "Fiz parte da equipe de desenvolvimento responsável pelo front-end do sistema.",
          date: "Novembro, 2018",
          url: "https://servicos.rededor.com.br/",
        },
        {
          title: "Site Estartando Devs",
          company: "Estartando Devs",
          img: "../../../assets/img/works/devs.png",
          info: "O projeto consiste no desenvolvimento de uma aplicação web para o projeto Estartando Devs, no qual atuo",
          text: false,
          date: "Agosto, 2018",
          url: "http://estartandodevs.com.br/",
        },
        {
          title: "Site General Goods",
          company: "General Goods",
          img: "../../../assets/img/works/general-goods.png",
          info: "Aplicação Web desenvolvida para a empresa General Goods intermediado pelo projeto Estartando Devs",
          text: false,
          date: "Junho, 2018",
          url: "http://www.generalgoods.com.br/",
        },
      ]
    },
    contact: {
      title: "Contate-Me",
      socials: [{
          name: "Email",
          user: "brenontavares@gmail.com",
          url: "mailto:brenontavares@gmail.com",
          img: "../../../assets/img/social/email.png",
        },
        {
          name: "GitHub",
          user: "Brenont",
          url: "https://github.com/Brenont",
          img: "../../../assets/img/social/github.png",
        },
        {
          name: "LinkedIn",
          user: "Breno Nunes",
          url: "https://linkedin.com/in/brenont/",
          img: "../../../assets/img/social/linkedin.png",
        },
      ]
    }
  }
}

export const PAGES = [{
  name: DATE.sections.skills.title,
  route: "#skills",
}, {
  name: DATE.sections.works.title,
  route: "#works",
}, {
  name: DATE.sections.contact.title,
  route: "#contact"
}];
