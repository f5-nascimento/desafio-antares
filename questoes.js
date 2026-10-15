// Banco de questões da simulação Antares. Estrutura JSON-compatible em JavaScript.
const questoes = [
  {
    "id": "F1-Q01",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "enunciado": "Você recebeu uma tarefa de programação com critérios claros e já conhece uma solução segura. O que demonstra autonomia profissional?",
    "alternativas": [
      {
        "texto": "Começar, organizar as etapas e comunicar o progresso conforme combinado.",
        "correta": true
      },
      {
        "texto": "Esperar o líder acompanhar cada linha de código.",
        "correta": false
      },
      {
        "texto": "Alterar os requisitos sem consultar ninguém.",
        "correta": false
      },
      {
        "texto": "Entregar sem testar porque a tarefa parece simples.",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Autonomia é agir dentro dos limites combinados, organizar o trabalho e prestar contas; não significa ignorar requisitos ou dispensar testes."
  },
  {
    "id": "F1-Q02",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "enunciado": "Ao encontrar um erro simples que você sabe investigar, qual é a melhor primeira atitude?",
    "alternativas": [
      {
        "texto": "Apagar o projeto e recomeçar sem avisar.",
        "correta": false
      },
      {
        "texto": "Investigar de forma organizada e pedir ajuda se ultrapassar seu conhecimento ou prazo.",
        "correta": true
      },
      {
        "texto": "Fingir que não viu o erro.",
        "correta": false
      },
      {
        "texto": "Esperar até o último minuto para mencionar o problema.",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "A boa autonomia inclui investigar com método e reconhecer quando é necessário pedir apoio, sem esconder riscos."
  },
  {
    "id": "F1-Q03",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "enunciado": "Uma tarefa depende de acesso a um repositório que você ainda não possui. O que fazer?",
    "alternativas": [
      {
        "texto": "Usar a senha de um colega.",
        "correta": false
      },
      {
        "texto": "Copiar o repositório pessoal de outra pessoa sem autorização.",
        "correta": false
      },
      {
        "texto": "Solicitar o acesso pelo canal adequado e adiantar o que não depende dele.",
        "correta": true
      },
      {
        "texto": "Marcar a tarefa como concluída.",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "A conduta correta combina respeito aos controles de acesso com iniciativa para avançar no que for possível."
  },
  {
    "id": "F1-Q04",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "enunciado": "Você percebe que não conseguirá terminar uma tarefa no prazo combinado. Como agir?",
    "alternativas": [
      {
        "texto": "Avisar cedo, explicar o impacto e propor um plano realista.",
        "correta": true
      },
      {
        "texto": "Ficar em silêncio até o prazo vencer.",
        "correta": false
      },
      {
        "texto": "Afirmar que terminou sem verificar.",
        "correta": false
      },
      {
        "texto": "Culpar automaticamente outro integrante.",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Comunicar riscos com antecedência permite renegociar prioridades e buscar soluções antes que o atraso afete a equipe."
  },
  {
    "id": "F1-Q05",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "enunciado": "A documentação da tarefa está incompleta e há duas interpretações possíveis. Qual atitude é mais adequada?",
    "alternativas": [
      {
        "texto": "Escolher qualquer interpretação e não registrar a decisão.",
        "correta": false
      },
      {
        "texto": "Pedir esclarecimento ao responsável e documentar o entendimento acordado.",
        "correta": true
      },
      {
        "texto": "Paralisar todo o projeto sem comunicar o motivo.",
        "correta": false
      },
      {
        "texto": "Mudar o objetivo do produto por conta própria.",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Quando há ambiguidade relevante, esclarecer e registrar o acordo evita retrabalho e decisões incompatíveis."
  },
  {
    "id": "F1-Q06",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "enunciado": "Durante uma reunião, uma colega discorda da sua proposta técnica. Qual resposta favorece a colaboração?",
    "alternativas": [
      {
        "texto": "Interromper e dizer que ela não entende do assunto.",
        "correta": false
      },
      {
        "texto": "Ignorar todos os comentários dela.",
        "correta": false
      },
      {
        "texto": "Ouvir os argumentos, explicar os seus e comparar evidências.",
        "correta": true
      },
      {
        "texto": "Levar a discordância para uma discussão pessoal.",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Discordâncias devem ser tratadas com escuta, respeito e evidências, mantendo o foco no problema e não na pessoa."
  },
  {
    "id": "F1-Q07",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "enunciado": "Você percebe que sua mensagem no chat foi interpretada como grosseira. O que fazer?",
    "alternativas": [
      {
        "texto": "Esclarecer a intenção, reconhecer o impacto e reformular com respeito.",
        "correta": true
      },
      {
        "texto": "Apagar a mensagem e fingir que nada ocorreu.",
        "correta": false
      },
      {
        "texto": "Responder com mais agressividade.",
        "correta": false
      },
      {
        "texto": "Exigir que todos aceitem seu jeito de escrever.",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Comunicação profissional exige atenção ao impacto da mensagem e disposição para corrigir mal-entendidos."
  },
  {
    "id": "F1-Q08",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "enunciado": "Um colega está com dificuldade em uma parte do sistema que você já domina. Como colaborar sem prejudicar suas entregas?",
    "alternativas": [
      {
        "texto": "Fazer piadas sobre a dificuldade dele.",
        "correta": false
      },
      {
        "texto": "Resolver tudo escondido para mostrar que é melhor.",
        "correta": false
      },
      {
        "texto": "Recusar qualquer conversa porque cada um tem sua tarefa.",
        "correta": false
      },
      {
        "texto": "Combinar um momento breve para orientar e alinhar prioridades com a equipe.",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Compartilhar conhecimento ajuda a equipe; combinar tempo e prioridades mantém a colaboração sustentável."
  },
  {
    "id": "F1-Q09",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "enunciado": "Em uma revisão de código, você recebe uma sugestão que melhora a legibilidade. Qual reação é mais profissional?",
    "alternativas": [
      {
        "texto": "Rejeitar toda sugestão por orgulho.",
        "correta": false
      },
      {
        "texto": "Avaliar a sugestão pelo mérito e agradecer a contribuição útil.",
        "correta": true
      },
      {
        "texto": "Aceitar sem entender e nunca perguntar.",
        "correta": false
      },
      {
        "texto": "Criticar publicamente quem sugeriu.",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Feedback técnico deve ser avaliado pelo mérito, sem transformar a revisão em disputa pessoal."
  },
  {
    "id": "F1-Q10",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "enunciado": "Dois integrantes discordam sobre a divisão de tarefas. Qual caminho tende a ser mais produtivo?",
    "alternativas": [
      {
        "texto": "Deixar o conflito crescer até alguém desistir.",
        "correta": false
      },
      {
        "texto": "Pedir que a pessoa com menos experiência sempre ceda.",
        "correta": false
      },
      {
        "texto": "Retomar objetivo, capacidades, carga de trabalho e negociar uma divisão clara.",
        "correta": true
      },
      {
        "texto": "Distribuir tarefas aleatoriamente sem conversar.",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Uma negociação justa considera objetivos, competências e capacidade disponível e termina com responsabilidades explícitas."
  },
  {
    "id": "F1-Q11",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "enunciado": "Você nota que uma pessoa quase nunca consegue falar nas reuniões. O que pode fazer?",
    "alternativas": [
      {
        "texto": "Criar espaço para que ela contribua e ouvir sem interromper.",
        "correta": true
      },
      {
        "texto": "Concluir que ela não tem ideias.",
        "correta": false
      },
      {
        "texto": "Falar por ela sem perguntar.",
        "correta": false
      },
      {
        "texto": "Encerrar as reuniões mais rapidamente sem considerar o grupo.",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Inclusão e escuta ativa ajudam a equipe a aproveitar diferentes perspectivas."
  },
  {
    "id": "F1-Q12",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "enunciado": "Um erro foi cometido por um integrante e afetou o trabalho coletivo. Qual abordagem é mais adequada?",
    "alternativas": [
      {
        "texto": "Expor a pessoa no grupo para servir de exemplo.",
        "correta": false
      },
      {
        "texto": "Esconder o erro mesmo que afete o cliente.",
        "correta": false
      },
      {
        "texto": "Buscar culpados antes de entender o ocorrido.",
        "correta": false
      },
      {
        "texto": "Corrigir o impacto, entender a causa e combinar prevenção sem humilhar ninguém.",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "A equipe deve corrigir o problema, aprender com a causa e prevenir recorrências com respeito e responsabilidade."
  },
  {
    "id": "F1-Q13",
    "fase": 1,
    "subconhecimento": "Relação com o líder",
    "enunciado": "O líder define uma prioridade, mas você percebe um risco técnico importante. O que fazer?",
    "alternativas": [
      {
        "texto": "Ignorar a prioridade sem avisar.",
        "correta": false
      },
      {
        "texto": "Apresentar o risco com evidências e sugerir opções para decidir em conjunto.",
        "correta": true
      },
      {
        "texto": "Criticar o líder para toda a equipe.",
        "correta": false
      },
      {
        "texto": "Continuar calado mesmo se houver risco grave.",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Uma relação profissional inclui transparência, comunicação respeitosa e alternativas concretas para apoiar decisões."
  },
  {
    "id": "F1-Q14",
    "fase": 1,
    "subconhecimento": "Relação com o líder",
    "enunciado": "Você não entendeu o critério de aceite de uma tarefa. Qual é a melhor atitude?",
    "alternativas": [
      {
        "texto": "Entregar qualquer coisa para cumprir o prazo.",
        "correta": false
      },
      {
        "texto": "Perguntar somente depois de a tarefa ser rejeitada.",
        "correta": false
      },
      {
        "texto": "Solicitar esclarecimento e confirmar o entendimento antes de avançar demais.",
        "correta": true
      },
      {
        "texto": "Pedir a outro colega que invente o requisito.",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Confirmar critérios de aceite reduz retrabalho e alinha expectativas entre quem solicita e quem executa."
  },
  {
    "id": "F1-Q15",
    "fase": 1,
    "subconhecimento": "Relação com o líder",
    "enunciado": "Ao finalizar uma atividade, como deve prestar contas ao líder?",
    "alternativas": [
      {
        "texto": "Informar o que foi feito, os testes realizados, pendências e riscos conhecidos.",
        "correta": true
      },
      {
        "texto": "Dizer apenas 'pronto', mesmo sem testar.",
        "correta": false
      },
      {
        "texto": "Enviar dezenas de mensagens sem organização.",
        "correta": false
      },
      {
        "texto": "Esperar que o líder descubra o estado pelo código.",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Um relato objetivo permite avaliar o resultado, compreender limitações e decidir os próximos passos."
  },
  {
    "id": "F1-Q16",
    "fase": 1,
    "subconhecimento": "Relação com o líder",
    "enunciado": "O líder dá um feedback apontando que suas estimativas estão otimistas demais. Como responder?",
    "alternativas": [
      {
        "texto": "Argumentar que estimativas nunca podem ser discutidas.",
        "correta": false
      },
      {
        "texto": "Ignorar o comentário.",
        "correta": false
      },
      {
        "texto": "Prometer prazos ainda menores para provar seu valor.",
        "correta": false
      },
      {
        "texto": "Pedir exemplos, revisar as estimativas e acompanhar o que causou as diferenças.",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Feedback é uma oportunidade para ajustar o método, aprender com dados e melhorar previsibilidade."
  },
  {
    "id": "F1-Q17",
    "fase": 1,
    "subconhecimento": "Relação com o líder",
    "enunciado": "Você recebeu duas tarefas urgentes de pessoas diferentes. O que fazer?",
    "alternativas": [
      {
        "texto": "Executar a que parece mais fácil e não avisar ninguém.",
        "correta": false
      },
      {
        "texto": "Expor o conflito de prioridades ao líder ou responsáveis e alinhar a ordem de execução.",
        "correta": true
      },
      {
        "texto": "Fazer as duas ao mesmo tempo sem avaliar capacidade.",
        "correta": false
      },
      {
        "texto": "Escolher uma e abandonar a outra sem comunicar.",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Prioridades concorrentes precisam ser alinhadas com quem tem responsabilidade de decisão, considerando impacto e prazo."
  },
  {
    "id": "F1-Q18",
    "fase": 1,
    "subconhecimento": "Relação com o líder",
    "enunciado": "Você discorda de uma decisão da liderança depois de apresentar seus argumentos. Qual conduta é mais profissional?",
    "alternativas": [
      {
        "texto": "Sabotar a decisão discretamente.",
        "correta": false
      },
      {
        "texto": "Desrespeitar publicamente quem decidiu.",
        "correta": false
      },
      {
        "texto": "Registrar riscos relevantes, seguir o encaminhamento legítimo e sinalizar se surgirem novos fatos.",
        "correta": true
      },
      {
        "texto": "Ocultar informações para provar que estava certo.",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "É possível discordar respeitosamente; depois da decisão, deve-se agir profissionalmente sem esconder riscos ou sabotar o trabalho."
  },
  {
    "id": "F1-Q19",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "enunciado": "Você terminou sua parte antes do prazo, mas a integração da equipe está atrasada. O que fazer?",
    "alternativas": [
      {
        "texto": "Oferecer apoio, consultar as prioridades e ajudar sem assumir mudanças sem alinhamento.",
        "correta": true
      },
      {
        "texto": "Ficar sem fazer nada e não avisar.",
        "correta": false
      },
      {
        "texto": "Modificar diretamente o código de todos sem combinar.",
        "correta": false
      },
      {
        "texto": "Cobrar os colegas com ironias no chat.",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Iniciativa útil é ajudar onde há necessidade, mantendo coordenação e respeitando o trabalho dos demais."
  },
  {
    "id": "F1-Q20",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "enunciado": "Um colega compartilha uma ideia incompleta. Como dar uma contribuição construtiva?",
    "alternativas": [
      {
        "texto": "Dizer que a ideia é inútil.",
        "correta": false
      },
      {
        "texto": "Tomar a ideia para si e apresentar como própria.",
        "correta": false
      },
      {
        "texto": "Não comentar para evitar qualquer conversa.",
        "correta": false
      },
      {
        "texto": "Reconhecer o ponto positivo e fazer perguntas ou sugestões específicas para desenvolvê-la.",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Uma contribuição construtiva preserva o respeito e acrescenta sugestões específicas que ajudam a ideia a evoluir."
  },
  {
    "id": "F2-Q01",
    "fase": 2,
    "subconhecimento": "Ergonomia",
    "enunciado": "Você vai configurar uma estação para programar por várias horas. Qual ajuste é mais adequado?",
    "alternativas": [
      {
        "texto": "Deixar o monitor muito abaixo da linha de visão.",
        "correta": false
      },
      {
        "texto": "Ajustar cadeira e monitor para postura confortável, tela aproximadamente à altura dos olhos e pés apoiados.",
        "correta": true
      },
      {
        "texto": "Trabalhar sempre com os ombros elevados.",
        "correta": false
      },
      {
        "texto": "Usar a cadeira mais alta possível, mesmo sem apoio para os pés.",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "A ergonomia busca adequar o posto à pessoa, mantendo postura neutra, apoio e conforto; os ajustes variam conforme cada trabalhador."
  },
  {
    "id": "F2-Q02",
    "fase": 2,
    "subconhecimento": "Ergonomia",
    "enunciado": "O monitor está provocando reflexos e você precisa inclinar o pescoço para ler. O que fazer?",
    "alternativas": [
      {
        "texto": "Aumentar o brilho ao máximo e manter a posição.",
        "correta": false
      },
      {
        "texto": "Ignorar o desconforto.",
        "correta": false
      },
      {
        "texto": "Reposicionar a tela e ajustar iluminação, distância e altura para reduzir reflexos e esforço visual.",
        "correta": true
      },
      {
        "texto": "Aproximar o rosto até encostar na tela.",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Ajustar posicionamento e iluminação reduz reflexos e posturas forçadas; desconfortos persistentes devem ser comunicados."
  },
  {
    "id": "F2-Q03",
    "fase": 2,
    "subconhecimento": "Pausas e saúde",
    "enunciado": "Depois de um longo período codificando, você percebe fadiga visual e tensão. Qual prática ajuda?",
    "alternativas": [
      {
        "texto": "Fazer pausas regulares, mudar de postura e alternar o foco visual.",
        "correta": true
      },
      {
        "texto": "Permanecer imóvel até concluir tudo.",
        "correta": false
      },
      {
        "texto": "Aumentar o tempo de tela sem interrupção.",
        "correta": false
      },
      {
        "texto": "Ignorar os sintomas porque trabalhar com TI sempre dói.",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Pausas, variação postural e descanso visual ajudam a reduzir fadiga; sintomas persistentes merecem avaliação e comunicação."
  },
  {
    "id": "F2-Q04",
    "fase": 2,
    "subconhecimento": "Organização do posto",
    "enunciado": "Cabos de energia atravessam a área de circulação do laboratório. Qual é a atitude correta?",
    "alternativas": [
      {
        "texto": "Cobri-los com papel solto.",
        "correta": false
      },
      {
        "texto": "Pedir que todos pulem os cabos.",
        "correta": false
      },
      {
        "texto": "Deixar como está se os computadores funcionam.",
        "correta": false
      },
      {
        "texto": "Sinalizar o risco e providenciar organização segura dos cabos conforme os procedimentos do local.",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Cabos em áreas de passagem podem causar tropeços e outros acidentes; devem ser organizados de forma segura, sem improvisos perigosos."
  },
  {
    "id": "F2-Q05",
    "fase": 2,
    "subconhecimento": "Segurança elétrica",
    "enunciado": "Um computador apresenta cheiro de queimado. O que você deve fazer?",
    "alternativas": [
      {
        "texto": "Abrir a fonte de alimentação para investigar sem autorização.",
        "correta": false
      },
      {
        "texto": "Interromper o uso, afastar-se do risco e avisar o responsável para seguir o procedimento seguro.",
        "correta": true
      },
      {
        "texto": "Jogar água no equipamento.",
        "correta": false
      },
      {
        "texto": "Continuar usando até ele desligar.",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Cheiro de queimado pode indicar falha elétrica. Não se deve abrir equipamento energizado nem aplicar água; acione o procedimento de segurança."
  },
  {
    "id": "F2-Q06",
    "fase": 2,
    "subconhecimento": "Normas e procedimentos",
    "enunciado": "Para que servem normas e procedimentos de segurança no ambiente de trabalho?",
    "alternativas": [
      {
        "texto": "Para substituir todo treinamento prático.",
        "correta": false
      },
      {
        "texto": "Para serem consultados apenas depois de um acidente.",
        "correta": false
      },
      {
        "texto": "Para orientar medidas de prevenção e reduzir riscos no trabalho.",
        "correta": true
      },
      {
        "texto": "Para permitir que cada pessoa escolha qualquer procedimento.",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Normas e procedimentos estabelecem orientações de prevenção e responsabilidades; devem ser aplicados junto à capacitação e às condições reais do trabalho."
  },
  {
    "id": "F2-Q07",
    "fase": 2,
    "subconhecimento": "Riscos ocupacionais",
    "enunciado": "Qual situação é um exemplo de risco ergonômico em um escritório de desenvolvimento?",
    "alternativas": [
      {
        "texto": "Postura desconfortável mantida por muito tempo e mobiliário mal ajustado.",
        "correta": true
      },
      {
        "texto": "Um arquivo de código com nome longo.",
        "correta": false
      },
      {
        "texto": "Uma atualização de software concluída.",
        "correta": false
      },
      {
        "texto": "Uma reunião com pauta definida.",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Posturas inadequadas, repetitividade e organização desfavorável do trabalho podem gerar riscos ergonômicos."
  },
  {
    "id": "F2-Q08",
    "fase": 2,
    "subconhecimento": "Acessibilidade e ergonomia",
    "enunciado": "Uma pessoa da equipe relata que a configuração padrão da estação não atende às suas necessidades. Qual conduta é melhor?",
    "alternativas": [
      {
        "texto": "Dizer que todos devem usar o mesmo ajuste.",
        "correta": false
      },
      {
        "texto": "Pedir que ela se adapte sem discutir opções.",
        "correta": false
      },
      {
        "texto": "Ignorar a solicitação até que haja reclamação formal.",
        "correta": false
      },
      {
        "texto": "Conversar sobre as necessidades e buscar ajustes acessíveis e seguros conforme os procedimentos da organização.",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "A estação deve considerar diferenças individuais e acessibilidade, buscando ajustes adequados e seguros."
  },
  {
    "id": "F2-Q09",
    "fase": 2,
    "subconhecimento": "Saúde mental",
    "enunciado": "A carga de tarefas está causando estresse intenso e erros frequentes. O que fazer?",
    "alternativas": [
      {
        "texto": "Esconder a situação para parecer produtivo.",
        "correta": false
      },
      {
        "texto": "Comunicar a sobrecarga, alinhar prioridades e buscar apoio pelos canais disponíveis.",
        "correta": true
      },
      {
        "texto": "Culpar um colega sem conversar.",
        "correta": false
      },
      {
        "texto": "Eliminar todas as pausas para recuperar o atraso.",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Comunicar sobrecarga e negociar prioridades ajuda a reduzir riscos e erros; pedir apoio é uma atitude responsável."
  },
  {
    "id": "F2-Q10",
    "fase": 2,
    "subconhecimento": "Organização do trabalho",
    "enunciado": "Qual prática ajuda a prevenir fadiga durante uma jornada de programação?",
    "alternativas": [
      {
        "texto": "Fazer todas as tarefas sem levantar da cadeira.",
        "correta": false
      },
      {
        "texto": "Trabalhar com iluminação inadequada para economizar energia.",
        "correta": false
      },
      {
        "texto": "Planejar pausas, alternar atividades quando possível e manter o posto ajustado.",
        "correta": true
      },
      {
        "texto": "Manter o volume de fones no máximo o dia inteiro.",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Pausas e alternância de tarefas, combinadas a um posto bem ajustado, contribuem para reduzir fadiga."
  },
  {
    "id": "F2-Q11",
    "fase": 2,
    "subconhecimento": "Segurança de equipamentos",
    "enunciado": "Você precisa limpar um periférico conectado ao computador. Qual é a opção mais segura?",
    "alternativas": [
      {
        "texto": "Seguir as instruções do fabricante e os procedimentos locais, desconectando quando indicado.",
        "correta": true
      },
      {
        "texto": "Aplicar líquido diretamente em equipamentos energizados.",
        "correta": false
      },
      {
        "texto": "Usar qualquer produto químico disponível.",
        "correta": false
      },
      {
        "texto": "Puxar o cabo com força para desconectar.",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "A limpeza deve seguir as instruções do equipamento e os procedimentos de segurança; líquidos e desconexões inadequadas podem causar danos ou acidentes."
  },
  {
    "id": "F2-Q12",
    "fase": 2,
    "subconhecimento": "Incidentes",
    "enunciado": "Um colega quase tropeça em uma caixa deixada no corredor. Mesmo sem lesão, o que fazer?",
    "alternativas": [
      {
        "texto": "Não fazer nada porque não houve acidente.",
        "correta": false
      },
      {
        "texto": "Mover a caixa para outro corredor sem avaliar o risco.",
        "correta": false
      },
      {
        "texto": "Rir do ocorrido e continuar.",
        "correta": false
      },
      {
        "texto": "Eliminar o risco se for seguro e comunicar o incidente conforme o procedimento do local.",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Quase-acidentes revelam perigos que podem causar lesões depois; registrar e corrigir ajuda a prevenir ocorrências."
  },
  {
    "id": "F2-Q13",
    "fase": 2,
    "subconhecimento": "Prevenção",
    "enunciado": "Qual é a diferença entre perigo e risco em segurança do trabalho?",
    "alternativas": [
      {
        "texto": "São palavras sempre idênticas em qualquer contexto.",
        "correta": false
      },
      {
        "texto": "Perigo é uma fonte ou situação com potencial de causar dano; risco considera a possibilidade e a gravidade desse dano.",
        "correta": true
      },
      {
        "texto": "Risco existe apenas quando já ocorreu um acidente.",
        "correta": false
      },
      {
        "texto": "Perigo só existe em fábricas, nunca em escritórios.",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Perigo é o potencial de causar dano; avaliação de risco considera a chance de ocorrer e as consequências."
  },
  {
    "id": "F2-Q14",
    "fase": 2,
    "subconhecimento": "Uso de equipamentos",
    "enunciado": "A cadeira não permite apoiar os pés e a borda pressiona as pernas. Qual é a melhor ação?",
    "alternativas": [
      {
        "texto": "Aceitar a situação porque a cadeira é padrão.",
        "correta": false
      },
      {
        "texto": "Sentar na ponta sem encosto durante todo o dia.",
        "correta": false
      },
      {
        "texto": "Ajustar a cadeira e, se necessário, solicitar apoio para os pés ou outro recurso apropriado.",
        "correta": true
      },
      {
        "texto": "Colocar objetos instáveis sob a cadeira.",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Ajustes devem proporcionar apoio e conforto sem improvisos instáveis; peça recursos adequados se necessário."
  },
  {
    "id": "F2-Q15",
    "fase": 2,
    "subconhecimento": "Segurança digital no posto",
    "enunciado": "Você precisa se afastar da estação compartilhada por alguns minutos. O que fazer?",
    "alternativas": [
      {
        "texto": "Bloquear a sessão ou seguir o procedimento de proteção da estação.",
        "correta": true
      },
      {
        "texto": "Deixar a conta aberta para facilitar ao próximo usuário.",
        "correta": false
      },
      {
        "texto": "Anotar a senha no monitor.",
        "correta": false
      },
      {
        "texto": "Desativar a senha do computador.",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Bloquear a sessão reduz o risco de acesso indevido a dados e sistemas enquanto você está ausente."
  },
  {
    "id": "F2-Q16",
    "fase": 2,
    "subconhecimento": "Normas e comunicação",
    "enunciado": "Você identifica uma condição de trabalho insegura, mas não sabe qual norma se aplica. O que fazer?",
    "alternativas": [
      {
        "texto": "Ignorar o problema até estudar todas as normas.",
        "correta": false
      },
      {
        "texto": "Corrigir por conta própria mesmo sem treinamento.",
        "correta": false
      },
      {
        "texto": "Publicar uma acusação nas redes sociais antes de avisar a equipe.",
        "correta": false
      },
      {
        "texto": "Sinalizar a condição e procurar o responsável de segurança ou canal apropriado para orientação.",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Não é necessário conhecer toda a legislação para comunicar um risco; use os canais adequados e evite intervenções para as quais não tem treinamento."
  },
  {
    "id": "F2-Q17",
    "fase": 2,
    "subconhecimento": "Bem-estar",
    "enunciado": "Qual atitude demonstra uma cultura de segurança madura?",
    "alternativas": [
      {
        "texto": "Considerar pausas um sinal de fraqueza.",
        "correta": false
      },
      {
        "texto": "Relatar riscos e incidentes sem medo de humilhação, buscando prevenção e melhoria.",
        "correta": true
      },
      {
        "texto": "Premiar quem esconde problemas para manter indicadores positivos.",
        "correta": false
      },
      {
        "texto": "Tratar acidentes como inevitáveis.",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Uma cultura preventiva incentiva comunicação, aprendizado e correção dos riscos, em vez de esconder problemas."
  },
  {
    "id": "F2-Q18",
    "fase": 2,
    "subconhecimento": "Ergonomia",
    "enunciado": "Ao usar notebook por muitas horas, qual solução tende a melhorar a ergonomia?",
    "alternativas": [
      {
        "texto": "Usar o notebook no colo o dia inteiro.",
        "correta": false
      },
      {
        "texto": "Digitar com os punhos dobrados para cima.",
        "correta": false
      },
      {
        "texto": "Quando possível, elevar a tela e usar teclado e mouse externos, ajustando a postura.",
        "correta": true
      },
      {
        "texto": "Deixar a tela lateral e torcer o pescoço.",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Elevar a tela e usar periféricos externos permite posicionar melhor cabeça, braços e punhos durante uso prolongado."
  },
  {
    "id": "F2-Q19",
    "fase": 2,
    "subconhecimento": "Gestão de riscos",
    "enunciado": "Um equipamento tem fio danificado. Qual ação é adequada?",
    "alternativas": [
      {
        "texto": "Retirar de uso e comunicar o responsável para reparo ou substituição segura.",
        "correta": true
      },
      {
        "texto": "Enrolar fita qualquer e continuar usando sem autorização.",
        "correta": false
      },
      {
        "texto": "Pedir a um colega para segurar o fio.",
        "correta": false
      },
      {
        "texto": "Usar somente quando ninguém estiver olhando.",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Equipamento com fio danificado deve ser retirado de uso e avaliado por pessoa autorizada; improvisos podem provocar choque ou incêndio."
  },
  {
    "id": "F2-Q20",
    "fase": 2,
    "subconhecimento": "Saúde e rotina",
    "enunciado": "Uma pessoa sente dor recorrente durante o trabalho no computador. Qual resposta é mais responsável?",
    "alternativas": [
      {
        "texto": "Recomendar que ignore até as férias.",
        "correta": false
      },
      {
        "texto": "Diagnosticar a causa sem formação profissional.",
        "correta": false
      },
      {
        "texto": "Dizer que dor é inevitável para programadores.",
        "correta": false
      },
      {
        "texto": "Orientar a comunicar o problema e procurar avaliação adequada, além de revisar as condições de trabalho.",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Sintomas recorrentes não devem ser normalizados; avaliação apropriada e revisão do posto podem ajudar a identificar medidas preventivas."
  },
  {
    "id": "F3-Q01",
    "fase": 3,
    "subconhecimento": "Propriedade intelectual",
    "enunciado": "Você encontra na internet uma biblioteca de código que resolveria um problema da Antares. O que deve verificar antes de incorporá-la?",
    "alternativas": [
      {
        "texto": "Somente se o código compila.",
        "correta": false
      },
      {
        "texto": "A licença, as condições de uso e as obrigações de atribuição ou distribuição.",
        "correta": true
      },
      {
        "texto": "Se o autor tem muitos seguidores.",
        "correta": false
      },
      {
        "texto": "Nada, porque todo código público é livre para qualquer finalidade.",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Código disponível publicamente não é automaticamente livre de restrições; é necessário verificar licença e condições de uso."
  },
  {
    "id": "F3-Q02",
    "fase": 3,
    "subconhecimento": "Licenciamento de software",
    "enunciado": "O que uma licença de software normalmente define?",
    "alternativas": [
      {
        "texto": "Que o usuário pode ignorar direitos autorais.",
        "correta": false
      },
      {
        "texto": "Que todo programa pode ser vendido sem condições.",
        "correta": false
      },
      {
        "texto": "As permissões, restrições e obrigações para usar, modificar ou distribuir o software.",
        "correta": true
      },
      {
        "texto": "Que o software não precisa de segurança.",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "A licença estabelece condições jurídicas de uso, modificação e distribuição, conforme o modelo escolhido pelo titular."
  },
  {
    "id": "F3-Q03",
    "fase": 3,
    "subconhecimento": "Direitos autorais",
    "enunciado": "Um colega copia para seu projeto um trecho substancial de código proprietário de outro fornecedor sem autorização. Qual é a preocupação principal?",
    "alternativas": [
      {
        "texto": "Pode haver violação de direitos autorais, contrato ou licença; é preciso interromper e buscar uma alternativa autorizada.",
        "correta": true
      },
      {
        "texto": "Não há problema se o nome das variáveis for alterado.",
        "correta": false
      },
      {
        "texto": "A cópia é sempre permitida para fins educacionais ou comerciais.",
        "correta": false
      },
      {
        "texto": "Só existe problema se o código for publicado em redes sociais.",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Alterar nomes não elimina os direitos sobre a expressão original; deve-se verificar autorização e licença e usar material permitido."
  },
  {
    "id": "F3-Q04",
    "fase": 3,
    "subconhecimento": "Licenciamento de software",
    "enunciado": "A equipe pretende usar um pacote open source em um produto comercial. Qual afirmação é correta?",
    "alternativas": [
      {
        "texto": "Software open source nunca pode ser usado comercialmente.",
        "correta": false
      },
      {
        "texto": "Open source significa que não há licença.",
        "correta": false
      },
      {
        "texto": "Qualquer licença permite qualquer uso sem obrigação.",
        "correta": false
      },
      {
        "texto": "É necessário ler a licença específica e cumprir suas condições, que podem permitir uso comercial.",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Muitas licenças open source permitem uso comercial, mas as obrigações variam; a licença concreta deve ser analisada."
  },
  {
    "id": "F3-Q05",
    "fase": 3,
    "subconhecimento": "Propriedade intelectual",
    "enunciado": "Um desenvolvedor criou um código durante um projeto da empresa. Qual é a atitude correta antes de reutilizá-lo em um trabalho externo?",
    "alternativas": [
      {
        "texto": "Publicá-lo imediatamente em um repositório pessoal.",
        "correta": false
      },
      {
        "texto": "Verificar contrato, políticas internas e direitos aplicáveis antes de reutilizar ou divulgar o código.",
        "correta": true
      },
      {
        "texto": "Assumir que todo código pertence sempre ao programador individual.",
        "correta": false
      },
      {
        "texto": "Remover o logotipo e considerar o código sem titular.",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "A titularidade e as permissões podem depender da legislação, do contrato e das circunstâncias de criação; não se deve presumir autorização."
  },
  {
    "id": "F3-Q06",
    "fase": 3,
    "subconhecimento": "Licenciamento de software",
    "enunciado": "Uma biblioteca exige que avisos de copyright e texto da licença acompanhem a distribuição. O que fazer?",
    "alternativas": [
      {
        "texto": "Remover os avisos para deixar o produto mais limpo.",
        "correta": false
      },
      {
        "texto": "Manter os avisos apenas se o cliente perguntar.",
        "correta": false
      },
      {
        "texto": "Incluir os avisos e cumprir as obrigações de distribuição da licença.",
        "correta": true
      },
      {
        "texto": "Ignorar porque o programa final é pago.",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Se a licença exige preservação de avisos ou inclusão do texto, essas condições devem ser cumpridas inclusive em produto comercial."
  },
  {
    "id": "F3-Q07",
    "fase": 3,
    "subconhecimento": "LGPD e dados pessoais",
    "enunciado": "A equipe quer usar nomes, e-mails e telefones reais de clientes em um ambiente de teste. Qual é a melhor prática?",
    "alternativas": [
      {
        "texto": "Preferir dados fictícios ou anonimizados e seguir as regras de proteção de dados e acesso.",
        "correta": true
      },
      {
        "texto": "Copiar todos os dados porque o ambiente é interno.",
        "correta": false
      },
      {
        "texto": "Enviar os dados para uma conta pessoal para facilitar o teste.",
        "correta": false
      },
      {
        "texto": "Deixar os dados disponíveis a toda a turma.",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Ambientes de teste devem minimizar a exposição de dados pessoais, preferindo dados fictícios ou anonimizados e controles apropriados."
  },
  {
    "id": "F3-Q08",
    "fase": 3,
    "subconhecimento": "LGPD e dados pessoais",
    "enunciado": "Um aluno pede para saber por que seu aplicativo coleta localização. Qual resposta é mais adequada para um produto responsável?",
    "alternativas": [
      {
        "texto": "Dizer que aplicativos sempre podem coletar tudo.",
        "correta": false
      },
      {
        "texto": "Ocultar a função nas configurações.",
        "correta": false
      },
      {
        "texto": "Responder que o assunto não importa se o aplicativo é gratuito.",
        "correta": false
      },
      {
        "texto": "Explicar a finalidade, a base e as condições de tratamento de forma clara, coletando apenas o necessário e respeitando os direitos aplicáveis.",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Transparência, finalidade e minimização são princípios importantes; o tratamento deve ter fundamento válido e respeitar os direitos dos titulares."
  },
  {
    "id": "F3-Q09",
    "fase": 3,
    "subconhecimento": "Segurança digital",
    "enunciado": "Você recebe um e-mail inesperado pedindo sua senha para evitar o bloqueio da conta. O que fazer?",
    "alternativas": [
      {
        "texto": "Responder com a senha para evitar problemas.",
        "correta": false
      },
      {
        "texto": "Não compartilhar credenciais, verificar o pedido por canal oficial e reportar possível phishing.",
        "correta": true
      },
      {
        "texto": "Encaminhar a mensagem a todos os colegas para que testem.",
        "correta": false
      },
      {
        "texto": "Clicar no link e preencher dados fictícios.",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Pedidos inesperados de senha são um sinal de alerta; verifique por canal oficial e reporte a tentativa suspeita."
  },
  {
    "id": "F3-Q10",
    "fase": 3,
    "subconhecimento": "IA responsável",
    "enunciado": "Uma ferramenta de IA gera código para uma funcionalidade da Antares. Qual prática é responsável?",
    "alternativas": [
      {
        "texto": "Aceitar o código sem ler porque a IA conhece todas as regras.",
        "correta": false
      },
      {
        "texto": "Enviar credenciais e dados de clientes ao prompt para obter melhor resposta.",
        "correta": false
      },
      {
        "texto": "Revisar o código, testar, verificar segurança e licença e não inserir dados confidenciais sem autorização.",
        "correta": true
      },
      {
        "texto": "Atribuir à IA toda responsabilidade por falhas.",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Código gerado por IA precisa de revisão humana, testes e verificação de segurança e de direitos; dados confidenciais exigem cuidado."
  },
  {
    "id": "F3-Q11",
    "fase": 3,
    "subconhecimento": "IA responsável",
    "enunciado": "A IA sugere uma solução e afirma que uma biblioteca tem licença permissiva, mas não apresenta fonte confiável. O que fazer?",
    "alternativas": [
      {
        "texto": "Verificar a licença na fonte oficial do projeto antes de usar.",
        "correta": true
      },
      {
        "texto": "Confiar na resposta porque está escrita com segurança.",
        "correta": false
      },
      {
        "texto": "Ignorar qualquer obrigação de licença.",
        "correta": false
      },
      {
        "texto": "Publicar o código primeiro e investigar depois.",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Ferramentas de IA podem errar; informações jurídicas e de licenciamento devem ser conferidas em fontes oficiais ou confiáveis."
  },
  {
    "id": "F3-Q12",
    "fase": 3,
    "subconhecimento": "Segurança e privacidade",
    "enunciado": "Um colega pede que você envie um arquivo de produção com dados de usuários para uma ferramenta online não aprovada. Qual é a melhor resposta?",
    "alternativas": [
      {
        "texto": "Enviar porque o colega trabalha na mesma equipe.",
        "correta": false
      },
      {
        "texto": "Remover apenas o nome do arquivo e enviar.",
        "correta": false
      },
      {
        "texto": "Compactar o arquivo com senha simples e enviar.",
        "correta": false
      },
      {
        "texto": "Não enviar; verificar a política interna e buscar uma alternativa autorizada com dados minimizados ou fictícios.",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "O fato de um colega solicitar não autoriza compartilhar dados; é necessário seguir políticas e usar ferramentas aprovadas."
  },
  {
    "id": "F3-Q13",
    "fase": 3,
    "subconhecimento": "Propriedade intelectual",
    "enunciado": "Você quer usar uma imagem encontrada em um buscador na tela de login do sistema. O que deve fazer?",
    "alternativas": [
      {
        "texto": "Usar qualquer imagem porque apareceu na busca.",
        "correta": false
      },
      {
        "texto": "Verificar autoria, licença, permissões e condições de atribuição ou obter uma imagem autorizada.",
        "correta": true
      },
      {
        "texto": "Cortar a marca d'água e usar mesmo assim.",
        "correta": false
      },
      {
        "texto": "Acreditar que toda imagem online é de domínio público.",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Resultados de busca não significam autorização; confira a licença e obtenha permissão quando necessário."
  },
  {
    "id": "F3-Q14",
    "fase": 3,
    "subconhecimento": "Licenciamento de software",
    "enunciado": "Qual é uma boa prática para a equipe controlar dependências de terceiros?",
    "alternativas": [
      {
        "texto": "Instalar qualquer pacote sem registrar a origem.",
        "correta": false
      },
      {
        "texto": "Copiar arquivos de fóruns sem revisar.",
        "correta": false
      },
      {
        "texto": "Manter inventário das dependências, versões e licenças e atualizar conforme a política do projeto.",
        "correta": true
      },
      {
        "texto": "Remover o arquivo de licença dos pacotes.",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Inventário de componentes, versões e licenças facilita auditoria, correções de segurança e cumprimento das obrigações."
  },
  {
    "id": "F3-Q15",
    "fase": 3,
    "subconhecimento": "LGPD e incidentes",
    "enunciado": "Você percebe que um arquivo com dados pessoais foi enviado por engano a um destinatário externo. O que fazer?",
    "alternativas": [
      {
        "texto": "Comunicar imediatamente pelo processo interno de incidentes, preservar informações relevantes e seguir as orientações responsáveis.",
        "correta": true
      },
      {
        "texto": "Apagar a mensagem da caixa de saída e não contar a ninguém.",
        "correta": false
      },
      {
        "texto": "Publicar o incidente em rede social.",
        "correta": false
      },
      {
        "texto": "Esperar para ver se alguém reclama.",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Incidentes envolvendo dados pessoais devem ser reportados rapidamente pelos canais internos para permitir avaliação e resposta adequada."
  },
  {
    "id": "F3-Q16",
    "fase": 3,
    "subconhecimento": "Ética e compliance em IA",
    "enunciado": "Um sistema de IA usado para selecionar candidatos parece rejeitar sistematicamente pessoas de um grupo sem justificativa clara. Qual é a atitude correta?",
    "alternativas": [
      {
        "texto": "Manter o sistema porque decisões automatizadas são sempre neutras.",
        "correta": false
      },
      {
        "texto": "Esconder o resultado para evitar questionamentos.",
        "correta": false
      },
      {
        "texto": "Aumentar a automação e remover a revisão humana.",
        "correta": false
      },
      {
        "texto": "Sinalizar o problema, avaliar dados e critérios, testar possíveis vieses e envolver responsáveis antes de continuar o uso.",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Sistemas automatizados podem reproduzir vieses; é necessário investigar, documentar, avaliar impactos e aplicar supervisão apropriada."
  },
  {
    "id": "F3-Q17",
    "fase": 3,
    "subconhecimento": "Segurança digital",
    "enunciado": "Você descobre uma chave de API escrita diretamente em um repositório público. O que fazer?",
    "alternativas": [
      {
        "texto": "Deixar a chave porque o repositório é didático.",
        "correta": false
      },
      {
        "texto": "Revogar ou rotacionar a chave imediatamente, comunicar o incidente e removê-la do código e do histórico conforme o procedimento.",
        "correta": true
      },
      {
        "texto": "Trocar apenas o nome da variável.",
        "correta": false
      },
      {
        "texto": "Esperar até a chave ser usada por alguém.",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Segredos expostos devem ser tratados como comprometidos: revogue/rotacione, comunique e limpe a exposição com o procedimento adequado."
  },
  {
    "id": "F3-Q18",
    "fase": 3,
    "subconhecimento": "Direitos autorais e autoria",
    "enunciado": "Você usou um texto gerado por IA em documentação técnica. Qual cuidado é mais apropriado?",
    "alternativas": [
      {
        "texto": "Assumir que todo texto gerado por IA está automaticamente livre de direitos e de erros.",
        "correta": false
      },
      {
        "texto": "Afirmar que a ferramenta garante a exatidão do conteúdo.",
        "correta": false
      },
      {
        "texto": "Revisar precisão e originalidade, seguir a política da organização e declarar o uso quando exigido.",
        "correta": true
      },
      {
        "texto": "Copiar sem revisão porque a documentação não tem impacto.",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Conteúdo gerado por IA pode conter erros ou semelhanças indevidas; revisão e transparência conforme a política são práticas responsáveis."
  },
  {
    "id": "F3-Q19",
    "fase": 3,
    "subconhecimento": "Licenciamento de software",
    "enunciado": "Um cliente pergunta se pode modificar e redistribuir um software entregue pela Antares. Qual resposta é correta?",
    "alternativas": [
      {
        "texto": "Consultar o contrato e a licença aplicável antes de afirmar quais direitos o cliente possui.",
        "correta": true
      },
      {
        "texto": "Dizer que todo cliente pode redistribuir qualquer software.",
        "correta": false
      },
      {
        "texto": "Dizer que nenhum software pode ser modificado.",
        "correta": false
      },
      {
        "texto": "Responder sem verificar porque todas as licenças são iguais.",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Permissões de modificar e redistribuir dependem da licença e do contrato; a equipe deve confirmar as condições aplicáveis."
  },
  {
    "id": "F3-Q20",
    "fase": 3,
    "subconhecimento": "Compliance e segurança",
    "enunciado": "Ao preparar uma publicação de código no repositório público, o que deve ser verificado?",
    "alternativas": [
      {
        "texto": "Apenas se o README está bonito.",
        "correta": false
      },
      {
        "texto": "Se os nomes das pastas são curtos.",
        "correta": false
      },
      {
        "texto": "Se o código compila no computador do autor.",
        "correta": false
      },
      {
        "texto": "Se há segredos, dados pessoais, componentes de terceiros e materiais cuja publicação não foi autorizada.",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Antes de publicar, verifique segredos, dados pessoais, licenças e autorização para divulgar os componentes e conteúdos."
  }
];
