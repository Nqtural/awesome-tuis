<script setup>
	import { ref, watch } from "vue";

const props = defineProps({
  modelValue: {
	type: Boolean,
	default: false
  }
});
const visible = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newVal) => {
	visible.value = newVal;
  }
);
</script>

<template>
	<transition name="fade">
	<div v-if="visible" id="spinner">
		<div></div>
	</div>
	</transition>
</template>

<style scoped>
@import "./css/colors.css";

#spinner {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	pointer-events: none;
}

#spinner > div {
	border: 0.5em solid var(--background-secondary);
	border-top-color: var(--primary);
	width: 3em;
	aspect-ratio: 1/1;
	border-radius: 50%;
	animation: spin 0.8s linear infinite;
}

	@keyframes spin {
		100% {
			transform: rotate(360deg);
		}
	}

	/* Vue transition classes for fade in/out */
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.3s ease;
	}
	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
	.fade-enter-to,
	.fade-leave-from {
		opacity: 1;
	}
</style>
