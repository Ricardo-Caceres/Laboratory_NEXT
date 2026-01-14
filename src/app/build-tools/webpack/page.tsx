import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function WebpackPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Webpack Basics"
        description="**Webpack** is a static module bundler for modern JavaScript applications. It builds a dependency graph and bundles your modules into optimized files.

**Key Concepts:**
- **Entry**: Starting point of your app
- **Output**: Where bundles are emitted
- **Loaders**: Transform files (CSS, images, etc.)
- **Plugins**: Extend webpack functionality
- **Code splitting**: Split code into chunks

**Benefits:**
- Bundle optimization
- Asset management
- Development server
- Hot module replacement"
        codeContent={[
          {
            filePath: 'webpack.config.js',
            content: `const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    static: './dist',
    hot: true,
  },
};`,
          },
        ]}
      />
      <RightPanel>
        <ClientExample />
      </RightPanel>
    </div>
  );
}
