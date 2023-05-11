import axios from "axios";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";

const Question = ({ className = "", appl_id, step }) => {
  const EduForm = useRef();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [saudara, setSaudara] = useState(2);
  const [anak, setAnak] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [loading, setLoading] = useState(false);

  const MySwal = withReactContent(Swal);
  const router = useRouter();
  const submitForm = async (e) => {
    e.preventDefault();
    let formdata = new FormData(EduForm.current);
    formdata.append("appl_id", appl_id);
    setLoading(true);
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/resume/questions", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res);
        // step(4);
        MySwal.fire({
          title: <strong>Success</strong>,
          html: <i>Data Terismpan</i>,
          icon: "success",
        }).then(() => {
          router.reload();
        });
      })
      .catch((err) => {
        console.log(err);
        MySwal.fire({
          title: <strong>Terjadi Kesalahan</strong>,
          html: <i>{`(${err?.response?.data.msg || "ERR NETWORK"}) `}</i>,
          icon: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className={`bg-muted ${className}`}>
      {loading && <Loader />}

      <div className='container mx-auto py-20'>
        <form action='' onSubmit={(e) => submitForm(e)} ref={EduForm}>
          <div class='space-y-12'>
            <div class={`border-b border-gray-900/10 pb-12`}>
              <div className='flex justify-between items-center'>
                <div className='flex-1'>
                  <h2 class='text-base font-semibold leading-7 text-gray-900'>
                    Riwayat Pekerjaan
                  </h2>
                  <p class='mt-1 text-sm leading-6 text-gray-600'>
                    Use a permanent address where you can receive mail.
                  </p>
                </div>
                <p className=''>step 5 / 5</p>
              </div>
              <div className='grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6 mt-10 mb-4'>
                <div class='col-span-3'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900 capitalize'>
                    Dari manakah anda mengetahui tentang perusahaan kami,
                    sehingga anda melamar pada perusahaan kami
                  </label>
                  <div class='mt-2'>
                    <textarea
                      rows={3}
                      required
                      type='text'
                      name='info_source'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-3'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900 capitalize'>
                    Apakah Anda mempunyai kenalan, Famili atau keluarga yang
                    bekerja di perusahaan ini.? (jika ya, Jelaskan)
                  </label>
                  <div class='mt-2'>
                    <textarea
                      rows={3}
                      required
                      type='text'
                      name='kenalan'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-3'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900 capitalize'>
                    Apakah anda pernah berhubungan dengan pihak berwajib karena
                    suatu kasus.? kejahatan (jika ya, Jelaskan)
                  </label>
                  <div class='mt-2'>
                    <textarea
                      rows={3}
                      required
                      type='text'
                      name='polisi'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-3'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900 capitalize'>
                    Berkeberatankah anda jika minta referensi kepada perusahaan
                    dimana anda pernah bekerja sebelumnya.? (jika ya, Jelaskan)
                  </label>
                  <div class='mt-2'>
                    <textarea
                      rows={3}
                      required
                      type='text'
                      name='referensi'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-3'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900 capitalize'>
                    Bersediakah anda menjalaani mas percobaan selama 3 bulan di
                    perusahaan ini.? (jika ya, Jelaskan)
                  </label>
                  <div class='mt-2'>
                    <textarea
                      rows={3}
                      required
                      type='text'
                      name='training'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-3'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900 capitalize'>
                    jika di terima bersediakah selalu tunduk pada peraturan
                    perusahaan yang berlaku.? (jika ya, Jelaskan)
                  </label>
                  <div class='mt-2'>
                    <textarea
                      rows={3}
                      required
                      type='text'
                      name='tunduk'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-3'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900 capitalize'>
                    senadainya boleh memilih, jenis pekerjaan atau begian apa
                    saja yang anda sukai.? (jika ya, Jelaskan)
                  </label>
                  <div class='mt-2'>
                    <textarea
                      rows={3}
                      required
                      type='text'
                      name='pekerjaan_disukai'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-3'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900 capitalize'>
                    senadainya boleh memilih, jenis pekerjaan atau begian apa
                    saja yang anda tidak sukai.? (jika ya, Jelaskan)
                  </label>
                  <div class='mt-2'>
                    <textarea
                      rows={3}
                      required
                      type='text'
                      name='pekerjaan_tidak_disukai'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900 capitalize'>
                    kerja shift apabila diperlukan
                  </label>
                  <div class='mt-2'>
                    <select
                      required
                      type='text'
                      name='shift'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                      <option value='N'>Tidak Kebaratan</option>
                      <option value='Y'>Kebaratan</option>
                    </select>
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900 capitalize'>
                    Ganti Pekerjaan (Rotasi)
                  </label>
                  <div class='mt-2'>
                    <select
                      required
                      type='text'
                      name='rotasi'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                      <option value='N'>Tidak Kebaratan</option>
                      <option value='Y'>Kebaratan</option>
                    </select>
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900 capitalize'>
                    Lembur apabila diperlukan
                  </label>
                  <div class='mt-2'>
                    <select
                      required
                      type='text'
                      name='lembur'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                      <option value='N'>Tidak Kebaratan</option>
                      <option value='Y'>Kebaratan</option>
                    </select>
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900 capitalize'>
                    kerja malam apabila di perlukan
                  </label>
                  <div class='mt-2'>
                    <select
                      required
                      type='text'
                      name='malam'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                      <option value='N'>Tidak Kebaratan</option>
                      <option value='Y'>Kebaratan</option>
                    </select>
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900 capitalize'>
                    perjalanan keluar kota
                  </label>
                  <div class='mt-2'>
                    <select
                      required
                      type='text'
                      name='keluar_kota'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                      <option value='N'>Tidak Kebaratan</option>
                      <option value='Y'>Kebaratan</option>
                    </select>
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900 capitalize'>
                    Ditempatkan diluar kota
                  </label>
                  <div class='mt-2'>
                    <select
                      required
                      type='text'
                      name='diluar_kota'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                      <option value='N'>Tidak Kebaratan</option>
                      <option value='Y'>Kebaratan</option>
                    </select>
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900 capitalize'>
                    kerja diluar hari kerja / hari libur
                  </label>
                  <div class='mt-2'>
                    <select
                      required
                      type='text'
                      name='kerja_libur'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                      <option value='N'>Tidak Kebaratan</option>
                      <option value='Y'>Kebaratan</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='mt-6 flex items-center justify-end gap-x-6'>
            <button
              type='submit'
              class={`rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}>
              Simpan
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Question;
