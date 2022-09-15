<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid p-3">
      <a class="navbar-brand p-1">Netflix</a>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item p-1">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item dropdown p-1">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filmes
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Ação</a></li>
              <li><a class="dropdown-item" href="#">Romance</a></li>
              <li><a class="dropdown-item" href="#">Comédia</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown p-1">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Séries
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Ação</a></li>
              <li><a class="dropdown-item" href="#">Romance</a></li>
              <li><a class="dropdown-item" href="#">Comédia</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

