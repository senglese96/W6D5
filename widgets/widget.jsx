import React from 'react';
import Clock from './frontend/clock';
import Tab from './tabs'

const Widgets = props => (
    <>
    <h2>Clock</h2>
    <Clock />
    <h2>Tabs</h2>
    <Tab tabs={[
        { 
            title: 'tab 1',
            content: 'This is the first tab!'
        },
        {
            title: 'tab 2',
            content: 'This is the second tab!'
        } ,
        {
            title: 'tab 3',
            content: 'This is the third tab!'
        }  
        ]} />
    </>
);

export default Widgets;