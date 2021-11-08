import React from "react";
import Layout from "./components/layout";
import NoSearch from "./components/no-search";
import Profile from "./components/Profile";
import Repositiories from "./components/repositories";
import useGithub from "./hooks/github-hooks";

const App = () => {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? (
      <div>
        {githubState.loading ? (
        <p>Loading</p>
        ) : (
          <div>
            <Profile/>
            <Repositiories/>
          </div>
        )}
      </div>) : (
      <NoSearch />
      )}
      
    </Layout>
  )
}

export default App;
