import React, { useState } from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination">
      <button 
        className="pagination__button" 
        onClick={() => handlePageChange(currentPage - 1)} 
        disabled={currentPage === 1}>
        &lt; Prev
      </button>
      
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`pagination__button ${currentPage === index + 1 ? 'active' : ''}`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      
      <button
        className="pagination__button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next &gt;
      </button>
    </div>
  );
};

export default Pagination;
