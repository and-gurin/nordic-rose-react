import React from 'react';
import ReactPaginate from "react-paginate";
import style from './Pagination.module.scss'

export const Pagination = (props) => {
    return (
        <>
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                forcePage={props.page}
                breakLabel={"..."}
                pageCount={props.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={props.onChange}
                breakClassName={"break-me"}
                containerClassName={style.pagination}
                subContainerClassName={"pages pagination"}
                activeClassName={style.active}/>
        </>
    );
};