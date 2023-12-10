import * as React from 'react';

import {cn} from '@gravity-ui-mono/utils'

import './ShowcaseItem.scss';

interface ShowcaseItemProps {
    title: string;
    children: React.ReactNode;
}

const b = cn('showcase-item');

export function ShowcaseItem({title, children}: ShowcaseItemProps) {
    return (
        <div className={b()}>
            <div className={b('title')}>{title}</div>
            <div className={b('content')}>{children}</div>
        </div>
    );
}
