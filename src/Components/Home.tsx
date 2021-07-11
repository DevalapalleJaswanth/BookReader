import React from 'react';
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllBooks } from '../Services/Services';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Loader from "react-loader-spinner";

const gridstyle: any = { xs: 2.2, justifyContent: "center" }

function Home() {
    const [loading, setLoading] = useState(false)
    const [books, setBooks] = useState([]);
    const [sBooks, setSBooks] = useState<any>();
    var bookDetails: any;
    useEffect(() => {
        setLoading(true)
        var data = getAllBooks();
        data.then((resp: any) => { console.log(resp); setBooks(resp.data); setLoading(false) })
    }, [])

    const search = (name: any) => {
        var n: any;
        var e: any;
        books.map((book: any, i: any) => {
            if (name == book.title) {
                n = book;
            }
            else {
                e = "All";
            }
        })
        console.log(n, e)
        return n;

    }

    return (
        <>
            {
                loading ? <div style={{ marginLeft: "500px", marginTop: "100px" }}>
                    <Loader
                        type="Puff"
                        color="rgb(205, 204, 212)"
                        height={100}
                        width={100}
                        timeout={3000}
                    />
                </div> :
                    <div>

                        Search<input type='text' onChange={(e) => { bookDetails = search(e.target.value); setSBooks(bookDetails) }} />

                        {sBooks == null || sBooks == undefined ?
                            <Grid container direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={3}
                                style={{ margin: "10px" }}
                            >
                                {
                                    books.map((book: any, i: any) => (
                                        <Grid style={gridstyle}>
                                            <Link to={{ pathname: "/Details", state: { id: book.id } }}>
                                                <Card variant="outlined" style={{ margin: "15px", background: 'rgb(205, 204, 212)' }}>
                                                    <CardContent>
                                                        <Typography style={{ margin: "5px" }}>
                                                            <img src={"https://assignment.api.staging.monomi.lt/" + book.imageLink} width="300" height="200" />
                                                        </Typography>
                                                        <Typography >
                                                            <p style={{ fontSize: "10px" }}>{book.title}</p>
                                                        </Typography>
                                                        <Typography >
                                                            <p style={{ fontSize: "8px" }}>{book.author}</p>
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Link>
                                        </Grid>
                                    ))
                                }
                            </Grid> : <div>
                                <Grid style={gridstyle}>
                                    <Link to={{ pathname: "/Details", state: { id: sBooks.id } }}>
                                        <Card variant="outlined" style={{ margin: "15px", background: 'rgb(205, 204, 212)' }}>
                                            <CardContent>
                                                <Typography style={{ margin: "5px" }}>
                                                    <img src={"https://assignment.api.staging.monomi.lt/" + sBooks.imageLink} width="300" height="200" />
                                                </Typography>
                                                <Typography >
                                                    <p style={{ fontSize: "10px" }}>{sBooks.title}</p>
                                                </Typography>
                                                <Typography >
                                                    <p style={{ fontSize: "8px" }}>{sBooks.author}</p>
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </Grid>
                            </div>
                        }
                    </div>
            }
        </>
    )
}
export default Home;