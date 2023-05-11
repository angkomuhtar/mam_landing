import axios from "axios";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";

const Experience = ({ className = "", appl_id, step }) => {
  const EduForm = useRef();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [saudara, setSaudara] = useState(2);
  const [anak, setAnak] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [endDate2, setEndDate2] = useState(new Date());
  const [loading, setLoading] = useState(false);

  const MySwal = withReactContent(Swal);

  const submitForm = async (e) => {
    e.preventDefault();
    let formdata = new FormData(EduForm.current);
    formdata.append("appl_id", appl_id);
    formdata.append("mulai", [startDate, startDate2]);
    formdata.append("sampai", [endDate, endDate2]);
    setLoading(true);
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/resume/experience", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res);
        step(5);
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
                <p className=''>step 4 / 5</p>
              </div>
              <div className='grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6 mt-10 mb-4'>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Nama Perusahaan
                  </label>
                  <div class='mt-2'>
                    <input
                      required
                      type='text'
                      name='nama_perusahaan'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Jabatan Awal
                  </label>
                  <div class='mt-2'>
                    <input
                      required
                      type='text'
                      name='jabatan'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Jabatan Akhir
                  </label>
                  <div class='mt-2'>
                    <input
                      required
                      type='text'
                      name='jabatan_akhir'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class=''>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Mulai
                  </label>
                  <div class='mt-2'>
                    <ReactDatePicker
                      selected={startDate}
                      className='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      onChange={(date) => setStartDate(date)}
                      dateFormat='MMM yyyy'
                      showMonthYearPicker
                    />
                  </div>
                </div>
                <div class=''>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Sampai
                  </label>
                  <div class='mt-2'>
                    <ReactDatePicker
                      selected={endDate}
                      className='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      onChange={(date) => setEndDate(date)}
                      dateFormat='MMM yyyy'
                      showMonthYearPicker
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Jenis Usaha
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      required
                      name='jenis_usaha'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Jumlah Karyawan
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      required
                      name='jumlah_karyawan'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Nama Pemilik
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      required
                      name='nama_pemilik'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Nama Atasan Langsung
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      required
                      name='atasan_langsung'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Nomor Telpon Atasan
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      required
                      name='telp'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Uraian Tugas
                  </label>
                  <div class='mt-2'>
                    <textarea
                      type='text'
                      required
                      rows={3}
                      name='tugas'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Gaji Pokok
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      required
                      name='gapok'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Tunjangan Tetap
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      required
                      name='tuntep'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Tunjangan Tidak Tetap
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      required
                      name='tuntitep'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Take Home Pay
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      required
                      name='thp'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Alasan Berhenti
                  </label>
                  <div class='mt-2'>
                    <textarea
                      rows={3}
                      type='text'
                      required
                      name='alasan'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
              </div>

              <div className='grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6 mt-10 mb-4'>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Nama Perusahaan
                  </label>
                  <div class='mt-2'>
                    <input
                      required
                      type='text'
                      name='nama_perusahaan'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Jabatan Awal
                  </label>
                  <div class='mt-2'>
                    <input
                      required
                      type='text'
                      name='jabatan'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Jabatan Akhir
                  </label>
                  <div class='mt-2'>
                    <input
                      required
                      type='text'
                      name='jabatan_akhir'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class=''>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Mulai
                  </label>
                  <div class='mt-2'>
                    <ReactDatePicker
                      selected={startDate2}
                      className='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      onChange={(date) => setStartDate2(date)}
                      dateFormat='MMM yyyy'
                      showMonthYearPicker
                    />
                  </div>
                </div>
                <div class=''>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Sampai
                  </label>
                  <div class='mt-2'>
                    <ReactDatePicker
                      selected={endDate2}
                      className='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      onChange={(date) => setEndDate2(date)}
                      dateFormat='MMM yyyy'
                      showMonthYearPicker
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Jenis Usaha
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      required
                      name='jenis_usaha'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Jumlah Karyawan
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      required
                      name='jumlah_karyawan'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Nama Pemilik
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      required
                      name='nama_pemilik'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Nama Atasan Langsung
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      required
                      name='atasan_langsung'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Nomor Telpon Atasan
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      required
                      name='telp'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Uraian Tugas
                  </label>
                  <div class='mt-2'>
                    <textarea
                      type='text'
                      required
                      rows={3}
                      name='tugas'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Gaji Pokok
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      required
                      name='gapok'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Tunjangan Tetap
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      required
                      name='tuntep'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Tunjangan Tidak Tetap
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      required
                      name='tuntitep'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Take Home Pay
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      required
                      name='thp'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-2'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Alasan Berhenti
                  </label>
                  <div class='mt-2'>
                    <textarea
                      rows={3}
                      type='text'
                      required
                      name='alasan'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='mt-6 flex items-center justify-end gap-x-6'>
            <button
              type='submit'
              class={`rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600`}>
              Selanjutnya
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Experience;
