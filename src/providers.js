import React from 'react';
import { ResetCSS } from './global/resetCSS';
import GithubProvider from './providers/githubProvider';
import App from './App'


const Providers = () => {
    return (
        <main>
            <GithubProvider>
                <ResetCSS/>
                <App/>
            </GithubProvider>
        </main>
    )
}

export default Providers;
