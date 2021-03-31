const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
    },
    {
        test: /\.(ts|tsx)$/,
        use: [
            "babel-loader", 
            {
                loader: 'ts-loader'
            }
        ],
        exclude: /node_modules/
    },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          }
        ],
        include: path.resolve(__dirname, "./src/"),
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
