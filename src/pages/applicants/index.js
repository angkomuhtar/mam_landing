import HeaderTitle from "@/components/HeaderTitle";
import ListData from "@/components/ListData";
import MainTemplate from "@/template/MainTemplate";
import Link from "next/link";
import React, { useState } from "react";
import useSWR from "swr";

const Index = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  // const [search, setSearch] = useState("");
  const { data, error, isLoading } = useSWR(
    process.env.NEXT_PUBLIC_API_URL + "/resume",
    fetcher
  );

  console.log(process.env.NEXT_PUBLIC_API_URL);
  return (
    <MainTemplate
      active='career'
      meta={{
        title: "List Pendaftar - PT Mitra Abadi Mahakam",
        description: "PT mitra abadi mahakam",
      }}>
      <main>
        <div className='h-20'></div>

        <section className='container mx-auto py-16 m-6 place-content-center place-items-center'>
          <div className='bg-white border border-gray shadow-md w-full rounded-md grid grid-cols-1 p-6 gap-y-3'>
            <h2 className='capitalize font-poppins font-semibold'>
              list applicants
            </h2>

            {isLoading ? (
              <p>Loading</p>
            ) : data?.data.length > 0 ? (
              data.data.map((e, i) => {
                return (
                  <div
                    key={i}
                    className='grid grid-cols-12 shadow-sm border border-gray rounded-md px-4 py-3 group hover:bg-red-700 hover:scale-105 hover:cursor-default transition-all duration-100  '>
                    <ListData title='nama' value={e.nama} />
                    <ListData title='Posisi' value={e.position} />
                    <ListData col={3} title='email' value={e.email} />
                    <ListData col={3} title='alamat' value={e.address} />
                    <div className='hidden group-hover:flex col-span-2'>
                      <Link href={`applicants/${e.id}/details`}>
                        <button className='py-1 px-4 bg-white rounded-md text-sm font-medium'>
                          Details
                        </button>
                      </Link>
                    </div>
                    <ListData
                      title='telp'
                      value={e.phone}
                      className='group-hover:hidden'
                    />
                  </div>
                );
              })
            ) : (
              <></>
            )}
          </div>
        </section>
      </main>
    </MainTemplate>
  );
};

export default Index;
