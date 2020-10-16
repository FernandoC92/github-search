<template>
  <div class="container-fluid mt-4">
    <div v-if="userExist" class="row">
      <div class="col-12 col-md-2 p-0">
        <div class="card d-flex flex-column align-items-center align-items-start align-items-md-baseline">
          <img
            :src="user.avatarUrl"
            width="300"
            height="300"
            class="card-img-top img-fluid"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title title-name mt-3">{{ user.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted size24">
              {{ user.login }}
            </h6>
            <div class="mt-4 d-flex flex-row flex-md-column justify-content-between">
              <div class="card-subtitle mb-2 text-muted info-text d-flex">
                <img
                  class="img-fluid"
                  src="../assets/icons/icon.svg"
                  alt=""
                /><span class="ml-2">{{ user.company }}</span>
              </div>
              <div class="card-subtitle mb-2 text-muted info-text d-flex">
                <img
                  class="img-fluid"
                  src="../assets/icons/location.svg"
                  alt=""
                /><span class="ml-2">{{ user.location }}</span>
              </div>
              <div class="card-subtitle mb-2 text-muted info-text d-flex">
                <img
                  class="img-fluid"
                  src="../assets/icons/star.svg"
                  alt=""
                /><span class="ml-2">{{ user.stargazersCount }}</span>
              </div>
              <div class="card-subtitle mb-2 text-muted info-text d-flex">
                <img
                  class="img-fluid"
                  src="../assets/icons/repository.svg"
                  width="20"
                  height="18"
                  alt=""
                /><span class="ml-2">{{ user.publicRepos }}</span>
              </div>
              <div class="card-subtitle mb-2 text-muted info-text d-flex">
                <img
                  class="img-fluid"
                  src="../assets/icons/followers.svg"
                  alt=""
                /><span class="ml-2">{{ user.followers }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-10">
        <div class="row flex-column ml-0 ml-md-5 ml-lg-2">
          <div
            v-for="repo in user.repos"
            :key="repo.id"
            class="media mt-4 ml-4"
          >
            <div class="media-body">
              <h5 class="title-name m-0">{{ repo.name }}</h5>
              <p class="size24 m-0 w-75">
                {{ repo.description }}
              </p>
              <div class="d-flex align-items-center">
                <img src="../assets/icons/star.svg" alt="" /><span
                  class="ml-2 info-text"
                  >{{ repo.stargazers_count }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-5" v-else>
      <p class="notFound">Sorry, user not found</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      userName: this.$route.params.userName,
      user: {
        name: null,
        login: null,
        avatarUrl: null,
        company: null,
        location: null,
        stargazersCount: null,
        publicRepos: null,
        followers: null,
        repos: null,
      },
      userExist: true,
    };
  },
  methods: {
    async getUser(userName) {
      const url = "https://api.github.com/users";
      try {
        const getUser = await axios.get(`${url}/${userName}`);
        const getRepos = await axios.get(`${url}/${userName}/repos`);

        let name = getUser.data.name;
        if (name) {
          let splitName = name.split(" ");
          name = splitName[0];
        }
        this.user.name = name;
        this.user.login = getUser.data.login;
        this.user.avatarUrl = getUser.data.avatar_url;
        this.user.company = getUser.data.company;
        this.user.location = getUser.data.location;
        this.user.publicRepos = getUser.data.public_repos;
        this.user.followers = getUser.data.followers;

        this.user.repos = getRepos.data;

        let count = 0;
        this.user.repos.forEach((element) => {
          count += element.stargazers_count;
        });
        this.user.stargazersCount = count;
        this.userExist = true
      } catch (error) {
        this.userExist = false;
        console.error(error);
      }
    },
  },
  created() {
    this.getUser(this.userName);
  },
};
</script>

<style lang="scss" scoped>
.title-name {
  font-size: 36px;
}
.size24 {
  font-size: 24px;
}
.info-text {
  font-size: 20px;
}
.notFound {
  font-size: 4rem;
}
</style>