import React, { useState, useEffect, FC } from 'react';
import ReactPaginate from 'react-paginate';
import '../assets/css/paginate.css';
import { IMail } from '../typings/tb';

interface Props {
  items: IMail[];
  onPageChange: (e: any) => void;
}

const PaginatedItems: FC<Props> = ({ items, onPageChange }) => {
  const [currentItems, setCurrentItems] = useState<IMail[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);

  const itemsPerPage: number = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);

    //onPageChange(event.selected);
  };

  const handleGoToFirstPage = () => {
    setItemOffset(0); // 첫 번째 페이지로 이동
  };

  const handleGoToLastPage = () => {
    const lastPageOffset = (pageCount - 1) * itemsPerPage;
    setItemOffset(lastPageOffset); // 마지막 페이지로 이동
  };

  return (
    <div className="pagination">
      <div className="pagination-container">
        <button onClick={handleGoToFirstPage} disabled={itemOffset === 0} className="first-page-button">
          {'<<'}
        </button>
        <ReactPaginate
          nextLabel=">"
          previousLabel="<"
          onPageChange={handlePageClick}
          pageCount={pageCount}
          forcePage={Math.floor(itemOffset / itemsPerPage)} // 현재 페이지 설정
          pageRangeDisplayed={10}
          marginPagesDisplayed={0}
          breakLabel={null} // 줄임표 제거
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
          disabledClassName="disabled" // 비활성화된 버튼 스타일 적용
        />
        <button
          onClick={handleGoToLastPage}
          disabled={itemOffset >= (pageCount - 1) * itemsPerPage}
          className="last-page-button"
        >
          {'>>'}
        </button>
      </div>
    </div>
  );
};

export default PaginatedItems;
