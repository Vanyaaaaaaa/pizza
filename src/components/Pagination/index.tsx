import React from "react";
import ReactPaginate from "react-paginate";

type PaginationProps = {
  onChangePage: any;
};

export const Pagination: React.FC<PaginationProps> = ({ onChangePage }) => {
  return (
    <div className="pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={2}
        previousLabel="<"
      />
    </div>
  );
};
