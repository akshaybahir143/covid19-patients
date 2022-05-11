var selectedRow = null;


function onFormSubmit(){
    var formData = readFormData();
    if(selectedRow == null)
       insertNewRecord(formData);
       else
       updateRecord(formData)
    resetForm();

}

function readFormData(){
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["Pcode"] = document.getElementById("Pcode").value;
    formData["CoStatus"] = document.getElementById("CoStatus").value;
    formData["city"] = document.getElementById("city").value;
    return formData;

}

function insertNewRecord(data){
    var table = document.getElementById("covidstatuslist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Pcode;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.CoStatus;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;

    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;  
}


function resetForm(){
    document.getElementById("fullName").value = "";
    document.getElementById("Pcode").value = "";
    document.getElementById("CoStatus").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;


}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Pcode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("CoStatus").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value =  selectedRow.cells[3].innerHTML
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.Pcode;
    selectedRow.cells[2].innerHTML = formData.CoStatus;
    selectedRow.cells[3].innerHTML = formData.city;

}

function onDelete(td){
   if(confirm('Are you Sure To Delete This Record')) {
      row = td.parentElement.parentElement;
     document.getElementById("covidstatuslist").deleteRow(row.rowIndex);
     resetForm();
    }
}