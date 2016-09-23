import * as React from 'react';

export interface RedButtonProps extends React.HTMLProps<HTMLButtonElement> {}

export function RedButton(props: RedButtonProps): JSX.Element {
    const styles = {
        background: 'red',
        color: 'white',
        weight: 'bold'
    };
    return (
        <button style={styles} {...props}>{props.children}</button>
    );
}