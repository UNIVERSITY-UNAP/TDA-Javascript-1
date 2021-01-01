window.onload = function () {
    var i = 1;
    document.querySelector("button#calcular").addEventListener("click", function () {
      ca = parseInt(document.querySelector("#ca").value);
      cb = parseInt(document.querySelector("#cb").value);
      cc = document.querySelector("#cc");
      cc.value = ca + cb;
    });
    document.querySelector("button#almacenar").addEventListener("click", function () {
      cc = document.querySelector("input#cc").value;
      if (cc != "") {
        tr = document.createElement("tr");
        document.querySelector("table tbody").appendChild(tr);
        document.querySelector("table tbody").getElementsByTagName("tr")[i - 1].appendChild(document.createElement("td"));
        document.querySelector("table tbody").getElementsByTagName("tr")[i - 1].getElementsByTagName("td")[0].innerHTML = i;
        document.querySelector("table tbody").getElementsByTagName("tr")[i - 1].appendChild(document.createElement("td"));
        document.querySelector("table tbody").getElementsByTagName("tr")[i - 1].getElementsByTagName("td")[1].innerHTML = cc;
        i++;
      }
    });
    document.querySelector("button#borrar").addEventListener("click", function () {
        pos = document.querySelector("input#posBorrar").value;
        if (i != 1 && i > pos) {
            document.querySelector("table tbody").removeChild(document.querySelector("table tbody").getElementsByTagName("tr")[pos - 1]);
            i--;
            for(p = pos - 1; p < i - 1; p++){
                document.querySelector("table tbody").getElementsByTagName("tr")[p].getElementsByTagName("td")[0].innerHTML = p + 1;
            }
        }
    });
    document.querySelector("button#reemplazar").addEventListener("click", function () {
        val = document.querySelector("input#valReem").value;
        pos = document.querySelector("input#posReem").value;
        if (i != 1 && i > pos) {
            document.querySelector("table tbody").getElementsByTagName("tr")[pos-1].getElementsByTagName("td")[1].innerHTML = val;
        }
    });
};
