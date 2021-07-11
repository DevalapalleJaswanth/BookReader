import React from 'react';
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getBookDetails } from '../Services/Services';

const gridstyle: any = { xs: 2.2, justifyContent: "center" }

function Details(props: any) {
    const [loading, setLoading] = useState(false)
    const [bookDetails, setBookDetails] = useState<any>([]);
    useEffect(() => {
        setLoading(true)
        var book = getBookDetails(props.location.state.id)
        book.then((resp: any) => { console.log(resp); setBookDetails(resp.data); setLoading(false) })
    }, [])
    return (
        <>
            {console.log(bookDetails)}
            {
                loading ? <div>Loading ...</div> :
                    <div>


                        <Link to='/' style={{ margin: "25px", fontSize: "20px", textDecoration: "none" }}>Back</Link>
                        <div style={{ margin: "25px", display: "flex" }}>
                            <div >
                                <img src={bookDetails.imageLink} width="200" height="250" />
                                <p style={{ fontSize: "15px" }}>TITLE : {bookDetails.title} <span style={{ fontSize: "6px" }}>| LANGUAGE : {bookDetails.language}</span> </p>
                                <p style={{ fontSize: "10px" }}>AUTHOR : {bookDetails.author} <span style={{ fontSize: "6px" }}>| COUNTRY : {bookDetails.country}</span></p>
                            </div>
                            <div style={{ margin: "0px" }}>
                                <iframe src={bookDetails.link} width="1150" height="800"></iframe>
                            </div>
                        </div>
                    </div>

            }
        </>
    )
}

export default Details;