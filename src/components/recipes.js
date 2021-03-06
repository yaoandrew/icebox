import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
// import RecipeToolbar from './recipeToolbar';
import RecipeSuggestionList from '../containers/recipeSuggestionList';
import RecipeList from '../containers/recipeList';

const styles = {
	tabs: {
		backgroundColor: 'rgba(0,0,0,0)',
	},
};

class Recipes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: 0,
		};
	}

	render() {
		return (
			<div className="recipes-container">
				<Tabs
					style={styles.tabs}
					// style={{ backgoundColor: 'white'}}
					className="recipes-tabs"
					// contentContainerStyle={{height: '100%'}}
					// tabItemContainerStyle={{ backgoundColor: 'white', height: '100%' }}
				>
					<Tab
						label="Recipe Suggestions"
						className="recipes-tab"
						style={{ backgoundColor: 'white', height: '100%' }}
					>
						<div>
							<RecipeSuggestionList />
						</div>
					</Tab>
					<Tab
						label="Past Recipes"
						className="recipes-tab"
						style={{ backgoundColor: 'white', height: '100%' }}
					>
						<div>
							<RecipeList />
						</div>
					</Tab>
				</Tabs>
			</div>
		);
	}
}
// Recipes.propTypes = {
// 	children: React.PropTypes.element,
// };

export default Recipes;
