import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad(0.5$)', type: 'salad' },
    { label: 'Bacon(0.7$)', type: 'bacon' },
    { label: 'Cheese(0.4$)', type: 'cheese' },
    { label: 'Meat(1.3$)', type: 'meat' },
];

const buildControls = ( props ) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed( 2 )}</strong></p>
        {controls.map( ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded( ctrl.type )}
                removed={() => props.ingredientRemoved( ctrl.type )}
                disabled={props.disabled[ctrl.type]} />
        ) )}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}</button>
    </div>
);

export default buildControls;