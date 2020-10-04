import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {domain} from '../config/config';
import UrlList from './url-list.component';

/**
 * @auther Tushar Kadam <tushar1kdm@gmail.com>
 * @description This class is created lyaout with submit form 
 * @class CreateShortenrUrl
 * @since 4 Oct 2020
 */
export default class CreateShortenrUrl extends Component {

    constructor(props) {
        super(props);

        // Setting up functions
        this.onChangeShortenUrl = this.onChangeShortenUrl.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state = {
            fullurl: ''
        }
    }

    /**
     * @function onChangeShortenUrl After any change State will update using this function
     * @param e this is a event parameter
     * @since 4 Oct 2020
     */
    onChangeShortenUrl(e) {
        this.setState({ fullurl: e.target.value });
    }

    /**
     * @function onSubmit get data from updated state and submit to rest API
     * @param e this is a event parameter we added preventDefault() for the submit event
     * @since 4 Oct 2020
     */
    onSubmit(e) {
        e.preventDefault();

        // created just Object
        const urlObject = {
            fullurl: this.state.fullurl
        };
        // send date to backent using axios 
        axios.post(`${domain.domainUrl}api/createurl`, urlObject)
            .then(res => {
                console.log(res.data);
                if (res.data.error) {
                    toast(res.data.error);
                } else {
                    toast('URL created sucssesfully');
                }

            });
         // clear the form   
         this.setState({ fullurl: '' });
    }

    render() {
        return (
            <div className="v-align"> <h2>Welcome to Short.com</h2>
                <div className="form-wrapper">
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group controlId="fullurl">
                            <Form.Label>Please Enter Your Url Here</Form.Label>
                            <Form.Control type="text" value={this.state.fullurl} onChange={this.onChangeShortenUrl} />
                        </Form.Group>
                        <Button variant="dark" size="sm" block="block" type="submit">
                            Create Shorten Url
                        </Button>
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                    </Form>
                </div>
                <UrlList></UrlList>
            </div>
        );
    }

    
}