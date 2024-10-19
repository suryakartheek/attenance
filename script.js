const studentForm = document.getElementById('student-form');
const studentNameInput = document.getElementById('student-name');
const attendanceTable = document.getElementById('attendance-table');
const attendanceDateInput = document.getElementById('attendance-date');

let students = [];

studentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const studentName = studentNameInput.value.trim();
    if (studentName) {
        addStudent(studentName);
        studentNameInput.value = '';
        renderAttendanceTable();
    }
});

function addStudent(name) {
    students.push({ name: name, attendance: Array(30).fill(false) });
}

function renderAttendanceTable() {
    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>Student Name</th>
                    <th>Attendance</th>
                </tr>
            </thead>
            <tbody>
    `;

    students.forEach((student, index) => {
        tableHTML += `<tr>
            <td>${student.name}</td>
            <td>
                <button onclick="viewAttendance(${index})">View Attendance</button>
            </td>
        </tr>`;
    });

    tableHTML += `
            </tbody>
        </table>
    `;

    attendanceTable.innerHTML = tableHTML;
}

function viewAttendance(studentIndex) {
    const student = students[studentIndex];
    let attendanceHTML = `
        <h3>${student.name}'s Attendance</h3>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (let day = 0; day < 30; day++) {
        const date =
