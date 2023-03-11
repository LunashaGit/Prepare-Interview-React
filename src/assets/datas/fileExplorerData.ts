const files = {
  name: "root",
  children: [
    {
      name: "node_modules",
      children: [
        {
          name: "react",
          children: [
            {
              name: "index.js",
            },
            {
              name: "react.js",
            },
          ],
        },
      ],
    },
    {
      name: "src",
      children: [
        {
          name: "assets",
          children: [
            {
              name: "pages",
              children: [
                {
                  name: "fileExplorer.tsx",
                },
              ],
            },
            {
              name: "components",
              children: [
                {
                  name: "synAPIComponent",
                  children: [
                    {
                      name: "li.tsx",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "package.json",
    },
  ],
};

export default files;
