<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>게시판</title>
    <link rel="stylesheet" href="/css/content.css">
</head>
<body>
  <div class="content-container">
    <div class="info-container">
        <div class="author-info">
            <span class="label">글쓴이:</span>
            <span class="value">title</span>
        </div>
        <div class="created-info">
            <span class="label">작성시간:</span>
            <span class="value">0000년00월00일</span>
            <span class="time">00:00</span>
        </div>
    </div>


    <div class="image-container">
      <img src="<c:if test="${not empty fileNames}">
        <c:forEach items="${fileNames}" var="fileName">
            <p>${fileName}</p>
        </c:forEach>
    </c:if>" alt="">
    </div>
    <div class="text-container">
        <h2>コンテンツのタイトル</h2>
        <p>
           content: ${content}
        </p>
    </div>
    <div class="image-path">
        <c:if test="${not empty fileNames}">
        <c:forEach items="${fileNames}" var="fileName">
            <p>${fileName}</p>
        </c:forEach>
        </c:if>
    </div>


    <div class="button-container">
      <button class="delete-button" onclick="confirmDelete()">삭제</button>
      <div class="spacer"></div>
      <a href="/index" class="list-button">목록</a>
      <button class="edit-button">수정</button>
    </div>
  </div>

<script src="/js/content.js"></script>
</body>
</html>