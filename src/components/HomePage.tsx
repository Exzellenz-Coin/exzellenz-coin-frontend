//Landing page /
import { useState, useCallback, useRef, Suspense, useEffect } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { useSpring} from 'react-spring'

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { AdaptiveDpr, Loader, PerspectiveCamera } from '@react-three/drei';
import { Paper, Snackbar, SvgIcon, Switch } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import { mdiTabletCellphone, mdiVideo3d, mdiVideo3dOff } from '@mdi/js'; 
import Icon from '@mdi/react';

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
    foregroundContainer: {
        marginTop: 65,
        zIndex: 4
    },
    floaterPEN: {
        position: 'fixed',
        top: 0,
        left: 0,
        marginTop: 65,
        zIndex: 4,
        width: "100%",
        pointerEvents: "none"
    },
    pen: {
        pointerEvents: "none"
    },
    pe: {
        pointerEvents: "auto"
    },
    gridDirectoryContainer: {
        paddingLeft: "40px",
        paddingRight: "40px",
        xs: 12,
        sm: 6,
        md: 2,
        maxWidth: "100%",
        overflow: "hidden"
    },
    paper:  {
        background: "#2b2a33"
    },
  }));

export default function HomePage() {
    const classes = useStyles();
    return (
        <>
        </>
    )
}