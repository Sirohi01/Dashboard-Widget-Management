import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidgetFromCategory } from '../store/dashboardStore';

const Widget = ({ widget, categoryId }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeWidgetFromCategory({ categoryId, widgetId: widget.id }));
    };

    return (
        <div className="widget">
        <button className="remove-widget-btn" onClick={handleRemove}>
            ×
        </button>
        <h3>{widget.name}</h3>
        <p>{widget.content}</p>
        </div>
    );
};

export default Widget;