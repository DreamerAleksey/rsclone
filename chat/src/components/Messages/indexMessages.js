import React from "react";
import PropTypes from "prop-types";
import { Empty, Spin } from "antd";
import classNames from "classnames";

import { Message } from "../../components/indexComponents";

import "./Messages.scss";

const Messages = ({ blockRef, isLoading, items, user }) => {
  return (
    <div
      ref={blockRef}
      className={classNames("messages", { "messages--loading": isLoading })}
    >
      {isLoading ? (
        <Spin size="large" tip="Loading..."></Spin>
      ) : items && !isLoading ? (
        items.length > 0 ? (
          items.map((item) => (
            <Message
              key={item._id}
              {...item}
              isMe={user._id === item.user._id}
            />
          ))
        ) : (
          <Empty description="Диалог пуст" />
        )
      ) : (
        <Empty description="Нет сообщений" />
      )}
    </div>
  );
};

Messages.propTypes = {
  items: PropTypes.array,
};

export default Messages;
