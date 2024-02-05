import { createStyles } from 'antd-style';

const useStyles = createStyles(() => {
  return {
    table: {
      '.ant-table-thead > tr > th': {
        // 'white-space': 'nowrap',
        maxWidth: '160px',
      },
      '.ant-table-row td': {
        // 'white-space': 'nowrap',
        maxWidth: '160px',
      },
    },
    form: {
      '.ant-pro-form': {
        // marginTop: '100px',
        color: 'red',
        backgroundColor: 'red',
        display: 'none',
        // 'flex-flow': 'row-reverse',
      },
    },
  };
});

export default useStyles;
