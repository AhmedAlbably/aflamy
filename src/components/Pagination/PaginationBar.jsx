import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is included

function PaginationBar({getPage, pageCount}) {
  const handlePageClick = (data) => {
    console.log(data.selected + 1);

    getPage(data.selected + 1);
  };

  

  return (
    <div className="d-flex justify-content-center">
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="السابق"
        containerClassName="pagination justify-content-center m-5"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default PaginationBar;
