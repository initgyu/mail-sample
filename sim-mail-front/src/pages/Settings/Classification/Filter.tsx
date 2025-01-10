import { Fragment, useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { useNavigate } from 'react-router-dom';
import IconSearch from '../../../components/Icon/IconSearch';
import Dropdown from '../../../components/Dropdown';
import { Dialog, Transition } from '@headlessui/react';
import Select from 'react-select';
import Header from '../../../components/Settings/Header';
import SubMenu from '../../../components/Settings/Classification/SubMenu';

const Filter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('List'));
  });

  const [filterList, setFilterList] = useState([
    {
      id: 1,
      send: 'tjdwo9577@daum.net',
      from: 'pulmuone9@naver.com',
      cc: 'tjdwo9577@gmail.com',
      subject: '견적서',
      contents: '메일솔루션',
      move: '받은메일함',
    },
    {
      id: 2,
      send: 'daum',
      from: 'naver',
      cc: 'ertaus',
      subject: '휴가',
      move: '받은메일함',
    },
    {
      id: 2,
      send: 'gmail',
      from: 'ertaus',
      cc: 'tjdwo9577',
      subject: '',
      contents: '계정관리',
      move: '받은메일함',
    },
  ]);

  const [isShowMailMenu, setIsShowMailMenu] = useState(false);
  const [selectedTab, setSelectedTab] = useState('filter');
  const [selectedSubTab, setSelectedSubTab] = useState('filter');
  const [searchText, setSearchText] = useState<any>('');
  const [ids, setIds] = useState<any>([]);
  const [modal5, setModal5] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab, searchText]);

  const tabChanged = (tabType: any) => {
    setIsShowMailMenu(false);
  };

  const handleCheckboxChange = (id: any) => {
    if (ids.includes(id)) {
      setIds((value: any) => value.filter((d: any) => d !== id));
    } else {
      setIds([...ids, id]);
    }
  };

  const options1 = [
    { value: 'option1', label: '받은메일함' },
    { value: 'option2', label: '보낸메일함' },
    { value: 'option3', label: '임시메일함' },
    { value: 'option4', label: '내게쓴메일함' },
    { value: 'option6', label: '개인메일함1' },
    { value: 'option7', label: '개인메일함2' },
    { value: 'option8', label: '개인메일함3' },
  ];

  return (
    <div>
      <div className="flex gap-5 relative sm:h-[calc(100vh_-_110px)] h-full">
        <div className="panel p-0 flex-1 overflow-x-hidden h-full">
          <div className="relative">
            <Header headTab={'filter'} />

            <SubMenu subMenuTab={'filter'} />

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="flex flex-col w-full">
                <div className="w-fit">분류 기준과 처리 방법을 선택하면 수신된 메일을 자동으로 분류할 수 있습니다.</div>
                <div className="py-4 flex w-full justify-between">
                  <div className="flex gap-2 md:gap-2">
                    <button type="button" className="btn btn-outline-dark w-fit">
                      삭제
                    </button>
                    <button type="button" onClick={() => setModal5(true)} className="btn btn-outline-dark w-fit">
                      추가
                    </button>
                    <Transition appear show={modal5} as={Fragment}>
                      <Dialog as="div" open={modal5} onClose={() => setModal5(false)}>
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="fixed inset-0" />
                        </Transition.Child>
                        <div className="fixed inset-0 bg-[black]/60 z-[999]">
                          <div className="flex items-start justify-center min-h-screen px-4">
                            <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0 scale-95"
                              enterTo="opacity-100 scale-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100 scale-100"
                              leaveTo="opacity-0 scale-95"
                            >
                              <Dialog.Panel className="panel border-0 p-0 rounded-lg w-full max-w-xl my-8 text-black dark:text-white-dark">
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                  <h5 className="font-bold text-lg">분류 추가</h5>
                                  <button
                                    onClick={() => setModal5(false)}
                                    type="button"
                                    className="text-white-dark hover:text-dark"
                                  ></button>
                                </div>
                                <div className="p-5 flex flex-col gap-4">
                                  <div className="sm:flex justify-between items-center gap-4 md:gap-4">
                                    <label htmlFor="hrDefaultinput" className="min-w-36">
                                      보낸사람 주소
                                    </label>
                                    <input type="email" placeholder="보낸사람 주소" className="form-input" />
                                  </div>
                                  <div className="sm:flex justify-between items-center gap-4 md:gap-4">
                                    <label htmlFor="hrDefaultinput" className="min-w-36">
                                      받는사람 주소
                                    </label>
                                    <input type="email" placeholder="받는사람 주소" className="form-input" />
                                  </div>
                                  <div className="sm:flex justify-between items-center gap-4 md:gap-4">
                                    <label htmlFor="hrDefaultinput" className="min-w-36">
                                      참조 주소
                                    </label>
                                    <input type="email" placeholder="참조 주소" className="form-input" />
                                  </div>
                                  <div className="sm:flex justify-between items-center gap-4 md:gap-4">
                                    <label htmlFor="hrDefaultinput" className="min-w-36">
                                      메일 제목
                                    </label>
                                    <input type="email" placeholder="메일 제목" className="form-input" />
                                  </div>
                                  <div className="sm:flex justify-between items-center gap-4 md:gap-4">
                                    <label htmlFor="hrDefaultinput" className="min-w-36">
                                      메일 내용
                                    </label>
                                    <input type="email" placeholder="메일 내용" className="form-input" />
                                  </div>
                                  <div className="sm:flex items-center gap-4 md:gap-4">
                                    <label htmlFor="hrDefaultinput" className="min-w-36">
                                      처리 방법
                                    </label>
                                    <div className="flex items-center gap-2 md:gap-2">
                                      <div className="w-fit">
                                        <div className="w-60">
                                          <Select defaultValue={options1[0]} options={options1} isSearchable={false} />
                                        </div>
                                      </div>

                                      <div>으로 이동</div>
                                    </div>
                                  </div>

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
                              </Dialog.Panel>
                            </Transition.Child>
                          </div>
                        </div>
                      </Dialog>
                    </Transition>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      className="form-input ltr:pr-8 rtl:pl-8 peer"
                      placeholder="분류기준"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                    />
                    <div className="absolute ltr:right-[11px] rtl:left-[11px] top-1/2 -translate-y-1/2 peer-focus:text-primary">
                      <IconSearch />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <table>
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" className="form-checkbox" />
                    </th>
                    <th>
                      <div className="dropdown">
                        <Dropdown button={<>분류 기준 전체 보기</>}>
                          <ul className="!min-w-[170px]">
                            <li>
                              <button type="button">분류 기준 전체 보기</button>
                            </li>
                            <li>
                              <button type="button">보낸사람 조건 보기</button>
                            </li>
                            <li>
                              <button type="button">받는사람 조건 보기</button>
                            </li>
                            <li>
                              <button type="button">참조 조건 보기</button>
                            </li>
                            <li>
                              <button type="button">메일제목 조건 보기</button>
                            </li>
                            <li>
                              <button type="button">메일내용 조건 보기</button>
                            </li>
                          </ul>
                        </Dropdown>
                      </div>
                    </th>
                    <th>
                      <div className="dropdown">
                        <Dropdown button={<>처리 방법 전체 보기</>}>
                          <ul className="!min-w-[170px]">
                            <li>
                              <button type="button">받은메일함</button>
                            </li>
                            <li>
                              <button type="button">보낸메일함</button>
                            </li>
                            <li>
                              <button type="button">임시보관함</button>
                            </li>
                            <li>
                              <button type="button">내게쓴메일함</button>
                            </li>
                            <li>
                              <button type="button">개인메일함1</button>
                            </li>
                            <li>
                              <button type="button">개인메일함2</button>
                            </li>
                            <li>
                              <button type="button">개인메일함3</button>
                            </li>
                          </ul>
                        </Dropdown>
                      </div>
                    </th>
                    <th className="!text-center">수정/삭제</th>
                  </tr>
                </thead>
                <tbody>
                  {filterList.map((data) => {
                    return (
                      <tr key={data.id}>
                        <td>
                          <input type="checkbox" className="form-checkbox" />
                        </td>
                        <td>
                          <div className="whitespace-nowrap">보낸사람 주소 : {data.send}</div>
                          <div className="whitespace-nowrap">받는사람 주소 : {data.from}</div>
                          <div className="whitespace-nowrap">참조 주소 : {data.cc}</div>
                          <div className="whitespace-nowrap">메일 제목 : {data.subject}</div>
                          <div className="whitespace-nowrap">메일 내용 : {data.contents}</div>
                        </td>
                        <td>메일함으로 이동 : {data.move}</td>
                        <td className="text-center">
                          <ul className="flex items-center justify-center gap-2">
                            <li>
                              <button type="button">수정</button>
                            </li>
                            <li>
                              <button type="button">삭제</button>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
