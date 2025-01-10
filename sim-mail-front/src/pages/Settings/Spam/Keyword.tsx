import { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Settings/Header';
import SubMenu from '../../../components/Settings/Spam/SubMenu';

const Keyword = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('List'));
  });

  const [isShowMailMenu, setIsShowMailMenu] = useState(false);
  const [selectedTab, setSelectedTab] = useState('spam');
  const [selectedSubTab, setSelectedSubTab] = useState('keyword');
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

            <SubMenu subMenuTab={'keyword'} />

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">스팸 키워드</div>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex items-center gap-5 md:gap-10">
                  <label className="inline-flex">
                    <input type="checkbox" className="form-checkbox peer" defaultChecked />
                    <span className="peer-checked:text-primary">[성인]</span>
                  </label>
                </div>

                <div className="flex items-center gap-5 md:gap-10">
                  <label className="inline-flex">
                    <input type="checkbox" className="form-checkbox peer" defaultChecked />
                    <span className="peer-checked:text-primary">(성인)</span>
                  </label>
                </div>

                <div className="flex items-center gap-5 md:gap-10">
                  <label className="inline-flex">
                    <input type="checkbox" className="form-checkbox peer" />
                    <span className="peer-checked:text-primary">[대출]</span>
                  </label>
                </div>

                <div className="flex items-center gap-5 md:gap-10">
                  <label className="inline-flex">
                    <input type="checkbox" className="form-checkbox peer" />
                    <span className="peer-checked:text-primary">(대출)</span>
                  </label>
                </div>

                <div className="flex items-center gap-5 md:gap-10">
                  <label className="inline-flex">
                    <input type="checkbox" className="form-checkbox peer" defaultChecked />
                    <span className="peer-checked:text-primary">[광고]</span>
                  </label>
                </div>

                <div className="flex items-center gap-5 md:gap-10">
                  <label className="inline-flex">
                    <input type="checkbox" className="form-checkbox peer" defaultChecked />
                    <span className="peer-checked:text-primary">(광고)</span>
                  </label>
                </div>

                <div className="flex items-center gap-5 md:gap-10">
                  <label className="inline-flex">
                    <input type="checkbox" className="form-checkbox peer" />
                    <span className="peer-checked:text-primary">[동의]</span>
                  </label>
                </div>

                <div className="flex items-center gap-5 md:gap-10">
                  <label className="inline-flex">
                    <input type="checkbox" className="form-checkbox peer" />
                    <span className="peer-checked:text-primary">(동의)</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">스팸 키워드 등록</div>
              <div className="flex flex-col">
                <label className="inline-flex items-center pt-2">
                  <div className="items-center pr-4">
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
                <div className="pt-2">
                  <div className="grid grid-cols-12 gap-2">
                    <span className="w-fit badge badge-outline-danger">성인 X</span>
                    <span className="w-fit badge badge-outline-danger">대출 X</span>
                    <span className="w-fit badge badge-outline-danger">광고 X</span>
                    <span className="w-fit badge badge-outline-danger">마약 X</span>
                    <span className="w-fit badge badge-outline-danger">포르노 X</span>
                    <span className="w-fit badge badge-outline-danger">성인 X</span>
                    <span className="w-fit badge badge-outline-danger">대출 X</span>
                    <span className="w-fit badge badge-outline-danger">광고 X</span>
                    <span className="w-fit badge badge-outline-danger">마약 X</span>
                    <span className="w-fit badge badge-outline-danger">포르노 X</span>
                    <span className="w-fit badge badge-outline-danger">성인 X</span>
                    <span className="w-fit badge badge-outline-danger">대출 X</span>
                    <span className="w-fit badge badge-outline-danger">광고 X</span>
                    <span className="w-fit badge badge-outline-danger">마약 X</span>
                    <span className="w-fit badge badge-outline-danger">포르노 X</span>
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

export default Keyword;
