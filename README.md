# Desafio Antares — Recrutamento Tech

Aplicação educacional gamificada em HTML, CSS e JavaScript, pronta para publicação no GitHub Pages.

## Arquivos
- `index.html`: interface, estilos e lógica da aplicação.
- `questoes.js`: banco estruturado com 60 questões, 20 por fase.

## Como executar localmente
1. Mantenha `index.html` e `questoes.js` na mesma pasta.
2. Abra `index.html` em um navegador moderno. Para uma execução mais próxima da publicação, use um servidor local simples.
3. Para publicar, envie os dois arquivos para um repositório GitHub e ative GitHub Pages nas configurações do repositório.

## Regras implementadas
- 3 fases com 20 questões cada.
- 3 minutos por questão; questão sem confirmação no prazo é registrada como incorreta.
- Confirmação antes de registrar a resposta.
- Feedback após cada resposta.
- Progresso por fase e questão.
- Mínimo de 18/20 (90%) para avançar.
- Badges por fase aprovada e conquista especial para 100%.
- Salvamento automático e retomada via `localStorage` no mesmo navegador.
- Relatório final com nota por fase, nota geral e download em JSON; opção de imprimir/salvar em PDF.

## Observações importantes
- O progresso é armazenado localmente; não é enviado ao professor e não sincroniza entre dispositivos.
- O tempo é calculado a partir do horário de início persistido. Recarregar a página não reinicia o cronômetro.
- A nota geral utiliza os resultados registrados para as três fases, com peso igual por fase (60 questões no total).
- O conteúdo é didático e não substitui orientação jurídica ou avaliação formal de segurança do trabalho.
- A aplicação ainda não possui service worker/PWA; para abrir totalmente offline depois de limpar cache ou em um dispositivo novo, é necessário carregar os arquivos primeiro.
