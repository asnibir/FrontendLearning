// fetch('https://no-such-server.blabla')
//     .then(response => response.json())
//     .catch(err => console.log(err))

// fetch('/article/promise-chaining/user.json')
//   .then(response => response.json())
//   .then(user => fetch(`https://api.github.com/users/${user.name}`))
//   .then(response => response.json())
//   .then(githubUser => new Promise((resolve, reject) => {
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     setTimeout(() => {
//       img.remove();
//       resolve(githubUser);
//     }, 3000);
//   }))
//   .catch(error => alert(error.message));

new Promise((resolve, reject) => {
    throw new Error("Whoops!");
}).catch(alert);

new Promise((resolve, reject) => {
    reject(new Error("Whoops!"));
}).catch(alert);