import React from 'react';
import * as S from './styled';


const Profile = () => {
    return(
        <S.Wrapper>
            <S.WrapperImage
                src="https://avatars.githubusercontent.com/u/42478433?v=4" 
                alt="Foto do usuario" 
            />
            <S.WrapperInfoUser>
                <div>
                    <h1>João Paulo</h1>   
                    <S.WrapperUsername>
                        <h3>Username:</h3>
                        <a 
                        href="https://github.com/jaype10" 
                        target="_blank" 
                        rel="noreferrer"
                        >jaype</a>
                    </S.WrapperUsername>    
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Starreds</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span>5</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
}

export default Profile;