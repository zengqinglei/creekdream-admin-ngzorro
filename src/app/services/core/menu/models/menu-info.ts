/** 菜单信息 */
export interface MenuInfo {
    [key: string]: any;
    /** 唯一key */
    id: string;
    /** 文本 */
    title: string;
    /** 图标 */
    icon?: string;
    /** 是否禁用 */
    disabled?: boolean;
    /** 子菜单 */
    children?: MenuInfo[];
}
