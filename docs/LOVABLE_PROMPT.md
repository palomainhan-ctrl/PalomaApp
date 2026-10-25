# Prompt de implementação do PalomaApp no Lovable

Copie este prompt para o chat do Lovable caso decida usar o Lovable para continuar o desenvolvimento a partir de uma conexão GitHub compatível.

---

Crie e desenvolva o PalomaApp, uma aplicação educativa infantil para crianças de 3 a 6 anos, em português brasileiro. A identidade visual deve ser muito colorida, acolhedora e moderna, com cartões arredondados, ilustrações originais, botões grandes, letras legíveis, animações suaves e interface responsiva para celular, tablet e computador.

O produto terá assinatura paga recorrente desde o lançamento. Conta, pagamento, assinatura, configurações e acesso à área dos responsáveis devem ficar sob controle de um adulto. A criança não deve ter que criar conta ou fornecer dados pessoais próprios para brincar.

## Experiências principais
1. Desenho e pintura com paleta de cores, borracha, desfazer, limpar e opção futura de salvar desenhos de forma privada.
2. Alfabetização inicial: letras, vogais, sons, associação entre letras e imagens, sílabas simples e primeiras palavras.
3. Jogos funcionais: reconhecimento de letras, associação, memória, cores, formas, contagem e quebra-cabeças simples.
4. Painel infantil simples, acessível e positivo, sem rankings públicos, anúncios comportamentais, chats ou links externos livres.
5. Área dos responsáveis com autenticação, perfis infantis, progresso, plano, pagamentos, cancelamento, privacidade, exclusão de dados e suporte.

## Arquitetura
Utilize React, TypeScript e componentes reutilizáveis. Configure um backend suportado pelo ambiente, com autenticação segura, banco de dados relacional e políticas de acesso por usuário. Minimize os dados infantis. Não exponha segredos no frontend.

O modelo de dados deve comportar responsáveis, perfis infantis, atividades, progresso e assinaturas. O acesso Premium deve ser verificado no backend, não apenas escondendo botões.

## Assinatura
Implemente uma assinatura mensal recorrente por meio de um provedor oficialmente suportado e disponível, como Stripe ou Paddle conforme elegibilidade e configuração. O preço deve ser configurável no provedor. Informe preço, frequência, renovação e cancelamento antes do checkout.

O backend deve validar assinaturas e webhooks do provedor, verificar autenticidade, processar eventos de forma idempotente e liberar o acesso somente após confirmação confiável. Prever pagamento pendente, ativo, atrasado, cancelado e expirado. Nunca simular pagamentos reais. Testar primeiro em ambiente de testes e não habilitar cobranças reais antes de validar todo o fluxo.

## Privacidade e segurança
Considerar a LGPD e as regras específicas aplicáveis a dados de crianças, com melhor interesse da criança, minimização, transparência, consentimento/autorização aplicável do responsável, exclusão de dados e política de retenção. Não afirmar conformidade legal garantida sem revisão apropriada.

## GitHub
O repositório desejado é https://github.com/palomainhan-ctrl/PalomaApp. Antes de conectar, confirme como o Lovable lida com repositórios existentes; não crie um repositório duplicado sem avisar. O repositório atual é público: não enviar chaves, tokens, credenciais, dados de clientes ou segredos. Avaliar torná-lo privado antes de incluir código comercial sensível.

## Ordem de implementação
1. Revisar e melhorar a interface e os jogos que já existem.
2. Implementar autenticação e banco de dados.
3. Persistir perfis e progresso com controles de acesso.
4. Integrar assinatura e webhooks em ambiente de testes.
5. Validar cancelamento, renovação, segurança, responsividade e acessibilidade.
6. Preparar políticas, termos e revisão de privacidade antes do lançamento.

Comece inspecionando o código existente. Preserve o que funciona, implemente em etapas pequenas e informe claramente o que está funcionando, o que depende de configuração externa e quais testes foram executados. Não apresente funcionalidades não implementadas como prontas para produção.
