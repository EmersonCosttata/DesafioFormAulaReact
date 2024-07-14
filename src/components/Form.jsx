import {useState} from 'react'

export const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }) 
    const [errors, setErrors] = useState({})
    const validate = () => {
        const validErrors = []
        if(!formData.name) validErrors.name = 'Nome é obrigatório'

        if(!formData.email) 
            validErrors.email = 'Email é obrigatório'

         else if (!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ .test(formData.email))
            validErrors.email = 'Email Inválido'
        
        if(!formData.password) 
            validErrors.password = "Senha é obrigatório"
        
        else if(formData.password.length < 8) 
            validErrors.password = "A senha precisa de ao menos 8 caracteres"
        
        if(!formData.confirmPassword) 
            validErrors.confirmPassword = "Senha é obrigatório"
       
        else if(formData.confirmPassword !== formData.password) 
            validErrors.confirmPassword = "Senha é deve ser iguais!"
    
        return validErrors
    }

    const handleSave = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const validation = validate()
        if(Object.keys(validation).length === 0){
            alert('Registrado')
            setErrors({})
            setFormData({
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
        else 
         setErrors(validation)
        
    }
    return(
        <div>
            <h2>Formulario de Registro </h2>
            <form onSubmit={handleSubmit}>
                    <label>Nome:</label>
                    <input type="text" name='name' value={formData.name} onChange={handleSave}/>
                    {errors.name && <p>{errors.name}</p>}
                    <label>Email:</label>
                    <input type="text" name='email' value={formData.email} onChange={handleSave}/>
                    {errors.email && <p>{errors.email}</p>}
                    <label>Senha:</label>
                    <input type="password" name='password' value={formData.password} onChange={handleSave}/>
                    {errors.password && <p>{errors.password}</p>}
                    <label>Repita sua senha:</label>
                    <input type="password" name='confirmPassword' value={formData.confirmPassword} onChange={handleSave}/>
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}
