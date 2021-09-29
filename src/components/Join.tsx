import {useState, useCallback, useRef, Suspense, useEffect} from 'react'
import {Canvas, useFrame} from 'react-three-fiber'
import {useSpring} from 'react-spring'
import React from "react";
//import {Image} from 'react-native';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import {Login, Create} from '@mui/icons-material';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import {AdaptiveDpr, Loader, PerspectiveCamera} from '@react-three/drei';
import {
    Avatar,
    Backdrop, CardActionArea,
    CardActions,
    CardContent, CardHeader, CardMedia, Chip, CircularProgress, Container, Fab,
    FormControl, FormControlLabel, FormHelperText, Input, InputAdornment, InputLabel, Link,
    Paper, Popper, PopperPlacementType,
    Snackbar,
    SvgIcon,
    Switch,
    TextareaAutosize, TextField, withStyles, Zoom
} from '@material-ui/core';

import Card from '@material-ui/core/Card';
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {formControlClasses} from "@mui/material";


const useStyles = makeStyles((theme) => ({
    canvas: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: "100%",
        minHeight: "500px",
        height: "100%",
        zIndex: 0
    },
    input: {
        styleOverrides: {
            underline: {
                width: '50px'
            },
        },
        fontSize: 20,
        fontColor: "white",

        margin: theme.spacing(2),
    },
    label: {
        fontColor: "white",
        fontSize: 20,
        '&:active': {
          fontColor: "black"
        },
    },
    mainGrid: {
        marginTop: "10%",
    },
    card: {
        display: "flex",
        height: "25rem",
        width: "40rem",
        borderColor: '#1a3c61',
        borderWidth: '1px'
    },
    cardToggle: {
        width: "0",
        height: "0"
    },
    inputCard: {
        borderColor: '#1a3c61',
        borderWidth: '0px',
        display: "flex",
        width: "25rem"
    },
    leftCard: {
        display: "flex",
        width: "15rem",
    },
    logo: {
        height: "16rem",
    },
    button: {
        marginTop: "2rem",
        flexGrow: 1,
        color: 'secondary',
        boxShadow: "none",
        '&:active': {
            borderColor: '#000',
            boxShadow: "0px 0px 0px 0.1rem #3070B3"
        },
        '&:focus': {
            outline: "none",
        }
    },
    iconButton: {
        color: "#3070B3",
        '&:focus': {
            outline: "none",
        }
    }

}));

interface State {
    username: string;
    usernameLogin: string;
    email: string;
    password: string;
    passwordTwo: string;
    passwordLogin: string;
    showPassword: boolean;
}


export default function Join() {
    const classes = useStyles();
    const cardRef = React.createRef();
    const [login, setLogin] = React.useState(false);
    const [register, setRegister] = React.useState(true);
    const [header, setHeader] = useState(<h2>join the Excellence network!</h2>);
    const [values, setValues] = React.useState<State>({
        username: '',
        usernameLogin: '',
        email: '',
        password: '',
        passwordTwo: '',
        passwordLogin: '',
        showPassword: false,
    });
    const button = login ? <Create/> : <Login/>;


    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [prop]: event.target.value})
    };


    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword})
    };


    function handleCard() {
        setLogin(() => !login)
        setRegister(() => !register)
        setHeader(() => register ? <h1>welcome back!</h1> : <h2>join the Excellence network!</h2>)
    }


    return (
        <div className={classes.canvas}>
            <Grid className={classes.mainGrid}
                  container
                  direction={"column"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
            >
                <FormControlLabel
                    control={<IconButton onClick={handleCard} className={classes.iconButton} disableRipple>
                        {button}
                    </IconButton>}
                    label={register ? " log in" : " register"}/>

                <Grid item>
                    <Card ref={cardRef} className={classes.card} variant={"outlined"}>
                        <Card className={classes.leftCard}>
                            <Grid container direction={"column"} justifyContent={"space-between"} alignItems={"center"}
                            >
                                <Grid item>
                                    <Typography align={"center"} variant={"h1"}>
                                        {header}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <CardMedia className={classes.logo}
                                               component={"img"}
                                               image={"/exc_logo.png"}
                                               alt={"Excellence Logo"}
                                    />
                                </Grid>
                            </Grid>

                        </Card>
                        <Zoom in={login}>
                            <Card className={login ? classes.inputCard : classes.cardToggle} variant={"outlined"}>
                                <CardContent>
                                    <form noValidate={false} autoComplete={'on'}>
                                        <FormControl className={classes.input} fullWidth={false}
                                                     >
                                            <InputLabel className={classes.label} focused={true}
                                                        htmlFor={'usernameLogin-input'}>username</InputLabel>
                                            <Input
                                                disableUnderline={true}
                                                id={'username-input'}
                                                value={values.usernameLogin}
                                                onChange={handleChange('usernameLogin')}
                                            />
                                        </FormControl>
                                        <FormControl className={classes.input} fullWidth={false}
                                                     >
                                            <InputLabel className={classes.label} focused={true}
                                                        htmlFor={'passwordLogin-input'}>password</InputLabel>
                                            <Input
                                                disableUnderline={true}
                                                id={'password-input'}
                                                type={values.showPassword ? 'text' : 'password'}
                                                value={values.passwordLogin}
                                                onChange={handleChange('passwordLogin')}
                                                endAdornment={
                                                    <InputAdornment position={'end'}>
                                                        <IconButton className={classes.iconButton}
                                                            size={"small"}
                                                                    aria-label={'toggle password visibility'}
                                                                    onClick={handleClickShowPassword}
                                                        >
                                                            {values.showPassword ? <Visibility/> :
                                                                <VisibilityOff/>}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    </form>
                                    <CardActions>
                                        <br/>
                                        <Button variant={'outlined'} className={classes.button} size={"small"}
                                                disableFocusRipple
                                                disableRipple disableElevation>
                                            log in
                                        </Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Zoom>
                        <Zoom in={register}>
                            <Card className={login ? classes.cardToggle : classes.inputCard} variant={"outlined"}>
                                <CardContent>
                                    <form noValidate={false} autoComplete={'off'}>
                                        <FormControl className={classes.input} fullWidth={true}
                                                     >
                                            <InputLabel className={classes.label} focused={true}
                                                        htmlFor={'email-input'}>email</InputLabel>
                                            <Input
                                                disableUnderline={true}
                                                id={'email-input'}
                                                value={values.email}
                                                onChange={handleChange('email')}
                                            />
                                        </FormControl>
                                        <FormControl className={classes.input} fullWidth={false}
                                                     >
                                            <InputLabel className={classes.label} focused={true}
                                                        htmlFor={'username-input'}>username</InputLabel>
                                            <Input
                                                disableUnderline={true}
                                                id={'username-input'}
                                                value={values.username}
                                                onChange={handleChange('username')}
                                            />
                                        </FormControl>
                                        <FormControl className={classes.input} fullWidth={false}
                                                     >
                                            <InputLabel className={classes.label} focused={true}
                                                        htmlFor={'password-input'}>password</InputLabel>
                                            <Input
                                                disableUnderline={true}
                                                id={'password-input'}
                                                type={values.showPassword ? 'text' : 'password'}
                                                value={values.password}
                                                onChange={handleChange('password')}
                                                endAdornment={
                                                    <InputAdornment position={'end'}>
                                                        <IconButton className={classes.iconButton}
                                                            size={"small"}
                                                                    aria-label={'toggle password visibility'}
                                                                    onClick={handleClickShowPassword}
                                                        >
                                                            {values.showPassword ? <Visibility/> :
                                                                <VisibilityOff/>}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormControl className={classes.input} fullWidth={false}
                                                         >
                                                <InputLabel className={classes.label} focused={true}
                                                            htmlFor={'password-input2'}>repeat password</InputLabel>
                                                <Input
                                                    disableUnderline={true}
                                                    id={'password-input2'}
                                                    type={values.showPassword ? 'text' : 'password'}
                                                    value={values.passwordTwo}
                                                    onChange={handleChange('passwordTwo')}
                                                />
                                            </FormControl>
                                        </FormControl>
                                        <FormHelperText color={"secondary"}>
                                            please
                                            use at
                                            least 8
                                            characters
                                        </FormHelperText>
                                    </form>
                                    <CardActions>
                                        <Button variant={'outlined'} className={classes.button} size={"small"}
                                                disableFocusRipple
                                                disableRipple disableElevation>
                                            sign up
                                        </Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Zoom>
                    </Card>
                </Grid>
            </Grid>
        </div>

    )
}
/*
POPPER
    const [placement, setPlacement] = React.useState<PopperPlacementType>();
    const handlePopper = (newPlacement: PopperPlacementType) => (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        setAnchorEl(event.currentTarget);
        setOpen((prevState) => placement !== newPlacement || !prevState);
        setPlacement(newPlacement);
    }

    <div>
                       <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant={'h6'}>
                                        Test
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Popper>
                        <Button className={classes.button} disableRipple onClick={handlePopper('top')}>
                            or log in
                        </Button>
                    </div>
 */

/* BACKDROP

export default function SimpleBackdrop() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleToggle}>
        Show backdrop
      </Button>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

 */
