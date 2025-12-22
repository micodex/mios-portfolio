// data
import { NOTE_LINKS } from "@/data/note";

// image import
import ProfileImg from "@/assets/images/profile.jpg";
import NoteImg from "@/assets/graphic/notes-icon.png";

// style
import * as motion from "motion/react-client";
import { customScrollbar } from "@/lib/scrollbar";

// ui
import ImageSkeleton from "../ui/ImageSkeleton";

const NoteApp = () => {
  return (
    <div
      className={`relative h-full p-6 bg-white/70 backdrop-blur-2xl overflow-y-scroll ${customScrollbar}`}
    >
      {/* note graphic */}
      <div className="absolute w-16 left-100 top-22 rotate-20">
        <ImageSkeleton src={NoteImg} alt="note icon" />
      </div>

      <span className="mb-4 block text-sm text-center text-gray-600">
        Wed, 2025 Dec 10, 1:43 PM
      </span>

      <h2 className="mb-6 font-bold text-2xl">About me</h2>
      <div className="flex gap-12 items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className="w-24 h-24 rounded-full overflow-hidden"
        >
          <ImageSkeleton
            src={ProfileImg}
            alt="profile picture"
            className="select-none opacity-89 w-full"
          />
        </motion.div>

        <div className="flex gap-6">
          {NOTE_LINKS.map(({ icon: Icon, url }) => (
            <motion.a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.8 }}
            >
              {<Icon size={30} />}
            </motion.a>
          ))}
        </div>
      </div>

      <div className="my-4 border-b-3 border-dotted border-gray-500"></div>

      <p className="">
        I&apos;m a self-taught{" "}
        <b className="underline decoration-wavy decoration-yellow-600">
          web developer
        </b>{" "}
        focused on creating clean, fast, and modern web experiences. I enjoy
        turning ideas into functional products with attention to detail.
        <br></br>
        <br></br>I work mainly with <mark>React</mark>, <mark>Next.js</mark>{" "}
        <b>TypeScript</b>, and <b>Tailwind CSS</b> .I love learning new tools
        and improving my craft every day. Currently building real-world projects
        to sharpen my skills.
      </p>
    </div>
  );
};

export default NoteApp;
