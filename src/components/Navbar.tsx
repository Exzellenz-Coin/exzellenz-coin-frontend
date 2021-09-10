import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

//import { MenuIcon } from '@material-ui/icons/Menu';

import { Divider, Drawer, List, ListItemIcon, ListItemText } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "100%",
      flexGrow: 1,
      zIndex: 100,
      backgroundColor: '#2b2a33',
      color: '#2b2a33'
    },
    menuButton: {
      marginRight: theme.spacing(2),
      flexGrow: 1,
    },
    button: {
      flexGrow: 2,
      color: "inherit"
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  }));


  export default function Navbar() {
    const classes = useStyles();
    const [collapse, setCollapse] = useState(false);
    const [showSites, setShowSites] = React.useState(false);
    const XS = 600; //breakpoint for showing button dropdown

    //check position show/hide  
    useEffect(() => {
        const interval = setInterval(() => {
            if (window.innerWidth < XS) {
              setCollapse(true);
            } else {
              setCollapse(false);
            }
        }, 100);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
      <div className={classes.root}>
          <AppBar position="absolute">
            <Toolbar color="inherit">
              <IconButton edge="start" className={classes.menuButton} component={RouterLink} to="/" color="inherit" aria-label="menu">
                Exzellenz
              </IconButton>
              <Container maxWidth="sm">
              </Container>
              { !collapse?
                <ButtonGroup className={classes.menuButton} variant="text">
                    <Button className={classes.button} size="large" component={RouterLink} to="/projects">Projects</Button>
                    <Button className={classes.button} size="large" component={RouterLink} to="/education">Education</Button>
                    <Button className={classes.button} size="large" component={RouterLink} to="/work">Work</Button>
                </ButtonGroup>
              :
              <div>
                <Button className={classes.button} onClick={() => setShowSites(true)}>Pages</Button>
                <Drawer anchor="right" open={showSites} onClose={() => setShowSites(false)} >
                  <div
                    className={clsx(classes.list, {
                      [classes.fullList]: true,
                    })}
                    role="presentation"
                    onClick={() => setShowSites(false)}
                    onKeyDown={() => setShowSites(false)}
                    style={{backgroundColor: '#2b2a33', height: "100%"}}
                  >
                    <List style={{backgroundColor: '#2b2a33'}}>
                      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                          <ListItemText primary={text} />
                        </ListItem>
                      ))}
                    </List>
                    <Divider />
                    <List style={{backgroundColor: '#2b2a33'}}>
                      {['About', 'Contact', 'Legal'].map((text, index) => (
                        <ListItem button key={text} component={RouterLink} to="/projects">
                          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                          <ListItemText primary={text} />
                        </ListItem>
                      ))}
                    </List>
                  </div>
                </Drawer>
          </div>
              }
            </Toolbar>
          </AppBar>
      </div>
    );
  }  

  //<Button color="inherit" size="small"><SimpleMenu/></Button> //put in button group for more options
