import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // maxWidth: '36ch'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    root1: {
        flexGrow: 1,
    },
    paper: {
        padding: '20px',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }

}));

export default function SimpleCard(props) {
    const classes = useStyles();


    return (
        <div>


                            <Card className={classes.root} style={{ borderWidth: '1px', border: 'solid', marginBottom: '10px' }}>

                                <CardContent>

                                    <CardActions style={{ textAlign: 'right' }}>
                                       
                                       
                                        <Button size="small"
                                        href={props.bookLink}
                                        target='_blank'
                                        >View</Button>
                                      
                                        <Button size="small">Delete</Button>
                                    </CardActions>

                                    <Typography variant="h4" color="textSecondary" gutterBottom>

                                       {props.title}

                                    </Typography>

                                    <Typography className={classes.pos} color="textSecondary">
                                    {props.authors && props.authors.length > 0 ? props.authors.join(" & ") : ""}
                                    </Typography>

                                    <div className={classes.root1}>
                                        <Grid container spacing={3} style={{minWidth:'750px'}}  >
                                            <Grid item xs={6}>

                                            <ListItemAvatar>
                                                 <Avatar alt="book" src={props.img} />
                                             </ListItemAvatar>

                                            </Grid>

                                            <Grid item xs={6} >

                                                <Typography paragraph>
                                                    {props.description}
                                                </Typography>

                                            </Grid>
                                        </Grid>


                                    </div >

                                </CardContent>

                            </Card>
              
                
          

        </div>
    )

}




