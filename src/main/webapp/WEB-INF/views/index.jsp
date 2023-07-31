<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<c:set var="path" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>게시판</title>
    <link rel="stylesheet" href="/css/search.css">
</head>
<body>

  <div class="search-form">
    <form>
        <div class="form-group period">
            <label for="start-date">기간:</label>
            <input type="date" id="start-date" name="start-date" required>
            <input type="date" id="end-date" name="end-date" required>
        </div>

        <div class="form-group title-search">
            <label for="title">직접검색:</label>
            <div class="form-group">
                <select id="category" name="category">
                  <option value="option1">전체</option>
                  <option value="option2">제목</option>
                  <option value="option3">내용</option>
                </select>
            </div>
            <div class="form-group">
                <input type="text" id="keyword" name="keyword">
            </div>
            <div class="form-group">
                <button type="submit" id="searchButton" disabled>검색</button>
            </div>
        </div>
    </form>
  </div>


  <table id="searchTable">
    <tr>
        <th>제목</th>
        <th>등록일</th>
        <th>등록한 사람</th>
    </tr>
    <tr class="search-item">
      <td><a href="page1.html" class="search-item-link">sample</a></td>
      <td>0000-00-00</td>
      <td>name</td>
    </tr>
     <tr class="search-item">
      <td><a href="page1.html" class="search-item-link">sample</a></td>
      <td>0000-00-00</td>
      <td>name</td>
    </tr>
     <tr class="search-item">
      <td><a href="page1.html" class="search-item-link">sample</a></td>
      <td>0000-00-00</td>
      <td>name</td>
    </tr>
     <tr class="search-item">
      <td><a href="page1.html" class="search-item-link">sample</a></td>
      <td>0000-00-00</td>
      <td>name</td>
    </tr>
     <tr class="search-item">
      <td><a href="page1.html" class="search-item-link">sample</a></td>
      <td>0000-00-00</td>
      <td>name</td>
    </tr>
     <tr class="search-item">
      <td><a href="page1.html" class="search-item-link">sample</a></td>
      <td>0000-00-00</td>
      <td>name</td>
    </tr>
     <tr class="search-item">
      <td><a href="page1.html" class="search-item-link">sample</a></td>
      <td>0000-00-00</td>
      <td>name</td>
    </tr>
     <tr class="search-item">
      <td><a href="page1.html" class="search-item-link">sample</a></td>
      <td>0000-00-00</td>
      <td>name</td>
    </tr>
     <tr class="search-item">
      <td><a href="page1.html" class="search-item-link">sample</a></td>
      <td>0000-00-00</td>
      <td>name</td>
    </tr>
     <tr class="search-item">
      <td><a href="page1.html" class="search-item-link">sample</a></td>
      <td>0000-00-00</td>
      <td>name</td>
    </tr>
    
   

  </table>

  <div class="register-button-container">
      <a href="/form" class="register-button">등록</a>
  </div>

  <div class="pagination-container">
    <div class="pagination" id="pagination">
      <a href="#">&laquo;</a>
      <a href="#">&lsaquo;</a>
      <a href="#" class="active">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">6</a>
      <a href="#">7</a>
      <a href="#">8</a>
      <a href="#">9</a>
      <a href="#">10</a>
      <a href="#">&rsaquo;</a>
      <a href="#">&raquo;</a>
    </div>
  </div>





<script src="/js/search.js"></script>
</body>
</html>