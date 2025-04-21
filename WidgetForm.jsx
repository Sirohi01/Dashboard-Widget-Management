import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWidgetToCategory, addNewWidget } from '../store/dashboardStore';

const WidgetForm = ({ onClose, selectedCategory, setSelectedCategory }) => {
    const [widgetName, setWidgetName] = useState('');
    const [widgetContent, setWidgetContent] = useState('');
    const categories = useSelector(state => state.dashboard.categories);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newWidget = {
        id: Date.now().toString(),
        name: widgetName,
        content: widgetContent,
        };

        // Add to all widgets list
        dispatch(addNewWidget(newWidget));
        
        // Add to selected category
        if (selectedCategory) {
        dispatch(addWidgetToCategory({ categoryId: selectedCategory, widget: newWidget }));
        }

        // Reset form
        setWidgetName('');
        setWidgetContent('');
        onClose();
    };

    return (
        <div className="widget-form-overlay">
        <div className="widget-form">
            <h2>Add New Widget</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Widget Name:</label>
                <input
                type="text"
                value={widgetName}
                onChange={(e) => setWidgetName(e.target.value)}
                required
                />
            </div>
            <div className="form-group">
                <label>Widget Content:</label>
                <textarea
                value={widgetContent}
                onChange={(e) => setWidgetContent(e.target.value)}
                required
                />
            </div>
            <div className="form-group">
                <label>Select Category:</label>
                <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                required
                >
                <option value="">Select a category</option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>
                    {category.name}
                    </option>
                ))}
                </select>
            </div>
            <div className="form-actions">
                <button type="button" onClick={onClose}>
                Cancel
                </button>
                <button type="submit">Add Widget</button>
            </div>
            </form>
        </div>
        </div>
    );
};

export default WidgetForm;