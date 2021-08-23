# Custom Whatsapp link
Componente personalizado para botão com Link direcionando ao whatsapp.

## Padrão da url
`https://api.whatsapp.com/send?phone={Telefone}&text={Mensagem}`

### Parâmetros
- Telefone - Necessário incluir ddd
- Mensagem - Texto pré-definido para ser enviado na mensagem
- CTA - Texto apresentado na tela ao usuário


## Usar

Cadastre o componente como dependencies no `manifest.json`.

```json
dependencies: {
  "hiringcoders2021.brunotdawhatsapplink": "0.x"
}
```

Para adicionar o botão com link para whatsapp, adicione o bloco em qualquer lugar do seu tema.

```json
"whatsapplink":{
    "props":{
      "telefone": "5511000000000",
      "mensagem": "Apenas um teste",
      "cta": "Suporte"
    }
  }
```

#### Configurações

Variaveis de configuração:

| Prop name       | Type            | Descrição                                        | Default value |
| --------------- | --------------- | -------------------------------------------------- | ------------- |
| `telefone`      | `Number`       | Telefone com DDI e DDD                 | null          |
| `mensagem` | `String`        | Texto padrão preenchido para entrar em contato com o telefone       | null             |
| `cta`      | `String`       | Texto exibido para o usuário                         | "Suporte"          |