# PalomaApp — requisitos do produto

## Público
Crianças de 3 a 6 anos, com conta e controles sob responsabilidade de um adulto.

## Experiências prioritárias
- Desenho e pintura.
- Reconhecimento de letras e vogais.
- Associação de letras e imagens.
- Sílabas e primeiras palavras.
- Jogos de memória, cores, formas e contagem.
- Painel dos responsáveis com progresso e gerenciamento da assinatura.

## Modelo comercial
Assinatura recorrente mensal no lançamento; preço configurado no provedor de pagamentos. Plano anual pode ser adicionado posteriormente. O checkout deve informar preço, frequência, renovação, cancelamento e condições antes da compra.

## Arquitetura planejada
- React + TypeScript + Vite no frontend.
- Backend com autenticação e banco de dados suportado pelo ambiente escolhido.
- Perfil do responsável e perfis infantis minimizados.
- Progresso de atividades persistido por perfil.
- Provedor de pagamento recorrente.
- Webhooks verificados no servidor e processamento idempotente.
- Autorização Premium validada no backend, nunca apenas na interface.
- Nenhum segredo, token ou dado de pagamento sensível no Git.

## Estados de assinatura
Os estados internos devem ser mapeados aos estados reais do provedor: pendente, ativa, pagamento atrasado, cancelada e expirada. O acesso considera o período pago confirmado.

## Privacidade infantil
Aplicar minimização de dados, acesso restrito por responsável, RLS ou controles equivalentes, exclusão de dados, ausência de publicidade comportamental e revisão da LGPD e das regras aplicáveis a dados de crianças antes do lançamento.

## Estado atual
A interface inicial usa dados locais e demonstrações. Autenticação, banco de dados, sincronização de progresso, pagamentos reais e webhooks ainda não estão implementados. Não apresentar esta versão como pronta para produção.
