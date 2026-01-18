import { reactive } from "vue";

export const store = reactive({
	parsedData: null,
	setParsedData(data) {
		this.parsedData = data;
	}
});
