import * as React from 'react';

export function RedButton({ children }: { children?: any }): JSX.Element {
    const styles = {
        background: 'red',
        color: 'white',
        weight: 'bold'
    };
    return (
        <button style={styles}>{children}</button>
    );
}