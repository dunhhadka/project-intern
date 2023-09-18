import { Table, Typography } from "antd";
const { Title } = Typography;

const colorRanking = ["gold", "silver", "#cd7f32", "lightskyblue", "#0b0a0a"];

const TableTop5Service = ({ services }) => {
  return (
    <Table
      columns={[
        {
          title: "Top",
          dataIndex: "top",
          align: "center",
          render: (name) => (
            <Title level={4} style={{ color: colorRanking[name - 1] }}>
              {name}
            </Title>
          ),
        },
        {
          title: "Dịch vụ",
          dataIndex: "name",
          align: "center",
          render: (name) => (
            <Title level={5} className="line-1">
              {name}
            </Title>
          ),
        },
        {
          title: "Số lượng",
          dataIndex: "quantity",
          align: "center",
          render: (qty) => <Title level={5}>{qty}</Title>,
        },
      ]}
      dataSource={services}
      size="small"
      bordered
      pagination={{ pageSize: 100, hideOnSinglePage: true }}
    />
  );
};

export default TableTop5Service;
