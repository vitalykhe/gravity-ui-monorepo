import {Icon} from '@gravity-ui-mono/icon';

import {NAMESPACE} from './cn';
import {isOfType} from './isOfType';

let nextUniqueId = 1;

export function getUniqId() {
    return `${NAMESPACE}uniq-${nextUniqueId++}`;
}

export const isIcon = isOfType(Icon);
