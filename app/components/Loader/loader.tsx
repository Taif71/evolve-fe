import React from "react";
import { Alert, Space, Spin } from "antd";

const Loader: React.FC = () => (
  <Space
    direction="vertical"
    style={{ width: "100%", alignItems: "center", justifyContent: "center" }}
  >
    <Space>
      <Spin size="large">
        <div className="content" />
      </Spin>
    </Space>
  </Space>
);

export default Loader;
