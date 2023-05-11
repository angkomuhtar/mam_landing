import axios from "axios";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Education = ({ className = "", appl_id, step }) => {
  const EduForm = useRef();
  const [pendidikan, setPendidikan] = useState(3);
  const MySwal = withReactContent(Swal);
  const submitForm = async (e) => {
    e.preventDefault();
    let formdata = new FormData(EduForm.current);
    formdata.append("appl_id", appl_id);
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/resume/education", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res);
        step(3);
      })
      .catch((err) => {
        console.log(err);
        MySwal.fire({
          title: <strong>Terjadi Kesalahan</strong>,
          html: <i>{`(${err.response.data.msg || "ERR"}) `}</i>,
          icon: "error",
        });
      });
  };

  return (
    <section className={`bg-muted ${className}`}>
      <div className='container mx-auto py-20'>
        <form action='' onSubmit={(e) => submitForm(e)} ref={EduForm}>
          <div class='space-y-12'>
            <div class={`border-b border-gray-900/10 pb-12`}>
              <div className='flex justify-between items-center'>
                <div className='flex-1'>
                  <h2 class='text-base font-semibold leading-7 text-gray-900'>
                    Riwayat Pendidikan
                  </h2>
                  <p class='mt-1 text-sm leading-6 text-gray-600'>
                    Use a permanent address where you can receive mail.
                  </p>
                </div>
                <p className=''>step 2 / 5</p>
              </div>
              <div class='mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6 mb-4'>
                <h2 class='text-base font-semibold leading-7 text-gray-900 col-span-2 sm:col-span-6'>
                  Pendidikan Formal
                </h2>

                {Array.apply(0, Array(pendidikan)).map(function (x, i) {
                  return (
                    <>
                      <div class='col-span-2'>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Jenjang Pendidikan
                        </label>
                        <div class='mt-2'>
                          <select
                            name='tingkat'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                            <option value='SD'>Sekolah Dasar</option>
                            <option value='SMP'>
                              Sekolah Menengah Pertama
                            </option>
                            <option value='SMA'>Sekolah Menengah Atas</option>
                            <option value='D3'>Diploma</option>
                            <option value='S1'>Strata 1</option>
                            <option value='S2'>Strata 2</option>
                            <option value='S3'>Strata 3</option>
                          </select>
                        </div>
                      </div>
                      <div class='col-span-2'>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Nama Instansi
                        </label>
                        <div class='mt-2'>
                          <input
                            type='text'
                            required
                            name='nama'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <div class='col-span-2'>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Kota
                        </label>
                        <div class='mt-2'>
                          <input
                            type='text'
                            required
                            name='kota'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <div class='col-span-2'>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Jurusan
                        </label>
                        <div class='mt-2'>
                          <input
                            type='text'
                            required
                            name='jurusan'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <div class=''>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Tahun Masuk
                        </label>
                        <div class='mt-2'>
                          <input
                            type='text'
                            required
                            name='tahun_mulai'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <div class=''>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Tahun keluar
                        </label>
                        <div class='mt-2'>
                          <input
                            type='text'
                            name='tahun_selesai'
                            required
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <div class=''>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Lulus/Tidak
                        </label>
                        <div class='mt-2'>
                          <select
                            name='lulus'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                            <option value='Y'>Lulus</option>
                            <option value='N'>Tidak</option>
                          </select>
                        </div>
                      </div>
                    </>
                  );
                })}
                <div class='col-span-2 sm:col-span-6 gap-3 flex justify-end'>
                  <button
                    type='button'
                    className=''
                    onClick={() => setPendidikan(pendidikan - 1)}>
                    hapus
                  </button>
                  <button
                    type='button'
                    className='rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
                    onClick={() => setPendidikan(pendidikan + 1)}>
                    tambah
                  </button>
                </div>
                <div class='col-span-2 sm:col-span-3'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Alasan Memilih Jurusan Akademik Setelah lulus SMA/SMK
                  </label>
                  <div class='mt-2'>
                    <textarea
                      type='text'
                      rows='3'
                      required
                      name='alasan_jurusan'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div class='col-span-2 sm:col-span-3'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Alasan Tidak Menyelesaikan Pendidikan Akademik
                  </label>
                  <div class='mt-2'>
                    <textarea
                      type='text'
                      rows='3'
                      name='alasan_putus'
                      required
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
              </div>

              <div class='mt-10 mb-4'>
                <h2 class='text-base font-semibold leading-7 text-gray-900 sm:col-span-6 mb-6'>
                  Pendidikan Non Formal
                </h2>
                <div className='grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6 mb-6'>
                  <div class='sm:col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Bidang/Jenis
                    </label>
                    <div class='mt-2'>
                      <input
                        type='text'
                        name='tipe_kursus'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div class='sm:col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Penyelenggara
                    </label>
                    <div class='mt-2'>
                      <input
                        type='text'
                        name='penyelenggara'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div class='sm:col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Kota
                    </label>
                    <div class='mt-2'>
                      <input
                        type='text'
                        name='kota_kursus'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div class='sm:col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Lama Kursus
                    </label>
                    <div class='mt-2'>
                      <input
                        type='text'
                        name='lama_kursus'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div class='sm:col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Tahun
                    </label>
                    <div class='mt-2'>
                      <input
                        type='text'
                        name='tahun_kursus'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div class='sm:col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Di Bayar oleh
                    </label>
                    <div class='mt-2'>
                      <input
                        type='text'
                        name='bayar_kursus'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6 mb-6'>
                  <div class='sm:col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Bidang/Jenis
                    </label>
                    <div class='mt-2'>
                      <input
                        type='text'
                        name='tipe_kursus'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div class='sm:col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Penyelenggara
                    </label>
                    <div class='mt-2'>
                      <input
                        type='text'
                        name='penyelenggara'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div class='sm:col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Kota
                    </label>
                    <div class='mt-2'>
                      <input
                        type='text'
                        name='kota_kursus'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div class='sm:col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Lama Kursus
                    </label>
                    <div class='mt-2'>
                      <input
                        type='text'
                        name='lama_kursus'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div class='sm:col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Tahun
                    </label>
                    <div class='mt-2'>
                      <input
                        type='text'
                        name='tahun_kursus'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div class='sm:col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Di Bayar oleh
                    </label>
                    <div class='mt-2'>
                      <input
                        type='text'
                        name='bayar_kursus'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6 mb-6'>
                  <div class='sm:col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Bidang/Jenis
                    </label>
                    <div class='mt-2'>
                      <input
                        type='text'
                        name='tipe_kursus'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div class='sm:col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Penyelenggara
                    </label>
                    <div class='mt-2'>
                      <input
                        type='text'
                        name='penyelenggara'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div class='sm:col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Kota
                    </label>
                    <div class='mt-2'>
                      <input
                        type='text'
                        name='kota_kursus'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div class='sm:col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Lama Kursus
                    </label>
                    <div class='mt-2'>
                      <input
                        type='text'
                        name='lama_kursus'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div class='sm:col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Tahun
                    </label>
                    <div class='mt-2'>
                      <input
                        type='text'
                        name='tahun_kursus'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div class='sm:col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Di Bayar oleh
                    </label>
                    <div class='mt-2'>
                      <input
                        type='text'
                        name='bayar_kursus'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class='mt-10 grid gap-x-6 gap-y-8 mb-4'>
                <h2 class='text-base font-semibold leading-7 text-gray-900'>
                  Pengetahuan bahasa & Komputer
                </h2>
                <div className='grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-8'>
                  <div class='col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Bahasa
                    </label>
                    <div class='mt-2'>
                      <select
                        name='macam_bahasa'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                        <option value='indonesia'>INDONESIA</option>
                      </select>
                    </div>
                  </div>
                  <div className='hidden sm:flex sm:col-span-6' />
                  <div class='col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      berbicara
                    </label>
                    <div class='mt-2'>
                      <select
                        name='bicara_bahasa'
                        required
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                        <option value=''>pilih salah satu</option>
                        <option value='baik'>Baik</option>
                        <option value='sedang'>Sedang</option>
                        <option value='kurang'>Kurang</option>
                        <option value='tidak_bisa'>Tidak Bisa</option>
                      </select>
                    </div>
                  </div>
                  <div class='col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Mendengar
                    </label>
                    <div class='mt-2'>
                      <select
                        required
                        name='dengar_bahasa'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                        <option value=''>pilih salah satu</option>
                        <option value='baik'>Baik</option>
                        <option value='sedang'>Sedang</option>
                        <option value='kurang'>Kurang</option>
                        <option value='tidak_bisa'>Tidak Bisa</option>
                      </select>
                    </div>
                  </div>
                  <div class='col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Menulis
                    </label>
                    <div class='mt-2'>
                      <select
                        name='tulis_bahasa'
                        required
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                        <option value=''>pilih salah satu</option>
                        <option value='baik'>Baik</option>
                        <option value='sedang'>Sedang</option>
                        <option value='kurang'>Kurang</option>
                        <option value='tidak_bisa'>Tidak Bisa</option>
                      </select>
                    </div>
                  </div>
                  <div class='col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Membaca
                    </label>
                    <div class='mt-2'>
                      <select
                        name='baca_bahasa'
                        required
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                        <option value=''>pilih salah satu</option>
                        <option value='baik'>Baik</option>
                        <option value='sedang'>Sedang</option>
                        <option value='kurang'>Kurang</option>
                        <option value='tidak_bisa'>Tidak Bisa</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-8'>
                  <div class='col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Bahasa
                    </label>
                    <div class='mt-2'>
                      <select
                        name='macam_bahasa'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                        <option value='inggris'>INGGRIS</option>
                      </select>
                    </div>
                  </div>
                  <div className='hidden sm:flex sm:col-span-6' />
                  <div class='col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      berbicara
                    </label>
                    <div class='mt-2'>
                      <select
                        name='bicara_bahasa'
                        required
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                        <option value=''>pilih salah satu</option>
                        <option value='baik'>Baik</option>
                        <option value='sedang'>Sedang</option>
                        <option value='kurang'>Kurang</option>
                        <option value='tidak_bisa'>Tidak Bisa</option>
                      </select>
                    </div>
                  </div>
                  <div class='col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Mendengar
                    </label>
                    <div class='mt-2'>
                      <select
                        required
                        name='dengar_bahasa'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                        <option value=''>pilih salah satu</option>
                        <option value='baik'>Baik</option>
                        <option value='sedang'>Sedang</option>
                        <option value='kurang'>Kurang</option>
                        <option value='tidak_bisa'>Tidak Bisa</option>
                      </select>
                    </div>
                  </div>
                  <div class='col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Menulis
                    </label>
                    <div class='mt-2'>
                      <select
                        name='tulis_bahasa'
                        required
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                        <option value=''>pilih salah satu</option>
                        <option value='baik'>Baik</option>
                        <option value='sedang'>Sedang</option>
                        <option value='kurang'>Kurang</option>
                        <option value='tidak_bisa'>Tidak Bisa</option>
                      </select>
                    </div>
                  </div>
                  <div class='col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Membaca
                    </label>
                    <div class='mt-2'>
                      <select
                        name='baca_bahasa'
                        required
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                        <option value=''>pilih salah satu</option>
                        <option value='baik'>Baik</option>
                        <option value='sedang'>Sedang</option>
                        <option value='kurang'>Kurang</option>
                        <option value='tidak_bisa'>Tidak Bisa</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-8'>
                  <div class='col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Bahasa
                    </label>
                    <div class='mt-2'>
                      <select
                        name='macam_bahasa'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                        <option value='mandarin'>MANDARIN</option>
                      </select>
                    </div>
                  </div>
                  <div className='hidden sm:flex sm:col-span-6' />
                  <div class='col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      berbicara
                    </label>
                    <div class='mt-2'>
                      <select
                        name='bicara_bahasa'
                        required
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                        <option value=''>pilih salah satu</option>
                        <option value='baik'>Baik</option>
                        <option value='sedang'>Sedang</option>
                        <option value='kurang'>Kurang</option>
                        <option value='tidak_bisa'>Tidak Bisa</option>
                      </select>
                    </div>
                  </div>
                  <div class='col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Mendengar
                    </label>
                    <div class='mt-2'>
                      <select
                        required
                        name='dengar_bahasa'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                        <option value=''>pilih salah satu</option>
                        <option value='baik'>Baik</option>
                        <option value='sedang'>Sedang</option>
                        <option value='kurang'>Kurang</option>
                        <option value='tidak_bisa'>Tidak Bisa</option>
                      </select>
                    </div>
                  </div>
                  <div class='col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Menulis
                    </label>
                    <div class='mt-2'>
                      <select
                        name='tulis_bahasa'
                        required
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                        <option value=''>pilih salah satu</option>
                        <option value='baik'>Baik</option>
                        <option value='sedang'>Sedang</option>
                        <option value='kurang'>Kurang</option>
                        <option value='tidak_bisa'>Tidak Bisa</option>
                      </select>
                    </div>
                  </div>
                  <div class='col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Membaca
                    </label>
                    <div class='mt-2'>
                      <select
                        name='baca_bahasa'
                        required
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                        <option value=''>pilih salah satu</option>
                        <option value='baik'>Baik</option>
                        <option value='sedang'>Sedang</option>
                        <option value='kurang'>Kurang</option>
                        <option value='tidak_bisa'>Tidak Bisa</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-8'>
                  <div class='col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Bahasa (Lainnya)
                    </label>
                    <div class='mt-2'>
                      <input
                        type='text'
                        name='macam_bahasa'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div className='hidden sm:flex sm:col-span-6' />
                  <div class='col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      berbicara
                    </label>
                    <div class='mt-2'>
                      <select
                        name='bicara_bahasa'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                        <option value=''>pilih salah satu</option>
                        <option value='baik'>Baik</option>
                        <option value='sedang'>Sedang</option>
                        <option value='kurang'>Kurang</option>
                        <option value='tidak_bisa'>Tidak Bisa</option>
                      </select>
                    </div>
                  </div>
                  <div class='col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Mendengar
                    </label>
                    <div class='mt-2'>
                      <select
                        name='dengar_bahasa'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                        <option value=''>pilih salah satu</option>
                        <option value='baik'>Baik</option>
                        <option value='sedang'>Sedang</option>
                        <option value='kurang'>Kurang</option>
                        <option value='tidak_bisa'>Tidak Bisa</option>
                      </select>
                    </div>
                  </div>
                  <div class='col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Menulis
                    </label>
                    <div class='mt-2'>
                      <select
                        name='tulis_bahasa'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                        <option value=''>pilih salah satu</option>
                        <option value='baik'>Baik</option>
                        <option value='sedang'>Sedang</option>
                        <option value='kurang'>Kurang</option>
                        <option value='tidak_bisa'>Tidak Bisa</option>
                      </select>
                    </div>
                  </div>
                  <div class='col-span-2'>
                    <label
                      for='full-name'
                      class='block text-sm font-medium leading-6 text-gray-900'>
                      Membaca
                    </label>
                    <div class='mt-2'>
                      <select
                        name='baca_bahasa'
                        class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                        <option value=''>pilih salah satu</option>
                        <option value='baik'>Baik</option>
                        <option value='sedang'>Sedang</option>
                        <option value='kurang'>Kurang</option>
                        <option value='tidak_bisa'>Tidak Bisa</option>
                      </select>
                    </div>
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

export default Education;
