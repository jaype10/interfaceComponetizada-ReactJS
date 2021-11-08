import React, { createContext, useState, useCallback} from 'react';
import api from '../services/api';

export const GithubContext = createContext({
    loading:false,
    user:{},
    repositories:[],
    starred:[],
})

const GithubProvider = ({children}) => {
    const [githubState, setGithubState] = useState({
        loading:false,
        user:{
            avatar: undefined,
            login: undefined,
            name: undefined,
            html_url: undefined,
            blog:undefined,
            company:undefined,
            location:undefined,
            followers:0,
            following:0,
            public_gists:0,
            public_repos:0,
        },
        repositories:[],
        starrd:[],
    });

    const getUser = ( username ) => {
        api.get(`users/${ username }`)
        .then( ({ data }) => {
            setGithubState(prevState => ({
                ...prevState,
                loading: !prevState.loading,
                })
            )

            setGithubState(prevState => ({
                ...prevState,
                hasUser:true,
                user:{
                    avatar:data.avatar_url,
                    login: data.login,
                    name: data.name,
                    html_url: data.html_url,
                    blog:data.blog,
                    company:data.company,
                    location:data.location,
                    followers:data.followers,
                    following:data.following,
                    public_gists:data.public_gists,
                    public_repos:data.public_repos,
                }})
            )
        }) 
        .finally (() =>{
            setGithubState((prevState) => ({
                ...prevState,
                loading: !prevState.loading,
            }));
        })
    };

    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
    };

    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubProvider;