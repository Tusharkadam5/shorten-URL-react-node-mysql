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
        this.state = {
            data: []
        }
        this.loadAllUrls();
       
    }

     /**
     * @function onSubmit get data from updated state and submit to rest API
     * @param e this is a event parameter we added preventDefault() for the submit event
     * @since 4 Oct 2020
     */
    loadAllUrls() {
       
        // send date to backent using axios 
        axios.get(`${domain.apiUrl}api/getallurls`)
            .then(res => {
                this.setState({
                    data: res.data.response
                })

            });
         // clear the form   
        // this.setState({ data: '' });
    }

render () {
    return(
        <div>
            <ul>
                {
                    this.state.data.map((item, key) => {
                        
                        return <li className="list" key={key}>
                           <div><b>URL: </b>{item.fullurl}</div> 
                            <div><b>Short Url:</b><a href={item.fullurl}> http://short.com/{item.shorturl} </a></div>
                            <div><b>Country:</b> {item.country}</div> 
                            <div><b>clicks:</b> {item.clicks}</div> 
                            <div><b>ipaddress:</b> {item.ipaddress}</div> 
                            </li>
                    })
                }
            </ul>
        </div>
    )
}

}