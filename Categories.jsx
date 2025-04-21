import React from 'react';
import Widget from './Widget';

const Category = ({ category }) => {
    return (
        <div className="category">
        <h2>{category.name}</h2>
        <div className="widgets-container">
            {category.widgets.map(widget => (
            <Widget key={widget.id} widget={widget} categoryId={category.id} />
            ))}
        </div>
        </div>
    );
};

export default Category;