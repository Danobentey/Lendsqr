import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

interface PaginateProps {
  itemsPerPage: number;
  totalItems: number;
  pageChange: (num: number) => void;
  setUserData: () => void;
}

const Paginate = ({ itemsPerPage, totalItems, pageChange, setUserData } : PaginateProps) => {
  const pageCount = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageCount.push(i);
  }

  return (
    <Pagination>
      {pageCount.map((num) => (
        <PaginationItem key={num}>
          <PaginationLink href="#" onClick={() => setUserData()}>{num}</PaginationLink>
        </PaginationItem>
      ))}
    </Pagination>
  );
};

export default Paginate;
