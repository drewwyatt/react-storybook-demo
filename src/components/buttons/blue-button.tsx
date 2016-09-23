import * as React from 'react';

export function BlueButton({ children }: { children?: any }): JSX.Element {
    const styles = {
        background: 'blue',
        color: 'orange'
    };
    return (
        <button style={styles}>{children}</button>
    );
}