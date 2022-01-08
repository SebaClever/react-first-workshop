import "./index.scss"
import PropTypes from "prop-types"

export default function ContainerGrid(props) {
    const { children } = props
    return (
        <div className="grid__container">
            {children}
        </div>
    )
}

ContainerGrid.propTypes = {
    children: PropTypes.element
}