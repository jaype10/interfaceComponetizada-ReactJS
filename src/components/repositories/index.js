import React, { useState, useEffect} from 'react';
import useGithub from '../../hooks/github-hooks';
import RepositoryItem from '../repository-item';
import * as S from "./styled";

 const Repositiories = () => {
    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [hasUserForSearchRepos, sethasUserForSearchRepos] = useState(false)

    useEffect(() => {
        if (!!githubState.user.login) {
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        sethasUserForSearchRepos(githubState.repositories);
    }, [githubState.user.login])


    return (
        <React.Fragment>
        {hasUserForSearchRepos ? (
            <S.WrapperTabs
                selectedTabClassName="is-selected"
                selectedTabPanelClassName="is-selected"
            >
                <S.WrapperTabList>
                    <S.WrapperTab>Repositiories</S.WrapperTab>
                    <S.WrapperTab>Starred</S.WrapperTab>
                </S.WrapperTabList>
                <S.WrapperTabPanel>
                    <S.WrapperList> 
                        {githubState.repositories.map((item) => (
                            <RepositoryItem 
                                key={item.id}
                                name={item.name} 
                                linkToRepo={item.html_url}
                                fullName={item.full_name}
                            />    
                        ))}
                    </S.WrapperList>
                </S.WrapperTabPanel>
                <S.WrapperTabPanel>
                    <S.WrapperList>
                        {githubState.starred.map((item) => (
                            <RepositoryItem 
                                name={item.name} 
                                linkToRepo={item.html_url}
                                fullName={item.full_name}
                            />
                        ))}
                    </S.WrapperList>
                </S.WrapperTabPanel>
            </S.WrapperTabs>
            ) : (<React.Fragment></React.Fragment>)
        }
        </React.Fragment>
    );
};

export default Repositiories;