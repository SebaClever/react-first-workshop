import "./index.scss"
import PropTypes from "prop-types"

export default function ContainerFlex(props) {
    const { children } = props
    return (
        <div className="flex__container">
            {children}
        </div>
    )
}

ContainerFlex.propTypes = {
    children: PropTypes.element
}