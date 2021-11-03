import React, {Fragment} from 'react';
import ReactDom from 'react-dom';
import classes from './Model.module.css';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onHide}></div>
}

const ModelOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}
const protalElement = document.getElementById('overlays');
const Model = props => {
    return <Fragment>
        {ReactDom.createPortal(<Backdrop onHide={props.onHide}/>, protalElement)}
        {ReactDom.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, protalElement)}

    </Fragment>
}

export default Model;