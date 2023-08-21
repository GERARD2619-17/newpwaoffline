let goals = [];

function addGoal() {
    const team = document.getElementById('team').value;
    const score = document.getElementById('score').value;
 
    goals.push({
        team: team,
        score: score
    });
    
    renderGoalTable();
}
 
function updateGoal() {
    const team = document.getElementById('team').value;
    const score = document.getElementById('score').value;
    
    for(let i = 0; i < goals.length; i++){
        if(goals[i].team === team){
            goals[i].score = score;
        }
    }
    
    renderGoalTable();
}     

function deleteGoal() {
    const team = document.getElementById('team').value;
    
    goals = goals.filter(goal => goal.team !== team);

    renderGoalTable();
}

function renderGoalTable() {
  const goalTable = document.getElementById('goalTable');
  let tableHtml = '<table><tr><th>Equipo</th><th>Goles</th></tr>';

  for (let i = 0; i < goals.length; i++) {
    tableHtml += `<tr><td>${goals[i].team}</td><td>${goals[i].score}</td></tr>`;
  }

  tableHtml += '</table>';
  goalTable.innerHTML = tableHtml;
}
