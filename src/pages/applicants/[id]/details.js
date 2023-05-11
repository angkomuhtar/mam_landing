import HeaderTitle from "@/components/HeaderTitle";
import ListData from "@/components/ListData";
import Loader from "@/components/Loader";
import MainTemplate from "@/template/MainTemplate";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useSWR from "swr";

const Details = (req) => {
  const [active, setActive] = useState("personal");
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    process.env.NEXT_PUBLIC_API_URL + "/resume/" + router.query.id,
    fetcher
  );

  const ListData = ({ title, value }) => {
    return (
      <div className='mt-2'>
        <p className='text-tiny font-poppins font-light capitalize'>{title}</p>
        <h2 className='font-semibold text-xs+ uppercase mt-1'>{value}</h2>
      </div>
    );
  };

  const kawin = (data) => {
    switch (data) {
      case "single":
        return "belum kawin";
      case "divorcee":
        return "Janda/duda";
      case "married":
        return "Menikah";
      case "broke":
        return "cerai";
      default:
        return "";
    }
  };
  const tinggal = (data) => {
    switch (data) {
      case "own":
        return "milik sendiri";
      case "parents":
        return "milik orang tua";
      case "office":
        return "milik kantor";
      case "rent":
        return "indekos";
      default:
        return "";
    }
  };

  const kendaraan = (data) => {
    switch (data) {
      case "own":
        return "milik sendiri";
      case "parents":
        return "milik orang tua";
      case "office":
        return "milik kantor";
      default:
        return "";
    }
  };

  const TabButton = ({ onClick, title, active = true }) => {
    return (
      <div
        onClick={onClick}
        className={`py-2 px-4 group cursor-pointer ${
          active && "border-b-[3px] border-b-red-500"
        }`}>
        <label className={`cursor-pointer ${active && "font-semibold"}`}>
          {title}
        </label>
      </div>
    );
  };

  return (
    <MainTemplate
      active='career'
      meta={{
        title: "Details Pendaftar - PT Mitra Abadi Mahakam",
        description: "PT mitra abadi mahakam",
      }}>
      <main>
        <div className='h-20'></div>
        <section className='container mx-auto py-16 m-6 place-content-center place-items-center'>
          {isLoading && <Loader />}
          <div className='grid grid-cols-9 gap-5'>
            <div className='col-span-2'>
              <div className='bg-white shadow-md rounded-md border-gray border py-8 px-6 flex flex-col items-start'>
                {data?.user?.photo ? (
                  <div className='h-40 aspect-square rounded-full relative mx-auto'>
                    <Image
                      className='object-cover rounded-full shadow-md border-2 border-rose-400/40'
                      src={
                        process.env.NEXT_PUBLIC_API_IMAGE + data?.user?.photo
                      }
                      fill={true}
                    />
                  </div>
                ) : (
                  <div className='bg-black/60 h-40 aspect-square rounded-full animate-pulse'></div>
                )}
                <ListData title='Nama' value={data?.user?.nama} />
                <ListData
                  title='posisi yang dilamar'
                  value={data?.user?.position}
                />
                <ListData title='email' value={data?.user?.email} />
                <ListData title='Phone' value={data?.user?.phone} />
              </div>
            </div>
            <div className='col-span-7'>
              <div className='bg-white flex px-2'>
                <TabButton
                  active={active == "personal" ? true : false}
                  onClick={() => {
                    setActive("personal");
                  }}
                  title='Data Pribadi'
                />
                <TabButton
                  active={active == "education" ? true : false}
                  onClick={() => {
                    setActive("education");
                  }}
                  title='Data Pendidikan'
                />
                <TabButton
                  active={active == "family" ? true : false}
                  onClick={() => {
                    setActive("family");
                  }}
                  title='Data Keluarga'
                />
                <TabButton
                  active={active == "experience" ? true : false}
                  onClick={() => {
                    setActive("experience");
                  }}
                  title='Riwayat Pekerjaan'
                />
                <TabButton
                  active={active == "question" ? true : false}
                  onClick={() => {
                    setActive("question");
                  }}
                  title='Pertanyaan lainnya'
                />
              </div>
              <div className='bg-white shadow-md rounded-md border-gray border py-8 px-6 flex flex-col items-start'>
                <div
                  className={`grid grid-cols-8 gap-3 w-full ${
                    active !== "personal" && "hidden"
                  }`}>
                  <div className='col-span-2'>
                    <ListData title='Alamat' value={data?.user?.address} />
                  </div>
                  <div className='col-span-2'>
                    <ListData
                      title='jenis kelamin'
                      value={data?.user?.gender == "M" ? "Laki-Laki" : "Wanita"}
                    />
                  </div>

                  <div className='col-span-2'>
                    <ListData
                      title='Warga Negara'
                      value={data?.user?.citizen}
                    />
                  </div>
                  <div className='col-span-2'>
                    <ListData title='agama' value={data?.user?.religion} />
                  </div>
                  <div className='col-span-2'>
                    <ListData title='Hobby' value={data?.user?.hobby} />
                  </div>
                  <div className='col-span-2'>
                    <ListData title='No KTP' value={data?.user?.id_card} />
                  </div>
                  <div className='col-span-2'>
                    <ListData
                      title='Status Perkawinan'
                      value={kawin(data?.user?.married)}
                    />
                  </div>
                  <div className='col-span-2'>
                    <ListData
                      title='Tempat Tinggal'
                      value={tinggal(data?.user?.residence)}
                    />
                  </div>
                  <div className='col-span-2'>
                    <ListData
                      title='Tempat lahir'
                      value={data?.user?.tempat_lahir}
                    />
                  </div>
                  <div className='col-span-2'>
                    <ListData
                      title='Tanggal lahir'
                      value={moment(data?.user?.tgl_lahir, "YYYY-MM-DD").format(
                        "DD MMMM YYYY"
                      )}
                    />
                  </div>
                  <div className='col-span-2'>
                    <ListData title='Umur' value={data?.user?.tempat_lahir} />
                  </div>
                  <div className='col-span-2'>
                    <ListData
                      title='kendaraan'
                      value={kendaraan(data?.user?.vehicle)}
                    />
                  </div>
                  <div className='col-span-2'>
                    <ListData
                      title='kondisi kesehatan'
                      value={data?.user?.health + " sakit"}
                    />
                  </div>
                  <div className='col-span-2'>
                    <ListData
                      title='pantangan/ kecelakaan berat'
                      value={data?.user?.pantangan}
                    />
                  </div>
                  <div className='col-span-2'>
                    <ListData
                      title='Terakhir sakit'
                      value={data?.user?.last_sick}
                    />
                  </div>
                </div>

                <div
                  className={`grid grid-cols-8 gap-3 w-full ${
                    active !== "education" && "hidden"
                  }`}>
                  <div className='col-span-2'>
                    <ListData title='Alamat' value={data?.user?.address} />
                  </div>
                  <div className='col-span-2'>
                    <ListData
                      title='jenis kelamin'
                      value={data?.user?.gender == "M" ? "Laki-Laki" : "Wanita"}
                    />
                  </div>
                  <div className='col-span-2'>
                    <ListData
                      title='Warga Negara'
                      value={data?.user?.citizen}
                    />
                  </div>
                  <div className='col-span-2'>
                    <ListData title='agama' value={data?.user?.religion} />
                  </div>
                  <div className='col-span-2'>
                    <ListData title='Hobby' value={data?.user?.hobby} />
                  </div>
                  <div className='col-span-2'>
                    <ListData title='No KTP' value={data?.user?.id_card} />
                  </div>
                  <div className='col-span-2'>
                    <ListData
                      title='Status Perkawinan'
                      value={kawin(data?.user?.married)}
                    />
                  </div>
                  <div className='col-span-2'>
                    <ListData
                      title='Tempat Tinggal'
                      value={tinggal(data?.user?.residence)}
                    />
                  </div>
                  <div className='col-span-2'>
                    <ListData
                      title='Tempat lahir'
                      value={data?.user?.tempat_lahir}
                    />
                  </div>
                  <div className='col-span-2'>
                    <ListData
                      title='Tanggal lahir'
                      value={moment(data?.user?.tgl_lahir, "YYYY-MM-DD").format(
                        "DD MMMM YYYY"
                      )}
                    />
                  </div>
                  <div className='col-span-2'>
                    <ListData title='Umur' value={data?.user?.tempat_lahir} />
                  </div>
                  <div className='col-span-2'>
                    <ListData
                      title='kendaraan'
                      value={kendaraan(data?.user?.vehicle)}
                    />
                  </div>
                  <div className='col-span-2'>
                    <ListData
                      title='kondisi kesehatan'
                      value={data?.user?.health + " sakit"}
                    />
                  </div>
                  <div className='col-span-2'>
                    <ListData
                      title='pantangan/ kecelakaan berat'
                      value={data?.user?.pantangan}
                    />
                  </div>
                  <div className='col-span-2'>
                    <ListData
                      title='Terakhir sakit'
                      value={data?.user?.last_sick}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainTemplate>
  );
};

export default Details;
