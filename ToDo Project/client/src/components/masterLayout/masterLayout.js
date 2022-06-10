import React, { Component, Fragment } from "react";
import {Container,Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {AiOutlineCheckCircle, AiOutlineEdit, AiOutlineLogout, AiOutlineMenuUnfold, AiOutlineUser} from "react-icons/ai";
import {BsArrowsFullscreen, BsHourglass, BsListNested} from "react-icons/bs";
import logo from "../../assets/images/logo.svg";
import {MdOutlineCancelPresentation, RiDashboardLine} from "react-icons/all";

class MasterLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFullScreen: false,
      logOutRedirect:false,
    };
  }

  MenuBarClickHandler = () => {
    let sideNav = this.sideNav;
    let content = this.content;
    if (sideNav.classList.contains("side-nav-open")) {
      sideNav.classList.add("side-nav-close");
      sideNav.classList.remove("side-nav-open");
      content.classList.add("content-expand");
      content.classList.remove("content");
    } else {
      sideNav.classList.remove("side-nav-close");
      sideNav.classList.add("side-nav-open");
      content.classList.remove("content-expand");
      content.classList.add("content");
    }
  };


  FullScreen = () => {
    if (this.state.isFullScreen === true) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      this.setState({ isFullScreen: false });
    } else {
      let elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
      this.setState({ isFullScreen: true });
    }
  };


  render() {
          return (
              <Fragment>
                  <div>
                      <Navbar ref={(div) => {this.topNav = div;}} className="fixed-top px-0 shadow-sm ">
                          <Container fluid={true}>
                              <Navbar.Brand >
                                  <a className="icon-nav m-0 h5" onClick={this.MenuBarClickHandler}><AiOutlineMenuUnfold/></a>
                                  <img className="nav-logo mx-2"  src={logo} alt="logo"/>
                              </Navbar.Brand>

                              <div className="float-right h-auto d-flex">
                                  <a className="mx-2 icon-nav h6 px-3" onClick={this.FullScreen}> <BsArrowsFullscreen/></a>
                                  <div className="user-dropdown">
                                      <img className="icon-nav-img icon-nav" src="https://yt3.ggpht.com/ytc/AKedOLRNgeV2pOHHLhb-uNlo95HH3yF3U_htLbT8_iWr=s48-c-k-c0x00ffffff-no-rj"/>
                                      <div className="user-dropdown-content ">
                                          <div className="mt-4 text-center">
                                              <img className="icon-nav-img" src="https://yt3.ggpht.com/ytc/AKedOLRNgeV2pOHHLhb-uNlo95HH3yF3U_htLbT8_iWr=s48-c-k-c0x00ffffff-no-rj"/>
                                              <h6>Rabbil Hasan</h6>
                                              <hr className="user-dropdown-divider  p-0"/>
                                          </div>
                                          <NavLink exact={true} activeClassName="side-bar-item-active" to="/Profile" className="side-bar-item">
                                              <AiOutlineUser className="side-bar-item-icon" />
                                              <span className="side-bar-item-caption">Profile</span>
                                          </NavLink>
                                          <NavLink exact={true} activeClassName="side-bar-item-active" to="/b" className="side-bar-item">
                                              <AiOutlineLogout className="side-bar-item-icon" />
                                              <span className="side-bar-item-caption">Logout</span>
                                          </NavLink>
                                      </div>
                                  </div>
                              </div>
                          </Container>
                      </Navbar>
                      <div ref={(div) => {this.sideNav = div;}} className="side-nav-open">
                          <NavLink exact={true} activeClassName="side-bar-item-active" to="/" className="side-bar-item mt-2">
                              <RiDashboardLine className="side-bar-item-icon" />
                              <span className="side-bar-item-caption">Dashboard</span>
                          </NavLink>
                          <NavLink exact={true} activeClassName="side-bar-item-active" to="/Create" className="side-bar-item mt-2">
                              <AiOutlineEdit className="side-bar-item-icon" />
                              <span className="side-bar-item-caption">Create New</span>
                          </NavLink>
                          <NavLink exact={true} activeClassName="side-bar-item-active" to="/All" className="side-bar-item mt-2">
                              <BsListNested className="side-bar-item-icon" />
                              <span className="side-bar-item-caption">New Task</span>
                          </NavLink>
                          <NavLink exact={true} activeClassName="side-bar-item-active" to="/Progress" className="side-bar-item mt-2">
                              <BsHourglass className="side-bar-item-icon" />
                              <span className="side-bar-item-caption">In Progress</span>
                          </NavLink>
                          <NavLink exact={true} activeClassName="side-bar-item-active" to="/Completed" className="side-bar-item mt-2">
                              <AiOutlineCheckCircle className="side-bar-item-icon" />
                              <span className="side-bar-item-caption">Completed</span>
                          </NavLink>
                          <NavLink exact={true} activeClassName="side-bar-item-active" to="/Canceled" className="side-bar-item mt-2">
                              <MdOutlineCancelPresentation className="side-bar-item-icon" />
                              <span className="side-bar-item-caption">Canceled</span>
                          </NavLink>


                      </div>
                      <div ref={(div) => {this.content = div;}} className="content">
                          {this.props.children}
                      </div>
                  </div>
              </Fragment>
          );
      }

}
export default MasterLayout;
