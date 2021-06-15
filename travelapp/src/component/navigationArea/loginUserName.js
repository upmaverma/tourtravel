import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

class loginUserName extends Component{
    constructor(props){
        super(props)

        this.state={
            useremail:sessionStorage.getItem('useremail')
        }
    }
    render(){
        return(
            <>
               <Nav.Link href="/">{this.state.useremail}</Nav.Link>
            </>
        )
    }
}
export default loginUserName;