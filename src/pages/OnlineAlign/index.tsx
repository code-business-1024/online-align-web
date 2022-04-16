import './index.less';
import React from 'react';
import AlignTable from './components/AlignTable/AlignTable';
import ToolBar from './components/ToolBar/ToolBar';

const OnlineAlign: React.FC = () => {
  return (
    <div>
      <ToolBar />
      <div className="table-container">
        <AlignTable />
        <AlignTable />
      </div>
    </div>
  );
};

export default OnlineAlign;
