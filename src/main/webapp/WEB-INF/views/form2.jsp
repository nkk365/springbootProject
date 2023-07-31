<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시판</title>
<link rel="stylesheet" href="/css/form.css">
</head>
<body>
  <form action="" onsubmit="return validateForm()">
    <div class="form-container">
      <div class="form-group">
          <label for="title">제목:</label>
          <input type="text" id="title" name="title" required>
      </div>
      <div class="form-group">
          <label for="content">내용:</label>
          <textarea id="content" name="content" required></textarea>
      </div>
      <div class="file-group">
          <label for="image">이미지 등록:</label>

          <div class="file-container">
            <div class="file-input-container">
              <div class="file-info">
                <span class="file-name" id="file-name">파일을 선택해주세요</span>
                <button class="button delete-file" onclick="clearImage()">X</button>
              </div>
              <label class="custom-file-upload">
                <input type="file" name="image" class="file-input" accept=".jpg, .jpeg, .png, .gif" onchange="displayFileName(event)">
                파일선택
              </label>
            </div>
            <div class="file-buttons">
              <button class="button add-file" onclick="addFileInput()">＋</button>
              <button class="button remove-file" onclick="removeLastFileInput()">－</button>
            </div>
          </div>
      </div>
      <div class="form-group">
          <label for="author">등록자:</label>
          <input type="text" id="author" name="author" required>
      </div>
    </div>
  
    <div class="button-container">
      <button class="delete-button">삭제</button>
      <div class="spacer"></div>
      <button class="edit-button">수정</button>
      <button class="list-button">목록</button>
  
    </div>
  </form>
  <script src="/js/form2.js"></script>
</body>
</html>