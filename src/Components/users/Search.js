// ===============================
//           Functions
// ===============================

import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)
    
    const [text, setText] = useState('')

    const onChange = ({ target: {value} }) => {
        setText(value)
    }
 
    const onSubmit = (e) => {
        e.preventDefault()
        if(text === ''){
            alertContext.setAlert('Please enter something', 'light')
        } else {
            githubContext.searchUsers(text);
            setText('')
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit} className='form'>
                <input type='text' name='text' placeholder='Search Users... I recommend searching for this guy: mcdustelroy' value={text} onChange={onChange}/>
                <input type='submit' value='Search' className='btn btn-dark btn-block' />
            </form>
            {githubContext.users.length > 0 && (
                <button onClick={githubContext.clearUsers} className='btn btn-light btn-block'>Clear</button>
            )}   
        </div>
    )
}

Search.propTypes = {
    setAlert: PropTypes.func.isRequired,
}


export default Search

// ===============================
//           Classes
// ===============================

// import React, { Component } from 'react'
// import PropTypes from 'prop-types'


// export class Search extends Component {
//     state = {
//         text: ''
//     }

//     static propTypes = {
//         searchUsers: PropTypes.func.isRequired,
//         clearUsers: PropTypes.func.isRequired,
//         showClear: PropTypes.bool.isRequired,
//         setAlert: PropTypes.func.isRequired,
//     }

//     onChange = ({ target: {name, value} }) => {
//         this.setState({ [name]: value })
//     }
 
//     onSubmit = (e) => {
//         e.preventDefault()
//         if(this.state.text === ''){
//             this.props.setAlert('Please enter something', 'light')
//         } else {
//             this.props.searchUsers(this.state.text);
//             this.setState({ text: '' })
//         }
//     }

//     render() {
//         const { showClear, clearUsers } = this.props

//         return (
//             <div>
//                 <form onSubmit={this.onSubmit} className='form'>
//                     <input type='text' name='text' placeholder='Search Users...' value={this.state.text} onChange={this.onChange}/>
//                     <input type='submit' value='Search' className='btn btn-dark btn-block' />
//                 </form>
//                 {showClear && <button onClick={clearUsers} className='btn btn-light btn-block'>Clear</button>}
//             </div>
//         )
//     }
// }

// export default Search
