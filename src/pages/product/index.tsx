import { GridContent } from '@ant-design/pro-components';
import type { FC } from 'react';
import { Suspense, useState } from 'react';
import Action1 from './components/action1';
import PageLoading from './components/PageLoading';
import TableDetail from './components/table-detail';
import TableList from './components/table-list';
import type { Action } from './data.d';
type AnalysisProps = {
  dashboardAndanalysis: string;
  loading: boolean;
};
const Analysis: FC<AnalysisProps> = () => {
  const [editAction, setEditAction] = useState<Action>({ action: '', data: {} });
  const clickEditAction = (actionData: Action) => {
    setEditAction(actionData);
  };
  return (
    <GridContent>
      <>
        <Suspense fallback={<PageLoading />}>
          {(() => {
            switch (editAction.action) {
              case 'action1':
                return <Action1 actionData={editAction.data} />;
              case 'action2':
                return <TableDetail />;
              default:
                return <TableList clickEditAction={clickEditAction} />;
            }
          })()}
          {/* {!editkey ? <TableList clickEdit={clickEdit} /> : <TableDetail />} */}
        </Suspense>
      </>
    </GridContent>
  );
};
export default Analysis;
