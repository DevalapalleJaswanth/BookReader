import React from 'react';
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getBookDetails } from '../Services/Services';
import Loader from "react-loader-spinner";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const loaderStyle = { height: "50%", display: 'flex', justifyContent: 'center', alignItem: 'center' };

function Details(props: any) {
    const [loading, setLoading] = useState(false)
    const [bookDetails, setBookDetails] = useState<any>([]);
    useEffect(() => {
        setLoading(true)
        getBookDetails(props.location.state.id).then
            ((resp: any) => {
                console.log(resp);
                setBookDetails(resp.data);
                setLoading(false)
            })

    }, [])
    return (
        <>
            {console.log(bookDetails)}
            {
                loading ? <div style={loaderStyle}>
                    <Loader
                        type="Puff"
                        color="rgb(205, 204, 212)"
                        height={100}
                        width={100}
                    //timeout={3000}
                    />
                </div> :
                    <div>

                        <Link to='/' style={{ margin: "25px", fontSize: "20px", color: "black", textDecoration: "none", display: "flex" }}><ArrowBackIosIcon />Back</Link>
                        <div style={{ margin: "25px", display: "flex", width: '100vw', height: '100vh', overflow: 'auto' }}>
                            <div >
                                <img src={"https://assignment.api.staging.monomi.lt/" + bookDetails.imageLink} width="200" height="250" />
                                <div style={{ fontSize: "15px" }}>TITLE : {bookDetails.title} </div>
                                <div><span style={{ fontSize: "8px" }}>LANGUAGE : {bookDetails.language}</span> | <span style={{ fontSize: "8px" }}>PAGES : {bookDetails.pages}</span> | <span style={{ fontSize: "8px" }}>YEAR : {bookDetails.year}</span> </div>
                                <div style={{ fontSize: "10px" }}>AUTHOR : {bookDetails.author} <span style={{ fontSize: "8px" }}>| COUNTRY : {bookDetails.country}</span></div>
                            </div>
                            <div style={{ margin: "0px", width: '100vw', height: '100vh' }}>
                                <iframe src={bookDetails.link} width="100%" height="100%"></iframe>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default Details;