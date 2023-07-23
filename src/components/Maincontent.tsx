import DarkmodeButton from '@/components/DarkmodeButton';
import Image from 'next/image';
import { tweet } from '@home/nexttypes';
import { tweets } from '@/assets/tweets';
import { FaRegComment } from 'react-icons/fa';
import { AiOutlineRetweet } from 'react-icons/ai';
import { BiLike } from 'react-icons/bi';
import { IoIosStats } from 'react-icons/io';
import { FiShare } from 'react-icons/fi';

const Maincontent = () => {
  return (
    <div className="w-full flex flex-col relative border-l-[1px] border-r-[1px] border-black/30 dark:border-white/30 transition-all ease-in-out duration-500">
      <div className="flex w-full justify-between sticky top-0 backdrop-blur px-5  py-3 font-bold text-xl z-10">
        <div>Home</div>
        <DarkmodeButton />
      </div>
      {/* whats happening */}
      <div className="flex flex-col gap-2 border-t-[1px] border-b-[1px] border-black/30 dark:border-white/30 p-5">
        <div className="flex gap-4 items-center text-black/30">
          <div className="w-9 h-9 rounded-full bg-slate-200"></div>
          <div>
            <input
              type="text"
              placeholder={`what is happening?!`}
              className="border-b-[1px] border-black/50 dark:border-white/50 dark:placeholder:text-white/50 placeholder:text-black/50 placeholder:text-lg dark:bg-black"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <button className="bg-primary text-whitetextcolor px-3 py-2 rounded-full">
            Tweet
          </button>
        </div>
      </div>
      {/* tweets */}
      {tweets.map((tweet: tweet, index) => (
        <div className="w-full flex p-2 gap-1" key={index}>
          <div className="flex px-1">
            <div className="w-9 h-9 rounded-full bg-slate-200"></div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              <div className="font-semibold">{tweet.name}</div>
              <div>@{tweet.username}</div>
              <div>.</div>
              <div>{tweet.posted}</div>
            </div>
            <div>{tweet.content}</div>
            <div className="bg-slate-600 mt-2 rounded-2xl p-2 mx-3 h-[300px] max-[420px]:h-[200px] flex justify-center relative overflow-hidden">
              <Image
                src={tweet.imageUrl}
                alt="tweet_image"
                fill
                objectFit="contain"
              />
            </div>
            <div className="flex w-full justify-around py-2">
              <div className="flex items-center gap-1">
                <FaRegComment />
                <div>{tweet.comments}</div>
              </div>
              <div className="flex items-center gap-1">
                <BiLike />
                <div>{tweet.likes}</div>
              </div>
              <div className="flex items-center gap-1">
                <AiOutlineRetweet />
                <div>{tweet.retweets}</div>
              </div>
              <div className="flex items-center gap-1">
                <IoIosStats />
                <div>{tweet.stats}</div>
              </div>
              <div className="flex items-center gap-1">
                <FiShare />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Maincontent;
