"use strict";
{
  // function checkSearchForm() {
  //   const startDate = document.getElementById('start-date').value;
  //   const endDate = document.getElementById('end-date').value;
  //   const searchButton = document.getElementById('searchButton');

  //   if (startDate !== '' && endDate !== '') {
  //     searchButton.removeAttribute('disabled');
  //   } else {
  //     searchButton.setAttribute('disabled', 'disabled');
  //   }
  // }

  // const startDateInput = document.getElementById('start-date');
  // const endDateInput = document.getElementById('end-date');

  // startDateInput.addEventListener('input', checkSearchForm);
  // endDateInput.addEventListener('input', checkSearchForm);



  // const itemsPerPage = 20;
  // let currentPage = 1;
  // const searchTable = document.getElementById('searchTable');

  // function showPage(pageNumber) {
  //   const rows = searchTable.querySelectorAll('.search-item');
  //   const startIndex = (pageNumber - 1) * itemsPerPage;
  //   const endIndex = startIndex + itemsPerPage;

  //   rows.forEach((row, index) => {
  //     if (index >= startIndex && index < endIndex) {
  //       row.style.display = 'table-row';
  //     } else {
  //       row.style.display = 'none';
  //     }
  //   });
  // }

  // function generatePaginationLinks(totalPages) {
  //   const paginationContainer = document.getElementById('pagination');
  //   paginationContainer.innerHTML = ''; 

  //   for (let i = 1; i <= totalPages; i++) {
  //     const pageLink = document.createElement('a');
  //     pageLink.href = '#';
  //     pageLink.textContent = i;
  //     if (i === currentPage) {
  //       pageLink.classList.add('active');
  //     }
  //     pageLink.onclick = () => {
  //       currentPage = i;
  //       showPage(currentPage);
  //       generatePaginationLinks(totalPages);
  //     };
  //     paginationContainer.appendChild(pageLink);
  //   }
  // }


  // const totalItems = document.querySelectorAll('.search-item').length;
  // const totalPages = Math.ceil(totalItems / itemsPerPage);
  // generatePaginationLinks(totalPages);
  // showPage(currentPage);



  // function updateContent(data) {
  //   const contentContainer = document.getElementById('contentContainer');
    
  // }


  // function handlePaginationClick(pageNumber) {
  //   fetch(`/get_data?page=${pageNumber}`)
  //     .then(response => response.json())
  //     .then(data => updateContent(data))
  //     .catch(error => console.error('Error:', error));
  // }

  // function generatePaginationLinks(totalPages) {
  //   const paginationContainer = document.getElementById('pagination');
  //   paginationContainer.innerHTML = '';

  //   const prevPage = currentPage - 1 > 0 ? currentPage - 1 : 1;
  //   const nextPage = currentPage + 1 > totalPages ? totalPages : currentPage + 1;
  //   const firstLink = document.createElement('a');
  //   firstLink.href = '#';
  //   firstLink.textContent = '<<';
  //   firstLink.onclick = () => handlePaginationClick(1);
  //   paginationContainer.appendChild(firstLink);


  //   const prevLink = document.createElement('a');
  //   prevLink.href = '#';
  //   prevLink.textContent = '<';
  //   prevLink.onclick = () => handlePaginationClick(prevPage);
  //   paginationContainer.appendChild(prevLink);


  //   for (let i = 1; i <= totalPages; i++) {
  //     const pageLink = document.createElement('a');
  //     pageLink.href = '#';
  //     pageLink.textContent = i;
  //     if (i === currentPage) {
  //       pageLink.classList.add('active');
  //     }
  //     pageLink.onclick = () => handlePaginationClick(i);
  //     paginationContainer.appendChild(pageLink);
  //   }


  //   const nextLink = document.createElement('a');
  //   nextLink.href = '#';
  //   nextLink.textContent = '>';
  //   nextLink.onclick = () => handlePaginationClick(nextPage);
  //   paginationContainer.appendChild(nextLink);


  //   const lastLink = document.createElement('a');
  //   lastLink.href = '#';
  //   lastLink.textContent = '>>';
  //   lastLink.onclick = () => handlePaginationClick(totalPages);
  //   paginationContainer.appendChild(lastLink);
  // }
}