import PropTypes from 'prop-types';
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
    const { categories } = this.setState;
    if (categories === undefined) {
      this.setState({ categories: await getCategories() });
    }
  }

  render() {
    const { categories } = this.state;
    const { onHandleClickCotegories } = this.props;
    return (
      <div className="div-categories">
        {categories.map((categoria) => (
          <div key={ categoria.id }>
            <button
              type="button"
              data-testid="category"
              value={ categoria.id }
              onClick={ onHandleClickCotegories }
              className="button-categories"
            >
              {categoria.name}
            </button>

          </div>
        ))}
      </div>
    );
  }
}

ListCategories.propTypes = {
  onHandleClickCotegories: PropTypes.func.isRequired,
};

export default ListCategories;
