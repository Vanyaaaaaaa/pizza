import React from 'react';
import ReactPaginate from 'react-paginate';

export const Pagination = ({ onChangePage }) => {
  return (
    <div className="pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={2}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
