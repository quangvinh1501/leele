import React,{useState} from "react";
import "./admin.css";
import { PrivateRoute } from "../../services";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AccountPage from "./AccountPage";
import SiderBar from "./Sider";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export default function AdminPage() {

  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  }
  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <SiderBar />
        </Sider>
        <Layout>
          <Header className="customheader">
            <Navbar collapsed={collapsed} toggle={toggle}/>
          </Header>
          <Content>
            <Router>
              <Switch>
                <PrivateRoute exact path="/account" component={AccountPage} />
              </Switch>
            </Router>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </>
  );
}
