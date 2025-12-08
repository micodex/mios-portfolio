import { SOCIAL_LINKS } from "@/data/mail";
import { customScrollbar } from "@/lib/scrollbar";
import { Bold, ChevronDown, Italic, Paperclip, Underline } from "lucide-react";

const MailApp = () => {
  return (
    <div className="flex h-full bg-white/70 backdrop-blur-2xl">
      {/* sidebar */}
      <aside className="w-49 pt-3 select-none">
        <h3 className="px-5 mb-1 text-[10px] font-bold text-gray-400 uppercase tracking-wide">
          social
        </h3>
        {/* /social lists */}
        <div className="space-y-0.5 px-2">
          {SOCIAL_LINKS.map(({ label, icon: Icon, url }) => (
            <div key={label}>
              <a
                href={url}
                target={label === "Email" ? "" : "_blank"}
                rel="noopener noreferrer"
                className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-md text-sm transition-colors duration-150 
                ${
                  label === "Email"
                    ? "text-white bg-sky-500"
                    : "text-gray-600 hover:bg-black/5 active:bg-black/10"
                }`}
              >
                <Icon
                  size={16}
                  className={`${
                    label === "Email" ? "text-white" : "text-blue-500"
                  }`}
                />
                <span className="">{label}</span>
              </a>
            </div>
          ))}
        </div>
      </aside>

      {/* main content */}
      <div className="flex-1 flex flex-col bg-white/50">
        {/* header */}
        <div className="px-6 pt-4 pb-2">
          <div className="flex items-center py-1.5 border-b border-gray-200">
            <span className="text-gray-500 w-16 text-sm text-right pr-4 font-medium">
              To:
            </span>
            <div className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-sm flex items-center gap-1">
              <span>Developer</span>
              <ChevronDown size={12} />
            </div>
          </div>

          <div className="flex items-center py-1.5 border-b border-gray-200">
            <span className="text-gray-500 w-16 text-sm text-right pr-4 font-medium">
              Cc:
            </span>
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              className="flex-1 outline-none text-sm text-gray-800 placeholder-gray-400 bg-transparent"
            />
          </div>

          <div className="flex items-center py-1.5 border-b border-gray-200">
            <span className="text-gray-500 w-16 text-sm text-right pr-4 font-medium">
              Subject:
            </span>
            <input
              type="text"
              name="subject"
              placeholder="Project Inquiry"
              className="flex-1 outline-none text-sm font-medium text-gray-800 placeholder-gray-400 bg-transparent"
            />
          </div>

          <div className="flex items-center py-1.5">
            <span className="text-gray-500 w-16 text-sm text-right pr-4 font-medium">
              From:
            </span>
            <span className="text-gray-600 text-sm">"guest@icloud.com"</span>
          </div>
        </div>

        {/* Formatting Bar */}
        <div className="px-6 py-2 bg-white/50 border-b border-gray-200 flex items-center gap-4 text-gray-500">
          <select className="bg-transparent text-xs font-medium outline-none">
            <option>Helvetica</option>
            <option>San Francisco</option>
          </select>
          <div className="h-4 w-[1px] bg-gray-300"></div>
          <Bold size={14} className="cursor-pointer hover:text-black" />
          <Italic size={14} className="cursor-pointer hover:text-black" />
          <Underline size={14} className="cursor-pointer hover:text-black" />
          <div className="h-4 w-1px bg-gray-300"></div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-black">
            <Paperclip size={14} />
            <span className="text-xs">Attach</span>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 p-6 overflow-hidden">
          <textarea
            name="message"
            placeholder="Hi there,&#10;&#10;I'd love to discuss a potential collaboration..."
            className={`w-full h-full resize-none outline-none text-gray-800 text-base leading-relaxed font-sans ${customScrollbar}`}
            spellCheck="false"
          />
        </div>

        {/* Footer Signature */}
        <div className="px-6 pb-6 text-gray-400 text-sm">
          <p>Sent from my Macbook</p>
        </div>
      </div>
    </div>
  );
};

export default MailApp;
