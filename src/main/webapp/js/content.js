"use strict"; 
{
  function confirmDelete() {
    const result = confirm('게시글을 삭제하시겠습니까?');
    if (result) {

      alert('삭제 되었습니다');
    } else {
      
      alert('취소 되었습니다');
    }
  }
}