interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "Mary",
  lastName: "Auma",
  age: 25,
  location: "Nairobi"
};

const student2: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
  location: "Kisumu"
};
const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
table.border = "3"; // Optional: adds visible border for clarity

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

document.body.appendChild(table);
