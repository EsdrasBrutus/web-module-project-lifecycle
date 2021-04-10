import React from 'react'
import { Followers, Following } from './Followers'


const FollowerList = props =>{

    return(
        <div className='follower-list'>
            {props.followers.map(item =>{
                return(<Followers key={item.id} item={item} />)
            })}
        </div>
    )

}

const FollowingList = props =>{
    return(
        <div className='follower-list'>
            {props.followers.map(item =>{
                return(<Following key={item.id} item={item} />)
            })}
        </div>
    )
}

export {FollowerList, FollowingList}; 