import s from "./PaginationApp.module.scss";

interface PaginationProps {
  currentPage?: number;
  onChangePage?: (page: number) => void;
  pageCount?: number;
}

const PaginationApp = ({
  currentPage = 1,
  onChangePage = () => {},
  pageCount = 3,
}: PaginationProps) => {
  return (
    <div className={s.root}>
      <div className={s.root__wrapper}>
        <button
          disabled={currentPage === 1}
          onClick={() => onChangePage(currentPage - 1)}
          className={s.arrow}
          style={{ color: currentPage === 1 ? 'var(--greyLite)' : 'var(--black)'}}
        >
          {"<"}
        </button>

        {/* {[...Array(pageCount)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            onClick={() => onChangePage(pageNumber)}
            className={`${s.page} ${currentPage === pageNumber ? s.active : ''}`}
          >
            {pageNumber}
          </button>
        );
      })} */}

        <button
          disabled={currentPage === pageCount}
          onClick={() => onChangePage(currentPage + 1)}
          className={s.arrow}
          style={{ color: currentPage === pageCount ? 'var(--greyLite)' : 'var(--black)'}}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default PaginationApp;
