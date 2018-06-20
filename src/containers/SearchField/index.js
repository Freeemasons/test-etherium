import React, { Component, Fragment } from 'react'

import Button from '../../components/UI/Button'

import TextInput from '../../components/UI/TextInput'

import SearchDropDown from '../../components/SearchDropDown'

import FormErrors from '../FormErrors'

import './styles.css'


class SearchField extends Component {

    state = {
        value: ''
    }
    renderError = () => {
         if (this.state.value === 'adress') {
             return null
         } else {
             return <div>error</div>
         }   
    }

    changeTextHandler = (e) => {
        this.setState({
            value: e.currentTarget.value
        })
    }

    render() {
        return(
            <div className="SearchField">
                {this.renderError()}
                <div className="SearchField-input">
                    <TextInput
                        value={this.state.value}
                        changeTextHandler={this.changeTextHandler}
                         />
                        
                </div>
                <Button />
                <div className="SearchField-dropdown">
                    <SearchDropDown />
                </div>
            </div>
        )
    }
}

export default SearchField