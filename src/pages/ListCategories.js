import React from 'react';
import { getCategories } from '../services/api';

class ListCategories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const categories = await getCategories();
    // console.log(categories);
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map((categoria) => (
          <div key={ categoria.id }>
            <button
              type="button"
              data-testid="category"
              id={ categoria.id }
            >
              {categoria.name}
            </button>

          </div>
        ))}
      </div>
    );
  }
}

export default ListCategories;
