import { useState } from "react";
import ReactPaginate from "react-paginate";
import { UserData } from "../../views/pages/Users/ViewAllUsers";

export interface PaginationProps {
  data: UserData[]
  onChange?: (page: number) => void;
}

// @ts-expect-error
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
      // @ts-expect-error
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const { data } = props;

  const itemsPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // @ts-expect-error
  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
