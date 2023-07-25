import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function UserItem({user: { login, avatar_url }}) {
    return (
        <div className='card text-center'>
            <img alt='' src={avatar_url} className='round-img' style={{ width: '60px'}}/>
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">more</Link>
            </div>
        </div>
    )    
}



export default UserItem
