import React from 'react';
import ReactPaginate from "react-paginate";
import style from './Pagination.module.scss'

export const Pagination = (props) => {
    return (
        <>
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={props.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={props.handlePageClick}
                breakClassName={"break-me"}
                containerClassName={style.pagination}
                subContainerClassName={"pages pagination"}
                activeClassName={style.active}/>
        </>
    );
};