type __VLS_Props = {
    label?: string;
    labelTag?: string;
    subLabel?: string;
    subLabelTag?: string;
    imgSrc?: string;
    isParallax?: boolean;
    opacity?: string | number;
};
declare const slots: Readonly<{
    [name: string]: import("vue").Slot<any> | undefined;
}>;
declare const computedLabelTag: import("vue").ComputedRef<string>, computedSubLabelTag: import("vue").ComputedRef<string>, renderArtBox: import("vue").ComputedRef<boolean>, renderOpacityBox: import("vue").ComputedRef<boolean>, computedArtStyles: import("vue").ComputedRef<string>, computedOpacityStyles: import("vue").ComputedRef<string>, classes: import("vue").ComputedRef<string>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_9: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    default?: (props: typeof __VLS_9) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<__VLS_Props, {
    slots: typeof slots;
    computedLabelTag: typeof computedLabelTag;
    computedSubLabelTag: typeof computedSubLabelTag;
    renderArtBox: typeof renderArtBox;
    renderOpacityBox: typeof renderOpacityBox;
    computedArtStyles: typeof computedArtStyles;
    computedOpacityStyles: typeof computedOpacityStyles;
    classes: typeof classes;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    opacity: string | number;
    label: string;
    labelTag: string;
    subLabel: string;
    subLabelTag: string;
    imgSrc: string;
    isParallax: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    opacity: string | number;
    label: string;
    labelTag: string;
    subLabel: string;
    subLabelTag: string;
    imgSrc: string;
    isParallax: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
