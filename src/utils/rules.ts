interface IRulesComposable {
    required (value: string): string | boolean
    counter (value: string): string | boolean
    email (value: string): string | boolean
    phone (value: string): string | boolean    
}

export function rules (): IRulesComposable {
    const required = (value: string) => !!value || 'Campo obrigatório.'
    
    const counter = (value: string) => value.length <= 15 || 'Máximo 20 dígitos'

    const email = (value: string) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Email inválido.'
    }

    const phone = (value: string) => {
        const pattern = /^\d{11}$/;
        console.log(pattern)
        return pattern.test(value) || 'Telefone inválido.'
    }

    return { required, counter, email, phone }
}