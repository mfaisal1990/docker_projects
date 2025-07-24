fetch('/api.php')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('user-list');
    data.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.name} (${user.email})`;
      list.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error fetching users:', error);
  });
