import PropTypes from "prop-types"
import "./index.scss"

export default function Title(props) {
    const { text } = props
    return (
        <h1 className="title__container">{text}</h1>
    )
}

Title.propTypes = {
    text: PropTypes.string.isRequired,
}