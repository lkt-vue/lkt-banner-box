<script setup lang="ts">
  import {computed, useSlots} from "vue";

const props = withDefaults(defineProps<{
    label?: string,
    labelTag?: string,
    subLabel?: string,
    subLabelTag?: string,
    imgSrc?: string,
    isParallax?: boolean,
    opacity?: string|number,
}>(), {
    label: '',
    labelTag: 'p',
    subLabel: '',
    subLabelTag: 'p',
    imgSrc: '',
    isParallax: false,
    opacity: ''
});

const slots = useSlots();

const computedLabelTag = computed(() => {
        if (!props.labelTag) return 'p';
        return props.labelTag;
    }),
    computedSubLabelTag = computed(() => {
        if (!props.subLabelTag) return 'p';
        return props.subLabelTag;
    }),
    renderArtBox = computed(() => {
        if (props.imgSrc !== '') return true;
        return false;
    }),
    renderOpacityBox = computed(() => {
        if (!renderArtBox.value) return false;
        if (props.opacity !== '') return true;
        return false;
    }),
    computedArtStyles = computed(() => {
        if (props.imgSrc) return 'background-image: url("'+props.imgSrc + '");';
        return '';
    }),
    computedOpacityStyles = computed(() => {
        if (props.opacity) return 'opacity: ' + props.opacity;
        return '';
    }),
    classes = computed(() => {
        let r = [];
        if (props.isParallax) r.push('is-parallax');
        return r.join(' ');
    });

</script>

<template>
    <div class="lkt-banner-box-container">
        <div class="lkt-banner-box" :class="classes">
            <div class="lkt-banner-box-art" v-if="renderArtBox" :style="computedArtStyles"></div>
            <div class="lkt-banner-box-opacity" v-if="renderOpacityBox" :style="computedOpacityStyles"></div>
            <div class="lkt-banner-box-content">
                <div v-if="label" class="lkt-banner-box-label-container">
                    <component :is="computedLabelTag" class="lkt-banner-box-label">
                        {{ label }}
                    </component>
                </div>

                <div v-if="subLabel" class="lkt-banner-box-sub-label-container">
                    <component :is="computedSubLabelTag" class="lkt-banner-box-sub-label">
                        {{ subLabel }}
                    </component>
                </div>

                <div v-if="slots.default" class="lkt-banner-box-extra">
                    <slot/>
                </div>
            </div>
        </div>
    </div>
</template>