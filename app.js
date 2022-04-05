const app = Vue.createApp({
  data() {
    return {
      users: [],
    };
  },
  async created() {
    const response = await axios.get("https://api.github.com/users");
    this.users = response.data;
  },
})
  .component("github-user-card", {
    template: "#github-user-card-template",
    props: {
      user: {},
    },
    data() {
      return {
        userDetail: {},
      };
    },
    async created() {
      const response = await axios.get(
        `https://api.github.com/users/${this.user.login}`
      );
      this.userDetail = response.data;
    },
  })
  .mount("#app");
