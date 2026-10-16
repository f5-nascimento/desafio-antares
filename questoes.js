// Banco de 300 questões da simulação Antares (100 por fase).
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
  },
  {
    "id": "F1-Q021",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "dificuldade": "facil",
    "tema": "estimativa de uma tarefa",
    "enunciado": "Em uma sprint da Antares, você observa estimativa de uma tarefa. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "dividir o trabalho em etapas, estimar o esforço e atualizar o time quando houver mudança",
        "correta": true
      },
      {
        "texto": "esperar instruções para cada pequeno passo",
        "correta": false
      },
      {
        "texto": "prometer terminar sem avaliar o esforço",
        "correta": false
      },
      {
        "texto": "reduzir a qualidade para cumprir o prazo a qualquer custo",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Autonomia envolve planejamento, responsabilidade e comunicação transparente."
  },
  {
    "id": "F1-Q022",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "dificuldade": "facil",
    "tema": "estimativa de uma tarefa",
    "enunciado": "Durante uma entrega do sistema, surge a situação: estimativa de uma tarefa. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "prometer terminar sem avaliar o esforço",
        "correta": false
      },
      {
        "texto": "dividir o trabalho em etapas, estimar o esforço e atualizar o time quando houver mudança",
        "correta": true
      },
      {
        "texto": "reduzir a qualidade para cumprir o prazo a qualquer custo",
        "correta": false
      },
      {
        "texto": "esperar instruções para cada pequeno passo",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Autonomia envolve planejamento, responsabilidade e comunicação transparente."
  },
  {
    "id": "F1-Q023",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "dificuldade": "intermediaria",
    "tema": "estimativa de uma tarefa",
    "enunciado": "Em um projeto colaborativo, a equipe percebe que estimativa de uma tarefa. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "reduzir a qualidade para cumprir o prazo a qualquer custo",
        "correta": false
      },
      {
        "texto": "esperar instruções para cada pequeno passo",
        "correta": false
      },
      {
        "texto": "dividir o trabalho em etapas, estimar o esforço e atualizar o time quando houver mudança",
        "correta": true
      },
      {
        "texto": "prometer terminar sem avaliar o esforço",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Autonomia envolve planejamento, responsabilidade e comunicação transparente."
  },
  {
    "id": "F1-Q024",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "dificuldade": "intermediaria",
    "tema": "estimativa de uma tarefa",
    "enunciado": "No acompanhamento diário da equipe de desenvolvimento, você nota que estimativa de uma tarefa. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "esperar instruções para cada pequeno passo",
        "correta": false
      },
      {
        "texto": "prometer terminar sem avaliar o esforço",
        "correta": false
      },
      {
        "texto": "reduzir a qualidade para cumprir o prazo a qualquer custo",
        "correta": false
      },
      {
        "texto": "dividir o trabalho em etapas, estimar o esforço e atualizar o time quando houver mudança",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Autonomia envolve planejamento, responsabilidade e comunicação transparente."
  },
  {
    "id": "F1-Q025",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "dificuldade": "facil",
    "tema": "erro reproduzível em uma função",
    "enunciado": "Em uma sprint da Antares, você observa erro reproduzível em uma função. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "ocultar o erro até alguém perceber",
        "correta": false
      },
      {
        "texto": "pedir que outra pessoa resolva sem investigar nada",
        "correta": false
      },
      {
        "texto": "alterar várias partes do sistema ao mesmo tempo sem registrar mudanças",
        "correta": false
      },
      {
        "texto": "reproduzir o erro, consultar logs e testar hipóteses antes de pedir apoio específico",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Uma investigação organizada ajuda a entender a causa e torna o pedido de ajuda mais objetivo."
  },
  {
    "id": "F1-Q026",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "dificuldade": "facil",
    "tema": "erro reproduzível em uma função",
    "enunciado": "Durante uma entrega do sistema, surge a situação: erro reproduzível em uma função. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "reproduzir o erro, consultar logs e testar hipóteses antes de pedir apoio específico",
        "correta": true
      },
      {
        "texto": "pedir que outra pessoa resolva sem investigar nada",
        "correta": false
      },
      {
        "texto": "alterar várias partes do sistema ao mesmo tempo sem registrar mudanças",
        "correta": false
      },
      {
        "texto": "ocultar o erro até alguém perceber",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Uma investigação organizada ajuda a entender a causa e torna o pedido de ajuda mais objetivo."
  },
  {
    "id": "F1-Q027",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "dificuldade": "intermediaria",
    "tema": "erro reproduzível em uma função",
    "enunciado": "Em um projeto colaborativo, a equipe percebe que erro reproduzível em uma função. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "alterar várias partes do sistema ao mesmo tempo sem registrar mudanças",
        "correta": false
      },
      {
        "texto": "reproduzir o erro, consultar logs e testar hipóteses antes de pedir apoio específico",
        "correta": true
      },
      {
        "texto": "ocultar o erro até alguém perceber",
        "correta": false
      },
      {
        "texto": "pedir que outra pessoa resolva sem investigar nada",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Uma investigação organizada ajuda a entender a causa e torna o pedido de ajuda mais objetivo."
  },
  {
    "id": "F1-Q028",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "dificuldade": "intermediaria",
    "tema": "erro reproduzível em uma função",
    "enunciado": "No acompanhamento diário da equipe de desenvolvimento, você nota que erro reproduzível em uma função. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "ocultar o erro até alguém perceber",
        "correta": false
      },
      {
        "texto": "pedir que outra pessoa resolva sem investigar nada",
        "correta": false
      },
      {
        "texto": "reproduzir o erro, consultar logs e testar hipóteses antes de pedir apoio específico",
        "correta": true
      },
      {
        "texto": "alterar várias partes do sistema ao mesmo tempo sem registrar mudanças",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Uma investigação organizada ajuda a entender a causa e torna o pedido de ajuda mais objetivo."
  },
  {
    "id": "F1-Q029",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "dificuldade": "facil",
    "tema": "requisito ambíguo em uma história",
    "enunciado": "Em uma sprint da Antares, você observa requisito ambíguo em uma história. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "deixar a tarefa parada indefinidamente sem comunicar",
        "correta": false
      },
      {
        "texto": "escolher uma interpretação e publicar sem avisar",
        "correta": false
      },
      {
        "texto": "registrar a dúvida e alinhar o critério de aceite com a pessoa responsável",
        "correta": true
      },
      {
        "texto": "inventar novos requisitos para facilitar a implementação",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "A autonomia deve respeitar o escopo e buscar alinhamento quando faltam informações."
  },
  {
    "id": "F1-Q030",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "dificuldade": "facil",
    "tema": "requisito ambíguo em uma história",
    "enunciado": "Durante uma entrega do sistema, surge a situação: requisito ambíguo em uma história. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "escolher uma interpretação e publicar sem avisar",
        "correta": false
      },
      {
        "texto": "inventar novos requisitos para facilitar a implementação",
        "correta": false
      },
      {
        "texto": "deixar a tarefa parada indefinidamente sem comunicar",
        "correta": false
      },
      {
        "texto": "registrar a dúvida e alinhar o critério de aceite com a pessoa responsável",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "A autonomia deve respeitar o escopo e buscar alinhamento quando faltam informações."
  },
  {
    "id": "F1-Q031",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "dificuldade": "intermediaria",
    "tema": "requisito ambíguo em uma história",
    "enunciado": "Em um projeto colaborativo, a equipe percebe que requisito ambíguo em uma história. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "registrar a dúvida e alinhar o critério de aceite com a pessoa responsável",
        "correta": true
      },
      {
        "texto": "inventar novos requisitos para facilitar a implementação",
        "correta": false
      },
      {
        "texto": "deixar a tarefa parada indefinidamente sem comunicar",
        "correta": false
      },
      {
        "texto": "escolher uma interpretação e publicar sem avisar",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "A autonomia deve respeitar o escopo e buscar alinhamento quando faltam informações."
  },
  {
    "id": "F1-Q032",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "dificuldade": "intermediaria",
    "tema": "requisito ambíguo em uma história",
    "enunciado": "No acompanhamento diário da equipe de desenvolvimento, você nota que requisito ambíguo em uma história. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "deixar a tarefa parada indefinidamente sem comunicar",
        "correta": false
      },
      {
        "texto": "registrar a dúvida e alinhar o critério de aceite com a pessoa responsável",
        "correta": true
      },
      {
        "texto": "escolher uma interpretação e publicar sem avisar",
        "correta": false
      },
      {
        "texto": "inventar novos requisitos para facilitar a implementação",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "A autonomia deve respeitar o escopo e buscar alinhamento quando faltam informações."
  },
  {
    "id": "F1-Q033",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "dificuldade": "facil",
    "tema": "dependência bloqueada por acesso",
    "enunciado": "Em uma sprint da Antares, você observa dependência bloqueada por acesso. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "usar a conta de um colega para contornar o controle",
        "correta": false
      },
      {
        "texto": "informar o bloqueio, solicitar o acesso pelo canal correto e adiantar tarefas possíveis",
        "correta": true
      },
      {
        "texto": "esperar até o prazo vencer para comentar",
        "correta": false
      },
      {
        "texto": "compartilhar credenciais pessoais com a equipe",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Comunicar bloqueios cedo e seguir os controles de acesso demonstra responsabilidade."
  },
  {
    "id": "F1-Q034",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "dificuldade": "facil",
    "tema": "dependência bloqueada por acesso",
    "enunciado": "Durante uma entrega do sistema, surge a situação: dependência bloqueada por acesso. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "esperar até o prazo vencer para comentar",
        "correta": false
      },
      {
        "texto": "compartilhar credenciais pessoais com a equipe",
        "correta": false
      },
      {
        "texto": "informar o bloqueio, solicitar o acesso pelo canal correto e adiantar tarefas possíveis",
        "correta": true
      },
      {
        "texto": "usar a conta de um colega para contornar o controle",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Comunicar bloqueios cedo e seguir os controles de acesso demonstra responsabilidade."
  },
  {
    "id": "F1-Q035",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "dificuldade": "intermediaria",
    "tema": "dependência bloqueada por acesso",
    "enunciado": "Em um projeto colaborativo, a equipe percebe que dependência bloqueada por acesso. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "compartilhar credenciais pessoais com a equipe",
        "correta": false
      },
      {
        "texto": "usar a conta de um colega para contornar o controle",
        "correta": false
      },
      {
        "texto": "esperar até o prazo vencer para comentar",
        "correta": false
      },
      {
        "texto": "informar o bloqueio, solicitar o acesso pelo canal correto e adiantar tarefas possíveis",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Comunicar bloqueios cedo e seguir os controles de acesso demonstra responsabilidade."
  },
  {
    "id": "F1-Q036",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "dificuldade": "intermediaria",
    "tema": "dependência bloqueada por acesso",
    "enunciado": "No acompanhamento diário da equipe de desenvolvimento, você nota que dependência bloqueada por acesso. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "informar o bloqueio, solicitar o acesso pelo canal correto e adiantar tarefas possíveis",
        "correta": true
      },
      {
        "texto": "usar a conta de um colega para contornar o controle",
        "correta": false
      },
      {
        "texto": "esperar até o prazo vencer para comentar",
        "correta": false
      },
      {
        "texto": "compartilhar credenciais pessoais com a equipe",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Comunicar bloqueios cedo e seguir os controles de acesso demonstra responsabilidade."
  },
  {
    "id": "F1-Q037",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "dificuldade": "facil",
    "tema": "mudança de prioridade no meio da sprint",
    "enunciado": "Em uma sprint da Antares, você observa mudança de prioridade no meio da sprint. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "explicar o impacto nas entregas e combinar a nova prioridade com a liderança",
        "correta": true
      },
      {
        "texto": "decidir sozinho que a nova solicitação não será feita",
        "correta": false
      },
      {
        "texto": "marcar todas as tarefas como concluídas para evitar cobrança",
        "correta": false
      },
      {
        "texto": "aceitar tudo e deixar as tarefas anteriores sem aviso",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Mudanças de prioridade precisam ser alinhadas e seus impactos, comunicados."
  },
  {
    "id": "F1-Q038",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "dificuldade": "facil",
    "tema": "mudança de prioridade no meio da sprint",
    "enunciado": "Durante uma entrega do sistema, surge a situação: mudança de prioridade no meio da sprint. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "marcar todas as tarefas como concluídas para evitar cobrança",
        "correta": false
      },
      {
        "texto": "explicar o impacto nas entregas e combinar a nova prioridade com a liderança",
        "correta": true
      },
      {
        "texto": "aceitar tudo e deixar as tarefas anteriores sem aviso",
        "correta": false
      },
      {
        "texto": "decidir sozinho que a nova solicitação não será feita",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Mudanças de prioridade precisam ser alinhadas e seus impactos, comunicados."
  },
  {
    "id": "F1-Q039",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "dificuldade": "intermediaria",
    "tema": "mudança de prioridade no meio da sprint",
    "enunciado": "Em um projeto colaborativo, a equipe percebe que mudança de prioridade no meio da sprint. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "aceitar tudo e deixar as tarefas anteriores sem aviso",
        "correta": false
      },
      {
        "texto": "decidir sozinho que a nova solicitação não será feita",
        "correta": false
      },
      {
        "texto": "explicar o impacto nas entregas e combinar a nova prioridade com a liderança",
        "correta": true
      },
      {
        "texto": "marcar todas as tarefas como concluídas para evitar cobrança",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Mudanças de prioridade precisam ser alinhadas e seus impactos, comunicados."
  },
  {
    "id": "F1-Q040",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "dificuldade": "intermediaria",
    "tema": "mudança de prioridade no meio da sprint",
    "enunciado": "No acompanhamento diário da equipe de desenvolvimento, você nota que mudança de prioridade no meio da sprint. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "decidir sozinho que a nova solicitação não será feita",
        "correta": false
      },
      {
        "texto": "marcar todas as tarefas como concluídas para evitar cobrança",
        "correta": false
      },
      {
        "texto": "aceitar tudo e deixar as tarefas anteriores sem aviso",
        "correta": false
      },
      {
        "texto": "explicar o impacto nas entregas e combinar a nova prioridade com a liderança",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Mudanças de prioridade precisam ser alinhadas e seus impactos, comunicados."
  },
  {
    "id": "F1-Q041",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "facil",
    "tema": "revisão de código com uma sugestão diferente",
    "enunciado": "Em uma sprint da Antares, você observa revisão de código com uma sugestão diferente. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "aprovar a mudança sem entender seus efeitos",
        "correta": false
      },
      {
        "texto": "responder de forma pessoal e encerrar a conversa",
        "correta": false
      },
      {
        "texto": "rejeitar qualquer sugestão por ter escrito o código",
        "correta": false
      },
      {
        "texto": "avaliar o argumento técnico e discutir a solução com respeito",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Revisões devem focar na qualidade da solução, não em quem a propôs."
  },
  {
    "id": "F1-Q042",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "facil",
    "tema": "revisão de código com uma sugestão diferente",
    "enunciado": "Durante uma entrega do sistema, surge a situação: revisão de código com uma sugestão diferente. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "avaliar o argumento técnico e discutir a solução com respeito",
        "correta": true
      },
      {
        "texto": "responder de forma pessoal e encerrar a conversa",
        "correta": false
      },
      {
        "texto": "rejeitar qualquer sugestão por ter escrito o código",
        "correta": false
      },
      {
        "texto": "aprovar a mudança sem entender seus efeitos",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Revisões devem focar na qualidade da solução, não em quem a propôs."
  },
  {
    "id": "F1-Q043",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "intermediaria",
    "tema": "revisão de código com uma sugestão diferente",
    "enunciado": "Em um projeto colaborativo, a equipe percebe que revisão de código com uma sugestão diferente. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "rejeitar qualquer sugestão por ter escrito o código",
        "correta": false
      },
      {
        "texto": "avaliar o argumento técnico e discutir a solução com respeito",
        "correta": true
      },
      {
        "texto": "aprovar a mudança sem entender seus efeitos",
        "correta": false
      },
      {
        "texto": "responder de forma pessoal e encerrar a conversa",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Revisões devem focar na qualidade da solução, não em quem a propôs."
  },
  {
    "id": "F1-Q044",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "intermediaria",
    "tema": "revisão de código com uma sugestão diferente",
    "enunciado": "No acompanhamento diário da equipe de desenvolvimento, você nota que revisão de código com uma sugestão diferente. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "aprovar a mudança sem entender seus efeitos",
        "correta": false
      },
      {
        "texto": "responder de forma pessoal e encerrar a conversa",
        "correta": false
      },
      {
        "texto": "avaliar o argumento técnico e discutir a solução com respeito",
        "correta": true
      },
      {
        "texto": "rejeitar qualquer sugestão por ter escrito o código",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Revisões devem focar na qualidade da solução, não em quem a propôs."
  },
  {
    "id": "F1-Q045",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "facil",
    "tema": "mensagem curta interpretada como agressiva",
    "enunciado": "Em uma sprint da Antares, você observa mensagem curta interpretada como agressiva. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "culpar a pessoa por interpretar errado",
        "correta": false
      },
      {
        "texto": "publicar a conversa em outro grupo para ridicularizá-la",
        "correta": false
      },
      {
        "texto": "esclarecer a intenção e reformular a mensagem de maneira respeitosa",
        "correta": true
      },
      {
        "texto": "parar de se comunicar com essa pessoa",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Comunicação assertiva inclui considerar o impacto da mensagem e esclarecer mal-entendidos."
  },
  {
    "id": "F1-Q046",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "facil",
    "tema": "mensagem curta interpretada como agressiva",
    "enunciado": "Durante uma entrega do sistema, surge a situação: mensagem curta interpretada como agressiva. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "publicar a conversa em outro grupo para ridicularizá-la",
        "correta": false
      },
      {
        "texto": "parar de se comunicar com essa pessoa",
        "correta": false
      },
      {
        "texto": "culpar a pessoa por interpretar errado",
        "correta": false
      },
      {
        "texto": "esclarecer a intenção e reformular a mensagem de maneira respeitosa",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Comunicação assertiva inclui considerar o impacto da mensagem e esclarecer mal-entendidos."
  },
  {
    "id": "F1-Q047",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "intermediaria",
    "tema": "mensagem curta interpretada como agressiva",
    "enunciado": "Em um projeto colaborativo, a equipe percebe que mensagem curta interpretada como agressiva. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "esclarecer a intenção e reformular a mensagem de maneira respeitosa",
        "correta": true
      },
      {
        "texto": "parar de se comunicar com essa pessoa",
        "correta": false
      },
      {
        "texto": "culpar a pessoa por interpretar errado",
        "correta": false
      },
      {
        "texto": "publicar a conversa em outro grupo para ridicularizá-la",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Comunicação assertiva inclui considerar o impacto da mensagem e esclarecer mal-entendidos."
  },
  {
    "id": "F1-Q048",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "intermediaria",
    "tema": "mensagem curta interpretada como agressiva",
    "enunciado": "No acompanhamento diário da equipe de desenvolvimento, você nota que mensagem curta interpretada como agressiva. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "culpar a pessoa por interpretar errado",
        "correta": false
      },
      {
        "texto": "esclarecer a intenção e reformular a mensagem de maneira respeitosa",
        "correta": true
      },
      {
        "texto": "publicar a conversa em outro grupo para ridicularizá-la",
        "correta": false
      },
      {
        "texto": "parar de se comunicar com essa pessoa",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Comunicação assertiva inclui considerar o impacto da mensagem e esclarecer mal-entendidos."
  },
  {
    "id": "F1-Q049",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "facil",
    "tema": "colega com dificuldade em uma ferramenta",
    "enunciado": "Em uma sprint da Antares, você observa colega com dificuldade em uma ferramenta. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "expor a dificuldade do colega na reunião",
        "correta": false
      },
      {
        "texto": "oferecer orientação objetiva e combinar um momento que não comprometa as próprias entregas",
        "correta": true
      },
      {
        "texto": "ignorar o pedido mesmo tendo disponibilidade",
        "correta": false
      },
      {
        "texto": "assumir todo o trabalho sem conversar",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Colaboração ajuda o time sem eliminar a responsabilidade individual."
  },
  {
    "id": "F1-Q050",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "facil",
    "tema": "colega com dificuldade em uma ferramenta",
    "enunciado": "Durante uma entrega do sistema, surge a situação: colega com dificuldade em uma ferramenta. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "ignorar o pedido mesmo tendo disponibilidade",
        "correta": false
      },
      {
        "texto": "assumir todo o trabalho sem conversar",
        "correta": false
      },
      {
        "texto": "oferecer orientação objetiva e combinar um momento que não comprometa as próprias entregas",
        "correta": true
      },
      {
        "texto": "expor a dificuldade do colega na reunião",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Colaboração ajuda o time sem eliminar a responsabilidade individual."
  },
  {
    "id": "F1-Q051",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "intermediaria",
    "tema": "colega com dificuldade em uma ferramenta",
    "enunciado": "Em um projeto colaborativo, a equipe percebe que colega com dificuldade em uma ferramenta. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "assumir todo o trabalho sem conversar",
        "correta": false
      },
      {
        "texto": "expor a dificuldade do colega na reunião",
        "correta": false
      },
      {
        "texto": "ignorar o pedido mesmo tendo disponibilidade",
        "correta": false
      },
      {
        "texto": "oferecer orientação objetiva e combinar um momento que não comprometa as próprias entregas",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Colaboração ajuda o time sem eliminar a responsabilidade individual."
  },
  {
    "id": "F1-Q052",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "intermediaria",
    "tema": "colega com dificuldade em uma ferramenta",
    "enunciado": "No acompanhamento diário da equipe de desenvolvimento, você nota que colega com dificuldade em uma ferramenta. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "oferecer orientação objetiva e combinar um momento que não comprometa as próprias entregas",
        "correta": true
      },
      {
        "texto": "expor a dificuldade do colega na reunião",
        "correta": false
      },
      {
        "texto": "ignorar o pedido mesmo tendo disponibilidade",
        "correta": false
      },
      {
        "texto": "assumir todo o trabalho sem conversar",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Colaboração ajuda o time sem eliminar a responsabilidade individual."
  },
  {
    "id": "F1-Q053",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "facil",
    "tema": "duas pessoas discordam sobre uma solução",
    "enunciado": "Em uma sprint da Antares, você observa duas pessoas discordam sobre uma solução. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "comparar critérios, riscos e evidências e testar a alternativa mais promissora",
        "correta": true
      },
      {
        "texto": "levar o conflito para o grupo sem contexto",
        "correta": false
      },
      {
        "texto": "insistir até a outra pessoa ceder",
        "correta": false
      },
      {
        "texto": "escolher por amizade, sem avaliar a solução",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Decisões técnicas devem ser discutidas com respeito e baseadas em critérios."
  },
  {
    "id": "F1-Q054",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "facil",
    "tema": "duas pessoas discordam sobre uma solução",
    "enunciado": "Durante uma entrega do sistema, surge a situação: duas pessoas discordam sobre uma solução. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "insistir até a outra pessoa ceder",
        "correta": false
      },
      {
        "texto": "comparar critérios, riscos e evidências e testar a alternativa mais promissora",
        "correta": true
      },
      {
        "texto": "escolher por amizade, sem avaliar a solução",
        "correta": false
      },
      {
        "texto": "levar o conflito para o grupo sem contexto",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Decisões técnicas devem ser discutidas com respeito e baseadas em critérios."
  },
  {
    "id": "F1-Q055",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "intermediaria",
    "tema": "duas pessoas discordam sobre uma solução",
    "enunciado": "Em um projeto colaborativo, a equipe percebe que duas pessoas discordam sobre uma solução. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "escolher por amizade, sem avaliar a solução",
        "correta": false
      },
      {
        "texto": "levar o conflito para o grupo sem contexto",
        "correta": false
      },
      {
        "texto": "comparar critérios, riscos e evidências e testar a alternativa mais promissora",
        "correta": true
      },
      {
        "texto": "insistir até a outra pessoa ceder",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Decisões técnicas devem ser discutidas com respeito e baseadas em critérios."
  },
  {
    "id": "F1-Q056",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "intermediaria",
    "tema": "duas pessoas discordam sobre uma solução",
    "enunciado": "No acompanhamento diário da equipe de desenvolvimento, você nota que duas pessoas discordam sobre uma solução. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "levar o conflito para o grupo sem contexto",
        "correta": false
      },
      {
        "texto": "insistir até a outra pessoa ceder",
        "correta": false
      },
      {
        "texto": "escolher por amizade, sem avaliar a solução",
        "correta": false
      },
      {
        "texto": "comparar critérios, riscos e evidências e testar a alternativa mais promissora",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Decisões técnicas devem ser discutidas com respeito e baseadas em critérios."
  },
  {
    "id": "F1-Q057",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "facil",
    "tema": "uma pessoa é interrompida repetidamente na reunião",
    "enunciado": "Em uma sprint da Antares, você observa uma pessoa é interrompida repetidamente na reunião. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "continuar a reunião como se nada ocorresse",
        "correta": false
      },
      {
        "texto": "falar por ela sem perguntar sua opinião",
        "correta": false
      },
      {
        "texto": "encerrar a reunião imediatamente",
        "correta": false
      },
      {
        "texto": "abrir espaço para ela concluir e garantir que sua contribuição seja ouvida",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Escuta ativa e participação equilibrada fortalecem a colaboração."
  },
  {
    "id": "F1-Q058",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "facil",
    "tema": "uma pessoa é interrompida repetidamente na reunião",
    "enunciado": "Durante uma entrega do sistema, surge a situação: uma pessoa é interrompida repetidamente na reunião. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "abrir espaço para ela concluir e garantir que sua contribuição seja ouvida",
        "correta": true
      },
      {
        "texto": "falar por ela sem perguntar sua opinião",
        "correta": false
      },
      {
        "texto": "encerrar a reunião imediatamente",
        "correta": false
      },
      {
        "texto": "continuar a reunião como se nada ocorresse",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Escuta ativa e participação equilibrada fortalecem a colaboração."
  },
  {
    "id": "F1-Q059",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "intermediaria",
    "tema": "uma pessoa é interrompida repetidamente na reunião",
    "enunciado": "Em um projeto colaborativo, a equipe percebe que uma pessoa é interrompida repetidamente na reunião. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "encerrar a reunião imediatamente",
        "correta": false
      },
      {
        "texto": "abrir espaço para ela concluir e garantir que sua contribuição seja ouvida",
        "correta": true
      },
      {
        "texto": "continuar a reunião como se nada ocorresse",
        "correta": false
      },
      {
        "texto": "falar por ela sem perguntar sua opinião",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Escuta ativa e participação equilibrada fortalecem a colaboração."
  },
  {
    "id": "F1-Q060",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "intermediaria",
    "tema": "uma pessoa é interrompida repetidamente na reunião",
    "enunciado": "No acompanhamento diário da equipe de desenvolvimento, você nota que uma pessoa é interrompida repetidamente na reunião. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "continuar a reunião como se nada ocorresse",
        "correta": false
      },
      {
        "texto": "falar por ela sem perguntar sua opinião",
        "correta": false
      },
      {
        "texto": "abrir espaço para ela concluir e garantir que sua contribuição seja ouvida",
        "correta": true
      },
      {
        "texto": "encerrar a reunião imediatamente",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Escuta ativa e participação equilibrada fortalecem a colaboração."
  },
  {
    "id": "F1-Q061",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "facil",
    "tema": "erro de um integrante afeta a entrega coletiva",
    "enunciado": "Em uma sprint da Antares, você observa erro de um integrante afeta a entrega coletiva. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "esconder o incidente para proteger a imagem do grupo",
        "correta": false
      },
      {
        "texto": "compartilhar o erro fora da equipe como piada",
        "correta": false
      },
      {
        "texto": "tratar o problema com foco em correção, aprendizado e prevenção",
        "correta": true
      },
      {
        "texto": "procurar culpados antes de recuperar o serviço",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Uma resposta construtiva resolve o impacto e ajuda a evitar recorrências."
  },
  {
    "id": "F1-Q062",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "facil",
    "tema": "erro de um integrante afeta a entrega coletiva",
    "enunciado": "Durante uma entrega do sistema, surge a situação: erro de um integrante afeta a entrega coletiva. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "compartilhar o erro fora da equipe como piada",
        "correta": false
      },
      {
        "texto": "procurar culpados antes de recuperar o serviço",
        "correta": false
      },
      {
        "texto": "esconder o incidente para proteger a imagem do grupo",
        "correta": false
      },
      {
        "texto": "tratar o problema com foco em correção, aprendizado e prevenção",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Uma resposta construtiva resolve o impacto e ajuda a evitar recorrências."
  },
  {
    "id": "F1-Q063",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "intermediaria",
    "tema": "erro de um integrante afeta a entrega coletiva",
    "enunciado": "Em um projeto colaborativo, a equipe percebe que erro de um integrante afeta a entrega coletiva. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "tratar o problema com foco em correção, aprendizado e prevenção",
        "correta": true
      },
      {
        "texto": "procurar culpados antes de recuperar o serviço",
        "correta": false
      },
      {
        "texto": "esconder o incidente para proteger a imagem do grupo",
        "correta": false
      },
      {
        "texto": "compartilhar o erro fora da equipe como piada",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Uma resposta construtiva resolve o impacto e ajuda a evitar recorrências."
  },
  {
    "id": "F1-Q064",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "intermediaria",
    "tema": "erro de um integrante afeta a entrega coletiva",
    "enunciado": "No acompanhamento diário da equipe de desenvolvimento, você nota que erro de um integrante afeta a entrega coletiva. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "esconder o incidente para proteger a imagem do grupo",
        "correta": false
      },
      {
        "texto": "tratar o problema com foco em correção, aprendizado e prevenção",
        "correta": true
      },
      {
        "texto": "compartilhar o erro fora da equipe como piada",
        "correta": false
      },
      {
        "texto": "procurar culpados antes de recuperar o serviço",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Uma resposta construtiva resolve o impacto e ajuda a evitar recorrências."
  },
  {
    "id": "F1-Q065",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "facil",
    "tema": "feedback recebido sobre comunicação",
    "enunciado": "Em uma sprint da Antares, você observa feedback recebido sobre comunicação. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "ignorar todo feedback que não venha da liderança",
        "correta": false
      },
      {
        "texto": "ouvir, pedir exemplos e combinar uma mudança observável",
        "correta": true
      },
      {
        "texto": "rebater imediatamente sem escutar",
        "correta": false
      },
      {
        "texto": "interpretar o feedback como ataque pessoal",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Feedback é oportunidade de melhoria quando analisado com abertura e objetividade."
  },
  {
    "id": "F1-Q066",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "facil",
    "tema": "feedback recebido sobre comunicação",
    "enunciado": "Durante uma entrega do sistema, surge a situação: feedback recebido sobre comunicação. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "rebater imediatamente sem escutar",
        "correta": false
      },
      {
        "texto": "interpretar o feedback como ataque pessoal",
        "correta": false
      },
      {
        "texto": "ouvir, pedir exemplos e combinar uma mudança observável",
        "correta": true
      },
      {
        "texto": "ignorar todo feedback que não venha da liderança",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Feedback é oportunidade de melhoria quando analisado com abertura e objetividade."
  },
  {
    "id": "F1-Q067",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "intermediaria",
    "tema": "feedback recebido sobre comunicação",
    "enunciado": "Em um projeto colaborativo, a equipe percebe que feedback recebido sobre comunicação. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "interpretar o feedback como ataque pessoal",
        "correta": false
      },
      {
        "texto": "ignorar todo feedback que não venha da liderança",
        "correta": false
      },
      {
        "texto": "rebater imediatamente sem escutar",
        "correta": false
      },
      {
        "texto": "ouvir, pedir exemplos e combinar uma mudança observável",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Feedback é oportunidade de melhoria quando analisado com abertura e objetividade."
  },
  {
    "id": "F1-Q068",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "intermediaria",
    "tema": "feedback recebido sobre comunicação",
    "enunciado": "No acompanhamento diário da equipe de desenvolvimento, você nota que feedback recebido sobre comunicação. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "ouvir, pedir exemplos e combinar uma mudança observável",
        "correta": true
      },
      {
        "texto": "ignorar todo feedback que não venha da liderança",
        "correta": false
      },
      {
        "texto": "rebater imediatamente sem escutar",
        "correta": false
      },
      {
        "texto": "interpretar o feedback como ataque pessoal",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Feedback é oportunidade de melhoria quando analisado com abertura e objetividade."
  },
  {
    "id": "F1-Q069",
    "fase": 1,
    "subconhecimento": "Relação com a liderança",
    "dificuldade": "facil",
    "tema": "risco técnico não previsto no planejamento",
    "enunciado": "Em uma sprint da Antares, você observa risco técnico não previsto no planejamento. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "apresentar o risco, as evidências e alternativas à liderança antes de seguir",
        "correta": true
      },
      {
        "texto": "alterar o escopo sem autorização",
        "correta": false
      },
      {
        "texto": "ignorar o risco porque a prioridade já foi definida",
        "correta": false
      },
      {
        "texto": "paralisar o projeto sem comunicar o motivo",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "É profissional sinalizar riscos e propor opções para uma decisão informada."
  },
  {
    "id": "F1-Q070",
    "fase": 1,
    "subconhecimento": "Relação com a liderança",
    "dificuldade": "facil",
    "tema": "risco técnico não previsto no planejamento",
    "enunciado": "Durante uma entrega do sistema, surge a situação: risco técnico não previsto no planejamento. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "ignorar o risco porque a prioridade já foi definida",
        "correta": false
      },
      {
        "texto": "apresentar o risco, as evidências e alternativas à liderança antes de seguir",
        "correta": true
      },
      {
        "texto": "paralisar o projeto sem comunicar o motivo",
        "correta": false
      },
      {
        "texto": "alterar o escopo sem autorização",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "É profissional sinalizar riscos e propor opções para uma decisão informada."
  },
  {
    "id": "F1-Q071",
    "fase": 1,
    "subconhecimento": "Relação com a liderança",
    "dificuldade": "intermediaria",
    "tema": "risco técnico não previsto no planejamento",
    "enunciado": "Em um projeto colaborativo, a equipe percebe que risco técnico não previsto no planejamento. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "paralisar o projeto sem comunicar o motivo",
        "correta": false
      },
      {
        "texto": "alterar o escopo sem autorização",
        "correta": false
      },
      {
        "texto": "apresentar o risco, as evidências e alternativas à liderança antes de seguir",
        "correta": true
      },
      {
        "texto": "ignorar o risco porque a prioridade já foi definida",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "É profissional sinalizar riscos e propor opções para uma decisão informada."
  },
  {
    "id": "F1-Q072",
    "fase": 1,
    "subconhecimento": "Relação com a liderança",
    "dificuldade": "intermediaria",
    "tema": "risco técnico não previsto no planejamento",
    "enunciado": "No acompanhamento diário da equipe de desenvolvimento, você nota que risco técnico não previsto no planejamento. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "alterar o escopo sem autorização",
        "correta": false
      },
      {
        "texto": "ignorar o risco porque a prioridade já foi definida",
        "correta": false
      },
      {
        "texto": "paralisar o projeto sem comunicar o motivo",
        "correta": false
      },
      {
        "texto": "apresentar o risco, as evidências e alternativas à liderança antes de seguir",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "É profissional sinalizar riscos e propor opções para uma decisão informada."
  },
  {
    "id": "F1-Q073",
    "fase": 1,
    "subconhecimento": "Relação com a liderança",
    "dificuldade": "facil",
    "tema": "critério de aceite pouco claro",
    "enunciado": "Em uma sprint da Antares, você observa critério de aceite pouco claro. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "solicitar que o líder escreva cada linha do código",
        "correta": false
      },
      {
        "texto": "mudar o critério por conta própria",
        "correta": false
      },
      {
        "texto": "entregar algo baseado em suposição sem informar",
        "correta": false
      },
      {
        "texto": "pedir esclarecimento e registrar o entendimento acordado",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Critérios claros reduzem retrabalho e alinham expectativas."
  },
  {
    "id": "F1-Q074",
    "fase": 1,
    "subconhecimento": "Relação com a liderança",
    "dificuldade": "facil",
    "tema": "critério de aceite pouco claro",
    "enunciado": "Durante uma entrega do sistema, surge a situação: critério de aceite pouco claro. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "pedir esclarecimento e registrar o entendimento acordado",
        "correta": true
      },
      {
        "texto": "mudar o critério por conta própria",
        "correta": false
      },
      {
        "texto": "entregar algo baseado em suposição sem informar",
        "correta": false
      },
      {
        "texto": "solicitar que o líder escreva cada linha do código",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Critérios claros reduzem retrabalho e alinham expectativas."
  },
  {
    "id": "F1-Q075",
    "fase": 1,
    "subconhecimento": "Relação com a liderança",
    "dificuldade": "intermediaria",
    "tema": "critério de aceite pouco claro",
    "enunciado": "Em um projeto colaborativo, a equipe percebe que critério de aceite pouco claro. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "entregar algo baseado em suposição sem informar",
        "correta": false
      },
      {
        "texto": "pedir esclarecimento e registrar o entendimento acordado",
        "correta": true
      },
      {
        "texto": "solicitar que o líder escreva cada linha do código",
        "correta": false
      },
      {
        "texto": "mudar o critério por conta própria",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Critérios claros reduzem retrabalho e alinham expectativas."
  },
  {
    "id": "F1-Q076",
    "fase": 1,
    "subconhecimento": "Relação com a liderança",
    "dificuldade": "intermediaria",
    "tema": "critério de aceite pouco claro",
    "enunciado": "No acompanhamento diário da equipe de desenvolvimento, você nota que critério de aceite pouco claro. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "solicitar que o líder escreva cada linha do código",
        "correta": false
      },
      {
        "texto": "mudar o critério por conta própria",
        "correta": false
      },
      {
        "texto": "pedir esclarecimento e registrar o entendimento acordado",
        "correta": true
      },
      {
        "texto": "entregar algo baseado em suposição sem informar",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Critérios claros reduzem retrabalho e alinham expectativas."
  },
  {
    "id": "F1-Q077",
    "fase": 1,
    "subconhecimento": "Relação com a liderança",
    "dificuldade": "facil",
    "tema": "duas demandas urgentes chegam de responsáveis diferentes",
    "enunciado": "Em uma sprint da Antares, você observa duas demandas urgentes chegam de responsáveis diferentes. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "ignorar a demanda de quem tem menos autoridade",
        "correta": false
      },
      {
        "texto": "escolher a tarefa mais fácil sem avisar",
        "correta": false
      },
      {
        "texto": "informar o conflito de prioridades e pedir alinhamento entre responsáveis",
        "correta": true
      },
      {
        "texto": "tentar fazer as duas ao mesmo tempo sem estimar",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "A liderança precisa ajudar a resolver prioridades incompatíveis."
  },
  {
    "id": "F1-Q078",
    "fase": 1,
    "subconhecimento": "Relação com a liderança",
    "dificuldade": "facil",
    "tema": "duas demandas urgentes chegam de responsáveis diferentes",
    "enunciado": "Durante uma entrega do sistema, surge a situação: duas demandas urgentes chegam de responsáveis diferentes. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "escolher a tarefa mais fácil sem avisar",
        "correta": false
      },
      {
        "texto": "tentar fazer as duas ao mesmo tempo sem estimar",
        "correta": false
      },
      {
        "texto": "ignorar a demanda de quem tem menos autoridade",
        "correta": false
      },
      {
        "texto": "informar o conflito de prioridades e pedir alinhamento entre responsáveis",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "A liderança precisa ajudar a resolver prioridades incompatíveis."
  },
  {
    "id": "F1-Q079",
    "fase": 1,
    "subconhecimento": "Relação com a liderança",
    "dificuldade": "intermediaria",
    "tema": "duas demandas urgentes chegam de responsáveis diferentes",
    "enunciado": "Em um projeto colaborativo, a equipe percebe que duas demandas urgentes chegam de responsáveis diferentes. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "informar o conflito de prioridades e pedir alinhamento entre responsáveis",
        "correta": true
      },
      {
        "texto": "tentar fazer as duas ao mesmo tempo sem estimar",
        "correta": false
      },
      {
        "texto": "ignorar a demanda de quem tem menos autoridade",
        "correta": false
      },
      {
        "texto": "escolher a tarefa mais fácil sem avisar",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "A liderança precisa ajudar a resolver prioridades incompatíveis."
  },
  {
    "id": "F1-Q080",
    "fase": 1,
    "subconhecimento": "Relação com a liderança",
    "dificuldade": "intermediaria",
    "tema": "duas demandas urgentes chegam de responsáveis diferentes",
    "enunciado": "No acompanhamento diário da equipe de desenvolvimento, você nota que duas demandas urgentes chegam de responsáveis diferentes. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "ignorar a demanda de quem tem menos autoridade",
        "correta": false
      },
      {
        "texto": "informar o conflito de prioridades e pedir alinhamento entre responsáveis",
        "correta": true
      },
      {
        "texto": "escolher a tarefa mais fácil sem avisar",
        "correta": false
      },
      {
        "texto": "tentar fazer as duas ao mesmo tempo sem estimar",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "A liderança precisa ajudar a resolver prioridades incompatíveis."
  },
  {
    "id": "F1-Q081",
    "fase": 1,
    "subconhecimento": "Relação com a liderança",
    "dificuldade": "facil",
    "tema": "estimativa de prazo se mostra otimista",
    "enunciado": "Em uma sprint da Antares, você observa estimativa de prazo se mostra otimista. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "manter a previsão mesmo sabendo que não será cumprida",
        "correta": false
      },
      {
        "texto": "atualizar a previsão cedo, explicar os fatores e sugerir um plano realista",
        "correta": true
      },
      {
        "texto": "esperar o prazo vencer para comunicar",
        "correta": false
      },
      {
        "texto": "reduzir testes sem discutir o risco",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Transparência antecipada permite renegociar prioridades e proteger a qualidade."
  },
  {
    "id": "F1-Q082",
    "fase": 1,
    "subconhecimento": "Relação com a liderança",
    "dificuldade": "facil",
    "tema": "estimativa de prazo se mostra otimista",
    "enunciado": "Durante uma entrega do sistema, surge a situação: estimativa de prazo se mostra otimista. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "esperar o prazo vencer para comunicar",
        "correta": false
      },
      {
        "texto": "reduzir testes sem discutir o risco",
        "correta": false
      },
      {
        "texto": "atualizar a previsão cedo, explicar os fatores e sugerir um plano realista",
        "correta": true
      },
      {
        "texto": "manter a previsão mesmo sabendo que não será cumprida",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Transparência antecipada permite renegociar prioridades e proteger a qualidade."
  },
  {
    "id": "F1-Q083",
    "fase": 1,
    "subconhecimento": "Relação com a liderança",
    "dificuldade": "intermediaria",
    "tema": "estimativa de prazo se mostra otimista",
    "enunciado": "Em um projeto colaborativo, a equipe percebe que estimativa de prazo se mostra otimista. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "reduzir testes sem discutir o risco",
        "correta": false
      },
      {
        "texto": "manter a previsão mesmo sabendo que não será cumprida",
        "correta": false
      },
      {
        "texto": "esperar o prazo vencer para comunicar",
        "correta": false
      },
      {
        "texto": "atualizar a previsão cedo, explicar os fatores e sugerir um plano realista",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Transparência antecipada permite renegociar prioridades e proteger a qualidade."
  },
  {
    "id": "F1-Q084",
    "fase": 1,
    "subconhecimento": "Relação com a liderança",
    "dificuldade": "intermediaria",
    "tema": "estimativa de prazo se mostra otimista",
    "enunciado": "No acompanhamento diário da equipe de desenvolvimento, você nota que estimativa de prazo se mostra otimista. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "atualizar a previsão cedo, explicar os fatores e sugerir um plano realista",
        "correta": true
      },
      {
        "texto": "manter a previsão mesmo sabendo que não será cumprida",
        "correta": false
      },
      {
        "texto": "esperar o prazo vencer para comunicar",
        "correta": false
      },
      {
        "texto": "reduzir testes sem discutir o risco",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Transparência antecipada permite renegociar prioridades e proteger a qualidade."
  },
  {
    "id": "F1-Q085",
    "fase": 1,
    "subconhecimento": "Relação com a liderança",
    "dificuldade": "facil",
    "tema": "tarefa concluída e pronta para revisão",
    "enunciado": "Em uma sprint da Antares, você observa tarefa concluída e pronta para revisão. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "informar o que foi feito, testes realizados e pontos pendentes",
        "correta": true
      },
      {
        "texto": "marcar como concluído antes de testar",
        "correta": false
      },
      {
        "texto": "esperar que o líder descubra a entrega no repositório",
        "correta": false
      },
      {
        "texto": "apenas dizer “pronto” sem evidências",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Uma prestação de contas útil registra resultado, validação e pendências."
  },
  {
    "id": "F1-Q086",
    "fase": 1,
    "subconhecimento": "Relação com a liderança",
    "dificuldade": "facil",
    "tema": "tarefa concluída e pronta para revisão",
    "enunciado": "Durante uma entrega do sistema, surge a situação: tarefa concluída e pronta para revisão. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "esperar que o líder descubra a entrega no repositório",
        "correta": false
      },
      {
        "texto": "informar o que foi feito, testes realizados e pontos pendentes",
        "correta": true
      },
      {
        "texto": "apenas dizer “pronto” sem evidências",
        "correta": false
      },
      {
        "texto": "marcar como concluído antes de testar",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Uma prestação de contas útil registra resultado, validação e pendências."
  },
  {
    "id": "F1-Q087",
    "fase": 1,
    "subconhecimento": "Relação com a liderança",
    "dificuldade": "intermediaria",
    "tema": "tarefa concluída e pronta para revisão",
    "enunciado": "Em um projeto colaborativo, a equipe percebe que tarefa concluída e pronta para revisão. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "apenas dizer “pronto” sem evidências",
        "correta": false
      },
      {
        "texto": "marcar como concluído antes de testar",
        "correta": false
      },
      {
        "texto": "informar o que foi feito, testes realizados e pontos pendentes",
        "correta": true
      },
      {
        "texto": "esperar que o líder descubra a entrega no repositório",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Uma prestação de contas útil registra resultado, validação e pendências."
  },
  {
    "id": "F1-Q088",
    "fase": 1,
    "subconhecimento": "Relação com a liderança",
    "dificuldade": "intermediaria",
    "tema": "tarefa concluída e pronta para revisão",
    "enunciado": "No acompanhamento diário da equipe de desenvolvimento, você nota que tarefa concluída e pronta para revisão. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "marcar como concluído antes de testar",
        "correta": false
      },
      {
        "texto": "esperar que o líder descubra a entrega no repositório",
        "correta": false
      },
      {
        "texto": "apenas dizer “pronto” sem evidências",
        "correta": false
      },
      {
        "texto": "informar o que foi feito, testes realizados e pontos pendentes",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Uma prestação de contas útil registra resultado, validação e pendências."
  },
  {
    "id": "F1-Q089",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "dificuldade": "facil",
    "tema": "termina a própria tarefa antes do previsto",
    "enunciado": "Em uma sprint da Antares, você observa termina a própria tarefa antes do previsto. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "alterar o trabalho de um colega sem combinar",
        "correta": false
      },
      {
        "texto": "pegar qualquer tarefa sem alinhar com ninguém",
        "correta": false
      },
      {
        "texto": "ficar indisponível até o fim do expediente",
        "correta": false
      },
      {
        "texto": "verificar qualidade, documentar o resultado e oferecer ajuda conforme prioridade do time",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Iniciativa é útil quando respeita prioridades e coordenação da equipe."
  },
  {
    "id": "F1-Q090",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "dificuldade": "facil",
    "tema": "termina a própria tarefa antes do previsto",
    "enunciado": "Durante uma entrega do sistema, surge a situação: termina a própria tarefa antes do previsto. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "verificar qualidade, documentar o resultado e oferecer ajuda conforme prioridade do time",
        "correta": true
      },
      {
        "texto": "pegar qualquer tarefa sem alinhar com ninguém",
        "correta": false
      },
      {
        "texto": "ficar indisponível até o fim do expediente",
        "correta": false
      },
      {
        "texto": "alterar o trabalho de um colega sem combinar",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Iniciativa é útil quando respeita prioridades e coordenação da equipe."
  },
  {
    "id": "F1-Q091",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "dificuldade": "intermediaria",
    "tema": "termina a própria tarefa antes do previsto",
    "enunciado": "Em um projeto colaborativo, a equipe percebe que termina a própria tarefa antes do previsto. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "ficar indisponível até o fim do expediente",
        "correta": false
      },
      {
        "texto": "verificar qualidade, documentar o resultado e oferecer ajuda conforme prioridade do time",
        "correta": true
      },
      {
        "texto": "alterar o trabalho de um colega sem combinar",
        "correta": false
      },
      {
        "texto": "pegar qualquer tarefa sem alinhar com ninguém",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Iniciativa é útil quando respeita prioridades e coordenação da equipe."
  },
  {
    "id": "F1-Q092",
    "fase": 1,
    "subconhecimento": "Autonomia",
    "dificuldade": "intermediaria",
    "tema": "termina a própria tarefa antes do previsto",
    "enunciado": "No acompanhamento diário da equipe de desenvolvimento, você nota que termina a própria tarefa antes do previsto. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "alterar o trabalho de um colega sem combinar",
        "correta": false
      },
      {
        "texto": "pegar qualquer tarefa sem alinhar com ninguém",
        "correta": false
      },
      {
        "texto": "verificar qualidade, documentar o resultado e oferecer ajuda conforme prioridade do time",
        "correta": true
      },
      {
        "texto": "ficar indisponível até o fim do expediente",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Iniciativa é útil quando respeita prioridades e coordenação da equipe."
  },
  {
    "id": "F1-Q093",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "facil",
    "tema": "reunião remota com opiniões divergentes",
    "enunciado": "Em uma sprint da Antares, você observa reunião remota com opiniões divergentes. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "usar ironia para encerrar a discussão",
        "correta": false
      },
      {
        "texto": "falar por cima das outras pessoas",
        "correta": false
      },
      {
        "texto": "resumir os pontos de acordo e discordância e propor próximos passos",
        "correta": true
      },
      {
        "texto": "deixar a decisão sem responsável ou prazo",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Síntese respeitosa e próximos passos claros transformam divergência em decisão."
  },
  {
    "id": "F1-Q094",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "facil",
    "tema": "reunião remota com opiniões divergentes",
    "enunciado": "Durante uma entrega do sistema, surge a situação: reunião remota com opiniões divergentes. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "falar por cima das outras pessoas",
        "correta": false
      },
      {
        "texto": "deixar a decisão sem responsável ou prazo",
        "correta": false
      },
      {
        "texto": "usar ironia para encerrar a discussão",
        "correta": false
      },
      {
        "texto": "resumir os pontos de acordo e discordância e propor próximos passos",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Síntese respeitosa e próximos passos claros transformam divergência em decisão."
  },
  {
    "id": "F1-Q095",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "intermediaria",
    "tema": "reunião remota com opiniões divergentes",
    "enunciado": "Em um projeto colaborativo, a equipe percebe que reunião remota com opiniões divergentes. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "resumir os pontos de acordo e discordância e propor próximos passos",
        "correta": true
      },
      {
        "texto": "deixar a decisão sem responsável ou prazo",
        "correta": false
      },
      {
        "texto": "usar ironia para encerrar a discussão",
        "correta": false
      },
      {
        "texto": "falar por cima das outras pessoas",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Síntese respeitosa e próximos passos claros transformam divergência em decisão."
  },
  {
    "id": "F1-Q096",
    "fase": 1,
    "subconhecimento": "Ajustes interpessoais",
    "dificuldade": "intermediaria",
    "tema": "reunião remota com opiniões divergentes",
    "enunciado": "No acompanhamento diário da equipe de desenvolvimento, você nota que reunião remota com opiniões divergentes. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "usar ironia para encerrar a discussão",
        "correta": false
      },
      {
        "texto": "resumir os pontos de acordo e discordância e propor próximos passos",
        "correta": true
      },
      {
        "texto": "falar por cima das outras pessoas",
        "correta": false
      },
      {
        "texto": "deixar a decisão sem responsável ou prazo",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Síntese respeitosa e próximos passos claros transformam divergência em decisão."
  },
  {
    "id": "F1-Q097",
    "fase": 1,
    "subconhecimento": "Relação com a liderança",
    "dificuldade": "facil",
    "tema": "decisão final não é a que você recomendou",
    "enunciado": "Em uma sprint da Antares, você observa decisão final não é a que você recomendou. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "continuar debatendo depois de todos os critérios serem considerados",
        "correta": false
      },
      {
        "texto": "registrar riscos relevantes, apoiar a decisão acordada e sinalizar se surgirem novas evidências",
        "correta": true
      },
      {
        "texto": "esconder informações que poderiam mudar a decisão",
        "correta": false
      },
      {
        "texto": "sabotar a decisão por discordar",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Discordar com respeito faz parte; depois do alinhamento, a execução deve ser profissional."
  },
  {
    "id": "F1-Q098",
    "fase": 1,
    "subconhecimento": "Relação com a liderança",
    "dificuldade": "facil",
    "tema": "decisão final não é a que você recomendou",
    "enunciado": "Durante uma entrega do sistema, surge a situação: decisão final não é a que você recomendou. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "esconder informações que poderiam mudar a decisão",
        "correta": false
      },
      {
        "texto": "sabotar a decisão por discordar",
        "correta": false
      },
      {
        "texto": "registrar riscos relevantes, apoiar a decisão acordada e sinalizar se surgirem novas evidências",
        "correta": true
      },
      {
        "texto": "continuar debatendo depois de todos os critérios serem considerados",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Discordar com respeito faz parte; depois do alinhamento, a execução deve ser profissional."
  },
  {
    "id": "F1-Q099",
    "fase": 1,
    "subconhecimento": "Relação com a liderança",
    "dificuldade": "intermediaria",
    "tema": "decisão final não é a que você recomendou",
    "enunciado": "Em um projeto colaborativo, a equipe percebe que decisão final não é a que você recomendou. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "sabotar a decisão por discordar",
        "correta": false
      },
      {
        "texto": "continuar debatendo depois de todos os critérios serem considerados",
        "correta": false
      },
      {
        "texto": "esconder informações que poderiam mudar a decisão",
        "correta": false
      },
      {
        "texto": "registrar riscos relevantes, apoiar a decisão acordada e sinalizar se surgirem novas evidências",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Discordar com respeito faz parte; depois do alinhamento, a execução deve ser profissional."
  },
  {
    "id": "F1-Q100",
    "fase": 1,
    "subconhecimento": "Relação com a liderança",
    "dificuldade": "intermediaria",
    "tema": "decisão final não é a que você recomendou",
    "enunciado": "No acompanhamento diário da equipe de desenvolvimento, você nota que decisão final não é a que você recomendou. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "registrar riscos relevantes, apoiar a decisão acordada e sinalizar se surgirem novas evidências",
        "correta": true
      },
      {
        "texto": "continuar debatendo depois de todos os critérios serem considerados",
        "correta": false
      },
      {
        "texto": "esconder informações que poderiam mudar a decisão",
        "correta": false
      },
      {
        "texto": "sabotar a decisão por discordar",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Discordar com respeito faz parte; depois do alinhamento, a execução deve ser profissional."
  },
  {
    "id": "F2-Q021",
    "fase": 2,
    "subconhecimento": "Ergonomia",
    "dificuldade": "facil",
    "tema": "configuração da cadeira e da mesa",
    "enunciado": "No laboratório de TI da Antares, você observa que configuração da cadeira e da mesa. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "ajustar cadeira para apoiar as costas e manter pés apoiados, buscando adaptação adequada",
        "correta": true
      },
      {
        "texto": "sentar na ponta da cadeira sem apoio",
        "correta": false
      },
      {
        "texto": "elevar os ombros para alcançar o teclado",
        "correta": false
      },
      {
        "texto": "usar a tela em posição que exija torção constante do pescoço",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Uma estação ajustada reduz posturas desconfortáveis; necessidades individuais devem ser consideradas."
  },
  {
    "id": "F2-Q022",
    "fase": 2,
    "subconhecimento": "Ergonomia",
    "dificuldade": "facil",
    "tema": "configuração da cadeira e da mesa",
    "enunciado": "Durante a rotina de trabalho no computador, ocorre o seguinte: configuração da cadeira e da mesa. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "elevar os ombros para alcançar o teclado",
        "correta": false
      },
      {
        "texto": "ajustar cadeira para apoiar as costas e manter pés apoiados, buscando adaptação adequada",
        "correta": true
      },
      {
        "texto": "usar a tela em posição que exija torção constante do pescoço",
        "correta": false
      },
      {
        "texto": "sentar na ponta da cadeira sem apoio",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Uma estação ajustada reduz posturas desconfortáveis; necessidades individuais devem ser consideradas."
  },
  {
    "id": "F2-Q023",
    "fase": 2,
    "subconhecimento": "Ergonomia",
    "dificuldade": "intermediaria",
    "tema": "configuração da cadeira e da mesa",
    "enunciado": "Em uma verificação preventiva do posto de trabalho, a equipe identifica que configuração da cadeira e da mesa. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "usar a tela em posição que exija torção constante do pescoço",
        "correta": false
      },
      {
        "texto": "sentar na ponta da cadeira sem apoio",
        "correta": false
      },
      {
        "texto": "ajustar cadeira para apoiar as costas e manter pés apoiados, buscando adaptação adequada",
        "correta": true
      },
      {
        "texto": "elevar os ombros para alcançar o teclado",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Uma estação ajustada reduz posturas desconfortáveis; necessidades individuais devem ser consideradas."
  },
  {
    "id": "F2-Q024",
    "fase": 2,
    "subconhecimento": "Ergonomia",
    "dificuldade": "intermediaria",
    "tema": "configuração da cadeira e da mesa",
    "enunciado": "Enquanto prepara a estação para uma atividade, você percebe que configuração da cadeira e da mesa. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "sentar na ponta da cadeira sem apoio",
        "correta": false
      },
      {
        "texto": "elevar os ombros para alcançar o teclado",
        "correta": false
      },
      {
        "texto": "usar a tela em posição que exija torção constante do pescoço",
        "correta": false
      },
      {
        "texto": "ajustar cadeira para apoiar as costas e manter pés apoiados, buscando adaptação adequada",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Uma estação ajustada reduz posturas desconfortáveis; necessidades individuais devem ser consideradas."
  },
  {
    "id": "F2-Q025",
    "fase": 2,
    "subconhecimento": "Ergonomia",
    "dificuldade": "facil",
    "tema": "monitor com reflexos e texto difícil de ler",
    "enunciado": "No laboratório de TI da Antares, você observa que monitor com reflexos e texto difícil de ler. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "inclinar o pescoço por toda a jornada",
        "correta": false
      },
      {
        "texto": "aproximar o rosto da tela continuamente",
        "correta": false
      },
      {
        "texto": "aumentar o brilho ao máximo e ignorar o reflexo",
        "correta": false
      },
      {
        "texto": "reposicionar tela e iluminação e ajustar altura e distância de modo confortável",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Posicionamento e iluminação adequados ajudam a reduzir esforço visual e postural."
  },
  {
    "id": "F2-Q026",
    "fase": 2,
    "subconhecimento": "Ergonomia",
    "dificuldade": "facil",
    "tema": "monitor com reflexos e texto difícil de ler",
    "enunciado": "Durante a rotina de trabalho no computador, ocorre o seguinte: monitor com reflexos e texto difícil de ler. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "reposicionar tela e iluminação e ajustar altura e distância de modo confortável",
        "correta": true
      },
      {
        "texto": "aproximar o rosto da tela continuamente",
        "correta": false
      },
      {
        "texto": "aumentar o brilho ao máximo e ignorar o reflexo",
        "correta": false
      },
      {
        "texto": "inclinar o pescoço por toda a jornada",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Posicionamento e iluminação adequados ajudam a reduzir esforço visual e postural."
  },
  {
    "id": "F2-Q027",
    "fase": 2,
    "subconhecimento": "Ergonomia",
    "dificuldade": "intermediaria",
    "tema": "monitor com reflexos e texto difícil de ler",
    "enunciado": "Em uma verificação preventiva do posto de trabalho, a equipe identifica que monitor com reflexos e texto difícil de ler. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "aumentar o brilho ao máximo e ignorar o reflexo",
        "correta": false
      },
      {
        "texto": "reposicionar tela e iluminação e ajustar altura e distância de modo confortável",
        "correta": true
      },
      {
        "texto": "inclinar o pescoço por toda a jornada",
        "correta": false
      },
      {
        "texto": "aproximar o rosto da tela continuamente",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Posicionamento e iluminação adequados ajudam a reduzir esforço visual e postural."
  },
  {
    "id": "F2-Q028",
    "fase": 2,
    "subconhecimento": "Ergonomia",
    "dificuldade": "intermediaria",
    "tema": "monitor com reflexos e texto difícil de ler",
    "enunciado": "Enquanto prepara a estação para uma atividade, você percebe que monitor com reflexos e texto difícil de ler. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "inclinar o pescoço por toda a jornada",
        "correta": false
      },
      {
        "texto": "aproximar o rosto da tela continuamente",
        "correta": false
      },
      {
        "texto": "reposicionar tela e iluminação e ajustar altura e distância de modo confortável",
        "correta": true
      },
      {
        "texto": "aumentar o brilho ao máximo e ignorar o reflexo",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Posicionamento e iluminação adequados ajudam a reduzir esforço visual e postural."
  },
  {
    "id": "F2-Q029",
    "fase": 2,
    "subconhecimento": "Pausas e saúde",
    "dificuldade": "facil",
    "tema": "fadiga visual após período prolongado de tela",
    "enunciado": "No laboratório de TI da Antares, você observa que fadiga visual após período prolongado de tela. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "substituir toda pausa por café",
        "correta": false
      },
      {
        "texto": "continuar sem pausa até terminar tudo",
        "correta": false
      },
      {
        "texto": "fazer pausa breve, olhar para longe e alternar atividades quando possível",
        "correta": true
      },
      {
        "texto": "esfregar os olhos e aumentar o brilho",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Pausas e variação de foco ajudam a reduzir desconforto visual."
  },
  {
    "id": "F2-Q030",
    "fase": 2,
    "subconhecimento": "Pausas e saúde",
    "dificuldade": "facil",
    "tema": "fadiga visual após período prolongado de tela",
    "enunciado": "Durante a rotina de trabalho no computador, ocorre o seguinte: fadiga visual após período prolongado de tela. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "continuar sem pausa até terminar tudo",
        "correta": false
      },
      {
        "texto": "esfregar os olhos e aumentar o brilho",
        "correta": false
      },
      {
        "texto": "substituir toda pausa por café",
        "correta": false
      },
      {
        "texto": "fazer pausa breve, olhar para longe e alternar atividades quando possível",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Pausas e variação de foco ajudam a reduzir desconforto visual."
  },
  {
    "id": "F2-Q031",
    "fase": 2,
    "subconhecimento": "Pausas e saúde",
    "dificuldade": "intermediaria",
    "tema": "fadiga visual após período prolongado de tela",
    "enunciado": "Em uma verificação preventiva do posto de trabalho, a equipe identifica que fadiga visual após período prolongado de tela. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "fazer pausa breve, olhar para longe e alternar atividades quando possível",
        "correta": true
      },
      {
        "texto": "esfregar os olhos e aumentar o brilho",
        "correta": false
      },
      {
        "texto": "substituir toda pausa por café",
        "correta": false
      },
      {
        "texto": "continuar sem pausa até terminar tudo",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Pausas e variação de foco ajudam a reduzir desconforto visual."
  },
  {
    "id": "F2-Q032",
    "fase": 2,
    "subconhecimento": "Pausas e saúde",
    "dificuldade": "intermediaria",
    "tema": "fadiga visual após período prolongado de tela",
    "enunciado": "Enquanto prepara a estação para uma atividade, você percebe que fadiga visual após período prolongado de tela. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "substituir toda pausa por café",
        "correta": false
      },
      {
        "texto": "fazer pausa breve, olhar para longe e alternar atividades quando possível",
        "correta": true
      },
      {
        "texto": "continuar sem pausa até terminar tudo",
        "correta": false
      },
      {
        "texto": "esfregar os olhos e aumentar o brilho",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Pausas e variação de foco ajudam a reduzir desconforto visual."
  },
  {
    "id": "F2-Q033",
    "fase": 2,
    "subconhecimento": "Organização do posto",
    "dificuldade": "facil",
    "tema": "cabos atravessando o caminho entre bancadas",
    "enunciado": "No laboratório de TI da Antares, você observa que cabos atravessando o caminho entre bancadas. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "cobrir os cabos com papel solto",
        "correta": false
      },
      {
        "texto": "sinalizar e solicitar organização segura dos cabos, sem criar outro risco",
        "correta": true
      },
      {
        "texto": "pular por cima e não avisar ninguém",
        "correta": false
      },
      {
        "texto": "desconectar cabos sem identificar o equipamento",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Cabos em circulação podem causar tropeços e devem ser organizados de forma segura."
  },
  {
    "id": "F2-Q034",
    "fase": 2,
    "subconhecimento": "Organização do posto",
    "dificuldade": "facil",
    "tema": "cabos atravessando o caminho entre bancadas",
    "enunciado": "Durante a rotina de trabalho no computador, ocorre o seguinte: cabos atravessando o caminho entre bancadas. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "pular por cima e não avisar ninguém",
        "correta": false
      },
      {
        "texto": "desconectar cabos sem identificar o equipamento",
        "correta": false
      },
      {
        "texto": "sinalizar e solicitar organização segura dos cabos, sem criar outro risco",
        "correta": true
      },
      {
        "texto": "cobrir os cabos com papel solto",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Cabos em circulação podem causar tropeços e devem ser organizados de forma segura."
  },
  {
    "id": "F2-Q035",
    "fase": 2,
    "subconhecimento": "Organização do posto",
    "dificuldade": "intermediaria",
    "tema": "cabos atravessando o caminho entre bancadas",
    "enunciado": "Em uma verificação preventiva do posto de trabalho, a equipe identifica que cabos atravessando o caminho entre bancadas. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "desconectar cabos sem identificar o equipamento",
        "correta": false
      },
      {
        "texto": "cobrir os cabos com papel solto",
        "correta": false
      },
      {
        "texto": "pular por cima e não avisar ninguém",
        "correta": false
      },
      {
        "texto": "sinalizar e solicitar organização segura dos cabos, sem criar outro risco",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Cabos em circulação podem causar tropeços e devem ser organizados de forma segura."
  },
  {
    "id": "F2-Q036",
    "fase": 2,
    "subconhecimento": "Organização do posto",
    "dificuldade": "intermediaria",
    "tema": "cabos atravessando o caminho entre bancadas",
    "enunciado": "Enquanto prepara a estação para uma atividade, você percebe que cabos atravessando o caminho entre bancadas. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "sinalizar e solicitar organização segura dos cabos, sem criar outro risco",
        "correta": true
      },
      {
        "texto": "cobrir os cabos com papel solto",
        "correta": false
      },
      {
        "texto": "pular por cima e não avisar ninguém",
        "correta": false
      },
      {
        "texto": "desconectar cabos sem identificar o equipamento",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Cabos em circulação podem causar tropeços e devem ser organizados de forma segura."
  },
  {
    "id": "F2-Q037",
    "fase": 2,
    "subconhecimento": "Segurança elétrica",
    "dificuldade": "facil",
    "tema": "equipamento com cheiro de queimado",
    "enunciado": "No laboratório de TI da Antares, você observa que equipamento com cheiro de queimado. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "interromper o uso, afastar-se com segurança e comunicar o responsável conforme procedimento",
        "correta": true
      },
      {
        "texto": "continuar usando até aparecer fumaça",
        "correta": false
      },
      {
        "texto": "jogar água no equipamento",
        "correta": false
      },
      {
        "texto": "abrir a fonte de alimentação para investigar",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Cheiro de queimado pode indicar falha elétrica; não se deve abrir ou improvisar reparos."
  },
  {
    "id": "F2-Q038",
    "fase": 2,
    "subconhecimento": "Segurança elétrica",
    "dificuldade": "facil",
    "tema": "equipamento com cheiro de queimado",
    "enunciado": "Durante a rotina de trabalho no computador, ocorre o seguinte: equipamento com cheiro de queimado. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "jogar água no equipamento",
        "correta": false
      },
      {
        "texto": "interromper o uso, afastar-se com segurança e comunicar o responsável conforme procedimento",
        "correta": true
      },
      {
        "texto": "abrir a fonte de alimentação para investigar",
        "correta": false
      },
      {
        "texto": "continuar usando até aparecer fumaça",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Cheiro de queimado pode indicar falha elétrica; não se deve abrir ou improvisar reparos."
  },
  {
    "id": "F2-Q039",
    "fase": 2,
    "subconhecimento": "Segurança elétrica",
    "dificuldade": "intermediaria",
    "tema": "equipamento com cheiro de queimado",
    "enunciado": "Em uma verificação preventiva do posto de trabalho, a equipe identifica que equipamento com cheiro de queimado. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "abrir a fonte de alimentação para investigar",
        "correta": false
      },
      {
        "texto": "continuar usando até aparecer fumaça",
        "correta": false
      },
      {
        "texto": "interromper o uso, afastar-se com segurança e comunicar o responsável conforme procedimento",
        "correta": true
      },
      {
        "texto": "jogar água no equipamento",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Cheiro de queimado pode indicar falha elétrica; não se deve abrir ou improvisar reparos."
  },
  {
    "id": "F2-Q040",
    "fase": 2,
    "subconhecimento": "Segurança elétrica",
    "dificuldade": "intermediaria",
    "tema": "equipamento com cheiro de queimado",
    "enunciado": "Enquanto prepara a estação para uma atividade, você percebe que equipamento com cheiro de queimado. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "continuar usando até aparecer fumaça",
        "correta": false
      },
      {
        "texto": "jogar água no equipamento",
        "correta": false
      },
      {
        "texto": "abrir a fonte de alimentação para investigar",
        "correta": false
      },
      {
        "texto": "interromper o uso, afastar-se com segurança e comunicar o responsável conforme procedimento",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Cheiro de queimado pode indicar falha elétrica; não se deve abrir ou improvisar reparos."
  },
  {
    "id": "F2-Q041",
    "fase": 2,
    "subconhecimento": "Normas e procedimentos",
    "dificuldade": "facil",
    "tema": "dúvida sobre procedimento de segurança",
    "enunciado": "No laboratório de TI da Antares, você observa que dúvida sobre procedimento de segurança. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "inventar uma regra no momento",
        "correta": false
      },
      {
        "texto": "seguir o que alguém lembra vagamente",
        "correta": false
      },
      {
        "texto": "ignorar o procedimento porque a tarefa é rápida",
        "correta": false
      },
      {
        "texto": "consultar o procedimento institucional e o responsável competente antes de agir",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Procedimentos e orientação competente ajudam a controlar riscos de forma consistente."
  },
  {
    "id": "F2-Q042",
    "fase": 2,
    "subconhecimento": "Normas e procedimentos",
    "dificuldade": "facil",
    "tema": "dúvida sobre procedimento de segurança",
    "enunciado": "Durante a rotina de trabalho no computador, ocorre o seguinte: dúvida sobre procedimento de segurança. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "consultar o procedimento institucional e o responsável competente antes de agir",
        "correta": true
      },
      {
        "texto": "seguir o que alguém lembra vagamente",
        "correta": false
      },
      {
        "texto": "ignorar o procedimento porque a tarefa é rápida",
        "correta": false
      },
      {
        "texto": "inventar uma regra no momento",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Procedimentos e orientação competente ajudam a controlar riscos de forma consistente."
  },
  {
    "id": "F2-Q043",
    "fase": 2,
    "subconhecimento": "Normas e procedimentos",
    "dificuldade": "intermediaria",
    "tema": "dúvida sobre procedimento de segurança",
    "enunciado": "Em uma verificação preventiva do posto de trabalho, a equipe identifica que dúvida sobre procedimento de segurança. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "ignorar o procedimento porque a tarefa é rápida",
        "correta": false
      },
      {
        "texto": "consultar o procedimento institucional e o responsável competente antes de agir",
        "correta": true
      },
      {
        "texto": "inventar uma regra no momento",
        "correta": false
      },
      {
        "texto": "seguir o que alguém lembra vagamente",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Procedimentos e orientação competente ajudam a controlar riscos de forma consistente."
  },
  {
    "id": "F2-Q044",
    "fase": 2,
    "subconhecimento": "Normas e procedimentos",
    "dificuldade": "intermediaria",
    "tema": "dúvida sobre procedimento de segurança",
    "enunciado": "Enquanto prepara a estação para uma atividade, você percebe que dúvida sobre procedimento de segurança. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "inventar uma regra no momento",
        "correta": false
      },
      {
        "texto": "seguir o que alguém lembra vagamente",
        "correta": false
      },
      {
        "texto": "consultar o procedimento institucional e o responsável competente antes de agir",
        "correta": true
      },
      {
        "texto": "ignorar o procedimento porque a tarefa é rápida",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Procedimentos e orientação competente ajudam a controlar riscos de forma consistente."
  },
  {
    "id": "F2-Q045",
    "fase": 2,
    "subconhecimento": "Riscos ocupacionais",
    "dificuldade": "facil",
    "tema": "dor recorrente durante a jornada de programação",
    "enunciado": "No laboratório de TI da Antares, você observa que dor recorrente durante a jornada de programação. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "normalizar a dor como parte obrigatória da profissão",
        "correta": false
      },
      {
        "texto": "aumentar a carga de trabalho para se acostumar",
        "correta": false
      },
      {
        "texto": "comunicar a situação e buscar avaliação e ajustes adequados",
        "correta": true
      },
      {
        "texto": "usar medicação de colega sem orientação",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Sintomas recorrentes merecem atenção, avaliação apropriada e revisão das condições de trabalho."
  },
  {
    "id": "F2-Q046",
    "fase": 2,
    "subconhecimento": "Riscos ocupacionais",
    "dificuldade": "facil",
    "tema": "dor recorrente durante a jornada de programação",
    "enunciado": "Durante a rotina de trabalho no computador, ocorre o seguinte: dor recorrente durante a jornada de programação. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "aumentar a carga de trabalho para se acostumar",
        "correta": false
      },
      {
        "texto": "usar medicação de colega sem orientação",
        "correta": false
      },
      {
        "texto": "normalizar a dor como parte obrigatória da profissão",
        "correta": false
      },
      {
        "texto": "comunicar a situação e buscar avaliação e ajustes adequados",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Sintomas recorrentes merecem atenção, avaliação apropriada e revisão das condições de trabalho."
  },
  {
    "id": "F2-Q047",
    "fase": 2,
    "subconhecimento": "Riscos ocupacionais",
    "dificuldade": "intermediaria",
    "tema": "dor recorrente durante a jornada de programação",
    "enunciado": "Em uma verificação preventiva do posto de trabalho, a equipe identifica que dor recorrente durante a jornada de programação. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "comunicar a situação e buscar avaliação e ajustes adequados",
        "correta": true
      },
      {
        "texto": "usar medicação de colega sem orientação",
        "correta": false
      },
      {
        "texto": "normalizar a dor como parte obrigatória da profissão",
        "correta": false
      },
      {
        "texto": "aumentar a carga de trabalho para se acostumar",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Sintomas recorrentes merecem atenção, avaliação apropriada e revisão das condições de trabalho."
  },
  {
    "id": "F2-Q048",
    "fase": 2,
    "subconhecimento": "Riscos ocupacionais",
    "dificuldade": "intermediaria",
    "tema": "dor recorrente durante a jornada de programação",
    "enunciado": "Enquanto prepara a estação para uma atividade, você percebe que dor recorrente durante a jornada de programação. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "normalizar a dor como parte obrigatória da profissão",
        "correta": false
      },
      {
        "texto": "comunicar a situação e buscar avaliação e ajustes adequados",
        "correta": true
      },
      {
        "texto": "aumentar a carga de trabalho para se acostumar",
        "correta": false
      },
      {
        "texto": "usar medicação de colega sem orientação",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Sintomas recorrentes merecem atenção, avaliação apropriada e revisão das condições de trabalho."
  },
  {
    "id": "F2-Q049",
    "fase": 2,
    "subconhecimento": "Acessibilidade e ergonomia",
    "dificuldade": "facil",
    "tema": "estação padrão não atende uma necessidade individual",
    "enunciado": "No laboratório de TI da Antares, você observa que estação padrão não atende uma necessidade individual. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "improvisar equipamento sem avaliar segurança",
        "correta": false
      },
      {
        "texto": "conversar com a pessoa e buscar adaptação adequada com o responsável",
        "correta": true
      },
      {
        "texto": "excluir a pessoa das tarefas de computador",
        "correta": false
      },
      {
        "texto": "exigir que todos usem a mesma configuração",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "A ergonomia considera diferenças individuais e adaptações seguras."
  },
  {
    "id": "F2-Q050",
    "fase": 2,
    "subconhecimento": "Acessibilidade e ergonomia",
    "dificuldade": "facil",
    "tema": "estação padrão não atende uma necessidade individual",
    "enunciado": "Durante a rotina de trabalho no computador, ocorre o seguinte: estação padrão não atende uma necessidade individual. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "excluir a pessoa das tarefas de computador",
        "correta": false
      },
      {
        "texto": "exigir que todos usem a mesma configuração",
        "correta": false
      },
      {
        "texto": "conversar com a pessoa e buscar adaptação adequada com o responsável",
        "correta": true
      },
      {
        "texto": "improvisar equipamento sem avaliar segurança",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "A ergonomia considera diferenças individuais e adaptações seguras."
  },
  {
    "id": "F2-Q051",
    "fase": 2,
    "subconhecimento": "Acessibilidade e ergonomia",
    "dificuldade": "intermediaria",
    "tema": "estação padrão não atende uma necessidade individual",
    "enunciado": "Em uma verificação preventiva do posto de trabalho, a equipe identifica que estação padrão não atende uma necessidade individual. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "exigir que todos usem a mesma configuração",
        "correta": false
      },
      {
        "texto": "improvisar equipamento sem avaliar segurança",
        "correta": false
      },
      {
        "texto": "excluir a pessoa das tarefas de computador",
        "correta": false
      },
      {
        "texto": "conversar com a pessoa e buscar adaptação adequada com o responsável",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "A ergonomia considera diferenças individuais e adaptações seguras."
  },
  {
    "id": "F2-Q052",
    "fase": 2,
    "subconhecimento": "Acessibilidade e ergonomia",
    "dificuldade": "intermediaria",
    "tema": "estação padrão não atende uma necessidade individual",
    "enunciado": "Enquanto prepara a estação para uma atividade, você percebe que estação padrão não atende uma necessidade individual. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "conversar com a pessoa e buscar adaptação adequada com o responsável",
        "correta": true
      },
      {
        "texto": "improvisar equipamento sem avaliar segurança",
        "correta": false
      },
      {
        "texto": "excluir a pessoa das tarefas de computador",
        "correta": false
      },
      {
        "texto": "exigir que todos usem a mesma configuração",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "A ergonomia considera diferenças individuais e adaptações seguras."
  },
  {
    "id": "F2-Q053",
    "fase": 2,
    "subconhecimento": "Saúde mental",
    "dificuldade": "facil",
    "tema": "sobrecarga e estresse geram erros frequentes",
    "enunciado": "No laboratório de TI da Antares, você observa que sobrecarga e estresse geram erros frequentes. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "comunicar a sobrecarga, priorizar tarefas e buscar apoio conforme os recursos disponíveis",
        "correta": true
      },
      {
        "texto": "assumir ainda mais tarefas para demonstrar compromisso",
        "correta": false
      },
      {
        "texto": "esconder os erros e trabalhar sem descanso",
        "correta": false
      },
      {
        "texto": "culpar um colega sem analisar a carga",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "A prevenção envolve comunicação, gestão de carga e apoio adequado."
  },
  {
    "id": "F2-Q054",
    "fase": 2,
    "subconhecimento": "Saúde mental",
    "dificuldade": "facil",
    "tema": "sobrecarga e estresse geram erros frequentes",
    "enunciado": "Durante a rotina de trabalho no computador, ocorre o seguinte: sobrecarga e estresse geram erros frequentes. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "esconder os erros e trabalhar sem descanso",
        "correta": false
      },
      {
        "texto": "comunicar a sobrecarga, priorizar tarefas e buscar apoio conforme os recursos disponíveis",
        "correta": true
      },
      {
        "texto": "culpar um colega sem analisar a carga",
        "correta": false
      },
      {
        "texto": "assumir ainda mais tarefas para demonstrar compromisso",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "A prevenção envolve comunicação, gestão de carga e apoio adequado."
  },
  {
    "id": "F2-Q055",
    "fase": 2,
    "subconhecimento": "Saúde mental",
    "dificuldade": "intermediaria",
    "tema": "sobrecarga e estresse geram erros frequentes",
    "enunciado": "Em uma verificação preventiva do posto de trabalho, a equipe identifica que sobrecarga e estresse geram erros frequentes. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "culpar um colega sem analisar a carga",
        "correta": false
      },
      {
        "texto": "assumir ainda mais tarefas para demonstrar compromisso",
        "correta": false
      },
      {
        "texto": "comunicar a sobrecarga, priorizar tarefas e buscar apoio conforme os recursos disponíveis",
        "correta": true
      },
      {
        "texto": "esconder os erros e trabalhar sem descanso",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "A prevenção envolve comunicação, gestão de carga e apoio adequado."
  },
  {
    "id": "F2-Q056",
    "fase": 2,
    "subconhecimento": "Saúde mental",
    "dificuldade": "intermediaria",
    "tema": "sobrecarga e estresse geram erros frequentes",
    "enunciado": "Enquanto prepara a estação para uma atividade, você percebe que sobrecarga e estresse geram erros frequentes. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "assumir ainda mais tarefas para demonstrar compromisso",
        "correta": false
      },
      {
        "texto": "esconder os erros e trabalhar sem descanso",
        "correta": false
      },
      {
        "texto": "culpar um colega sem analisar a carga",
        "correta": false
      },
      {
        "texto": "comunicar a sobrecarga, priorizar tarefas e buscar apoio conforme os recursos disponíveis",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "A prevenção envolve comunicação, gestão de carga e apoio adequado."
  },
  {
    "id": "F2-Q057",
    "fase": 2,
    "subconhecimento": "Organização do trabalho",
    "dificuldade": "facil",
    "tema": "longa tarefa sem mudança de postura",
    "enunciado": "No laboratório de TI da Antares, você observa que longa tarefa sem mudança de postura. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "permanecer imóvel para manter concentração",
        "correta": false
      },
      {
        "texto": "fazer todas as pausas apenas no final do dia",
        "correta": false
      },
      {
        "texto": "trabalhar em posição desconfortável para terminar mais rápido",
        "correta": false
      },
      {
        "texto": "alternar atividades e fazer pausas apropriadas durante a jornada",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Alternância e pausas reduzem exposição prolongada a posturas estáticas."
  },
  {
    "id": "F2-Q058",
    "fase": 2,
    "subconhecimento": "Organização do trabalho",
    "dificuldade": "facil",
    "tema": "longa tarefa sem mudança de postura",
    "enunciado": "Durante a rotina de trabalho no computador, ocorre o seguinte: longa tarefa sem mudança de postura. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "alternar atividades e fazer pausas apropriadas durante a jornada",
        "correta": true
      },
      {
        "texto": "fazer todas as pausas apenas no final do dia",
        "correta": false
      },
      {
        "texto": "trabalhar em posição desconfortável para terminar mais rápido",
        "correta": false
      },
      {
        "texto": "permanecer imóvel para manter concentração",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Alternância e pausas reduzem exposição prolongada a posturas estáticas."
  },
  {
    "id": "F2-Q059",
    "fase": 2,
    "subconhecimento": "Organização do trabalho",
    "dificuldade": "intermediaria",
    "tema": "longa tarefa sem mudança de postura",
    "enunciado": "Em uma verificação preventiva do posto de trabalho, a equipe identifica que longa tarefa sem mudança de postura. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "trabalhar em posição desconfortável para terminar mais rápido",
        "correta": false
      },
      {
        "texto": "alternar atividades e fazer pausas apropriadas durante a jornada",
        "correta": true
      },
      {
        "texto": "permanecer imóvel para manter concentração",
        "correta": false
      },
      {
        "texto": "fazer todas as pausas apenas no final do dia",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Alternância e pausas reduzem exposição prolongada a posturas estáticas."
  },
  {
    "id": "F2-Q060",
    "fase": 2,
    "subconhecimento": "Organização do trabalho",
    "dificuldade": "intermediaria",
    "tema": "longa tarefa sem mudança de postura",
    "enunciado": "Enquanto prepara a estação para uma atividade, você percebe que longa tarefa sem mudança de postura. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "permanecer imóvel para manter concentração",
        "correta": false
      },
      {
        "texto": "fazer todas as pausas apenas no final do dia",
        "correta": false
      },
      {
        "texto": "alternar atividades e fazer pausas apropriadas durante a jornada",
        "correta": true
      },
      {
        "texto": "trabalhar em posição desconfortável para terminar mais rápido",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Alternância e pausas reduzem exposição prolongada a posturas estáticas."
  },
  {
    "id": "F2-Q061",
    "fase": 2,
    "subconhecimento": "Segurança de equipamentos",
    "dificuldade": "facil",
    "tema": "limpeza de teclado conectado",
    "enunciado": "No laboratório de TI da Antares, você observa que limpeza de teclado conectado. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "usar produto inflamável perto de fontes de calor",
        "correta": false
      },
      {
        "texto": "limpar com mãos molhadas sem verificar a alimentação",
        "correta": false
      },
      {
        "texto": "seguir o procedimento do fabricante e desconectar/desligar quando indicado com segurança",
        "correta": true
      },
      {
        "texto": "borrifar líquido diretamente no equipamento ligado",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Limpeza segura depende das instruções do equipamento e da prevenção de risco elétrico."
  },
  {
    "id": "F2-Q062",
    "fase": 2,
    "subconhecimento": "Segurança de equipamentos",
    "dificuldade": "facil",
    "tema": "limpeza de teclado conectado",
    "enunciado": "Durante a rotina de trabalho no computador, ocorre o seguinte: limpeza de teclado conectado. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "limpar com mãos molhadas sem verificar a alimentação",
        "correta": false
      },
      {
        "texto": "borrifar líquido diretamente no equipamento ligado",
        "correta": false
      },
      {
        "texto": "usar produto inflamável perto de fontes de calor",
        "correta": false
      },
      {
        "texto": "seguir o procedimento do fabricante e desconectar/desligar quando indicado com segurança",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Limpeza segura depende das instruções do equipamento e da prevenção de risco elétrico."
  },
  {
    "id": "F2-Q063",
    "fase": 2,
    "subconhecimento": "Segurança de equipamentos",
    "dificuldade": "intermediaria",
    "tema": "limpeza de teclado conectado",
    "enunciado": "Em uma verificação preventiva do posto de trabalho, a equipe identifica que limpeza de teclado conectado. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "seguir o procedimento do fabricante e desconectar/desligar quando indicado com segurança",
        "correta": true
      },
      {
        "texto": "borrifar líquido diretamente no equipamento ligado",
        "correta": false
      },
      {
        "texto": "usar produto inflamável perto de fontes de calor",
        "correta": false
      },
      {
        "texto": "limpar com mãos molhadas sem verificar a alimentação",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Limpeza segura depende das instruções do equipamento e da prevenção de risco elétrico."
  },
  {
    "id": "F2-Q064",
    "fase": 2,
    "subconhecimento": "Segurança de equipamentos",
    "dificuldade": "intermediaria",
    "tema": "limpeza de teclado conectado",
    "enunciado": "Enquanto prepara a estação para uma atividade, você percebe que limpeza de teclado conectado. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "usar produto inflamável perto de fontes de calor",
        "correta": false
      },
      {
        "texto": "seguir o procedimento do fabricante e desconectar/desligar quando indicado com segurança",
        "correta": true
      },
      {
        "texto": "limpar com mãos molhadas sem verificar a alimentação",
        "correta": false
      },
      {
        "texto": "borrifar líquido diretamente no equipamento ligado",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Limpeza segura depende das instruções do equipamento e da prevenção de risco elétrico."
  },
  {
    "id": "F2-Q065",
    "fase": 2,
    "subconhecimento": "Incidentes",
    "dificuldade": "facil",
    "tema": "quase acidente com caixa no corredor",
    "enunciado": "No laboratório de TI da Antares, você observa que quase acidente com caixa no corredor. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "esperar que aconteça um acidente para registrar",
        "correta": false
      },
      {
        "texto": "eliminar ou sinalizar o risco com segurança e comunicar conforme procedimento",
        "correta": true
      },
      {
        "texto": "ignorar porque ninguém se machucou",
        "correta": false
      },
      {
        "texto": "mover a caixa para outro corredor sem avaliar",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Quase acidentes são oportunidades de prevenção e devem ser comunicados."
  },
  {
    "id": "F2-Q066",
    "fase": 2,
    "subconhecimento": "Incidentes",
    "dificuldade": "facil",
    "tema": "quase acidente com caixa no corredor",
    "enunciado": "Durante a rotina de trabalho no computador, ocorre o seguinte: quase acidente com caixa no corredor. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "ignorar porque ninguém se machucou",
        "correta": false
      },
      {
        "texto": "mover a caixa para outro corredor sem avaliar",
        "correta": false
      },
      {
        "texto": "eliminar ou sinalizar o risco com segurança e comunicar conforme procedimento",
        "correta": true
      },
      {
        "texto": "esperar que aconteça um acidente para registrar",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Quase acidentes são oportunidades de prevenção e devem ser comunicados."
  },
  {
    "id": "F2-Q067",
    "fase": 2,
    "subconhecimento": "Incidentes",
    "dificuldade": "intermediaria",
    "tema": "quase acidente com caixa no corredor",
    "enunciado": "Em uma verificação preventiva do posto de trabalho, a equipe identifica que quase acidente com caixa no corredor. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "mover a caixa para outro corredor sem avaliar",
        "correta": false
      },
      {
        "texto": "esperar que aconteça um acidente para registrar",
        "correta": false
      },
      {
        "texto": "ignorar porque ninguém se machucou",
        "correta": false
      },
      {
        "texto": "eliminar ou sinalizar o risco com segurança e comunicar conforme procedimento",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Quase acidentes são oportunidades de prevenção e devem ser comunicados."
  },
  {
    "id": "F2-Q068",
    "fase": 2,
    "subconhecimento": "Incidentes",
    "dificuldade": "intermediaria",
    "tema": "quase acidente com caixa no corredor",
    "enunciado": "Enquanto prepara a estação para uma atividade, você percebe que quase acidente com caixa no corredor. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "eliminar ou sinalizar o risco com segurança e comunicar conforme procedimento",
        "correta": true
      },
      {
        "texto": "esperar que aconteça um acidente para registrar",
        "correta": false
      },
      {
        "texto": "ignorar porque ninguém se machucou",
        "correta": false
      },
      {
        "texto": "mover a caixa para outro corredor sem avaliar",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Quase acidentes são oportunidades de prevenção e devem ser comunicados."
  },
  {
    "id": "F2-Q069",
    "fase": 2,
    "subconhecimento": "Prevenção",
    "dificuldade": "facil",
    "tema": "avaliar perigo e risco no laboratório",
    "enunciado": "No laboratório de TI da Antares, você observa que avaliar perigo e risco no laboratório. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "identificar a fonte potencial de dano e avaliar a possibilidade e gravidade de ocorrer",
        "correta": true
      },
      {
        "texto": "considerar perigo e risco como palavras sem diferença",
        "correta": false
      },
      {
        "texto": "avaliar apenas depois de uma lesão",
        "correta": false
      },
      {
        "texto": "presumir que todo equipamento conhecido é seguro",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Reconhecer perigos e avaliar riscos ajuda a definir medidas preventivas."
  },
  {
    "id": "F2-Q070",
    "fase": 2,
    "subconhecimento": "Prevenção",
    "dificuldade": "facil",
    "tema": "avaliar perigo e risco no laboratório",
    "enunciado": "Durante a rotina de trabalho no computador, ocorre o seguinte: avaliar perigo e risco no laboratório. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "avaliar apenas depois de uma lesão",
        "correta": false
      },
      {
        "texto": "identificar a fonte potencial de dano e avaliar a possibilidade e gravidade de ocorrer",
        "correta": true
      },
      {
        "texto": "presumir que todo equipamento conhecido é seguro",
        "correta": false
      },
      {
        "texto": "considerar perigo e risco como palavras sem diferença",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Reconhecer perigos e avaliar riscos ajuda a definir medidas preventivas."
  },
  {
    "id": "F2-Q071",
    "fase": 2,
    "subconhecimento": "Prevenção",
    "dificuldade": "intermediaria",
    "tema": "avaliar perigo e risco no laboratório",
    "enunciado": "Em uma verificação preventiva do posto de trabalho, a equipe identifica que avaliar perigo e risco no laboratório. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "presumir que todo equipamento conhecido é seguro",
        "correta": false
      },
      {
        "texto": "considerar perigo e risco como palavras sem diferença",
        "correta": false
      },
      {
        "texto": "identificar a fonte potencial de dano e avaliar a possibilidade e gravidade de ocorrer",
        "correta": true
      },
      {
        "texto": "avaliar apenas depois de uma lesão",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Reconhecer perigos e avaliar riscos ajuda a definir medidas preventivas."
  },
  {
    "id": "F2-Q072",
    "fase": 2,
    "subconhecimento": "Prevenção",
    "dificuldade": "intermediaria",
    "tema": "avaliar perigo e risco no laboratório",
    "enunciado": "Enquanto prepara a estação para uma atividade, você percebe que avaliar perigo e risco no laboratório. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "considerar perigo e risco como palavras sem diferença",
        "correta": false
      },
      {
        "texto": "avaliar apenas depois de uma lesão",
        "correta": false
      },
      {
        "texto": "presumir que todo equipamento conhecido é seguro",
        "correta": false
      },
      {
        "texto": "identificar a fonte potencial de dano e avaliar a possibilidade e gravidade de ocorrer",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Reconhecer perigos e avaliar riscos ajuda a definir medidas preventivas."
  },
  {
    "id": "F2-Q073",
    "fase": 2,
    "subconhecimento": "Uso de equipamentos",
    "dificuldade": "facil",
    "tema": "cadeira não permite apoiar os pés confortavelmente",
    "enunciado": "No laboratório de TI da Antares, você observa que cadeira não permite apoiar os pés confortavelmente. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "inclinar o corpo para alcançar o chão",
        "correta": false
      },
      {
        "texto": "retirar o encosto para caber na mesa",
        "correta": false
      },
      {
        "texto": "usar uma caixa instável como apoio improvisado",
        "correta": false
      },
      {
        "texto": "ajustar a estação ou solicitar apoio para uma solução adequada",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "A estação deve ser ajustada para oferecer apoio e postura confortável e estável."
  },
  {
    "id": "F2-Q074",
    "fase": 2,
    "subconhecimento": "Uso de equipamentos",
    "dificuldade": "facil",
    "tema": "cadeira não permite apoiar os pés confortavelmente",
    "enunciado": "Durante a rotina de trabalho no computador, ocorre o seguinte: cadeira não permite apoiar os pés confortavelmente. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "ajustar a estação ou solicitar apoio para uma solução adequada",
        "correta": true
      },
      {
        "texto": "retirar o encosto para caber na mesa",
        "correta": false
      },
      {
        "texto": "usar uma caixa instável como apoio improvisado",
        "correta": false
      },
      {
        "texto": "inclinar o corpo para alcançar o chão",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "A estação deve ser ajustada para oferecer apoio e postura confortável e estável."
  },
  {
    "id": "F2-Q075",
    "fase": 2,
    "subconhecimento": "Uso de equipamentos",
    "dificuldade": "intermediaria",
    "tema": "cadeira não permite apoiar os pés confortavelmente",
    "enunciado": "Em uma verificação preventiva do posto de trabalho, a equipe identifica que cadeira não permite apoiar os pés confortavelmente. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "usar uma caixa instável como apoio improvisado",
        "correta": false
      },
      {
        "texto": "ajustar a estação ou solicitar apoio para uma solução adequada",
        "correta": true
      },
      {
        "texto": "inclinar o corpo para alcançar o chão",
        "correta": false
      },
      {
        "texto": "retirar o encosto para caber na mesa",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "A estação deve ser ajustada para oferecer apoio e postura confortável e estável."
  },
  {
    "id": "F2-Q076",
    "fase": 2,
    "subconhecimento": "Uso de equipamentos",
    "dificuldade": "intermediaria",
    "tema": "cadeira não permite apoiar os pés confortavelmente",
    "enunciado": "Enquanto prepara a estação para uma atividade, você percebe que cadeira não permite apoiar os pés confortavelmente. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "inclinar o corpo para alcançar o chão",
        "correta": false
      },
      {
        "texto": "retirar o encosto para caber na mesa",
        "correta": false
      },
      {
        "texto": "ajustar a estação ou solicitar apoio para uma solução adequada",
        "correta": true
      },
      {
        "texto": "usar uma caixa instável como apoio improvisado",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "A estação deve ser ajustada para oferecer apoio e postura confortável e estável."
  },
  {
    "id": "F2-Q077",
    "fase": 2,
    "subconhecimento": "Segurança digital no posto",
    "dificuldade": "facil",
    "tema": "afastamento temporário de computador compartilhado",
    "enunciado": "No laboratório de TI da Antares, você observa que afastamento temporário de computador compartilhado. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "pedir a outra pessoa para usar sua sessão",
        "correta": false
      },
      {
        "texto": "deixar a conta aberta porque ficará pouco tempo fora",
        "correta": false
      },
      {
        "texto": "bloquear a sessão e proteger informações abertas na tela",
        "correta": true
      },
      {
        "texto": "anotar a senha ao lado do teclado",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Bloquear a sessão reduz acesso indevido e protege informações."
  },
  {
    "id": "F2-Q078",
    "fase": 2,
    "subconhecimento": "Segurança digital no posto",
    "dificuldade": "facil",
    "tema": "afastamento temporário de computador compartilhado",
    "enunciado": "Durante a rotina de trabalho no computador, ocorre o seguinte: afastamento temporário de computador compartilhado. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "deixar a conta aberta porque ficará pouco tempo fora",
        "correta": false
      },
      {
        "texto": "anotar a senha ao lado do teclado",
        "correta": false
      },
      {
        "texto": "pedir a outra pessoa para usar sua sessão",
        "correta": false
      },
      {
        "texto": "bloquear a sessão e proteger informações abertas na tela",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Bloquear a sessão reduz acesso indevido e protege informações."
  },
  {
    "id": "F2-Q079",
    "fase": 2,
    "subconhecimento": "Segurança digital no posto",
    "dificuldade": "intermediaria",
    "tema": "afastamento temporário de computador compartilhado",
    "enunciado": "Em uma verificação preventiva do posto de trabalho, a equipe identifica que afastamento temporário de computador compartilhado. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "bloquear a sessão e proteger informações abertas na tela",
        "correta": true
      },
      {
        "texto": "anotar a senha ao lado do teclado",
        "correta": false
      },
      {
        "texto": "pedir a outra pessoa para usar sua sessão",
        "correta": false
      },
      {
        "texto": "deixar a conta aberta porque ficará pouco tempo fora",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Bloquear a sessão reduz acesso indevido e protege informações."
  },
  {
    "id": "F2-Q080",
    "fase": 2,
    "subconhecimento": "Segurança digital no posto",
    "dificuldade": "intermediaria",
    "tema": "afastamento temporário de computador compartilhado",
    "enunciado": "Enquanto prepara a estação para uma atividade, você percebe que afastamento temporário de computador compartilhado. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "pedir a outra pessoa para usar sua sessão",
        "correta": false
      },
      {
        "texto": "bloquear a sessão e proteger informações abertas na tela",
        "correta": true
      },
      {
        "texto": "deixar a conta aberta porque ficará pouco tempo fora",
        "correta": false
      },
      {
        "texto": "anotar a senha ao lado do teclado",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Bloquear a sessão reduz acesso indevido e protege informações."
  },
  {
    "id": "F2-Q081",
    "fase": 2,
    "subconhecimento": "Normas e comunicação",
    "dificuldade": "facil",
    "tema": "condição insegura sem norma conhecida",
    "enunciado": "No laboratório de TI da Antares, você observa que condição insegura sem norma conhecida. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "esperar descobrir o número exato da norma antes de alertar",
        "correta": false
      },
      {
        "texto": "comunicar a condição e consultar o responsável de segurança",
        "correta": true
      },
      {
        "texto": "resolver com improviso perigoso",
        "correta": false
      },
      {
        "texto": "presumir que não há risco porque não conhece a regra",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "É possível e importante comunicar riscos mesmo antes de identificar a norma específica."
  },
  {
    "id": "F2-Q082",
    "fase": 2,
    "subconhecimento": "Normas e comunicação",
    "dificuldade": "facil",
    "tema": "condição insegura sem norma conhecida",
    "enunciado": "Durante a rotina de trabalho no computador, ocorre o seguinte: condição insegura sem norma conhecida. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "resolver com improviso perigoso",
        "correta": false
      },
      {
        "texto": "presumir que não há risco porque não conhece a regra",
        "correta": false
      },
      {
        "texto": "comunicar a condição e consultar o responsável de segurança",
        "correta": true
      },
      {
        "texto": "esperar descobrir o número exato da norma antes de alertar",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "É possível e importante comunicar riscos mesmo antes de identificar a norma específica."
  },
  {
    "id": "F2-Q083",
    "fase": 2,
    "subconhecimento": "Normas e comunicação",
    "dificuldade": "intermediaria",
    "tema": "condição insegura sem norma conhecida",
    "enunciado": "Em uma verificação preventiva do posto de trabalho, a equipe identifica que condição insegura sem norma conhecida. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "presumir que não há risco porque não conhece a regra",
        "correta": false
      },
      {
        "texto": "esperar descobrir o número exato da norma antes de alertar",
        "correta": false
      },
      {
        "texto": "resolver com improviso perigoso",
        "correta": false
      },
      {
        "texto": "comunicar a condição e consultar o responsável de segurança",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "É possível e importante comunicar riscos mesmo antes de identificar a norma específica."
  },
  {
    "id": "F2-Q084",
    "fase": 2,
    "subconhecimento": "Normas e comunicação",
    "dificuldade": "intermediaria",
    "tema": "condição insegura sem norma conhecida",
    "enunciado": "Enquanto prepara a estação para uma atividade, você percebe que condição insegura sem norma conhecida. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "comunicar a condição e consultar o responsável de segurança",
        "correta": true
      },
      {
        "texto": "esperar descobrir o número exato da norma antes de alertar",
        "correta": false
      },
      {
        "texto": "resolver com improviso perigoso",
        "correta": false
      },
      {
        "texto": "presumir que não há risco porque não conhece a regra",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "É possível e importante comunicar riscos mesmo antes de identificar a norma específica."
  },
  {
    "id": "F2-Q085",
    "fase": 2,
    "subconhecimento": "Bem-estar",
    "dificuldade": "facil",
    "tema": "equipe planeja rotina sustentável de trabalho",
    "enunciado": "No laboratório de TI da Antares, você observa que equipe planeja rotina sustentável de trabalho. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "incentivar pausas, diálogo sobre carga e comunicação de desconfortos",
        "correta": true
      },
      {
        "texto": "tratar exaustão como sinal de produtividade",
        "correta": false
      },
      {
        "texto": "proibir que a equipe relate dificuldades",
        "correta": false
      },
      {
        "texto": "premiar quem nunca se afasta da tela",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Uma cultura madura previne riscos e permite falar sobre problemas sem estigma."
  },
  {
    "id": "F2-Q086",
    "fase": 2,
    "subconhecimento": "Bem-estar",
    "dificuldade": "facil",
    "tema": "equipe planeja rotina sustentável de trabalho",
    "enunciado": "Durante a rotina de trabalho no computador, ocorre o seguinte: equipe planeja rotina sustentável de trabalho. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "proibir que a equipe relate dificuldades",
        "correta": false
      },
      {
        "texto": "incentivar pausas, diálogo sobre carga e comunicação de desconfortos",
        "correta": true
      },
      {
        "texto": "premiar quem nunca se afasta da tela",
        "correta": false
      },
      {
        "texto": "tratar exaustão como sinal de produtividade",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Uma cultura madura previne riscos e permite falar sobre problemas sem estigma."
  },
  {
    "id": "F2-Q087",
    "fase": 2,
    "subconhecimento": "Bem-estar",
    "dificuldade": "intermediaria",
    "tema": "equipe planeja rotina sustentável de trabalho",
    "enunciado": "Em uma verificação preventiva do posto de trabalho, a equipe identifica que equipe planeja rotina sustentável de trabalho. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "premiar quem nunca se afasta da tela",
        "correta": false
      },
      {
        "texto": "tratar exaustão como sinal de produtividade",
        "correta": false
      },
      {
        "texto": "incentivar pausas, diálogo sobre carga e comunicação de desconfortos",
        "correta": true
      },
      {
        "texto": "proibir que a equipe relate dificuldades",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Uma cultura madura previne riscos e permite falar sobre problemas sem estigma."
  },
  {
    "id": "F2-Q088",
    "fase": 2,
    "subconhecimento": "Bem-estar",
    "dificuldade": "intermediaria",
    "tema": "equipe planeja rotina sustentável de trabalho",
    "enunciado": "Enquanto prepara a estação para uma atividade, você percebe que equipe planeja rotina sustentável de trabalho. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "tratar exaustão como sinal de produtividade",
        "correta": false
      },
      {
        "texto": "proibir que a equipe relate dificuldades",
        "correta": false
      },
      {
        "texto": "premiar quem nunca se afasta da tela",
        "correta": false
      },
      {
        "texto": "incentivar pausas, diálogo sobre carga e comunicação de desconfortos",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Uma cultura madura previne riscos e permite falar sobre problemas sem estigma."
  },
  {
    "id": "F2-Q089",
    "fase": 2,
    "subconhecimento": "Ergonomia",
    "dificuldade": "facil",
    "tema": "uso prolongado de notebook em mesa fixa",
    "enunciado": "No laboratório de TI da Antares, você observa que uso prolongado de notebook em mesa fixa. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "olhar para baixo continuamente para ver a tela",
        "correta": false
      },
      {
        "texto": "colocar o notebook no colo durante toda a jornada",
        "correta": false
      },
      {
        "texto": "usar o teclado com punhos suspensos sem apoio",
        "correta": false
      },
      {
        "texto": "considerar suporte para elevar a tela e periféricos externos quando necessário",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "A tela e os dispositivos de entrada devem permitir postura confortável durante o uso prolongado."
  },
  {
    "id": "F2-Q090",
    "fase": 2,
    "subconhecimento": "Ergonomia",
    "dificuldade": "facil",
    "tema": "uso prolongado de notebook em mesa fixa",
    "enunciado": "Durante a rotina de trabalho no computador, ocorre o seguinte: uso prolongado de notebook em mesa fixa. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "considerar suporte para elevar a tela e periféricos externos quando necessário",
        "correta": true
      },
      {
        "texto": "colocar o notebook no colo durante toda a jornada",
        "correta": false
      },
      {
        "texto": "usar o teclado com punhos suspensos sem apoio",
        "correta": false
      },
      {
        "texto": "olhar para baixo continuamente para ver a tela",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "A tela e os dispositivos de entrada devem permitir postura confortável durante o uso prolongado."
  },
  {
    "id": "F2-Q091",
    "fase": 2,
    "subconhecimento": "Ergonomia",
    "dificuldade": "intermediaria",
    "tema": "uso prolongado de notebook em mesa fixa",
    "enunciado": "Em uma verificação preventiva do posto de trabalho, a equipe identifica que uso prolongado de notebook em mesa fixa. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "usar o teclado com punhos suspensos sem apoio",
        "correta": false
      },
      {
        "texto": "considerar suporte para elevar a tela e periféricos externos quando necessário",
        "correta": true
      },
      {
        "texto": "olhar para baixo continuamente para ver a tela",
        "correta": false
      },
      {
        "texto": "colocar o notebook no colo durante toda a jornada",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "A tela e os dispositivos de entrada devem permitir postura confortável durante o uso prolongado."
  },
  {
    "id": "F2-Q092",
    "fase": 2,
    "subconhecimento": "Ergonomia",
    "dificuldade": "intermediaria",
    "tema": "uso prolongado de notebook em mesa fixa",
    "enunciado": "Enquanto prepara a estação para uma atividade, você percebe que uso prolongado de notebook em mesa fixa. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "olhar para baixo continuamente para ver a tela",
        "correta": false
      },
      {
        "texto": "colocar o notebook no colo durante toda a jornada",
        "correta": false
      },
      {
        "texto": "considerar suporte para elevar a tela e periféricos externos quando necessário",
        "correta": true
      },
      {
        "texto": "usar o teclado com punhos suspensos sem apoio",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "A tela e os dispositivos de entrada devem permitir postura confortável durante o uso prolongado."
  },
  {
    "id": "F2-Q093",
    "fase": 2,
    "subconhecimento": "Gestão de riscos",
    "dificuldade": "facil",
    "tema": "fio de equipamento apresenta dano visível",
    "enunciado": "No laboratório de TI da Antares, você observa que fio de equipamento apresenta dano visível. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "cobrir o dano com fita qualquer e continuar",
        "correta": false
      },
      {
        "texto": "tocar o fio para verificar se está energizado",
        "correta": false
      },
      {
        "texto": "retirar de uso de forma segura, sinalizar e comunicar o responsável",
        "correta": true
      },
      {
        "texto": "emprestar o equipamento a outro setor",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Equipamento danificado não deve continuar em uso até avaliação e reparo autorizados."
  },
  {
    "id": "F2-Q094",
    "fase": 2,
    "subconhecimento": "Gestão de riscos",
    "dificuldade": "facil",
    "tema": "fio de equipamento apresenta dano visível",
    "enunciado": "Durante a rotina de trabalho no computador, ocorre o seguinte: fio de equipamento apresenta dano visível. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "tocar o fio para verificar se está energizado",
        "correta": false
      },
      {
        "texto": "emprestar o equipamento a outro setor",
        "correta": false
      },
      {
        "texto": "cobrir o dano com fita qualquer e continuar",
        "correta": false
      },
      {
        "texto": "retirar de uso de forma segura, sinalizar e comunicar o responsável",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Equipamento danificado não deve continuar em uso até avaliação e reparo autorizados."
  },
  {
    "id": "F2-Q095",
    "fase": 2,
    "subconhecimento": "Gestão de riscos",
    "dificuldade": "intermediaria",
    "tema": "fio de equipamento apresenta dano visível",
    "enunciado": "Em uma verificação preventiva do posto de trabalho, a equipe identifica que fio de equipamento apresenta dano visível. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "retirar de uso de forma segura, sinalizar e comunicar o responsável",
        "correta": true
      },
      {
        "texto": "emprestar o equipamento a outro setor",
        "correta": false
      },
      {
        "texto": "cobrir o dano com fita qualquer e continuar",
        "correta": false
      },
      {
        "texto": "tocar o fio para verificar se está energizado",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Equipamento danificado não deve continuar em uso até avaliação e reparo autorizados."
  },
  {
    "id": "F2-Q096",
    "fase": 2,
    "subconhecimento": "Gestão de riscos",
    "dificuldade": "intermediaria",
    "tema": "fio de equipamento apresenta dano visível",
    "enunciado": "Enquanto prepara a estação para uma atividade, você percebe que fio de equipamento apresenta dano visível. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "cobrir o dano com fita qualquer e continuar",
        "correta": false
      },
      {
        "texto": "retirar de uso de forma segura, sinalizar e comunicar o responsável",
        "correta": true
      },
      {
        "texto": "tocar o fio para verificar se está energizado",
        "correta": false
      },
      {
        "texto": "emprestar o equipamento a outro setor",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Equipamento danificado não deve continuar em uso até avaliação e reparo autorizados."
  },
  {
    "id": "F2-Q097",
    "fase": 2,
    "subconhecimento": "Saúde e rotina",
    "dificuldade": "facil",
    "tema": "desconforto aumenta em dias de tarefas repetitivas",
    "enunciado": "No laboratório de TI da Antares, você observa que desconforto aumenta em dias de tarefas repetitivas. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "copiar a postura de um colega sem avaliar sua necessidade",
        "correta": false
      },
      {
        "texto": "relatar o problema e avaliar ajustes de tarefa e posto de trabalho",
        "correta": true
      },
      {
        "texto": "eliminar pausas para reduzir o tempo total",
        "correta": false
      },
      {
        "texto": "ignorar até que impeça trabalhar",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "A prevenção exige observar sintomas, tarefas e condições de trabalho e buscar ajustes apropriados."
  },
  {
    "id": "F2-Q098",
    "fase": 2,
    "subconhecimento": "Saúde e rotina",
    "dificuldade": "facil",
    "tema": "desconforto aumenta em dias de tarefas repetitivas",
    "enunciado": "Durante a rotina de trabalho no computador, ocorre o seguinte: desconforto aumenta em dias de tarefas repetitivas. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "eliminar pausas para reduzir o tempo total",
        "correta": false
      },
      {
        "texto": "ignorar até que impeça trabalhar",
        "correta": false
      },
      {
        "texto": "relatar o problema e avaliar ajustes de tarefa e posto de trabalho",
        "correta": true
      },
      {
        "texto": "copiar a postura de um colega sem avaliar sua necessidade",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "A prevenção exige observar sintomas, tarefas e condições de trabalho e buscar ajustes apropriados."
  },
  {
    "id": "F2-Q099",
    "fase": 2,
    "subconhecimento": "Saúde e rotina",
    "dificuldade": "intermediaria",
    "tema": "desconforto aumenta em dias de tarefas repetitivas",
    "enunciado": "Em uma verificação preventiva do posto de trabalho, a equipe identifica que desconforto aumenta em dias de tarefas repetitivas. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "ignorar até que impeça trabalhar",
        "correta": false
      },
      {
        "texto": "copiar a postura de um colega sem avaliar sua necessidade",
        "correta": false
      },
      {
        "texto": "eliminar pausas para reduzir o tempo total",
        "correta": false
      },
      {
        "texto": "relatar o problema e avaliar ajustes de tarefa e posto de trabalho",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "A prevenção exige observar sintomas, tarefas e condições de trabalho e buscar ajustes apropriados."
  },
  {
    "id": "F2-Q100",
    "fase": 2,
    "subconhecimento": "Saúde e rotina",
    "dificuldade": "intermediaria",
    "tema": "desconforto aumenta em dias de tarefas repetitivas",
    "enunciado": "Enquanto prepara a estação para uma atividade, você percebe que desconforto aumenta em dias de tarefas repetitivas. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "relatar o problema e avaliar ajustes de tarefa e posto de trabalho",
        "correta": true
      },
      {
        "texto": "copiar a postura de um colega sem avaliar sua necessidade",
        "correta": false
      },
      {
        "texto": "eliminar pausas para reduzir o tempo total",
        "correta": false
      },
      {
        "texto": "ignorar até que impeça trabalhar",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "A prevenção exige observar sintomas, tarefas e condições de trabalho e buscar ajustes apropriados."
  },
  {
    "id": "F3-Q021",
    "fase": 3,
    "subconhecimento": "Propriedade intelectual",
    "dificuldade": "facil",
    "tema": "biblioteca encontrada em repositório público",
    "enunciado": "Em um projeto de software da Antares, você descobre que biblioteca encontrada em repositório público. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "verificar licença, origem, obrigações e compatibilidade com o uso pretendido",
        "correta": true
      },
      {
        "texto": "assumir que tudo que está público é livre para qualquer uso",
        "correta": false
      },
      {
        "texto": "remover o nome do autor e incluir no produto",
        "correta": false
      },
      {
        "texto": "usar sem registrar a dependência",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Disponibilidade pública não elimina direitos autorais nem condições de licença."
  },
  {
    "id": "F3-Q022",
    "fase": 3,
    "subconhecimento": "Propriedade intelectual",
    "dificuldade": "facil",
    "tema": "biblioteca encontrada em repositório público",
    "enunciado": "Antes de liberar uma nova versão, a equipe percebe que biblioteca encontrada em repositório público. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "remover o nome do autor e incluir no produto",
        "correta": false
      },
      {
        "texto": "verificar licença, origem, obrigações e compatibilidade com o uso pretendido",
        "correta": true
      },
      {
        "texto": "usar sem registrar a dependência",
        "correta": false
      },
      {
        "texto": "assumir que tudo que está público é livre para qualquer uso",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Disponibilidade pública não elimina direitos autorais nem condições de licença."
  },
  {
    "id": "F3-Q023",
    "fase": 3,
    "subconhecimento": "Propriedade intelectual",
    "dificuldade": "intermediaria",
    "tema": "biblioteca encontrada em repositório público",
    "enunciado": "Durante a revisão de conformidade do produto, surge a situação: biblioteca encontrada em repositório público. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "usar sem registrar a dependência",
        "correta": false
      },
      {
        "texto": "assumir que tudo que está público é livre para qualquer uso",
        "correta": false
      },
      {
        "texto": "verificar licença, origem, obrigações e compatibilidade com o uso pretendido",
        "correta": true
      },
      {
        "texto": "remover o nome do autor e incluir no produto",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Disponibilidade pública não elimina direitos autorais nem condições de licença."
  },
  {
    "id": "F3-Q024",
    "fase": 3,
    "subconhecimento": "Propriedade intelectual",
    "dificuldade": "intermediaria",
    "tema": "biblioteca encontrada em repositório público",
    "enunciado": "Em uma tarefa de desenvolvimento, um integrante informa que biblioteca encontrada em repositório público. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "assumir que tudo que está público é livre para qualquer uso",
        "correta": false
      },
      {
        "texto": "remover o nome do autor e incluir no produto",
        "correta": false
      },
      {
        "texto": "usar sem registrar a dependência",
        "correta": false
      },
      {
        "texto": "verificar licença, origem, obrigações e compatibilidade com o uso pretendido",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Disponibilidade pública não elimina direitos autorais nem condições de licença."
  },
  {
    "id": "F3-Q025",
    "fase": 3,
    "subconhecimento": "Licenciamento de software",
    "dificuldade": "facil",
    "tema": "pacote open source será incluído em produto comercial",
    "enunciado": "Em um projeto de software da Antares, você descobre que pacote open source será incluído em produto comercial. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "remover os avisos de licença para simplificar a entrega",
        "correta": false
      },
      {
        "texto": "considerar que todo pacote exige publicar todo o código proprietário",
        "correta": false
      },
      {
        "texto": "presumir que open source significa ausência de regras",
        "correta": false
      },
      {
        "texto": "ler a licença e cumprir as obrigações aplicáveis antes da distribuição",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Licenças open source variam; é necessário verificar obrigações concretas e compatibilidade."
  },
  {
    "id": "F3-Q026",
    "fase": 3,
    "subconhecimento": "Licenciamento de software",
    "dificuldade": "facil",
    "tema": "pacote open source será incluído em produto comercial",
    "enunciado": "Antes de liberar uma nova versão, a equipe percebe que pacote open source será incluído em produto comercial. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "ler a licença e cumprir as obrigações aplicáveis antes da distribuição",
        "correta": true
      },
      {
        "texto": "considerar que todo pacote exige publicar todo o código proprietário",
        "correta": false
      },
      {
        "texto": "presumir que open source significa ausência de regras",
        "correta": false
      },
      {
        "texto": "remover os avisos de licença para simplificar a entrega",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Licenças open source variam; é necessário verificar obrigações concretas e compatibilidade."
  },
  {
    "id": "F3-Q027",
    "fase": 3,
    "subconhecimento": "Licenciamento de software",
    "dificuldade": "intermediaria",
    "tema": "pacote open source será incluído em produto comercial",
    "enunciado": "Durante a revisão de conformidade do produto, surge a situação: pacote open source será incluído em produto comercial. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "presumir que open source significa ausência de regras",
        "correta": false
      },
      {
        "texto": "ler a licença e cumprir as obrigações aplicáveis antes da distribuição",
        "correta": true
      },
      {
        "texto": "remover os avisos de licença para simplificar a entrega",
        "correta": false
      },
      {
        "texto": "considerar que todo pacote exige publicar todo o código proprietário",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Licenças open source variam; é necessário verificar obrigações concretas e compatibilidade."
  },
  {
    "id": "F3-Q028",
    "fase": 3,
    "subconhecimento": "Licenciamento de software",
    "dificuldade": "intermediaria",
    "tema": "pacote open source será incluído em produto comercial",
    "enunciado": "Em uma tarefa de desenvolvimento, um integrante informa que pacote open source será incluído em produto comercial. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "remover os avisos de licença para simplificar a entrega",
        "correta": false
      },
      {
        "texto": "considerar que todo pacote exige publicar todo o código proprietário",
        "correta": false
      },
      {
        "texto": "ler a licença e cumprir as obrigações aplicáveis antes da distribuição",
        "correta": true
      },
      {
        "texto": "presumir que open source significa ausência de regras",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Licenças open source variam; é necessário verificar obrigações concretas e compatibilidade."
  },
  {
    "id": "F3-Q029",
    "fase": 3,
    "subconhecimento": "Direitos autorais",
    "dificuldade": "facil",
    "tema": "trecho de código proprietário de fornecedor é encontrado",
    "enunciado": "Em um projeto de software da Antares, você descobre que trecho de código proprietário de fornecedor é encontrado. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "publicar o trecho para pedir que a comunidade valide",
        "correta": false
      },
      {
        "texto": "copiar porque o trecho economiza tempo",
        "correta": false
      },
      {
        "texto": "não reutilizar sem autorização e buscar alternativa legítima",
        "correta": true
      },
      {
        "texto": "mudar nomes de variáveis para torná-lo próprio",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Código protegido não deve ser copiado sem autorização ou base legal adequada."
  },
  {
    "id": "F3-Q030",
    "fase": 3,
    "subconhecimento": "Direitos autorais",
    "dificuldade": "facil",
    "tema": "trecho de código proprietário de fornecedor é encontrado",
    "enunciado": "Antes de liberar uma nova versão, a equipe percebe que trecho de código proprietário de fornecedor é encontrado. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "copiar porque o trecho economiza tempo",
        "correta": false
      },
      {
        "texto": "mudar nomes de variáveis para torná-lo próprio",
        "correta": false
      },
      {
        "texto": "publicar o trecho para pedir que a comunidade valide",
        "correta": false
      },
      {
        "texto": "não reutilizar sem autorização e buscar alternativa legítima",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Código protegido não deve ser copiado sem autorização ou base legal adequada."
  },
  {
    "id": "F3-Q031",
    "fase": 3,
    "subconhecimento": "Direitos autorais",
    "dificuldade": "intermediaria",
    "tema": "trecho de código proprietário de fornecedor é encontrado",
    "enunciado": "Durante a revisão de conformidade do produto, surge a situação: trecho de código proprietário de fornecedor é encontrado. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "não reutilizar sem autorização e buscar alternativa legítima",
        "correta": true
      },
      {
        "texto": "mudar nomes de variáveis para torná-lo próprio",
        "correta": false
      },
      {
        "texto": "publicar o trecho para pedir que a comunidade valide",
        "correta": false
      },
      {
        "texto": "copiar porque o trecho economiza tempo",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Código protegido não deve ser copiado sem autorização ou base legal adequada."
  },
  {
    "id": "F3-Q032",
    "fase": 3,
    "subconhecimento": "Direitos autorais",
    "dificuldade": "intermediaria",
    "tema": "trecho de código proprietário de fornecedor é encontrado",
    "enunciado": "Em uma tarefa de desenvolvimento, um integrante informa que trecho de código proprietário de fornecedor é encontrado. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "publicar o trecho para pedir que a comunidade valide",
        "correta": false
      },
      {
        "texto": "não reutilizar sem autorização e buscar alternativa legítima",
        "correta": true
      },
      {
        "texto": "copiar porque o trecho economiza tempo",
        "correta": false
      },
      {
        "texto": "mudar nomes de variáveis para torná-lo próprio",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Código protegido não deve ser copiado sem autorização ou base legal adequada."
  },
  {
    "id": "F3-Q033",
    "fase": 3,
    "subconhecimento": "Licenciamento de software",
    "dificuldade": "facil",
    "tema": "dependência exige preservar avisos de copyright",
    "enunciado": "Em um projeto de software da Antares, você descobre que dependência exige preservar avisos de copyright. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "apagar os avisos para padronizar o pacote",
        "correta": false
      },
      {
        "texto": "incluir os avisos e textos exigidos pela licença na distribuição",
        "correta": true
      },
      {
        "texto": "atribuir a autoria à equipe Antares",
        "correta": false
      },
      {
        "texto": "ignorar a licença depois que os testes passam",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "As obrigações de atribuição e distribuição da licença precisam ser respeitadas."
  },
  {
    "id": "F3-Q034",
    "fase": 3,
    "subconhecimento": "Licenciamento de software",
    "dificuldade": "facil",
    "tema": "dependência exige preservar avisos de copyright",
    "enunciado": "Antes de liberar uma nova versão, a equipe percebe que dependência exige preservar avisos de copyright. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "atribuir a autoria à equipe Antares",
        "correta": false
      },
      {
        "texto": "ignorar a licença depois que os testes passam",
        "correta": false
      },
      {
        "texto": "incluir os avisos e textos exigidos pela licença na distribuição",
        "correta": true
      },
      {
        "texto": "apagar os avisos para padronizar o pacote",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "As obrigações de atribuição e distribuição da licença precisam ser respeitadas."
  },
  {
    "id": "F3-Q035",
    "fase": 3,
    "subconhecimento": "Licenciamento de software",
    "dificuldade": "intermediaria",
    "tema": "dependência exige preservar avisos de copyright",
    "enunciado": "Durante a revisão de conformidade do produto, surge a situação: dependência exige preservar avisos de copyright. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "ignorar a licença depois que os testes passam",
        "correta": false
      },
      {
        "texto": "apagar os avisos para padronizar o pacote",
        "correta": false
      },
      {
        "texto": "atribuir a autoria à equipe Antares",
        "correta": false
      },
      {
        "texto": "incluir os avisos e textos exigidos pela licença na distribuição",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "As obrigações de atribuição e distribuição da licença precisam ser respeitadas."
  },
  {
    "id": "F3-Q036",
    "fase": 3,
    "subconhecimento": "Licenciamento de software",
    "dificuldade": "intermediaria",
    "tema": "dependência exige preservar avisos de copyright",
    "enunciado": "Em uma tarefa de desenvolvimento, um integrante informa que dependência exige preservar avisos de copyright. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "incluir os avisos e textos exigidos pela licença na distribuição",
        "correta": true
      },
      {
        "texto": "apagar os avisos para padronizar o pacote",
        "correta": false
      },
      {
        "texto": "atribuir a autoria à equipe Antares",
        "correta": false
      },
      {
        "texto": "ignorar a licença depois que os testes passam",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "As obrigações de atribuição e distribuição da licença precisam ser respeitadas."
  },
  {
    "id": "F3-Q037",
    "fase": 3,
    "subconhecimento": "Propriedade intelectual",
    "dificuldade": "facil",
    "tema": "código desenvolvido em projeto será reutilizado em outro contexto",
    "enunciado": "Em um projeto de software da Antares, você descobre que código desenvolvido em projeto será reutilizado em outro contexto. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "consultar contrato, política e direitos aplicáveis antes de reutilizar",
        "correta": true
      },
      {
        "texto": "copiar o repositório inteiro para uma conta pessoal",
        "correta": false
      },
      {
        "texto": "alterar comentários para remover referências à empresa",
        "correta": false
      },
      {
        "texto": "presumir que o autor pode levar qualquer código de projeto",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Direitos e permissões dependem do contexto contratual e das políticas aplicáveis."
  },
  {
    "id": "F3-Q038",
    "fase": 3,
    "subconhecimento": "Propriedade intelectual",
    "dificuldade": "facil",
    "tema": "código desenvolvido em projeto será reutilizado em outro contexto",
    "enunciado": "Antes de liberar uma nova versão, a equipe percebe que código desenvolvido em projeto será reutilizado em outro contexto. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "alterar comentários para remover referências à empresa",
        "correta": false
      },
      {
        "texto": "consultar contrato, política e direitos aplicáveis antes de reutilizar",
        "correta": true
      },
      {
        "texto": "presumir que o autor pode levar qualquer código de projeto",
        "correta": false
      },
      {
        "texto": "copiar o repositório inteiro para uma conta pessoal",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Direitos e permissões dependem do contexto contratual e das políticas aplicáveis."
  },
  {
    "id": "F3-Q039",
    "fase": 3,
    "subconhecimento": "Propriedade intelectual",
    "dificuldade": "intermediaria",
    "tema": "código desenvolvido em projeto será reutilizado em outro contexto",
    "enunciado": "Durante a revisão de conformidade do produto, surge a situação: código desenvolvido em projeto será reutilizado em outro contexto. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "presumir que o autor pode levar qualquer código de projeto",
        "correta": false
      },
      {
        "texto": "copiar o repositório inteiro para uma conta pessoal",
        "correta": false
      },
      {
        "texto": "consultar contrato, política e direitos aplicáveis antes de reutilizar",
        "correta": true
      },
      {
        "texto": "alterar comentários para remover referências à empresa",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Direitos e permissões dependem do contexto contratual e das políticas aplicáveis."
  },
  {
    "id": "F3-Q040",
    "fase": 3,
    "subconhecimento": "Propriedade intelectual",
    "dificuldade": "intermediaria",
    "tema": "código desenvolvido em projeto será reutilizado em outro contexto",
    "enunciado": "Em uma tarefa de desenvolvimento, um integrante informa que código desenvolvido em projeto será reutilizado em outro contexto. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "copiar o repositório inteiro para uma conta pessoal",
        "correta": false
      },
      {
        "texto": "alterar comentários para remover referências à empresa",
        "correta": false
      },
      {
        "texto": "presumir que o autor pode levar qualquer código de projeto",
        "correta": false
      },
      {
        "texto": "consultar contrato, política e direitos aplicáveis antes de reutilizar",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Direitos e permissões dependem do contexto contratual e das políticas aplicáveis."
  },
  {
    "id": "F3-Q041",
    "fase": 3,
    "subconhecimento": "LGPD e dados pessoais",
    "dificuldade": "facil",
    "tema": "testes precisam de dados semelhantes aos de clientes",
    "enunciado": "Em um projeto de software da Antares, você descobre que testes precisam de dados semelhantes aos de clientes. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "usar os dados sem limitar acessos",
        "correta": false
      },
      {
        "texto": "copiar a base real para um notebook pessoal",
        "correta": false
      },
      {
        "texto": "enviar a planilha a uma conta particular para trabalhar em casa",
        "correta": false
      },
      {
        "texto": "preferir dados sintéticos ou anonimizados e seguir o processo aprovado",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Dados de teste devem reduzir exposição e seguir finalidade, necessidade e controles apropriados."
  },
  {
    "id": "F3-Q042",
    "fase": 3,
    "subconhecimento": "LGPD e dados pessoais",
    "dificuldade": "facil",
    "tema": "testes precisam de dados semelhantes aos de clientes",
    "enunciado": "Antes de liberar uma nova versão, a equipe percebe que testes precisam de dados semelhantes aos de clientes. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "preferir dados sintéticos ou anonimizados e seguir o processo aprovado",
        "correta": true
      },
      {
        "texto": "copiar a base real para um notebook pessoal",
        "correta": false
      },
      {
        "texto": "enviar a planilha a uma conta particular para trabalhar em casa",
        "correta": false
      },
      {
        "texto": "usar os dados sem limitar acessos",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Dados de teste devem reduzir exposição e seguir finalidade, necessidade e controles apropriados."
  },
  {
    "id": "F3-Q043",
    "fase": 3,
    "subconhecimento": "LGPD e dados pessoais",
    "dificuldade": "intermediaria",
    "tema": "testes precisam de dados semelhantes aos de clientes",
    "enunciado": "Durante a revisão de conformidade do produto, surge a situação: testes precisam de dados semelhantes aos de clientes. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "enviar a planilha a uma conta particular para trabalhar em casa",
        "correta": false
      },
      {
        "texto": "preferir dados sintéticos ou anonimizados e seguir o processo aprovado",
        "correta": true
      },
      {
        "texto": "usar os dados sem limitar acessos",
        "correta": false
      },
      {
        "texto": "copiar a base real para um notebook pessoal",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Dados de teste devem reduzir exposição e seguir finalidade, necessidade e controles apropriados."
  },
  {
    "id": "F3-Q044",
    "fase": 3,
    "subconhecimento": "LGPD e dados pessoais",
    "dificuldade": "intermediaria",
    "tema": "testes precisam de dados semelhantes aos de clientes",
    "enunciado": "Em uma tarefa de desenvolvimento, um integrante informa que testes precisam de dados semelhantes aos de clientes. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "usar os dados sem limitar acessos",
        "correta": false
      },
      {
        "texto": "copiar a base real para um notebook pessoal",
        "correta": false
      },
      {
        "texto": "preferir dados sintéticos ou anonimizados e seguir o processo aprovado",
        "correta": true
      },
      {
        "texto": "enviar a planilha a uma conta particular para trabalhar em casa",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Dados de teste devem reduzir exposição e seguir finalidade, necessidade e controles apropriados."
  },
  {
    "id": "F3-Q045",
    "fase": 3,
    "subconhecimento": "LGPD e transparência",
    "dificuldade": "facil",
    "tema": "usuário pergunta por que o aplicativo coleta localização",
    "enunciado": "Em um projeto de software da Antares, você descobre que usuário pergunta por que o aplicativo coleta localização. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "responder que o aplicativo coleta tudo por padrão",
        "correta": false
      },
      {
        "texto": "esconder a finalidade em texto incompreensível",
        "correta": false
      },
      {
        "texto": "explicar finalidade e tratamento de forma clara e conforme a política aplicável",
        "correta": true
      },
      {
        "texto": "usar a localização para qualquer finalidade futura sem avaliação",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Transparência exige explicar o tratamento e respeitar finalidade e bases aplicáveis."
  },
  {
    "id": "F3-Q046",
    "fase": 3,
    "subconhecimento": "LGPD e transparência",
    "dificuldade": "facil",
    "tema": "usuário pergunta por que o aplicativo coleta localização",
    "enunciado": "Antes de liberar uma nova versão, a equipe percebe que usuário pergunta por que o aplicativo coleta localização. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "esconder a finalidade em texto incompreensível",
        "correta": false
      },
      {
        "texto": "usar a localização para qualquer finalidade futura sem avaliação",
        "correta": false
      },
      {
        "texto": "responder que o aplicativo coleta tudo por padrão",
        "correta": false
      },
      {
        "texto": "explicar finalidade e tratamento de forma clara e conforme a política aplicável",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Transparência exige explicar o tratamento e respeitar finalidade e bases aplicáveis."
  },
  {
    "id": "F3-Q047",
    "fase": 3,
    "subconhecimento": "LGPD e transparência",
    "dificuldade": "intermediaria",
    "tema": "usuário pergunta por que o aplicativo coleta localização",
    "enunciado": "Durante a revisão de conformidade do produto, surge a situação: usuário pergunta por que o aplicativo coleta localização. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "explicar finalidade e tratamento de forma clara e conforme a política aplicável",
        "correta": true
      },
      {
        "texto": "usar a localização para qualquer finalidade futura sem avaliação",
        "correta": false
      },
      {
        "texto": "responder que o aplicativo coleta tudo por padrão",
        "correta": false
      },
      {
        "texto": "esconder a finalidade em texto incompreensível",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Transparência exige explicar o tratamento e respeitar finalidade e bases aplicáveis."
  },
  {
    "id": "F3-Q048",
    "fase": 3,
    "subconhecimento": "LGPD e transparência",
    "dificuldade": "intermediaria",
    "tema": "usuário pergunta por que o aplicativo coleta localização",
    "enunciado": "Em uma tarefa de desenvolvimento, um integrante informa que usuário pergunta por que o aplicativo coleta localização. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "responder que o aplicativo coleta tudo por padrão",
        "correta": false
      },
      {
        "texto": "explicar finalidade e tratamento de forma clara e conforme a política aplicável",
        "correta": true
      },
      {
        "texto": "esconder a finalidade em texto incompreensível",
        "correta": false
      },
      {
        "texto": "usar a localização para qualquer finalidade futura sem avaliação",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Transparência exige explicar o tratamento e respeitar finalidade e bases aplicáveis."
  },
  {
    "id": "F3-Q049",
    "fase": 3,
    "subconhecimento": "Segurança digital",
    "dificuldade": "facil",
    "tema": "e-mail inesperado pede senha para evitar bloqueio",
    "enunciado": "Em um projeto de software da Antares, você descobre que e-mail inesperado pede senha para evitar bloqueio. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "encaminhar a senha ao remetente para validar identidade",
        "correta": false
      },
      {
        "texto": "não fornecer credenciais, verificar por canal oficial e reportar suspeita",
        "correta": true
      },
      {
        "texto": "baixar anexos antes de verificar a origem",
        "correta": false
      },
      {
        "texto": "clicar no link e digitar a senha para confirmar",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Solicitações urgentes de senha podem ser phishing; use canais oficiais e reporte."
  },
  {
    "id": "F3-Q050",
    "fase": 3,
    "subconhecimento": "Segurança digital",
    "dificuldade": "facil",
    "tema": "e-mail inesperado pede senha para evitar bloqueio",
    "enunciado": "Antes de liberar uma nova versão, a equipe percebe que e-mail inesperado pede senha para evitar bloqueio. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "baixar anexos antes de verificar a origem",
        "correta": false
      },
      {
        "texto": "clicar no link e digitar a senha para confirmar",
        "correta": false
      },
      {
        "texto": "não fornecer credenciais, verificar por canal oficial e reportar suspeita",
        "correta": true
      },
      {
        "texto": "encaminhar a senha ao remetente para validar identidade",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Solicitações urgentes de senha podem ser phishing; use canais oficiais e reporte."
  },
  {
    "id": "F3-Q051",
    "fase": 3,
    "subconhecimento": "Segurança digital",
    "dificuldade": "intermediaria",
    "tema": "e-mail inesperado pede senha para evitar bloqueio",
    "enunciado": "Durante a revisão de conformidade do produto, surge a situação: e-mail inesperado pede senha para evitar bloqueio. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "clicar no link e digitar a senha para confirmar",
        "correta": false
      },
      {
        "texto": "encaminhar a senha ao remetente para validar identidade",
        "correta": false
      },
      {
        "texto": "baixar anexos antes de verificar a origem",
        "correta": false
      },
      {
        "texto": "não fornecer credenciais, verificar por canal oficial e reportar suspeita",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Solicitações urgentes de senha podem ser phishing; use canais oficiais e reporte."
  },
  {
    "id": "F3-Q052",
    "fase": 3,
    "subconhecimento": "Segurança digital",
    "dificuldade": "intermediaria",
    "tema": "e-mail inesperado pede senha para evitar bloqueio",
    "enunciado": "Em uma tarefa de desenvolvimento, um integrante informa que e-mail inesperado pede senha para evitar bloqueio. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "não fornecer credenciais, verificar por canal oficial e reportar suspeita",
        "correta": true
      },
      {
        "texto": "encaminhar a senha ao remetente para validar identidade",
        "correta": false
      },
      {
        "texto": "baixar anexos antes de verificar a origem",
        "correta": false
      },
      {
        "texto": "clicar no link e digitar a senha para confirmar",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Solicitações urgentes de senha podem ser phishing; use canais oficiais e reporte."
  },
  {
    "id": "F3-Q053",
    "fase": 3,
    "subconhecimento": "IA responsável",
    "dificuldade": "facil",
    "tema": "assistente de IA sugere código para função crítica",
    "enunciado": "Em um projeto de software da Antares, você descobre que assistente de IA sugere código para função crítica. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "revisar, testar, verificar segurança e licenças antes de integrar",
        "correta": true
      },
      {
        "texto": "presumir que o código gerado não tem riscos",
        "correta": false
      },
      {
        "texto": "aceitar o código sem revisão porque veio de ferramenta conhecida",
        "correta": false
      },
      {
        "texto": "incluir dados pessoais reais no prompt sem autorização",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Código gerado por IA requer validação técnica, de segurança e de conformidade."
  },
  {
    "id": "F3-Q054",
    "fase": 3,
    "subconhecimento": "IA responsável",
    "dificuldade": "facil",
    "tema": "assistente de IA sugere código para função crítica",
    "enunciado": "Antes de liberar uma nova versão, a equipe percebe que assistente de IA sugere código para função crítica. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "aceitar o código sem revisão porque veio de ferramenta conhecida",
        "correta": false
      },
      {
        "texto": "revisar, testar, verificar segurança e licenças antes de integrar",
        "correta": true
      },
      {
        "texto": "incluir dados pessoais reais no prompt sem autorização",
        "correta": false
      },
      {
        "texto": "presumir que o código gerado não tem riscos",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Código gerado por IA requer validação técnica, de segurança e de conformidade."
  },
  {
    "id": "F3-Q055",
    "fase": 3,
    "subconhecimento": "IA responsável",
    "dificuldade": "intermediaria",
    "tema": "assistente de IA sugere código para função crítica",
    "enunciado": "Durante a revisão de conformidade do produto, surge a situação: assistente de IA sugere código para função crítica. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "incluir dados pessoais reais no prompt sem autorização",
        "correta": false
      },
      {
        "texto": "presumir que o código gerado não tem riscos",
        "correta": false
      },
      {
        "texto": "revisar, testar, verificar segurança e licenças antes de integrar",
        "correta": true
      },
      {
        "texto": "aceitar o código sem revisão porque veio de ferramenta conhecida",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Código gerado por IA requer validação técnica, de segurança e de conformidade."
  },
  {
    "id": "F3-Q056",
    "fase": 3,
    "subconhecimento": "IA responsável",
    "dificuldade": "intermediaria",
    "tema": "assistente de IA sugere código para função crítica",
    "enunciado": "Em uma tarefa de desenvolvimento, um integrante informa que assistente de IA sugere código para função crítica. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "presumir que o código gerado não tem riscos",
        "correta": false
      },
      {
        "texto": "aceitar o código sem revisão porque veio de ferramenta conhecida",
        "correta": false
      },
      {
        "texto": "incluir dados pessoais reais no prompt sem autorização",
        "correta": false
      },
      {
        "texto": "revisar, testar, verificar segurança e licenças antes de integrar",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Código gerado por IA requer validação técnica, de segurança e de conformidade."
  },
  {
    "id": "F3-Q057",
    "fase": 3,
    "subconhecimento": "IA responsável",
    "dificuldade": "facil",
    "tema": "ferramenta de IA afirma que uma biblioteca tem licença permissiva sem fonte",
    "enunciado": "Em um projeto de software da Antares, você descobre que ferramenta de IA afirma que uma biblioteca tem licença permissiva sem fonte. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "confiar apenas na resposta da IA",
        "correta": false
      },
      {
        "texto": "ignorar a licença se o código compilar",
        "correta": false
      },
      {
        "texto": "declarar a biblioteca como própria",
        "correta": false
      },
      {
        "texto": "verificar a licença em fonte oficial ou repositório confiável",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Saídas de IA podem conter erros; fatos jurídicos e licenças devem ser verificados."
  },
  {
    "id": "F3-Q058",
    "fase": 3,
    "subconhecimento": "IA responsável",
    "dificuldade": "facil",
    "tema": "ferramenta de IA afirma que uma biblioteca tem licença permissiva sem fonte",
    "enunciado": "Antes de liberar uma nova versão, a equipe percebe que ferramenta de IA afirma que uma biblioteca tem licença permissiva sem fonte. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "verificar a licença em fonte oficial ou repositório confiável",
        "correta": true
      },
      {
        "texto": "ignorar a licença se o código compilar",
        "correta": false
      },
      {
        "texto": "declarar a biblioteca como própria",
        "correta": false
      },
      {
        "texto": "confiar apenas na resposta da IA",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Saídas de IA podem conter erros; fatos jurídicos e licenças devem ser verificados."
  },
  {
    "id": "F3-Q059",
    "fase": 3,
    "subconhecimento": "IA responsável",
    "dificuldade": "intermediaria",
    "tema": "ferramenta de IA afirma que uma biblioteca tem licença permissiva sem fonte",
    "enunciado": "Durante a revisão de conformidade do produto, surge a situação: ferramenta de IA afirma que uma biblioteca tem licença permissiva sem fonte. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "declarar a biblioteca como própria",
        "correta": false
      },
      {
        "texto": "verificar a licença em fonte oficial ou repositório confiável",
        "correta": true
      },
      {
        "texto": "confiar apenas na resposta da IA",
        "correta": false
      },
      {
        "texto": "ignorar a licença se o código compilar",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Saídas de IA podem conter erros; fatos jurídicos e licenças devem ser verificados."
  },
  {
    "id": "F3-Q060",
    "fase": 3,
    "subconhecimento": "IA responsável",
    "dificuldade": "intermediaria",
    "tema": "ferramenta de IA afirma que uma biblioteca tem licença permissiva sem fonte",
    "enunciado": "Em uma tarefa de desenvolvimento, um integrante informa que ferramenta de IA afirma que uma biblioteca tem licença permissiva sem fonte. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "confiar apenas na resposta da IA",
        "correta": false
      },
      {
        "texto": "ignorar a licença se o código compilar",
        "correta": false
      },
      {
        "texto": "verificar a licença em fonte oficial ou repositório confiável",
        "correta": true
      },
      {
        "texto": "declarar a biblioteca como própria",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Saídas de IA podem conter erros; fatos jurídicos e licenças devem ser verificados."
  },
  {
    "id": "F3-Q061",
    "fase": 3,
    "subconhecimento": "Segurança e privacidade",
    "dificuldade": "facil",
    "tema": "serviço online não aprovado pede arquivo de produção",
    "enunciado": "Em um projeto de software da Antares, você descobre que serviço online não aprovado pede arquivo de produção. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "remover apenas o nome do arquivo e enviar o restante",
        "correta": false
      },
      {
        "texto": "usar a conta pessoal para evitar o controle corporativo",
        "correta": false
      },
      {
        "texto": "não enviar dados e consultar o processo autorizado para ferramentas e compartilhamento",
        "correta": true
      },
      {
        "texto": "subir o arquivo e apagar depois",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Dados de produção precisam de proteção e de ferramentas aprovadas."
  },
  {
    "id": "F3-Q062",
    "fase": 3,
    "subconhecimento": "Segurança e privacidade",
    "dificuldade": "facil",
    "tema": "serviço online não aprovado pede arquivo de produção",
    "enunciado": "Antes de liberar uma nova versão, a equipe percebe que serviço online não aprovado pede arquivo de produção. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "usar a conta pessoal para evitar o controle corporativo",
        "correta": false
      },
      {
        "texto": "subir o arquivo e apagar depois",
        "correta": false
      },
      {
        "texto": "remover apenas o nome do arquivo e enviar o restante",
        "correta": false
      },
      {
        "texto": "não enviar dados e consultar o processo autorizado para ferramentas e compartilhamento",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Dados de produção precisam de proteção e de ferramentas aprovadas."
  },
  {
    "id": "F3-Q063",
    "fase": 3,
    "subconhecimento": "Segurança e privacidade",
    "dificuldade": "intermediaria",
    "tema": "serviço online não aprovado pede arquivo de produção",
    "enunciado": "Durante a revisão de conformidade do produto, surge a situação: serviço online não aprovado pede arquivo de produção. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "não enviar dados e consultar o processo autorizado para ferramentas e compartilhamento",
        "correta": true
      },
      {
        "texto": "subir o arquivo e apagar depois",
        "correta": false
      },
      {
        "texto": "remover apenas o nome do arquivo e enviar o restante",
        "correta": false
      },
      {
        "texto": "usar a conta pessoal para evitar o controle corporativo",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Dados de produção precisam de proteção e de ferramentas aprovadas."
  },
  {
    "id": "F3-Q064",
    "fase": 3,
    "subconhecimento": "Segurança e privacidade",
    "dificuldade": "intermediaria",
    "tema": "serviço online não aprovado pede arquivo de produção",
    "enunciado": "Em uma tarefa de desenvolvimento, um integrante informa que serviço online não aprovado pede arquivo de produção. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "remover apenas o nome do arquivo e enviar o restante",
        "correta": false
      },
      {
        "texto": "não enviar dados e consultar o processo autorizado para ferramentas e compartilhamento",
        "correta": true
      },
      {
        "texto": "usar a conta pessoal para evitar o controle corporativo",
        "correta": false
      },
      {
        "texto": "subir o arquivo e apagar depois",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Dados de produção precisam de proteção e de ferramentas aprovadas."
  },
  {
    "id": "F3-Q065",
    "fase": 3,
    "subconhecimento": "Propriedade intelectual",
    "dificuldade": "facil",
    "tema": "imagem encontrada em buscador será usada em tela de login",
    "enunciado": "Em um projeto de software da Antares, você descobre que imagem encontrada em buscador será usada em tela de login. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "usar a imagem sem registrar a origem",
        "correta": false
      },
      {
        "texto": "verificar licença e obter autorização ou usar recurso com permissão adequada",
        "correta": true
      },
      {
        "texto": "considerar que resultados de busca são livres",
        "correta": false
      },
      {
        "texto": "cortar a marca d’água e publicar",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Imagens também podem estar protegidas; é preciso verificar direitos e condições de uso."
  },
  {
    "id": "F3-Q066",
    "fase": 3,
    "subconhecimento": "Propriedade intelectual",
    "dificuldade": "facil",
    "tema": "imagem encontrada em buscador será usada em tela de login",
    "enunciado": "Antes de liberar uma nova versão, a equipe percebe que imagem encontrada em buscador será usada em tela de login. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "considerar que resultados de busca são livres",
        "correta": false
      },
      {
        "texto": "cortar a marca d’água e publicar",
        "correta": false
      },
      {
        "texto": "verificar licença e obter autorização ou usar recurso com permissão adequada",
        "correta": true
      },
      {
        "texto": "usar a imagem sem registrar a origem",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Imagens também podem estar protegidas; é preciso verificar direitos e condições de uso."
  },
  {
    "id": "F3-Q067",
    "fase": 3,
    "subconhecimento": "Propriedade intelectual",
    "dificuldade": "intermediaria",
    "tema": "imagem encontrada em buscador será usada em tela de login",
    "enunciado": "Durante a revisão de conformidade do produto, surge a situação: imagem encontrada em buscador será usada em tela de login. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "cortar a marca d’água e publicar",
        "correta": false
      },
      {
        "texto": "usar a imagem sem registrar a origem",
        "correta": false
      },
      {
        "texto": "considerar que resultados de busca são livres",
        "correta": false
      },
      {
        "texto": "verificar licença e obter autorização ou usar recurso com permissão adequada",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Imagens também podem estar protegidas; é preciso verificar direitos e condições de uso."
  },
  {
    "id": "F3-Q068",
    "fase": 3,
    "subconhecimento": "Propriedade intelectual",
    "dificuldade": "intermediaria",
    "tema": "imagem encontrada em buscador será usada em tela de login",
    "enunciado": "Em uma tarefa de desenvolvimento, um integrante informa que imagem encontrada em buscador será usada em tela de login. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "verificar licença e obter autorização ou usar recurso com permissão adequada",
        "correta": true
      },
      {
        "texto": "usar a imagem sem registrar a origem",
        "correta": false
      },
      {
        "texto": "considerar que resultados de busca são livres",
        "correta": false
      },
      {
        "texto": "cortar a marca d’água e publicar",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Imagens também podem estar protegidas; é preciso verificar direitos e condições de uso."
  },
  {
    "id": "F3-Q069",
    "fase": 3,
    "subconhecimento": "Licenciamento de software",
    "dificuldade": "facil",
    "tema": "equipe precisa controlar bibliotecas de terceiros",
    "enunciado": "Em um projeto de software da Antares, você descobre que equipe precisa controlar bibliotecas de terceiros. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "manter inventário de dependências, versões, licenças e avisos necessários",
        "correta": true
      },
      {
        "texto": "adicionar bibliotecas sem registrar origem",
        "correta": false
      },
      {
        "texto": "apagar arquivos de licença para reduzir tamanho",
        "correta": false
      },
      {
        "texto": "atualizar dependências sem revisão de compatibilidade",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Inventário e revisão de dependências apoiam conformidade e manutenção segura."
  },
  {
    "id": "F3-Q070",
    "fase": 3,
    "subconhecimento": "Licenciamento de software",
    "dificuldade": "facil",
    "tema": "equipe precisa controlar bibliotecas de terceiros",
    "enunciado": "Antes de liberar uma nova versão, a equipe percebe que equipe precisa controlar bibliotecas de terceiros. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "apagar arquivos de licença para reduzir tamanho",
        "correta": false
      },
      {
        "texto": "manter inventário de dependências, versões, licenças e avisos necessários",
        "correta": true
      },
      {
        "texto": "atualizar dependências sem revisão de compatibilidade",
        "correta": false
      },
      {
        "texto": "adicionar bibliotecas sem registrar origem",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Inventário e revisão de dependências apoiam conformidade e manutenção segura."
  },
  {
    "id": "F3-Q071",
    "fase": 3,
    "subconhecimento": "Licenciamento de software",
    "dificuldade": "intermediaria",
    "tema": "equipe precisa controlar bibliotecas de terceiros",
    "enunciado": "Durante a revisão de conformidade do produto, surge a situação: equipe precisa controlar bibliotecas de terceiros. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "atualizar dependências sem revisão de compatibilidade",
        "correta": false
      },
      {
        "texto": "adicionar bibliotecas sem registrar origem",
        "correta": false
      },
      {
        "texto": "manter inventário de dependências, versões, licenças e avisos necessários",
        "correta": true
      },
      {
        "texto": "apagar arquivos de licença para reduzir tamanho",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Inventário e revisão de dependências apoiam conformidade e manutenção segura."
  },
  {
    "id": "F3-Q072",
    "fase": 3,
    "subconhecimento": "Licenciamento de software",
    "dificuldade": "intermediaria",
    "tema": "equipe precisa controlar bibliotecas de terceiros",
    "enunciado": "Em uma tarefa de desenvolvimento, um integrante informa que equipe precisa controlar bibliotecas de terceiros. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "adicionar bibliotecas sem registrar origem",
        "correta": false
      },
      {
        "texto": "apagar arquivos de licença para reduzir tamanho",
        "correta": false
      },
      {
        "texto": "atualizar dependências sem revisão de compatibilidade",
        "correta": false
      },
      {
        "texto": "manter inventário de dependências, versões, licenças e avisos necessários",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Inventário e revisão de dependências apoiam conformidade e manutenção segura."
  },
  {
    "id": "F3-Q073",
    "fase": 3,
    "subconhecimento": "LGPD e incidentes",
    "dificuldade": "facil",
    "tema": "arquivo com dados pessoais foi enviado a destinatário errado",
    "enunciado": "Em um projeto de software da Antares, você descobre que arquivo com dados pessoais foi enviado a destinatário errado. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "pedir ao destinatário para ignorar sem reportar",
        "correta": false
      },
      {
        "texto": "publicar o incidente em rede social com os dados anexados",
        "correta": false
      },
      {
        "texto": "apagar a mensagem enviada e não contar a ninguém",
        "correta": false
      },
      {
        "texto": "comunicar imediatamente pelo fluxo interno de incidentes e seguir orientação de contenção",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Incidentes devem ser reportados rapidamente para avaliação e resposta apropriada."
  },
  {
    "id": "F3-Q074",
    "fase": 3,
    "subconhecimento": "LGPD e incidentes",
    "dificuldade": "facil",
    "tema": "arquivo com dados pessoais foi enviado a destinatário errado",
    "enunciado": "Antes de liberar uma nova versão, a equipe percebe que arquivo com dados pessoais foi enviado a destinatário errado. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "comunicar imediatamente pelo fluxo interno de incidentes e seguir orientação de contenção",
        "correta": true
      },
      {
        "texto": "publicar o incidente em rede social com os dados anexados",
        "correta": false
      },
      {
        "texto": "apagar a mensagem enviada e não contar a ninguém",
        "correta": false
      },
      {
        "texto": "pedir ao destinatário para ignorar sem reportar",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Incidentes devem ser reportados rapidamente para avaliação e resposta apropriada."
  },
  {
    "id": "F3-Q075",
    "fase": 3,
    "subconhecimento": "LGPD e incidentes",
    "dificuldade": "intermediaria",
    "tema": "arquivo com dados pessoais foi enviado a destinatário errado",
    "enunciado": "Durante a revisão de conformidade do produto, surge a situação: arquivo com dados pessoais foi enviado a destinatário errado. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "apagar a mensagem enviada e não contar a ninguém",
        "correta": false
      },
      {
        "texto": "comunicar imediatamente pelo fluxo interno de incidentes e seguir orientação de contenção",
        "correta": true
      },
      {
        "texto": "pedir ao destinatário para ignorar sem reportar",
        "correta": false
      },
      {
        "texto": "publicar o incidente em rede social com os dados anexados",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Incidentes devem ser reportados rapidamente para avaliação e resposta apropriada."
  },
  {
    "id": "F3-Q076",
    "fase": 3,
    "subconhecimento": "LGPD e incidentes",
    "dificuldade": "intermediaria",
    "tema": "arquivo com dados pessoais foi enviado a destinatário errado",
    "enunciado": "Em uma tarefa de desenvolvimento, um integrante informa que arquivo com dados pessoais foi enviado a destinatário errado. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "pedir ao destinatário para ignorar sem reportar",
        "correta": false
      },
      {
        "texto": "publicar o incidente em rede social com os dados anexados",
        "correta": false
      },
      {
        "texto": "comunicar imediatamente pelo fluxo interno de incidentes e seguir orientação de contenção",
        "correta": true
      },
      {
        "texto": "apagar a mensagem enviada e não contar a ninguém",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Incidentes devem ser reportados rapidamente para avaliação e resposta apropriada."
  },
  {
    "id": "F3-Q077",
    "fase": 3,
    "subconhecimento": "Ética e compliance em IA",
    "dificuldade": "facil",
    "tema": "ferramenta de seleção parece discriminar um grupo sem justificativa",
    "enunciado": "Em um projeto de software da Antares, você descobre que ferramenta de seleção parece discriminar um grupo sem justificativa. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "assumir que a decisão é neutra por ter sido gerada por algoritmo",
        "correta": false
      },
      {
        "texto": "continuar usando porque o modelo é automatizado",
        "correta": false
      },
      {
        "texto": "registrar evidências e encaminhar para avaliação humana, técnica e de conformidade",
        "correta": true
      },
      {
        "texto": "ocultar os resultados para evitar atrasos",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Sistemas de IA podem reproduzir vieses e precisam de avaliação e supervisão adequadas."
  },
  {
    "id": "F3-Q078",
    "fase": 3,
    "subconhecimento": "Ética e compliance em IA",
    "dificuldade": "facil",
    "tema": "ferramenta de seleção parece discriminar um grupo sem justificativa",
    "enunciado": "Antes de liberar uma nova versão, a equipe percebe que ferramenta de seleção parece discriminar um grupo sem justificativa. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "continuar usando porque o modelo é automatizado",
        "correta": false
      },
      {
        "texto": "ocultar os resultados para evitar atrasos",
        "correta": false
      },
      {
        "texto": "assumir que a decisão é neutra por ter sido gerada por algoritmo",
        "correta": false
      },
      {
        "texto": "registrar evidências e encaminhar para avaliação humana, técnica e de conformidade",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Sistemas de IA podem reproduzir vieses e precisam de avaliação e supervisão adequadas."
  },
  {
    "id": "F3-Q079",
    "fase": 3,
    "subconhecimento": "Ética e compliance em IA",
    "dificuldade": "intermediaria",
    "tema": "ferramenta de seleção parece discriminar um grupo sem justificativa",
    "enunciado": "Durante a revisão de conformidade do produto, surge a situação: ferramenta de seleção parece discriminar um grupo sem justificativa. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "registrar evidências e encaminhar para avaliação humana, técnica e de conformidade",
        "correta": true
      },
      {
        "texto": "ocultar os resultados para evitar atrasos",
        "correta": false
      },
      {
        "texto": "assumir que a decisão é neutra por ter sido gerada por algoritmo",
        "correta": false
      },
      {
        "texto": "continuar usando porque o modelo é automatizado",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Sistemas de IA podem reproduzir vieses e precisam de avaliação e supervisão adequadas."
  },
  {
    "id": "F3-Q080",
    "fase": 3,
    "subconhecimento": "Ética e compliance em IA",
    "dificuldade": "intermediaria",
    "tema": "ferramenta de seleção parece discriminar um grupo sem justificativa",
    "enunciado": "Em uma tarefa de desenvolvimento, um integrante informa que ferramenta de seleção parece discriminar um grupo sem justificativa. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "assumir que a decisão é neutra por ter sido gerada por algoritmo",
        "correta": false
      },
      {
        "texto": "registrar evidências e encaminhar para avaliação humana, técnica e de conformidade",
        "correta": true
      },
      {
        "texto": "continuar usando porque o modelo é automatizado",
        "correta": false
      },
      {
        "texto": "ocultar os resultados para evitar atrasos",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Sistemas de IA podem reproduzir vieses e precisam de avaliação e supervisão adequadas."
  },
  {
    "id": "F3-Q081",
    "fase": 3,
    "subconhecimento": "Segurança digital",
    "dificuldade": "facil",
    "tema": "chave de API foi publicada em repositório público",
    "enunciado": "Em um projeto de software da Antares, você descobre que chave de API foi publicada em repositório público. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "apagar o commit e considerar o problema encerrado",
        "correta": false
      },
      {
        "texto": "revogar ou rotacionar a chave, verificar uso e comunicar o incidente",
        "correta": true
      },
      {
        "texto": "deixar a chave ativa se ninguém comentou",
        "correta": false
      },
      {
        "texto": "colocar a mesma chave em outro arquivo público",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Segredos expostos devem ser invalidados e o incidente investigado; apagar o texto não basta."
  },
  {
    "id": "F3-Q082",
    "fase": 3,
    "subconhecimento": "Segurança digital",
    "dificuldade": "facil",
    "tema": "chave de API foi publicada em repositório público",
    "enunciado": "Antes de liberar uma nova versão, a equipe percebe que chave de API foi publicada em repositório público. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "deixar a chave ativa se ninguém comentou",
        "correta": false
      },
      {
        "texto": "colocar a mesma chave em outro arquivo público",
        "correta": false
      },
      {
        "texto": "revogar ou rotacionar a chave, verificar uso e comunicar o incidente",
        "correta": true
      },
      {
        "texto": "apagar o commit e considerar o problema encerrado",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Segredos expostos devem ser invalidados e o incidente investigado; apagar o texto não basta."
  },
  {
    "id": "F3-Q083",
    "fase": 3,
    "subconhecimento": "Segurança digital",
    "dificuldade": "intermediaria",
    "tema": "chave de API foi publicada em repositório público",
    "enunciado": "Durante a revisão de conformidade do produto, surge a situação: chave de API foi publicada em repositório público. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "colocar a mesma chave em outro arquivo público",
        "correta": false
      },
      {
        "texto": "apagar o commit e considerar o problema encerrado",
        "correta": false
      },
      {
        "texto": "deixar a chave ativa se ninguém comentou",
        "correta": false
      },
      {
        "texto": "revogar ou rotacionar a chave, verificar uso e comunicar o incidente",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Segredos expostos devem ser invalidados e o incidente investigado; apagar o texto não basta."
  },
  {
    "id": "F3-Q084",
    "fase": 3,
    "subconhecimento": "Segurança digital",
    "dificuldade": "intermediaria",
    "tema": "chave de API foi publicada em repositório público",
    "enunciado": "Em uma tarefa de desenvolvimento, um integrante informa que chave de API foi publicada em repositório público. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "revogar ou rotacionar a chave, verificar uso e comunicar o incidente",
        "correta": true
      },
      {
        "texto": "apagar o commit e considerar o problema encerrado",
        "correta": false
      },
      {
        "texto": "deixar a chave ativa se ninguém comentou",
        "correta": false
      },
      {
        "texto": "colocar a mesma chave em outro arquivo público",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Segredos expostos devem ser invalidados e o incidente investigado; apagar o texto não basta."
  },
  {
    "id": "F3-Q085",
    "fase": 3,
    "subconhecimento": "Direitos autorais e autoria",
    "dificuldade": "facil",
    "tema": "documentação inclui texto gerado por IA",
    "enunciado": "Em um projeto de software da Antares, você descobre que documentação inclui texto gerado por IA. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "revisar fatos, confidencialidade, direitos e políticas de uso antes de publicar",
        "correta": true
      },
      {
        "texto": "inserir dados sigilosos para melhorar a próxima geração",
        "correta": false
      },
      {
        "texto": "afirmar autoria humana exclusiva sem verificar regras aplicáveis",
        "correta": false
      },
      {
        "texto": "publicar sem revisão porque o texto parece correto",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Conteúdo gerado por IA exige revisão, proteção de dados e observância das políticas pertinentes."
  },
  {
    "id": "F3-Q086",
    "fase": 3,
    "subconhecimento": "Direitos autorais e autoria",
    "dificuldade": "facil",
    "tema": "documentação inclui texto gerado por IA",
    "enunciado": "Antes de liberar uma nova versão, a equipe percebe que documentação inclui texto gerado por IA. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "afirmar autoria humana exclusiva sem verificar regras aplicáveis",
        "correta": false
      },
      {
        "texto": "revisar fatos, confidencialidade, direitos e políticas de uso antes de publicar",
        "correta": true
      },
      {
        "texto": "publicar sem revisão porque o texto parece correto",
        "correta": false
      },
      {
        "texto": "inserir dados sigilosos para melhorar a próxima geração",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Conteúdo gerado por IA exige revisão, proteção de dados e observância das políticas pertinentes."
  },
  {
    "id": "F3-Q087",
    "fase": 3,
    "subconhecimento": "Direitos autorais e autoria",
    "dificuldade": "intermediaria",
    "tema": "documentação inclui texto gerado por IA",
    "enunciado": "Durante a revisão de conformidade do produto, surge a situação: documentação inclui texto gerado por IA. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "publicar sem revisão porque o texto parece correto",
        "correta": false
      },
      {
        "texto": "inserir dados sigilosos para melhorar a próxima geração",
        "correta": false
      },
      {
        "texto": "revisar fatos, confidencialidade, direitos e políticas de uso antes de publicar",
        "correta": true
      },
      {
        "texto": "afirmar autoria humana exclusiva sem verificar regras aplicáveis",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Conteúdo gerado por IA exige revisão, proteção de dados e observância das políticas pertinentes."
  },
  {
    "id": "F3-Q088",
    "fase": 3,
    "subconhecimento": "Direitos autorais e autoria",
    "dificuldade": "intermediaria",
    "tema": "documentação inclui texto gerado por IA",
    "enunciado": "Em uma tarefa de desenvolvimento, um integrante informa que documentação inclui texto gerado por IA. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "inserir dados sigilosos para melhorar a próxima geração",
        "correta": false
      },
      {
        "texto": "afirmar autoria humana exclusiva sem verificar regras aplicáveis",
        "correta": false
      },
      {
        "texto": "publicar sem revisão porque o texto parece correto",
        "correta": false
      },
      {
        "texto": "revisar fatos, confidencialidade, direitos e políticas de uso antes de publicar",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Conteúdo gerado por IA exige revisão, proteção de dados e observância das políticas pertinentes."
  },
  {
    "id": "F3-Q089",
    "fase": 3,
    "subconhecimento": "Licenciamento de software",
    "dificuldade": "facil",
    "tema": "cliente pergunta se pode modificar e redistribuir o produto",
    "enunciado": "Em um projeto de software da Antares, você descobre que cliente pergunta se pode modificar e redistribuir o produto. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "responder apenas com base no tipo de linguagem usada",
        "correta": false
      },
      {
        "texto": "prometer liberdade total sem verificar documentos",
        "correta": false
      },
      {
        "texto": "dizer que nenhum software comercial pode ser modificado",
        "correta": false
      },
      {
        "texto": "consultar contrato e licença e responder com base nas permissões concedidas",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Permissões de modificação e redistribuição dependem da licença e do contrato."
  },
  {
    "id": "F3-Q090",
    "fase": 3,
    "subconhecimento": "Licenciamento de software",
    "dificuldade": "facil",
    "tema": "cliente pergunta se pode modificar e redistribuir o produto",
    "enunciado": "Antes de liberar uma nova versão, a equipe percebe que cliente pergunta se pode modificar e redistribuir o produto. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "consultar contrato e licença e responder com base nas permissões concedidas",
        "correta": true
      },
      {
        "texto": "prometer liberdade total sem verificar documentos",
        "correta": false
      },
      {
        "texto": "dizer que nenhum software comercial pode ser modificado",
        "correta": false
      },
      {
        "texto": "responder apenas com base no tipo de linguagem usada",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Permissões de modificação e redistribuição dependem da licença e do contrato."
  },
  {
    "id": "F3-Q091",
    "fase": 3,
    "subconhecimento": "Licenciamento de software",
    "dificuldade": "intermediaria",
    "tema": "cliente pergunta se pode modificar e redistribuir o produto",
    "enunciado": "Durante a revisão de conformidade do produto, surge a situação: cliente pergunta se pode modificar e redistribuir o produto. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "dizer que nenhum software comercial pode ser modificado",
        "correta": false
      },
      {
        "texto": "consultar contrato e licença e responder com base nas permissões concedidas",
        "correta": true
      },
      {
        "texto": "responder apenas com base no tipo de linguagem usada",
        "correta": false
      },
      {
        "texto": "prometer liberdade total sem verificar documentos",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Permissões de modificação e redistribuição dependem da licença e do contrato."
  },
  {
    "id": "F3-Q092",
    "fase": 3,
    "subconhecimento": "Licenciamento de software",
    "dificuldade": "intermediaria",
    "tema": "cliente pergunta se pode modificar e redistribuir o produto",
    "enunciado": "Em uma tarefa de desenvolvimento, um integrante informa que cliente pergunta se pode modificar e redistribuir o produto. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "responder apenas com base no tipo de linguagem usada",
        "correta": false
      },
      {
        "texto": "prometer liberdade total sem verificar documentos",
        "correta": false
      },
      {
        "texto": "consultar contrato e licença e responder com base nas permissões concedidas",
        "correta": true
      },
      {
        "texto": "dizer que nenhum software comercial pode ser modificado",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Permissões de modificação e redistribuição dependem da licença e do contrato."
  },
  {
    "id": "F3-Q093",
    "fase": 3,
    "subconhecimento": "Compliance e segurança",
    "dificuldade": "facil",
    "tema": "publicação de repositório está prestes a ocorrer",
    "enunciado": "Em um projeto de software da Antares, você descobre que publicação de repositório está prestes a ocorrer. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "publicar primeiro e revisar apenas se houver reclamação",
        "correta": false
      },
      {
        "texto": "incluir arquivos de configuração com credenciais para facilitar instalação",
        "correta": false
      },
      {
        "texto": "verificar segredos, dados pessoais, licenças, conteúdo sensível e autorização de publicação",
        "correta": true
      },
      {
        "texto": "assumir que o repositório público não será encontrado",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Uma revisão prévia evita exposição de segredos, dados e materiais sem autorização."
  },
  {
    "id": "F3-Q094",
    "fase": 3,
    "subconhecimento": "Compliance e segurança",
    "dificuldade": "facil",
    "tema": "publicação de repositório está prestes a ocorrer",
    "enunciado": "Antes de liberar uma nova versão, a equipe percebe que publicação de repositório está prestes a ocorrer. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "incluir arquivos de configuração com credenciais para facilitar instalação",
        "correta": false
      },
      {
        "texto": "assumir que o repositório público não será encontrado",
        "correta": false
      },
      {
        "texto": "publicar primeiro e revisar apenas se houver reclamação",
        "correta": false
      },
      {
        "texto": "verificar segredos, dados pessoais, licenças, conteúdo sensível e autorização de publicação",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Uma revisão prévia evita exposição de segredos, dados e materiais sem autorização."
  },
  {
    "id": "F3-Q095",
    "fase": 3,
    "subconhecimento": "Compliance e segurança",
    "dificuldade": "intermediaria",
    "tema": "publicação de repositório está prestes a ocorrer",
    "enunciado": "Durante a revisão de conformidade do produto, surge a situação: publicação de repositório está prestes a ocorrer. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "verificar segredos, dados pessoais, licenças, conteúdo sensível e autorização de publicação",
        "correta": true
      },
      {
        "texto": "assumir que o repositório público não será encontrado",
        "correta": false
      },
      {
        "texto": "publicar primeiro e revisar apenas se houver reclamação",
        "correta": false
      },
      {
        "texto": "incluir arquivos de configuração com credenciais para facilitar instalação",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Uma revisão prévia evita exposição de segredos, dados e materiais sem autorização."
  },
  {
    "id": "F3-Q096",
    "fase": 3,
    "subconhecimento": "Compliance e segurança",
    "dificuldade": "intermediaria",
    "tema": "publicação de repositório está prestes a ocorrer",
    "enunciado": "Em uma tarefa de desenvolvimento, um integrante informa que publicação de repositório está prestes a ocorrer. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "publicar primeiro e revisar apenas se houver reclamação",
        "correta": false
      },
      {
        "texto": "verificar segredos, dados pessoais, licenças, conteúdo sensível e autorização de publicação",
        "correta": true
      },
      {
        "texto": "incluir arquivos de configuração com credenciais para facilitar instalação",
        "correta": false
      },
      {
        "texto": "assumir que o repositório público não será encontrado",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Uma revisão prévia evita exposição de segredos, dados e materiais sem autorização."
  },
  {
    "id": "F3-Q097",
    "fase": 3,
    "subconhecimento": "Propriedade intelectual",
    "dificuldade": "facil",
    "tema": "colega propõe copiar código de um tutorial sem conferir as condições",
    "enunciado": "Em um projeto de software da Antares, você descobre que colega propõe copiar código de um tutorial sem conferir as condições. Qual é a conduta profissional mais adequada?",
    "alternativas": [
      {
        "texto": "remover o link da fonte para deixar o projeto mais limpo",
        "correta": false
      },
      {
        "texto": "verificar autoria, licença e atribuição exigida e adaptar apenas dentro das permissões",
        "correta": true
      },
      {
        "texto": "supor que todo conteúdo didático está em domínio público",
        "correta": false
      },
      {
        "texto": "copiar integralmente porque o tutorial é educativo",
        "correta": false
      }
    ],
    "respostaCorreta": 1,
    "explicacao": "Conteúdo educativo também pode ser protegido e ter condições de reutilização."
  },
  {
    "id": "F3-Q098",
    "fase": 3,
    "subconhecimento": "Propriedade intelectual",
    "dificuldade": "facil",
    "tema": "colega propõe copiar código de um tutorial sem conferir as condições",
    "enunciado": "Antes de liberar uma nova versão, a equipe percebe que colega propõe copiar código de um tutorial sem conferir as condições. Qual deve ser sua primeira atitude?",
    "alternativas": [
      {
        "texto": "supor que todo conteúdo didático está em domínio público",
        "correta": false
      },
      {
        "texto": "copiar integralmente porque o tutorial é educativo",
        "correta": false
      },
      {
        "texto": "verificar autoria, licença e atribuição exigida e adaptar apenas dentro das permissões",
        "correta": true
      },
      {
        "texto": "remover o link da fonte para deixar o projeto mais limpo",
        "correta": false
      }
    ],
    "respostaCorreta": 2,
    "explicacao": "Conteúdo educativo também pode ser protegido e ter condições de reutilização."
  },
  {
    "id": "F3-Q099",
    "fase": 3,
    "subconhecimento": "Propriedade intelectual",
    "dificuldade": "intermediaria",
    "tema": "colega propõe copiar código de um tutorial sem conferir as condições",
    "enunciado": "Durante a revisão de conformidade do produto, surge a situação: colega propõe copiar código de um tutorial sem conferir as condições. Que decisão reduz riscos e respeita as boas práticas?",
    "alternativas": [
      {
        "texto": "copiar integralmente porque o tutorial é educativo",
        "correta": false
      },
      {
        "texto": "remover o link da fonte para deixar o projeto mais limpo",
        "correta": false
      },
      {
        "texto": "supor que todo conteúdo didático está em domínio público",
        "correta": false
      },
      {
        "texto": "verificar autoria, licença e atribuição exigida e adaptar apenas dentro das permissões",
        "correta": true
      }
    ],
    "respostaCorreta": 3,
    "explicacao": "Conteúdo educativo também pode ser protegido e ter condições de reutilização."
  },
  {
    "id": "F3-Q100",
    "fase": 3,
    "subconhecimento": "Propriedade intelectual",
    "dificuldade": "intermediaria",
    "tema": "colega propõe copiar código de um tutorial sem conferir as condições",
    "enunciado": "Em uma tarefa de desenvolvimento, um integrante informa que colega propõe copiar código de um tutorial sem conferir as condições. Como a equipe deve proceder nessa situação?",
    "alternativas": [
      {
        "texto": "verificar autoria, licença e atribuição exigida e adaptar apenas dentro das permissões",
        "correta": true
      },
      {
        "texto": "remover o link da fonte para deixar o projeto mais limpo",
        "correta": false
      },
      {
        "texto": "supor que todo conteúdo didático está em domínio público",
        "correta": false
      },
      {
        "texto": "copiar integralmente porque o tutorial é educativo",
        "correta": false
      }
    ],
    "respostaCorreta": 0,
    "explicacao": "Conteúdo educativo também pode ser protegido e ter condições de reutilização."
  }
];
