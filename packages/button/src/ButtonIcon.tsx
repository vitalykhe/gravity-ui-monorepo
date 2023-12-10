import * as React from 'react';

import {block} from '@gravity-ui-mono/utils';

const b = block('button');

type Props = React.PropsWithChildren<{
    className?: string;
    side?: 'left' | 'right';
}>;

export const ButtonIcon = ({side, className, children}: Props) => {
    return (
        <span
            className={b(
                'icon',
                {
                    side,
                },
                className,
            )}
        >
            <span className={b('icon-inner')}>{children}</span>
        </span>
    );
};

ButtonIcon.displayName = 'Button.Icon';
