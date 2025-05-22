import { useEffect, useState } from 'react';

type Feedback = {
  _id: string;
  name: string;
  profileUrl: string;
  location: string;
  feedback: string;
};

export default function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [currentFeedback, setCurrentFeedback] = useState<number>(0);
  const apiUrl = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`${apiUrl}/api/feedbacks`)
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch feedbacks:', err);
        setLoading(false);
      });
  }, []);

  if (feedbacks.length === 0) return null;

  const current = feedbacks[currentFeedback];
  const next = feedbacks[currentFeedback + 1];
  const afterNext = feedbacks[currentFeedback + 2];

  if (loading) {
    return (
      <div className="w-full mt-32 animate-pulse">
        <p className="text-[10px] md:text-xl font-mono opacity-30 tracking-[3px] mb-20">
          OUR CUSTOMERS
        </p>

        <div className="flex items-start gap-6">
          <div className="bg-gray-700 rounded-lg h-40 w-full flex-1" />
          <div className="flex flex-col items-center justify-start gap-3">
            <div className="rounded-full bg-gray-700 size-24" />
            <div className="rounded-full bg-gray-700 size-16 opacity-75" />
            <div className="rounded-full bg-gray-700 size-12 opacity-50" />
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="w-full mt-32 ">
      <p className="text-[10px] md:text-xl font-mono opacity-80 tracking-[3px] mb-20">
        OUR CUSTOMERS
      </p>

      <div
        key={current._id}
        className="flex items-start justify-start gap-2 md:gap-6  "
      >
        <svg
          width="50"
          height="40"
          className='size-4 md:size-6 lg:size-12'
          viewBox="0 0 16 12"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 6V9.4C10 9.96005 10 10.2399 10.109 10.4538C10.2049 10.642 10.3577 10.7952 10.5459 10.8911C10.7596 11 11.0395 11 11.5985 11H13.4015C13.9605 11 14.24 11 14.4537 10.8911C14.6419 10.7952 14.7952 10.6419 14.8911 10.4537C15 10.24 15 9.9605 15 9.40155V7.59846C15 7.0395 15 6.7596 14.8911 6.5459C14.7952 6.35774 14.642 6.20487 14.4538 6.10899C14.2399 6 13.9601 6 13.4 6H10ZM10 6V4C10 2.34315 11.3431 1 13 1M1 6V9.4C1 9.96005 1 10.2399 1.10899 10.4538C1.20487 10.642 1.35774 10.7952 1.5459 10.8911C1.7596 11 2.0395 11 2.59845 11H4.40154C4.9605 11 5.23999 11 5.4537 10.8911C5.64186 10.7952 5.79524 10.6419 5.89111 10.4537C6 10.24 6 9.9605 6 9.40155V7.59846C6 7.0395 6 6.7596 5.89111 6.5459C5.79524 6.35774 5.64196 6.20487 5.45379 6.10899C5.23988 6 4.96005 6 4.4 6H1ZM1 6V4C1 2.34315 2.34315 1 4 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="flex-1">
          <p className="text-[20px] sm:text-[32px] md:text-[37px] lg:text-[48px]  lg:text-5xl opacity-75 mb-6">
            {current.feedback}
          </p>
          <div className="flex items-end justify-between mt-10 md:mt-20">
            <div>
              <p className="text-[11px] md:text-lg opacity-80">{current.name}</p>
              <p className="text-[8px] md:text-base opacity-50">{current.location}</p>
            </div>
            <button
              title="See Next Feedback"
              onClick={() =>
                setCurrentFeedback((prev) =>
                  prev < feedbacks.length - 1 ? prev + 1 : 0
                )
              }
              className="p-2 md:p-4 rounded-full bg-[#333] mr-10 md:mr-32"
            >
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-2 md:size-4"
              >
                <path
                  d="M1 1L5 5L1 9"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start gap-3 ">
          <img
            src={current.profileUrl}
            alt={current.name}
            className="block size-16 md:size-24 rounded-full object-cover"
          />
          {next && (
            <img
              src={next.profileUrl}
              alt={next.name}
              className="block size-12 md:size-16 opacity-75 rounded-full object-cover"
            />
          )}
          {afterNext && (
            <img
              src={afterNext.profileUrl}
              alt={afterNext.name}
              className="block size-10 md:size-12 opacity-35 rounded-full object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
}
