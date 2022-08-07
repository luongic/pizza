import React, { useContext, useState } from 'react';

import { LoginContext } from "./LoginContext";
import Loginsignup from './Loginsignup';
import MemberInformation from './MemberInformation';

function Member() {
    const logincontext = useContext(LoginContext)

    const [ isLoged, setIsLoged ] = useState(logincontext.isLogin)

    const handleLogout =() =>{
        setIsLoged(false)
        logincontext.setCurrentID(0)
    }
    return <>
        {isLoged ? <></> : <Loginsignup setIsLoged={setIsLoged} />}
        {isLoged ? <MemberInformation /> : <></> }
        {isLoged ? <div className='logout'>
            <div className='logout__button' onClick={() => handleLogout()}>Đăng xuất</div>
        </div> : <></> }
    </>
}

export default Member;