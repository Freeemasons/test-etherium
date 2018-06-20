import React, { Component } from 'react'

import PT from 'prop-types'

import cx from 'classnames'

// class Button extends Component {
//     render() {

//         return(
//             <Button/>
//         )
//     }
// }

const Button = props => {

    const buttonClasses = cx('Button', 
        'Button--withBorderRadiusLeft'
    )

    return (
        <button
            className={buttonClasses}
            onClick={props.onClick}
        >
        Далее
        </button>
    )
}


export default Button
