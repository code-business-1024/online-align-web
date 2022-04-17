import React from 'react';
import './Welcome.less';
// import OnlineAlign from './OnlineAlign';
import ColorList from './ColorOrganizer/ColorList';
import AddColorForm from './LearnForm';
import ColorProvider from './ColorOrganizer/color-hooks';

const Welcome: React.FC = () => {
  return (
    <>
      <ColorProvider>
        <AddColorForm />
        <ColorList />
      </ColorProvider>
    </>
  );
};

export default Welcome;
