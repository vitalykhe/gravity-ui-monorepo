import * as React from 'react';

import { NAMESPACE_NEW, getUniqId } from '@gravity-ui-mono/utils'

export type UseUniqIdResult = string;

function useUniqIdFallback() {
    const idRef = React.useRef<string>();
    if (idRef.current === undefined) {
        idRef.current = getUniqId();
    }
    return idRef.current;
}

function useIdNative() {
    return `${NAMESPACE_NEW}${React.useId()}`;
}

export const useUniqId: () => UseUniqIdResult =
    typeof React.useId === 'function' ? useIdNative : useUniqIdFallback;
