/** 用户信息 */
export interface User {
    [key: string]: any;
    /** 用户名 */
    name?: string;
    /** 头像 */
    avatar?: string;
    /** 邮箱 */
    email?: string;
}

/** 配置更新通知 */
export interface SettingsNotify {
    type: 'layout' | 'app' | 'user';
    /** Update `key` name, limited `layout` type */
    name?: string;
    value: any;
}