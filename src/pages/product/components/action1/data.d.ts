export interface DataType {
  key: React.Key;
  title: string;
  dataIndex: string;
  address?: string;
  tags?: string[];
}

export interface Params {
  count: number;
}

export interface FromList {
  label: string;
  type: string;
  name: string;
  data?: any;
}
