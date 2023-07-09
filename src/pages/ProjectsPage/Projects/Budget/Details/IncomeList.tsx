import { FC } from 'react';
import { List, Typography } from 'antd';
import { IncomeData } from './Incomes';

const IncomeList: FC<{ incomeList: IncomeData[] }> = ({ incomeList }) => (
  <List
    size="small"
    dataSource={incomeList}
    renderItem={(item) => (
      <List.Item actions={[<Typography.Text>Edit</Typography.Text>]}>
        <List.Item.Meta
          title={`${item.name} - ${item.price} €`}
          description={`Received date: ${item.date}`}
        />
      </List.Item>
    )}
  />
);

export default IncomeList;
