import {ref} from 'vue'; 
import Temperature from '../pages/temperature.vue';
import Weight from '../pages/weight.vue';

export const routes = [

	// variable globales pour la route Temperature
	{
		anchor: 'temp',
		label  : 'Temperature',
		page : Temperature,
	},
	// variable globales pour la Weight
	{
		anchor : 'weight',
		label : 'Weight',
		page : Weight,
	},
	// variable globales pour la route test
	{
		anchor : 'test',
		label :'test',
		page : Temperature,
	}
		
];

export const defaultAnchor = ref('temp');
export const curAnchor = ref(defaultAnchor);
export const currentPage = computed(() => {
	return routes.find((route) => route.anchor === curAnchor.value)?.page || Temperature;
  });
