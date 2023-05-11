import axios from "axios";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Family = ({ className = "", appl_id, step }) => {
  const EduForm = useRef();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [saudara, setSaudara] = useState(2);
  const [anak, setAnak] = useState(1);
  const [sosial, setSosial] = useState(1);

  const MySwal = withReactContent(Swal);

  const submitForm = async (e) => {
    e.preventDefault();
    let formdata = new FormData(EduForm.current);
    formdata.append("appl_id", appl_id);
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/resume/family", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res);
        step(4);
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
                    Susunan Keluarga & Kontak
                  </h2>
                  <p class='mt-1 text-sm leading-6 text-gray-600'>
                    Use a permanent address where you can receive mail.
                  </p>
                </div>
                <p className=''>step 3 / 5</p>
              </div>
              <div class='mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6 mb-4'>
                <h2 class='text-base font-semibold leading-7 text-gray-900 col-span-2 sm:col-span-6'>
                  Keluarga
                </h2>

                {Array.apply(0, Array(saudara)).map(function (x, i) {
                  return (
                    <>
                      <div class='col-span-2'>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Hubungan
                        </label>
                        <div class='mt-2'>
                          <select
                            name='hubungan'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                            <option value='ayah'>AYAH</option>
                            <option value='ibu'>IBU</option>
                            <option value='saudara'>SAUDARA</option>
                          </select>
                        </div>
                      </div>
                      <div class='col-span-2'>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Nama
                        </label>
                        <div class='mt-2'>
                          <input
                            required
                            type='text'
                            name='nama_keluarga'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <div class=''>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Gender
                        </label>
                        <div class='mt-2'>
                          <select
                            name='gender'
                            required
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                            <option value=''>pilih satu</option>
                            <option value='M'>Laki Laki</option>
                            <option value='F'>Perempuan</option>
                          </select>
                        </div>
                      </div>
                      <div class=''>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Usia
                        </label>
                        <div class='mt-2'>
                          <input
                            type='text'
                            required
                            name='usia'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <div class=''>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Pendidikan Terakhir
                        </label>
                        <div class='mt-2'>
                          <select
                            name='pendidikan'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                            <option value=''>Tidak Sekolah</option>
                            <option value='SD'>SD</option>
                            <option value='SMP'>SMP</option>
                            <option value='SMA'>SMA</option>
                            <option value='D3'>D3</option>
                            <option value='D4'>D4</option>
                            <option value='S1'>S1</option>
                            <option value='S2'>S2</option>
                            <option value='S3'>S3</option>
                          </select>
                        </div>
                      </div>
                      <div class='col-span-2'>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Jabatan di Pekerjaan Terakhir
                        </label>
                        <div class='mt-2'>
                          <input
                            type='text'
                            required
                            name='jabatan'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <div class='col-span-2'>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Perusahaan
                        </label>
                        <div class='mt-2'>
                          <input
                            type='text'
                            required
                            name='perusahaan'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                    </>
                  );
                })}
                <div className='col-span-2 sm:col-span-6 flex justify-end space-x-3'>
                  <button
                    type='button'
                    className=''
                    onClick={() => setSaudara(saudara - 1)}>
                    hapus
                  </button>
                  <button
                    type='button'
                    className='rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
                    onClick={() => setSaudara(saudara + 1)}>
                    tambah
                  </button>
                </div>
              </div>

              <div class='mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6 mb-4'>
                <h2 class='text-base font-semibold leading-7 text-gray-900 col-span-2 sm:col-span-6'>
                  Pasangan & Anak
                </h2>

                {Array.apply(0, Array(anak)).map(function (x, i) {
                  return (
                    <>
                      <div class='col-span-2'>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Hubungan
                        </label>
                        <div class='mt-2'>
                          <select
                            name='hubungan'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                            <option value='suami'>SUAMI</option>
                            <option value='istri'>ISTRI</option>
                            <option value='anak'>ANAK</option>
                          </select>
                        </div>
                      </div>
                      <div class='col-span-2'>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Nama
                        </label>
                        <div class='mt-2'>
                          <input
                            required
                            type='text'
                            name='nama_keluarga'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <div class=''>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Gender
                        </label>
                        <div class='mt-2'>
                          <select
                            name='gender'
                            required
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                            <option value=''>pilih satu</option>
                            <option value='M'>Laki Laki</option>
                            <option value='F'>Perempuan</option>
                          </select>
                        </div>
                      </div>
                      <div class=''>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Usia
                        </label>
                        <div class='mt-2'>
                          <input
                            type='text'
                            required
                            name='usia'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <div class=''>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Pendidikan Terakhir
                        </label>
                        <div class='mt-2'>
                          <select
                            name='pendidikan'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                            <option value=''>Tidak Sekolah</option>
                            <option value='SD'>SD</option>
                            <option value='SMP'>SMP</option>
                            <option value='SMA'>SMA</option>
                            <option value='D3'>D3</option>
                            <option value='D4'>D4</option>
                            <option value='S1'>S1</option>
                            <option value='S2'>S2</option>
                            <option value='S3'>S3</option>
                          </select>
                        </div>
                      </div>
                      <div class='col-span-2'>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Jabatan di Pekerjaan Terakhir
                        </label>
                        <div class='mt-2'>
                          <input
                            type='text'
                            required
                            name='jabatan'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <div class='col-span-2'>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Perusahaan
                        </label>
                        <div class='mt-2'>
                          <input
                            type='text'
                            required
                            name='perusahaan'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                    </>
                  );
                })}
                <div className='col-span-2 sm:col-span-6 flex justify-end space-x-3'>
                  <button
                    type='button'
                    className=''
                    onClick={() => setAnak(anak - 1)}>
                    hapus
                  </button>
                  <button
                    type='button'
                    className='rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
                    onClick={() => setAnak(anak + 1)}>
                    tambah
                  </button>
                </div>
              </div>

              <div class='mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-8 mb-4'>
                <h2 class='text-base font-semibold leading-7 text-gray-900 col-span-2 sm:col-span-8 capitalize'>
                  Kepada Siapa kami meminta referensi lengkap tentang diri anda
                </h2>

                {Array.apply(0, Array(2)).map(function (x, i) {
                  return (
                    <>
                      <div class='col-span-2'>
                        <input type='hidden' name='tipe' value='REF' />
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Nama
                        </label>
                        <div class='mt-2'>
                          <input
                            required
                            type='text'
                            name='cont_nama'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>

                      <div class='col-span-2'>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Alamat/Telepon
                        </label>
                        <div class='mt-2'>
                          <input
                            required
                            type='text'
                            name='cont_alamat'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <div class='col-span-2'>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Jabatan
                        </label>
                        <div class='mt-2'>
                          <input
                            required
                            type='text'
                            name='cont_jabatan'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <div class='col-span-2'>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Hubungan
                        </label>
                        <div class='mt-2'>
                          <input
                            required
                            type='text'
                            name='cont_hubungan'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>

              <div class='mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-8 mb-4'>
                <h2 class='text-base font-semibold leading-7 text-gray-900 col-span-2 sm:col-span-8 capitalize'>
                  Orang yang dapat dihubungisegera dalam keadaan mendesak /
                  darurat
                </h2>

                {Array.apply(0, Array(2)).map(function (x, i) {
                  return (
                    <>
                      <div class='col-span-2'>
                        <input type='hidden' name='tipe' value='EME' />
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Nama
                        </label>
                        <div class='mt-2'>
                          <input
                            required
                            type='text'
                            name='cont_nama'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>

                      <div class='col-span-2'>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Alamat/Telepon
                        </label>
                        <div class='mt-2'>
                          <input
                            required
                            type='text'
                            name='cont_alamat'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <div class='col-span-2'>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Jabatan
                        </label>
                        <div class='mt-2'>
                          <input
                            required
                            type='text'
                            name='cont_jabatan'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <div class='col-span-2'>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Hubungan
                        </label>
                        <div class='mt-2'>
                          <input
                            required
                            type='text'
                            name='cont_hubungan'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>

              <div class='mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-8 mb-4'>
                <h2 class='text-base font-semibold leading-7 text-gray-900 col-span-2 sm:col-span-8 capitalize'>
                  Kegiatan Sosial
                </h2>

                {Array.apply(0, Array(sosial)).map(function (x, i) {
                  return (
                    <>
                      <div class='col-span-2'>
                        <input type='hidden' name='tipe' value='SOS' />
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Organisasi
                        </label>
                        <div class='mt-2'>
                          <input
                            required
                            type='text'
                            name='cont_nama'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>

                      <div class='col-span-2'>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Jenis Kegiatan
                        </label>
                        <div class='mt-2'>
                          <input
                            required
                            type='text'
                            name='cont_alamat'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <div class='col-span-2'>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Jabatan
                        </label>
                        <div class='mt-2'>
                          <input
                            required
                            type='text'
                            name='cont_jabatan'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                      <div class='col-span-2'>
                        <label
                          for='full-name'
                          class='block text-sm font-medium leading-6 text-gray-900'>
                          Tahun
                        </label>
                        <div class='mt-2'>
                          <input
                            required
                            type='text'
                            name='cont_hubungan'
                            class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                    </>
                  );
                })}
                <div className='col-span-2 sm:col-span-8 flex justify-end space-x-3'>
                  <button
                    type='button'
                    className=''
                    onClick={() => setSosial(sosial - 1)}>
                    hapus
                  </button>
                  <button
                    type='button'
                    className='rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
                    onClick={() => setSosial(sosial + 1)}>
                    tambah
                  </button>
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

export default Family;
