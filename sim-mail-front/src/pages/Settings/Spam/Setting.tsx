import { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import Header from '../../../components/Settings/Header';
import SubMenu from '../../../components/Settings/Spam/SubMenu';

const Setting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('List'));
  });

  const [isShowMailMenu, setIsShowMailMenu] = useState(false);
  const [selectedTab, setSelectedTab] = useState('spam');
  const [selectedSubTab, setSelectedSubTab] = useState('setting');
  const [searchText, setSearchText] = useState<any>('');

  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab, selectedSubTab, searchText]);

  const tabChanged = (tabType: any) => {
    setIsShowMailMenu(false);
  };

  const options1 = [
    { value: 'option1', label: '삭제 안함' },
    { value: 'option2', label: '15일' },
    { value: 'option3', label: '30일' },
    { value: 'option4', label: '40일' },
    { value: 'option4', label: '50일' },
  ];

  return (
    <div>
      <div className="flex gap-5 relative sm:h-[calc(100vh_-_110px)] h-full">
        <div className="panel p-0 flex-1 overflow-x-hidden h-full">
          <div className="relative">
            <Header headTab={'spam'} />

            <SubMenu subMenuTab={'setting'} />

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">스팸메일 자동 이동</div>
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
                  사용함으로 설정하면 스팸으로 의심되는 메일이 자동으로 스팸메일함으로 이동됩니다.
                </div>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">자동 분류 대상</div>
              <div className="flex flex-col">
                <div className="flex items-center gap-5 md:gap-10">
                  <label className="inline-flex">
                    <input type="checkbox" className="form-checkbox peer" />
                    <span className="peer-checked:text-primary">
                      받는사람, 참조(숨은참조)에 내 메일 주소가 없는 경우
                    </span>
                  </label>
                </div>

                <div className="flex items-center gap-5 md:gap-10">
                  <label className="inline-flex">
                    <input type="checkbox" className="form-checkbox peer" />
                    <span className="peer-checked:text-primary">제목 및 보낸사람이 모두 영문인 메일의 경우</span>
                  </label>
                </div>

                <div className="flex items-center gap-5 md:gap-10">
                  <label className="inline-flex">
                    <input type="checkbox" className="form-checkbox peer" defaultChecked />
                    <span className="peer-checked:text-primary">제목에 '광고'가 포함된 메일의 경우</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">스팸메일 자동 삭제</div>
              <div className="flex items-center gap-5 md:gap-10">
                <label className="inline-flex">
                  <input type="radio" name="default_text_color2" className="form-radio peer" defaultChecked />
                  <span className="peer-checked:text-primary">스팸메일함으로 이동</span>
                </label>

                <label className="inline-flex">
                  <input type="radio" name="default_text_color2" className="form-radio text-primary peer" />
                  <span className="peer-checked:text-primary">영구 삭제</span>
                </label>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">스팸메일 수신 차단</div>
              <div className="flex items-center gap-5 md:gap-10">
                <label className="inline-flex">
                  <input type="radio" name="default_text_color3" className="form-radio text-primary peer" />
                  <span className="peer-checked:text-primary">사용함</span>
                </label>

                <label className="inline-flex">
                  <input type="radio" name="default_text_color3" className="form-radio peer" defaultChecked />
                  <span className="peer-checked:text-primary">사용 안 함</span>
                </label>
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

export default Setting;
