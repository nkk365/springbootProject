'use strict';
{
  document.querySelector('.edit-button').addEventListener('click', function(event) {
    event.preventDefault(); 
    alert("수정 되었습니다");
    window.location.href = "index.html";
  });

  document.querySelector('.delete-button').addEventListener('click', function(event) {
    event.preventDefault(); 
    alert("삭제 되었습니다");
    window.location.href = "index.html";
  });
}