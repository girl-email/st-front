import typescript from 'rollup-plugin-typescript2';
import clear from 'rollup-plugin-clear';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';

export default {
  input: ['./src/index.ts'],
  output: [
    {
      dir: 'dist',
      format: "es",
      name: 'bundle.ts',
      exports: "named",
      preserveModules: true,
      preserveModulesRoot: "src",
   },
  ],
  // 插件目录
  plugins: [
    typescript(),
    clear({
      targets: ['dist'],
    }),
    // 简化引入路径
    /*
      不配置：
        export foo from './foo/index.js'
        import bar from './bar/index.js'
      配置：
        export foo from './foo'
        import bar from './bar'
    */
    resolve(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
    terser(),
    copy({
      targets: [
        { 
          src: './assets', //静态文件
          dest: './bin/style/' //需要存放的目录
        }
      ],
    }),
  ],
  external: [],
};