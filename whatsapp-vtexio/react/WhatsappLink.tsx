import React from 'react'
import { Icon } from 'vtex.store-icons'
import { useCssHandles } from 'vtex.css-handles'

export interface Props {
    cta?: string
    mensagem?: string
    telefone?: number
}

const CSS_HANDLES = ['container','text','icon', 'link']

const WhatsappLink: StorefrontFunctionComponent<Props> = ({
    mensagem,
    telefone,
    cta,
}) => {

    const handles = useCssHandles(CSS_HANDLES);
    return (
        <div className={`${handles.container}`}>
            <a
                href={"https://api.whatsapp.com/send?phone=" + telefone + "&text=" + mensagem}
                target="_blank"
                className={`${handles.link}`}
                style={{ pointerEvents: 'auto' }}
            >
                <span className={`${handles.icon}`}>
                    <Icon id="hpa-telemarketing" />
                </span>
                <span className={`${handles.text}`}>
                    {cta}
                </span>
            </a>
        </div>
    )
};

WhatsappLink.schema = {
    title: 'editor.whatsapplink.title',
    description: 'editor.whatsapplink.description',
    type: 'object',
    properties: {
        cta:{
            title: 'Texto',
            description: 'Texto exposto ao usuario',
            type: 'string',
            default: 'Suporte',
        },
        telefone:{
            title: 'Telefone',
            description: 'Telefone com ddd',
            type: 'number',
            default: null,
        },
        mensagem:{
            title: 'Mensagem inicial',
            description: 'Mensagem padrão inserida quando usuário clicar.',
            type: 'string',
            default: null,
        },
    },
};

export default WhatsappLink