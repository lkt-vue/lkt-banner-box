<script setup lang="ts">
    import { computed, useSlots } from 'vue';
    import { Banner, BannerConfig, BannerType, getDefaultValues } from 'lkt-vue-kernel';

    const props = withDefaults(defineProps<BannerConfig>(), getDefaultValues(Banner));

    const slots = useSlots();

    const computedLabelTag = computed(() => {
            if (!props.header?.tag) return 'p';
            return props.header.tag;
        }),
        computedSubLabelTag = computed(() => {
            if (!props.subHeader?.tag) return 'p';
            return props.subHeader.tag;
        }),
        renderArtBox = computed(() => {
            return props.art?.src !== '';
        }),
        renderMediaBox = computed(() => {
            return props.media?.src !== '';
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
        });

</script>

<template>
    <div class="lkt-banner" :class="classes">
        <div class="lkt-banner-main">
            <div class="lkt-banner-art" v-if="renderArtBox" :style="computedArtStyles"></div>
            <div class="lkt-banner-opacity" v-if="renderOpacityBox" :style="computedOpacityStyles"></div>
            <div class="lkt-banner-content">

                <lkt-image
                    v-if="renderMediaBox"
                    v-bind="media"
                />

                <div class="lkt-banner-content-main">
                    <div v-if="header?.text || slots.header" class="lkt-banner-header-container">
                        <component :is="computedLabelTag" class="lkt-banner-header">
                            <template v-if="slots.header">
                                <slot name="header" />
                            </template>
                            <template v-else>
                                {{ header.text }}
                            </template>
                        </component>
                    </div>

                    <div v-if="subHeader?.text || slots.subHeader" class="lkt-banner-sub-header-container">
                        <component :is="computedSubLabelTag" class="lkt-banner-sub-header">
                            <template v-if="slots.subHeader">
                                <slot name="subHeader" />
                            </template>
                            <template v-else>
                                {{ subHeader.text }}
                            </template>
                        </component>
                    </div>

                    <div v-if="slots.default" class="lkt-banner-extra">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>