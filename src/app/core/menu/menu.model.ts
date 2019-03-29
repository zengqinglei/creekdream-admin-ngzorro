/** 菜单信息 */
export interface Menu {
    [key: string]: any;
    /** 唯一key */
    id: string;
    /** 层级 */
    level: number;
    /** 文本 */
    title: string;
    /** 图标 */
    icon?: string;
    /** 是否展开 */
    open?: boolean;
    /** 是否选中 */
    selected?: boolean;
    /** 是否禁用 */
    disabled?: boolean;
    /** 子菜单 */
    children?: Menu[];
}
