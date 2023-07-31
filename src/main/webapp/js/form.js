"use strict";

{
  // let fileCounter = 1;

  // function addFileInput() {
  //   const fileContainer = document.getElementById('fileContainer');

  //   if (fileCounter < 5) { 
  //     const fileInputContainer = document.createElement('div');
  //     fileInputContainer.classList.add('file-input-container');

  //     if (fileCounter === 1) {
  //       fileInputContainer.classList.add('first-file-input-container');
  //     }

  //     const fileInfo = document.createElement('div');
  //     fileInfo.classList.add('file-info');
  //     const fileNameElement = document.createElement('span');
  //     fileNameElement.classList.add('file-name');
  //     fileNameElement.textContent = '파일을 선택해주세요';
  //     const deleteButton = document.createElement('button');
  //     deleteButton.classList.add('button', 'delete-file');
  //     deleteButton.textContent = 'X';
  //     deleteButton.onclick = clearImage;
  //     fileInfo.appendChild(fileNameElement);
  //     fileInfo.appendChild(deleteButton);

  //     const fileLabel = document.createElement('label');
  //     fileLabel.classList.add('custom-file-upload');
  //     const fileInput = document.createElement('input');
  //     fileInput.type = 'file';
  //     fileInput.name = 'image';
  //     fileInput.classList.add('file-input');
  //     fileInput.accept = '.jpg, .jpeg, .png, .gif';
  //     fileInput.onchange = displayFileName;
  //     fileLabel.appendChild(fileInput);
  //     fileLabel.append('파일선택');

  //     fileInputContainer.appendChild(fileInfo);
  //     fileInputContainer.appendChild(fileLabel);


  //     fileContainer.insertBefore(fileInputContainer, fileContainer.lastElementChild);


  //     fileCounter++;
  //   } else {
  //     alert('최대 5개까지 첨부 가능합니다');
  //   }
  // }

  // function removeLastFileInput() {
  //   if (fileCounter > 1) { 
  //     const fileContainers = document.querySelectorAll('.file-input-container');
  //     const lastFileContainer = fileContainers[fileContainers.length - 1];
  //     lastFileContainer.parentNode.removeChild(lastFileContainer);
  //     fileCounter--;
  //   }
  // }

  // function clearImage() {

  // const fileNameElement = document.querySelector('.file-name');
  // fileNameElement.textContent = '';

  // const fileInput = document.querySelector('.file-input');
  // fileInput.value = ''; 
  // }

  // function displayFileName(event) {
  //   const fileInput = event.target;
  //   const fileNameElement = fileInput.parentElement.querySelector('.file-name');
  //   fileNameElement.textContent = fileInput.files[0] ? fileInput.files[0].name : '파일을 선택해주세요';
  // }
  



  document.querySelector('.register-button').addEventListener('click', function(event) {
    event.preventDefault();

    const missingInputs = validateInputs();
    if (missingInputs) {
      alert(missingInputs); 
      focusFirstMissingInput();
      return false; 
    } else {

      alert("등록 되었습니다");
      window.location.href = "index.html";
    }
  });

  function focusFirstMissingInput() {
    const requiredInputs = document.querySelectorAll('input[required], textarea[required]');
    const firstMissingInput = [...requiredInputs].find(input => !input.value.trim());
    if (firstMissingInput) {
      firstMissingInput.focus();
    }
  }

  function validateInputs() {
    const requiredInputs = document.querySelectorAll('input[required], textarea[required]');
    let missingInputs = '';

    requiredInputs.forEach(input => {
      if (!input.value.trim()) {
        const label = document.querySelector(`label[for="${input.id}"]`);
        const labelValue = label ? label.textContent : ''; 


        if (input.name === 'title') {
          missingInputs += "제목을 입력해주세요\n";
        } else if (input.name === 'content') {
          missingInputs += "내용을 입력해주세요\n";
        } else if (input.name === 'author') {
          missingInputs += "등록자를 입력해주세요\n";
        } 
      }
    });

    return missingInputs;
  }
}
