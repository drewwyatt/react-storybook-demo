import * as React from 'react';

export interface BlueButtonProps extends React.HTMLProps<HTMLButtonElement> {}

export function BlueButton(props: BlueButtonProps): JSX.Element {
    const styles = {
        background: 'blue',
        color: 'orange'
    };
    return (
        <button style={styles} {...props}>{props.children}</button>
    );
}