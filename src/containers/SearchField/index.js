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
             return <SearchDropDown />
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

        // if (this.state.value === 'adress') {
        //     return <div>Все верно!</div>
        // }

        return(
            <div >
                {this.renderError()}
                <div className="SearchField">
                    <TextInput
                        value={this.state.value}
                        changeTextHandler={this.changeTextHandler}
                         />
                    <Button className="Button" />
                </div>             
                <div className="SearchField-dropdown">
                    
                </div>
            </div>
        )
    }
}

export default SearchField