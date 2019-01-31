import React, { Component } from 'react'

class BurgerMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            status: false
        }
        this.handleOpenClose = this.handleOpenClose.bind(this);
    }
    handleOpenClose (){
        this.setState({
            status: !this.state.status
        })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <div id="burger-menu" onClick={this.handleOpenClose} className={this.state.status ? 'close' : ''}>
                    <span></span>
                </div>
                <div id="menu" onClick={this.handleOpenClose} className={this.state.status ? 'overlay' : ''}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="about">About Us</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default BurgerMenu;