document.addEventListener("DOMContentLoaded", function () {
  // Глобальные переменные
  const todoInp = document.querySelector(".todo__input");
  const btnAdd = document.querySelector("#btn-add");
  const taskList = document.querySelector(".todo__tasks-list");
  const countResult = document.querySelector(".events-count__result");
  const headInfo = document.querySelector(".header__info");
  const btnTheme = document.querySelector(".toggle-theme");

  // Загружаем прогресс из локального хранилища
  function getSave() {
    if (localStorage.getItem("li") !== null) {
      taskList.innerHTML = localStorage.getItem("li");
    } else {
      console.log('localStorage.getItem("li") = null');
      headInfo.innerHTML = 'Первая загрузка приложения!)';
    }
  }

  getSave();

  // Выводим в <li> текст из input
  let todoInpArr = []; // Переменная хранит значания из input в массиве

  btnAdd.addEventListener("click", function () {

    localStorage.removeItem('input'); // При добавлении новой задачи очищаем хранилище инпута

    todoInpArr.push(todoInp.value); // Пушим в массив текст из input

    // Чистим input после нажатия кнопки "добавить"
    todoInp.value = "";

    // Из массива выводим в <li> последний элемент
    taskList.innerHTML += `<li class="itemLi" title="Переместить" draggable="true">

    <div class="wrapper wrapper--left">
      <img src="img/task.png" alt="task"><p class="task-text">${todoInpArr[todoInpArr.length - 1]}</p>
    </div>

    <div class="wrapper wrapper--right">
    <button class="btn-edit" title="Редактировать">
<svg class="icon-edit" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 528.807 528.807"
	 xml:space="preserve">
<g>
	<path d="M513.74,204.829l-29.482,29.486l-82.147-82.139l29.494-29.489c9.292-9.292,23.253-10.441,31.138-2.565l53.563,53.572
		C524.179,181.567,523.032,195.537,513.74,204.829z M388.421,165.859l82.147,82.147l-195.883,195.88
		c-0.898,0.898-3.393,3.393-6.892,4.285c-0.405,0.195-0.819,0.361-1.229,0.491l-102.23,32.58c-2.861,0.904-5.736,0.319-7.601-1.549
		c-1.871-1.868-2.45-4.74-1.555-7.602l32.58-102.221c0.139-0.419,0.305-0.827,0.491-1.224c0.896-3.505,3.384-5.993,4.292-6.897
		l36.812-36.812H105.02c-5.012,0-9.079-4.066-9.079-9.079c0-5.023,4.066-9.078,9.079-9.078h142.491L388.421,165.859z
		 M249.417,437.574l-50.569-50.561l-13.565,42.581l21.554,21.557L249.417,437.574z M385.265,198.508
		c-2.908-2.911-7.625-2.911-10.527,0L222.03,351.206c-2.905,2.908-2.905,7.625,0,10.533c2.905,2.908,7.625,2.908,10.53,0
		l152.705-152.699C388.172,206.129,388.172,201.413,385.265,198.508z M376.037,489.217c0,5.455-4.438,9.9-9.895,9.9H185.956
		l-16.275,5.189c-3.269,1.041-6.629,1.566-9.992,1.566c-7.161,0-13.819-2.453-19.266-6.756H46.885c-5.458,0-9.909-4.434-9.909-9.9
		V73.424c0-5.458,4.445-9.9,9.909-9.9h37.12v15.675c0,5.464,4.43,9.897,9.903,9.897c5.471,0,9.901-4.433,9.901-9.897V63.523h56.92
		v15.675c0,5.464,4.43,9.897,9.901,9.897c5.473,0,9.903-4.433,9.903-9.897V63.523h49.497v15.675c0,5.464,4.43,9.897,9.904,9.897
		c5.47,0,9.9-4.433,9.9-9.897V63.523h54.453v15.675c0,5.464,4.427,9.897,9.895,9.897c5.473,0,9.906-4.433,9.906-9.897V63.523h42.072
		c5.45,0,9.896,4.442,9.896,9.9v68.571l10.379-10.374l19.322-19.325V73.424c0-21.831-17.762-39.596-39.597-39.596h-42.072V9.904
		c0-5.467-4.434-9.904-9.906-9.904c-5.462,0-9.895,4.431-9.895,9.904v23.924h-54.465V9.904c0-5.467-4.43-9.904-9.901-9.904
		c-5.473,0-9.903,4.431-9.903,9.904v23.924h-49.497V9.904c0-5.467-4.43-9.904-9.904-9.904c-5.47,0-9.9,4.431-9.9,9.904v23.924
		h-56.92V9.904c0-5.467-4.431-9.904-9.901-9.904c-5.473,0-9.903,4.431-9.903,9.904v23.924h-37.12
		c-21.832,0-39.602,17.765-39.602,39.596v415.787c0,21.834,17.771,39.596,39.602,39.596h319.264
		c21.835,0,39.597-17.762,39.597-39.596V345.059l-29.702,29.708v114.45H376.037z M298.707,152.436H105.02
		c-5.012,0-9.079,4.061-9.079,9.079c0,5.019,4.066,9.079,9.079,9.079h193.687c5.013,0,9.079-4.061,9.079-9.079
		C307.786,156.497,303.72,152.436,298.707,152.436z M298.707,225.635H105.02c-5.012,0-9.079,4.063-9.079,9.079
		c0,5.019,4.066,9.079,9.079,9.079h193.687c5.013,0,9.079-4.061,9.079-9.079C307.786,229.698,303.72,225.635,298.707,225.635z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
    </button>
      <button class="btn-important" title="Важное">
        <svg class="icon-important" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m97.515 43.141c-10.453 22.821-36.604 35.392-61.872 27.781v381.073h30.001v-153.995h229.448c5.523 0 10-4.478 10-10.001 0-152.969-.006-213.664-.008-234.861-.001-5.522-4.478-9.996-10-9.996h-197.569z"/><path d="m85.386 481.999c-1.997 0-48.386 0-69.49 0-8.284 0-15 6.716-15 15s6.716 15 15 15h69.49c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path d="m507.898 329.181-80.763-103.183 80.763-103.183c7.692-9.822.673-24.241-11.81-24.241h-151.005c-5.523 0-10 4.477-10 10v234.848c0 5.523 4.477 10 10 10h151.005c12.473-.001 19.507-14.413 11.81-24.241z"/><path d="m50.423 43.151c12.415 0 21.781-9.789 21.781-21.581 0-12.097-9.769-21.57-21.561-21.57-11.918 0-21.57 9.596-21.57 21.571 0 11.895 9.5 21.45 21.35 21.58z"/></g></svg>
      </button>
      <button id="btn-do" class="btn btn-operation btn-complited" title='Отметить как "выполнено"'>
      <svg class="done" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 375.147 375.147" xml:space="preserve">
   <g>
     <g>
       <polygon points="344.96,44.48 119.147,270.293 30.187,181.333 0,211.52 119.147,330.667 375.147,74.667 		"/>
     </g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   </svg> 

   <svg class="reversal" style="display: none;" viewBox="0 0 513 513.04533" xmlns="http://www.w3.org/2000/svg"><path d="m154.6875 213.738281h-138.664062c-8.832032 0-16.0000005-7.167969-16.0000005-16v-138.984375c0-8.832031 7.1679685-16 16.0000005-16 8.832031 0 16 7.167969 16 16v122.984375h122.664062c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m256.023438 513.046875c-68.351563 0-132.628907-26.710937-180.992188-75.179687-6.230469-6.25-6.230469-16.382813.042969-22.636719 6.226562-6.226563 16.40625-6.226563 22.632812.042969 42.304688 42.410156 98.519531 65.773437 158.316407 65.773437 123.519531 0 224-100.738281 224-224.511719 0-123.777344-100.480469-224.535156-224-224.535156-105.855469 0-200.257813 71.316406-224.449219 169.558594-2.132813 8.574218-10.75 13.78125-19.371094 11.710937-8.574219-2.132812-13.800781-10.792969-11.710937-19.371093 27.667968-112.363282 135.144531-193.898438 255.53125-193.898438 141.160156 0 256 115.09375 256 256.511719s-114.839844 256.535156-256 256.535156zm0 0"/></svg>
    </button>

      <button id="btn-del" class="btn btn-operation btn-delite" title="Удалить задачу" onclick="new Audio('sound/del.mp3').play()">
        <svg viewBox="-40 0 427 427.00131" xmlns="http://www.w3.org/2000/svg"><path d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0"/><path d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/></svg>
      </button>
    </div>

   </li>`;

   // Задача добавляется вверх
  //  document.querySelectorAll('.itemLi').forEach(function(item, i, arr){
  //   taskList.prepend(item);
  //  })

  
    function infoAddTask() {
      headInfo.innerHTML = "Задача добавлена";
    }

    // При клике по кнопке "добавить задачу" запускаем функции:
    updateLocal(); // Обновляем локальное хранилище
    infoAddTask(); // Выводим инфо о новом task
    checkInp(); // Проверяем что инпут не пустой
    taskCount(); // Обновляем счетчик задач
    spotId(); // Обновляем значение id у задач
    startInfoClear(); // Чистим инфо
    removeTask(); // Запуск функции удаления задачи
    complitedTask(); // Запуск функции "решенной задачи"
    highPriority(); // Высокий приоритет задачи
    editTasks(); // Редактирование задачи
    

  }); // Конец функции клик по кнопке добавить задачу





  // Запрещаем пушить пустую строку и устанавливаем html атрибуты
  function checkInp() {
    if (todoInp.value === "") {
      btnAdd.setAttribute("disabled", "disabled");
      btnAdd.setAttribute("title", "Сначала напишите что-нибудь");
      btnAdd.style.cursor = "default";
    } else {
      btnAdd.removeAttribute("disabled", "disabled");
      btnAdd.setAttribute("title", "Добавить задачу");
      btnAdd.style.cursor = "pointer";
    }
    todoInp.oninput = function (event) {
      // Сохраняем текст из инпута при перезагрузке
      let textInpSave = todoInp.value;
      localStorage.setItem('input', textInpSave);
      checkInp();
    };
  }

  // Подставляем текст в инпут из локального хранилища
  if (localStorage.getItem('input') !== null) {
    let textGetLocal = localStorage.getItem('input');
    todoInp.value = textGetLocal;
  }

  checkInp();
  
  // Удаление задач
  function removeTask() {
    let btnDel = document.querySelectorAll("#btn-del");
    for (let i = 0; i < btnDel.length; i++) {
      btnDel[i].addEventListener('click', function(){
        removeLastLi();
        let targetLi = this.closest("li");
        targetLi.remove();
        spotId();
        taskCount();
        updateLocal();
        headInfo.innerHTML = `Вы удалили задачу ${this.closest("li").id}`;
        startInfoClear();
      })
    }
  }

  removeTask();
  
  // После удаления последней li чистим localStorage
  function removeLastLi() {   
    for (let i = 0; i < taskList.childNodes.length; i++) {
      let countLi = res; // Кол-во <li>
      if (countLi === 0) {
        // console.log('Задач больше нет');
        localStorage.setItem('li', ''); 
      } else {
        // console.log(`Задач: ${countLi} шт.`);
      }
    }
  }

  // Добавляем уникальный id для каждой задачи
  function spotId() {
    let li = document.querySelectorAll("li");
    for (let i = 0; i < li.length; i++) {
      li[i].id = `task-${[i + 1]}`;
    }
  }

  spotId();

  // Чистим блок инфо через некоторое время
  function startInfoClear() {
    let infoClear = setInterval(() => {
      if (headInfo !== null) {
        headInfo.innerHTML = "";
        clearInterval(infoClear);
      }
    }, 5000);
  }

  startInfoClear();

  // Темная тема
  let light;
  let night;
  let themeValue;
  btnTheme.classList.add("active-light");

  btnTheme.addEventListener("click", function () {
    if (btnTheme.classList[1] === "active-light") {
      btnTheme.classList.remove("active-light");
      btnTheme.classList.add("active-night");
      headInfo.innerHTML = "night ON";
      night =  document.querySelector(".main").style.background = "#a2a2a2";
      startInfoClear();
      localStorage.setItem('theme', night);
    } else {
      btnTheme.classList.remove("active-night");
      btnTheme.classList.add("active-light");
      headInfo.innerHTML = "light ON";
      light = document.querySelector(".main").style.background = "#fdebeb";
      startInfoClear();
      localStorage.setItem('theme', light);
    }  
    themeValue = localStorage.getItem('theme');
  });

  if (localStorage.getItem('theme') !== null) {    
    function insTheme() {
      if (localStorage.getItem('theme') === "#fdebeb") {          
        document.querySelector(".main").style.background = "#fdebeb";
        btnTheme.classList.remove('active-night');
        btnTheme.classList.add('active-light');
      } else {
        document.querySelector(".main").style.background = "#a2a2a2";
        btnTheme.classList.remove('active-light');
        btnTheme.classList.add('active-night');
      }
    }
    insTheme();
  }
    
  
     
 // Считаем и выводим количество задач
 let res;
 function taskCount() {
   res = taskList.childElementCount; // Посчитали сколько дочерних элементов в переменной "taskList"
   countResult.innerHTML = res; // выводим результат в верстку
 }

 taskCount();


// Отметить задачу как "выполнено"
function complitedTask() {
  let btnDo = document.querySelectorAll('#btn-do');
  for (i = 0; i < btnDo.length; i++) {
    btnDo[i].addEventListener('click', function(){
      
      let targetLi = this.closest("li");
      targetLi.classList.toggle('complited');
      this.classList.toggle('toggle-svg');

      if (targetLi.classList[1] === 'complited') {
        this.setAttribute('title', 'Отметить как "не выполнено"');
        headInfo.innerHTML = 'Задача выполнена'
        
      } else {
        this.setAttribute('title', 'Отметить как "выполнено"');
        headInfo.innerHTML = 'Задача  не выполнена'
        
      }
      startInfoClear();
      updateLocal();
    })
    
  }
  
}

complitedTask();

  let saveImportTask;
  
  // Добавляем высокий приоритет для задачи и переносим ее к верху
  function highPriority() {
    let btn = document.querySelectorAll(".btn-important");
    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener("click", function () {
        this.classList.toggle("priority");
        if (btn[i].className === "btn-important priority") {
          let targetLi = this.closest("li");
          targetLi.style.color = 'green';
          

          let priority = document.querySelectorAll('.priority');
          for (let i = 0; i < priority.length; i++) {
            let targetLi = this.closest("li");
            saveImportTask = priority;
            taskList.prepend(targetLi);
            headInfo.innerHTML = 'Высокий приоритет'
            targetLi.style.background = 'rgb(183 191 199)';
            this.setAttribute('title', 'Помечено как "важное"');
          }
            
          
        } else {
          let targetLi = this.closest("li");
          targetLi.style.color = 'black';
          headInfo.innerHTML = 'Обычный приоритет'
          targetLi.style.background = 'transparent';
        }
        startInfoClear();
        updateLocal();
      });
    }
  }
  
  highPriority();

  // Редактирование задачи
  let textValue;
  function editTasks() {
    let btnEdit = document.querySelectorAll('.btn-edit');
    for (let i = 0; i < btnEdit.length; i++) {
      btnEdit[i].addEventListener('click', function(){
        let childrenText = document.querySelectorAll('.wrapper--left .task-text');
        childrenText[i].contentEditable = "true";
        childrenText[i].focus();
        textValue = childrenText[i].innerText;
        childrenText.forEach( function(textValue) {
          textValue.addEventListener('blur', function(){
            childrenText[i].contentEditable = "false";  
            updateLocal();
          })
        }) 
      })
    }
  }  
  
  editTasks();

  // Drag'n'Drop задач
  function liDrag() {


    taskList.addEventListener(`dragstart`, (event) => {
      event.target.classList.add(`selected`);
    })
    
    taskList.addEventListener(`dragend`, (event) => {
      event.target.classList.remove(`selected`);
      spotId();
      updateLocal();
    });
  
    taskList.addEventListener(`dragover`, (event) => {
      // Разрешаем сбрасывать элементы в эту область
      event.preventDefault();
      // Находим перемещаемый элемент
    const activeElement = taskList.querySelector(`.selected`);
    // Находим элемент, над которым в данный момент находится курсор
    const currentElement = event.target;
    // Проверяем, что событие сработало:
    // 1. не на том элементе, который мы перемещаем,
    // 2. именно на элементе списка
    const isMoveable = activeElement !== currentElement &&
      currentElement.classList.contains(`itemLi`);
  
    // Если нет, прерываем выполнение функции
    if (!isMoveable) {
      return;
    }
  
    // Находим элемент, перед которым будем вставлять
    const nextElement = (currentElement === activeElement.nextElementSibling) ?
        currentElement.nextElementSibling :
        currentElement;
  
    // Вставляем activeElement перед nextElement
    taskList.insertBefore(activeElement, nextElement);
  });

  }

  liDrag();






  
  // Пушим в localStorage актуальное состояние <li>
  function updateLocal() {
    let allTasks =  taskList.innerHTML;
    localStorage.setItem('li', allTasks);
  }
  
}); // Конец DOMContentLoaded
