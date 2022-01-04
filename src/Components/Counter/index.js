import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Button from "../Button"
import "./index.scss"

export default function Counter(props) {
    const { initial, limit } = props
    const [count, setCount] = useState(initial)
    const [showLimitMessage, setShowLimitMessage] = useState(false)

    const add = () => setCount(count + 1)
    const substract = () => setCount(count - 1)
    const reset = () => setCount(initial)

    useEffect(() => {
        if (count >= limit) setShowLimitMessage(true)
        else setShowLimitMessage(false)
    }, [count, limit])

    return (
        <div className="counter__container">
            <h1>{count}</h1>
            <span>Límite {limit}</span>
            {
                showLimitMessage
                    ? <p>Límite alcanzado</p>
                    : <p>Sigue contando</p>
            }
            <div className="counter__actions">
                <Button text="-1" onClick={substract} />
                <Button text="Limpiar" onClick={reset} disabled={count === initial} />
                <Button text="+1" onClick={add} disabled={count >= limit} />
            </div>
        </div>
    )
}

Counter.defaultProps = {
    initial: 0
}

Counter.propTypes = {
    initial: PropTypes.number,
    limit: PropTypes.number.isRequired,
}