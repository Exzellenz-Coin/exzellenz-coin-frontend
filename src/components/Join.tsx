import {useState, useCallback, useRef, Suspense, useEffect} from 'react'
import {Canvas, useFrame} from 'react-three-fiber'
import {useSpring} from 'react-spring'
import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import {AdaptiveDpr, Loader, PerspectiveCamera} from '@react-three/drei';
import {
    Backdrop,
    CardActions,
    CardContent, CircularProgress,
    FormControl, Input, InputAdornment, InputLabel, Link,
    Paper,
    Snackbar,
    SvgIcon,
    Switch,
    TextareaAutosize, TextField
} from '@material-ui/core';

import Card from '@material-ui/core/Card';
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";


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
        fontSize: 15,
        margin: theme.spacing(1),
    },
    card: {
        display: "flex",
        marginTop: "15%",
        maxWidth: "300px",
        backgroundColor: '#004E89',
    },
    button: {
        flexGrow: 2,
        color: 'inherit'
    },
}));

interface State {
    username: string;
    email: string;
    password: string;
    showPassword: boolean;
}

export default function Join() {
    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
        username: '',
        email: '',
        password: '',
        showPassword: false,
    });


    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [prop]: event.target.value})
    };

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword})
    };

    return (
        <div className={classes.canvas}>
            <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Card className={classes.card} variant={"outlined"}>
                    <CardContent>
                        <Typography variant={"h4"}>
                            join the Exzellenz network!
                        </Typography>
                        <form noValidate={false} autoComplete={'off'}>
                            <FormControl className={classes.input} fullWidth={true} color={'secondary'}>
                                <InputLabel htmlFor={'username-input'} shrink={true}>username</InputLabel>
                                <Input
                                    id={'username-input'}
                                    value={values.username}
                                    onChange={handleChange('username')}
                                    endAdornment={
                                        <InputAdornment position={'end'}>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <FormControl className={classes.input} fullWidth={true} color={'secondary'}>
                                <InputLabel htmlFor={'email-input'} shrink={true}>email</InputLabel>
                                <Input
                                    id={'email-input'}
                                    value={values.email}
                                    onChange={handleChange('email')}
                                    endAdornment={
                                        <InputAdornment position={'end'}>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <FormControl className={classes.input} fullWidth={true}  color={'secondary'}>
                                <InputLabel htmlFor={'password-input'} shrink={true}>password</InputLabel>
                                <Input
                                    id={'password-input'}
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position={'end'}>
                                            <IconButton size={"small"}
                                                        aria-label={'toggle password visibility'}
                                                        onClick={handleClickShowPassword}
                                            >
                                                {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </form>
                        <CardActions>
                            <br/>
                            <Button className={classes.button} size={'small'}>
                                submit
                            </Button>
                        </CardActions>
                    </CardContent>
                </Card>
                <Typography variant={"h6"}>
                    <Link href="">
                        or log in
                    </Link>
                </Typography>
            </Grid>
        </div>
    )
}




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
