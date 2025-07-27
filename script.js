document.querySelector("#getOne").addEventListener("click", getOne);

document.querySelector("#getAll").addEventListener("click", getAll);

function getOne() {
  let id = document.getElementById("postid").value;
  let url = "https://jsonplaceholder.typicode.com/posts/" + id;
  let xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (this.status === 200) {
      let post = JSON.parse(this.responseText);
      let html = "";

      html += `
          <div class="card mb-3 shadow-sm">
            <div class="card-header bg-primary text-white fw-bold">
               ${post.id}--${post.title}
            </div>
            <div class="card-body">
              <p class="card-text">${post.body}</p>
            </div>
          </div>
        `;

      document.querySelector("#results").innerHTML = html;
    }
  };

  xhr.send();
}

function getAll() {
  let url = "https://jsonplaceholder.typicode.com/posts";
  let xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (this.status === 200) {
      let posts = JSON.parse(this.responseText);
      let html = "";

      posts.forEach((post) => {
        html += `
          <div class="card mb-3 shadow-sm">
            <div class="card-header bg-primary text-white fw-bold">
              ${post.title}
            </div>
            <div class="card-body">
              <p class="card-text">${post.body}</p>
            </div>
          </div>
        `;
      });

      document.querySelector("#results").innerHTML = html;
    }
  };

  xhr.send();
}
