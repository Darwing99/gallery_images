import React from 'react'
import PropTypes from 'prop-types'

const FormSearch = ({handleSubmit}) => {
    return (
        <div>
              <form onSubmit={handleSubmit}>
                <div className="pt-3 input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="fas fa-search"></i></span>
                    <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="addon-wrapping"/></div>
            </form>
        </div>
    )
}

FormSearch.propTypes = {
handleSubmit: PropTypes.func
}

export default FormSearch
