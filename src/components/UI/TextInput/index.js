import React, { PureComponent } from 'react'
import PT from 'prop-types'

import { ENTER } from '../../../constants/keyCodes'

import './styles.css'

class TextInput extends PureComponent {
    render() {
    
        return (
            <div className='TextInput'>
                <input
                    value={this.props.value}
                    className={'TextInput-field'}
                    placeholder='Введите адрес валидации Etherium-кошелька'
                    onChange={this.props.changeTextHandler}
                />
            </div>
        )
    }
}

export default TextInput