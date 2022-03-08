import React from "react";
import { userActions } from "../../store/auth/actions";
import { history } from "../../helpers";
import store from "../../store";
import { connect } from "react-redux";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./Navbar.css";
import { UserOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { useDispatch } from "react-redux";


const Navbar = (props) => {
  const { authentication } = store.getState();
  const { user } = authentication;
  const dispatch = useDispatch();
  const handleMenuLogout = () => {
    dispatch(userActions.logout);
    history.push("/login");
  };
  const profileList = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        <a href="/profile">
          Profile
        </a>
      </Menu.Item>

      <Menu.Item danger key="2" icon={<UserOutlined />} onClick={ () => handleMenuLogout() }>
        <a href="#"s>
          Logout
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div style={{ float: "left" }}>
        {React.createElement(
          props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: props.toggle,
          }
        )}
      </div>
      <div style={{ float: "right" }}>
        <Dropdown.Button
          style={{ backgroundColor: "#87d068" }}
          overlay={profileList}
          placement="bottom"
          icon={<UserOutlined />}
        >
          Hi {user.username}
        </Dropdown.Button>
      </div>
    </>
  );
};
export default connect()(Navbar);
