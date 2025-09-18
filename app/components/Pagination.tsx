type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}; // Add the onPageChange proP

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <>
      <div className='flex justify-center gap-2 mt-2'>
        {Array.from({ length: totalPages }, (_, indx) => (
          <button
            key={indx + 1}
            className={`px-3 py-1 cursor-pointer rounded ${currentPage === indx + 1 ? 'bg-blue-600 text-white' : 'bg-gray-700  text-gray-200'}`}
            onClick={() => onPageChange(indx + 1)}
          >
            {indx + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Pagination;
