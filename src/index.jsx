import React from 'react';
import ReactDom from 'react-dom';

const Hello = ({name}) => `Hello, ${name}`;

ReactDom.render(
    <Hello name="Kharkiv" />,
    document.getElementById('root')
);