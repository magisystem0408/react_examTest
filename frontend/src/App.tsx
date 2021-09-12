import React, {useState,} from 'react';
import {
    makeStyles, Container, Typography, TextField, Button, Box, FormControl,
    Table, TableBody, TableContainer, TableHead, TableRow, TableCell
} from "@material-ui/core";
import FindInPageIcon from '@material-ui/icons/FindInPage';
import axios from "axios";

const useStyle = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    table: {
        width: 650,
    },
}))

type imageUrlProps = {
    mid: string | null
    locale: string | null
    description: string | null
    score: number | null
    confidence: number | null
    topicality: number | null
}

export default function App(): JSX.Element {
    const [data, setData] = useState<imageUrlProps[]>([])
    const [url, setUrl] = useState("")
    const [isLoading, setIsLoading] = useState(false)


    const getUrl = async (url: string) => {
        let result = await axios.get(`https://lf-exam-v2.web.app/api/analyze?imageUrl=${url}`)
        setData(result.data)
        setIsLoading(true)
    }

    const classes = useStyle();
    return (
        <div className="root">
            <header>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            </header>
            <Container maxWidth="lg">
                <Box m={2}>
                    <Typography className="MuiTypography-h5">Example App / Exam v2</Typography>
                </Box>
                <Box display="flex">
                    <FormControl>
                        <TextField
                            required
                            InputLabelProps={{shrink: true}}
                            label="imageUrl"
                            name="imageUrl"
                            type="text"
                            variant="outlined"
                            value={url}
                            // userがタイピングするたびに呼び出される関数
                            onChange={(e => {
                                setUrl(e.target.value)
                            })}
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.margin}
                        startIcon={<FindInPageIcon/>}
                        onClick={() => getUrl(url)}
                    >
                        ANALYZE
                    </Button>
                </Box>
                <div>
                </div>
                {isLoading ?
                    <TableContainer>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Label</TableCell>
                                    <TableCell align="right">Score</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((value) => (
                                    <TableRow key={value.description}>
                                        <TableCell component="th" scope="row">
                                            {value.description}
                                        </TableCell>
                                        <TableCell align="right">{value.score}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    :null
                }
            </Container>


        </div>
    );
}

