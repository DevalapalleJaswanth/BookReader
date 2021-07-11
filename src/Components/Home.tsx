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
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const gridstyle: any = { xs: 2.2, justifyContent: "center" }

function Home() {
    const [loading, setLoading] = useState(false)
    const [books, setBooks] = useState([]);
    useEffect(() => {
        setLoading(true)
        var data = getAllBooks();
        data.then((resp: any) => { console.log(resp); setBooks(resp.data); setLoading(false) })
    }, [])
    return (
        <>
            {
                loading ? <div>Loading ...</div> :
                    <div>
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
                                            <Card variant="outlined" style={{ margin: "15px" }}>
                                                <CardContent>
                                                    <Typography style={{ margin: "5px" }}>
                                                        <img src={book.imageLink} width="300" height="100" />
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
                        </Grid>
                    </div>
            }
        </>
    )
}
export default Home;