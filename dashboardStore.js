    import { createSlice } from '@reduxjs/toolkit';

    const initialState = {
    categories: [
        {
        id: '1',
        name: 'CSPM Executive Dashboard',
        widgets: [
            { id: '1', name: 'Security Score', content: 'Current security score: 92/100' },
            { id: '2', name: 'Compliance Status', content: '85% compliance across all policies' },
        ],
        },
        {
        id: '2',
        name: 'Operational Metrics',
        widgets: [
            { id: '3', name: 'Incidents', content: '5 new incidents this week' },
            { id: '4', name: 'Response Time', content: 'Average response time: 2.4 hours' },
        ],
        },
    ],
    allWidgets: [
        { id: '1', name: 'Security Score', content: 'Current security score: 92/100' },
        { id: '2', name: 'Compliance Status', content: '85% compliance across all policies' },
        { id: '3', name: 'Incidents', content: '5 new incidents this week' },
        { id: '4', name: 'Response Time', content: 'Average response time: 2.4 hours' },
    ],
    searchTerm: '',
    };

    const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        addWidgetToCategory(state, action) {
        const { categoryId, widget } = action.payload;
        const category = state.categories.find(cat => cat.id === categoryId);
        if (category) {
            category.widgets.push(widget);
        }
        },
        removeWidgetFromCategory(state, action) {
        const { categoryId, widgetId } = action.payload;
        const category = state.categories.find(cat => cat.id === categoryId);
        if (category) {
            category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
        }
        },
        addNewWidget(state, action) {
        const newWidget = action.payload;
        state.allWidgets.push(newWidget);
        },
        setSearchTerm(state, action) {
        state.searchTerm = action.payload;
        },
    },
    });

    export const { addWidgetToCategory, removeWidgetFromCategory, addNewWidget, setSearchTerm } = dashboardSlice.actions;
    export default dashboardSlice.reducer;