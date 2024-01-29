import { QuestionCircleOutlined } from '@ant-design/icons';
import { SelectLang as UmiSelectLang } from '@umijs/max';
import { Badge } from 'antd';

export type SiderTheme = 'light' | 'dark';

export const SelectLang = () => {
  return <UmiSelectLang />;
};

export const Question = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: 26,
      }}
    >
      <Badge size="small" count={5}>
        <QuestionCircleOutlined style={{ color: '#f5222d', height: '20px', width: '20px' }} />
      </Badge>
    </div>
  );
};
