import { BannerConfig, BannerType } from 'lkt-vue-kernel';
declare const slots: Readonly<{
    [name: string]: import("vue").Slot<any> | undefined;
}>;
declare const renderArtBox: import("vue").ComputedRef<boolean>, renderMediaBox: import("vue").ComputedRef<boolean | "" | undefined>, renderOpacityBox: import("vue").ComputedRef<boolean>, computedArtStyles: import("vue").ComputedRef<string>, computedOpacityStyles: import("vue").ComputedRef<string>, classes: import("vue").ComputedRef<string>, computedGlobalTag: import("vue").ComputedRef<"lkt-button" | "div">, computedGlobalAttrs: import("vue").ComputedRef<import("lkt-vue-kernel").ButtonConfig>, computedGlobalClass: import("vue").ComputedRef<"" | "lkt-banner--global-button">;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_14: {}, __VLS_20: {}, __VLS_22: {}, __VLS_28: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    header?: (props: typeof __VLS_14) => any;
} & {
    subHeader?: (props: typeof __VLS_20) => any;
} & {
    default?: (props: typeof __VLS_22) => any;
} & {
    'web-element-actions'?: (props: typeof __VLS_28) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<BannerConfig, {
    slots: typeof slots;
    renderArtBox: typeof renderArtBox;
    renderMediaBox: typeof renderMediaBox;
    renderOpacityBox: typeof renderOpacityBox;
    computedArtStyles: typeof computedArtStyles;
    computedOpacityStyles: typeof computedOpacityStyles;
    classes: typeof classes;
    computedGlobalTag: typeof computedGlobalTag;
    computedGlobalAttrs: typeof computedGlobalAttrs;
    computedGlobalClass: typeof computedGlobalClass;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<BannerConfig> & Readonly<{}>, {
    type: BannerType;
    media: import("lkt-vue-kernel").ImageConfig;
    opacity: string | number;
    header: import("lkt-vue-kernel").HeaderConfig;
    subHeader: import("lkt-vue-kernel").HeaderConfig;
    art: import("lkt-vue-kernel").ImageConfig;
    globalButton: import("lkt-vue-kernel").ButtonConfig;
    navButtons: Array<import("lkt-vue-kernel").ButtonConfig>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<BannerConfig, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<BannerConfig> & Readonly<{}>, {
    type: BannerType;
    media: import("lkt-vue-kernel").ImageConfig;
    opacity: string | number;
    header: import("lkt-vue-kernel").HeaderConfig;
    subHeader: import("lkt-vue-kernel").HeaderConfig;
    art: import("lkt-vue-kernel").ImageConfig;
    globalButton: import("lkt-vue-kernel").ButtonConfig;
    navButtons: Array<import("lkt-vue-kernel").ButtonConfig>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
