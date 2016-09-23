import * as React from 'react';

export function TextField(): JSX.Element {
    const styles = {
        padding: '10px',
        background: 'teal',
        color: 'pink'
    };

    return <input type='text' style={styles} />
}