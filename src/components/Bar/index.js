import React from 'react';
import { makeStyles, LinearProgress, withStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      border: 'solid 1px lightgrey',
      marginTop: theme.spacing(2),
      '& > * + *': {
        marginTop: theme.spacing(2),
      }
    },
    progressLabel: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 1,
        maxHeight: 30,
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        "& span": {
            width: "100%"
        }
    }
  }));

const StyledProgress = withStyles(theme=>({
    root: {
        height: 30,
        backgroundColor: '#fff'
    }
}))(props=> props.value === 100 ? <StyledProgressRed {...props}/> : <StyledProgressBlue {...props}/>);

const StyledProgressBlue = withStyles(theme=>({
    barColorPrimary: {
        backgroundColor: '#cfe8fc'
    }
}))(props=> <LinearProgress {...props}/>);

const StyledProgressRed = withStyles(theme=> ({
    barColorPrimary: {
        backgroundColor: '#ff0000'
    }
}))(props=> <LinearProgress {...props}/>);

const Bar = ({completed, limit, testid}) => {
    const classes = useStyles();
    let progress = (completed/limit)*100;
    let barValue = progress;
    
    if (progress > 100) {
        barValue = 100;
    }

    return (
        <div data-testid={testid} className={classes.root}>
            <Grid container spacing={1} justify="space-between">
                <Grid item xs={12} spacing={0}>
                    <div className={classes.progressLabel}>
                        <span>{`${progress.toFixed(0)}%`}</span>
                    </div>
                    <StyledProgress  variant="determinate" value={barValue} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Bar;