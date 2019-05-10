import React, {Component} from 'react'
import logo from '../img/logo.png';
import '../App.css';
import { Form, Button, FormControl } from 'react-bootstrap';


class Landing extends Component{
    render(){
        return(
                
       <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            
            <Form className="form-poisk" inline>
            <FormControl type="text" placeholder="Искать" className="mr-sm-2" />
            <Button variant="outline-success">Поиск</Button>
            </Form>
        
        </header>
            
        )
    }
}


export default Landing