/** 应用信息 */
export interface App {
    [key: string]: any;
    /** 应用名称 */
    name?: string;
    /** 描述 */
    description?: string;
}

/** 页面布局 */
export interface Layout {
    [key: string]: any;
    /** 是否折叠菜单 */
    collapsed: boolean;
}

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
    name?: string;
    value: any;
}