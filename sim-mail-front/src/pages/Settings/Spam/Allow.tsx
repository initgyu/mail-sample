import { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Settings/Header';
import SubMenu from '../../../components/Settings/Spam/SubMenu';

const Allow = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('List'));
  });

  const [isShowMailMenu, setIsShowMailMenu] = useState(false);
  const [selectedTab, setSelectedTab] = useState('spam');
  const [selectedSubTab, setSelectedSubTab] = useState('allow');
  const [searchText, setSearchText] = useState<any>('');

  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab, selectedSubTab, searchText]);

  const tabChanged = (tabType: any) => {
    setIsShowMailMenu(false);
  };

  return (
    <div>
      <div className="flex gap-5 relative sm:h-[calc(100vh_-_110px)] h-full">
        <div className="panel p-0 flex-1 overflow-x-hidden h-full">
          <div className="relative">
            <Header headTab={'spam'} />

            <SubMenu subMenuTab={'allow'} />

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">수신허용 메일 주소/도메인 추가</div>
              <div className="flex flex-col">
                <label className="inline-flex items-center pt-2">
                  <div className="items-center pr-4 w-72">
                    <input type="email" placeholder="" className="form-input" />
                  </div>
                  <div className="items-center pr-4">
                    <button type="button" className="btn btn-outline-dark">
                      추가
                    </button>
                  </div>
                  <div className="items-center pr-4">
                    <button type="button" className="btn btn-outline-dark">
                      모두 삭제
                    </button>
                  </div>
                </label>
                <div className="mt-4 p-4 border-2 rounded-lg">
                  <ul className="h-48 overflow-auto">
                    <li>
                      <label className="inline-flex">
                        <input type="checkbox" className="form-checkbox peer" />
                        <span className="peer-checked:text-primary">test@naver.com</span>
                      </label>
                    </li>
                    <li>
                      <label className="inline-flex">
                        <input type="checkbox" className="form-checkbox peer" />
                        <span className="peer-checked:text-primary">test@naver.com</span>
                      </label>
                    </li>
                    <li>
                      <label className="inline-flex">
                        <input type="checkbox" className="form-checkbox peer" />
                        <span className="peer-checked:text-primary">test@naver.com</span>
                      </label>
                    </li>
                    <li>
                      <label className="inline-flex">
                        <input type="checkbox" className="form-checkbox peer" />
                        <span className="peer-checked:text-primary">test@naver.com</span>
                      </label>
                    </li>
                    <li>
                      <label className="inline-flex">
                        <input type="checkbox" className="form-checkbox peer" />
                        <span className="peer-checked:text-primary">test@naver.com</span>
                      </label>
                    </li>
                    <li>
                      <label className="inline-flex">
                        <input type="checkbox" className="form-checkbox peer" />
                        <span className="peer-checked:text-primary">test@naver.com</span>
                      </label>
                    </li>
                    <li>
                      <label className="inline-flex">
                        <input type="checkbox" className="form-checkbox peer" />
                        <span className="peer-checked:text-primary">test@naver.com</span>
                      </label>
                    </li>
                    <li>
                      <label className="inline-flex">
                        <input type="checkbox" className="form-checkbox peer" />
                        <span className="peer-checked:text-primary">test@naver.com</span>
                      </label>
                    </li>
                    <li>
                      <label className="inline-flex">
                        <input type="checkbox" className="form-checkbox peer" />
                        <span className="peer-checked:text-primary">test@naver.com</span>
                      </label>
                    </li>
                    <li>
                      <label className="inline-flex">
                        <input type="checkbox" className="form-checkbox peer" />
                        <span className="peer-checked:text-primary">test@naver.com</span>
                      </label>
                    </li>
                    <li>
                      <label className="inline-flex">
                        <input type="checkbox" className="form-checkbox peer" />
                        <span className="peer-checked:text-primary">test@naver.com</span>
                      </label>
                    </li>
                    <li>
                      <label className="inline-flex">
                        <input type="checkbox" className="form-checkbox peer" />
                        <span className="peer-checked:text-primary">test@naver.com</span>
                      </label>
                    </li>
                  </ul>
                  <div className="pt-4 flex justify-end items-end">
                    <div className="items-center">
                      <button type="button" className="btn btn-outline-dark">
                        선택 삭제
                      </button>
                    </div>
                  </div>
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

export default Allow;
