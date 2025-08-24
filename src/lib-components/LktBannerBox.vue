<script setup lang="ts">
    import { computed, useSlots } from 'vue';
    import { Banner, BannerConfig, BannerType, getDefaultValues } from 'lkt-vue-kernel';

    const props = withDefaults(defineProps<BannerConfig>(), getDefaultValues(Banner));

    const slots = useSlots();

    const renderArtBox = computed(() => {
            return props.art?.src !== '';
        }),
        renderMediaBox = computed(() => {
            return props.media && props.media?.src && props.media?.src !== '';
        }),
        renderOpacityBox = computed(() => {
            if (!renderArtBox.value) return false;
            if (props.opacity) return true;
            return false;
        }),
        computedArtStyles = computed(() => {
            if (props.art?.src) return 'background-image: url("' + props.art?.src + '");';
            return '';
        }),
        computedOpacityStyles = computed(() => {
            if (props.opacity) return 'opacity: ' + props.opacity;
            return '';
        }),
        classes = computed(() => {
            let r = [];
            if (props.type === BannerType.Parallax) r.push('is-parallax');
            return r.join(' ');
        }),
        computedGlobalTag = computed(() => {
            if (typeof props.globalButton !== 'undefined') return 'lkt-button';
            return 'div';
        }),
        computedGlobalAttrs = computed(() => {
            if (typeof props.globalButton !== 'undefined') return props.globalButton;
            return {};
        }),
        computedGlobalClass = computed(() => {
            if (typeof props.globalButton !== 'undefined') return 'lkt-banner--global-button';
            return '';
        });

</script>

<template>
    <component :is="computedGlobalTag"
               v-bind="computedGlobalAttrs"
               :class="computedGlobalClass"
    >
        <div class="lkt-banner" :class="classes">

            <div class="lkt-banner--main">
                <div class="lkt-banner--art" v-if="renderArtBox" :style="computedArtStyles"/>
                <div class="lkt-banner--opacity" v-if="renderOpacityBox" :style="computedOpacityStyles"/>
                <div class="lkt-banner--content">

                    <lkt-image
                        v-if="renderMediaBox"
                        v-bind="media"
                    />

                    <div class="lkt-banner--content-main">
                        <lkt-header v-if="header?.text || slots.header" v-bind="header" class="lkt-banner--header">
                            <template v-if="slots.header" #text>
                                <slot name="header" />
                            </template>
                        </lkt-header>

                        <lkt-header v-if="subHeader?.text || slots.subHeader" v-bind="subHeader" class="lkt-banner--sub-header">
                            <template v-if="slots.subHeader" #text>
                                <slot name="subHeader" />
                            </template>
                        </lkt-header>

                        <div v-if="slots.default" class="lkt-banner--extra">
                            <slot />
                        </div>
                    </div>
                </div>
            </div>

            <nav v-if="navButtons.length > 0" class="lkt-banner--nav-buttons">
                <lkt-button v-for="btn in navButtons" v-bind="btn"/>
            </nav>

            <template v-if="slots['web-element-actions']">
                <slot name="web-element-actions"/>
            </template>
        </div>
    </component>
</template>