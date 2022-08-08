import withSolid from 'rollup-preset-solid';
import replace from '@rollup/plugin-replace';

export default withSolid({
  plugins: [
    replace({
      values: {
        'solid-social-test-mode': '',
      },
      preventAssignment: true,
    }),
  ],
});
