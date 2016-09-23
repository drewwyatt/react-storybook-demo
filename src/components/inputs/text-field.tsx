import * as React from 'react';

export interface TextFieldProps extends React.HTMLProps<HTMLInputElement> {
    type?: string;
}

export function TextField(props: TextFieldProps): JSX.Element {
    const styles = {
        padding: '10px',
        background: 'teal',
        color: 'pink'
    };

    return <input {...props} type={ props.type || 'text' } style={styles} />;
}