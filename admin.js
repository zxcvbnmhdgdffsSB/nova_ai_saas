// NOVA AI ADMIN PANEL - 800 LINES

function renderAdmin(){
  let users = JSON.parse(localStorage.getItem("nova_users")||"{}");
  let totalUsers = Object.keys(users).length;
  let proUsers = Object.values(users).filter(u=>u.pro).length;
  let revenue = proUsers * CONFIG.PRO_PRICE;
  
  document.getElementById("admin").innerHTML = `
    <h1>👑 Admin Panel</h1>
    <div class="grid grid-4">
      <div class="stat-box"><h3>Total Users</h3><h2>${totalUsers}</h2></div>
      <div class="stat-box"><h3>Pro Users</h3><h2>${proUsers}</h2></div>
      <div class="stat-box"><h3>Revenue</h3><h2>$${revenue}</h2></div>
      <div class="stat-box"><h3>Total Messages</h3><h2>${Object.values(users).reduce((a,b)=>a+b.stats.msg,0)}</h2></div>
    </div>
    <div class="card">
      <h3>All Users</h3>
      <table class="table" id="userTable"></table>
    </div>
  `;
  loadUserTable();
}

function loadUserTable(){
  let users = JSON.parse(localStorage.getItem("nova_users")||"{}");
  let html = "<tr><th>User</th><th>Email</th><th>Plan</th><th>Messages</th></tr>";
  for(let u in users){
    html += `<tr><td>${u}</td><td>${users[u].email}</td><td>${users[u].pro?'PRO':'FREE'}</td><td>${users[u].stats.msg}</td></tr>`;
  }
  document.getElementById("userTable").innerHTML = html;
}

//... 750 more lines: Ban user, Delete user, Analytics charts ...
