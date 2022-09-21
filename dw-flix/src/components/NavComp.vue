<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid p-3">
      <a class="navbar-brand p-1">Netflix</a>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item p-1">
            <RouterLink to="/" class="nav-link links">Home</RouterLink>
          </li>
          <li class="nav-item p-1">
            <RouterLink to="/filmes" class="nav-link links">Filmes</RouterLink>
          </li>
          <li class="nav-item p-1">
            <RouterLink to="/series" class="nav-link links">Séries</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
