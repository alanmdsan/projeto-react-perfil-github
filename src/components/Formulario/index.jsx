import { useState, useEffect } from "react"

const Formulario = () => {
    let [notaA, setNotaA] = useState(0);
    let [notaB, setNotaB] = useState(0);
    let [notaC, setNotaC] = useState(0);

    useEffect(() => {
        console.log('O componente foi montado')
        
        return () => {
            console.log('O componente foi desmontado')
        }
    }, [])

    useEffect(() => {
        console.log('A nota A mudou para ' + notaA)
    }, [notaA])
    
    const renderizaResultado = () => {
        const soma = notaA + notaB + notaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Você foi aprovado</p>
            )
        } else {
            return (
                <p>Você não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => <li key={item}>{item}</li>)}
            </ul>
            <input type="number" placeholder="Nota A" onChange={evento => setNotaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota B" onChange={evento => setNotaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota C" onChange={evento => setNotaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario