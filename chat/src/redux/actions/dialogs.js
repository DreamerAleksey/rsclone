import { dialogsApi } from '../../utils/api/indexApi';
import socket from '../../core/axios';

const Actions = {
    setDialogs: items => ({
      type: 'DIALOGS:SET_ITEMS',
      payload: items,
    }),
    updateReadedStatus: ({ userId, dialogId }) => ({
      type: 'DIALOGS:LAST_MESSAGE_READED_STATUS',
      payload: {
        userId,
        dialogId,
      },
    }),
    setCurrentDialogId: id => dispatch => {
      socket.emit('DIALOGS:JOIN', id);
      dispatch({
        type: 'DIALOGS:SET_CURRENT_DIALOG_ID',
        payload: id,
      });
    },
    fetchDialogs: () => dispatch => {
      dialogsApi.getAll().then(({ data }) => {
        dispatch(Actions.setDialogs(data));
      });
    },
  };
  
  export default Actions;