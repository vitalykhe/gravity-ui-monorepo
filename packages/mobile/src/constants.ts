import {block} from '@gravity-ui-mono/utils';

export enum Platform {
    IOS = 'ios',
    ANDROID = 'android',
    BROWSER = 'browser',
}

const b = block('root');
export const rootMobileClassName = b({mobile: true}).split(/\s+/)[1];
