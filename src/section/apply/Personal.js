import axios from "axios";
import React, { forwardRef, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Personal = ({ className = "", step, setid }) => {
  const [imagePrev, setImagePrev] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const formPer = useRef();
  const handleImage = (e) => {
    let image_as_base64 = URL.createObjectURL(e.target.files[0]);
    let image_as_files = e.target.files[0];
    setImagePrev(image_as_base64);
    setImgFile(image_as_files);
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const MySwal = withReactContent(Swal);

  const submitForm = async (data) => {
    let formdata = new FormData(formPer.current);
    formdata.append("photo", imgFile);
    axios
      .post("http://localhost:3002/v1/resume", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data.msg.id);
        step(2);
        setid(res.data.msg.id);
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
        <div class='space-y-12'>
          <div class={`border-b border-gray-900/10 pb-12`}>
            <div className='flex justify-between items-center'>
              <div className='flex-1'>
                <h2 class='text-base font-semibold leading-7 text-gray-900'>
                  Personal Information
                </h2>
                <p class='mt-1 text-sm leading-6 text-gray-600'>
                  Use a permanent address where you can receive mail.
                </p>
              </div>
              <p className=''>step 1 / 5</p>
            </div>
            <form onSubmit={handleSubmit(submitForm)} ref={formPer}>
              <div class='mt-10 grid grid-cols-1 sm:gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div class='sm:col-span-3'>
                  <label
                    for='full-name'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Nama Lengkap
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      {...register("nama", { required: true })}
                      aria-invalid={errors.nama ? "true" : "false"}
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                    {errors.nama && (
                      <p className='text-xs text-red-500 mt-1 mx-3 text-right'>
                        {errors.nama.message || "tidak boleh kosong"}
                      </p>
                    )}
                  </div>
                </div>
                <div class='sm:col-span-3'>
                  <label
                    for='position'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Posisi yang dilamar
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      name='position'
                      id='position'
                      autocomplete='given-name'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      {...register("position", { required: true })}
                      aria-invalid={errors.position ? "true" : "false"}
                    />
                    {errors.position && (
                      <p className='text-xs text-red-500 mt-1 mx-3 text-right'>
                        {errors.position.message || "tidak boleh kosong"}
                      </p>
                    )}
                  </div>
                </div>
                <div class='sm:col-span-3'>
                  <label
                    for='address'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Alamat Lengkap
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      name='address'
                      id='address'
                      autocomplete='given-name'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      {...register("address", { required: true })}
                      aria-invalid={errors.address ? "true" : "false"}
                    />
                    {errors.address && (
                      <p className='text-xs text-red-500 mt-1 mx-3 text-right'>
                        {errors.address.message || "tidak boleh kosong"}
                      </p>
                    )}
                  </div>
                </div>
                <div class='sm:col-span-3'>
                  <label
                    for='email'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Alamat Email
                  </label>
                  <div class='mt-2'>
                    <input
                      type='email'
                      name='email'
                      {...register("email", {
                        required: true,
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Email tidak benar",
                        },
                      })}
                      aria-invalid={errors.email ? "true" : "false"}
                      id='email'
                      autocomplete='email'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                    {errors.email && (
                      <p className='text-xs text-red-500 mt-1 mx-3 text-right'>
                        {errors.email.message || "tidak boleh kosong"}
                      </p>
                    )}
                  </div>
                </div>

                <div class='sm:col-span-3'>
                  <label
                    for='phone'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    No. telepon
                  </label>
                  <div class='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600'>
                    <span class='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>
                      +62
                    </span>
                    <input
                      type='text'
                      name='phone'
                      {...register("phone", {
                        required: true,
                        pattern: {
                          value: /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/,
                          message: "Nomor telpon tidak benar",
                        },
                        minLength: {
                          value: 8,
                          message: "Nomor telpon tidak benar",
                        },
                        maxLength: {
                          value: 13,
                          message: "Nomor telpon tidak benar",
                        },
                      })}
                      id='phone'
                      class='block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                      placeholder='8234xxxxx'
                    />
                  </div>
                  {errors.phone && (
                    <p className='text-xs text-red-500 mt-1 mx-3 text-right'>
                      {errors.phone.message || "tidak boleh kosong"}
                    </p>
                  )}
                </div>
                <div class='sm:col-span-3'>
                  <label
                    for='cover-photo'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Photo
                  </label>
                  <div class='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
                    <div class='flex justify-center items-center flex-col'>
                      <img
                        src={imagePrev}
                        alt=''
                        className={`${
                          !imagePrev && "hidden"
                        } aspect-[4/6] object-cover w-20 rounded-sm`}
                      />
                      <svg
                        class={`mx-auto h-12 w-12 text-gray-300 ${
                          imagePrev && "hidden"
                        }`}
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        aria-hidden='true'>
                        <path
                          fill-rule='evenodd'
                          d='M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z'
                          clip-rule='evenodd'
                        />
                      </svg>
                      <div class='mt-4 flex text-sm leading-6 text-gray-600'>
                        <label
                          for='file-upload'
                          class='relative text-center cursor-pointer rounded-md bg-none font-semibold text-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'>
                          <span>Upload a file</span>
                          <input
                            onChange={(e) => {
                              handleImage(e);
                            }}
                            id='file-upload'
                            name='photo'
                            type='file'
                            class='sr-only'
                          />
                        </label>
                      </div>
                      <p class='text-xs leading-5 text-gray-600'>
                        PNG, JPG up to 10MB
                      </p>
                    </div>
                  </div>
                </div>

                <div class='sm:col-span-2'>
                  <label class='block text-sm font-medium leading-6 text-gray-900'>
                    Kewarganegaraan
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      name='citizen'
                      id='warga_negara'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      {...register("citizen", { required: true })}
                      aria-invalid={errors.citizen ? "true" : "false"}
                    />
                    {errors.citizen && (
                      <p className='text-xs text-red-500 mt-1 mx-3 text-right'>
                        {errors.citizen.message || "tidak boleh kosong"}
                      </p>
                    )}
                  </div>
                </div>
                <div class='sm:col-span-2'>
                  <label class='block text-sm font-medium leading-6 text-gray-900'>
                    Agama
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      name='religion'
                      id='agama'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      {...register("religion", { required: true })}
                      aria-invalid={errors.religion ? "true" : "false"}
                    />
                    {errors.religion && (
                      <p className='text-xs text-red-500 mt-1 mx-3 text-right'>
                        {errors.religion.message || "tidak boleh kosong"}
                      </p>
                    )}
                  </div>
                </div>
                <div class='sm:col-span-2'>
                  <label class='block text-sm font-medium leading-6 text-gray-900'>
                    Hobby
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      name='hobby'
                      id='hobby'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      {...register("hobby", { required: true })}
                      aria-invalid={errors.hobby ? "true" : "false"}
                    />
                    {errors.hobby && (
                      <p className='text-xs text-red-500 mt-1 mx-3 text-right'>
                        {errors.hobby.message || "tidak boleh kosong"}
                      </p>
                    )}
                  </div>
                </div>
                <div class='sm:col-span-4'>
                  <label class='block text-sm font-medium leading-6 text-gray-900'>
                    No KTP
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      name='id_card'
                      id='ktp'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      {...register("id_card", { required: true })}
                      aria-invalid={errors.id_card ? "true" : "false"}
                    />
                    {errors.id_card && (
                      <p className='text-xs text-red-500 mt-1 mx-3 text-right'>
                        {errors.id_card.message || "tidak boleh kosong"}
                      </p>
                    )}
                  </div>
                </div>
                <div class=''>
                  <label class='block text-sm font-medium leading-6 text-gray-900'>
                    Tinggi (cm)
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      name='height'
                      id='ktp'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      {...register("height", { required: true })}
                      aria-invalid={errors.height ? "true" : "false"}
                    />
                    {errors.height && (
                      <p className='text-xs text-red-500 mt-1 mx-3 text-right'>
                        {errors.height.message || "tidak boleh kosong"}
                      </p>
                    )}
                  </div>
                </div>
                <div class=''>
                  <label class='block text-sm font-medium leading-6 text-gray-900'>
                    Berat (Kg)
                  </label>
                  <div class='mt-2'>
                    <input
                      type='text'
                      name='weight'
                      id='ktp'
                      class='block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      {...register("weight", { required: true })}
                      aria-invalid={errors.weight ? "true" : "false"}
                    />
                    {errors.weight && (
                      <p className='text-xs text-red-500 mt-1 mx-3 text-right'>
                        {errors.weight.message || "tidak boleh kosong"}
                      </p>
                    )}
                  </div>
                </div>
                <div class='sm:col-span-2'>
                  <label
                    for='phone'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Jenis Kelamin
                  </label>
                  <div class='mt-6'>
                    <div class='flex items-center gap-x-3 mb-5'>
                      <input
                        id='push-everything'
                        name='gender'
                        type='radio'
                        value='M'
                        checked
                        class='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      />
                      <label
                        for='push-everything'
                        class='block text-sm font-medium leading-6 text-gray-900'>
                        Pria
                      </label>
                    </div>
                    <div class='flex items-center gap-x-3 mb-5'>
                      <input
                        id='push-email'
                        name='gender'
                        value='F'
                        type='radio'
                        class='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      />
                      <label
                        for='push-email'
                        class='block text-sm font-medium leading-6 text-gray-900'>
                        Wanita
                      </label>
                    </div>
                  </div>
                </div>

                <div class='sm:col-span-2'>
                  <label
                    for='phone'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Status Perkawinan
                  </label>
                  <div class='mt-6 grid grid-cols-2'>
                    <div class='flex items-center gap-x-3 mb-5'>
                      <input
                        id='push-everything'
                        name='married'
                        value='single'
                        type='radio'
                        checked
                        class='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      />
                      <label
                        for='push-everything'
                        class='block text-sm font-medium leading-6 text-gray-900'>
                        Belum Kawin
                      </label>
                    </div>
                    <div class='flex items-center gap-x-3 mb-5'>
                      <input
                        id='push-email'
                        name='married'
                        value='divorcee'
                        type='radio'
                        class='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      />
                      <label
                        for='push-email'
                        class='block text-sm font-medium leading-6 text-gray-900'>
                        Janda/Duda
                      </label>
                    </div>
                    <div class='flex items-center gap-x-3 mb-5'>
                      <input
                        id='push-nothing'
                        name='married'
                        value='married'
                        type='radio'
                        class='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      />
                      <label
                        for='push-nothing'
                        class='block text-sm font-medium leading-6 text-gray-900'>
                        Kawin
                      </label>
                    </div>
                    <div class='flex items-center gap-x-3 mb-5'>
                      <input
                        id='push-nothing'
                        name='married'
                        type='radio'
                        class='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      />
                      <label
                        for='push-nothing'
                        class='block text-sm font-medium leading-6 text-gray-900'>
                        Cerai
                      </label>
                    </div>
                  </div>
                </div>

                <div class='sm:col-span-2'>
                  <label
                    for='phone'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Tempat Tinggal
                  </label>
                  <div class='mt-6 grid grid-cols-2'>
                    <div class='flex items-center gap-x-3 mb-5'>
                      <input
                        id='push-everything'
                        name='residence'
                        value='own'
                        type='radio'
                        checked
                        class='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      />
                      <label
                        for='push-everything'
                        class='block text-sm font-medium leading-6 text-gray-900'>
                        Milik Sendiri
                      </label>
                    </div>
                    <div class='flex items-center gap-x-3 mb-5'>
                      <input
                        id='push-email'
                        name='residence'
                        value='parents'
                        type='radio'
                        class='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      />
                      <label
                        for='push-email'
                        class='block text-sm font-medium leading-6 text-gray-900'>
                        Milik Orang Tua
                      </label>
                    </div>
                    <div class='flex items-center gap-x-3 mb-5'>
                      <input
                        id='push-nothing'
                        name='residence'
                        value='office'
                        type='radio'
                        class='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      />
                      <label
                        for='push-nothing'
                        class='block text-sm font-medium leading-6 text-gray-900'>
                        Milik Kantor
                      </label>
                    </div>
                    <div class='flex items-center gap-x-3 mb-5'>
                      <input
                        id='push-nothing'
                        name='residence'
                        value='rent'
                        type='radio'
                        class='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      />
                      <label
                        for='push-nothing'
                        class='block text-sm font-medium leading-6 text-gray-900'>
                        Indekos
                      </label>
                    </div>
                  </div>
                </div>
                <div class='sm:col-span-2'>
                  <label
                    for='phone'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Kondisi Kesehatan
                  </label>
                  <div class='mt-6 grid grid-cols-2'>
                    <div class='flex items-center gap-x-3 mb-5'>
                      <input
                        id='push-everything'
                        name='health'
                        type='radio'
                        value='seldom'
                        checked
                        class='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      />
                      <label
                        for='push-everything'
                        class='block text-sm font-medium leading-6 text-gray-900'>
                        Jarang Sakit
                      </label>
                    </div>
                    <div class='flex items-center gap-x-3 mb-5'>
                      <input
                        id='push-email'
                        name='health'
                        type='radio'
                        value='sometimes'
                        class='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      />
                      <label
                        for='push-email'
                        class='block text-sm font-medium leading-6 text-gray-900'>
                        Kadang kadang Sakit
                      </label>
                    </div>
                    <div class='flex items-center gap-x-3 mb-5'>
                      <input
                        id='push-nothing'
                        name='health'
                        type='radio'
                        value='often'
                        class='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      />
                      <label
                        for='push-nothing'
                        class='block text-sm font-medium leading-6 text-gray-900'>
                        Sering Sakit
                      </label>
                    </div>
                  </div>
                </div>

                <div class='sm:col-span-2'>
                  <label
                    for='about'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Pantangan Sakit Keras atau Kecelakaan Berat yg Pernah Ada
                  </label>
                  <div class='mt-2'>
                    <textarea
                      id='about'
                      name='pantangan'
                      rows='3'
                      {...register("pantangan", { required: true })}
                      aria-invalid={errors.pantangan ? "true" : "false"}
                      class='bg-transparent block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'></textarea>
                    {errors.pantangan && (
                      <p className='text-xs text-red-500 mt-1 mx-3 text-right'>
                        {errors.pantangan.message || "tidak boleh kosong"}
                      </p>
                    )}
                  </div>
                  <p class='mt-3 text-sm leading-6 text-gray-600'>
                    Jelaskan Secara Singkat.
                  </p>
                </div>

                <div class='sm:col-span-2'>
                  <label
                    for='about'
                    class='block text-sm font-medium leading-6 text-gray-900'>
                    Bilakah Terakhir kali anda Sakit
                  </label>
                  <div class='mt-2'>
                    <textarea
                      id='about'
                      name='last_sick'
                      rows='3'
                      {...register("last_sick", { required: true })}
                      aria-invalid={errors.last_sick ? "true" : "false"}
                      class='bg-transparent block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'></textarea>
                    {errors.last_sick && (
                      <p className='text-xs text-red-500 mt-1 mx-3 text-right'>
                        {errors.last_sick.message || "tidak boleh kosong"}
                      </p>
                    )}
                  </div>
                  <p class='mt-3 text-sm leading-6 text-gray-600'>
                    Jelaskan Secara Singkat.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class='mt-6 flex items-center justify-end gap-x-6'>
          <button
            type='button'
            class='rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'>
            Prev
          </button>

          <button
            type='button'
            onClick={handleSubmit(submitForm)}
            class={`rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600`}>
            Selanjutnya
          </button>

          {/* // <>
            //   <button
            //     type='button'
            //     class='text-sm font-semibold leading-6 text-gray-900'>
            //     Cancel
            //   </button>
            //   <button
            //     type='submit'
            //     class='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            //     Save
            //   </button>
            // </> */}
        </div>
      </div>
    </section>
  );
};

export default Personal;
