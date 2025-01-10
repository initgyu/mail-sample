import { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconMenu from '../../components/Icon/IconMenu';
import AnimateHeight from 'react-animate-height';
import IconMinusCircle from '../../components/Icon/IconMinusCircle';
import IconPlusCircle from '../../components/Icon/IconPlusCircle';

const Write = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('Write'));
  });

  const defaultParams = {
    id: null,
    from: 'vristo@mail.com',
    to: '',
    cc: '',
    title: '',
    file: null,
    description: '',
    displayDescription: '',
  };

  const [isShowMailMenu, setIsShowMailMenu] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedTab, setSelectedTab] = useState('inbox');
  const [ids, setIds] = useState<any>([]);
  const [searchText, setSearchText] = useState<any>('');
  const [selectedMail, setSelectedMail] = useState<any>(null);
  const [params, setParams] = useState<any>(JSON.parse(JSON.stringify(defaultParams)));
  const [active1, setActive1] = useState<any>(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab, searchText]);

  const saveMail = (type: any, id: any) => {
    if (!params.to) {
      showMessage('To email address is required.', 'error');
      return false;
    }
    if (!params.title) {
      showMessage('Title of email is required.', 'error');
      return false;
    }

    let maxId = 0;
    let cDt = new Date();

    let obj: any = {
      id: maxId + 1,
      path: '',
      firstName: '',
      lastName: '',
      email: params.to,
      date: cDt.getMonth() + 1 + '/' + cDt.getDate() + '/' + cDt.getFullYear(),
      time: cDt.toLocaleTimeString(),
      title: params.title,
      displayDescription: params.displayDescription,
      type: 'draft',
      isImportant: false,
      group: '',
      isUnread: false,
      description: params.description,
      attachments: null,
    };
    if (params.file && params.file.length) {
      obj.attachments = [];
      for (let file of params.file) {
        let flObj = {
          name: file.name,
          size: getFileSize(file.size),
          type: getFileType(file.type),
        };
        obj.attachments.push(flObj);
      }
    }
    if (type === 'save' || type === 'save_reply' || type === 'save_forward') {
      //saved to draft
      obj.type = 'draft';
      showMessage('Mail has been saved successfully to draft.');
    } else if (type === 'send' || type === 'reply' || type === 'forward') {
      //saved to sent mail
      obj.type = 'sent_mail';
      showMessage('Mail has been sent successfully.');
    }

    setSelectedMail(null);
    setIsEdit(false);
  };

  const getFileSize = (file_type: any) => {
    let type = 'file';
    if (file_type.includes('image/')) {
      type = 'image';
    } else if (file_type.includes('application/x-zip')) {
      type = 'zip';
    }
    return type;
  };

  const getFileType = (total_bytes: number) => {
    let size = '';
    if (total_bytes < 1000000) {
      size = Math.floor(total_bytes / 1000) + 'KB';
    } else {
      size = Math.floor(total_bytes / 1000000) + 'MB';
    }
    return size;
  };

  const showMessage = (msg = '', type = 'success') => {
    const toast: any = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      customClass: { container: 'toast' },
    });
    toast.fire({
      icon: type,
      title: msg,
      padding: '10px 20px',
    });
  };

  return (
    <div>
      <div className="flex gap-5 relative sm:h-[calc(100vh_-_110px)] h-full">
        <div className="panel p-0 flex-1 overflow-x-hidden h-full">
          <div className="relative">
            <div className="py-4 px-6 flex items-center">
              <button
                type="button"
                className="xl:hidden hover:text-primary block ltr:mr-3 rtl:ml-3"
                onClick={() => setIsShowMailMenu(!isShowMailMenu)}
              >
                <IconMenu />
              </button>
              <h4 className="text-lg text-gray-600 dark:text-gray-400 font-medium">메일쓰기</h4>
            </div>

            <div className="h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <form className="p-6 grid gap-6">
              <div className="flex items-center">
                <button
                  type="button"
                  className="btn btn-primary ltr:mr-3 rtl:ml-3"
                  onClick={() => saveMail('send', params.id)}
                >
                  보내기
                </button>
                <button type="button" className="ltr:mr-3 rtl:ml-3" onClick={() => saveMail('save', null)}>
                  예약
                </button>
                <button type="button" className="ltr:mr-3 rtl:ml-3" onClick={() => saveMail('save', null)}>
                  임시저장
                </button>
                <button type="button" className="ltr:mr-3 rtl:ml-3" onClick={() => saveMail('save', null)}>
                  미리보기
                </button>
              </div>

              <div className="sm:flex justify-between items-center gap-5 md:gap-10">
                <label htmlFor="hrDefaultinput" className="min-w-20">
                  받는사람
                </label>
                <input type="email" placeholder="받는사람" className="form-input" />
              </div>

              <div>
                <div className="sm:flex justify-between items-center gap-5 md:gap-2">
                  <label htmlFor="hrDefaultinput" className="min-w-9">
                    참조
                  </label>
                  <div className="cursor-pointer mr-11" onClick={() => setActive1(active1 === 1 ? null : 1)}>
                    {active1 !== 1 ? (
                      <span className="shrink-0">
                        <IconPlusCircle duotone={false} />
                      </span>
                    ) : (
                      <span className="shrink-0">
                        <IconMinusCircle fill={true} />
                      </span>
                    )}
                  </div>
                  <input type="email" placeholder="참조" className="form-input" />
                </div>

                <AnimateHeight duration={300} height={active1 === 1 ? 'auto' : 0}>
                  <div className="sm:flex justify-between items-center gap-5 md:gap-10 mt-6">
                    <label htmlFor="hrDefaultinput" className="min-w-20">
                      숨은참조
                    </label>
                    <input type="email" placeholder="숨은참조" className="form-input" />
                  </div>
                </AnimateHeight>
              </div>

              <div className="sm:flex justify-between items-center gap-5 md:gap-10">
                <label htmlFor="hrDefaultinput" className="min-w-20">
                  제목
                </label>
                <input type="email" placeholder="제목" className="form-input" />
              </div>

              <div className="sm:flex justify-between items-center gap-5 md:gap-10">
                <label htmlFor="hrDefaultinput" className="min-w-20">
                  파일첨부
                </label>
                <input
                  type="file"
                  className="form-input flex-1 file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary"
                  multiple
                  accept="image/*,.zip,.pdf,.xls,.xlsx,.txt.doc,.docx"
                  required
                />
              </div>

              <div className="h-fit">
                <ReactQuill
                  theme="snow"
                  value={params.description || ''}
                  defaultValue={params.description || ''}
                  onChange={(content, delta, source, editor) => {
                    params.description = content;
                    params.displayDescription = editor.getText();
                    setParams({
                      ...params,
                    });
                  }}
                  style={{ minHeight: '200px' }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
