type CapitalizeConfig = {
    find: string;
    replacement: string;
};
declare class Content {
    capitalize(value: string, { find, replacement }?: CapitalizeConfig): string;
    merge(texts: Array<string | undefined | null>, merge_symbol?: string): string;
}
declare const _default: Content;
export default _default;
