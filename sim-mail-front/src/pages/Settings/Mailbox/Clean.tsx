import { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import IconMenu from '../../../components/Icon/IconMenu';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import Header from '../../../components/Settings/Header';
import SubMenu from '../../../components/Settings/Mailbox/SubMenu';

const Clean = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('List'));
  });

  const [isShowMailMenu, setIsShowMailMenu] = useState(false);
  const [selectedTab, setSelectedTab] = useState('mailbox');
  const [selectedSubTab, setSelectedSubTab] = useState('clean');
  const [searchText, setSearchText] = useState<any>('');

  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab, selectedSubTab, searchText]);

  const tabChanged = (tabType: any) => {
    setIsShowMailMenu(false);
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

  const options2 = [
    { value: 'option1', label: '받은메일함' },
    { value: 'option2', label: '보낸메일함' },
    { value: 'option3', label: '임시메일함' },
    { value: 'option4', label: '내게쓴메일함' },
    { value: 'option6', label: '개인메일함1' },
    { value: 'option7', label: '개인메일함2' },
    { value: 'option8', label: '개인메일함3' },
  ];

  const [date1, setDate1] = useState<any>('2024-12-30');
  const [date2, setDate2] = useState<any>('2024-12-30');

  return (
    <div>
      <div className="flex gap-5 relative sm:h-[calc(100vh_-_110px)] h-full">
        <div className="panel p-0 flex-1 overflow-x-hidden h-full">
          <div className="relative">
            <Header headTab={'mailbox'} />

            <SubMenu subMenuTab={'clean'} />

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">스팸메일 보관 기간</div>
              <div className="flex items-center gap-4 md:gap-4">
                <div className="w-60">
                  <Select defaultValue={options1[0]} options={options1} isSearchable={false} />
                </div>
                <label className="inline-flex">
                  <input type="checkbox" className="form-checkbox peer" />
                  <span className="peer-checked:text-primary">중요메일 제외</span>
                </label>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">기간</div>
              <div className="flex flex-col w-full gap-4">
                <div className="flex items-center gap-2 md:gap-2">
                  <input type="radio" name="default_text_color1" className="form-radio peer" defaultChecked />

                  <div className="w-fit">
                    <Flatpickr
                      value={date1}
                      options={{ dateFormat: 'Y-m-d' }}
                      className="form-input"
                      onChange={(date) => setDate1(date)}
                    />
                  </div>

                  <div>이전에 받은 메일</div>
                </div>

                <div className="w-full">
                  <div className="h-px border-b border-white-light dark:border-[#1b2e4b]"></div>
                </div>

                <div className="flex items-center gap-2 md:gap-2">
                  <input type="radio" name="default_text_color1" className="form-radio text-primary peer" />
                  <div className="w-fit">
                    <Flatpickr
                      value={date1}
                      options={{ dateFormat: 'Y-m-d' }}
                      className="form-input"
                      onChange={(date) => setDate1(date)}
                    />
                  </div>
                  -
                  <div className="w-fit">
                    <Flatpickr
                      value={date2}
                      options={{ dateFormat: 'Y-m-d' }}
                      className="form-input"
                      onChange={(date) => setDate2(date)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">정리</div>
              <div className="flex flex-col w-full gap-4">
                <div className="flex items-center gap-2 md:gap-2">
                  <input type="radio" name="default_text_color2" className="form-radio peer" defaultChecked />

                  <div className="w-fit">
                    <div className="w-60">
                      <Select defaultValue={options2[0]} options={options2} isSearchable={false} />
                    </div>
                  </div>

                  <div>으로 이동</div>
                </div>

                <div className="w-full">
                  <div className="h-px border-b border-white-light dark:border-[#1b2e4b]"></div>
                </div>

                <div className="flex items-center gap-2 md:gap-2">
                  <input type="radio" name="default_text_color2" className="form-radio text-primary peer" />

                  <div>휴지통으로 이동</div>
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

export default Clean;
