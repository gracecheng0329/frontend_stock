import React, {Component} from 'react';
import {Card, PageHeader} from "antd";
import {PageContainer} from "@ant-design/pro-layout";

class Index extends Component {
  render() {
    return (
      <PageContainer>
        <PageHeader>
          <Card>
            Test demo
          </Card>
        </PageHeader>
      </PageContainer>
    )
  }

}

export default Index;
