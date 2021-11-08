import { useContext } from "react";
import { GithubContext } from "../providers/githubProvider";


const useGithub = () => {
    const{ githubState, getUser } = useContext(GithubContext);

    return{ githubState, getUser };
}

export default useGithub;