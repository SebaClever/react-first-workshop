import PropTypes from "prop-types"
import "./index.scss"

export default function Button(props) {
    const { text, onClick, disabled } = props
    return (
        <div className={`button__container ${disabled && "button__disabled"}`} >
            <button onClick={onClick} disabled={disabled}>{text}</button>
        </div>
    )
}

Button.defaultProps = {
    disabled: false,
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired
}