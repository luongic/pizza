import React, { useContext, useState } from 'react';

import { LoginContext } from "./LoginContext";
import Loginsignup from './Loginsignup';
import MemberInformation from './MemberInformation';

function Member() {
    const logincontext = useContext(LoginContext)

    const [ isLoged, setIsLoged ] = useState(logincontext.isLogin)

    return <>
        {isLoged ? <></> : <Loginsignup setIsLoged={setIsLoged} />}
        {isLoged ? <MemberInformation /> : <></> }
        {isLoged ? <div className='logout'>
            <div className='logout__button' onClick={() => setIsLoged(false)}>Đăng xuất</div>
        </div> : <></> }
    </>
}

export default Member;