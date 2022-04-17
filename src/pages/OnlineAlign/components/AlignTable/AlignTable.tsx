/* eslint-disable react/jsx-key */
import React, { useCallback, useEffect, useState } from 'react';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import FileUpload from '../FileUpload/FileUpload';

export type TableListItem = {
  key: number;
  value: string;
};

const tableListDataSource: TableListItem[] = [
  {
    value: 'An elderly couple raised their 4 children on a frugal basis. ',
    key: 1,
  },
  {
    value:
      'Time flies, they have been married for 50 years, and the children with excellent income are secretly discussing what kind of golden wedding gift to give their parents.',
    key: 2,
  },
  {
    value:
      'Since the old couple likes to go to the seaside to enjoy the sunset, the children decided to give their parents the most luxurious travel voyage, so that the old couple can enjoy the beautiful scenery of the sea.',
    key: 3,
  },
  {
    value:
      'The elderly couple boarded the luxury cruise ship with first-class tickets, and they were amazed by the large ship that can accommodate thousands of people. ',
    key: 4,
  },
  {
    value:
      'And there are swimming pools, luxury restaurants, cinemas, etc. on board, which surprise them both.',
    key: 5,
  },
  {
    value: 'The fly in the ointment is that the cost of each luxury equipment is very expensive. ',
    key: 6,
  },
  {
    value:
      'The thrifty old couple calculated their little travel expenses, and after thinking about it, they were really reluctant to spend it lightly. ',
    key: 7,
  },
  {
    value:
      'They had to enjoy five-star suites in first-class cabins, or linger on the deck and enjoy the view of the sea.',
    key: 8,
  },
];

const columns: ProColumns<TableListItem>[] = [
  {
    title: '序号',
    width: 80,
    dataIndex: 'key',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '内容',
    width: 600,
    dataIndex: 'value',
    render: (_) => <a>{_}</a>,
  },
  // {
  //   title: '操作',
  //   width: 180,
  //   key: 'option',
  //   valueType: 'option',
  //   render: (record) => [
  //     // <a
  //     //   key="editable"
  //     //   onClick={() => {
  //     //     console.log(record);
  //     //   }}
  //     // >
  //     //   编辑
  //     // </a>,
  //     // <a key="link2">报警</a>,
  //     // <a key="link3">监控</a>,
  //     <TableDropdown
  //       key="actionGroup"
  //       menus={[
  //         { key: 'copy', name: '复制' },
  //         { key: 'delete', name: '删除' },
  //       ]}
  //     />,
  //   ],
  // },
];

const AlignTable: React.FC = () => {
  // const [loading, setLoading] = useState(true);
  const [sentences, setSentences] = useState(tableListDataSource);
  useEffect(() => {
    localStorage.setItem('text', JSON.stringify(sentences));
  }, [sentences]);
  return (
    <>
      {/* <p onClick={() => setSentences([])}>Clear</p> */}
      <ProTable<TableListItem>
        columns={columns}
        dataSource={sentences}
        rowKey="key"
        search={false}
        dateFormatter="string"
        toolBarRender={() => [
          <FileUpload
            doUploadSuccess={(data: any) => {
              console.log(data);
              setSentences(data);
            }}
          />,
        ]}
      />
    </>
  );
};

export default AlignTable;
