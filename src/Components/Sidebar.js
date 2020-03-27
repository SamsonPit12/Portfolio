import React, { Component } from 'react';
import {Sidebar, LogoImg, TitleTd, Techh2} from '../Styles/SidebarStyle.js';
import TechData from './TechData.js';



class SideContainer extends Component{
    constructor(props) {
        super(props)
        this.state = TechData;
    }

    renderTechData() {
        return this.state.tech.map((tech, index) => {
            const {logo, title} = tech
            return (
                <tr key={index}>
                    <td><LogoImg src={logo} alt={title + ' logo'} /></td>   
                    <TitleTd>{title}</TitleTd>
                </tr>
            )
        })
    }
                
    render(){
        return(
            // <Styles>
                <Sidebar>
                    <Techh2>Tech Skills</Techh2>
                    <div>
                        <table id='tech'>
                            <tbody>
                                {this.renderTechData()}
                            </tbody>
                        </table>
                    </div>
                </Sidebar>
            // </Styles>        
        );
    }    
}
    
export default SideContainer