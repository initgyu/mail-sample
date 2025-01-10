import { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import Header from '../../../components/Settings/Header';
import SubMenu from '../../../components/Settings/Mailbox/SubMenu';

const Management = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('List'));
  });

  const [isShowMailMenu, setIsShowMailMenu] = useState(false);
  const [selectedTab, setSelectedTab] = useState('mailbox');
  const [selectedSubTab, setSelectedSubTab] = useState('management');
  const [searchText, setSearchText] = useState<any>('');

  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab, selectedSubTab, searchText]);

  const tabChanged = (tabType: any) => {
    setIsShowMailMenu(false);
  };

  const tableData1 = [
    {
      id: 1,
      name: '받은메일함',
      unread: 120,
      total: 2800,
      volume: 490.2,
      category: 0,
    },
    {
      id: 2,
      name: '보낸메일함',
      unread: 10,
      total: 100,
      volume: 190.2,
      category: 0,
    },
    {
      id: 3,
      name: '임시메일함',
      unread: 1,
      total: 2,
      volume: 10.1,
      category: 0,
    },
    {
      id: 4,
      name: '내게쓴메일함',
      unread: 10,
      total: 206,
      volume: 300.1,
      category: 0,
    },
    {
      id: 5,
      name: '예약메일함',
      unread: 1,
      total: 2,
      volume: 12.1,
      category: 0,
    },
  ];

  const tableData2 = [
    {
      id: 6,
      name: '개인메일함1',
      unread: 54,
      total: 78,
      volume: 81.1,
      category: 1,
    },
    {
      id: 7,
      name: '개인메일함2',
      unread: 0,
      total: 17,
      volume: 41.5,
      category: 1,
    },
    {
      id: 8,
      name: '개인메일함3',
      unread: 182,
      total: 981,
      volume: 34.1,
      category: 1,
    },
  ];
  const tableData3 = [
    {
      id: 9,
      name: '스팸메일함',
      unread: 12,
      total: 12,
      volume: 30.8,
      category: 2,
    },
    {
      id: 10,
      name: '휴지통',
      unread: 0,
      total: 0,
      volume: 0,
      category: 2,
    },
  ];

  const options1 = [
    { value: 'option1', label: '삭제 안 함' },
    { value: 'option2', label: '5일' },
    { value: 'option3', label: '10일' },
    { value: 'option4', label: '15일' },
    { value: 'option4', label: '20일' },
    { value: 'option4', label: '25일' },
    { value: 'option4', label: '30일' },
  ];

  const options2 = [
    { value: 'option1', label: '삭제 안 함' },
    { value: 'option2', label: '5일' },
    { value: 'option3', label: '10일' },
    { value: 'option4', label: '15일' },
    { value: 'option4', label: '20일' },
    { value: 'option4', label: '25일' },
    { value: 'option4', label: '30일' },
  ];

  return (
    <div>
      <div className="flex gap-5 relative sm:h-[calc(100vh_-_110px)] h-full">
        <div className="panel p-0 flex-1 overflow-x-hidden h-full">
          <div className="relative">
            <Header headTab={'mailbox'} />

            <SubMenu subMenuTab={'management'} />

            <div className="py-4 px-6 flex items-center gap-2 md:gap-2">
              <div className="text-white-dark">현재 사용량</div>
              <div className="">716MB / 5GB</div>
              <div className="w-96 h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
                <div className="bg-gradient-to-r from-[#2b5876] to-[#4e4376] h-4 rounded-full w-4/12"></div>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="table-responsive mb-5">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>메일함</th>
                    <th>안 읽음 / 전체메일</th>
                    <th>용량</th>
                    <th className="!text-center">관리</th>
                  </tr>
                </thead>
                <tbody>
                  <td className="p-4" valign="top" rowSpan={6}>
                    기본메일함
                  </td>
                  {tableData1.map((data) => {
                    return (
                      <tr key={data.id}>
                        <td>
                          <div className="whitespace-nowrap">{data.name}</div>
                        </td>
                        <td>
                          {data.unread} / {data.total}
                        </td>
                        <td>{data.volume}</td>
                        <td className="text-center">
                          <ul className="flex items-center justify-center gap-2">
                            <li>
                              <button type="button">백업</button>
                            </li>
                            <li>
                              <button type="button">비우기</button>
                            </li>
                            <li>
                              <button type="button">모두 읽음</button>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    );
                  })}
                  <td className="p-4" valign="top" rowSpan={4}>
                    개인메일함
                  </td>
                  {tableData2.map((data) => {
                    return (
                      <tr key={data.id}>
                        <td>
                          <div className="whitespace-nowrap">{data.name}</div>
                        </td>
                        <td>
                          {data.unread} / {data.total}
                        </td>
                        <td>{data.volume}</td>
                        <td className="text-center">
                          <ul className="flex items-center justify-center gap-2">
                            <li>
                              <button type="button">백업</button>
                            </li>
                            <li>
                              <button type="button">비우기</button>
                            </li>
                            <li>
                              <button type="button">모두 읽음</button>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    );
                  })}
                  <td className="p-4" valign="top" rowSpan={3}>
                    기본메일함
                  </td>
                  {tableData3.map((data) => {
                    return (
                      <tr key={data.id}>
                        <td>
                          <div className="whitespace-nowrap">{data.name}</div>
                        </td>
                        <td>
                          {data.unread} / {data.total}
                        </td>
                        <td>{data.volume}</td>
                        <td className="text-center">
                          <ul className="flex items-center justify-center gap-2">
                            <li>
                              <button type="button">백업</button>
                            </li>
                            <li>
                              <button type="button">비우기</button>
                            </li>
                            <li>
                              <button type="button">모두 읽음</button>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <th></th>
                    <th>메일함 수 : 11</th>
                    <th>737 / 3999</th>
                    <th></th>
                    <th></th>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">메일함 복구</div>
              <div className="flex flex-col">
                <div className="flex items-center gap-5 md:gap-10">
                  <button type="button" className="btn btn-outline-dark">
                    동기화
                  </button>
                </div>
                <div className="pt-2 text-white-dark">
                  메일함의 메일 개수, 용량 등이 맞지 않을때 동기화를 클릭해주세요.
                </div>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">삭제 메일 휴지통으로 이동</div>
              <div className="flex flex-col">
                <div className="flex items-center gap-5 md:gap-10">
                  <label className="inline-flex">
                    <input type="radio" name="default_text_color1" className="form-radio text-primary peer" />
                    <span className="peer-checked:text-primary">사용함</span>
                  </label>

                  <label className="inline-flex">
                    <input type="radio" name="default_text_color1" className="form-radio peer" defaultChecked />
                    <span className="peer-checked:text-primary">사용 안 함</span>
                  </label>
                </div>
                <div className="pt-2 text-white-dark">
                  '사용 안 함' 선택한 경우 삭제한 메일이 영구삭제되어 복구할 수 없습니다.
                </div>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">스팸메일 보관 기간</div>
              <div className="flex items-center gap-4 md:gap-4">
                <div className="w-40">
                  <Select defaultValue={options1[0]} options={options1} isSearchable={false} />
                </div>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">보낸메일 보관 기간</div>
              <div className="flex items-center gap-4 md:gap-4">
                <div className="w-40">
                  <Select defaultValue={options2[0]} options={options2} isSearchable={false} />
                </div>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex flex-col items-center">
              <div className="flex items-center gap-2 md:gap-2">
                <button type="button" className="btn btn-outline-dark">
                  취소
                </button>
                <button type="button" className="btn btn-dark">
                  저장
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
