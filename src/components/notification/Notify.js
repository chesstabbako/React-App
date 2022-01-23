import React, { useEffect, useRef } from "react";
import NotificationSystem from "react-notification-system";
import { useSelector } from "react-redux";

const NotificationContainer = () => {
  const notificationSystem = React.createRef();
  const { message, level, id, title } = useSelector(state => state.notifications);
 
  useEffect(() => {
    if (!id) return;

    const notification = notificationSystem.current;
    notification.addNotification({
      title,
      message: message,
      level,
      uid: id,
      position: 'tc',
      autoDismiss: 5
    });

  }, [id]);

  return (
      <NotificationSystem ref={notificationSystem} />
  );
};

export default NotificationContainer;
