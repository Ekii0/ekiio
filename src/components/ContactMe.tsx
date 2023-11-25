import React, { useState } from "react";
import {
  CodeBracketIcon,
  EnvelopeIcon,
  HashtagIcon,
} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../../typings";
import toast, { Toaster } from "react-hot-toast";
import PropagateLoader from "react-spinners/PropagateLoader";

type Props = {
  pageInfo: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = ({ pageInfo }: Props) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/sendMail`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Email sent! I'll get back to you ASAP!", {
            duration: 8000,
            style: {
              background: "green",
              color: "white",
              fontWeight: "bolder",
              fontSize: "17px",
              padding: "20px",
            },
          });
        } else {
          console.error("Email not sent");
          toast.error("Oops... something went wrong!", {
            duration: 8000,
            style: {
              background: "red",
              color: "white",
              fontWeight: "bolder",
              fontSize: "17px",
              padding: "20px",
            },
          });
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div>
        <Toaster position="bottom-center" />
      </div>
      <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Contact
        </h3>

        <div className="mt-20 sm:mt-40 md:mt-0 flex flex-col space-y-10">
          <h4 className="hidden sm:inline-block text-2xl md:text-4xl font-semibold text-center overflow-x-visible">
            I have got just what you need. <br className="md:hidden" />
            <span className="underline decoration-[#F7AB0A]/50">
              Let's talk!
            </span>
          </h4>

          <div className="space-y-2 sm:space-y-10">
            <div className="flex items-center space-x-5 justify-center">
              <HashtagIcon className="text-[#F7AB0A] h-4 w-4 sm:h-7 sm:w-7 animate-pulse" />
              <p className="text-lg sm:text-2xl">{pageInfo?.phoneNumber}</p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-[#F7AB0A] h-4 w-4 sm:h-7 sm:w-7 animate-pulse" />
              <p className="text-lg sm:text-2xl">{pageInfo?.email}</p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <CodeBracketIcon className="text-[#F7AB0A] h-4 w-4 sm:h-7 sm:w-7 animate-pulse" />
              <p className="text-lg sm:text-2xl">{pageInfo?.address}</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 max-w-screen px-2 md:px-0 md:w-fit mx-auto"
          >
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />
            <button
              className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
              type="submit"
            >
              {loading ? (
                <PropagateLoader
                  color="#000000"
                  cssOverride={{ height: "1.25rem" }}
                />
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
