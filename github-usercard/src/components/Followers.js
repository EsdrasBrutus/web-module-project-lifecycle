import React from 'react'

const Followers = (props) =>{

    return(
        <img className='followers' src={props.item.avatar_url} alt='avatar' />
    )

}

const Following = (props) =>{

    return(
        <img className='followers' src={props.item.avatar_url} alt='avatar' />
    )

}

export {Followers, Following} ;