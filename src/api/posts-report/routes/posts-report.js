module.exports = {
      routes: [
		{
          method: "GET",
          path: "/posts-report/find/:client",
          handler: "posts-report.findJewlByClient",
          config: {
            policies: [],
            middlewares: [],
          },
        },
      ],
    };
