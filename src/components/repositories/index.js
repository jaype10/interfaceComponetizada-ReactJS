import React from 'react';
import RepositoryItem from '../repository-item';
import * as S from "./styled";

 const Repositiories = () => {
    return (
        <S.WrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
            >
                <S.WrapperTabList>
                    <S.WrapperTab>Repositiories</S.WrapperTab>
                    <S.WrapperTab>Starred</S.WrapperTab>
                </S.WrapperTabList>
                    <S.WrapperTabPanel>
                        <RepositoryItem 
                            name="repo 1" 
                            linkToRepo="https://github.com/jaype10/jogosParaWeb"
                            fullName="jaype10/jogosParaWeb"
                        />
                     </S.WrapperTabPanel>
                    <S.WrapperTabPanel>
                        <RepositoryItem 
                            name="repo 2" 
                            linkToRepo="https://github.com/jaype10/jaype10"
                            fullName="jaype10/jaype10"
                        />
                    </S.WrapperTabPanel>
        </S.WrapperTabs>
    );
};

export default Repositiories;