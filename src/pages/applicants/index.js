import HeaderTitle from "@/components/HeaderTitle";
import ListData from "@/components/ListData";
import MainTemplate from "@/template/MainTemplate";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const Index = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const [pageIndex, setPageIndex] = useState(0);
  const [totalRow, setTotalRow] = useState(0);
  const { data, error, isLoading } = useSWR(
    process.env.NEXT_PUBLIC_API_URL + "/resume?pageIndex=" + pageIndex,
    fetcher
  );

  useEffect(() => {
    setTotalRow(data?.totalRow || 0);

    return () => {
      totalRow;
    };
  }, [data]);
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
              <p class='mt-1 text-sm leading-6 text-gray-600 text-center'>
                No data Founds
              </p>
            )}
            <div className='flex justify-end space-x-3 px-4 mt-6'>
              <button
                onClick={() => {
                  if (pageIndex > 0) setPageIndex(pageIndex - 1);
                }}
                type='button'
                className={`py-1 px-5 rounded-md border ${
                  pageIndex > 0 ? "border-red-200" : "text-black/30"
                }  flex space-x-2 items-center font-medium text-xs`}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-3 h-3'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75'
                  />
                </svg>

                <p>next</p>
              </button>
              <button
                type='button'
                onClick={() => {
                  if ((pageIndex + 1) * 10 < totalRow)
                    setPageIndex(pageIndex + 1);
                }}
                className={`py-1 px-5 rounded-md border ${
                  (pageIndex + 1) * 10 < totalRow
                    ? "border-red-200"
                    : "text-black/30"
                }  flex space-x-2 items-center font-medium text-xs`}>
                <p>next</p>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-3 h-3'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>
    </MainTemplate>
  );
};

export default Index;
