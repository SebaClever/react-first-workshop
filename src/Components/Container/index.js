import "./index.scss"
import PropTypes from "prop-types"

export default function Container(props) {
    const { children } = props
    return (
        <div className="container__container">
            {children}
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.element
}