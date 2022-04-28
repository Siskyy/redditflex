import { createSelector, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: '',
        filteredPosts: [],
        unfilteredPosts: [],
        showingComments: false,
    },
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        },
        setUnfilteredPosts(state, action) {
            state.unfilteredPosts = action.payload;
        },
        filterPosts(state, action) {
            state.filteredPosts = action.payload;
        },
        setFilteredPosts(state, action) {
            state.filteredPosts = action.payload;
        }
    }
});

export const {
    setFilter,
    setUnfilteredPosts,
    filterPosts,
    setFilteredPosts,
} = filterSlice.actions;

export default filterSlice.reducer;

const selectfilter = (state) => state.filter.filter;
const selectUnfilteredPosts = (state) => state.filter.unfilteredPosts;

export const selectFilteredPosts = createSelector(
    [selectUnfilteredPosts, selectfilter],
    (unfilteredPosts, filter) => {
        if (filter !== '') {
            return unfilteredPosts.filter((post) => 
                post.title.toLowerCase().includes(filter.toLowerCase())
            )
        }
        return unfilteredPosts;
    }
)

