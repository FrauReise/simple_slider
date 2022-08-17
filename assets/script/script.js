// Знакомство с пользователем

function userName() {
    const fname = document.getElementById('nameArea').value;    
 
    const html = ' Привет, ' + fname;
 
    document.getElementById('result').innerHTML = html;
}
 
document.getElementById('helloBtn').addEventListener('click', userName);

// Очистить данные в поле

document.getElementById("clearButton").onclick = function(e) {

    document.getElementById("nameArea").value = " ";
  }

//   Поменять фоновый цвет 

document.addEventListener("click", function (e)

    {

        if_id = e.target.id;

        if (if_id == "change_background")

        {

            if_id = document.getElementById(if_id);

            if (if_id.style.background == "grey")

            {

                if_id.style.background = " #fc0";

            } else

            {

                if_id.style.background = "grey";

            }

        }

    });


