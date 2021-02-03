
import React from 'react';
import { connect } from 'react-redux';

import { Button } from 'antd';
import { TeamOutlined, FormOutlined, EllipsisOutlined, SmileOutlined } from "@ant-design/icons";
import { Status } from '../../components/indexComponents';
import { Dialogs, Messages, ChatInput, StatusHead } from "../../containers/indexContainers"

import './Home.scss';

const Home = () => {
  return (
    <section className="home">
        <div className="chat">
          <div className="chat__sidebar">
            <div className="chat__sidebar-header">
              <div>
                <TeamOutlined />
                <span>Список диалогов</span>
              </div>
              <Button type="link" shape="circle" icon={<FormOutlined />}/>
            </div>
            <div className="chat__sidebar-dialogs">
            
              <Dialogs
                userId={0}
              />
            </div>

          </div>
          <div className="chat__dialog">
            <div className="chat__dialog-header">
            <div>

            </div>
                <div className="chat__dialog-header-center">
                  <b className="chat__dialog-header-username"><StatusHead/></b>
                </div>
                <Button type="link" shape="circle" icon={<EllipsisOutlined />}/>
            </div>
            <div className="chat__dialog-messages">
                <Messages />
            </div>
              <div className="chat__dialog-input">
                <ChatInput />
              </div>
          </div>
        </div>
    </section>
  );
};


export default Home;
