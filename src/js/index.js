import Search from './models/Search';
import * as searchView from './views/searchViews';
import { elements } from './views/base';

/** Global state of the app
	- Search object
	- Current recipe object 	
	- Shopping list object
	- Liked recipes
*/

const state = {};

const controlSearch = async () => {
	// 1) Get query from the view
	const query = searchView.getInput();

	if(query) {
		// 2) New search object and add to state
		state.search = new Search(query);

		// 3) Prepare UI for result;
		searchView.clearInput();
		searchView.clearResults();

		// 4) Search for recipies;
		await state.search.getResults();

		// 5) Render results on UI;
		searchView.renderResults(state.search.result);
	}
}

elements.searchForm.addEventListener('submit', e => {
	e.preventDefault();
	controlSearch();
});