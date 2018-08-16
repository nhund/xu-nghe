import React from 'react'

import MainMenu from './MainMenu'
import TopMenu from './TopMenu'

class MainHeader extends React.Component {
    render(){
        return(
            <div id="header">
                <TopMenu />
                <MainMenu />
            </div>
        );
    }
}
export default MainHeader