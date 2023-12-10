import * as React from 'react';

import {cn} from '@gravity-ui-mono/utils'

import './ShowcaseStyles.scss';

type Props = React.PropsWithChildren<{
    title?: string;
    description?: React.ReactNode;
    className?: string;
}>;

const b = cn('showcase');

export const Showcase = ({title, description, className, children}: Props) => {
    return (
        <div className={b(null, className)}>
            {title && <div className={b('title')}>{title}</div>}
            {description && <div className={b('description')}>{description}</div>}
            <div className={b('content')}>{children}</div>
        </div>
    );
}
