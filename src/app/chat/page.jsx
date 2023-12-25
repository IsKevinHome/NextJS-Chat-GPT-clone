'use client';

export default function Home() {
  return (
    <>
      <div class='grid grid-cols-[260px_auto] h-screen'>
        <div className="bg-neutral-900">side bar</div>
        <div className='bg-neutral-500'>chat window</div>
      </div>
    </>
  );
}
