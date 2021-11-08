import React from "react";
import Layout from "./components/layout";
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
      <div>
        Nenhum usúario pesquisado
      </div>
      )}
      
    </Layout>
  )
}

export default App;
