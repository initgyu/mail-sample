import { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import IconMenu from '../../../components/Icon/IconMenu';
import { useNavigate } from 'react-router-dom';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import Header from '../../../components/Settings/Header';
import SubMenu from '../../../components/Settings/Absence/SubMenu';

const Filter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('List'));
  });

  const [isShowMailMenu, setIsShowMailMenu] = useState(false);
  const [selectedSubTab, setSelectedSubTab] = useState('setting');
  const [searchText, setSearchText] = useState<any>('');

  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const tabChanged = (tabType: any) => {
    setIsShowMailMenu(false);
  };

  const [date1, setDate1] = useState<any>('2024-12-30');
  const [date2, setDate2] = useState<any>('2024-12-30');

  return (
    <div>
      <div className="flex gap-5 relative sm:h-[calc(100vh_-_110px)] h-full">
        <div className="panel p-0 flex-1 overflow-x-hidden h-full">
          <div className="relative">
            <Header headTab={'absence'} />

            <SubMenu subMenuTab={'setting'} />

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">부재중설정</div>
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
                <div className="pt-2 text-white-dark">부재 중에 메일을 보낸 사람에게 자동으로 답장을 보냅니다.</div>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">부재 기간</div>
              <div className="flex items-center gap-2 md:gap-2">
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

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">답장 내용</div>
              <div className="w-96">
                <textarea
                  id="description"
                  name="description"
                  className="form-textarea min-h-[130px]"
                  placeholder="자동 답장 내용"
                ></textarea>
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

export default Filter;
