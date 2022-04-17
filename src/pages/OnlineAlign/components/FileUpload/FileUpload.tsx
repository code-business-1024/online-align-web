import { Select, Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './FileUpload.css';
import { getDictList } from '@/services/online-align/dict';
import { useEffect, useState } from 'react';

const { Option } = Select;

const langSelectList = [
  { baseLang: 'zh_CN', desc: '中文' },
  { baseLang: 'en_US', desc: '英文' },
];

const FileUpload: React.FC = ({ doUploadSuccess = (f) => f }) => {
  // const doUploadSuccess = props;
  // const [sentences, setSentences] = useState([]);
  // useEffect(() => {
  //   console.log(sentences);
  // }, [sentences]);
  // const [] = useState(initLangDictList);
  const [langDictList, setLangDictList] = useState(langSelectList);
  // [] 空数组意味着只有首次渲染会调用
  // useEffect 的第一个参数是函数 不是一个 promise
  // useEffect(async () => {
  //   const res = await getDictList({
  //     dictName: 'UnityLang',
  //     fields: ['baseLang', 'desc'],
  //   });
  //   setLangDictList(res.data);
  // }, []);
  useEffect(() => {
    // const getLangDictList = async () => {
    //   const res = await getDictList({
    //     dictName: 'UnityLang',
    //     fields: ['baseLang', 'desc'],
    //   });
    //   setLangDictList(res.data);
    // };
    // getLangDictList();
    (async () => {
      const res = await getDictList({
        dictName: 'UnityLang',
        fields: ['baseLang', 'desc'],
      });
      setLangDictList(res.data);
    })();
  }, []);
  const [currentLang, setCurrentLang] = useState('auto');
  const [fileName, setFileName] = useState('');
  return (
    <div className="root-container">
      <div className="lanSelect-box">
        <span style={{ marginRight: 12 }}>检测语言: </span>
        <div>
          <Select
            defaultValue={currentLang}
            style={{ width: 120 }}
            onChange={(value) => {
              setCurrentLang(value);
            }}
          >
            {langDictList.map((item: any) => (
              <Option key={item.baseLang} value={item.baseLang}>
                {item.desc}
              </Option>
            ))}
          </Select>
        </div>
      </div>
      <div className="fileUpload-box">
        <div>
          <Input value={fileName} style={{ width: 200 }} placeholder="文件名" />
        </div>
        <div>
          {/* <p onClick={doUploadSuccess}>Test</p> */}
          <Upload
            showUploadList={false}
            action="http://127.0.0.1:8080/web/file/uploadAndParser"
            onChange={(file: any) => {
              console.log(file.file.status);
              if (file.file.status == 'done') {
                const { data } = file.file.response;
                // console.log(data);
                // setSentences(data);
                doUploadSuccess(data);
              }
            }}
            data={{ language: currentLang }}
            beforeUpload={(file: any) => {
              setFileName(file.name);
            }}
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>上传文件</Button>
          </Upload>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
