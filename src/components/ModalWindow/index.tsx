import React, { useEffect, useState } from 'react';
import axios from 'utils';
import { Button, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CloseOutlined } from '@ant-design/icons';

import { RootState } from 'store';
import { putEventUrl } from '@constants/api';
import { changeEvent } from 'reducers/events';
import { globalFunctions } from '@constants';
import downloadDocument from 'downloadFiles/downloadDocument';
import './index.scss';
import { setEventPageId } from 'reducers/eventId';
import { StudyEvent } from 'reducers/events/models';
import DownloadModal, { getFormat } from './DownloadModal/index';

const ModalWindow: React.FC = () => {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.events.data);
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState('basic');
  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const showModalWindow = (windowType: string) => {
    setType(windowType);
    setVisible(true);
  };

  const items = events.filter((item) => item.favourite === true);

  const handleFavourite = async (fav: StudyEvent) => {
    const favEvent = {
      ...fav,
      favourite: false,
    };

    const changedInd = events.findIndex((event) => event.id === fav.id);

    await axios.put(putEventUrl(favEvent.id), favEvent);
    dispatch(changeEvent({ changedEvent: favEvent, changedInd }));
  };

  const handleClick = (id: string) => {
    dispatch(setEventPageId(id));
    setVisible(false);
  };

  useEffect(() => {
    globalFunctions.showModalWindow = showModalWindow;
  }, []);
  const currentModalWindow = (windowType: string) => {
    switch (windowType) {
      case 'download':
        return (
          <Modal
            title="Download Schedule"
            visible={visible}
            onOk={() => {
              downloadDocument(getFormat());
              handleOk();
            }}
            onCancel={handleCancel}
          >
            <p>Choose format:</p>
            <DownloadModal />
          </Modal>
        );

      case 'favourite':
        return (
          <Modal
            title="Favourites"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <ul>
              {items.map((fav) => {
                return (
                  <li
                    key={fav.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      textAlign: 'left',
                      border: '1px solid lightgrey',
                      borderRadius: '5px',
                      marginBottom: '5px',
                      padding: '10px',
                    }}
                  >
                    <span style={{ color: 'green' }}>{fav.dateTime}</span>
                    &nbsp;
                    <span>{fav.eventTime}</span>&nbsp;
                    <button
                      type="button"
                      className="list__button"
                      style={{ fontWeight: 'bold' }}
                      onClick={() => handleClick(fav.id)}
                    >
                      {fav.description}
                    </button>
                    <button
                      type="button"
                      className="modal-favourite"
                      style={{ marginLeft: 'auto', cursor: 'pointer' }}
                      onClick={() => handleFavourite(fav)}
                    >
                      <CloseOutlined />
                    </button>
                  </li>
                );
              })}
            </ul>
          </Modal>
        );
      default:
        return (
          <Modal
            title="Error"
            visible={visible}
            onOk={handleOk}
            cancelText=""
            footer={[
              <Button key="submit" type="primary" onClick={handleOk}>
                Ok
              </Button>,
            ]}
          >
            <p>Ooops! An error occurred! Try again later.</p>
          </Modal>
        );
    }
  };
  return currentModalWindow(type);
};

export default ModalWindow;
