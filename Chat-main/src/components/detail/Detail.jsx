import React from 'react'
import "./detail.css"
import { auth, db } from '../lib/firebase'
import { useChatStore } from '../lib/chatStore'
import { useUserStore } from '../lib/userStore'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'

const Detail = () => {
    const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } = useChatStore()
    const { currentUser } = useUserStore()
    const handleBlock = async () => {
        if (!user) return
        const userDocRef = doc(db, 'users', currentUser.id)
        try {
            await updateDoc(userDocRef, {
                blocked: isReceiverBlocked ? arrayRemove(user.id): arrayUnion(user.id)
            })
            changeBlock()
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='detail'>
            <div className="user">
                <img src={user?.avatar || './avatar.png'} alt="" />
                <h2>{user?.username}</h2>
                <p>Un usuario mas</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://yt3.ggpht.com/COy2jSg_yrW5_u4c_ut-w3o2o4YdCY53HEB23EqEiaFZq4D-wNqZlSreIWvuQ35UhbDKLYX_GUY=s88-c-k-c0x00ffffff-no-rj" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt=""className='icon' />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://yt3.ggpht.com/COy2jSg_yrW5_u4c_ut-w3o2o4YdCY53HEB23EqEiaFZq4D-wNqZlSreIWvuQ35UhbDKLYX_GUY=s88-c-k-c0x00ffffff-no-rj" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className='icon'/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://yt3.ggpht.com/COy2jSg_yrW5_u4c_ut-w3o2o4YdCY53HEB23EqEiaFZq4D-wNqZlSreIWvuQ35UhbDKLYX_GUY=s88-c-k-c0x00ffffff-no-rj" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className='icon'/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://yt3.ggpht.com/COy2jSg_yrW5_u4c_ut-w3o2o4YdCY53HEB23EqEiaFZq4D-wNqZlSreIWvuQ35UhbDKLYX_GUY=s88-c-k-c0x00ffffff-no-rj" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className='icon'/>
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button onClick={handleBlock}>
                    {
                        isCurrentUserBlocked
                        ? 'You are Blocked!'
                        : isReceiverBlocked
                        ? 'User blocked'
                        : 'Block User'
                    }
                </button>
                <button className='logout' onClick={()=>auth.signOut()}>Logout</button>
            </div>
        </div>
    )
}

export default Detail