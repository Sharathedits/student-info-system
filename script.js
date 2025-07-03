document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;
  const course = document.getElementById("course").value;

  const table = document.getElementById("studentList");
  const row = table.insertRow();
  row.innerHTML = `<td>${name}</td><td>${roll}</td><td>${course}</td>`;

  document.getElementById("studentForm").reset();
});
