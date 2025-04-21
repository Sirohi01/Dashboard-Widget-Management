    import React, { useState } from 'react';
    import { useSelector } from 'react-redux';
    import Category from './Categories';
    import SearchBar from './SearchBar';
    import WidgetForm from './WidgetForm';  

    const Dashboard = () => {
    const categories = useSelector(state => state.dashboard.categories);
    const [showForm, setShowForm] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');

    return (
        <div className="dashboard">
        <div className="dashboard-controls">
            <SearchBar />
            <button onClick={() => setShowForm(true)} className="add-widget-btn">
            + Add Widget
            </button>
        </div>

        {showForm && (
            <WidgetForm
            onClose={() => setShowForm(false)}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            />
        )}

        <div className="categories-container">
            {categories.map(category => (
            <Category key={category.id} category={category} />
            ))}
        </div>
        </div>
    );
    };

    export default Dashboard;