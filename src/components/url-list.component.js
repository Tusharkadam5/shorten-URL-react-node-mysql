import React, { Component } from 'react';
import axios from 'axios';
//import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {domain} from '../config/config';

/**
 * @auther Tushar Kadam <tushar1kdm@gmail.com>
 * @description This component for render all URl list.
 * @class UrlList
 * @since 4 Oct 2020
 */
export default class UrlList extends Component {

    constructor(props) {
        super(props);
       //this.onChangeShortenUrl = this.onChangeShortenUrl.bind(this);
       //this.loadAllUrls = this.loadAllUrls.bind(this);
       this.loadAllUrls();
        this.state = {
            fullurl: '',
            data: []
        }
    }

     /**
     * @function onSubmit get data from updated state and submit to rest API
     * @param e this is a event parameter we added preventDefault() for the submit event
     * @since 4 Oct 2020
     */
    loadAllUrls() {
       
        // send date to backent using axios 
        axios.get(`${domain.domainUrl}api/getallurls`)
            .then(res => {
                console.log(res);
                //let resoponseArray = res.data.response;
                this.setState({
                    data: res.data.response
                })
                console.log(this.state);

               
                if (res.data.error) {
                   // toast(res.data.error);
                } else {
                   // toast('URL created sucssesfully');
                }

            });
         // clear the form   
         this.setState({ fullurl: '' });
    }

render () {
    return(
        <div>
            <ul>
                {
                    this.state.data.map((item, key) => {
                        return <li key={key}>{item.fullurl} {item.short}</li>
                    })
                }
            </ul>
        </div>
    )
}

}