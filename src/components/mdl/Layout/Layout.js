import React from 'react';

export const Grid = (props) => {
    return (
        <div className="mdl-grid">
            {props.children}
        </div>
    );
}

export const Cell = (props) => {
    return (
        <div className={`mdl-cell mdl-cell--${props.col}-col`}>
            {props.children}
        </div>
    );
}

export const Tabs = (props) => {
    return (
        <div className={`mdl-tabs mdl-js-tabs`}>
            {props.children}
        </div>
    );
}

export const TabsPanel = (props) => {
    return (
        <div className={`mdl-tabs__panel ${props.isActive ? 'is-active' : ''}`}>
            {props.children}
        </div>
    );
}