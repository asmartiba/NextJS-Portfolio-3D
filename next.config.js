/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

exports.onCreateWebpackConfig = ({
    actions
  }) => {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.(glb|gltf)$/i,
            use: {
              loader: "url-loader",
              options: {
                limit: 8192,
              },
            }
          },
        ]
      }
    })
  }