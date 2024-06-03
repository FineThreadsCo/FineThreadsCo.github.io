export default {
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "/index.html",
        about: "/about.html",
        services: "/services.html",
      },
    },
  },
};
