import { GridContent } from '@ant-design/pro-components';
import type { FC } from 'react';
import { Suspense, useState } from 'react';
import PageLoading from './components/PageLoading';
import TableDetail from './components/table-detail';
import TableList from './components/table-list';
import type { AnalysisData } from './data.d';
type AnalysisProps = {
  dashboardAndanalysis: AnalysisData;
  loading: boolean;
};
const Analysis: FC<AnalysisProps> = () => {
  const [editkey, setEditkey] = useState<string>();
  const clickEdit = (key: string) => {
    setEditkey(key);
  };
  return (
    <GridContent>
      <>
        <Suspense fallback={<PageLoading />}>
          {!editkey ? <TableList clickEdit={clickEdit} /> : <TableDetail />}
        </Suspense>
      </>
    </GridContent>
  );
};
export default Analysis;
