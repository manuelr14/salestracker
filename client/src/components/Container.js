import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CenteredGrid from './Grid';

export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md" style={{ border: 'solid', borderWidth: "2px" }} >
                <Typography component="div" style={{ height: '25vh' }} >

                    <h1 style={{ textAlign: 'center' }}>(React) Google Books Search</h1>
                    <h3 style={{ textAlign: 'center' }}>Search for and Save Books of interests</h3>
                </Typography>



            </Container>
        </React.Fragment>
    );
}
{/* <Container maxWidth="sm"></Container> */ }