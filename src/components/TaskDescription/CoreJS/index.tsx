import './index.scss';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { Menu } from 'antd';

import { RootState } from 'store';

const CoreJS: React.FC = () => {
  const isLoading = useSelector((state: RootState) => state.events.loading);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <>
      <div className="task-desc-container">
        <div className="task-desc-nav">
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <Menu.Item key="1">
              <a href="#description">Описание заданий</a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="#requirement">Требования для установки</a>
            </Menu.Item>
            <Menu.Item key="3">
              <a href="#submit">Как сабмитнуть</a>
            </Menu.Item>
            <Menu.Item key="4">
              <a href="#materials">Материалы</a>
            </Menu.Item>
          </Menu>
        </div>
        <div className="task-desc-area">
          <h2 className="task-main-headline" id="description">
            Описание заданий
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <h2 className="task-main-headline" id="requirement">
            Требования для установки
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <h2 className="task-main-headline" id="submit">
            Как сабмитнуть
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <h2 className="task-main-headline" id="materials">
            Материалы
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
        </div>
      </div>
    </>
  );
};

export default CoreJS;