import React                 from 'react';
import { VisibilityFilters } from '../actions';
import FilterLink            from '../containers/filter-link';

const Footer = () => (
    <div>
        <span>Show: </span>
        // @ts-ignore
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        // @ts-ignore
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        // @ts-ignore
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
);

export default Footer;
