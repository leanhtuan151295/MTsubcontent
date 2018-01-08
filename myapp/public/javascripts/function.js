function send() {
    var goi1 = document.getElementById("list1");
    var ngay1 = document.getElementById("timeCheck1");
    var noidung = document.getElementById("nd2");

    if (goi1.value == "" || ngay1.value == "" || noidung.value == "") {
      alert("Nhap thieu noi dung");
    }
    else {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          alert(xhttp.responseText);
        }
      }

      xhttp.open("POST", '/content', true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send(`list1=${document.getElementById("list1").value}&timeCheck1=${document.getElementById("timeCheck1").value}&nd2=${document.getElementById("nd2").value}`);

    }

  }

  function filter() {
    var goi2 = document.getElementById("list2");
    var ngay2 = document.getElementById("timeCheck2");
    var tb = document.getElementById("tablebody");
    var td = document.getElementsByTagName("td");
    var tr = document.getElementsByTagName("tr");
    var ctr = document.createElement("tr");
    var ctd = document.createElement("td");
    if (goi2.value == "" || ngay2.value == "") {
      alert("Nhap thieu");
    }
    else {
      var tb = document.getElementsByTagName('tbody')[0];
      while (tb.firstChild) {
        tb.removeChild(tb.firstChild);
      }

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {

        if (xhttp.readyState == 4 && xhttp.status == 200) {
          a = JSON.parse(xhttp.response);

          a.forEach(function (item, index) {

            var tr = document.createElement('tr');
            var td = document.createElement('td');
            document.getElementById('tablebody').appendChild(tr);
            document.getElementsByTagName('tr')[index + 1].innerHTML = `<td>${a[index].Goi}</td> <td>${new Date(a[index].Ngay).toLocaleDateString()}</td> <td>${a[index].Noidung}</td>`;

          });

        }

      };

      xhttp.open("GET", `/get-content?code=${goi2.value}&date=${ngay2.value}`, true);
      xhttp.send();

    }

  }