<template>
  <section class='pt-20'>
    <p class='lg:text-5xl text-center'>
      おっと! ここは 猫専用 404号室のようです
      <span class="material-icons">
        pets
      </span>
    </p>
    <p class='pt-4 text-center text-xl tracking-wider'>
      人間なのに迷い込んだ方は
      <router-link to='/'>
        <span class='text-green'>
          こちら
        </span>
      </router-link>
    </p>
    <div class='pt-16'>
      <img class='mx-auto rounded-xl w-1/2 opacity-50' src='@/assets/img/cat_404.jpg' alt='neko img'>
    </div>
  </section>
</template>
